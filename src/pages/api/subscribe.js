export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, phone, company, entities, systems, intent, message } = req.body;

    if (!email || !name) {
        return res.status(400).json({ error: "Name and email are required." });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !AUDIENCE_ID) {
        console.error("Missing MAILCHIMP_API_KEY or MAILCHIMP_AUDIENCE_ID in env");
        return res.status(500).json({ error: "Server configuration error." });
    }

    // Extract data center from the API key (the part after the dash)
    const dc = API_KEY.split("-").pop();

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const payload = {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            NAME: name,
            EMAIL: email,
            PHONE: phone || "",
            COMPANY: company,
            ENTITIES: entities || "",
            SYSTEM: systems || "",
            INTENT: intent || "",
            MESSAGE: message || "",
        },
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `apikey ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (response.ok || response.status === 200) {
            return res.status(200).json({ success: true });
        }

        // Mailchimp returns "Member Exists" if already subscribed
        if (data.title === "Member Exists") {
            return res.status(200).json({ success: true, existing: true });
        }

        // Handle validation errors (e.g. fake/invalid email)
        if (data.title === "Invalid Resource") {
            return res.status(400).json({
                error: data.detail || "Invalid email address. Please check and try again.",
            });
        }

        console.error("Mailchimp error:", data);
        return res.status(response.status).json({
            error: data.detail || "Subscription failed. Please try again.",
        });
    } catch (err) {
        console.error("Mailchimp request failed:", err);
        return res.status(500).json({ error: "Unable to reach mailing list service." });
    }
}
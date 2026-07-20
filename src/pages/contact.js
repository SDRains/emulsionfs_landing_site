import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import {analytics} from "@/lib/analytics";
import {useEffect} from "react";

export default function Contact() {
    useEffect(() => {
        analytics.page()
    }, [])

    return (
        <div className="min-h-screen bg-primary-cream text-white">
            <Seo
                title="Book a demo or talk to sales — Emulsion"
                description="A 30-minute walkthrough with a consultant, or a straight answer to your question. Tell us what you're running and we'll show you Emulsion connected to it."
                path="/contact"
            />
            <Navbar activePage='contact' />
            <main>
                <ContactHero />
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}

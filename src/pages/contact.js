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
                {/* Pitch and form side by side, so the form is visible on load. */}
                <section className="bg-primary-cream px-4 pb-24 text-forest-ink lg:pb-32">
                    <div className="mx-auto grid max-w-[1240px] items-start gap-x-18 gap-y-14 px-2 pt-36 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:pt-44">
                        <ContactHero />
                        <ContactForm />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

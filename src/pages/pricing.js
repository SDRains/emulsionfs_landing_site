import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingServices from "@/components/pricing/PricingServices";
import PricingSteps from "@/components/pricing/PricingSteps";

export default function Pricing() {
    return (
        <div className="min-h-screen bg-primary-cream text-white">
            <Seo
                title="Emulsion Pricing — Priced to your environment"
                description="No per-seat games. Tell us what you're running and we'll scope a fixed-fee proposal — platform access, connections, migration, and onboarding."
                path="/pricing"
            />
            <Navbar activePage='pricing' />
            <main>
                <PricingHero />
                <PricingServices />
                <PricingSteps />
            </main>
            <Footer />
        </div>
    )
}
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecurityHero from "@/components/security/SecurityHero";
import SecurityDeployments from "@/components/security/SecurityDeployments";
import SecurityDataFlow from "@/components/security/SecurityDataFlow";
import SecurityOverview from "@/components/security/SecurityOverview";

export default function Security() {
    return (
        <div className="min-h-screen bg-primary-cream text-white">
            <Seo
                title="Emulsion Security — Your financial history, inside your perimeter"
                description="Emulsion reads from your systems, never writes to them, and stores results where your policies require — your infrastructure or a dedicated environment we run for you alone."
                path="/security"
            />
            <Navbar activePage='security' />
            <main>
                <SecurityHero />
                <SecurityDeployments />
                {/*<SecurityDataFlow />*/}
                <SecurityOverview />
            </main>
            <Footer />
        </div>
    )
}
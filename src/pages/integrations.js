import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntegrationsHero from "@/components/integrations/IntegrationsHero";
import IntegrationsPlatforms from "@/components/integrations/IntegrationsPlatforms";
import IntegrationsIngestion from "@/components/integrations/IntegrationsIngestion";
import IntegrationsReports from "@/components/integrations/IntegrationsReports";
import IntegrationsAI from "@/components/integrations/IntegrationsAI";
import IntegrationsCta from "@/components/integrations/IntegrationsCta";
import {analytics} from "@/lib/analytics";
import {useEffect} from "react";

export default function Integrations() {
    useEffect(() => {
        analytics.page()
    }, [])

    return (
        <div className="min-h-screen bg-primary-cream text-white">
            <Seo
                title="Emulsion Integrations — Every system in, every report out"
                description="Connect JD Edwards, Sage Intacct, QuickBooks, NetSuite and legacy systems; deliver board, lender, and investor reports — with optional AI assistants."
                path="/integrations"
            />
            <Navbar activePage='integrations' />
            <main>
                <IntegrationsHero />
                <IntegrationsPlatforms />
                <IntegrationsIngestion />
                <IntegrationsReports />
                <IntegrationsAI />
                <IntegrationsCta />
            </main>
            <Footer />
        </div>
    )
}
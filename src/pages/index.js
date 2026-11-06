import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Outcomes from "@/components/home/Outcomes";
import Convergence from "@/components/home/Convergence";
import MarketFit from "@/components/home/MarketFit";
import Proof from "@/components/home/Proof";
import Environments from "@/components/home/Environments";
import HomeCta from "@/components/home/HomeCta";
import Footer from "@/components/Footer";
import {analytics} from "@/lib/analytics";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        analytics.page()
    }, [])

  return (
    <div className="min-h-screen bg-primary-cream text-white">
      <Seo
        title="Emulsion — All your financial data, one source of truth"
        description="Emulsion unifies JD Edwards, Sage Intacct, QuickBooks, and every platform you've inherited into one searchable, permanent source of truth. One login, live and historical."
        path="/"
      />
      <Navbar activePage='home' tone='dark' />
      <main>
        <Hero />
        <Outcomes />
        <Convergence />
        <MarketFit />
        <Proof />
        <Environments />
        <HomeCta />
      </main>
      <Footer />
    </div>
  );
}
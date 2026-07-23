import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import HostingOptions from "@/components/HostingOptions";
import Audience from "@/components/Audience";
import CaseStudy from "@/components/CaseStudy";
import WhyNow from "@/components/WhyNow";
import WhoItsFor from "@/components/home/WhoItsFor";
import PrivateIntelligence from "@/components/PrivateIntelligence";
import FinalCta from "@/components/FinalCta";
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
      <Navbar activePage='home' />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <HostingOptions />
        {/*<Benefits />*/}
        {/*<Audience />*/}
        <WhoItsFor />
        <CaseStudy />
        {/*<WhyNow />*/}
        <PrivateIntelligence />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
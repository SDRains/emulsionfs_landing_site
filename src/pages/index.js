import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import HowItWorks from "@/components/home/HowItWorks";
import HostingOptions from "@/components/home/HostingOptions";
import Audience from "@/components/home/Audience";
import CaseStudy from "@/components/home/CaseStudy";
import WhyNow from "@/components/home/WhyNow";
import WhoItsFor from "@/components/home/WhoItsFor";
import PrivateIntelligence from "@/components/home/PrivateIntelligence";
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
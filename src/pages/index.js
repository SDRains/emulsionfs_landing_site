import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Audience from "@/components/Audience";
import CaseStudy from "@/components/CaseStudy";
import WhyNow from "@/components/WhyNow";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1a2e] text-white">
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
        {/*<Benefits />*/}
        <Audience />
        <CaseStudy />
        <WhyNow />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

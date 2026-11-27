import React, { Suspense, lazy } from "react";

import Hero from "../components/Hero";
import OurStrength from "../components/OurStrength";
import CountsSection from "../components/CountsSection";
import ServicesSection from "../components/ServiceSection";
import TechSection from "../components/TechSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
const ReasonsWhySection = lazy(() => import("../components/ReasonsWhySection"));
const IndustriesSection = lazy(() => import("../components/IndustriesSection"));
const AwardsSection = lazy(() => import("../components/AwardsSection"));
const ClientSlider = lazy(() => import("../components/ClientSlider"));
const FAQSection = lazy(() => import("../components/FAQ"));

const SectionLoader = () => {
  return (
    <div
      className="
        flex
        min-h-30
        w-full
        items-center
        justify-center
        bg-slate-50
        dark:bg-[#050b14]
      "
      aria-hidden="true"
    >
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#276ea5] animate-bounce dark:bg-[#60a5fa]" />

        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#276ea5]
            animate-bounce
            [animation-delay:150ms]
            dark:bg-[#60a5fa]
          "
        />

        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#276ea5]
            animate-bounce
            [animation-delay:300ms]
            dark:bg-[#60a5fa]
          "
        />
      </div>
    </div>
  );
};

const LazySections = () => {
  return (
    <Suspense fallback={<SectionLoader />}>
      <ReasonsWhySection />
      <IndustriesSection />
      <AwardsSection />
      <ClientSlider />
      <FAQSection />
    </Suspense>
  );
};

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags Start*/}
      <SEO
        title="ShilshaTech | Software Development & AI Solutions"
        description="Shilsha Technologies delivers innovative web development, mobile apps, AI solutions, and custom software to help businesses grow digitally."
        keywords="software development company, development company software, best software development company, software developing company, custom software development company, offshore software development company, software product development company, software development outsourcing company, software development services company, ecommerce software development company, software development startup company, custom software product development company, outsourced software development company, offshore outsourcing software development company, full cycle software development company, custom software application development company, cloud software development company, company software development, software company development, software developers company, software development consulting company, supply chain software development company, software development services companies, startup software development company, custom software development services company"
        canonical="https://www.shilshatech.com/"
      />
      {/* SEO Meta Tags end */}

      <main
        className="
        min-h-screen
        overflow-x-hidden
        bg-slate-50
        text-slate-900
        dark:bg-[#050b14]
        dark:text-white
      "
      >
        <Hero />
        <OurStrength />
        <CountsSection />
        <ServicesSection />
        <TechSection />
        <LazySections />
        <Footer />
      </main>
    </>
  );
};

export default React.memo(Home);

import React, { Suspense, lazy } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
const OurStrength = lazy(() => import("../components/OurStrength"));
const CountsSection = lazy(() => import("../components/CountsSection"));
const ServicesSection = lazy(() => import("../components/ServiceSection"));
const TechSection = lazy(() => import("../components/TechSection"));
const ReasonsWhySection = lazy(() => import("../components/ReasonsWhySection"));
const IndustriesSection = lazy(() => import("../components/IndustriesSection"));
const AwardsSection = lazy(() => import("../components/AwardsSection"));
const ClientSlider = lazy(() => import("../components/ClientSlider"));
const FAQSection = lazy(() => import("../components/FAQ"));

const Home = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={null}>
        <OurStrength />
        <CountsSection />
        <ServicesSection />
        <TechSection />
        <ReasonsWhySection />
        <IndustriesSection />
        <AwardsSection />
        <ClientSlider />
        <FAQSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default React.memo(Home);
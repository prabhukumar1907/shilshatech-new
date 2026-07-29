import React from "react";
import Hero from "../components/Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import TechStack from "./TechStack";
import CTA from "./CTA";
import OurStrength from "../components/OurStrength";
import CountsSection from "../components/CountsSection";
import ServicesSection from "../components/ServiceSection";
import TechSection from "../components/TechSection";
import CTASection from "../components/CTASection";
import ReasonsWhySection from "../components/ReasonsWhySection";
import IndustriesSection from "../components/IndustriesSection";
import AwardsSection from "../components/AwardsSection";
import ClientSlider from "../components/ClientSlider";
import FAQSection from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
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
    </div>
  );
};

export default React.memo(Home);
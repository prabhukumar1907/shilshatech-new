import React from "react";
import { CheckCircle2, Eye, Layers, ArrowRight, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#0284C7", // Sky Blue
  secondary: "#0369A1",
  glow: "#7dd3fc",
};

const ManualTestingServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#0284C7",
    secondaryIndigo: "#0369A1",
    electricCyan: "#7dd3fc",
  };

  const whyChooseItems = [
    {
      title: "Human Intuition & Usability",
      desc: "Evaluate look, feel, user flow, and overall UI/UX quality from a real user perspective.",
    },
    {
      title: "Exploratory Testing Expertise",
      desc: "Uncover complex edge cases and hidden logical defects that automated scripts miss.",
    },
    {
      title: "Rigorous Test Case Design",
      desc: "Create detailed test scenarios mapped precisely to business requirements and user stories.",
    },
    {
      title: "Early Requirement Validation",
      desc: "Review business documents and UI mockups early to catch conceptual flaws before coding begins.",
    },
    {
      title: "Cross-Browser & Device Check",
      desc: "Test visual responsiveness and interactive components across various browsers and physical devices.",
    },
    {
      title: "Detailed Defect Reporting",
      desc: "Provide comprehensive bug reports with clear reproduction steps, logs, and screenshots.",
    },
  ];

  const servicesList = [
    {
      title: "Functional & Acceptance Testing",
      desc: "Verify that application features function correctly according to specified functional requirements.",
    },
    {
      title: "Exploratory & Ad-Hoc Testing",
      desc: "Unscripted, intuitive testing to discover unexpected bugs and system vulnerabilities.",
    },
    {
      title: "UI/UX & Usability Testing",
      desc: "Assess visual alignment, font hierarchies, accessibility compliance, and smooth navigation.",
    },
    {
      title: "Compatibility & Cross-Platform Testing",
      desc: "Test applications across Chrome, Safari, Firefox, Edge, and multiple mobile screen resolutions.",
    },
    {
      title: "Regression & Sanity Testing",
      desc: "Quickly validate minor bug fixes or feature additions to ensure no existing functionality broke.",
    },
    {
      title: "User Acceptance Testing (UAT Support)",
      desc: "Guide stakeholders and end-users through structured acceptance cycles before official launch.",
    },
    {
      title: "Localization & Globalization Testing",
      desc: "Validate multi-language translations, currency formats, and regional date representations.",
    },
    {
      title: "Requirement Traceability Matrix (RTM)",
      desc: "Maintain detailed maps linking every business requirement to its corresponding test case.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#7dd3fc] selection:text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-sky-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{
              background: `linear-gradient(90deg, #0284C7, ${theme.glow})`,
            }}
          />

          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: theme.glow }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300 border border-sky-200 dark:border-sky-500/20 shadow-sm">
                <FileCheck size={20} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Manual Testing & Usability Consulting Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies provides meticulous manual and exploratory
                testing services, combining human intuition with rigorous test
                scenarios for flawless user experiences.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(90deg, #0284C7, ${theme.secondary})`,
                  }}
                >
                  <span>Hire Manual Testers</span>
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="p-10 rounded-2xl border border-slate-100 dark:border-sky-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Eye
                  className="text-[#0284C7] dark:text-[#7dd3fc] transition-transform duration-500 group-hover:scale-110"
                  size={120}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Eye size={20} />,
              title: "UI/UX Insight",
              desc: "Ensure seamless visual alignment, brand adherence, and intuitive user navigation.",
            },
            {
              icon: <Layers size={20} />,
              title: "Exploratory Depth",
              desc: "Uncover unscripted logical bottlenecks and intricate edge-case failures.",
            },
            {
              icon: <CheckCircle2 size={20} />,
              title: "Business Validation",
              desc: "Certify that every application feature aligns perfectly with user acceptance goals.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-sky-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-700 dark:text-sky-300 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-sky-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Intro Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-12 space-y-8">
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-snug"
              style={{ color: brandTheme.primaryBlue }}
            >
              Master User Experience with Expert Manual Testing
            </h2>
            <div
              className="w-full h-1 rounded-full my-6 opacity-40"
              style={{
                background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
              }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-sky-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                While automation is crucial for speed, human oversight remains
                irreplaceable when assessing user experience, visual layouts,
                and unscripted user journeys. Shilsha Technologies offers
                rigorous manual testing protocols to ensure absolute quality
                before your software hits the market.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Get in touch with our manual QA experts today to conduct a
                thorough usability audit of your application!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-sky-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Bridge the Gap Between Code and User Satisfaction
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-sky-500/20 shadow-lg transition-transform duration-300"
            >
              As an expert software development agency, Shilsha Technologies
              ensures that every web and mobile application undergoes meticulous
              manual evaluation to guarantee zero visual regressions and optimal
              functional flow.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-sky-500/20 shadow-lg transition-transform duration-300"
            >
              Contact our testing team today to ensure your software meets the
              highest standards of quality.
            </motion.p>
          </div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default ManualTestingServicesPage;

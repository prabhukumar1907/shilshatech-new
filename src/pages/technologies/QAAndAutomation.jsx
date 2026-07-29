import React from "react";
import { CheckCircle2, ShieldCheck, Cpu, ArrowRight, Bug } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#7C3AED", // Violet
  secondary: "#5B21B6",
  glow: "#c4b5fd",
};

const QaAutomationServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#7C3AED",
    secondaryIndigo: "#5B21B6",
    electricCyan: "#c4b5fd",
  };

  const whyChooseItems = [
    {
      title: "End-to-End Quality Assurance",
      desc: "We cover the entire software lifecycle from requirement analysis to production release monitoring.",
    },
    {
      title: "Reduced Time-to-Market",
      desc: "Accelerate release cycles by up to 60% through intelligent test automation frameworks.",
    },
    {
      title: "Comprehensive Test Coverage",
      desc: "Rigorous functional, performance, security, and usability testing to ensure bulletproof software.",
    },
    {
      title: "Certified QA Engineers",
      desc: "Our testing specialists bring years of domain expertise across fintech, healthcare, and enterprise apps.",
    },
    {
      title: "CI/CD Pipeline Integration",
      desc: "Seamlessly integrate automated test suites into Jenkins, GitHub Actions, and GitLab pipelines.",
    },
    {
      title: "Cost-Effective Defect Prevention",
      desc: "Catch critical bugs early in the development phase to drastically lower post-release maintenance costs.",
    },
  ];

  const servicesList = [
    {
      title: "Full-Cycle Quality Assurance Strategy",
      desc: "Design custom QA roadmaps, test plans, and governance models tailored to your business goals.",
    },
    {
      title: "Automated Regression Testing",
      desc: "Build robust test automation scripts to validate core functionality on every code commit.",
    },
    {
      title: "Manual & Exploratory Testing",
      desc: "Leverage human intuition and user experience testing to uncover complex edge-case defects.",
    },
    {
      title: "Performance & Load Testing",
      desc: "Simulate heavy user traffic using JMeter or k6 to test system responsiveness and breaking points.",
    },
    {
      title: "API & Microservices Testing",
      desc: "Validate RESTful and GraphQL APIs for security, data accuracy, and response time efficiency.",
    },
    {
      title: "Mobile App Testing (iOS & Android)",
      desc: "Ensure seamless cross-device performance, responsiveness, and gesture handling on real devices.",
    },
    {
      title: "Security & Vulnerability Assessment",
      desc: "Identify potential security gaps, OWASP Top 10 vulnerabilities, and authorization flaws.",
    },
    {
      title: "CI/CD Test Automation Setup",
      desc: "Embed continuous testing into your continuous integration workflows for rapid, safe deployments.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#c4b5fd] selection:text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-violet-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{
              background: `linear-gradient(90deg, #7C3AED, ${theme.glow})`,
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
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20 shadow-sm">
                <ShieldCheck size={20} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Enterprise QA & Test Automation Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies delivers rigorous manual and automated
                quality assurance solutions to ensure your software applications
                are secure, scalable, and flawless.
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
                    background: `linear-gradient(90deg, #7C3AED, ${theme.secondary})`,
                  }}
                >
                  <span>Hire QA Experts</span>
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
              <div className="p-10 rounded-2xl border border-slate-100 dark:border-violet-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Bug
                  className="text-[#7C3AED] dark:text-[#c4b5fd] transition-transform duration-500 group-hover:scale-110"
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
              icon: <CheckCircle2 size={20} />,
              title: "Bug-Free Releases",
              desc: "Catch critical defects before deployment with meticulous test execution protocols.",
            },
            {
              icon: <Cpu size={20} />,
              title: "Smart Automation",
              desc: "Speed up delivery cycles using advanced script frameworks and CI/CD integration.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Enterprise Reliability",
              desc: "Guarantee high performance, security compliance, and exceptional user experience.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-violet-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center text-violet-700 dark:text-violet-300 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-violet-600 transition-colors duration-200">
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
              Deliver Flawless Software with Comprehensive QA & Automation
            </h2>
            <div
              className="w-full h-1 rounded-full my-6 opacity-40"
              style={{
                background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
              }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-violet-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                In today's fast-paced digital ecosystem, software quality
                directly dictates user retention and brand reputation. Shilsha
                Technologies offers end-to-end quality assurance services,
                bridging manual testing precision with high-speed test
                automation frameworks.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Partner with our QA specialists today to safeguard your digital
                assets and ensure flawless production rollouts!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-violet-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Ensure Absolute Reliability Across Every Device
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-violet-500/20 shadow-lg transition-transform duration-300"
            >
              As a premier software development partner, Shilsha Technologies
              embeds automated and manual testing methodologies into every
              development lifecycle stage, guaranteeing exceptional reliability
              and performance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-violet-500/20 shadow-lg transition-transform duration-300"
            >
              Contact our testing engineers today to elevate your software
              quality standards.
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

export default QaAutomationServicesPage;

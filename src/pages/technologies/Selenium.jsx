import React from "react";
import { Zap, ShieldCheck, Workflow, ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { SiSelenium } from "react-icons/si";
import { motion } from "framer-motion";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";

const theme = {
  primary: "#43B02A", // Selenium Green
  secondary: "#2E8B1C",
  glow: "#a3e635",
};

const SeleniumServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#43B02A",
    secondaryIndigo: "#2E8B1C",
    electricCyan: "#a3e635",
  };

  const whyChooseItems = [
    {
      title: "Selenium Framework Experts",
      desc: "Our automation engineers specialize in building robust Page Object Model (POM) architectures using Selenium WebDriver.",
    },
    {
      title: "Cross-Browser Compatibility",
      desc: "Execute parallel tests seamlessly across Chrome, Firefox, Safari, Edge, and headless browsers.",
    },
    {
      title: "CI/CD Integration Specialists",
      desc: "Trigger Selenium test suites automatically via Jenkins, GitHub Actions, and Maven/Gradle builds.",
    },
    {
      title: "Advanced Wait Strategies",
      desc: "Implement smart explicit and fluent waits to eliminate flaky tests and synchronization issues.",
    },
    {
      title: "Cloud Grid Execution",
      desc: "Scale test execution across distributed grids like Selenium Grid, BrowserStack, or Sauce Labs.",
    },
    {
      title: "Robust Reporting & Logging",
      desc: "Configure ExtentReports or Allure reports with automated failure screenshots and step logs.",
    },
  ];

  const servicesList = [
    {
      title: "Selenium WebDriver Framework Development",
      desc: "Design clean, modular Java/Python/C# Selenium frameworks using the Page Object Model design pattern.",
    },
    {
      title: "Cross-Browser Test Automation",
      desc: "Validate web applications across multiple browser engines and OS environments simultaneously.",
    },
    {
      title: "Selenium Grid & Parallel Execution",
      desc: "Set up distributed test grids to execute hundreds of test cases concurrently in record time.",
    },
    {
      title: "CI/CD Automated Test Pipelines",
      desc: "Integrate Selenium scripts into continuous integration pipelines for automated regression gating.",
    },
    {
      title: "Dynamic Element Handling & Waits",
      desc: "Resolve complex dynamic DOM elements, AJAX calls, and iframe interactions flawlessly.",
    },
    {
      title: "Migration to Modern Selenium",
      desc: "Upgrade legacy test scripts to the latest Selenium 4 standards and W3C protocol.",
    },
    {
      title: "Data-Driven & Keyword Testing",
      desc: "Implement external data providers (Excel, CSV, Databases) to drive comprehensive test variations.",
    },
    {
      title: "Maintenance & Flaky Test Fixing",
      desc: "Optimize fragile locator strategies and refactor legacy test suites for high reliability.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#a3e635] selection:text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-lime-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{
              background: `linear-gradient(90deg, #43B02A, ${theme.glow})`,
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
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-lime-50 text-lime-800 dark:bg-lime-500/10 dark:text-lime-300 border border-lime-200 dark:border-lime-500/20 shadow-sm">
                <SiSelenium size={22} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Selenium WebDriver Consulting & Test Automation Services in
                India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies delivers enterprise-grade Selenium
                WebDriver automation frameworks, cross-browser test grids, and
                CI/CD testing pipelines.
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
                    background: `linear-gradient(90deg, #43B02A, ${theme.secondary})`,
                  }}
                >
                  <span>Hire Selenium Experts</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-lime-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <SiSelenium
                  className="text-[#43B02A] dark:text-[#a3e635] transition-transform duration-500 group-hover:scale-110"
                  size={130}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Layers size={20} />,
              title: "POM Architecture",
              desc: "Build clean, modular Page Object Model frameworks for high maintainability.",
            },
            {
              icon: <Zap size={20} />,
              title: "Parallel Execution",
              desc: "Run thousands of test scripts concurrently across Selenium Grids and cloud nodes.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "CI/CD Pipeline Ready",
              desc: "Automate test triggers effortlessly on every Git commit via Jenkins or GitHub Actions.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-lime-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-lime-50 dark:bg-lime-500/10 flex items-center justify-center text-lime-800 dark:text-lime-300 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-lime-600 transition-colors duration-200">
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
              Automate Web Applications with Expert Selenium Solutions
            </h2>
            <div
              className="w-full h-1 rounded-full my-6 opacity-40"
              style={{
                background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
              }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-lime-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Selenium remains the industry standard for web browser
                automation. Shilsha Technologies designs advanced Selenium
                WebDriver frameworks that execute high-speed cross-browser
                regression tests, ensuring flawless web application performance
                under any condition.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact our Selenium automation experts today to scale your web
                testing infrastructure!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-lime-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Ensure Cross-Browser Excellence and Stability
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-lime-500/20 shadow-lg transition-transform duration-300"
            >
              As a premier software engineering agency, Shilsha Technologies
              integrates Selenium automation suites into enterprise web
              solutions, guaranteeing absolute stability across all modern
              browsers and devices.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-lime-500/20 shadow-lg transition-transform duration-300"
            >
              Get in touch with our engineers to architect or optimize your
              Selenium test automation framework today.
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

export default SeleniumServicesPage;

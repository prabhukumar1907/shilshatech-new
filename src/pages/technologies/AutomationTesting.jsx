import React from "react";
import { Cpu, Zap, Workflow, ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#059669", // Emerald Green
  secondary: "#047857",
  glow: "#6ee7b7",
};

const AutomationTestingServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#059669",
    secondaryIndigo: "#047857",
    electricCyan: "#6ee7b7",
  };

  const whyChooseItems = [
    {
      title: "Accelerated Release Cycles",
      desc: "Run thousands of test cases in minutes to drastically reduce time-to-market for new features.",
    },
    {
      title: "Custom Automation Frameworks",
      desc: "Architect scalable, maintainable Page Object Model (POM) and keyword-driven test frameworks.",
    },
    {
      title: "Continuous Testing in CI/CD",
      desc: "Integrate automated suites seamlessly into Jenkins, GitLab CI, GitHub Actions, and Bitbucket.",
    },
    {
      title: "High Precision & Zero Human Error",
      desc: "Eliminate repetitive manual errors during regression cycles with bulletproof automation scripts.",
    },
    {
      title: "Cross-Platform Execution",
      desc: "Execute parallel test runs across multiple browsers, operating systems, and cloud device grids.",
    },
    {
      title: "Cost Efficiency at Scale",
      desc: "Significantly lower long-term QA overhead by automating tedious, repetitive test suites.",
    },
  ];

  const servicesList = [
    {
      title: "Test Automation Framework Architecture",
      desc: "Build custom BDD (Cucumber) and TDD frameworks tailored to your technology stack.",
    },
    {
      title: "Automated Regression Testing",
      desc: "Automate core business workflows to validate stability after every code deployment.",
    },
    {
      title: "API & Microservices Automation",
      desc: "Validate REST and GraphQL endpoints automatically using RestAssured, Postman/Newman, or Axios scripts.",
    },
    {
      title: "CI/CD Pipeline Test Integration",
      desc: "Trigger automated test suites instantly on every Git push or pull request.",
    },
    {
      title: "Mobile App Automation Testing",
      desc: "Automate native and hybrid mobile app interactions using Appium or Flutter test drivers.",
    },
    {
      title: "Performance & Load Test Automation",
      desc: "Automate stress testing scripts using JMeter, k6, or Gatling to measure high concurrency loads.",
    },
    {
      title: "Cloud Test Grid Execution",
      desc: "Run parallel cross-browser tests across Sauce Labs, BrowserStack, or Selenium Grid.",
    },
    {
      title: "Script Maintenance & Refactoring",
      desc: "Continuously update and optimize existing automation scripts to match evolving UI elements.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#6ee7b7] selection:text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-emerald-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{
              background: `linear-gradient(90deg, #059669, ${theme.glow})`,
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
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 shadow-sm">
                <Cpu size={20} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Test Automation & CI/CD Engineering Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies builds scalable, high-performance test
                automation frameworks that accelerate release cycles and
                guarantee flawless software stability.
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
                    background: `linear-gradient(90deg, #059669, ${theme.secondary})`,
                  }}
                >
                  <span>Hire Automation Experts</span>
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
              <div className="p-10 rounded-2xl border border-slate-100 dark:border-emerald-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Code2
                  className="text-[#059669] dark:text-[#6ee7b7] transition-transform duration-500 group-hover:scale-110"
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
              icon: <Zap size={20} />,
              title: "Lightning Speed",
              desc: "Execute exhaustive test suites in minutes rather than days to speed up deployments.",
            },
            {
              icon: <Workflow size={20} />,
              title: "CI/CD Integration",
              desc: "Embed continuous automated testing directly into your development pipelines.",
            },
            {
              icon: <Cpu size={20} />,
              title: "Scalable Frameworks",
              desc: "Deploy modular Page Object Model frameworks designed for long-term maintainability.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-emerald-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-700 dark:text-emerald-300 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-200">
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
              Scale Your Development Velocity with Expert Test Automation
            </h2>
            <div
              className="w-full h-1 rounded-full my-6 opacity-40"
              style={{
                background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
              }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-emerald-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Manual testing alone cannot keep pace with modern agile
                deployment cycles. Shilsha Technologies engineers robust test
                automation frameworks that execute continuous validation on
                every code commit, ensuring your software remains secure,
                stable, and high-performing.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Partner with our automation specialists today to transform your
                QA operations and achieve continuous delivery!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Automate with Precision and Confidence
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-emerald-500/20 shadow-lg transition-transform duration-300"
            >
              As a leading software engineering agency, Shilsha Technologies
              embeds automated testing pipelines into every digital solution we
              deliver, empowering businesses to scale effortlessly without
              sacrificing quality.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-emerald-500/20 shadow-lg transition-transform duration-300"
            >
              Contact our automation experts today to architect or optimize your
              test automation strategy.
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

export default AutomationTestingServicesPage;

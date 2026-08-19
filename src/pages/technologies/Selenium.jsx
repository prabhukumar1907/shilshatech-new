import React from "react";
import { Zap, ShieldCheck, Layers, CheckCircle2 } from "lucide-react";
import { SiSelenium } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#43B02A",
  secondary: "#2E8B1C",
  glow: "#a3e635",
};

const SeleniumServicesPage = () => {
  const features = [
    {
      icon: <Layers size={19} />,
      title: "POM Architecture",
      desc: "Build clean, modular Page Object Model frameworks for long-term maintainability.",
    },
    {
      icon: <Zap size={19} />,
      title: "Parallel Execution",
      desc: "Run extensive test suites concurrently across Selenium Grid and cloud environments.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "CI/CD Ready",
      desc: "Integrate automated Selenium testing into modern development and deployment pipelines.",
    },
  ];

  const capabilities = [
    "Selenium WebDriver Framework Development",
    "Cross-Browser Test Automation",
    "Selenium Grid & Parallel Execution",
    "CI/CD Automated Test Pipelines",
    "Dynamic Element Handling & Wait Strategies",
    "Migration to Modern Selenium 4",
    "Data-Driven & Keyword Testing",
    "Maintenance & Flaky Test Optimization",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans overflow-hidden selection:bg-lime-300 selection:text-slate-900">
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className="absolute top-16 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: theme.glow }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-lime-500/10 text-[#43B02A] dark:text-lime-400">
                <SiSelenium size={19} />
              </span>

              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#43B02A] dark:text-lime-400">
                Shilsha Technologies · Selenium Engineering
              </span>
            </div>

            {/* Hero heading */}
            <div className="max-w-5xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Selenium WebDriver{" "}
                <span className="text-[#43B02A] dark:text-lime-400">
                  Test Automation
                </span>{" "}
                Services
              </h1>

              <p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Build reliable browser automation systems with Selenium
                WebDriver, scalable test frameworks, cross-browser execution,
                and continuous CI/CD validation.
              </p>
            </div>

            {/* Accent */}
            <div className="mt-8 flex items-center gap-3">
              <div
                className="h-1 w-20 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                }}
              />
              <div className="h-px flex-1 max-w-md bg-slate-200 dark:bg-slate-800" />
            </div>
          </motion.div>

          {/* Feature row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="relative pl-11"
              >
                <div className="absolute left-0 top-0 w-8 h-8 rounded-lg bg-lime-500/10 text-[#43B02A] dark:text-lime-400 flex items-center justify-center">
                  {feature.icon}
                </div>

                <h3 className="font-bold text-sm sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 border-y border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-14"
          >
            {/* Heading */}
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#43B02A] dark:text-lime-400 mb-3">
                Selenium Automation
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Automate web applications with powerful Selenium solutions
              </h2>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-7">
              <p>
                Selenium remains one of the most widely adopted technologies for
                browser-based test automation. Shilsha Technologies develops
                maintainable WebDriver frameworks designed for functional,
                regression, and cross-browser testing.
              </p>

              <p>
                Our engineers combine Page Object Model architecture, robust
                locator strategies, intelligent wait handling, parallel
                execution, and CI/CD integration to create dependable automation
                pipelines.
              </p>

              <p className="font-medium text-slate-800 dark:text-slate-200">
                The result is faster regression cycles, fewer flaky tests, and
                greater confidence across every release.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#43B02A] dark:text-lime-400 mb-2">
                  What We Deliver
                </p>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Selenium capabilities
                </h2>
              </div>

              <p className="max-w-md text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                From framework architecture to distributed execution, we build
                Selenium automation systems that remain stable as applications
                evolve.
              </p>
            </div>

            {/* Minimal list */}
            <div className="border-t border-slate-200 dark:border-slate-800">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="group flex items-center justify-between gap-5 py-4 border-b border-slate-200 dark:border-slate-800"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#43B02A] dark:text-lime-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-sm sm:text-base font-semibold group-hover:text-[#43B02A] dark:group-hover:text-lime-400 transition-colors">
                      {item}
                    </h3>
                  </div>

                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-slate-300 dark:text-slate-700 group-hover:text-[#43B02A] transition-colors"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-14 bg-lime-500/[0.035] border-y border-lime-500/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start"
          >
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#43B02A] dark:text-lime-400 mb-3">
                Business Impact
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Ensure cross-browser excellence and stability
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
                Shilsha Technologies integrates Selenium automation into
                enterprise web applications to validate functionality across
                browsers, operating systems, and deployment environments.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
                Our approach combines scalable test execution with intelligent
                synchronization, reliable selectors, reusable components, and
                automated reporting to minimize flaky test behavior.
              </p>

              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Cross-browser coverage",
                  "Parallel execution",
                  "Reduced regression time",
                  "CI/CD integration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#43B02A]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SiSelenium
              size={32}
              className="mx-auto mb-4 text-[#43B02A] dark:text-lime-400"
            />

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Build a more reliable Selenium automation pipeline
            </h2>

            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Create maintainable browser automation that scales with your
              application and fits naturally into your development workflow.
            </p>
          </motion.div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default SeleniumServicesPage;

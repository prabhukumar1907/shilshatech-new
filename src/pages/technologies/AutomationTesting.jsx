import React from "react";
import { Cpu, Zap, Workflow, Code2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#059669",
  secondary: "#047857",
  glow: "#6ee7b7",
};

const AutomationTestingServicesPage = () => {
  const features = [
    {
      icon: <Zap size={19} />,
      title: "Lightning Speed",
      desc: "Execute extensive test suites in minutes instead of days.",
    },
    {
      icon: <Workflow size={19} />,
      title: "CI/CD Ready",
      desc: "Integrate continuous testing directly into modern delivery pipelines.",
    },
    {
      icon: <Cpu size={19} />,
      title: "Scalable Frameworks",
      desc: "Build modular automation architecture designed for long-term growth.",
    },
  ];

  const capabilities = [
    "Test Automation Framework Architecture",
    "Automated Regression Testing",
    "API & Microservices Automation",
    "CI/CD Pipeline Test Integration",
    "Mobile App Automation Testing",
    "Performance & Load Test Automation",
    "Cloud Test Grid Execution",
    "Script Maintenance & Refactoring",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans overflow-hidden">
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className="absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
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
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Code2 size={18} />
              </span>

              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-emerald-600 dark:text-emerald-400">
                Shilsha Technologies · QA Engineering
              </span>
            </div>

            {/* Heading */}
            <div className="max-w-5xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Test Automation &{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  CI/CD Engineering
                </span>{" "}
                Services
              </h1>

              <p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Build reliable automation systems that continuously validate
                your software, accelerate releases, and maintain quality at
                every stage of development.
              </p>
            </div>

            {/* Accent line */}
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
                <div className="absolute left-0 top-0 w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400 mb-3">
                Automation Strategy
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Scale development velocity with intelligent automation
              </h2>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-7">
              <p>
                Manual testing alone cannot keep pace with modern agile
                deployment cycles. Shilsha Technologies engineers robust test
                automation frameworks that continuously validate applications on
                every code change.
              </p>

              <p>
                From UI and API automation to performance testing and CI/CD
                integration, our approach creates a reliable quality layer
                across your entire development lifecycle.
              </p>

              <p className="font-medium text-slate-800 dark:text-slate-200">
                The result is faster releases, fewer regressions, and greater
                confidence with every deployment.
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
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400 mb-2">
                  What We Deliver
                </p>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Automation capabilities
                </h2>
              </div>

              <p className="max-w-md text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Purpose-built automation solutions for web, mobile, API,
                performance, and continuous delivery environments.
              </p>
            </div>

            {/* Minimal capability list */}
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
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                      0{index + 1}
                    </span>

                    <h3 className="text-sm sm:text-base font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item}
                    </h3>
                  </div>

                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-slate-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-14 bg-emerald-500/[0.035] border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start"
          >
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400 mb-3">
                Business Impact
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Automate with precision and confidence
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
                As a software engineering partner, Shilsha Technologies embeds
                automated testing into digital products from the beginning,
                allowing teams to detect defects earlier and release features
                faster.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
                Our automation architecture is designed around maintainability,
                parallel execution, reusable components, and seamless CI/CD
                integration—making quality an automated part of delivery rather
                than a final checkpoint.
              </p>

              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Faster regression cycles",
                  "Continuous validation",
                  "Reusable test architecture",
                  "Cross-platform coverage",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
            <Code2 size={30} className="mx-auto mb-4 text-emerald-500" />

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Build a smarter QA pipeline
            </h2>

            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Transform repetitive testing into a dependable engineering process
              with scalable automation, continuous validation, and modern CI/CD
              practices.
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

export default AutomationTestingServicesPage;

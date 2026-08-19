import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Bug,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#7C3AED",
  secondary: "#5B21B6",
  glow: "#c4b5fd",
};

const QaAutomationServicesPage = () => {
  const features = [
    {
      icon: CheckCircle2,
      number: "01",
      title: "Bug-Free Releases",
      desc: "Identify critical defects early with structured testing and continuous validation throughout the development lifecycle.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "Smart Automation",
      desc: "Accelerate regression testing with scalable automation frameworks integrated directly into your CI/CD workflows.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Enterprise Reliability",
      desc: "Validate performance, security, usability, and reliability across applications, devices, and environments.",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans"
      style={{
        "--qa-primary": theme.primary,
        "--qa-secondary": theme.secondary,
        "--qa-glow": theme.glow,
      }}
    >
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20">
        <div
          className="absolute top-0 right-0 w-105 h-105 rounded-full blur-[130px] opacity-20 pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-violet-500" />

                <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-violet-600 dark:text-violet-400">
                  Shilsha Technologies
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-5xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.04em] leading-[0.98]">
                Enterprise QA &{" "}
                <span className="text-violet-600 dark:text-violet-400">
                  Test Automation
                </span>{" "}
                Services
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
                Build software that users can trust. Our QA specialists combine
                intelligent automation, manual testing, performance validation,
                API testing, and security testing to deliver reliable digital
                experiences.
              </p>

              {/* Small stats */}
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <div>
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                    QA
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Quality Engineering
                  </p>
                </div>

                <div className="h-8 w-px bg-slate-300 dark:bg-slate-700" />

                <div>
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                    CI/CD
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Continuous Testing
                  </p>
                </div>

                <div className="h-8 w-px bg-slate-300 dark:bg-slate-700" />

                <div>
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                    E2E
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    End-to-End Coverage
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Outer rings */}
                <div className="absolute inset-0 rounded-full border border-violet-500/20" />
                <div className="absolute inset-6 rounded-full border border-violet-500/20" />
                <div className="absolute inset-12 rounded-full border border-violet-500/20" />

                {/* Glow */}
                <div
                  className="absolute w-40 h-40 rounded-full blur-3xl opacity-30"
                  style={{ background: theme.glow }}
                />

                {/* Icon */}
                <div className="relative">
                  <Bug
                    size={105}
                    strokeWidth={1.4}
                    className="text-violet-600 dark:text-violet-400"
                  />
                </div>

                {/* Floating labels */}
                <div className="absolute top-5 right-3 sm:right-0 px-3 py-2 text-[10px] font-semibold tracking-wide uppercase bg-white/80 dark:bg-[#0b1528]/80 backdrop-blur border border-violet-500/20 text-violet-600 dark:text-violet-400">
                  Automated Testing
                </div>

                <div className="absolute bottom-8 left-0 px-3 py-2 text-[10px] font-semibold tracking-wide uppercase bg-white/80 dark:bg-[#0b1528]/80 backdrop-blur border border-violet-500/20 text-violet-600 dark:text-violet-400">
                  Continuous QA
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="border-y border-slate-200 dark:border-violet-500/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className={`
                    relative py-8 sm:py-10
                    md:px-7
                    ${
                      index !== 0
                        ? "border-t md:border-t-0 md:border-l border-slate-200 dark:border-violet-500/15"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-start justify-between mb-5">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-violet-600 dark:text-violet-400"
                    />

                    <span className="text-xs font-bold tracking-widest text-slate-400 dark:text-slate-600">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 max-w-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-violet-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400">
                  Quality Engineering
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] leading-tight">
                Deliver flawless software with{" "}
                <span className="text-violet-600 dark:text-violet-400">
                  intelligent QA
                </span>
              </h2>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
                In today's fast-moving digital ecosystem, software quality
                directly impacts customer retention, revenue, and brand
                reputation. Shilsha Technologies combines manual precision with
                intelligent automation to create dependable testing strategies.
              </p>

              <p className="text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
                From requirement analysis and functional testing to performance,
                API, security, and end-to-end automation, our QA engineers help
                identify issues earlier and make every release more predictable.
              </p>

              <div className="flex items-center gap-3 pt-2 text-sm font-semibold text-violet-600 dark:text-violet-400">
                <span>Quality built into every release</span>
                <ArrowUpRight size={17} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS / APPROACH
      ========================================================= */}
      <section className="relative py-16 sm:py-20 bg-slate-100/70 dark:bg-[#0b1528]/50 border-y border-slate-200 dark:border-violet-500/15">
        <div
          className="absolute left-0 top-0 w-72 h-72 blur-[120px] opacity-10 pointer-events-none"
          style={{ background: theme.primary }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400">
                Our Approach
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] leading-tight">
                Reliability across{" "}
                <span className="text-violet-600 dark:text-violet-400">
                  every release
                </span>
              </h2>
            </motion.div>

            {/* Content list */}
            <div className="divide-y divide-slate-200 dark:divide-violet-500/15">
              {[
                {
                  title: "Continuous Testing",
                  desc: "Integrate automated validation into development pipelines so issues are discovered before they reach production.",
                },
                {
                  title: "Performance & Scalability",
                  desc: "Simulate real-world traffic and workloads to uncover bottlenecks, resource constraints, and system breaking points.",
                },
                {
                  title: "Security & API Validation",
                  desc: "Test authentication, authorization, API behavior, data integrity, and common application security risks.",
                },
                {
                  title: "Cross-Platform Quality",
                  desc: "Validate web and mobile applications across browsers, operating systems, devices, and real-world user scenarios.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <div className="flex gap-5">
                    <span className="text-xs font-bold text-violet-500 pt-1">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>

                      <p className="mt-2 text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400">
              Shilsha Technologies
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] leading-tight">
              Turn quality assurance into a{" "}
              <span className="text-violet-600 dark:text-violet-400">
                competitive advantage.
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
              Our QA engineering approach helps organizations release faster,
              reduce production defects, improve application reliability, and
              create digital products that users can confidently depend on.
            </p>
          </motion.div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </main>
  );
};

export default QaAutomationServicesPage;

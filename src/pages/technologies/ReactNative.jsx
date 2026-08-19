import React from "react";
import {
  Zap,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#61DAFB",
  secondary: "#21A1F1",
  glow: "#38BDF8",
  dark: "#087EA4",
};

const features = [
  {
    number: "01",
    icon: Zap,
    title: "Single Codebase",
    desc: "Build iOS and Android applications from a shared codebase, reducing development effort while accelerating product delivery.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Native Experience",
    desc: "Create fluid mobile experiences using native components, optimized rendering, and platform-specific capabilities when required.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Scalable Ecosystem",
    desc: "Leverage the React Native ecosystem, reusable packages, APIs, and modern development practices to build production-ready apps.",
  },
];

const benefits = [
  "Custom React Native app development",
  "iOS and Android applications",
  "Cross-platform application migration",
  "REST API and GraphQL integration",
  "Third-party SDK integration",
  "Push notifications and deep linking",
  "App Store and Google Play deployment",
  "Performance optimization",
];

const ReactNativeServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans selection:bg-[#61DAFB] selection:text-slate-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full blur-[140px] opacity-[0.06]"
          style={{ background: theme.primary }}
        />

        <div
          className="absolute top-[55%] -right-60 w-112.5 h-112.5 rounded-full blur-[150px] opacity-[0.035]"
          style={{ background: theme.glow }}
        />

        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <main className="relative z-10 pt-12">
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 sm:pt-24 pb-14 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <FaReact size={21} className="text-[#61DAFB]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EA4] dark:text-[#61DAFB]">
                  React Native Development Services
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[72px] xl:text-[82px] font-black tracking-[-0.055em] leading-[0.95] max-w-5xl">
                One codebase.
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(
                      110deg,
                      ${theme.dark},
                      ${theme.primary}
                    )`,
                  }}
                >
                  Native experiences.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-600 dark:text-slate-400">
                Build modern iOS and Android applications with a React Native
                engineering team focused on performance, scalability,
                maintainability, and exceptional user experiences.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-8">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.dark},
                      ${theme.secondary}
                    )`,
                    boxShadow: "0 12px 30px rgba(33,161,241,0.18)",
                  }}
                >
                  Hire React Native Developers
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#why-react-native"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#087EA4] dark:hover:text-[#61DAFB] transition-colors"
                >
                  Why React Native
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="flex items-center gap-3 mt-7 text-xs text-slate-500">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />

                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                React Native engineering teams available for new projects
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="relative w-57.5 h-57.5 sm:w-70 sm:h-70">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-[#61DAFB]/25"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 34,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-7 rounded-full border border-dashed border-[#61DAFB]/20"
                />

                <div
                  className="absolute inset-13.75 rounded-full blur-[45px] opacity-20"
                  style={{ background: theme.primary }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <FaReact
                    size={140}
                    className="text-[#61DAFB] drop-shadow-[0_0_35px_rgba(97,218,251,0.25)]"
                  />
                </div>

                <span className="absolute top-2 right-0 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  React Native
                </span>

                <span className="absolute bottom-5 left-0 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  iOS • Android • Mobile
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="
                      py-8
                      md:px-7
                      first:md:pl-0
                      last:md:pr-0
                      border-b md:border-b-0
                      md:border-r last:border-r-0
                      border-slate-200
                      dark:border-white/[0.07]
                    "
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-[#087EA4] dark:text-[#61DAFB]">
                        {feature.number}
                      </span>

                      <Icon
                        size={19}
                        className="text-[#087EA4] dark:text-[#61DAFB]"
                      />
                    </div>

                    <h3 className="text-lg font-bold">{feature.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="why-react-native"
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EA4] dark:text-[#61DAFB]">
                Why React Native
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Build once.
                <span className="block text-slate-400 dark:text-slate-600">
                  Reach everywhere.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="border-l-2 border-[#61DAFB]/50 pl-6 sm:pl-8 space-y-6">
                <p className="text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300">
                  Looking to launch a mobile application across iOS and Android
                  without maintaining completely separate application codebases?
                  Our React Native development team creates scalable
                  cross-platform products around your business requirements.
                </p>

                <p className="text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                  From consumer applications and enterprise mobility solutions
                  to APIs, payment integrations, notifications, and device
                  features, we build mobile experiences designed for performance
                  and long-term growth.
                </p>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 font-bold text-[#087EA4] dark:text-[#61DAFB] hover:gap-4 transition-all"
                >
                  Discuss your mobile project
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-10 mb-12">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EA4] dark:text-[#61DAFB]">
                  React Native Capabilities
                </span>

                <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
                  One technology.
                  <span className="block text-slate-400 dark:text-slate-600">
                    Multiple platforms.
                  </span>
                </h2>
              </div>

              <p className="lg:col-span-6 lg:col-start-7 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                React Native provides a flexible foundation for mobile
                applications that need a consistent experience across iOS and
                Android while keeping development and maintenance efficient.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-slate-200 dark:border-white/8">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="
                    flex items-center gap-3
                    py-5
                    border-b border-slate-200
                    dark:border-white/8
                    sm:px-5
                    first:sm:pl-0
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#087EA4] dark:text-[#61DAFB] shrink-0"
                  />

                  <span className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EA4] dark:text-[#61DAFB]">
                Business Advantage
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                One investment.
                <span className="block text-slate-400 dark:text-slate-600">
                  Multiple platforms.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="space-y-6">
                <p className="text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
                  As a React Native Development Company in India, we help
                  businesses reduce duplicated development effort by sharing
                  application logic across mobile platforms while still
                  supporting platform-specific experiences where needed.
                </p>

                <p className="text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                  Our React Native applications are designed to evolve with your
                  business, allowing new features, integrations, and platform
                  requirements to be introduced without rebuilding the entire
                  product from scratch.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/8">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#087EA4] dark:text-[#61DAFB]"
                >
                  Build with React Native
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
            <div className="relative text-center">
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-20 w-72 h-72 rounded-full blur-[100px] opacity-[0.08]"
                style={{ background: theme.primary }}
              />

              <FaReact
                size={42}
                className="relative mx-auto text-[#61DAFB] mb-6"
              />

              <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-[#087EA4] dark:text-[#61DAFB]">
                Start your next mobile project
              </p>

              <h2 className="relative mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl mx-auto">
                Ready to build something
                <span className="text-[#21A1F1]"> mobile-first?</span>
              </h2>

              <p className="relative max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                Let's turn your product vision into a fast, scalable, and
                engaging React Native application for iOS and Android.
              </p>

              <div className="mt-7">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-sm font-bold transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.dark},
                      ${theme.secondary}
                    )`,
                  }}
                >
                  Talk to React Native Experts
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default ReactNativeServicesPage;

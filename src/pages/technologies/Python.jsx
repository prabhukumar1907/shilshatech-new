import React from "react";
import {
  Zap,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  pythonBlue: "#3776AB",
  pythonDarkBlue: "#306998",
  pythonYellow: "#FFD43B",
  pythonGold: "#FFE873",
};

const features = [
  {
    number: "01",
    icon: Zap,
    title: "Rapid Development",
    desc: "Leverage Python's clean syntax and extensive ecosystem to build, test, and launch software products faster.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "AI & Data Ready",
    desc: "Integrate machine learning, data analytics, automation, and intelligent workflows directly into your applications.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Secure & Scalable",
    desc: "Build dependable enterprise backends using proven frameworks such as Django and FastAPI with scalable architecture.",
  },
];

const benefits = [
  "Rapid application development",
  "Django and FastAPI expertise",
  "AI and machine learning integration",
  "Scalable backend architecture",
  "Data engineering and automation",
  "Cloud-ready Python applications",
];

const PythonServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans selection:bg-[#3776AB] selection:text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-140 h-90 rounded-full blur-[140px] opacity-[0.07]"
          style={{ background: theme.pythonBlue }}
        />

        <div
          className="absolute top-[55%] -right-60 w-105 h-105 rounded-full blur-[150px] opacity-[0.035]"
          style={{ background: theme.pythonYellow }}
        />

        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <main className="relative z-10 pt-12">
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 sm:pt-18 pb-12 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <FaPython size={20} style={{ color: theme.pythonBlue }} />

                <span
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: theme.pythonBlue }}
                >
                  Python Development Services
                </span>

                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: theme.pythonYellow }}
                />
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[70px] xl:text-[80px] font-black tracking-[-0.055em] leading-[0.95] max-w-5xl">
                Powerful software.
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(
                      110deg,
                      ${theme.pythonBlue} 0%,
                      ${theme.pythonBlue} 55%,
                      ${theme.pythonYellow} 100%
                    )`,
                  }}
                >
                  Built with Python.
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-600 dark:text-slate-400">
                Build scalable web applications, intelligent platforms, robust
                backends, and AI-driven solutions with a Python engineering team
                focused on performance, reliability, and long-term growth.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-7">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-white text-sm font-bold transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.pythonBlue},
                      ${theme.pythonDarkBlue}
                    )`,
                    boxShadow: "0 10px 25px rgba(55,118,171,0.18)",
                  }}
                >
                  Hire Python Developers
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#why-python"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors hover:text-[#3776AB] dark:hover:text-[#FFD43B]"
                >
                  Why Python
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="flex items-center gap-3 mt-6 text-xs text-slate-500">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-50 animate-ping"
                    style={{ background: theme.pythonYellow }}
                  />

                  <span
                    className="relative inline-flex rounded-full h-2.5 w-2.5"
                    style={{ background: theme.pythonYellow }}
                  />
                </span>
                Python engineering teams available for new projects
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="relative w-52.5 h-52.5 sm:w-65 sm:h-65">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border"
                  style={{
                    borderColor: `${theme.pythonBlue}35`,
                  }}
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 34,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-7 rounded-full border border-dashed"
                  style={{
                    borderColor: `${theme.pythonYellow}55`,
                  }}
                />

                <div
                  className="absolute inset-12.5 rounded-full blur-[45px] opacity-20"
                  style={{ background: theme.pythonBlue }}
                />

                <div
                  className="absolute inset-18.75 rounded-full blur-[30px] opacity-20"
                  style={{ background: theme.pythonYellow }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPython
                    size={130}
                    className="drop-shadow-[0_0_30px_rgba(55,118,171,0.25)]"
                    style={{
                      color: theme.pythonBlue,
                    }}
                  />
                </div>

                <span
                  className="absolute top-1 right-0 text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: `${theme.pythonBlue}aa` }}
                >
                  Python
                </span>

                <span
                  className="absolute bottom-4 left-0 text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: `${theme.pythonYellow}cc` }}
                >
                  AI • Web • Data
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
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      py-7 sm:py-8
                      md:px-7
                      first:md:pl-0
                      last:md:pr-0
                      border-b md:border-b-0
                      md:border-r last:border-r-0
                      border-slate-200
                      dark:border-white/[0.07]
                    `}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-mono font-bold"
                        style={{ color: theme.pythonBlue }}
                      >
                        {feature.number}
                      </span>

                      <Icon size={18} style={{ color: theme.pythonYellow }} />
                    </div>

                    <h3 className="text-lg font-bold">{feature.title}</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="why-python"
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-18"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: theme.pythonBlue }}
              >
                Why Python
              </span>

              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Build smarter.
                <span className="block text-slate-400 dark:text-slate-600">
                  Scale faster.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div
                className="border-l-2 pl-6 sm:pl-8 space-y-5"
                style={{ borderColor: `${theme.pythonYellow}aa` }}
              >
                <p className="text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300">
                  Are you looking to leverage Python's versatility and AI
                  capabilities for your digital products? Our Python development
                  team builds dynamic, secure, and intelligent applications
                  around your business requirements.
                </p>

                <p className="text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                  From Django and FastAPI backends to data engineering,
                  automation, and AI integrations, we create software that is
                  easier to develop, maintain, and scale.
                </p>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 font-bold transition-all hover:gap-4"
                  style={{ color: theme.pythonBlue }}
                >
                  Discuss your Python project
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-18">
            <div className="grid lg:grid-cols-12 gap-8 mb-10">
              <div className="lg:col-span-5">
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: theme.pythonBlue }}
                >
                  Python Capabilities
                </span>

                <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
                  One ecosystem.
                  <span className="block text-slate-400 dark:text-slate-600">
                    Many possibilities.
                  </span>
                </h2>
              </div>

              <p className="lg:col-span-6 lg:col-start-7 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                Python gives modern businesses a flexible foundation for web
                development, artificial intelligence, automation, data
                engineering, and cloud-native applications.
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
                  className="flex items-center gap-3 py-4 border-b border-slate-200 dark:border-white/8 sm:px-5 first:sm:pl-0"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0"
                    style={{ color: theme.pythonYellow }}
                  />

                  <span className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-18">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: theme.pythonBlue }}
              >
                Business Advantage
              </span>

              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Technology that
                <span className="block text-slate-400 dark:text-slate-600">
                  evolves with you.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="space-y-5">
                <p className="text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
                  As a Python Development Company in India, we deliver versatile
                  solutions across web backends, data science, automation, and
                  artificial intelligence. Python's readable architecture helps
                  teams move quickly without compromising maintainability.
                </p>

                <p className="text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                  By partnering with our Python development team, you gain a
                  high-performing technology foundation capable of adapting to
                  evolving market demands, increasing traffic, and expanding
                  product requirements.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/8">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-2 text-sm font-bold transition-colors"
                  style={{ color: theme.pythonBlue }}
                >
                  Build with Python
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
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-18">
            <div className="relative text-center">
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-16 w-64 h-64 rounded-full blur-[100px] opacity-[0.07]"
                style={{ background: theme.pythonBlue }}
              />

              <div className="relative flex justify-center items-center gap-2 mb-5">
                <FaPython size={34} style={{ color: theme.pythonBlue }} />

                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: theme.pythonYellow }}
                />
              </div>

              <p
                className="relative text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: theme.pythonBlue }}
              >
                Start your next project
              </p>

              <h2 className="relative mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl mx-auto">
                Ready to build something
                <span className="ml-2" style={{ color: theme.pythonYellow }}>
                  powerful?
                </span>
              </h2>

              <p className="relative max-w-2xl mx-auto mt-5 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                Let's turn your product vision into a scalable, intelligent, and
                high-performance Python application.
              </p>

              <div className="mt-6">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-7 py-3 rounded-full text-white text-sm font-bold transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.pythonBlue},
                      ${theme.pythonDarkBlue}
                    )`,
                  }}
                >
                  Talk to Python Experts
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

export default PythonServicesPage;

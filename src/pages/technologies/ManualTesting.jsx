import React from "react";
import {
  CheckCircle2,
  Eye,
  Layers,
  FileCheck,
  ArrowUpRight,
} from "lucide-react";
import { SiTestinglibrary } from "react-icons/si";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#0284C7",
  secondary: "#0369A1",
  glow: "#7dd3fc",
};

const ManualTestingServicesPage = () => {
  const features = [
    {
      number: "01",
      icon: Eye,
      title: "UI / UX Insight",
      desc: "Evaluate visual consistency, navigation, accessibility, and real-world user journeys.",
    },
    {
      number: "02",
      icon: Layers,
      title: "Exploratory Depth",
      desc: "Discover unexpected defects, edge cases, and workflow issues that scripted tests can miss.",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Business Validation",
      desc: "Validate application behavior against requirements, user stories, and acceptance criteria.",
    },
  ];

  const testingAreas = [
    {
      title: "Functional Testing",
      desc: "Validate application functionality against business and technical requirements.",
    },
    {
      title: "Exploratory Testing",
      desc: "Use unscripted testing techniques to uncover unexpected behaviors and edge cases.",
    },
    {
      title: "UI / UX Testing",
      desc: "Evaluate layouts, navigation, responsiveness, accessibility, and overall usability.",
    },
    {
      title: "Compatibility Testing",
      desc: "Verify consistent experiences across browsers, operating systems, devices, and screen sizes.",
    },
    {
      title: "Regression Testing",
      desc: "Ensure new releases and fixes do not negatively affect existing functionality.",
    },
    {
      title: "User Acceptance Testing",
      desc: "Support structured UAT cycles to ensure products meet real business expectations.",
    },
    {
      title: "Localization Testing",
      desc: "Validate language, currency, date, time, formatting, and regional behavior.",
    },
    {
      title: "Requirement Traceability",
      desc: "Connect business requirements with detailed scenarios and measurable test coverage.",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300"
      style={{
        "--brand": theme.primary,
        "--brand-dark": theme.secondary,
        "--brand-glow": theme.glow,
      }}
    >
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div
          className="absolute top-0 right-0 w-105 h-105 rounded-full blur-[120px] opacity-[0.08] pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-9 h-0.5"
                  style={{ backgroundColor: theme.primary }}
                />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
                  Quality Engineering
                </span>
              </div>

              <h1 className="max-w-5xl text-4xl sm:text-5xl lg:text-[4.2rem] font-black tracking-[-0.04em] leading-[1.02]">
                Manual Testing That{" "}
                <span className="text-sky-600 dark:text-sky-400">
                  Thinks Like Your Users
                </span>
              </h1>

              <p className="max-w-2xl mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-8">
                Shilsha Technologies provides meticulous manual and exploratory
                testing services that combine human intuition, structured
                validation, and real-world user behavior to create reliable
                digital experiences.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-sky-100 dark:bg-sky-500/10">
                  <FileCheck
                    size={20}
                    className="text-sky-600 dark:text-sky-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Human-led quality assurance
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Functional · Exploratory · Usability · Compatibility
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative w-64 h-64">
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-full border"
                  style={{ borderColor: `${theme.primary}30` }}
                />

                <div
                  className="absolute inset-8 rounded-full border"
                  style={{ borderColor: `${theme.primary}20` }}
                />

                {/* Glow */}
                <div
                  className="absolute inset-14 rounded-full blur-3xl opacity-20"
                  style={{ background: theme.glow }}
                />

                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    }}
                  >
                    <Eye size={48} className="text-white" />
                  </div>
                </div>

                {/* Floating labels */}
                <span className="absolute top-4 right-0 text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  UX
                </span>

                <span className="absolute bottom-8 left-0 text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  QA
                </span>

                <span className="absolute top-1/2 -right-8 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  TEST
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="py-7 md:px-8 first:md:pl-0 last:md:pr-0"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <span className="text-xs font-bold text-sky-500">
                        {feature.number}
                      </span>
                    </div>

                    <div>
                      <Icon
                        size={19}
                        className="text-sky-600 dark:text-sky-400 mb-3"
                      />

                      <h3 className="text-base font-bold">{feature.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
                Manual Quality Assurance
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Master the details automation cannot see.
              </h2>
            </div>

            <div className="space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-8">
              <p>
                Automation provides speed and repeatability, but human judgment
                remains essential when evaluating usability, visual consistency,
                unexpected workflows, and real-world behavior.
              </p>

              <p>
                Shilsha Technologies combines structured manual testing with
                exploratory techniques to identify defects that traditional
                scripted testing can overlook.
              </p>

              <div
                className="pt-5 border-t"
                style={{ borderColor: `${theme.primary}30` }}
              >
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                  Built around real users, real workflows, and real product
                  expectations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-[#0a1220] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
              What We Test
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Complete coverage across the product experience
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-7">
              From first interaction to final release, our testing process
              examines every critical layer of your digital product.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12">
            {testingAreas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group flex gap-4 py-5 border-t border-slate-200 dark:border-slate-800"
              >
                <span className="mt-1 text-sky-500">
                  <CheckCircle2 size={17} />
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-sm sm:text-base group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-sky-500"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
                Product Confidence
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Bridge the gap between code and user satisfaction.
              </h2>
            </div>

            <div>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-8">
                Every application behaves differently in the hands of real
                users. Our manual QA specialists examine those interactions
                carefully to uncover functional defects, usability problems,
                inconsistent experiences, and scenarios that automated workflows
                may not anticipate.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-sky-500" />
                  Real-user validation
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-sky-500" />
                  Cross-platform testing
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-sky-500" />
                  Detailed defect analysis
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </main>
  );
};

export default ManualTestingServicesPage;

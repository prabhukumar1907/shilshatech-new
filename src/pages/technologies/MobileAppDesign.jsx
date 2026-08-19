import React from "react";
import {
  Smartphone,
  Layers,
  Zap,
  ArrowRight,
  Tablet,
  Sparkles,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#10B981",
  secondary: "#047857",
  glow: "#6ee7b7",
};

const features = [
  {
    number: "01",
    icon: Smartphone,
    title: "iOS & Android",
    description:
      "Platform-aware interfaces designed around native interaction patterns and familiar user behavior.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Interactive Prototypes",
    description:
      "Experience real navigation, gestures, transitions, and interactions before development starts.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Scalable Design Systems",
    description:
      "Reusable components and patterns that keep your product consistent as it evolves.",
  },
];

const capabilities = [
  "User research & journey mapping",
  "Information architecture",
  "Wireframes & interactive prototypes",
  "iOS & Android UI design",
  "Design systems & component libraries",
  "Usability optimization",
];

const MobileAppDesignServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#070d18] text-slate-900 dark:text-white font-sans overflow-hidden selection:bg-emerald-200 selection:text-emerald-950">
      <section className="relative pt-24 sm:pt-28">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #10B981 1px, transparent 1px),
              linear-gradient(to bottom, #10B981 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow */}
        <div
          className="absolute top-10 right-[8%] w-105 h-105 rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-16 min-h-155 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-500">
                  <Sparkles size={14} />
                </span>

                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400">
                  Mobile Product Design
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-black tracking-[-0.055em] leading-[0.94] max-w-4xl">
                Design apps
                <br />
                people{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                  }}
                >
                  love to use.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm sm:text-base lg:text-lg leading-7 text-slate-600 dark:text-slate-400">
                Shilsha Technologies creates high-performance mobile experiences
                for iOS and Android — combining intuitive UX, beautiful
                interfaces, and scalable design systems.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold transition-all hover:-translate-y-0.5"
                >
                  Start a Design Project
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <span className="text-xs text-slate-400">
                  UX Strategy · UI Design · Prototyping
                </span>
              </div>

              {/* Trust line */}
              <div className="mt-10 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                <div className="flex -space-x-2">
                  {["A", "D", "M", "S"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#f8fafc] dark:border-[#070d18] bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-[10px] font-bold text-emerald-700 dark:text-emerald-300"
                    >
                      {letter}
                    </div>
                  ))}
                </div>

                <span>Designed for modern digital products</span>
              </div>
            </motion.div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-70 sm:w-82.5 h-107.5 sm:h-125">
                {/* Glow */}
                <div
                  className="absolute inset-10 rounded-full blur-[90px] opacity-25"
                  style={{ background: theme.glow }}
                />

                {/* Main phone */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute z-20 left-1/2 -translate-x-1/2 top-5 w-52.5 sm:w-58.75 h-102.5 sm:h-113.75 rounded-[34px] border-[7px] border-slate-900 dark:border-slate-700 bg-white dark:bg-[#0c1728] shadow-2xl overflow-hidden"
                >
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 dark:bg-black rounded-full z-20" />

                  {/* UI */}
                  <div className="h-full pt-12 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="w-14 h-2 rounded-full bg-slate-200 dark:bg-white/10" />
                        <div className="mt-2 w-24 h-3 rounded-full bg-slate-800 dark:bg-white/80" />
                      </div>

                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20" />
                    </div>

                    <div className="mt-8 h-32 rounded-2xl bg-linear-to-br from-emerald-400 to-emerald-700 p-4">
                      <div className="w-16 h-2 rounded-full bg-white/40" />

                      <div className="mt-5 w-28 h-5 rounded-full bg-white" />

                      <div className="mt-2 w-20 h-2 rounded-full bg-white/40" />
                    </div>

                    <div className="mt-5 flex gap-3">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="flex-1 h-20 rounded-xl bg-slate-100 dark:bg-white/5"
                        />
                      ))}
                    </div>

                    <div className="mt-5 space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-500/10" />
                          <div className="flex-1">
                            <div className="w-20 h-2 rounded bg-slate-300 dark:bg-white/10" />
                            <div className="mt-2 w-28 h-1.5 rounded bg-slate-200 dark:bg-white/5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Back device */}
                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [8, 7, 8] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-0 top-16 w-42.5 h-85 rounded-[28px] border border-emerald-400/20 bg-emerald-50/60 dark:bg-emerald-500/4 -rotate-6"
                />

                {/* Floating icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute z-30 -left-3 sm:-left-8 top-32 w-14 h-14 rounded-2xl bg-white dark:bg-[#101c2e] border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-center"
                >
                  <Smartphone size={23} className="text-emerald-500" />
                </motion.div>

                {/* Floating check */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute z-30 -right-3 sm:-right-5 bottom-24 px-4 py-3 rounded-xl bg-white dark:bg-[#101c2e] border border-slate-200 dark:border-white/10 shadow-xl flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Check size={13} className="text-white" />
                  </div>

                  <span className="text-xs font-semibold">UX Optimized</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/1.5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  className="py-7 md:px-8 first:pl-0 last:pr-0"
                >
                  <div className="flex justify-between items-start">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="text-emerald-500"
                    />

                    <span className="text-[10px] font-bold text-slate-300 dark:text-slate-700">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-bold">{feature.title}</h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid lg:grid-cols-[.7fr_1.3fr] gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-500">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
              Make complex products feel effortless.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300">
              Mobile applications succeed when users don't have to think about
              how to use them.
            </p>

            <p className="mt-5 text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
              Shilsha Technologies combines product strategy, UX research,
              interaction design, and visual systems to create mobile
              experiences that feel natural from the first tap.
            </p>

            <Link
              to="/contact-us"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400"
            >
              Explore your product idea
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-12 lg:gap-24">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-500">
                Capabilities
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                Everything your app needs to stand out.
              </h2>

              <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-md">
                From initial discovery to developer-ready interfaces, our design
                process connects every part of the product experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 border-t border-slate-200 dark:border-white/10">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="flex items-center gap-4 py-5 border-b border-slate-200 dark:border-white/10 sm:odd:border-r sm:px-5 first:pl-0"
                >
                  <div className="w-7 h-7 shrink-0 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Check size={13} className="text-emerald-500" />
                  </div>

                  <span className="text-sm font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-500">
            Designed for Results
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-none">
            Beautiful interfaces are only the beginning.
          </h2>

          <p className="mt-7 max-w-2xl text-base sm:text-lg leading-7 text-slate-500 dark:text-slate-400">
            We focus on what happens after the screen looks beautiful:
            discoverability, accessibility, conversion, retention, and long-term
            usability.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {[
            {
              value: "01",
              title: "Clarity",
              text: "Users instantly understand where they are and what to do next.",
            },
            {
              value: "02",
              title: "Consistency",
              text: "Reusable design patterns create a familiar experience throughout the app.",
            },
            {
              value: "03",
              title: "Conversion",
              text: "Every important interaction is designed to reduce friction and drive action.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className="border-t border-slate-200 dark:border-white/10 pt-5"
            >
              <span className="text-xs font-bold text-emerald-500">
                {item.value}
              </span>

              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden border-t border-b border-emerald-500/20 py-10"
        >
          <div
            className="absolute top-0 left-0 w-28 h-px"
            style={{
              background: `linear-gradient(90deg, ${theme.primary}, transparent)`,
            }}
          />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-emerald-500">
                Start Something Great
              </span>

              <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
                Have an app idea?
              </h2>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Let's turn it into an experience people remember.
              </p>
            </div>

            <Link
              to="/contact-us"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold transition-all hover:-translate-y-0.5"
            >
              Talk to Our Designers
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default MobileAppDesignServicesPage;

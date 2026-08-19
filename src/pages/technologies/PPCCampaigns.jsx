import React from "react";
import {
  Target,
  DollarSign,
  Zap,
  PieChart,
  BarChart3,
  MousePointerClick,
} from "lucide-react";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#10B981",
  secondary: "#047857",
  glow: "#6ee7b7",
};

const PpcCampaignsPage = () => {
  const features = [
    {
      number: "01",
      icon: Target,
      title: "Google Ads & Meta Ads",
      desc: "Precision-targeted search, display, and social campaigns built around high-intent audiences and measurable acquisition goals.",
    },
    {
      number: "02",
      icon: DollarSign,
      title: "Ad Spend Optimization",
      desc: "Continuous campaign refinement, bidding optimization, and audience analysis to reduce wasted spend and improve efficiency.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Conversion-Focused Experiences",
      desc: "Landing pages and ad journeys designed to create a seamless path from first click to qualified conversion.",
    },
  ];

  const capabilities = [
    "Google Search & Display Advertising",
    "Meta & Social Advertising",
    "Keyword & Audience Research",
    "Conversion Rate Optimization",
    "Remarketing & Retargeting",
    "Campaign Analytics & Reporting",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans overflow-hidden selection:bg-emerald-200 selection:text-slate-900">

 
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div
          className="absolute -top-32 -right-30 w-125 h-125 rounded-full blur-[140px] opacity-[0.10] pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div
          className="absolute top-[35%] -left-45 w-95 h-95 rounded-full blur-[130px] opacity-[0.06] pointer-events-none"
          style={{ background: theme.primary }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-20 items-center">

            {/* Hero Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-8 h-px"
                  style={{ background: theme.primary }}
                />

                <span
                  className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: theme.primary }}
                >
                  Performance Marketing
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-4xl text-[2.8rem] sm:text-5xl lg:text-[4.7rem] font-black tracking-[-0.055em] leading-[0.98]">
                Paid campaigns built for{" "}
                <span
                  className="relative"
                  style={{ color: theme.primary }}
                >
                  measurable growth.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-7 text-slate-600 dark:text-slate-300">
                Shilsha Technologies creates high-performance PPC campaigns
                that connect your business with ready-to-buy audiences while
                keeping every marketing rupee focused on measurable results.
              </p>

              {/* Supporting metrics */}
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex items-center gap-2">
                  <BarChart3
                    size={17}
                    style={{ color: theme.primary }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                    Data-led optimization
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MousePointerClick
                    size={17}
                    style={{ color: theme.primary }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                    Conversion focused
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-65 sm:w-[320px] h-67.5 sm:h-82.5">

                {/* Decorative ring */}
                <div
                  className="absolute inset-5 rounded-full border opacity-20"
                  style={{ borderColor: theme.primary }}
                />

                <div
                  className="absolute inset-12 rounded-full border opacity-10"
                  style={{ borderColor: theme.primary }}
                />

                {/* Glow */}
                <div
                  className="absolute inset-10 rounded-full blur-[70px] opacity-20"
                  style={{ background: theme.primary }}
                />

                {/* Main icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <PieChart
                      size={125}
                      strokeWidth={1.15}
                      style={{ color: theme.primary }}
                    />
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-5"
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: theme.primary }}
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-12 left-5"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: theme.glow }}
                  />
                </motion.div>

                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.35em] uppercase text-slate-400">
                  Performance / PPC
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
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
                    delay: index * 0.1,
                  }}
                  className={`
                    relative py-7 sm:py-8
                    md:px-7
                    group
                    ${
                      index !== 0
                        ? "border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="text-[11px] font-bold tracking-widest"
                      style={{ color: theme.primary }}
                    >
                      {feature.number}
                    </span>

                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      style={{ color: theme.primary }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-sm">
                    {feature.desc}
                  </p>

                  <div
                    className="mt-6 h-px w-10 transition-all duration-300 group-hover:w-20"
                    style={{ background: theme.primary }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-20">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Strategic PPC
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.045em] leading-[1.05]">
                Turn search intent into business growth.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <p className="text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300">
                When you need immediate customer acquisition, paid search can
                put your business in front of people already looking for what
                you offer. We combine audience intelligence, compelling
                messaging, bidding strategy and conversion optimization to
                turn that intent into action.
              </p>

              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, transparent)`,
                }}
              />

              <p className="text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
                Every campaign is continuously evaluated against meaningful
                performance signals — from clicks and qualified leads to
                acquisition costs and revenue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Capabilities
              </p>

              <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] leading-tight">
                Everything required to make paid media perform.
              </h2>
            </motion.div>

            <div className="border-t border-slate-300 dark:border-white/10">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group flex items-center justify-between gap-5 py-4 border-b border-slate-300 dark:border-white/10"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="text-[10px] font-mono"
                      style={{ color: theme.primary }}
                    >
                      0{index + 1}
                    </span>

                    <span className="text-base sm:text-lg font-semibold transition-colors duration-200 group-hover:text-emerald-500">
                      {item}
                    </span>
                  </div>

                  <span
                    className="w-1.5 h-1.5 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"
                    style={{ background: theme.primary }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start"
          >
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Performance First
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.045em] leading-[1.05]">
                Maximize every rupee of your advertising budget.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-7 text-slate-600 dark:text-slate-300">
                As a performance-focused growth partner, Shilsha Technologies
                combines granular targeting with continuous conversion
                optimization to help your campaigns become more efficient as
                they scale.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 pt-2">
                <div className="flex gap-3">
                  <Target
                    size={18}
                    className="mt-1 shrink-0"
                    style={{ color: theme.primary }}
                  />
                  <div>
                    <h3 className="font-semibold text-sm">
                      Intent-driven targeting
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Reach audiences when purchase intent is strongest.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <BarChart3
                    size={18}
                    className="mt-1 shrink-0"
                    style={{ color: theme.primary }}
                  />
                  <div>
                    <h3 className="font-semibold text-sm">
                      Continuous optimization
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Improve campaigns using real performance data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <DollarSign
                    size={18}
                    className="mt-1 shrink-0"
                    style={{ color: theme.primary }}
                  />
                  <div>
                    <h3 className="font-semibold text-sm">
                      Smarter budget allocation
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Put more budget behind what actually works.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Zap
                    size={18}
                    className="mt-1 shrink-0"
                    style={{ color: theme.primary }}
                  />
                  <div>
                    <h3 className="font-semibold text-sm">
                      Faster acquisition
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Capture demand without waiting for organic rankings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default PpcCampaignsPage;
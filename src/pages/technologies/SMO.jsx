import React from "react";
import {
  Share2,
  Users,
  MessageCircle,
  ArrowRight,
  Heart,
  BarChart3,
  Target,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";
import { FaInstagram } from "react-icons/fa6";

const theme = {
  primary: "#EC4899",
  secondary: "#BE185D",
  glow: "#FBCFE8",
  accent: "#8B5CF6",
};

const SmoServicesPage = () => {
  const features = [
    {
      number: "01",
      icon: Share2,
      title: "Social Profile Optimization",
      desc: "Build polished, conversion-focused social profiles with consistent messaging, visuals, bios and brand positioning.",
    },
    {
      number: "02",
      icon: Heart,
      title: "Content & Creative Strategy",
      desc: "Create scroll-stopping posts, carousels, reels, stories and campaigns designed around your audience and objectives.",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Community Engagement",
      desc: "Turn followers into loyal customers through meaningful conversations, timely responses and active community building.",
    },
  ];

  const services = [
    "Social Media Profile Optimization",
    "Instagram & Facebook Marketing",
    "LinkedIn Brand Building",
    "Social Media Content Strategy",
    "Creative Posts & Carousel Design",
    "Reels & Short-Form Content",
    "Hashtag & Trend Research",
    "Community Management",
    "Social Media Analytics & Reporting",
    "Brand Reputation Management",
  ];

  const results = [
    {
      icon: Users,
      value: "Audience",
      title: "Grow Your Community",
      desc: "Build a relevant audience that genuinely connects with your brand.",
    },
    {
      icon: TrendingUp,
      value: "Reach",
      title: "Increase Visibility",
      desc: "Expand your organic presence across the platforms that matter.",
    },
    {
      icon: Target,
      value: "Intent",
      title: "Attract The Right People",
      desc: "Reach users who are more likely to engage, enquire and convert.",
    },
    {
      icon: BarChart3,
      value: "Insights",
      title: "Measure What Matters",
      desc: "Use performance data to continuously improve your social strategy.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-300">
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div
          className="absolute top-10 -right-40 w-125 h-125 rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div
          className="absolute bottom-0 -left-45 w-105 h-105 rounded-full blur-[130px] opacity-10 pointer-events-none"
          style={{ background: theme.primary }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="h-px w-10"
                  style={{ background: theme.primary }}
                />

                <span
                  className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase"
                  style={{ color: theme.primary }}
                >
                  Social Growth Studio
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[2.7rem] sm:text-5xl lg:text-[4.5rem] font-black tracking-[-0.055em] leading-[0.97]">
                Turn attention into{" "}
                <span
                  className="relative inline-block"
                  style={{ color: theme.primary }}
                >
                  real engagement.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-8">
                Shilsha Technologies builds strategic social media experiences
                that increase visibility, strengthen communities, and turn your
                audience into loyal customers.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-semibold shadow-lg shadow-pink-500/20"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    }}
                  >
                    Hire SMO Experts
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Strategy • Content • Community • Growth
                </span>
              </div>

              {/* Trust points */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
                {[
                  "Platform Strategy",
                  "Creative Content",
                  "Performance Insights",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
                  >
                    <CheckCircle2 size={15} style={{ color: theme.primary }} />

                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72.5 sm:w-92.5 h-87.5 sm:h-107.5">
                <div
                  className="absolute inset-7 rounded-[42px] rotate-6 opacity-25"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.primary},
                      ${theme.glow},
                      ${theme.accent}
                    )`,
                  }}
                />

                {/* Main card */}
                <div className="absolute inset-0 rounded-[42px] bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-pink-500/20 shadow-2xl overflow-hidden">
                  {/* Top gradient */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(
                        90deg,
                        ${theme.primary},
                        ${theme.accent}
                      )`,
                    }}
                  />

                  {/* Decorative blobs */}
                  <div
                    className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl opacity-25"
                    style={{ background: theme.primary }}
                  />

                  <div
                    className="absolute -bottom-24 -left-16 w-52 h-52 rounded-full blur-3xl opacity-20"
                    style={{ background: theme.accent }}
                  />

                  {/* Header */}
                  <div className="relative flex items-center justify-between px-7 pt-7">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-8 w-8 rounded-xl flex items-center justify-center text-white"
                        style={{
                          background: `linear-gradient(
                            135deg,
                            ${theme.primary},
                            ${theme.secondary}
                          )`,
                        }}
                      >
                        <FaInstagram size={16} />
                      </div>

                      <span className="text-xs font-bold">SOCIAL GROWTH</span>
                    </div>

                    <Sparkles size={18} style={{ color: theme.primary }} />
                  </div>

                  {/* Central graphic */}
                  <div className="relative flex items-center justify-center h-60">
                    {/* Ring */}
                    <div
                      className="absolute w-44 h-44 rounded-full border opacity-20"
                      style={{ borderColor: theme.primary }}
                    />

                    <div
                      className="absolute w-32 h-32 rounded-full border opacity-30"
                      style={{ borderColor: theme.primary }}
                    />

                    {/* Icon */}
                    <div
                      className="relative h-24 w-24 rounded-[30px] flex items-center justify-center text-white shadow-xl"
                      style={{
                        background: `linear-gradient(
                          135deg,
                          ${theme.primary},
                          ${theme.secondary}
                        )`,
                      }}
                    >
                      <Share2 size={42} strokeWidth={1.5} />
                    </div>

                    {/* Floating nodes */}
                    <div className="absolute top-10 right-12 h-9 w-9 rounded-full flex items-center justify-center bg-white dark:bg-[#111c30] border border-pink-200 dark:border-pink-500/20 shadow-lg">
                      <Heart size={16} style={{ color: theme.primary }} />
                    </div>

                    <div className="absolute bottom-8 left-10 h-9 w-9 rounded-full flex items-center justify-center bg-white dark:bg-[#111c30] border border-pink-200 dark:border-pink-500/20 shadow-lg">
                      <Users size={16} style={{ color: theme.accent }} />
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="relative grid grid-cols-3 border-t border-slate-200 dark:border-white/10">
                    {[
                      ["Reach", "+84%"],
                      ["Engage", "+67%"],
                      ["Grow", "+52%"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="px-4 py-5 text-center border-r last:border-r-0 border-slate-200 dark:border-white/10"
                      >
                        <div
                          className="text-lg font-black"
                          style={{ color: theme.primary }}
                        >
                          {value}
                        </div>

                        <div className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-4 sm:-right-8 top-16 px-4 py-3 rounded-2xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-white/10 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp size={17} style={{ color: theme.primary }} />

                    <div>
                      <p className="text-[10px] text-slate-400">
                        Social Growth
                      </p>

                      <p className="text-sm font-bold">Moving Up</p>
                    </div>
                  </div>
                </motion.div>
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
                  className={`group py-8 md:px-7 ${
                    index !== 0
                      ? "border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span className="text-xs font-bold text-pink-500/60 pt-1">
                      {feature.number}
                    </span>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="h-10 w-10 rounded-xl flex items-center justify-center bg-pink-50 dark:bg-pink-500/10"
                          style={{ color: theme.primary }}
                        >
                          <Icon size={20} />
                        </div>

                        <ArrowRight
                          size={16}
                          className="text-slate-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all"
                        />
                      </div>

                      <h3 className="text-lg font-bold mb-2">
                        {feature.title}
                      </h3>

                      <p className="text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-sm">
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

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Our Social Strategy
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-tight">
                Your social presence should create conversations, not just
                impressions.
              </h2>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-8">
                Social media is no longer just another marketing channel. It is
                where customers discover brands, compare alternatives, build
                trust and decide who deserves their attention.
              </p>

              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(
                    90deg,
                    ${theme.primary},
                    transparent
                  )`,
                }}
              />

              <p className="text-base text-slate-500 dark:text-slate-400 leading-7">
                Shilsha Technologies combines audience research, creative
                storytelling, platform-specific strategies and performance
                analysis to create social media ecosystems that consistently
                move your brand forward.
              </p>

              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-2 text-sm font-bold"
                style={{ color: theme.primary }}
              >
                Build your social strategy
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100/70 dark:bg-[#0b1528]/50 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: theme.primary }}
            >
              Why Social Media Optimization Matters
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em]">
              Build an audience that actually matters.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden">
            {results.map((result, index) => {
              const Icon = result.icon;

              return (
                <motion.div
                  key={result.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="group bg-white dark:bg-[#0b1528] p-7 sm:p-8 transition-all"
                >
                  <div
                    className="h-11 w-11 rounded-xl flex items-center justify-center mb-6 bg-pink-50 dark:bg-pink-500/10"
                    style={{ color: theme.primary }}
                  >
                    <Icon size={21} />
                  </div>

                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: theme.primary }}
                  >
                    {result.value}
                  </p>

                  <h3 className="text-lg font-bold mb-3">{result.title}</h3>

                  <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {result.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: theme.primary }}
              >
                What We Do
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em]">
                Everything your social presence needs.
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base leading-6 text-slate-500 dark:text-slate-400">
              From strategy and creative production to community management and
              analytics, we help your brand stay relevant and visible.
            </p>
          </div>

          <div className="border-t border-slate-200 dark:border-white/10">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="group flex items-center justify-between py-5 sm:py-6 border-b border-slate-200 dark:border-white/10"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-mono text-slate-400 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-base sm:text-xl font-semibold transition-colors group-hover:text-pink-500">
                    {service}
                  </h3>
                </div>

                <ArrowRight
                  size={18}
                  className="text-slate-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: theme.primary }}
              >
                Our Process
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-tight">
                Strategy first. Content second. Growth always.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-7">
                We don't believe in posting just to stay active. Every piece of
                content should have a purpose, whether that's building
                awareness, starting conversations, generating leads or
                strengthening brand trust.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Discover",
                  desc: "Understand your audience, competitors, brand voice and business objectives.",
                },
                {
                  number: "02",
                  title: "Strategize",
                  desc: "Create a platform-specific content and growth strategy around your goals.",
                },
                {
                  number: "03",
                  title: "Create",
                  desc: "Produce engaging visual and written content designed for each channel.",
                },
                {
                  number: "04",
                  title: "Optimize",
                  desc: "Track performance, learn from the data and continuously improve results.",
                },
              ].map((step) => (
                <motion.div
                  key={step.number}
                  whileHover={{ x: 5 }}
                  className="flex gap-5 p-5 rounded-2xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-white/10 shadow-sm"
                >
                  <span
                    className="text-sm font-black pt-1"
                    style={{ color: theme.primary }}
                  >
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>

                    <p className="text-sm leading-6 text-slate-500 dark:text-slate-400 mt-1">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default SmoServicesPage;

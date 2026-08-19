import React from "react";
import {
  Palette,
  Layout,
  Smile,
  ArrowRight,
  Search,
  MousePointer2,
  Layers3,
  Smartphone,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";
import { FaFigma } from "react-icons/fa6";

const theme = {
  primary: "#EC4899",
  secondary: "#BE185D",
  glow: "#fbcfe8",
};

const UiUxDesignServicesPage = () => {
  const capabilities = [
    {
      number: "01",
      icon: Smile,
      title: "User Research",
      description:
        "Understand your users through personas, interviews, journey mapping and behavioral insights.",
    },
    {
      number: "02",
      icon: Layout,
      title: "UX Architecture",
      description:
        "Transform complex requirements into clear information architecture, flows and intuitive experiences.",
    },
    {
      number: "03",
      icon: Palette,
      title: "UI Design",
      description:
        "Create refined interfaces with thoughtful typography, visual hierarchy, components and interactions.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      text: "We understand your users, business goals, competitors and product challenges before designing anything.",
    },
    {
      number: "02",
      title: "Define",
      text: "We structure user journeys, information architecture and interaction flows around real user needs.",
    },
    {
      number: "03",
      title: "Design",
      text: "We turn validated UX concepts into polished interfaces, design systems and responsive experiences.",
    },
    {
      number: "04",
      title: "Validate",
      text: "We prototype, test and refine the experience to eliminate friction before development begins.",
    },
  ];

  const services = [
    "Product UX Strategy",
    "User Research & Personas",
    "Information Architecture",
    "User Flow & Journey Mapping",
    "Wireframes & Interactive Prototypes",
    "Web & Mobile UI Design",
    "Design Systems",
    "Usability Testing",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-900 dark:text-white font-sans overflow-hidden">

      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24">
        {/* Ambient background */}
        <div
          className="absolute top-10 -right-45 w-130 h-130 rounded-full blur-[150px] opacity-[0.14] pointer-events-none"
          style={{ background: theme.primary }}
        />

        <div
          className="absolute -left-50 -bottom-37.5 w-112.5 h-112.5 rounded-full blur-[140px] opacity-[0.08] pointer-events-none"
          style={{ background: "#8b5cf6" }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
            {/* Hero content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-7">
                <span
                  className="w-10 h-px"
                  style={{ background: theme.primary }}
                />

                <span
                  className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase"
                  style={{ color: theme.primary }}
                >
                  UI/UX Design Studio
                </span>
              </div>

              <h1 className="text-[2.7rem] sm:text-5xl lg:text-[4.7rem] font-black tracking-[-0.055em] leading-[0.96] max-w-5xl">
                Experiences designed
                <span
                  className="block mt-2"
                  style={{ color: theme.primary }}
                >
                  around people.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-7">
                Shilsha Technologies creates intuitive digital experiences
                where strategy, usability and visual design work together to
                make products easier to understand, use and love.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/20"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  Start a UX Project
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Research · UX · UI · Prototyping
                </span>
              </div>

              {/* Trust line */}
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  Human-centered
                </span>

                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  Conversion focused
                </span>

                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  Development ready
                </span>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72.5 sm:w-92.5 h-87.5 sm:h-107.5">
                {/* Decorative shapes */}
                <motion.div
                  animate={{ rotate: [0, 4, 0], y: [0, -8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-4 w-40 h-40 rounded-[38px] border border-pink-400/20"
                />

                <motion.div
                  animate={{ rotate: [0, -5, 0], y: [0, 7, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-4 left-0 w-28 h-28 rounded-full border border-purple-400/20"
                />

                {/* Main composition */}
                <div className="absolute inset-5 rounded-[42px] border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#0b1528]/80 backdrop-blur-xl overflow-hidden">
                  {/* Gradient */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, ${theme.primary}, #a855f7, transparent)`,
                    }}
                  />

                  <div
                    className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-20"
                    style={{ background: theme.primary }}
                  />

                  <div className="relative h-full flex flex-col justify-between p-7">
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-pink-500/10 flex items-center justify-center">
                          <FaFigma
                            size={15}
                            style={{ color: theme.primary }}
                          />
                        </div>

                        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400">
                          Design System
                        </span>
                      </div>

                      <span className="text-[10px] text-slate-400">01</span>
                    </div>

                    {/* UI composition */}
                    <div className="relative">
                      <div className="space-y-3">
                        <div className="w-24 h-2 rounded-full bg-slate-200 dark:bg-white/10" />
                        <div className="w-40 h-4 rounded-full bg-slate-800 dark:bg-white/80 opacity-80" />
                        <div className="w-32 h-2 rounded-full bg-slate-200 dark:bg-white/10" />
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-7">
                        <div className="h-20 rounded-2xl bg-linear-to-br from-pink-500/20 to-purple-500/10 border border-pink-500/10" />
                        <div className="h-20 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10" />
                      </div>

                      <div
                        className="absolute -right-3 top-7 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                        style={{ background: theme.primary }}
                      >
                        <MousePointer2 size={17} className="text-white" />
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                          Human centered
                        </p>
                        <p className="text-sm font-bold mt-1">
                          Built for clarity.
                        </p>
                      </div>

                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-pink-500" />
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`group py-8 sm:py-10 md:px-8 ${
                    index > 0
                      ? "border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex gap-5">
                    <span className="text-xs font-mono text-pink-500/60">
                      {item.number}
                    </span>

                    <div>
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                        className="text-pink-500 mb-5 transition-transform duration-300 group-hover:scale-110"
                      />

                      <h3 className="text-xl font-bold tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
                style={{ color: theme.primary }}
              >
                Design With Purpose
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-[3.3rem] font-black tracking-[-0.045em] leading-[1.02]">
                Good UX removes friction.
                <span className="block text-slate-400 dark:text-slate-600">
                  Great UX creates momentum.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <p className="text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300">
                Digital products succeed when people can understand them
                quickly, navigate them naturally and accomplish their goals
                without unnecessary friction.
              </p>

              <p className="text-base leading-7 text-slate-500 dark:text-slate-400">
                Our UI/UX designers combine user research, product strategy,
                interaction design and visual systems to create experiences
                that are not only beautiful, but purposeful and measurable.
              </p>

              <div className="flex flex-wrap gap-6 pt-2">
                <div>
                  <p className="text-2xl font-black">UX</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Research driven
                  </p>
                </div>

                <div className="w-px bg-slate-200 dark:bg-white/10" />

                <div>
                  <p className="text-2xl font-black">UI</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Pixel precise
                  </p>
                </div>

                <div className="w-px bg-slate-200 dark:bg-white/10" />

                <div>
                  <p className="text-2xl font-black">CX</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Business focused
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-100/70 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-24">
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Capabilities
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-tight">
                Everything your product needs to feel effortless.
              </h2>

              <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-md">
                From early product thinking to final UI systems, we design the
                complete experience across web, mobile and digital platforms.
              </p>
            </div>

            <div className="border-t border-slate-300 dark:border-white/10">
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
                  className="group flex items-center justify-between py-5 border-b border-slate-300 dark:border-white/10"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[11px] font-mono text-slate-400">
                      0{index + 1}
                    </span>

                    <h3 className="text-base sm:text-lg font-semibold group-hover:text-pink-500 transition-colors">
                      {service}
                    </h3>
                  </div>

                  <ArrowRight
                    size={17}
                    className="text-slate-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Our Process
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em]">
                From insight to interface.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              A structured design process keeps creativity aligned with user
              needs, business objectives and technical realities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-slate-200 dark:border-white/10">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`py-7 pr-7 ${
                  index % 2 !== 0
                    ? "sm:pl-7 sm:border-l"
                    : ""
                } ${
                  index >= 2
                    ? "lg:border-l"
                    : ""
                } border-slate-200 dark:border-white/10`}
              >
                <span
                  className="text-xs font-mono"
                  style={{ color: theme.primary }}
                >
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 border-y border-slate-200 dark:border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Designed Everywhere
              </p>

              <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">
                One experience.
                <span className="text-slate-400 dark:text-slate-600">
                  {" "}
                  Every screen.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-8 sm:gap-12">
              <div className="flex flex-col items-center gap-3">
                <Monitor
                  size={30}
                  strokeWidth={1.5}
                  className="text-pink-500"
                />
                <span className="text-xs text-slate-400">Web</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <Smartphone
                  size={28}
                  strokeWidth={1.5}
                  className="text-pink-500"
                />
                <span className="text-xs text-slate-400">Mobile</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <Layers3
                  size={30}
                  strokeWidth={1.5}
                  className="text-pink-500"
                />
                <span className="text-xs text-slate-400">Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative border-t border-slate-200 dark:border-white/10 pt-12 sm:pt-16"
          >
            <div
              className="absolute top-0 left-0 w-32 h-px"
              style={{ background: theme.primary }}
            />

            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <p
                  className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
                  style={{ color: theme.primary }}
                >
                  Start Something Better
                </p>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.055em] leading-[0.95] max-w-4xl">
                  Have a product that deserves a better experience?
                </h2>

                <p className="mt-6 max-w-xl text-base text-slate-500 dark:text-slate-400 leading-7">
                  Let's turn complex ideas into simple, intuitive and
                  memorable digital experiences.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-white whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Talk to our designers
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
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

export default UiUxDesignServicesPage;
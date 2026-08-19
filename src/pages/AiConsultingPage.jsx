import React from "react";
import {
  BrainCircuit,
  Sparkles,
  Database,
  ArrowRight,
  Workflow,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Compass,
  Target,
  Layers3,
  BarChart3,
  LockKeyhole,
  ChevronRight,
  CircleDot,
  Zap,
  Network,
  Gauge,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ReasonsWhySection from "../components/ReasonsWhySection";
import AwardsSection from "../components/AwardsSection";
import Footer from "../components/Footer";

const brand = {
  primary: "#276ea5",
  dark: "#1d527d",
  cyan: "#60a5fa",
};

const AiConsultingPage = () => {
  const services = [
    {
      number: "01",
      icon: BrainCircuit,
      title: "AI Readiness",
      description:
        "Assess your technology, data, workflows, and organizational readiness to identify where AI can create measurable business value.",
    },
    {
      number: "02",
      icon: Workflow,
      title: "AI Strategy",
      description:
        "Build a practical AI roadmap connecting business objectives with scalable architecture, implementation priorities, and ROI.",
    },
    {
      number: "03",
      icon: Database,
      title: "AI Governance",
      description:
        "Create secure and responsible frameworks for data privacy, model governance, compliance, and long-term AI adoption.",
    },
  ];

  const capabilities = [
    "AI opportunity discovery",
    "Enterprise AI roadmap",
    "Technology & vendor selection",
    "RAG & GenAI strategy",
    "Data readiness assessment",
    "AI governance frameworks",
  ];

  const pipeline = [
    {
      icon: Target,
      title: "Discover",
      text: "Identify high-value opportunities",
    },
    {
      icon: Layers3,
      title: "Design",
      text: "Build the transformation roadmap",
    },
    {
      icon: TrendingUp,
      title: "Scale",
      text: "Measure and optimize impact",
    },
  ];

  const frameworkSteps = [
    {
      icon: Lightbulb,
      title: "Discover",
      text: "Find the right AI opportunities",
    },
    {
      icon: Target,
      title: "Prioritize",
      text: "Focus on measurable business value",
    },
    {
      icon: Network,
      title: "Architect",
      text: "Design a scalable AI foundation",
    },
    {
      icon: TrendingUp,
      title: "Scale",
      text: "Turn strategy into sustained impact",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7faff] dark:bg-[#050a12] text-slate-900 dark:text-white overflow-hidden font-sans">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-60 left-[5%] w-112.5 h-112.5 rounded-full bg-blue-500/8 blur-[140px]" />

        <div className="absolute top-[35%] -right-45 w-125 h-125 rounded-full bg-cyan-400/8 blur-[150px]" />

        <div className="absolute -bottom-45 left-[30%] w-112.5 h-87.5 rounded-full bg-blue-500/5 blur-[130px]" />
      </div>

      <main className="relative pt-24 sm:pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-162.5 flex items-center">
            <div className="absolute top-10 right-[10%] w-[320px] h-80 rounded-full bg-blue-400/8 blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="inline-flex items-center gap-3"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-500/10 text-[#276ea5] dark:text-blue-300">
                    <BrainCircuit size={18} />
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#276ea5] dark:text-blue-300">
                    AI Strategy & Consulting
                  </span>
                </motion.div>

                {/* Accent line */}

                <div className="mt-6 w-16 h-1 rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />

                {/* Heading */}

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                  className="
                    mt-7
                    text-[3.1rem]
                    sm:text-6xl
                    lg:text-[4.7rem]
                    xl:text-[5.25rem]
                    leading-[0.96]
                    tracking-[-0.055em]
                    font-black
                    max-w-4xl
                  "
                >
                  Turn AI
                  <span
                    className="
                      block
                      bg-linear-to-r
                      from-[#276ea5]
                      via-blue-500
                      to-[#60a5fa]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Into Business
                  </span>
                  Impact.
                </motion.h1>

                {/* Description */}

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="
                    mt-7
                    max-w-2xl
                    text-base
                    sm:text-lg
                    leading-8
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  Move beyond AI experimentation with a practical strategy,
                  scalable architecture, and clear implementation roadmap built
                  around measurable business outcomes.
                </motion.p>

                {/* CTA */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap items-center gap-4 mt-9"
                >
                  <Link
                    to="/contact-us"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      px-6
                      py-4
                      rounded-2xl
                      text-white
                      text-sm
                      font-bold
                      shadow-lg
                      shadow-blue-600/20
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                      hover:shadow-blue-600/30
                    "
                    style={{
                      background: `linear-gradient(135deg, ${brand.primary}, ${brand.dark})`,
                    }}
                  >
                    Start Your AI Strategy
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/15 group-hover:bg-white/20">
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>

                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <ShieldCheck size={17} className="text-emerald-500" />
                    Security-first approach
                  </div>
                </motion.div>

                {/* Trust points */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="
                    mt-11
                    flex
                    flex-wrap
                    items-center
                    gap-x-7
                    gap-y-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />

                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Business-first
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />

                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Scalable architecture
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />

                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Enterprise ready
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="lg:col-span-5 relative"
              >
                <div className="relative max-w-125 mx-auto lg:ml-auto">
                  <div className="absolute -top-10 -right-2 sm:-right-6 text-[100px] sm:text-[140px] font-black text-blue-500/4.5 select-none pointer-events-none">
                    AI
                  </div>

                  {/* Main card */}

                  <div
                    className="
                      relative
                      rounded-4xl
                      bg-white
                      dark:bg-[#0a1524]
                      border
                      border-slate-200
                      dark:border-white/10
                      shadow-[0_30px_80px_rgba(15,23,42,0.10)]
                      dark:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                      overflow-hidden
                    "
                  >
                    {/* Card header */}

                    <div className="px-6 sm:px-7 py-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            w-10
                            h-10
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            bg-blue-500/10
                            text-[#276ea5]
                            dark:text-blue-300
                          "
                        >
                          <Network size={19} />
                        </div>

                        <div>
                          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                            AI Transformation
                          </p>

                          <p className="text-sm font-bold">
                            Strategic Framework
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                        <CircleDot size={8} />

                        <span className="text-[8px] font-bold uppercase tracking-wider">
                          Active
                        </span>
                      </div>
                    </div>

                    {/* Central visual */}

                    <div className="px-6 sm:px-8 pt-8 pb-6">
                      <div className="relative flex items-center justify-center">
                        {/* Decorative circles */}

                        <div className="absolute w-52 h-52 rounded-full border border-blue-500/10" />

                        <div className="absolute w-40 h-40 rounded-full border border-dashed border-blue-500/15" />

                        <motion.div
                          animate={{
                            scale: [1, 1.04, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            relative
                            z-10
                            w-28
                            h-28
                            rounded-4xl
                            flex
                            items-center
                            justify-center
                            bg-linear-to-br
                            from-[#276ea5]
                            via-blue-500
                            to-[#1d527d]
                            shadow-2xl
                            shadow-blue-500/25
                          "
                        >
                          <BrainCircuit
                            size={52}
                            className="text-white"
                            strokeWidth={1.4}
                          />

                          <div className="absolute inset-0 rounded-4xl border border-white/20" />
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            z-20
                            top-1
                            right-[3%]
                            sm:right-[8%]
                            px-3
                            py-2
                            rounded-xl
                            bg-white
                            dark:bg-[#101d2e]
                            border
                            border-slate-200
                            dark:border-white/10
                            shadow-lg
                          "
                        >
                          <div className="flex items-center gap-2">
                            <BarChart3 size={14} className="text-emerald-500" />

                            <span className="text-[9px] font-bold">
                              ROI Focus
                            </span>
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            z-20
                            bottom-0
                            left-[2%]
                            sm:left-[7%]
                            px-3
                            py-2
                            rounded-xl
                            bg-white
                            dark:bg-[#101d2e]
                            border
                            border-slate-200
                            dark:border-white/10
                            shadow-lg
                          "
                        >
                          <div className="flex items-center gap-2">
                            <LockKeyhole size={14} className="text-blue-500" />

                            <span className="text-[9px] font-bold">
                              Secure by Design
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      <div className="text-center mt-7">
                        <h3 className="text-xl font-black">
                          AI Transformation
                        </h3>

                        <p className="mt-1.5 text-xs text-slate-400">
                          Strategy → Architecture → Execution
                        </p>
                      </div>
                    </div>

                    {/* Framework */}

                    <div className="px-6 sm:px-7 pb-7">
                      <div className="grid grid-cols-2 gap-3">
                        {frameworkSteps.map((step, index) => {
                          const Icon = step.icon;

                          return (
                            <motion.div
                              key={step.title}
                              initial={{
                                opacity: 0,
                                y: 10,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay: 0.7 + index * 0.1,
                              }}
                              className="
                                p-3.5
                                rounded-xl
                                bg-slate-50
                                dark:bg-white/[0.035]
                                border
                                border-slate-100
                                dark:border-white/6
                              "
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className="
                                    w-7
                                    h-7
                                    rounded-lg
                                    bg-blue-500/10
                                    flex
                                    items-center
                                    justify-center
                                    text-[#276ea5]
                                    dark:text-blue-300
                                  "
                                >
                                  <Icon size={14} />
                                </div>

                                <span className="text-[10px] font-bold">
                                  {step.title}
                                </span>
                              </div>

                              <p className="mt-2 text-[9px] leading-4 text-slate-400">
                                {step.text}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="
                      absolute
                      -bottom-7
                      right-5
                      sm:right-8
                      px-4
                      py-3
                      rounded-2xl
                      bg-[#276ea5]
                      text-white
                      shadow-xl
                      shadow-blue-900/20
                    "
                  >
                    <div className="flex items-center gap-2.5">
                      <Gauge size={16} />

                      <div>
                        <p className="text-[8px] uppercase tracking-wider text-blue-100">
                          Strategy
                        </p>

                        <p className="text-[11px] font-bold">Built for Scale</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              overflow-hidden
              rounded-[2.25rem]
              border
              border-slate-200
              dark:border-white/10
              bg-white
              dark:bg-[#08111f]
              shadow-xl
            "
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(39,110,165,0.035)",
                  }}
                  className={`
                    relative
                    p-7
                    sm:p-9
                    group
                    ${
                      index !== services.length - 1
                        ? "border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-blue-500/10
                        flex
                        items-center
                        justify-center
                        text-[#276ea5]
                        dark:text-blue-300
                        group-hover:scale-110
                        transition-transform
                      "
                    >
                      <Icon size={22} />
                    </div>

                    <span className="text-5xl font-black text-slate-100 dark:text-white/[0.035]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{service.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#276ea5] dark:text-blue-300">
                    Explore capability
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            INTRO / CAPABILITIES
        ========================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500">
                <Compass size={15} />
                Vision to Execution
              </div>

              <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                From AI ambition to a{" "}
                <span className="text-[#276ea5] dark:text-blue-400">
                  clear execution plan.
                </span>
              </h2>

              <p className="mt-6 text-slate-600 dark:text-slate-400 leading-8">
                Navigating the rapidly changing AI landscape requires more than
                adopting the latest technology. We help leadership teams
                identify practical opportunities, prioritize investments, and
                establish an architecture that can evolve with the business.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      px-4
                      py-3
                      rounded-xl
                      border
                      border-slate-200
                      dark:border-white/10
                      bg-white
                      dark:bg-white/3
                      text-sm
                      font-medium
                    "
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-500 shrink-0"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="lg:col-span-6"
            >
              <div
                className="
                  relative
                  rounded-[2.5rem]
                  p-8
                  sm:p-10
                  bg-linear-to-br
                  from-[#276ea5]
                  to-[#123b5c]
                  overflow-hidden
                  shadow-2xl
                  shadow-blue-900/20
                "
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl" />

                <div className="absolute -bottom-25 -left-25 w-64 h-64 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Sparkles size={23} className="text-white" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100">
                      Strategic Framework
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl sm:text-3xl font-black text-white">
                    Decode the AI landscape.
                    <br />
                    Build what matters.
                  </h3>

                  <div className="mt-8 space-y-3">
                    {[
                      "Discover high-value AI opportunities",
                      "Prioritize initiatives by business impact",
                      "Design secure technical architecture",
                      "Create measurable implementation milestones",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                          p-3.5
                          rounded-xl
                          bg-white/8
                          border
                          border-white/10
                        "
                      >
                        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                          {index + 1}
                        </div>

                        <span className="text-sm text-blue-50">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="
                group
                p-8
                sm:p-10
                rounded-4xl
                bg-white
                dark:bg-[#08111f]
                border
                border-slate-200
                dark:border-white/10
                shadow-xl
                transition-all
              "
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-[#276ea5]">
                  <Zap size={21} />
                </div>

                <span className="text-5xl font-black text-slate-100 dark:text-white/4">
                  01
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Mitigate Risk & Optimize Resources
              </h3>

              <p className="mt-4 text-slate-500 dark:text-slate-400 leading-7">
                Bypass common AI implementation pitfalls, optimize investment,
                and establish governance models aligned with your existing
                corporate structure and technical capabilities.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="
                group
                p-8
                sm:p-10
                rounded-4xl
                bg-linear-to-br
                from-slate-900
                to-[#10243a]
                dark:from-[#0d1b2d]
                dark:to-[#0a1422]
                border
                border-slate-800
                dark:border-white/10
                shadow-xl
                transition-all
              "
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-300">
                  <TrendingUp size={21} />
                </div>

                <span className="text-5xl font-black text-white/4">02</span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Lead Your Industry
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                Position your enterprise ahead of the curve with intelligent
                operations, automated analytics, next-generation workflows, and
                a long-term AI transformation strategy.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <ReasonsWhySection />
        <AwardsSection />
        <Footer />
      </div>
    </div>
  );
};

export default AiConsultingPage;

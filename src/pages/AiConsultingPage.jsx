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
  BarChart3,
  LockKeyhole,
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

  const frameworkSteps = [
    {
      icon: Lightbulb,
      title: "Discover",
      text: "Find the right AI opportunities",
    },
    {
      icon: Target,
      title: "Prioritize",
      text: "Focus on measurable value",
    },
    {
      icon: Network,
      title: "Architect",
      text: "Build a scalable foundation",
    },
    {
      icon: TrendingUp,
      title: "Scale",
      text: "Turn strategy into impact",
    },
  ];

  const strategyPoints = [
    "Discover high-value AI opportunities",
    "Prioritize initiatives by business impact",
    "Design secure technical architecture",
    "Create measurable implementation milestones",
  ];

  return (
    <div className="min-h-screen mt-22 bg-[#f7faff] dark:bg-[#050a12] text-slate-900 dark:text-white overflow-hidden font-sans">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-[5%] w-96 h-96 rounded-full bg-blue-500/7 blur-[120px]" />
        <div className="absolute top-[35%] -right-40 w-96 h-96 rounded-full bg-cyan-400/7 blur-[130px]" />
        <div className="absolute bottom-0 left-[35%] w-96 h-72 rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <main className="relative pt-8 sm:pt-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-125 flex items-center">
            <div className="absolute top-10 right-[10%] w-72 h-72 rounded-full bg-blue-400/7 blur-[90px]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center w-full">
              {/* Hero content */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-7"
              >
                <div className="inline-flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-[#276ea5] dark:text-blue-300">
                    <BrainCircuit size={16} />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#276ea5] dark:text-blue-300">
                    AI Strategy & Consulting
                  </span>
                </div>

                <div className="mt-4 w-12 h-0.5 rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.65 }}
                  className="
                    mt-5
                    text-[2.8rem]
                    sm:text-5xl
                    lg:text-[4.2rem]
                    xl:text-[4.8rem]
                    leading-[0.96]
                    tracking-[-0.055em]
                    font-black
                    max-w-3xl
                  "
                >
                  Turn AI
                  <span className="block bg-linear-to-r from-[#276ea5] via-blue-500 to-[#60a5fa] bg-clip-text text-transparent">
                    Into Business
                  </span>
                  Impact.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="
                    mt-5
                    max-w-xl
                    text-[15px]
                    sm:text-base
                    leading-7
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  Move beyond AI experimentation with a practical strategy,
                  scalable architecture, and clear implementation roadmap built
                  around measurable business outcomes.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap items-center gap-3 mt-6"
                >
                  <Link
                    to="/contact-us"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2.5
                      px-5
                      py-2.5
                      rounded-xl
                      text-white
                      text-sm
                      font-bold
                      shadow-lg
                      shadow-blue-600/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-xl
                      hover:shadow-blue-600/25
                    "
                    style={{
                      background: `linear-gradient(135deg, ${brand.primary}, ${brand.dark})`,
                    }}
                  >
                    Start Your AI Strategy

                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/15">
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    Security-first approach
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5"
                >
                  {[
                    "Business-first",
                    "Scalable architecture",
                    "Enterprise ready",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle2
                        size={14}
                        className="text-emerald-500"
                      />

                      <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Hero visual */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="lg:col-span-5 relative"
              >
                <div className="relative max-w-115 mx-auto lg:ml-auto">
                  <div className="absolute -top-8 -right-2 text-[90px] sm:text-[120px] font-black text-blue-500/4 select-none pointer-events-none">
                    AI
                  </div>

                  <div
                    className="
                      relative
                      rounded-[1.75rem]
                      bg-white
                      mb-5
                      dark:bg-[#0a1524]
                      border
                      border-slate-200
                      dark:border-white/10
                      shadow-[0_24px_60px_rgba(15,23,42,0.10)]
                      dark:shadow-[0_24px_60px_rgba(0,0,0,0.32)]
                      overflow-hidden
                    "
                  >
                    {/* Card header */}
                    <div className="px-4 sm:px-5 py-3 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 text-[#276ea5] dark:text-blue-300">
                          <Network size={16} />
                        </div>

                        <div>
                          <p className="text-[8px] uppercase tracking-[0.15em] text-slate-400">
                            AI Transformation
                          </p>

                          <p className="text-xs font-bold">
                            Strategic Framework
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                        <CircleDot size={7} />

                        <span className="text-[7px] font-bold uppercase tracking-wider">
                          Active
                        </span>
                      </div>
                    </div>

                    {/* Central visual */}
                    <div className="px-4 sm:px-6 pt-5 pb-4">
                      <div className="relative flex items-center justify-center h-48">
                        <div className="absolute w-40 h-40 rounded-full border border-blue-500/10" />

                        <div className="absolute w-30 h-30 rounded-full border border-dashed border-blue-500/15" />

                        <motion.div
                          animate={{ scale: [1, 1.035, 1] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            relative
                            z-10
                            w-20
                            h-20
                            rounded-3xl
                            flex
                            items-center
                            justify-center
                            bg-linear-to-br
                            from-[#276ea5]
                            via-blue-500
                            to-[#1d527d]
                            shadow-xl
                            shadow-blue-500/25
                          "
                        >
                          <BrainCircuit
                            size={40}
                            className="text-white"
                            strokeWidth={1.4}
                          />

                          <div className="absolute inset-0 rounded-3xl border border-white/20" />
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            z-20
                            top-0
                            right-[4%]
                            px-2.5
                            py-1.5
                            rounded-lg
                            bg-white
                            dark:bg-[#101d2e]
                            border
                            border-slate-200
                            dark:border-white/10
                            shadow-md
                          "
                        >
                          <div className="flex items-center gap-1.5">
                            <BarChart3
                              size={12}
                              className="text-emerald-500"
                            />

                            <span className="text-[8px] font-bold">
                              ROI Focus
                            </span>
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, 4, 0] }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            z-20
                            bottom-0
                            left-[4%]
                            px-2.5
                            py-1.5
                            rounded-lg
                            bg-white
                            dark:bg-[#101d2e]
                            border
                            border-slate-200
                            dark:border-white/10
                            shadow-md
                          "
                        >
                          <div className="flex items-center gap-1.5">
                            <LockKeyhole
                              size={12}
                              className="text-blue-500"
                            />

                            <span className="text-[8px] font-bold">
                              Secure by Design
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      <div className="text-center mt-3">
                        <h3 className="text-lg font-black">
                          AI Transformation
                        </h3>

                        <p className="mt-1 text-[10px] text-slate-400">
                          Strategy → Architecture → Execution
                        </p>
                      </div>
                    </div>

                    {/* Framework */}
                    <div className="px-4 sm:px-5 pb-4">
                      <div className="grid grid-cols-2 gap-2">
                        {frameworkSteps.map((step, index) => {
                          const Icon = step.icon;

                          return (
                            <motion.div
                              key={step.title}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.6 + index * 0.08,
                              }}
                              className="
                                p-2.5
                                rounded-lg
                                bg-slate-50
                                dark:bg-white/[0.035]
                                border
                                border-slate-100
                                dark:border-white/6
                              "
                            >
                              <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-[#276ea5] dark:text-blue-300">
                                  <Icon size={12} />
                                </div>

                                <span className="text-[9px] font-bold">
                                  {step.title}
                                </span>
                              </div>

                              <p className="mt-1 text-[8px] leading-3.5 text-slate-400">
                                {step.text}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="
                      absolute
                      -bottom-4
                      right-4
                      px-3
                      py-2
                      rounded-xl
                      bg-[#276ea5]
                      text-white
                      shadow-lg
                      shadow-blue-900/20
                    "
                  >
                    <div className="flex items-center gap-2">
                      <Gauge size={14} />

                      <div>
                        <p className="text-[7px] uppercase tracking-wider text-blue-100">
                          Strategy
                        </p>

                        <p className="text-[10px] font-bold">
                          Built for Scale
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              dark:border-white/10
              bg-white
              dark:bg-[#08111f]
              shadow-lg
            "
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    relative
                    p-5
                    sm:p-6
                    group
                    transition-colors
                    hover:bg-blue-50/40
                    dark:hover:bg-blue-500/2.5
                    ${
                      index !== services.length - 1
                        ? "border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#276ea5] dark:text-blue-300 group-hover:scale-105 transition-transform">
                      <Icon size={19} />
                    </div>

                    <span className="text-4xl font-black text-slate-300 dark:text-white/[0.035]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-slate-500 dark:text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-[#276ea5] dark:text-blue-300">
                    Explore capability

                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-500">
                <Compass size={13} />
                Vision to Execution
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                From AI ambition to a{" "}
                <span className="text-[#276ea5] dark:text-blue-400">
                  clear execution plan.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-[15px] text-slate-600 dark:text-slate-400 leading-7 max-w-xl">
                Navigating the rapidly changing AI landscape requires more than
                adopting the latest technology. We help leadership teams
                identify practical opportunities, prioritize investments, and
                establish an architecture that can evolve with the business.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2.5
                      px-3
                      py-2
                      rounded-lg
                      border
                      border-slate-200
                      dark:border-white/10
                      bg-white
                      dark:bg-white/3
                      text-[12px]
                      font-medium
                    "
                  >
                    <CheckCircle2
                      size={14}
                      className="text-emerald-500 shrink-0"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Strategic framework */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div
                className="
                  relative
                  rounded-3xl
                  p-6
                  sm:p-7
                  bg-linear-to-br
                  from-[#276ea5]
                  to-[#123b5c]
                  overflow-hidden
                  shadow-xl
                  shadow-blue-900/15
                "
              >
                <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-blue-300/15 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Sparkles size={19} className="text-white" />
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-100">
                      Strategic Framework
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl sm:text-2xl font-black text-white">
                    Decode the AI landscape.
                    <br />
                    Build what matters.
                  </h3>

                  <div className="mt-5 space-y-2">
                    {strategyPoints.map((item, index) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2.5
                          p-2.5
                          rounded-lg
                          bg-white/8
                          border
                          border-white/10
                        "
                      >
                        <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                          {index + 1}
                        </div>

                        <span className="text-[12px] text-blue-50">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Risk */}
            <motion.div
              whileHover={{ y: -3 }}
              className="
                group
                p-6
                rounded-3xl
                bg-white
                dark:bg-[#08111f]
                border
                border-slate-200
                dark:border-white/10
                shadow-lg
                transition-all
              "
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#276ea5]">
                  <Zap size={19} />
                </div>

                <span className="text-4xl font-black text-slate-400 dark:text-white/4">
                  01
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Mitigate Risk & Optimize Resources
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-6">
                Bypass common AI implementation pitfalls, optimize investment,
                and establish governance models aligned with your existing
                corporate structure and technical capabilities.
              </p>
            </motion.div>

            {/* Growth */}
            <motion.div
              whileHover={{ y: -3 }}
              className="
                group
                p-6
                rounded-3xl
                bg-linear-to-br
                from-slate-900
                to-[#10243a]
                dark:from-[#0d1b2d]
                dark:to-[#0a1422]
                border
                border-slate-800
                dark:border-white/10
                shadow-lg
                transition-all
              "
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-300">
                  <TrendingUp size={19} />
                </div>

                <span className="text-4xl font-black text-white/4">
                  02
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Lead Your Industry
              </h3>

              <p className="mt-2 text-sm text-slate-400 leading-6">
                Position your enterprise ahead of the curve with intelligent
                operations, automated analytics, next-generation workflows,
                and a long-term AI transformation strategy.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Shared sections */}
      <div className="relative z-10">
        <ReasonsWhySection />
        <AwardsSection />
        <Footer />
      </div>
    </div>
  );
};

export default AiConsultingPage;

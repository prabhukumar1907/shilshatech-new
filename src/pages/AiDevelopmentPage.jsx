import React from "react";
import {
  Cpu,
  BrainCircuit,
  Sparkles,
  ArrowRight,
  Bot,
  ShieldCheck,
  TrendingUp,
  Compass,
  CheckCircle2,
  Network,
  Lock,
  Zap,
  Database,
  Workflow,
  BarChart3,
  Layers3,
  ScanLine,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ReasonsWhySection from "../components/ReasonsWhySection";
import AwardsSection from "../components/AwardsSection";
import Footer from "../components/Footer";

const theme = {
  primary: "#276ea5",
  secondary: "#1d527d",
  glow: "#60a5fa",
};

const AiDevelopmentPage = () => {
  const services = [
    {
      number: "01",
      icon: Sparkles,
      title: "Generative AI",
      description:
        "Build intelligent LLM-powered products, copilots, content engines and domain-specific AI solutions.",
      tags: ["LLMs", "Fine-tuning", "RAG"],
    },
    {
      number: "02",
      icon: Bot,
      title: "AI Agents",
      description:
        "Deploy autonomous agents that reason, execute workflows, interact with APIs and automate complex operations.",
      tags: ["Agents", "Automation", "Tools"],
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Machine Learning",
      description:
        "Turn business data into predictive intelligence with custom ML models, forecasting and decision systems.",
      tags: ["Prediction", "Analytics", "ML"],
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description:
        "Secure AI architectures, controlled data access and governance designed for enterprise environments.",
    },
    {
      icon: Zap,
      title: "Production Performance",
      description:
        "High-performance AI systems engineered for reliability, low latency and demanding workloads.",
    },
    {
      icon: Network,
      title: "Scalable Architecture",
      description:
        "Flexible AI infrastructure that evolves with your data, users and business requirements.",
    },
    {
      icon: Lock,
      title: "Responsible AI",
      description:
        "Thoughtful implementation focused on privacy, security, transparency and responsible model usage.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-800 transition-colors duration-300 dark:bg-[#050b14] dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-125 w-125 rounded-full bg-blue-500/10 blur-[140px] dark:bg-blue-500/10" />

        <div className="absolute right-[-10%] top-[25%] h-125 w-125 rounded-full bg-cyan-400/10 blur-[150px] dark:bg-cyan-500/10" />

        <div className="absolute bottom-[10%] left-[35%] h-100 w-100 rounded-full bg-indigo-500/5 blur-[130px]" />
      </div>

      <main className="relative">
        <section className="relative pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36">
          {/* Hero grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(39,110,165,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(39,110,165,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "55px 55px",
                maskImage:
                  "linear-gradient(to bottom, black 0%, transparent 85%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-20 lg:col-span-7"
              >
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white/80 px-4 py-2 backdrop-blur-xl shadow-sm dark:border-blue-400/20 dark:bg-blue-500/10"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                  </span>

                  <Cpu
                    size={15}
                    className="text-[#276ea5] dark:text-[#60a5fa]"
                  />

                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300 sm:text-xs">
                    AI Development & Machine Learning
                  </span>
                </motion.div>

                {/* Heading */}
                <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-[4.5rem] xl:text-[5rem]">
                  Build AI That
                  <br />
                  <span className="relative mt-2 inline-block">
                    <span className="absolute inset-0 bg-blue-500 blur-2xl opacity-20" />

                    <span className="relative bg-linear-to-r from-[#276ea5] via-[#3b82c4] to-[#60a5fa] bg-clip-text text-transparent">
                      Thinks. Learns.
                    </span>
                  </span>
                  <br />
                  <span className="text-slate-700 dark:text-slate-200">
                    Performs at scale.
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg lg:text-xl">
                  We design and engineer intelligent products powered by{" "}
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Generative AI, LLMs, Machine Learning and autonomous agents
                  </span>{" "}
                  — transforming complex business challenges into production-
                  ready AI systems.
                </p>

                {/* CTA */}

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      to="/contact-us"
                      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-[#276ea5] to-[#1d527d] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-900/20 dark:shadow-blue-500/20"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-white/0 via-white/15 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />

                      <span className="relative">Build Your AI Solution</span>

                      <ArrowRight
                        size={17}
                        className="relative transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </motion.div>

                  <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-white/3">
                    <ShieldCheck size={17} className="text-emerald-500" />

                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Enterprise-ready & secure
                    </span>
                  </div>
                </div>

                {/* Trust Metrics */}

                <div className="mt-10 max-w-2xl border-t border-slate-200 pt-7 dark:border-slate-800">
                  <div className="grid grid-cols-3 gap-5 sm:gap-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <BrainCircuit
                          size={15}
                          className="text-[#276ea5] dark:text-[#60a5fa]"
                        />

                        <span className="text-lg font-black text-slate-900 dark:text-white">
                          LLM
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] text-slate-500">
                        Intelligent Models
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <Network
                          size={15}
                          className="text-[#276ea5] dark:text-[#60a5fa]"
                        />

                        <span className="text-lg font-black text-slate-900 dark:text-white">
                          RAG
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] text-slate-500">
                        Knowledge Systems
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <Lock size={15} className="text-emerald-500" />

                        <span className="text-lg font-black text-slate-900 dark:text-white">
                          100%
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] text-slate-500">
                        Security Focused
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative flex min-h-120 items-center justify-center lg:col-span-5"
              >
                {/* Outer Glow */}
                <div className="absolute h-90 w-90 rounded-full bg-blue-500/15 blur-[90px]" />

                {/* Outer orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-90 w-90 rounded-full border border-dashed border-blue-400/20 sm:h-105 sm:w-105"
                >
                  <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_#60a5fa]" />
                </motion.div>

                {/* Inner orbit */}

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-70 w-70 rounded-full border border-blue-400/10 sm:h-80 sm:w-[320px]"
                >
                  <div className="absolute bottom-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
                </motion.div>

                {/* Main Panel */}
                <div className="relative w-full max-w-105">
                  <div className="absolute inset-4 rounded-[2.5rem] bg-linear-to-br from-[#276ea5]/20 via-blue-500/5 to-cyan-400/10 blur-xl" />

                  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/75 shadow-[0_30px_100px_rgba(39,110,165,0.18)] backdrop-blur-2xl dark:border-blue-400/20 dark:bg-[#091321]/90">
                    {/* Top Bar */}
                    <div className="flex h-14 items-center justify-between border-b border-slate-200 px-5 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                        </div>

                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          AI Development Engine
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                        <span className="text-[9px] font-bold text-emerald-500">
                          ONLINE
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      {/* Core */}

                      <div className="flex items-center gap-4">
                        <motion.div
                          animate={{
                            boxShadow: [
                              "0 0 0 rgba(96,165,250,0)",
                              "0 0 35px rgba(96,165,250,0.3)",
                              "0 0 0 rgba(96,165,250,0)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                          className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#276ea5] to-[#60a5fa] shadow-xl"
                        >
                          <BrainCircuit
                            size={32}
                            className="text-white"
                            strokeWidth={1.5}
                          />

                          <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400 dark:border-[#091321]" />
                        </motion.div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
                            AI Processing
                          </p>

                          <h3 className="mt-1 text-lg font-black text-slate-900 dark:text-white">
                            Intelligent Core
                          </h3>

                          <p className="text-[10px] text-slate-500">
                            Reasoning • Learning • Execution
                          </p>
                        </div>
                      </div>

                      {/* Model Pipeline */}

                      <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-[#050b14]">
                        <div className="mb-4 flex items-center gap-2">
                          <Cpu size={14} className="text-blue-500" />

                          <span className="text-[10px] font-bold text-slate-500">
                            AI DEVELOPMENT PIPELINE
                          </span>
                        </div>

                        <div className="space-y-3">
                          {[
                            {
                              label: "Data",
                              status: "Connected & prepared",
                              icon: Database,
                            },
                            {
                              label: "Model",
                              status: "Trained & optimized",
                              icon: BrainCircuit,
                            },
                            {
                              label: "Agent",
                              status: "Reasoning & executing",
                              icon: Bot,
                            },
                          ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                              <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.7 + index * 0.15,
                                }}
                                className="flex items-center justify-between"
                              >
                                <div className="flex items-center gap-2.5">
                                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10">
                                    <Icon size={13} className="text-blue-500" />
                                  </div>

                                  <div>
                                    <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
                                      {item.label}
                                    </p>

                                    <p className="text-[9px] text-slate-400">
                                      {item.status}
                                    </p>
                                  </div>
                                </div>

                                <CheckCircle2
                                  size={14}
                                  className="text-emerald-500"
                                />
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Metrics */}

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-white/2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                              Performance
                            </span>

                            <TrendingUp
                              size={13}
                              className="text-emerald-500"
                            />
                          </div>

                          <div className="mt-2 text-xl font-black text-slate-900 dark:text-white">
                            98.7%
                          </div>

                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "90%" }}
                              transition={{
                                duration: 1.5,
                                delay: 0.8,
                              }}
                              className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400"
                            />
                          </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-white/2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                              Latency
                            </span>

                            <Zap size={13} className="text-cyan-500" />
                          </div>

                          <div className="mt-2 text-xl font-black text-slate-900 dark:text-white">
                            84ms
                          </div>

                          <div className="mt-2 flex h-4 items-end gap-1">
                            {[30, 50, 40, 70, 55, 85, 65, 90].map(
                              (height, index) => (
                                <motion.span
                                  key={index}
                                  initial={{ height: 0 }}
                                  animate={{
                                    height: `${height}%`,
                                  }}
                                  transition={{
                                    duration: 0.5,
                                    delay: 0.7 + index * 0.05,
                                  }}
                                  className="w-full rounded-t-sm bg-blue-500/60"
                                />
                              ),
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bottom status */}

                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-emerald-500"
                          />

                          <span className="text-[10px] font-bold text-slate-500">
                            Production-ready architecture
                          </span>
                        </div>

                        <span className="text-[10px] font-black text-[#276ea5] dark:text-[#60a5fa]">
                          READY
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Data Card */}

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -left-5 top-24 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-[#0b1528]/95 sm:-left-10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
                        <Database size={17} className="text-blue-500" />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                          Intelligence
                        </p>

                        <p className="text-xs font-black text-slate-800 dark:text-white">
                          Connected Data
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Agent Card */}

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-2 -right-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-[#0b1528]/95 sm:-right-8 sm:bottom-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10">
                        <Bot size={17} className="text-cyan-500" />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                          Capability
                        </p>

                        <p className="text-xs font-black text-slate-800 dark:text-white">
                          Autonomous Agents
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-7 dark:border-slate-800 sm:flex-row sm:items-center lg:mt-20"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "bg-blue-500",
                    "bg-cyan-400",
                    "bg-indigo-500",
                    "bg-emerald-400",
                  ].map((color, index) => (
                    <div
                      key={index}
                      className={`h-8 w-8 rounded-full border-2 border-slate-50 dark:border-[#050b14] ${color}`}
                    />
                  ))}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Data • Models • Agents • Deployment
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <ShieldCheck size={15} className="text-emerald-500" />
                Built for enterprise workloads
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                <Sparkles size={15} />
                What We Build
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                Intelligence engineered{" "}
                <span className="text-blue-500">for your business.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
              From the first AI prototype to a production-scale platform, our
              engineering teams build systems designed for real-world
              performance.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-[#07101f] dark:hover:border-blue-500/30"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl transition-all group-hover:bg-blue-500/10" />

                  <div className="relative">
                    <div className="mb-10 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        <Icon size={23} />
                      </div>

                      <span className="text-xs font-black tracking-widest text-slate-300 dark:text-slate-700">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold">{service.title}</h3>

                    <p className="mt-4 min-h-19.5 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-500 dark:border-white/10 dark:bg-white/3 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                      Explore capability
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#07101f]">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                  <Compass size={22} />
                </div>

                <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-500">
                  Cognitive Operations
                </p>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Transform operations with cognitive intelligence.
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-500 dark:text-slate-400">
                  AI becomes truly valuable when it connects directly to the way
                  your business operates. We combine intelligent models,
                  business data and automated workflows to create systems that
                  don't just generate answers — they help execute outcomes.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Domain-specific AI systems",
                    "RAG & enterprise knowledge search",
                    "Intelligent workflow automation",
                    "AI-powered decision engines",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-emerald-500"
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}

              <div className="relative min-h-107.5 overflow-hidden border-t border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-[#040a14] lg:border-l lg:border-t-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[24px_24px]" />

                <div className="relative flex h-full items-center justify-center">
                  <div className="relative h-70 w-full max-w-md">
                    <div className="absolute left-1/2 top-1/2 h-57.5 w-57.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10" />

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-1/2 top-1/2 h-45 w-45 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/15"
                    />

                    <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-blue-400/30 bg-white shadow-2xl dark:bg-[#0a1629]">
                      <BrainCircuit size={48} className="text-blue-500" />
                    </div>

                    <ArchitectureNode
                      icon={Database}
                      title="Business Data"
                      className="absolute left-0 top-1/2 -translate-y-1/2"
                    />

                    <ArchitectureNode
                      icon={Workflow}
                      title="Workflows"
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                    />

                    <ArchitectureNode
                      icon={Layers3}
                      title="AI Models"
                      className="absolute left-1/2 top-0 -translate-x-1/2"
                    />

                    <ArchitectureNode
                      icon={BarChart3}
                      title="Insights"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            BENEFITS
        ========================================================== */}

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Zap size={14} />
              Built For Scale
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              AI engineered for{" "}
              <span className="text-blue-500">the real world.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Powerful technology means little without security, scalability and
              reliable execution. That's where our engineering approach makes
              the difference.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-xl dark:border-white/10 dark:bg-[#07101f] dark:hover:border-blue-500/30"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-bold">{benefit.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-4xl bg-linear-to-br from-[#174f7b] via-[#276ea5] to-cyan-500 px-7 py-14 text-center text-white shadow-2xl shadow-blue-500/20 sm:px-12"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-size-[22px_22px]" />

            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[100px]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <Cpu size={27} />
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                Have an AI idea?
                <span className="block text-cyan-100">Let's build it.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-50 sm:text-base">
                From strategy and prototyping to production deployment, we'll
                help turn your AI vision into a scalable product.
              </p>

              <div className="mt-8">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#174f7b] shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  Talk to Our AI Team
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <div className="relative z-10 mt-0 space-y-16">
        <ReasonsWhySection />
        <AwardsSection />
        <Footer />
      </div>
    </div>
  );
};

const ArchitectureNode = ({ icon: Icon, title, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex min-w-28.75 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-lg dark:border-white/10 dark:bg-[#0a1629] ${className}`}
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
        <Icon size={14} />
      </div>

      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
        {title}
      </span>
    </motion.div>
  );
};

export default AiDevelopmentPage;

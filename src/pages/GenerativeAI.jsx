import React from "react";
import {
  Sparkles,
  Wand2,
  Layers,
  Cpu,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Compass,
  CheckCircle2,
  BrainCircuit,
  Database,
  Zap,
  Network,
  Lock,
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

const GenerativeAiPage = () => {
  const features = [
    {
      icon: <Sparkles size={21} />,
      title: "Custom LLM Content Engines",
      desc: "Deploy proprietary content creation models trained on your brand tone for automated marketing, reports, and documentation.",
      tag: "Pillar 01",
    },
    {
      icon: <Layers size={21} />,
      title: "Multi-Modal AI Integrations",
      desc: "Unify text, image, audio, and video generation workflows into a single seamless interface for enhanced enterprise productivity.",
      tag: "Pillar 02",
    },
    {
      icon: <Cpu size={21} />,
      title: "Secure Enterprise RAG Systems",
      desc: "Connect your internal knowledge bases securely to generative models with zero data leakage and real-time semantic retrieval.",
      tag: "Pillar 03",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050b14] text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-blue-400 selection:text-slate-950 overflow-hidden">
     
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-[10%] w-112.5 h-112.5 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute top-[25%] right-[-10%] w-112.5 h-112.5 rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="absolute bottom-[10%] left-[35%] w-100 h-100 rounded-full bg-indigo-500/5 blur-[130px]" />
      </div>

      <section className="relative pt-20 sm:pt-24 lg:pt-26 pb-14 lg:pb-18">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-7 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative z-20"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  mb-5
                  px-3.5
                  py-1.5
                  rounded-full
                  border
                  border-blue-200
                  dark:border-blue-400/20
                  bg-white/80
                  dark:bg-blue-500/10
                  backdrop-blur-xl
                  shadow-sm
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />

                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>

                <Sparkles
                  size={14}
                  className="text-[#276ea5] dark:text-[#60a5fa]"
                />

                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-slate-600 dark:text-slate-300">
                  Enterprise Generative AI
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.65 }}
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-[4.3rem]
                  xl:text-[4.8rem]
                  font-black
                  leading-[0.96]
                  tracking-tighter
                  text-slate-950
                  dark:text-white
                  max-w-4xl
                "
              >
                Build AI That
                <br />
                <span className="relative inline-block mt-1.5">
                  <span className="absolute inset-0 blur-2xl opacity-20 bg-blue-500" />

                  <span className="relative bg-linear-to-r from-[#276ea5] via-[#3b82c4] to-[#60a5fa] bg-clip-text text-transparent">
                    Creates. Thinks.
                  </span>
                </span>
                <br />
                <span className="text-slate-700 dark:text-slate-200">
                  Scales.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="
                  mt-5
                  max-w-xl
                  text-[15px]
                  sm:text-base
                  lg:text-lg
                  leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Shilsha Technologies architects enterprise-grade generative AI
                systems that transform ideas, data, and workflows into
                intelligent products built for real-world scale.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact-us"
                    className="
                      group
                      relative
                      inline-flex
                      items-center
                      gap-2.5
                      px-6
                      py-3
                      rounded-xl
                      bg-linear-to-r
                      from-[#276ea5]
                      to-[#1d527d]
                      text-white
                      font-bold
                      text-sm
                      shadow-lg
                      shadow-blue-900/20
                      dark:shadow-blue-500/15
                      overflow-hidden
                    "
                  >
                    <span className="absolute inset-0 bg-linear-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <span className="relative">Build Your AI Solution</span>

                    <ArrowRight
                      size={16}
                      className="relative transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>

                <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-white/3 backdrop-blur-md">
                  <ShieldCheck size={16} className="text-emerald-500" />

                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    Enterprise-ready & secure
                  </span>
                </div>
              </motion.div>

              {/* Trust Metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="
                  mt-7
                  pt-5
                  border-t
                  border-slate-200
                  dark:border-slate-800
                  max-w-xl
                "
              >
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Zap
                        size={14}
                        className="text-[#276ea5] dark:text-[#60a5fa]"
                      />

                      <span className="text-base font-black text-slate-900 dark:text-white">
                        AI
                      </span>
                    </div>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Native Architecture
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <Network
                        size={14}
                        className="text-[#276ea5] dark:text-[#60a5fa]"
                      />

                      <span className="text-base font-black text-slate-900 dark:text-white">
                        RAG
                      </span>
                    </div>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Knowledge Systems
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <Lock size={14} className="text-emerald-500" />

                      <span className="text-base font-black text-slate-900 dark:text-white">
                        100%
                      </span>
                    </div>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Security Focused
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="
                lg:col-span-5
                relative
                min-h-105
                sm:min-h-115
                flex
                items-center
                justify-center
              "
            >
              <div className="absolute w-80 h-80 rounded-full bg-blue-500/15 blur-[80px]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-80
                  h-80
                  sm:w-95
                  sm:h-95
                  rounded-full
                  border
                  border-dashed
                  border-blue-400/20
                "
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-60
                  h-60
                  sm:w-70
                  sm:h-70
                  rounded-full
                  border
                  border-blue-400/10
                "
              />

              <div className="relative w-full max-w-95 aspect-square">
                <div className="absolute inset-3 rounded-4xl bg-linear-to-br from-[#276ea5]/20 via-blue-500/5 to-cyan-400/10 blur-xl" />

                <div
                  className="
                    absolute
                    inset-0
                    rounded-4xl
                    border
                    border-white/70
                    dark:border-blue-400/20
                    bg-white/75
                    dark:bg-[#091321]/90
                    backdrop-blur-2xl
                    shadow-[0_25px_80px_rgba(39,110,165,0.16)]
                    overflow-hidden
                  "
                >
                  {/* Top bar */}
                  <div className="h-12 px-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400/70" />
                        <span className="w-2 h-2 rounded-full bg-amber-400/70" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
                      </div>

                      <span className="ml-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        GenAI Engine
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                      <span className="text-[8px] font-bold text-emerald-500">
                        ONLINE
                      </span>
                    </div>
                  </div>

                  {/* AI Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3.5">
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 0 rgba(96,165,250,0)",
                            "0 0 30px rgba(96,165,250,0.3)",
                            "0 0 0 rgba(96,165,250,0)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        className="
                          relative
                          w-14
                          h-14
                          rounded-xl
                          bg-linear-to-br
                          from-[#276ea5]
                          to-[#60a5fa]
                          flex
                          items-center
                          justify-center
                          shadow-lg
                        "
                      >
                        <Wand2 size={28} className="text-white" />

                        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-[#091321]" />
                      </motion.div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-blue-500">
                          Processing
                        </p>

                        <h3 className="mt-0.5 text-base font-black text-slate-900 dark:text-white">
                          Creative Intelligence
                        </h3>

                        <p className="text-[9px] text-slate-500">
                          Multi-modal generation engine
                        </p>
                      </div>
                    </div>

                    {/* Generation */}
                    <div className="mt-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#050b14] p-3.5">
                      <div className="flex items-center gap-2 mb-3">
                        <BrainCircuit size={13} className="text-blue-500" />

                        <span className="text-[9px] font-bold text-slate-500">
                          MODEL PIPELINE
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          ["Context", "Knowledge retrieved"],
                          ["Reasoning", "Prompt optimized"],
                          ["Generation", "Content synthesized"],
                        ].map(([label, status], index) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.7 + index * 0.15,
                            }}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center">
                                {index === 0 && (
                                  <Database
                                    size={12}
                                    className="text-blue-500"
                                  />
                                )}

                                {index === 1 && (
                                  <BrainCircuit
                                    size={12}
                                    className="text-blue-500"
                                  />
                                )}

                                {index === 2 && (
                                  <Sparkles
                                    size={12}
                                    className="text-blue-500"
                                  />
                                )}
                              </div>

                              <div>
                                <p className="text-[9px] font-bold text-slate-700 dark:text-slate-300">
                                  {label}
                                </p>

                                <p className="text-[8px] text-slate-400">
                                  {status}
                                </p>
                              </div>
                            </div>

                            <CheckCircle2
                              size={13}
                              className="text-emerald-500"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp size={13} className="text-emerald-500" />

                        <span className="text-[9px] font-bold text-slate-500">
                          Intelligent workflow
                        </span>
                      </div>

                      <span className="text-[9px] font-black text-[#276ea5] dark:text-[#60a5fa]">
                        READY
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating RAG */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -left-3
                    sm:-left-7
                    top-20
                    px-3
                    py-2.5
                    rounded-xl
                    border
                    border-slate-200
                    dark:border-slate-800
                    bg-white/90
                    dark:bg-[#0b1528]/95
                    backdrop-blur-xl
                    shadow-lg
                  "
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Database size={15} className="text-blue-500" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                        Knowledge
                      </p>

                      <p className="text-[10px] font-black text-slate-800 dark:text-white">
                        Secure RAG
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Multi-modal */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -right-3
                    sm:-right-6
                    bottom-16
                    px-3
                    py-2.5
                    rounded-xl
                    border
                    border-slate-200
                    dark:border-slate-800
                    bg-white/90
                    dark:bg-[#0b1528]/95
                    backdrop-blur-xl
                    shadow-lg
                  "
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Layers size={15} className="text-cyan-500" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                        Capability
                      </p>

                      <p className="text-[10px] font-black text-slate-800 dark:text-white">
                        Multi-Modal
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Hero bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="
              mt-10
              lg:mt-14
              pt-5
              border-t
              border-slate-200
              dark:border-slate-800
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              justify-between
              gap-4
            "
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
                    className={`w-7 h-7 rounded-full border-2 border-slate-50 dark:border-[#050b14] ${color}`}
                  />
                ))}
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Strategy • Architecture • Engineering • Deployment
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              <ShieldCheck size={14} className="text-emerald-500" />
              Built for enterprise workloads
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-7">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">
              What We Build
            </p>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Intelligence engineered
              <br className="hidden sm:block" />
              for your business.
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-6 text-slate-500 dark:text-slate-400">
            From proprietary language models to enterprise knowledge systems,
            our GenAI solutions are designed around your data, workflows, and
            strategic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                min-h-70
                p-6
                rounded-3xl
                border
                border-slate-200
                dark:border-slate-800
                bg-white
                dark:bg-[#091321]
                shadow-sm
                hover:shadow-xl
                hover:shadow-blue-900/10
                transition-all
                duration-300
                overflow-hidden
              "
            >
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-[#276ea5] dark:text-[#60a5fa] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>

                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  {feature.tag}
                </span>
              </div>

              <div className="relative z-10 mt-6">
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#276ea5] dark:group-hover:text-[#60a5fa] transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-[13px] leading-6 text-slate-500 dark:text-slate-400">
                  {feature.desc}
                </p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 h-px bg-slate-100 dark:bg-slate-800" />

              <div className="absolute bottom-2.5 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={15} className="text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-[#276ea5] dark:text-[#60a5fa] text-[11px] font-bold">
                <Compass size={13} />
                Workflow Automation
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Transform creativity into an intelligent advantage.
              </h2>

              <div className="mt-5 w-16 h-1 rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#091321] border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2
                  className="text-[#276ea5] dark:text-[#60a5fa]"
                  size={21}
                />

                <h3 className="mt-4 text-lg font-black text-slate-900 dark:text-white">
                  Unprecedented Creative & Analytical Potential
                </h3>

                <p className="mt-2.5 text-[13px] leading-6 text-slate-500 dark:text-slate-400">
                  Generative AI unlocks new creative and analytical potential
                  across industries. We build production-ready architectures
                  that automate asset creation, synthesize massive data points,
                  and deliver personalized experiences at scale.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-linear-to-br from-[#276ea5] to-[#1d527d] text-white shadow-xl">
                <Sparkles size={22} />

                <h3 className="mt-4 text-lg font-black">
                  Specialized Conversational Interfaces
                </h3>

                <p className="mt-2.5 text-[13px] leading-6 text-blue-100">
                  Launch specialized AI assistants, streamline content
                  production, and integrate foundation models into existing
                  applications with secure, scalable architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 bg-slate-100/70 dark:bg-[#08111f] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">
              Why Shilsha Technologies
            </p>

            <h2 className="mt-2.5 text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Enterprise GenAI without the guesswork.
            </h2>

            <p className="mt-3 text-[13px] sm:text-sm text-slate-500 dark:text-slate-400">
              Secure infrastructure, intelligent models, and engineering
              expertise designed around your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -4 }}
              className="
                p-6
                sm:p-7
                rounded-3xl
                bg-white
                dark:bg-[#091321]
                border
                border-slate-200
                dark:border-slate-800
                shadow-sm
              "
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-black">
                  01
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  Rigid Guardrails & Encryption
                </h3>
              </div>

              <p className="mt-4 text-[13px] sm:text-sm leading-6 text-slate-500 dark:text-slate-400">
                We implement guardrails, hallucination reduction strategies,
                secure data pipelines, and enterprise-grade encryption to keep
                your generative workflows precise, compliant, and protected.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="
                p-6
                sm:p-7
                rounded-3xl
                bg-white
                dark:bg-[#091321]
                border
                border-slate-200
                dark:border-slate-800
                shadow-sm
              "
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-black">
                  02
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  Frontier AI Engineering
                </h3>
              </div>

              <p className="mt-4 text-[13px] sm:text-sm leading-6 text-slate-500 dark:text-slate-400">
                Leverage our domain expertise to build proprietary generative
                applications tailored specifically to your enterprise
                infrastructure, data, and strategic vision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <ReasonsWhySection />
        <AwardsSection />
        <Footer />
      </div>
    </div>
  );
};

export default GenerativeAiPage;

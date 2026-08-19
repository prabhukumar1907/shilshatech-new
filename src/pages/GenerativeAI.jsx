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
  const brandTheme = {
    primaryBlue: "#276ea5",
    secondaryIndigo: "#1d527d",
    electricCyan: "#60a5fa",
  };

  const features = [
    {
      icon: <Sparkles size={22} />,
      title: "Custom LLM Content Engines",
      desc: "Deploy proprietary content creation models trained on your brand tone for automated marketing, reports, and documentation.",
      tag: "Pillar 01",
    },
    {
      icon: <Layers size={22} />,
      title: "Multi-Modal AI Integrations",
      desc: "Unify text, image, audio, and video generation workflows into a single seamless interface for enhanced enterprise productivity.",
      tag: "Pillar 02",
    },
    {
      icon: <Cpu size={22} />,
      title: "Secure Enterprise RAG Systems",
      desc: "Connect your internal knowledge bases securely to generative models with zero data leakage and real-time semantic retrieval.",
      tag: "Pillar 03",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050b14] text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-blue-400 selection:text-slate-950 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-[10%] w-125 h-125 rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-[140px]" />
        <div className="absolute top-[25%] right-[-10%] w-125 h-125 rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[35%] w-100 h-100 rounded-full bg-indigo-500/5 blur-[130px]" />
      </div>

      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28">
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.07]">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative z-20"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-400/20 bg-white/80 dark:bg-blue-500/10 backdrop-blur-xl shadow-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                </span>

                <Sparkles
                  size={15}
                  className="text-[#276ea5] dark:text-[#60a5fa]"
                />

                <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-slate-600 dark:text-slate-300">
                  Enterprise Generative AI
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-black leading-[0.98] tracking-[-0.045em] text-slate-950 dark:text-white max-w-4xl">
                Build AI That
                <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-0 blur-2xl opacity-20 bg-blue-500" />

                  <span className="relative bg-linear-to-r from-[#276ea5] via-[#3b82c4] to-[#60a5fa] bg-clip-text text-transparent">
                    Creates. Thinks.
                  </span>
                </span>
                <br />
                <span className="text-slate-700 dark:text-slate-200">
                  Scales.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-600 dark:text-slate-400">
                Shilsha Technologies architects enterprise-grade generative AI
                systems that transform ideas, data, and workflows into
                intelligent products built for real-world scale.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to="/contact-us"
                    className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-linear-to-r from-[#276ea5] to-[#1d527d] text-white font-bold text-sm shadow-xl shadow-blue-900/20 dark:shadow-blue-500/20 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-linear-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <span className="relative">Build Your AI Solution</span>

                    <ArrowRight
                      size={17}
                      className="relative transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>

                <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-white/3 backdrop-blur-md">
                  <ShieldCheck size={17} className="text-emerald-500" />

                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Enterprise-ready & secure
                  </span>
                </div>
              </div>

              {/* Trust Metrics */}
              <div className="mt-10 pt-7 border-t border-slate-200 dark:border-slate-800 max-w-2xl">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <Zap
                        size={15}
                        className="text-[#276ea5] dark:text-[#60a5fa]"
                      />
                      <span className="text-lg font-black text-slate-900 dark:text-white">
                        AI
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-500">
                      Native Architecture
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

                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-500">
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

                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-500">
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
              className="lg:col-span-5 relative min-h-120 sm:min-h-130 flex items-center justify-center"
            >
              <div className="absolute w-90 h-90 rounded-full bg-blue-500/15 blur-[90px]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-90 h-90 sm:w-105 sm:h-105 rounded-full border border-dashed border-blue-400/20"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-70 h-70 sm:w-80 sm:h-80 rounded-full border border-blue-400/10"
              />

              <div className="relative w-full max-w-105 aspect-square">
                <div className="absolute inset-4 rounded-[2.5rem] bg-linear-to-br from-[#276ea5]/20 via-blue-500/5 to-cyan-400/10 blur-xl" />

                <div className="absolute inset-0 rounded-[2.5rem] border border-white/70 dark:border-blue-400/20 bg-white/75 dark:bg-[#091321]/90 backdrop-blur-2xl shadow-[0_30px_100px_rgba(39,110,165,0.18)] overflow-hidden">
                  {/* Top bar */}
                  <div className="h-14 px-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                      </div>

                      <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        GenAI Engine
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-bold text-emerald-500">
                        ONLINE
                      </span>
                    </div>
                  </div>

                  {/* AI Content */}
                  <div className="p-6 sm:p-7">
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
                        className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-[#276ea5] to-[#60a5fa] flex items-center justify-center shadow-xl"
                      >
                        <Wand2 size={32} className="text-white" />

                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white dark:border-[#091321]" />
                      </motion.div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
                          Processing
                        </p>

                        <h3 className="mt-1 text-lg font-black text-slate-900 dark:text-white">
                          Creative Intelligence
                        </h3>

                        <p className="text-[10px] text-slate-500">
                          Multi-modal generation engine
                        </p>
                      </div>
                    </div>

                    {/* Fake generation area */}
                    <div className="mt-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#050b14] p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <BrainCircuit size={14} className="text-blue-500" />

                        <span className="text-[10px] font-bold text-slate-500">
                          MODEL PIPELINE
                        </span>
                      </div>

                      <div className="space-y-3">
                        {[
                          ["Context", "Knowledge retrieved"],
                          ["Reasoning", "Prompt optimized"],
                          ["Generation", "Content synthesized"],
                        ].map(([label, status], index) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.7 + index * 0.15,
                            }}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                {index === 0 && (
                                  <Database
                                    size={13}
                                    className="text-blue-500"
                                  />
                                )}

                                {index === 1 && (
                                  <BrainCircuit
                                    size={13}
                                    className="text-blue-500"
                                  />
                                )}

                                {index === 2 && (
                                  <Sparkles
                                    size={13}
                                    className="text-blue-500"
                                  />
                                )}
                              </div>

                              <div>
                                <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
                                  {label}
                                </p>

                                <p className="text-[9px] text-slate-400">
                                  {status}
                                </p>
                              </div>
                            </div>

                            <CheckCircle2
                              size={14}
                              className="text-emerald-500"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom status */}
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={14} className="text-emerald-500" />

                        <span className="text-[10px] font-bold text-slate-500">
                          Intelligent workflow
                        </span>
                      </div>

                      <span className="text-[10px] font-black text-[#276ea5] dark:text-[#60a5fa]">
                        READY
                      </span>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-5 sm:-left-10 top-24 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0b1528]/95 backdrop-blur-xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Database size={17} className="text-blue-500" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Knowledge
                      </p>
                      <p className="text-xs font-black text-slate-800 dark:text-white">
                        Secure RAG
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-4 sm:-right-8 bottom-20 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0b1528]/95 backdrop-blur-xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                      <Layers size={17} className="text-cyan-500" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Capability
                      </p>
                      <p className="text-xs font-black text-slate-800 dark:text-white">
                        Multi-Modal
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
            className="mt-14 lg:mt-20 pt-7 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
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
                    className={`w-8 h-8 rounded-full border-2 border-slate-50 dark:border-[#050b14] ${color}`}
                  />
                ))}
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Strategy • Architecture • Engineering • Deployment
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <ShieldCheck size={15} className="text-emerald-500" />
              Built for enterprise workloads
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
              What We Build
            </p>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Intelligence engineered
              <br className="hidden sm:block" />
              for your business.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
            From proprietary language models to enterprise knowledge systems,
            our GenAI solutions are designed around your data, workflows, and
            strategic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group relative min-h-75 p-7 rounded-[1.75rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#091321] shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#276ea5] dark:text-[#60a5fa] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {feature.tag}
                </span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-[#276ea5] dark:group-hover:text-[#60a5fa] transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {feature.desc}
                </p>
              </div>

              <div className="absolute bottom-7 left-7 right-7 h-px bg-slate-100 dark:bg-slate-800" />

              <div className="absolute bottom-3 right-7 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={16} className="text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-[#276ea5] dark:text-[#60a5fa] text-xs font-bold">
                <Compass size={14} />
                Workflow Automation
              </div>

              <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Transform creativity into an intelligent advantage.
              </h2>

              <div className="mt-6 w-20 h-1 rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-7 rounded-3xl bg-white dark:bg-[#091321] border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2
                  className="text-[#276ea5] dark:text-[#60a5fa]"
                  size={22}
                />

                <h3 className="mt-5 text-lg font-black text-slate-900 dark:text-white">
                  Unprecedented Creative & Analytical Potential
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Generative AI unlocks new creative and analytical potential
                  across industries. We build production-ready architectures
                  that automate asset creation, synthesize massive data points,
                  and deliver personalized experiences at scale.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-linear-to-br from-[#276ea5] to-[#1d527d] text-white shadow-xl">
                <Sparkles size={24} />

                <h3 className="mt-5 text-lg font-black">
                  Specialized Conversational Interfaces
                </h3>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                  Launch specialized AI assistants, streamline content
                  production, and integrate foundation models into existing
                  applications with secure, scalable architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 bg-slate-100/70 dark:bg-[#08111f] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
              Why Shilsha
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Enterprise GenAI without the guesswork.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Secure infrastructure, intelligent models, and engineering
              expertise designed around your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-4xl bg-white dark:bg-[#091321] border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-black">
                  01
                </div>

                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  Rigid Guardrails & Encryption
                </h3>
              </div>

              <p className="mt-6 text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
                We implement guardrails, hallucination reduction strategies,
                secure data pipelines, and enterprise-grade encryption to keep
                your generative workflows precise, compliant, and protected.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-4xl bg-white dark:bg-[#091321] border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-black">
                  02
                </div>

                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  Frontier AI Engineering
                </h3>
              </div>

              <p className="mt-6 text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
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

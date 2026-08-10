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
  Workflow,
  Network,
  Lock,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReasonsWhySection from "../components/ReasonsWhySection";
import AwardsSection from "../components/AwardsSection";
import Footer from "../components/Footer";

const AiDevelopmentPage = () => {
  const brandTheme = {
    primaryBlue: "#276ea5",
    electricCyan: "#60a5fa",
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#060b13] text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-[#60a5fa] selection:text-slate-900 overflow-hidden relative">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-112.5 h-112.5 bg-cyan-500/10 dark:bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Hero Section - Completely New Modern Asymmetric Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2.5rem] border border-slate-200 dark:border-blue-500/20 bg-white/80 dark:bg-[#0b1528]/90 backdrop-blur-xl p-8 sm:p-14 shadow-2xl overflow-hidden"
        >
          {/* Subtle Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] bg-[radial-gradient(#276ea5_1px,transparent_1px)] dark:bg-[radial-gradient(#60a5fa_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-6 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-2xl text-xs font-bold tracking-wide uppercase border shadow-sm bg-blue-500/10 dark:bg-blue-500/15 text-[#276ea5] dark:text-[#60a5fa] border-blue-500/20 dark:border-blue-400/30">
                <Cpu
                  size={16}
                  className="shrink-0 animate-pulse text-[#276ea5] dark:text-[#60a5fa]"
                />
                <span>Shilsha Technologies Expert Services</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                Next-Gen AI Development &{" "}
                <span className="text-[#276ea5] dark:text-[#60a5fa]">
                  Machine Learning
                </span>{" "}
                Solutions
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Shilsha Technologies engineers bespoke artificial intelligence
                models, generative AI applications, and autonomous agent
                workflows to future-proof your enterprise.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white text-sm font-semibold shadow-xl shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/40 bg-linear-to-r from-[#276ea5] to-[#1d527d]"
                  >
                    <span>Hire AI Engineers</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>

                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>Production-Grade Neural Architectures</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual Card Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:col-span-5 relative"
            >
              <div className="relative w-full max-w-sm aspect-4/5 rounded-3xl border border-slate-200 dark:border-blue-500/30 bg-linear-to-br from-slate-100 via-white to-blue-50 dark:from-[#070d18] dark:via-[#0b1528] dark:to-[#0f2035] p-6 flex flex-col justify-between shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />

                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Core Architecture
                  </span>
                  <div className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                    Active
                  </div>
                </div>

                <div className="my-auto py-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <BrainCircuit
                      className="text-[#276ea5] dark:text-[#60a5fa]"
                      size={64}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Cognitive Engine Core
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      LLM Fine-Tuning • Neural Networks • Agents
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-emerald-500" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Throughput
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#276ea5] dark:text-[#60a5fa]">
                    99.9% Optimized
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid - Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Sparkles size={22} />,
              title: "Generative AI & Fine-Tuning",
              desc: "Deploy customized Large Language Models tailored to your exact business domain and data privacy frameworks.",
              tag: "Pillar 01",
            },
            {
              icon: <Bot size={22} />,
              title: "Autonomous Agents & Chatbots",
              desc: "Build intelligent cognitive assistants capable of multi-step reasoning, complex task automation, and CRM integration.",
              tag: "Pillar 02",
            },
            {
              icon: <Cpu size={22} />,
              title: "Predictive Analytics & ML",
              desc: "Uncover deep enterprise insights, forecast market behavior, and automate decision-making with custom models.",
              tag: "Pillar 03",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-4xl border border-slate-200 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#276ea5]/40 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-blue-500/10 text-[#276ea5] dark:text-[#60a5fa] shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {feature.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#276ea5] dark:group-hover:text-[#60a5fa] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Intro Section - Split Feature Panel */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-[#276ea5] dark:text-[#60a5fa] border border-blue-500/20">
              <Compass size={14} />
              <span>Cognitive Operations</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Transforming Enterprise Operations Through Cognitive Intelligence
            </h2>

            <div className="w-24 h-1.5 mx-auto rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa] opacity-80" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-xl space-y-5 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-[#276ea5] dark:text-[#60a5fa]">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Bridging Architecture and Practical Impact
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Artificial intelligence is no longer a futuristic luxury—it is
                the core engine driving operational efficiency,
                hyper-personalization, and disruptive market growth. Shilsha
                Technologies bridges the gap between complex neural
                architectures and practical enterprise applications.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-xl space-y-5 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-[#276ea5] dark:text-[#60a5fa]">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Scalable RAG and Decision Engines
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether you need to embed cognitive search into legacy
                infrastructure, build domain-specific RAG pipelines, or deploy
                automated decision engines, our AI architects deliver scalable,
                production-ready systems built for heavy workloads.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section - Modern Horizontal Card Grid */}
        <section className="py-16 px-6 sm:px-10 rounded-[2.5rem] bg-slate-100/70 dark:bg-[#0b1528]/50 border border-slate-200 dark:border-blue-500/20 shadow-xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Why Industry Leaders Choose Shilsha Technologies for AI
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Partner with our AI engineering division to turn complex data
              streams into automated assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3 }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#070d18] border border-slate-200 dark:border-blue-500/20 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#276ea5] dark:text-[#60a5fa] flex items-center justify-center font-bold text-lg">
                  01
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Rigorous Governance & Security
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  We implement strict model governance, secure data handling
                  pipelines, and low-latency API integrations that ensure your
                  implementations are enterprise-secure and ethically compliant.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3 }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#070d18] border border-slate-200 dark:border-blue-500/20 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#276ea5] dark:text-[#60a5fa] flex items-center justify-center font-bold text-lg">
                  02
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  High-Performance Scalability
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Leverage state-of-the-art infrastructure design to scale your
                  cognitive workloads effortlessly as your user base and data
                  volume expand.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="mt-24 space-y-12">
        <ReasonsWhySection />
        <AwardsSection />
        <Footer />
      </div>
    </div>
  );
};

export default AiDevelopmentPage;

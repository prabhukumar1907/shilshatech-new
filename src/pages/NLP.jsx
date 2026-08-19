import React from "react";
import {
  MessageSquareCode,
  FileText,
  Languages,
  ArrowRight,
  Bot,
  CheckCircle2,
  Sparkles,
  BrainCircuit,
  Search,
  ScanText,
  Globe2,
  Zap,
  ShieldCheck,
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

const NaturalLanguageProcessingPage = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Intelligence",
      desc: "Extract structured data, clauses, entities, and insights from contracts, invoices, reports, and other unstructured documents.",
    },
    {
      icon: MessageSquareCode,
      title: "Sentiment & Intent",
      desc: "Understand customer conversations, feedback, and support interactions to identify sentiment, intent, topics, and emerging needs.",
    },
    {
      icon: Languages,
      title: "Multilingual NLP",
      desc: "Build language-aware systems for classification, translation, semantic search, and intelligent processing across multiple languages.",
    },
  ];

  const capabilities = [
    "Document intelligence",
    "Sentiment analysis",
    "Intent classification",
    "Entity extraction",
    "Text summarization",
    "Multilingual NLP",
  ];

  const workflow = [
    {
      icon: FileText,
      title: "Understand",
      text: "Parse documents & text",
    },
    {
      icon: Search,
      title: "Analyze",
      text: "Extract meaning & intent",
    },
    {
      icon: BrainCircuit,
      title: "Interpret",
      text: "Generate intelligent insights",
    },
    {
      icon: Sparkles,
      title: "Automate",
      text: "Turn insights into action",
    },
  ];

  const intelligencePoints = [
    {
      icon: ScanText,
      label: "Entity Extraction",
      value: "Structured",
      color: "text-violet-500",
      bg: "bg-violet-500/10",
    },
    {
      icon: MessageSquareCode,
      label: "Sentiment",
      value: "Analyzed",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Globe2,
      label: "Languages",
      value: "Multilingual",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-[#f7faff]
        dark:bg-[#050a12]
        text-slate-900
        dark:text-white
        overflow-hidden
        font-sans
        selection:bg-[#60a5fa]
        selection:text-slate-900
      "
    >
      <main className="pt-20 sm:pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              relative
              min-h-140
              grid
              grid-cols-1
              lg:grid-cols-12
              items-center
              gap-8
              lg:gap-10
            "
          >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="
                  absolute
                  top-[5%]
                  right-[5%]
                  w-70
                  h-70
                  rounded-full
                  bg-blue-500/[0.07]
                  blur-[100px]
                "
              />

              <div
                className="
                  absolute
                  bottom-[5%]
                  left-[15%]
                  w-55
                  h-55
                  rounded-full
                  bg-cyan-400/4
                  blur-[90px]
                "
              />
            </div>

            {/* Small accent */}
            <div
              className="absolute top-0 left-0 w-16 h-0.5 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
              }}
            />

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative z-10 lg:col-span-7 py-10 lg:py-14"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3.5
                  py-1.5
                  rounded-full
                  border
                  border-blue-200
                  dark:border-blue-400/20
                  bg-blue-50/80
                  dark:bg-blue-500/[0.07]
                  backdrop-blur-sm
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>

                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#276ea5] dark:text-blue-300">
                  Natural Language Processing
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.65 }}
                className="
                  mt-5
                  text-[2.65rem]
                  sm:text-5xl
                  lg:text-[4rem]
                  xl:text-[4.55rem]
                  leading-[0.97]
                  tracking-[-0.055em]
                  font-black
                  max-w-3xl
                "
              >
                Turn Language
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
                  Into Intelligence.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.55 }}
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  sm:text-base
                  leading-7
                  text-slate-600
                  dark:text-slate-300
                "
              >
                Shilsha Technologies builds advanced NLP systems that
                understand, analyze, and transform unstructured language into
                actionable business intelligence.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-3 mt-7"
              >
                <Link
                  to="/contact-us"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2.5
                    px-5
                    py-3
                    rounded-xl
                    text-white
                    text-sm
                    font-bold
                    shadow-lg
                    shadow-blue-600/20
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    hover:shadow-blue-600/30
                    transition-all
                    duration-300
                  "
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  Build NLP Solutions

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-7
                      h-7
                      rounded-lg
                      bg-white/15
                    "
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </Link>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    font-semibold
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  <ShieldCheck size={15} className="text-emerald-500" />
                  Enterprise-ready NLP
                </div>
              </motion.div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="
                  grid
                  grid-cols-3
                  max-w-lg
                  mt-8
                  pt-5
                  border-t
                  border-slate-200
                  dark:border-white/10
                "
              >
                <div>
                  <p className="text-base sm:text-lg font-black">
                    Intelligent
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                    Semantic understanding
                  </p>
                </div>

                <div className="border-l border-slate-200 dark:border-white/10 pl-4">
                  <p className="text-base sm:text-lg font-black">
                    Automated
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                    Workflow ready
                  </p>
                </div>

                <div className="border-l border-slate-200 dark:border-white/10 pl-4">
                  <p className="text-base sm:text-lg font-black">
                    Multilingual
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                    Global language support
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.75 }}
              className="
                lg:col-span-5
                relative
                min-h-105
                flex
                items-center
                justify-center
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  w-67.5
                  h-67.5
                  rounded-full
                  bg-blue-500/10
                  blur-[90px]
                "
              />

              {/* Outer orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-82.5
                  h-82.5
                  sm:w-97.5
                  sm:h-97.5
                  rounded-full
                  border
                  border-blue-400/10
                "
              >
                <span
                  className="
                    absolute
                    top-7
                    left-1/2
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-blue-400
                    shadow-lg
                    shadow-blue-400/60
                  "
                />

                <span
                  className="
                    absolute
                    bottom-10
                    right-5
                    w-2
                    h-2
                    rounded-full
                    bg-cyan-400
                    shadow-lg
                    shadow-cyan-400/60
                  "
                />
              </motion.div>

              {/* Inner orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-57.5
                  h-57.5
                  sm:w-71.25
                  sm:h-71.25
                  rounded-full
                  border
                  border-dashed
                  border-cyan-400/10
                "
              >
                <span className="absolute top-1/2 -left-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </motion.div>

              {/* Main AI Core */}
              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.035, 1],
                    boxShadow: [
                      "0 20px 50px rgba(39,110,165,0.18)",
                      "0 25px 65px rgba(39,110,165,0.3)",
                      "0 20px 50px rgba(39,110,165,0.18)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    w-28
                    h-28
                    sm:w-32
                    sm:h-32
                    rounded-4xl
                    flex
                    items-center
                    justify-center
                    bg-linear-to-br
                    from-[#276ea5]
                    via-blue-500
                    to-[#1d527d]
                  "
                >
                  <Bot
                    size={54}
                    className="text-white"
                    strokeWidth={1.35}
                  />

                  <div className="absolute inset-0 rounded-4xl border border-white/20" />

                  <div className="absolute -inset-3 rounded-[2.3rem] border border-blue-400/10" />
                </motion.div>

                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                  <p className="text-sm font-black">
                    Language → Meaning → Action
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-400">
                    Intelligent text processing
                  </p>
                </div>
              </div>

              {/* Floating Input */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  z-20
                  top-[11%]
                  left-[2%]
                  sm:left-0
                  flex
                  items-center
                  gap-2
                  px-2.5
                  py-2
                  rounded-xl
                  bg-white/95
                  dark:bg-[#0b1729]/95
                  border
                  border-slate-200
                  dark:border-white/10
                  shadow-lg
                "
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <FileText
                    size={14}
                    className="text-[#276ea5] dark:text-blue-300"
                  />
                </div>

                <div>
                  <p className="text-[7px] uppercase tracking-wider text-slate-400">
                    Input
                  </p>
                  <p className="text-[9px] font-bold">Documents</p>
                </div>
              </motion.div>

              {/* Floating Language */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  z-20
                  top-[20%]
                  right-[1%]
                  sm:right-0
                  flex
                  items-center
                  gap-2
                  px-2.5
                  py-2
                  rounded-xl
                  bg-white/95
                  dark:bg-[#0b1729]/95
                  border
                  border-slate-200
                  dark:border-white/10
                  shadow-lg
                "
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Globe2 size={14} className="text-cyan-500" />
                </div>

                <div>
                  <p className="text-[7px] uppercase tracking-wider text-slate-400">
                    Language
                  </p>
                  <p className="text-[9px] font-bold">Multilingual</p>
                </div>
              </motion.div>

              {/* Floating Sentiment */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  z-20
                  bottom-[14%]
                  left-[2%]
                  sm:left-0
                  flex
                  items-center
                  gap-2
                  px-2.5
                  py-2
                  rounded-xl
                  bg-white/95
                  dark:bg-[#0b1729]/95
                  border
                  border-slate-200
                  dark:border-white/10
                  shadow-lg
                "
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <MessageSquareCode
                    size={14}
                    className="text-emerald-500"
                  />
                </div>

                <div>
                  <p className="text-[7px] uppercase tracking-wider text-slate-400">
                    Analysis
                  </p>
                  <p className="text-[9px] font-bold">Sentiment</p>
                </div>
              </motion.div>

              {/* Floating Entities */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  z-20
                  bottom-[9%]
                  right-[3%]
                  sm:right-[1%]
                  flex
                  items-center
                  gap-2
                  px-2.5
                  py-2
                  rounded-xl
                  bg-white/95
                  dark:bg-[#0b1729]/95
                  border
                  border-slate-200
                  dark:border-white/10
                  shadow-lg
                "
              >
                <div className="w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <ScanText size={14} className="text-violet-500" />
                </div>

                <div>
                  <p className="text-[7px] uppercase tracking-wider text-slate-400">
                    Extraction
                  </p>
                  <p className="text-[9px] font-bold">Entities</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              overflow-hidden
              rounded-[1.75rem]
              border
              border-slate-200
              dark:border-white/10
              bg-white
              dark:bg-[#08111f]
              shadow-[0_15px_50px_rgba(15,23,42,0.06)]
              dark:shadow-none
            "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(39,110,165,0.035)" }}
                  className={`
                    relative
                    p-6
                    sm:p-7
                    group
                    ${
                      index !== features.length - 1
                        ? "border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-blue-500/10
                        flex
                        items-center
                        justify-center
                        text-[#276ea5]
                        dark:text-blue-300
                        group-hover:scale-105
                        group-hover:bg-blue-500/15
                        transition-all
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <span
                      className="
                        text-4xl
                        font-black
                        text-slate-100
                        dark:text-white/[0.035]
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-[13px] leading-6 text-slate-500 dark:text-slate-400">
                    {feature.desc}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-1.5
                      text-[11px]
                      font-bold
                      text-[#276ea5]
                      dark:text-blue-300
                    "
                  >
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

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-22">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-blue-500
                "
              >
                <BrainCircuit size={14} />
                Text Intelligence
              </div>

              <h2
                className="
                  mt-4
                  text-3xl
                  sm:text-4xl
                  font-black
                  tracking-tight
                  leading-tight
                "
              >
                Turning unstructured text into{" "}
                <span className="text-[#276ea5] dark:text-blue-400">
                  actionable intelligence.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-7">
                Text is one of the most abundant yet least structured forms of
                enterprise data. Shilsha Technologies engineers sophisticated
                NLP pipelines that allow systems to read, interpret, classify,
                and act upon human language with precision.
              </p>

              {/* Capability pills */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 2 }}
                    className="
                      flex
                      items-center
                      gap-2.5
                      px-3.5
                      py-2.5
                      rounded-xl
                      border
                      border-slate-200
                      dark:border-white/10
                      bg-white
                      dark:bg-white/3
                      text-[12px]
                      font-medium
                      transition-transform
                    "
                  >
                    <CheckCircle2
                      size={14}
                      className="text-emerald-500 shrink-0"
                    />

                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-4xl
                  p-6
                  sm:p-7
                  bg-linear-to-br
                  from-[#276ea5]
                  to-[#123b5c]
                  shadow-xl
                  shadow-blue-900/15
                "
              >
                {/* Glow */}
                <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-blue-300/20 blur-3xl" />

                <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-white/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <MessageSquareCode
                        size={19}
                        className="text-white"
                      />
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-100">
                      NLP Framework
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-black text-white max-w-lg">
                    Transform communication data into intelligent workflows.
                  </h3>

                  <div className="mt-6 space-y-2.5">
                    {workflow.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                          className="
                            flex
                            items-center
                            gap-3
                            p-3
                            rounded-xl
                            bg-white/8
                            border
                            border-white/10
                            hover:bg-white/12
                            transition-colors
                          "
                        >
                          <div
                            className="
                              w-8
                              h-8
                              rounded-lg
                              bg-white/10
                              flex
                              items-center
                              justify-center
                              text-white
                              shrink-0
                            "
                          >
                            <Icon size={15} />
                          </div>

                          <div>
                            <p className="text-[12px] font-bold text-white">
                              {item.title}
                            </p>

                            <p className="text-[9px] text-blue-100">
                              {item.text}
                            </p>
                          </div>

                          <CheckCircle2
                            size={14}
                            className="ml-auto text-emerald-300 shrink-0"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-18">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-3
              p-3
              rounded-[1.75rem]
              border
              border-slate-200
              dark:border-white/10
              bg-white
              dark:bg-[#08111f]
              shadow-lg
            "
          >
            {intelligencePoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-slate-50
                    dark:bg-white/3
                    border
                    border-slate-100
                    dark:border-white/5
                  "
                >
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      ${item.bg}
                      flex
                      items-center
                      justify-center
                      ${item.color}
                    `}
                  >
                    <Icon size={16} />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                      {item.label}
                    </p>

                    <p className="text-sm font-bold mt-0.5">
                      {item.value}
                    </p>
                  </div>

                  <Zap
                    size={13}
                    className="ml-auto text-blue-400 opacity-60"
                  />
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card  */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.45 }}
              className="
                relative
                overflow-hidden
                p-6
                sm:p-7
                rounded-[1.75rem]
                bg-white
                dark:bg-[#08111f]
                border
                border-slate-200
                dark:border-white/10
                shadow-lg
              "
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500/4 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                      text-[#276ea5]
                      dark:text-blue-300
                    "
                  >
                    <BrainCircuit size={18} />
                  </div>

                  <span className="text-4xl font-black text-slate-100 dark:text-white/4">
                    01
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Unlock Semantic Business Value
                </h3>

                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-6">
                  We integrate high-performance language models and custom NLP
                  strategies to understand enterprise content while supporting
                  scalability, privacy, and reliable processing.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="
                relative
                overflow-hidden
                p-6
                sm:p-7
                rounded-[1.75rem]
                bg-linear-to-br
                from-slate-900
                to-[#10243a]
                dark:from-[#0d1b2d]
                dark:to-[#0a1422]
                border
                border-slate-800
                dark:border-white/10
                shadow-lg
              "
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-400/[0.07] blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-blue-400/10
                      flex
                      items-center
                      justify-center
                      text-blue-300
                    "
                  >
                    <Sparkles size={18} />
                  </div>

                  <span className="text-4xl font-black text-white/4">
                    02
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  Automate Language-Driven Workflows
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-6">
                  Turn documents, conversations, feedback, and communication
                  data into automated workflows that improve decision-making,
                  productivity, and customer experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="
              relative
              overflow-hidden
              rounded-4xl
              border
              border-blue-200
              dark:border-blue-400/10
              bg-blue-50
              dark:bg-[#081827]
              px-6
              py-9
              sm:px-8
              sm:py-10
            "
          >
            {/* Glows */}
            <div
              className="
                absolute
                -top-28
                -right-28
                w-64
                h-64
                rounded-full
                bg-blue-400/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-28
                -left-28
                w-64
                h-64
                rounded-full
                bg-cyan-400/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-6
              "
            >
              <div className="max-w-2xl">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-blue-500
                    dark:text-blue-300
                  "
                >
                  <BrainCircuit size={14} />
                  Build Smarter Language Systems
                </div>

                <h2
                  className="
                    mt-3
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-black
                    tracking-tight
                  "
                >
                  Have language data that could power your next intelligent
                  workflow?
                </h2>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-6">
                  Transform documents, conversations, and enterprise text into
                  intelligent systems built around your business.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  shrink-0
                  px-5
                  py-3
                  rounded-xl
                  text-white
                  text-sm
                  font-bold
                  shadow-lg
                  shadow-blue-600/20
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Discuss Your NLP Project

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-7
                    h-7
                    rounded-lg
                    bg-white/15
                  "
                >
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </span>
              </Link>
            </div>
          </motion.div>
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

export default NaturalLanguageProcessingPage;
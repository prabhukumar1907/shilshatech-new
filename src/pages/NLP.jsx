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
      title: "Automated Document Parsing",
      desc: "Extract structured data, clauses, and insights instantly from complex contracts, invoices, and unstructured reports.",
    },
    {
      icon: MessageSquareCode,
      title: "Sentiment & Intent Analysis",
      desc: "Monitor customer feedback, social channels, and support tickets to gauge brand sentiment and predict user needs.",
    },
    {
      icon: Languages,
      title: "Multilingual Text Processing",
      desc: "Deploy localized semantic understanding, translation models, and text classification across diverse regional languages.",
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

  return (
    <div className="min-h-screen bg-[#f7faff] dark:bg-[#050a12] text-slate-900 dark:text-white overflow-hidden font-sans selection:bg-[#60a5fa] selection:text-slate-900">
      <main className="pt-24 sm:pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-162.5 flex items-center">
            <div className="absolute pointer-events-none inset-0 overflow-hidden">
              <div className="absolute top-[8%] right-[8%] w-[320px] h-80 rounded-full bg-blue-500/6 blur-[110px]" />
              <div className="absolute bottom-[5%] left-[20%] w-70 h-70 rounded-full bg-cyan-400/4 blur-[100px]" />
            </div>

            <div
              className="absolute top-0 left-0 w-20 h-0.75 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-7 flex flex-col justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    w-fit
                    px-4
                    py-2
                    rounded-full
                    border
                    border-blue-200
                    dark:border-blue-400/20
                    bg-blue-50/80
                    dark:bg-blue-500/8
                    backdrop-blur-sm
                  "
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />

                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                  </span>

                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#276ea5] dark:text-blue-300">
                    Natural Language Processing
                  </span>
                </motion.div>

                {/* Heading */}

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                  className="
                    mt-7
                    text-[2.8rem]
                    sm:text-5xl
                    lg:text-[4.3rem]
                    xl:text-[4.8rem]
                    leading-[0.96]
                    tracking-[-0.055em]
                    font-black
                    max-w-4xl
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
                  Shilsha Technologies builds advanced NLP systems that
                  understand, analyze, and transform unstructured language into
                  actionable business intelligence.
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
                      shadow-xl
                      shadow-blue-600/20
                      hover:-translate-y-1
                      hover:shadow-2xl
                      transition-all
                      duration-300
                    "
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    }}
                  >
                    Build NLP Solutions
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/15">
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <CheckCircle2 size={17} className="text-emerald-500" />
                    Enterprise-ready NLP
                  </div>
                </motion.div>

                {/* Metrics */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 }}
                  className="
                    grid
                    grid-cols-3
                    max-w-xl
                    mt-12
                    pt-7
                    border-t
                    border-slate-200
                    dark:border-white/10
                  "
                >
                  <div>
                    <p className="text-lg sm:text-xl font-black">Intelligent</p>

                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                      Semantic understanding
                    </p>
                  </div>

                  <div className="border-l border-slate-200 dark:border-white/10 pl-5">
                    <p className="text-lg sm:text-xl font-black">Automated</p>

                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                      Workflow ready
                    </p>
                  </div>

                  <div className="border-l border-slate-200 dark:border-white/10 pl-5">
                    <p className="text-lg sm:text-xl font-black">
                      Multilingual
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                      Global language support
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* =====================================================
                  HERO VISUAL
              ====================================================== */}

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="
                  lg:col-span-5
                  relative
                  min-h-120
                  flex
                  items-center
                  justify-center
                "
              >
                <div className="absolute w-70 h-70 rounded-full bg-blue-500/10 blur-[90px]" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    w-77.5
                    h-77.5
                    sm:w-97.5
                    sm:h-97.5
                    rounded-full
                    border
                    border-blue-400/15
                  "
                >
                  <span className="absolute top-6 left-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/60" />

                  <span className="absolute bottom-12 right-5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
                </motion.div>

                {/* Inner orbit */}

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    w-55
                    h-55
                    sm:w-72.5
                    sm:h-72.5
                    rounded-full
                    border
                    border-dashed
                    border-cyan-400/15
                  "
                >
                  <span className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-cyan-400" />
                </motion.div>

                {/* Central Brain */}

                <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(39,110,165,0.18)",
                        "0 0 0 22px rgba(39,110,165,0)",
                        "0 0 0 0 rgba(39,110,165,0)",
                      ],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      w-28
                      h-28
                      sm:w-36
                      sm:h-36
                      rounded-[2.5rem]
                      flex
                      items-center
                      justify-center
                      bg-linear-to-br
                      from-[#276ea5]
                      via-blue-500
                      to-[#1d527d]
                      shadow-2xl
                      shadow-blue-600/25
                    "
                  >
                    <Bot size={62} className="text-white" strokeWidth={1.4} />

                    <div className="absolute inset-0 rounded-[2.5rem] border border-white/20" />
                  </motion.div>
                </div>

                {/* Floating document */}

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    z-20
                    top-[15%]
                    left-[5%]
                    sm:left-[2%]
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2.5
                    rounded-xl
                    bg-white/95
                    dark:bg-[#0b1729]/95
                    border
                    border-slate-200
                    dark:border-white/10
                    shadow-lg
                  "
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <FileText
                      size={15}
                      className="text-[#276ea5] dark:text-blue-300"
                    />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-slate-400">
                      Input
                    </p>

                    <p className="text-[10px] font-bold">Documents</p>
                  </div>
                </motion.div>

                {/* Floating language */}

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    z-20
                    top-[23%]
                    right-[2%]
                    sm:right-0
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2.5
                    rounded-xl
                    bg-white/95
                    dark:bg-[#0b1729]/95
                    border
                    border-slate-200
                    dark:border-white/10
                    shadow-lg
                  "
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Globe2 size={15} className="text-cyan-500" />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-slate-400">
                      Language
                    </p>

                    <p className="text-[10px] font-bold">Multilingual</p>
                  </div>
                </motion.div>

                {/* Floating sentiment */}

                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    z-20
                    bottom-[16%]
                    left-[4%]
                    sm:left-0
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2.5
                    rounded-xl
                    bg-white/95
                    dark:bg-[#0b1729]/95
                    border
                    border-slate-200
                    dark:border-white/10
                    shadow-lg
                  "
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <MessageSquareCode size={15} className="text-emerald-500" />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-slate-400">
                      Analysis
                    </p>

                    <p className="text-[10px] font-bold">Sentiment</p>
                  </div>
                </motion.div>

                {/* Floating extraction */}

                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    z-20
                    bottom-[10%]
                    right-[5%]
                    sm:right-[2%]
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2.5
                    rounded-xl
                    bg-white/95
                    dark:bg-[#0b1729]/95
                    border
                    border-slate-200
                    dark:border-white/10
                    shadow-lg
                  "
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <ScanText size={15} className="text-violet-500" />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-slate-400">
                      Extraction
                    </p>

                    <p className="text-[10px] font-bold">Entities</p>
                  </div>
                </motion.div>

                {/* Central label */}

                <div className="absolute bottom-[1%] left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                  <p className="text-sm font-black">
                    Language → Meaning → Action
                  </p>

                  <p className="text-[10px] text-slate-400 mt-1">
                    Intelligent text processing
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURES
        ========================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
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
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
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
                      index !== features.length - 1
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
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {feature.desc}
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
            {/* Left */}

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
                <BrainCircuit size={15} />
                Text Intelligence
              </div>

              <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Turning unstructured text into{" "}
                <span className="text-[#276ea5] dark:text-blue-400">
                  actionable intelligence.
                </span>
              </h2>

              <p className="mt-6 text-slate-600 dark:text-slate-400 leading-8">
                Text is one of the most abundant yet least structured forms of
                enterprise data. Shilsha Technologies engineers sophisticated
                Natural Language Processing pipelines that allow systems to
                read, interpret, categorize, and act upon human language with
                precision.
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

            {/* Right */}

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
                {/* Decorative glow */}

                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl" />

                <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <MessageSquareCode size={23} className="text-white" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100">
                      NLP Framework
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl sm:text-3xl font-black text-white">
                    Transform communication data into intelligent workflows.
                  </h3>

                  <div className="mt-8 space-y-3">
                    {workflow.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.title}
                          initial={{
                            opacity: 0,
                            x: 15,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: index * 0.1,
                          }}
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
                          <div
                            className="
                            w-9
                            h-9
                            rounded-lg
                            bg-white/10
                            flex
                            items-center
                            justify-center
                            text-white
                          "
                          >
                            <Icon size={16} />
                          </div>

                          <div>
                            <p className="text-sm font-bold text-white">
                              {item.title}
                            </p>

                            <p className="text-[10px] text-blue-100">
                              {item.text}
                            </p>
                          </div>

                          <CheckCircle2
                            size={15}
                            className="ml-auto text-emerald-300"
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

        {/* =========================================================
            BENEFITS / PERFORMANCE
        ========================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
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
                "
                >
                  <BrainCircuit size={21} />
                </div>

                <span className="text-5xl font-black text-slate-100 dark:text-white/4">
                  01
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Unlock Semantic Business Value
              </h3>

              <p className="mt-4 text-slate-500 dark:text-slate-400 leading-7">
                We integrate high-performance transformer models and custom NLP
                strategies to understand enterprise content while maintaining
                high throughput and strict privacy standards.
              </p>
            </motion.div>

            {/* Card 2 */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
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
                <div
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-blue-400/10
                  flex
                  items-center
                  justify-center
                  text-blue-300
                "
                >
                  <Sparkles size={21} />
                </div>

                <span className="text-5xl font-black text-white/4">02</span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Automate Language-Driven Workflows
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                Turn documents, customer conversations, feedback, and
                communication data into automated workflows that improve
                decision-making, productivity, and customer experiences.
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

export default NaturalLanguageProcessingPage;

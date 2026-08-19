import React from "react";
import {
  Cpu,
  Workflow,
  Database,
  ArrowRight,
  Bot,
  ShieldCheck,
  Sparkles,
  Network,
  Zap,
  CheckCircle2,
  BrainCircuit,
  Search,
  GitBranch,
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

const LlmDevelopmentPage = () => {
  const features = [
    {
      number: "01",
      icon: Database,
      title: "Enterprise RAG",
      description:
        "Connect private enterprise knowledge with intelligent retrieval pipelines for accurate, context-aware AI responses.",
    },
    {
      number: "02",
      icon: Cpu,
      title: "LLM Fine-Tuning",
      description:
        "Adapt foundation models to your domain, terminology, workflows, and specialized business requirements.",
    },
    {
      number: "03",
      icon: Workflow,
      title: "AI Agent Systems",
      description:
        "Build intelligent agents that reason, access tools, call APIs, retrieve information, and execute complex workflows.",
    },
  ];

  const capabilities = [
    "Retrieval-Augmented Generation",
    "Domain-specific LLM fine-tuning",
    "Private knowledge assistants",
    "AI agent development",
    "Vector database integration",
    "Prompt engineering & evaluation",
    "LLM security & guardrails",
    "Production inference optimization",
  ];

  return (
    <div
      className="
        min-h-screen
        bg-[#f8fbff]
        dark:bg-[#050a12]
        text-slate-900
        dark:text-white
        font-sans
        overflow-hidden
        selection:bg-[#60a5fa]
        selection:text-slate-900
      "
    >
      <main className="pt-28 sm:pt-32">
        <section className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-162.5
              pointer-events-none
              opacity-40
              dark:opacity-20
            "
            style={{
              backgroundImage: `
                linear-gradient(rgba(39,110,165,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(39,110,165,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "55px 55px",
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center min-h-162.5">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative z-10"
            >
              {/* Eyebrow */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#276ea5]
                  dark:text-blue-300
                "
              >
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-[#276ea5]" />
                </span>
                AI Engineering · LLM Development
              </motion.div>

              {/* Heading */}

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="
                  mt-7
                  text-[3.2rem]
                  sm:text-6xl
                  lg:text-[5.2rem]
                  xl:text-[5.8rem]
                  leading-[0.94]
                  tracking-[-0.055em]
                  font-black
                  max-w-4xl
                "
              >
                Build AI That
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
                  Understands
                </span>
                Your Business.
              </motion.h1>

              {/* Description */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="
                  mt-8
                  max-w-2xl
                  text-base
                  sm:text-lg
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Shilsha Technologies designs and deploys enterprise-grade Large
                Language Models, RAG systems, and intelligent AI agents
                engineered around your proprietary data and workflows.
              </motion.p>

              {/* CTA */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-9 flex flex-wrap items-center gap-5"
              >
                <Link
                  to="/contact-us"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-6
                    py-3.5
                    rounded-xl
                    bg-[#276ea5]
                    hover:bg-[#1d527d]
                    text-white
                    text-sm
                    font-bold
                    shadow-lg
                    shadow-blue-900/15
                    hover:-translate-y-0.5
                    transition-all
                  "
                >
                  Build LLM Systems
                  <ArrowRight
                    size={16}
                    className="
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <ShieldCheck size={17} className="text-emerald-500" />
                  Enterprise-ready AI architecture
                </div>
              </motion.div>

              {/* Small stats */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="
                  mt-12
                  pt-7
                  border-t
                  border-slate-200
                  dark:border-white/10
                  grid
                  grid-cols-3
                  max-w-xl
                "
              >
                <div>
                  <p className="text-xl font-black">RAG</p>
                  <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-500">
                    Knowledge systems
                  </p>
                </div>

                <div className="border-l border-slate-200 dark:border-white/10 pl-5">
                  <p className="text-xl font-black">LLMs</p>
                  <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-500">
                    Custom intelligence
                  </p>
                </div>

                <div className="border-l border-slate-200 dark:border-white/10 pl-5">
                  <p className="text-xl font-black">Agents</p>
                  <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-500">
                    Autonomous workflows
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* ======================================================
                RIGHT VISUAL
            ======================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="
                lg:col-span-5
                relative
                min-h-120
                flex
                items-center
                justify-center
              "
            >
              {/* Main glow */}

              <div
                className="
                  absolute
                  w-70
                  h-70
                  rounded-full
                  blur-[100px]
                  opacity-20
                  dark:opacity-25
                "
                style={{
                  background: theme.glow,
                }}
              />

              {/* Orbit */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-82.5
                  h-82.5
                  rounded-full
                  border
                  border-blue-300/20
                  dark:border-blue-400/10
                "
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-107.5
                  h-107.5
                  rounded-full
                  border
                  border-dashed
                  border-blue-300/20
                  dark:border-blue-400/10
                "
              />

              {/* Central AI */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-20
                  w-32
                  h-32
                  sm:w-40
                  sm:h-40
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-linear-to-br
                  from-[#276ea5]
                  via-blue-500
                  to-[#1d527d]
                  shadow-[0_25px_70px_rgba(39,110,165,0.35)]
                "
              >
                <Bot size={62} strokeWidth={1.3} className="text-white" />

                <div className="absolute inset-3 rounded-full border border-white/20" />
              </motion.div>

              {/* Floating node 1 */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="
                  absolute
                  top-8
                  right-4
                  sm:right-10
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  bg-white/90
                  dark:bg-[#0b1528]/90
                  backdrop-blur-md
                  border
                  border-slate-200
                  dark:border-white/10
                  shadow-xl
                "
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Database
                    size={17}
                    className="text-[#276ea5] dark:text-blue-300"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold">Enterprise Data</p>
                  <p className="text-[9px] text-slate-400">Private knowledge</p>
                </div>
              </motion.div>

              {/* Floating node 2 */}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 0.8,
                }}
                className="
                  absolute
                  bottom-12
                  left-0
                  sm:left-3
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  bg-white/90
                  dark:bg-[#0b1528]/90
                  backdrop-blur-md
                  border
                  border-slate-200
                  dark:border-white/10
                  shadow-xl
                "
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Search size={17} className="text-emerald-500" />
                </div>

                <div>
                  <p className="text-[10px] font-bold">RAG Retrieval</p>
                  <p className="text-[9px] text-slate-400">Context aware</p>
                </div>
              </motion.div>

              {/* Floating node 3 */}

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="
                  absolute
                  bottom-24
                  right-0
                  sm:right-4
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  bg-white/90
                  dark:bg-[#0b1528]/90
                  backdrop-blur-md
                  border
                  border-slate-200
                  dark:border-white/10
                  shadow-xl
                "
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Workflow size={17} className="text-purple-500" />
                </div>

                <div>
                  <p className="text-[10px] font-bold">AI Agents</p>
                  <p className="text-[9px] text-slate-400">Automated actions</p>
                </div>
              </motion.div>

              {/* Tiny connection dots */}

              <div className="absolute top-32 left-12 w-2 h-2 rounded-full bg-blue-400" />
              <div className="absolute top-20 left-24 w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="absolute bottom-28 right-20 w-2 h-2 rounded-full bg-blue-400" />
            </motion.div>
          </div>
        </section>

        <section className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mt-10">
          <div className="border-y border-slate-200 dark:border-white/10">
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
                  className="
                    group
                    grid
                    grid-cols-1
                    md:grid-cols-12
                    gap-6
                    md:gap-10
                    items-center
                    py-8
                    sm:py-10
                    border-b
                    last:border-b-0
                    border-slate-200
                    dark:border-white/10
                  "
                >
                  <div className="md:col-span-1">
                    <span className="text-xs font-black text-blue-400">
                      {feature.number}
                    </span>
                  </div>

                  <div className="md:col-span-1">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-blue-500/10
                        text-[#276ea5]
                        dark:text-blue-300
                        group-hover:bg-[#276ea5]
                        group-hover:text-white
                        transition-all
                      "
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>

                  <div className="md:col-span-1 flex md:justify-end">
                    <ArrowRight
                      size={18}
                      className="
                        text-slate-300
                        dark:text-slate-600
                        group-hover:text-[#276ea5]
                        group-hover:translate-x-1
                        transition-all
                      "
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-500">
                <BrainCircuit size={15} />
                Language Intelligence
              </div>

              <h2 className="mt-6 text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                From language models to{" "}
                <span className="text-[#276ea5] dark:text-blue-400">
                  business intelligence.
                </span>
              </h2>
            </motion.div>

            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="space-y-7">
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
                  Standard chat interfaces only scratch the surface of what
                  Large Language Models can achieve. Shilsha Technologies
                  designs tailored LLM solutions equipped with custom vector
                  stores, robust safety filters, intelligent retrieval
                  pipelines, and optimized inference architectures.
                </p>

                <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
                  Whether you need a confidential internal knowledge assistant,
                  automated code generation tools, intelligent customer
                  interaction layers, or autonomous AI agents, our engineers
                  build systems around your actual enterprise requirements.
                </p>

                <div className="pt-5 flex items-center gap-3 text-sm font-bold text-[#276ea5] dark:text-blue-300">
                  <Sparkles size={17} />
                  Designed for real-world enterprise workloads
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative py-24 border-y border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-500">
                  <Network size={15} />
                  LLM Architecture
                </div>

                <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight">
                  Intelligence built around your{" "}
                  <span className="text-[#276ea5] dark:text-blue-400">
                    data.
                  </span>
                </h2>

                <p className="mt-6 text-slate-500 dark:text-slate-400 leading-7">
                  We combine foundation models, retrieval systems, vector
                  databases, evaluation frameworks, and secure deployment
                  infrastructure to create reliable enterprise AI.
                </p>
              </motion.div>

              {/* Right */}

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                  {capabilities.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.06,
                      }}
                      className="
                        flex
                        items-center
                        gap-3
                        py-4
                        border-b
                        border-slate-200
                        dark:border-white/10
                      "
                    >
                      <CheckCircle2
                        size={17}
                        className="text-emerald-500 shrink-0"
                      />

                      <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PERFORMANCE / CTA
        ============================================================ */}

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div
              className="
                absolute
                inset-0
                rounded-[2.5rem]
                bg-linear-to-r
                from-[#276ea5]
                to-[#123b5c]
              "
            />

            <div className="relative px-7 py-14 sm:px-14 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
                    <Zap size={15} />
                    Production AI
                  </div>

                  <h2 className="mt-5 text-3xl sm:text-5xl font-black text-white leading-tight">
                    Turn frontier language models into practical business
                    systems.
                  </h2>

                  <p className="mt-5 max-w-2xl text-blue-100 leading-7">
                    From private enterprise assistants to autonomous AI
                    workflows, build secure language intelligence that creates
                    measurable operational value.
                  </p>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    to="/contact-us"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      px-6
                      py-4
                      rounded-xl
                      bg-white
                      text-[#1d527d]
                      text-sm
                      font-bold
                      hover:bg-blue-50
                      hover:-translate-y-1
                      transition-all
                      shadow-xl
                    "
                  >
                    Start Your AI Project
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default LlmDevelopmentPage;

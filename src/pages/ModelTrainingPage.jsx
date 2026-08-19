import React from "react";
import {
  Database,
  Cpu,
  Layers,
  ArrowRight,
  Workflow,
  CheckCircle2,
  BrainCircuit,
  BarChart3,
  Settings2,
  ShieldCheck,
  Gauge,
  GitBranch,
  Sparkles,
  Zap,
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

const ModelTrainingPage = () => {
  const features = [
    {
      icon: Database,
      title: "Data Curation",
      desc: "Clean, label, transform, and structure complex datasets to create reliable foundations for machine learning.",
    },
    {
      icon: Cpu,
      title: "Model Training",
      desc: "Train and fine-tune models around your industry requirements, proprietary data, terminology, and workflows.",
    },
    {
      icon: Layers,
      title: "MLOps & Deployment",
      desc: "Build reliable ML pipelines with evaluation, versioning, monitoring, optimization, and production deployment.",
    },
  ];

  const capabilities = [
    "Custom model training",
    "Dataset preparation",
    "Feature engineering",
    "Model fine-tuning",
    "Hyperparameter optimization",
    "MLOps & deployment",
  ];

  const modelPipeline = [
    {
      icon: Database,
      title: "Data",
      text: "Curate & prepare",
    },
    {
      icon: Settings2,
      title: "Train",
      text: "Tune & validate",
    },
    {
      icon: Gauge,
      title: "Optimize",
      text: "Improve accuracy",
    },
    {
      icon: GitBranch,
      title: "Deploy",
      text: "Production ready",
    },
  ];

  const frameworkSteps = [
    "Prepare and curate high-quality datasets",
    "Engineer features around business requirements",
    "Train and fine-tune domain-specific models",
    "Validate performance against real-world data",
  ];

  return (
    <div
      className="
        min-h-screen
        overflow-hidden
        bg-[#f7faff]
        dark:bg-[#050a12]
        text-slate-900
        dark:text-white
        font-sans
        selection:bg-blue-400
        selection:text-slate-900
      "
    >
      <main className="pt-20 sm:pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              relative
              grid
              grid-cols-1
              lg:grid-cols-12
              items-center
              gap-8
              lg:gap-10
              py-8
              lg:py-10
            "
          >
            {/* Decorative background */}
            <div
              className="
                absolute
                top-10
                left-1/4
                w-72
                h-72
                rounded-full
                bg-blue-500/6
                blur-3xl
                pointer-events-none
              "
            />

            {/* HERO CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="relative z-10 lg:col-span-7 py-6 lg:py-10"
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
                  shadow-sm
                "
              >
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-blue-500" />
                </span>

                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#276ea5] dark:text-blue-300">
                  Machine Learning Engineering
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="
                  mt-5
                  max-w-3xl
                  text-[2.8rem]
                  sm:text-5xl
                  lg:text-[4.15rem]
                  xl:text-[4.6rem]
                  leading-[0.96]
                  tracking-[-0.055em]
                  font-black
                "
              >
                Train Models
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
                  Built For Your
                </span>
                Business.
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
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
                Shilsha Technologies engineers, trains, fine-tunes, and
                optimizes machine learning models using your proprietary
                enterprise data to deliver accurate, scalable, and
                production-ready intelligence.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
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
                    py-3
                    rounded-xl
                    text-white
                    text-xs
                    sm:text-sm
                    font-bold
                    shadow-lg
                    shadow-blue-600/20
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.primary},
                      ${theme.secondary}
                    )`,
                  }}
                >
                  Start Model Training

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
                    gap-1.5
                    text-[10px]
                    sm:text-xs
                    font-semibold
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  <ShieldCheck size={15} className="text-emerald-500" />
                  Enterprise-grade development
                </div>
              </motion.div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="
                  grid
                  grid-cols-3
                  max-w-lg
                  mt-7
                  pt-5
                  border-t
                  border-slate-200
                  dark:border-white/10
                "
              >
                <div>
                  <p className="text-base sm:text-lg font-black">Custom</p>
                  <p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">
                    Domain-specific
                  </p>
                </div>

                <div className="border-l border-slate-200 dark:border-white/10 pl-4">
                  <p className="text-base sm:text-lg font-black">Accurate</p>
                  <p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">
                    Optimized performance
                  </p>
                </div>

                <div className="border-l border-slate-200 dark:border-white/10 pl-4">
                  <p className="text-base sm:text-lg font-black">Scalable</p>
                  <p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">
                    Production-ready
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="
                relative
                lg:col-span-5
                flex
                items-center
                justify-center
                py-4
                lg:py-6
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  w-64
                  h-64
                  rounded-full
                  bg-blue-500/10
                  blur-[90px]
                  pointer-events-none
                "
              />

              {/* Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[320px]
                  h-80
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
                    top-8
                    left-1/2
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-blue-400
                    shadow-lg
                    shadow-blue-400/70
                  "
                />

                <span
                  className="
                    absolute
                    bottom-10
                    right-6
                    w-2
                    h-2
                    rounded-full
                    bg-cyan-400
                    shadow-lg
                    shadow-cyan-400/70
                  "
                />
              </motion.div>

              {/* Main card */}
              <div
                className="
                  relative
                  z-10
                  w-full
                  max-w-91.25
                  rounded-[1.75rem]
                  border
                  border-slate-200
                  dark:border-white/10
                  bg-white/95
                  dark:bg-[#0b1729]/95
                  backdrop-blur-xl
                  p-4
                  sm:p-5
                  shadow-[0_20px_60px_rgba(15,23,42,0.12)]
                  dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                "
              >
                {/* Card header */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    pb-3.5
                    border-b
                    border-slate-200
                    dark:border-white/10
                  "
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="
                        w-9
                        h-9
                        rounded-xl
                        bg-blue-500/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <BrainCircuit
                        size={18}
                        className="text-[#276ea5] dark:text-blue-300"
                      />
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.15em] text-slate-400">
                        ML ENGINE
                      </p>

                      <p className="text-xs font-bold">
                        Training Pipeline
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      px-2
                      py-1
                      rounded-full
                      bg-emerald-500/10
                      text-emerald-500
                      text-[8px]
                      font-bold
                    "
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    RUNNING
                  </div>
                </div>

                {/* Model Core */}
                <div className="py-5">
                  <div className="relative flex justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.035, 1],
                        boxShadow: [
                          "0 12px 30px rgba(39,110,165,0.15)",
                          "0 18px 45px rgba(39,110,165,0.28)",
                          "0 12px 30px rgba(39,110,165,0.15)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        relative
                        w-24
                        h-24
                        rounded-[1.6rem]
                        flex
                        items-center
                        justify-center
                        bg-linear-to-br
                        from-[#276ea5]
                        via-blue-500
                        to-[#1d527d]
                      "
                    >
                      <Workflow
                        size={43}
                        className="text-white"
                        strokeWidth={1.4}
                      />

                      <div className="absolute w-32 h-32 rounded-full border border-blue-400/10" />
                      <div className="absolute w-40 h-40 rounded-full border border-blue-400/5" />
                    </motion.div>
                  </div>

                  <div className="text-center mt-4">
                    <p className="font-black text-base">
                      Custom ML Model
                    </p>

                    <p className="text-[9px] text-slate-400 mt-1">
                      Data → Training → Optimization → Deployment
                    </p>
                  </div>
                </div>

                {/* Pipeline */}
                <div className="space-y-2">
                  {modelPipeline.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.55 + index * 0.1,
                        }}
                        className="
                          flex
                          items-center
                          gap-2.5
                          p-2.5
                          rounded-xl
                          bg-slate-50
                          dark:bg-white/4
                          border
                          border-slate-200
                          dark:border-white/6
                          hover:border-blue-300/40
                          dark:hover:border-blue-400/20
                          transition-colors
                        "
                      >
                        <div
                          className="
                            w-8
                            h-8
                            rounded-lg
                            bg-blue-500/10
                            flex
                            items-center
                            justify-center
                            text-[#276ea5]
                            dark:text-blue-300
                            shrink-0
                          "
                        >
                          <Icon size={14} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-bold">
                            {item.title}
                          </p>

                          <p className="text-[8px] text-slate-400">
                            {item.text}
                          </p>
                        </div>

                        <CheckCircle2
                          size={13}
                          className="ml-auto text-emerald-500 shrink-0"
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div
                    className="
                      p-2.5
                      rounded-xl
                      bg-blue-500/6
                      border
                      border-blue-500/10
                    "
                  >
                    <div className="flex items-center gap-1.5">
                      <BarChart3 size={13} className="text-blue-500" />
                      <span className="text-[8px] uppercase tracking-wider text-slate-400">
                        Performance
                      </span>
                    </div>

                    <p className="mt-1.5 text-xs font-black">
                      Optimized
                    </p>
                  </div>

                  <div
                    className="
                      p-2.5
                      rounded-xl
                      bg-emerald-500/6
                      border
                      border-emerald-500/10
                    "
                  >
                    <div className="flex items-center gap-1.5">
                      <Sparkles size={13} className="text-emerald-500" />

                      <span className="text-[8px] uppercase tracking-wider text-slate-400">
                        Quality
                      </span>
                    </div>

                    <p className="mt-1.5 text-xs font-black">
                      Validated
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
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
                  -bottom-2
                  right-1
                  sm:right-0
                  px-3
                  py-2
                  rounded-xl
                  bg-white
                  dark:bg-[#0d1b2d]
                  border
                  border-slate-200
                  dark:border-white/10
                  shadow-lg
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
                    "
                  >
                    <Gauge size={13} className="text-blue-500" />
                  </div>

                  <div>
                    <p className="text-[7px] uppercase tracking-wider text-slate-400">
                      Model
                    </p>

                    <p className="text-[9px] font-bold">
                      Performance Optimized
                    </p>
                  </div>
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
              shadow-lg
              shadow-slate-900/4
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
                  whileHover={{
                    backgroundColor: "rgba(39,110,165,0.035)",
                  }}
                  className={`
                    relative
                    p-5
                    sm:p-6
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
                        transition-transform
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

                  <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {feature.desc}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-1.5
                      text-[10px]
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

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6"
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-blue-500
                "
              >
                <Cpu size={13} />
                Model Intelligence
              </div>

              <h2
                className="
                  mt-3
                  text-2xl
                  sm:text-4xl
                  lg:text-[2.7rem]
                  font-black
                  tracking-tight
                  leading-[1.08]
                "
              >
                Powering custom predictive intelligence with{" "}
                <span className="text-[#276ea5] dark:text-blue-400">
                  rigorous model training.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                Generic AI models rarely capture the subtle nuances of
                specific business verticals. We design tailored machine
                learning lifecycles that move raw data through preprocessing,
                feature engineering, training, validation, and optimization.
              </p>

              {/* Capabilities */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2.5
                      px-3
                      py-2.5
                      rounded-lg
                      border
                      border-slate-200
                      dark:border-white/10
                      bg-white
                      dark:bg-white/3
                      text-xs
                      font-medium
                      hover:border-blue-300/50
                      transition-colors
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

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  p-6
                  sm:p-7
                  bg-linear-to-br
                  from-[#276ea5]
                  via-[#1d527d]
                  to-[#123b5c]
                  shadow-xl
                  shadow-blue-900/15
                "
              >
                {/* Glows */}
                <div
                  className="
                    absolute
                    -top-20
                    -right-20
                    w-52
                    h-52
                    rounded-full
                    bg-blue-300/20
                    blur-3xl
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-20
                    -left-20
                    w-52
                    h-52
                    rounded-full
                    bg-cyan-300/10
                    blur-3xl
                  "
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-white/10
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Workflow size={19} className="text-white" />
                    </div>

                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-blue-100">
                      Training Framework
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-black text-white">
                    Turn enterprise data into intelligent models.
                  </h3>

                  <div className="mt-5 space-y-2">
                    {frameworkSteps.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="
                          flex
                          items-center
                          gap-2.5
                          p-2.5
                          rounded-lg
                          bg-white/8
                          border
                          border-white/10
                          hover:bg-white/12
                          transition-colors
                        "
                      >
                        <div
                          className="
                            w-6
                            h-6
                            rounded-md
                            bg-white/10
                            flex
                            items-center
                            justify-center
                            text-[10px]
                            font-bold
                            text-white
                            shrink-0
                          "
                        >
                          {index + 1}
                        </div>

                        <span className="text-xs text-blue-50">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mt-5
                      pt-4
                      border-t
                      border-white/10
                    "
                  >
                    <Zap size={14} className="text-yellow-300" />

                    <span className="text-[10px] font-medium text-blue-100">
                      Built for accuracy, scalability and production use.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              className="
                relative
                overflow-hidden
                p-6
                sm:p-7
                rounded-[1.6rem]
                bg-white
                dark:bg-[#08111f]
                border
                border-slate-200
                dark:border-white/10
                shadow-lg
                shadow-slate-900/4
              "
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/4 rounded-full blur-2xl" />

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
                    <Gauge size={19} />
                  </div>

                  <span className="text-4xl font-black text-slate-100 dark:text-white/4">
                    01
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Drive Precise Model Performance
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Advanced hyperparameter tuning, cross-validation,
                  evaluation, and overfitting controls help models
                  generalize effectively on unseen and live data.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              transition={{ delay: 0.08 }}
              className="
                relative
                overflow-hidden
                p-6
                sm:p-7
                rounded-[1.6rem]
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/[0.07] rounded-full blur-2xl" />

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
                    <BarChart3 size={19} />
                  </div>

                  <span className="text-4xl font-black text-white/4">
                    02
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  Transform Data Into Business Value
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Turn enterprise datasets into high-value ML assets for
                  recommendation engines, anomaly detection, forecasting,
                  classification, prediction, and automation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="
              relative
              overflow-hidden
              rounded-[1.75rem]
              border
              border-blue-200
              dark:border-blue-400/10
              bg-linear-to-br
              from-blue-50
              to-white
              dark:from-[#081827]
              dark:to-[#07121e]
              px-5
              py-8
              sm:px-7
              sm:py-9
              lg:px-10
              lg:py-10
            "
          >
            {/* Glow */}
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
                    gap-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-blue-500
                    dark:text-blue-300
                  "
                >
                  <BrainCircuit size={13} />
                  Build Smarter Models
                </div>

                <h2
                  className="
                    mt-3
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-black
                    tracking-tight
                    leading-tight
                  "
                >
                  Have data that could power your next intelligent product?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Turn proprietary data into reliable, scalable, and
                  production-ready machine learning models with our
                  engineering team.
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
                  text-xs
                  sm:text-sm
                  font-bold
                  shadow-lg
                  shadow-blue-600/20
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
                style={{
                  background: `linear-gradient(
                    135deg,
                    ${theme.primary},
                    ${theme.secondary}
                  )`,
                }}
              >
                Discuss Your Model

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

export default ModelTrainingPage;
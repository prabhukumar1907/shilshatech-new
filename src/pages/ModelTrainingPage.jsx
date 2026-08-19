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
      title: "Data Curation & Preparation",
      desc: "Clean, label, and structure complex datasets to remove bias and ensure optimal input quality for training algorithms.",
    },
    {
      icon: Cpu,
      title: "Proprietary Fine-Tuning",
      desc: "Adapt open-source models and foundational architectures to precisely reflect your industry jargon and operational workflows.",
    },
    {
      icon: Layers,
      title: "MLOps & Pipeline Deployment",
      desc: "Automate model evaluation, version control, and continuous monitoring for production stability and high throughput.",
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
      <main className="pt-24 sm:pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              relative
              min-h-155
              grid
              grid-cols-1
              lg:grid-cols-12
              items-center
              gap-10
              lg:gap-16
            "
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="lg:col-span-7 py-12 lg:py-20"
            >
              {/* Eyebrow */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  px-4
                  py-2
                  rounded-full
                  border
                  border-blue-200
                  dark:border-blue-400/20
                  bg-blue-50/70
                  dark:bg-blue-500/[0.07]
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                </span>

                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.17em] text-[#276ea5] dark:text-blue-300">
                  Machine Learning Engineering
                </span>
              </motion.div>

              {/* Heading */}

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25,
                  duration: 0.7,
                }}
                className="
                  mt-7
                  text-[3rem]
                  sm:text-5xl
                  lg:text-[4.4rem]
                  xl:text-[5rem]
                  leading-[0.95]
                  tracking-[-0.055em]
                  font-black
                  max-w-4xl
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
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
                Shilsha Technologies engineers, trains, fine-tunes, and
                optimizes machine learning models using your proprietary
                enterprise data to deliver accurate, scalable, and
                production-ready intelligence.
              </motion.p>

              {/* CTA */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
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
                    hover:shadow-blue-600/30
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
                      w-8
                      h-8
                      rounded-xl
                      bg-white/15
                      group-hover:bg-white/20
                    "
                  >
                    <ArrowRight
                      size={15}
                      className="
                        group-hover:translate-x-1
                        transition-transform
                      "
                    />
                  </span>
                </Link>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  <ShieldCheck size={17} className="text-emerald-500" />
                  Enterprise-grade model development
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
                  <p className="text-lg sm:text-xl font-black">Custom</p>

                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    Domain-specific
                  </p>
                </div>

                <div
                  className="
                    border-l
                    border-slate-200
                    dark:border-white/10
                    pl-5
                  "
                >
                  <p className="text-lg sm:text-xl font-black">Accurate</p>

                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    Optimized performance
                  </p>
                </div>

                <div
                  className="
                    border-l
                    border-slate-200
                    dark:border-white/10
                    pl-5
                  "
                >
                  <p className="text-lg sm:text-xl font-black">Scalable</p>

                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    Production-ready
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                lg:col-span-5
                relative
                flex
                items-center
                justify-center
                py-12
                lg:py-20
              "
            >
              {/* Subtle glow only behind visual */}

              <div
                className="
                  absolute
                  w-75
                  h-75
                  rounded-full
                  bg-blue-500/10
                  blur-[100px]
                  pointer-events-none
                "
              />

              {/* Orbit */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-97.5
                  h-97.5
                  sm:w-112.5
                  sm:h-112.5
                  rounded-full
                  border
                  border-blue-400/10
                "
              >
                <span
                  className="
                    absolute
                    top-10
                    left-1/2
                    w-2
                    h-2
                    rounded-full
                    bg-blue-400
                    shadow-lg
                    shadow-blue-400/60
                  "
                />

                <span
                  className="
                    absolute
                    bottom-14
                    right-8
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-cyan-400
                    shadow-lg
                    shadow-cyan-400/60
                  "
                />
              </motion.div>

              {/* Main visual */}

              <div
                className="
                  relative
                  z-10
                  w-full
                  max-w-100
                  rounded-4xl
                  border
                  border-slate-200
                  dark:border-white/10
                  bg-white/95
                  dark:bg-[#0b1729]/95
                  backdrop-blur-xl
                  p-6
                  sm:p-7
                  shadow-[0_25px_80px_rgba(15,23,42,0.12)]
                  dark:shadow-[0_25px_80px_rgba(0,0,0,0.4)]
                "
              >
                {/* Card Header */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    pb-5
                    border-b
                    border-slate-200
                    dark:border-white/10
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-blue-500/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <BrainCircuit
                        size={20}
                        className="text-[#276ea5] dark:text-blue-300"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                        ML ENGINE
                      </p>

                      <p className="text-sm font-bold">Training Pipeline</p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      px-2.5
                      py-1
                      rounded-full
                      bg-emerald-500/10
                      text-emerald-500
                      text-[9px]
                      font-bold
                    "
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    RUNNING
                  </div>
                </div>

                {/* Model Core */}

                <div className="py-8">
                  <div className="relative flex justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.04, 1],
                        boxShadow: [
                          "0 15px 35px rgba(39,110,165,0.15)",
                          "0 20px 50px rgba(39,110,165,0.28)",
                          "0 15px 35px rgba(39,110,165,0.15)",
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
                      <Workflow
                        size={52}
                        className="text-white"
                        strokeWidth={1.4}
                      />

                      <div
                        className="
                          absolute
                          w-36
                          h-36
                          rounded-full
                          border
                          border-blue-400/10
                        "
                      />

                      <div
                        className="
                          absolute
                          w-48
                          h-48
                          rounded-full
                          border
                          border-blue-400/5
                        "
                      />
                    </motion.div>
                  </div>

                  <div className="text-center mt-6">
                    <p className="font-black text-lg">Custom ML Model</p>

                    <p className="text-[10px] text-slate-400 mt-1">
                      Data → Training → Optimization → Deployment
                    </p>
                  </div>
                </div>

                {/* Pipeline */}

                <div className="space-y-2.5">
                  {modelPipeline.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.7 + index * 0.12,
                        }}
                        className="
                          flex
                          items-center
                          gap-3
                          p-3
                          rounded-xl
                          bg-slate-50
                          dark:bg-white/4
                          border
                          border-slate-200
                          dark:border-white/6
                        "
                      >
                        <div
                          className="
                            w-9
                            h-9
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
                          <Icon size={16} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[11px] font-bold">{item.title}</p>

                          <p className="text-[9px] text-slate-400">
                            {item.text}
                          </p>
                        </div>

                        <CheckCircle2
                          size={14}
                          className="
                            ml-auto
                            text-emerald-500
                            shrink-0
                          "
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div
                    className="
                      p-3
                      rounded-xl
                      bg-blue-500/6
                      border
                      border-blue-500/10
                    "
                  >
                    <div className="flex items-center gap-2">
                      <BarChart3 size={15} className="text-blue-500" />

                      <span className="text-[9px] uppercase tracking-wider text-slate-400">
                        Performance
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-black">Optimized</p>
                  </div>

                  <div
                    className="
                      p-3
                      rounded-xl
                      bg-emerald-500/6
                      border
                      border-emerald-500/10
                    "
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles size={15} className="text-emerald-500" />

                      <span className="text-[9px] uppercase tracking-wider text-slate-400">
                        Quality
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-black">Validated</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  z-20
                  -bottom-3
                  right-3
                  sm:right-0
                  px-4
                  py-3
                  rounded-2xl
                  bg-white
                  dark:bg-[#0d1b2d]
                  border
                  border-slate-200
                  dark:border-white/10
                  shadow-xl
                "
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-lg
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Gauge size={15} className="text-blue-500" />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-slate-400">
                      Model
                    </p>

                    <p className="text-[11px] font-bold">
                      Performance Optimized
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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

                    <span
                      className="
                        text-5xl
                        font-black
                        text-slate-100
                        dark:text-white/[0.035]
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {feature.desc}
                  </p>

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-bold
                      text-[#276ea5]
                      dark:text-blue-300
                    "
                  >
                    Explore capability
                    <ArrowRight
                      size={13}
                      className="
                        group-hover:translate-x-1
                        transition-transform
                      "
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

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
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-blue-500
                "
              >
                <Cpu size={15} />
                Model Intelligence
              </div>

              <h2
                className="
                  mt-5
                  text-3xl
                  sm:text-5xl
                  font-black
                  tracking-tight
                  leading-tight
                "
              >
                Powering custom predictive intelligence with{" "}
                <span className="text-[#276ea5] dark:text-blue-400">
                  rigorous model training.
                </span>
              </h2>

              <p className="mt-6 text-slate-600 dark:text-slate-400 leading-8">
                Generic AI models rarely capture the subtle nuances of specific
                business verticals. Shilsha Technologies designs tailored
                machine learning lifecycles, taking raw data through rigorous
                preprocessing, feature engineering, and model training phases to
                deliver maximum predictive accuracy.
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
                <div
                  className="
                    absolute
                    -top-24
                    -right-24
                    w-64
                    h-64
                    rounded-full
                    bg-blue-300/20
                    blur-3xl
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-24
                    -left-24
                    w-64
                    h-64
                    rounded-full
                    bg-cyan-300/10
                    blur-3xl
                  "
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-white/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Workflow size={23} className="text-white" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100">
                      Training Framework
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl sm:text-3xl font-black text-white">
                    Turn enterprise data into intelligent models.
                  </h3>

                  <div className="mt-8 space-y-3">
                    {[
                      "Prepare and curate high-quality datasets",
                      "Engineer features around business requirements",
                      "Train and fine-tune domain-specific models",
                      "Validate performance against real-world data",
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
                        <div
                          className="
                            w-7
                            h-7
                            rounded-lg
                            bg-white/10
                            flex
                            items-center
                            justify-center
                            text-xs
                            font-bold
                            text-white
                          "
                        >
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
                  <Gauge size={21} />
                </div>

                <span
                  className="
                    text-5xl
                    font-black
                    text-slate-100
                    dark:text-white/4
                  "
                >
                  01
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Drive Precise Model Performance
              </h3>

              <p className="mt-4 text-slate-500 dark:text-slate-400 leading-7">
                We implement advanced hyperparameter tuning, cross-validation
                protocols, and robust overfitting controls to ensure deployed
                models generalize effectively on unseen live data.
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
                  <BarChart3 size={21} />
                </div>

                <span className="text-5xl font-black text-white/4">02</span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Transform Data Into Business Value
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                Turn dormant enterprise datasets into high-precision machine
                learning assets that support recommendation engines, anomaly
                detection, classification, forecasting, and intelligent
                automation.
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

export default ModelTrainingPage;

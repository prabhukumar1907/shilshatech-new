import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Users,
  Code2,
  Brain,
  ShieldCheck,
  Globe2,
  Rocket,
  HeartHandshake,
  Zap,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/shilshalogofinal.webp";

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
};

const teamMembers = [
  {
    number: "01",
    name: "Leadership",
    role: "Strategy & Technology",
    description:
      "Driving technology strategy, innovation, partnerships, and long-term digital transformation.",
    icon: Rocket,
    accent: "#276ea5",
    tags: ["Strategy", "Innovation", "Growth"],
  },
  {
    number: "02",
    name: "Engineering",
    role: "Software Engineering",
    description:
      "Building scalable web, mobile, cloud, and enterprise applications using modern engineering practices.",
    icon: Code2,
    accent: "#1d4ed8",
    tags: ["Web", "Mobile", "Cloud"],
  },
  {
    number: "03",
    name: "AI & Automation",
    role: "AI, ML & RPA",
    description:
      "Creating intelligent digital solutions through AI, machine learning, automation, and emerging technologies.",
    icon: Brain,
    accent: "#7c3aed",
    tags: ["AI", "ML", "RPA"],
  },
  {
    number: "04",
    name: "Quality Engineering",
    role: "QA & Automation",
    description:
      "Making digital products reliable through quality engineering, automation, security, and performance testing.",
    icon: ShieldCheck,
    accent: "#0891b2",
    tags: ["QA", "Security", "Automation"],
  },
];

const values = [
  {
    icon: Users,
    title: "People First",
    description:
      "We create an environment where talented people can collaborate, grow, and do their best work.",
  },
  {
    icon: Code2,
    title: "Engineering Excellence",
    description:
      "We care about architecture, performance, maintainability, and building technology the right way.",
  },
  {
    icon: Brain,
    title: "Continuous Innovation",
    description:
      "We explore emerging technologies and constantly look for smarter ways to solve complex problems.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "Our goal is not simply to deliver projects but to build lasting relationships with our clients.",
  },
];

const cultureHighlights = [
  "Collaborative environment",
  "Continuous learning",
  "Technology-driven mindset",
  "Long-term growth",
];

const ctaHighlights = [
  "Modern Technology",
  "Collaborative Culture",
  "Meaningful Work",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const TeamCard = ({ member }) => {
  const Icon = member.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="group relative border-t border-slate-200 py-6 transition-all duration-500 dark:border-white/10"
    >
      {/* Background hover glow */}
      <div
        className="pointer-events-none absolute -right-8 top-0 h-32 w-32 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-20"
        style={{
          backgroundColor: member.accent,
        }}
      />

      <div className="relative flex gap-5 sm:gap-6">
        {/* Number */}
        <div className="w-8 shrink-0 pt-1">
          <span
            className="text-[10px] font-black tracking-[0.2em]"
            style={{
              color: member.accent,
            }}
          >
            {member.number}
          </span>
        </div>

        {/* Icon */}
        <motion.div
          whileHover={{
            scale: 1.06,
            rotate: -4,
          }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg"
          style={{
            background: `linear-gradient(
              135deg,
              ${member.accent},
              ${brandTheme.electricCyan}
            )`,
          }}
        >
          <Icon size={21} strokeWidth={1.8} />
        </motion.div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p
                className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: member.accent,
                }}
              >
                {member.role}
              </p>

              <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                {member.name}
              </h3>
            </div>

            <ArrowUpRight
              size={18}
              className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-slate-600"
              style={{
                color: member.accent,
              }}
            />
          </div>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            {member.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {member.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ValueCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        x: 4,
      }}
      className="group border-t border-slate-200 py-5 dark:border-white/10"
    >
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#276ea5]/10 text-[#276ea5] transition-all duration-300 group-hover:bg-[#276ea5] group-hover:text-white dark:bg-sky-400/10 dark:text-sky-400 dark:group-hover:bg-sky-400 dark:group-hover:text-[#06101d]">
          <Icon size={18} />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-slate-900 dark:text-white">
              {item.title}
            </h3>

            <span className="text-[9px] font-bold tracking-[0.15em] text-slate-300 dark:text-slate-700">
              0{index + 1}
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const OrbitVisual = () => {
  const orbitIcons = [
    {
      icon: Users,
      position: "left-0 top-20",
    },
    {
      icon: Code2,
      position: "right-0 top-10",
    },
    {
      icon: Brain,
      position: "right-8 bottom-12",
    },
    {
      icon: Globe2,
      position: "left-12 bottom-3",
    },
  ];

  return (
    <div className="relative mx-auto h-80 w-[320px] sm:h-92.5 sm:w-92.5">
      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(
            circle,
            ${brandTheme.electricCyan}35,
            transparent 70%
          )`,
        }}
      />

      {/* Outer orbit */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border border-[#276ea5]/15"
      />

      {/* Dashed orbit */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-7 rounded-full border border-dashed border-sky-400/20"
      />

      {/* Inner orbit */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-16 rounded-full border border-[#276ea5]/10"
      />

      {/* Center */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-white/80 bg-white shadow-[0_25px_70px_rgba(39,110,165,0.2)] dark:border-white/10 dark:bg-[#0d1727]"
      >
        <img
          src={logo}
          alt="Shilsha Technologies"
          className="w-20 object-contain"
        />
      </motion.div>

      {/* Floating icons */}
      {orbitIcons.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${item.position} flex h-12 w-12 items-center justify-center rounded-xl border border-white bg-white text-[#276ea5] shadow-[0_12px_35px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#0d1727] dark:text-sky-400`}
          >
            <Icon size={20} />
          </motion.div>
        );
      })}

      {/* Orbit dots */}
      <motion.span
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_15px_#60a5fa]"
      />

      <motion.span
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute bottom-5 right-20 h-2 w-2 rounded-full bg-[#276ea5] shadow-[0_0_15px_#276ea5]"
      />
    </div>
  );
};

const Team = () => {
  return (
    <>
      <main className="relative overflow-hidden bg-slate-50 font-sans text-slate-900 dark:bg-[#060b13] dark:text-white">
        {/* Background */}

        <div
          className="pointer-events-none absolute left-1/2 -top-40 h-130 w-187.5 -translate-x-1/2 rounded-full opacity-[0.11] blur-[140px]"
          style={{
            background: `radial-gradient(
              circle,
              ${brandTheme.electricCyan},
              ${brandTheme.primaryBlue},
              transparent 70%
            )`,
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${brandTheme.primaryBlue} 1px, transparent 1px),
              linear-gradient(to bottom, ${brandTheme.primaryBlue} 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />

        {/* HERO */}

        <section className="relative px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-10 lg:pb-20 lg:pt-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Hero content */}

              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="lg:col-span-7"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#276ea5]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#276ea5] shadow-sm backdrop-blur-md dark:border-sky-400/20 dark:bg-white/3 dark:text-sky-400">
                  <Sparkles size={13} />

                  <span>Our Team</span>

                  <span className="h-1 w-1 rounded-full bg-sky-400" />

                  <span>People Behind The Work</span>
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[72px]">
                  Built by people.
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(
                        90deg,
                        ${brandTheme.primaryBlue},
                        ${brandTheme.secondaryIndigo},
                        ${brandTheme.electricCyan}
                      )`,
                    }}
                  >
                    Driven by ideas.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
                  Behind every successful digital product is a team of
                  engineers, strategists, innovators, and problem-solvers
                  working together to turn ambitious ideas into technology.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/careers"
                    className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#276ea5] to-[#1d4ed8] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#276ea5]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Join Our Team
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-bold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#276ea5]/30 hover:text-[#276ea5] dark:border-white/10 dark:bg-white/3 dark:text-slate-200 dark:hover:border-sky-400/30 dark:hover:text-sky-400"
                  >
                    Work With Us
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                </div>

                {/* Stats */}

                <div className="mt-8 flex flex-wrap gap-6">
                  <div>
                    <p className="text-xl font-black text-slate-900 dark:text-white">
                      4+
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Core Teams
                    </p>
                  </div>

                  <div className="h-9 w-px bg-slate-200 dark:bg-white/10" />

                  <div>
                    <p className="text-xl font-black text-slate-900 dark:text-white">
                      Global
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Collaboration
                    </p>
                  </div>

                  <div className="h-9 w-px bg-slate-200 dark:bg-white/10" />

                  <div>
                    <p className="text-xl font-black text-slate-900 dark:text-white">
                      360°
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Expertise
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Visual */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="relative lg:col-span-5"
              >
                <OrbitVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}

        <section className="relative px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-80px",
              }}
              className="mb-8 grid gap-5 lg:grid-cols-12 lg:items-end"
            >
              <div className="lg:col-span-7">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#276ea5] dark:bg-sky-400" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#276ea5] dark:text-sky-400">
                    Our Expertise
                  </span>
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                  One team.{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(
                        90deg,
                        ${brandTheme.primaryBlue},
                        ${brandTheme.electricCyan}
                      )`,
                    }}
                  >
                    Multiple disciplines.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400 lg:col-span-5 lg:justify-self-end">
                Business understanding, engineering expertise, creative
                thinking, and modern technology working together to solve
                complex digital challenges.
              </p>
            </motion.div>

            {/* Team grid */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-80px",
              }}
              className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-2"
            >
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CULTURE */}

        <section className="relative px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Left */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                className="lg:col-span-5"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#276ea5]/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#276ea5] dark:bg-sky-400/10 dark:text-sky-400">
                  <HeartHandshake size={13} />
                  Our Culture
                </div>

                <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Great technology starts with{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(
                        90deg,
                        ${brandTheme.primaryBlue},
                        ${brandTheme.electricCyan}
                      )`,
                    }}
                  >
                    great people.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
                  We believe the strongest technology teams are built around
                  trust, curiosity, ownership, and continuous learning.
                </p>

                <div className="mt-6 space-y-2.5">
                  {cultureHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#276ea5] dark:text-sky-400"
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Values */}

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                className="lg:col-span-7"
              >
                {values.map((item, index) => (
                  <ValueCard key={item.title} item={item} index={index} />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="relative px-5 pb-14 pt-6 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl border border-slate-200/80 bg-white px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)] dark:border-white/8 dark:bg-[#0a1422] dark:shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:px-10 sm:py-12 lg:px-14 lg:py-14"
          >
            {/* Background glow */}

            <div
              className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full opacity-[0.16] blur-[110px]"
              style={{
                background: `radial-gradient(
                  circle,
                  ${brandTheme.electricCyan},
                  ${brandTheme.primaryBlue},
                  transparent 70%
                )`,
              }}
            />

            <div
              className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full opacity-[0.12] blur-[110px]"
              style={{
                backgroundColor: brandTheme.primaryBlue,
              }}
            />

            {/* Grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, ${brandTheme.primaryBlue} 1px, transparent 1px),
                  linear-gradient(to bottom, ${brandTheme.primaryBlue} 1px, transparent 1px)
                `,
                backgroundSize: "44px 44px",
              }}
            />

            {/* Top accent line */}

            <div
              className="pointer-events-none absolute left-0 top-0 h-px w-full opacity-60"
              style={{
                background: `linear-gradient(
                  90deg,
                  transparent,
                  ${brandTheme.electricCyan},
                  transparent
                )`,
              }}
            />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              {/* CTA Content */}

              <div className="lg:col-span-8">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  className="mb-4 flex items-center gap-3"
                >
                  <span className="h-px w-8 bg-[#276ea5] dark:bg-sky-400" />

                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#276ea5] dark:text-sky-400">
                    <Zap size={13} />
                    Build With Us
                  </span>
                </motion.div>

                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                  }}
                  className="max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.04em] text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
                >
                  Great ideas need
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(
                        90deg,
                        ${brandTheme.primaryBlue},
                        ${brandTheme.secondaryIndigo},
                        ${brandTheme.electricCyan}
                      )`,
                    }}
                  >
                    great people.
                  </span>
                </motion.h2>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base"
                >
                  Whether you're looking to join our team or collaborate with us
                  on your next digital initiative, we'd love to hear from you.
                </motion.p>

                {/* CTA Highlights */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                  className="mt-6 flex flex-wrap gap-x-6 gap-y-3"
                >
                  {ctaHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#276ea5] dark:text-sky-400"
                      />

                      {item}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* CTA Actions */}

              <motion.div
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
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col"
              >
                <Link
                  to="/careers"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#276ea5] to-[#1d4ed8] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#276ea5]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#276ea5]/25"
                >
                  Explore Careers
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  to="/contact-us"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#276ea5]/30 hover:bg-white hover:text-[#276ea5] dark:border-white/10 dark:bg-white/3 dark:text-slate-200 dark:hover:border-sky-400/30 dark:hover:bg-white/5 dark:hover:text-sky-400"
                >
                  Work With Our Team
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>

                <p className="mt-1 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-600">
                  Let's create what's next
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Team;

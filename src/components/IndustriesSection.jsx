import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Tv,
  Truck,
  GraduationCap,
  Factory,
  UtensilsCrossed,
  HeartPulse,
  Gamepad2,
  Sparkles,
  Plane,
  Building2,
  ArrowUpRight,
  Layers,
} from "lucide-react";

const industries = [
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "High-converting storefronts, inventory sync, AI recommendations and frictionless payments.",
    accent: "#60a5fa",
  },
  {
    id: "media",
    icon: Tv,
    title: "Media & Entertainment",
    description:
      "Streaming platforms, video portals and high-performance content delivery systems.",
    accent: "#c084fc",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Transport & Logistics",
    description:
      "Fleet management, GPS tracking, route optimization and supply-chain intelligence.",
    accent: "#2dd4bf",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & EdTech",
    description:
      "Learning platforms, virtual classrooms and intelligent learner analytics.",
    accent: "#34d399",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description:
      "IoT telemetry, production monitoring, automated QA and smart factory systems.",
    accent: "#fbbf24",
  },
  {
    id: "food",
    icon: UtensilsCrossed,
    title: "Food & Hospitality",
    description:
      "Ordering engines, courier tracking, kitchen dispatch and POS integrations.",
    accent: "#fb7185",
  },
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate & PropTech",
    description:
      "Property platforms, virtual tours, intelligent listings, lead automation and real-time market insights.",
    accent: "#818cf8",
  },
  {
    id: "travel",
    icon: Plane,
    title: "Travel & Tourism",
    description:
      "Booking platforms, travel management, personalized experiences and seamless itinerary solutions.",
    accent: "#22d3ee",
  },

  {
    id: "health",
    icon: HeartPulse,
    title: "Healthcare & MedTech",
    description:
      "Telehealth, secure records, digital booking and healthcare integrations.",
    accent: "#38bdf8",
  },
  {
    id: "gaming",
    icon: Gamepad2,
    title: "Gaming & Interactive",
    description:
      "Multiplayer backends, digital commerce and immersive interactive experiences.",
    accent: "#a855f7",
  },
  {
    id: "lifestyle",
    icon: Sparkles,
    title: "Lifestyle & Fashion",
    description:
      "Visual commerce, 3D experiences, social shopping and brand platforms.",
    accent: "#f0abfc",
  },
  {
    id: "finance",
    icon: Building2,
    title: "Banking & FinTech",
    description:
      "Secure banking platforms, fraud analytics and instant financial settlement.",
    accent: "#60a5fa",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const UltraModernIndustries = () => {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-slate-50 py-12 text-slate-900 transition-colors duration-500 dark:bg-[#050a11] dark:text-white sm:py-14"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-100 w-100 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-100 w-100 rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-size-[70px_70px] opacity-[0.025]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:mb-9 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-3 flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 38 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-px bg-[#276ea5] dark:bg-sky-400"
              />

              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#276ea5] dark:text-sky-400">
                <Layers size={13} />
                Cross-Industry Intelligence
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl lg:text-5xl"
            >
              Technology built for{" "}
              <span className="bg-linear-to-r from-[#276ea5] via-[#1d4ed8] to-sky-400 bg-clip-text text-transparent">
                every industry.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="max-w-md text-sm leading-5.5 text-slate-500 dark:text-slate-400"
          >
            Domain-specific digital products engineered for complex operations,
            ambitious businesses and scale.
          </motion.p>
        </div>

        {/* Industry Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-70px",
          }}
          className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                variants={itemAnimation}
                whileHover={{
                  y: -3,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white/60 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 dark:border-white/8 dark:bg-white/2.5 dark:hover:border-white/[0.14] dark:hover:bg-white/4.5 dark:hover:shadow-black/20"
              >
                {/* Hover Glow */}
                <motion.div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl"
                  style={{
                    backgroundColor: industry.accent,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.18 }}
                  transition={{ duration: 0.35 }}
                />

                {/* Left Accent */}
                <motion.span
                  className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 rounded-full"
                  style={{
                    backgroundColor: industry.accent,
                  }}
                  whileHover={{
                    height: "65%",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />

                {/* MAIN HORIZONTAL CONTENT */}
                <div className="relative flex min-w-0 items-center gap-3">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 18,
                    }}
                    className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white/80 shadow-sm transition-all duration-300 group-hover:shadow-md dark:bg-white/4"
                    style={{
                      color: industry.accent,
                      borderColor: `${industry.accent}35`,
                    }}
                  >
                    <motion.span
                      className="absolute inset-0 rounded-lg"
                      style={{
                        backgroundColor: industry.accent,
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                    />

                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="relative z-10"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    {/* Title Row */}
                    <div className="flex min-w-0 items-center gap-2">
                      <h3 className="min-w-0 flex-1 truncate text-[15px] font-bold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-white">
                        {industry.title}
                      </h3>

                      <ArrowUpRight
                        size={16}
                        className="shrink-0 opacity-25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        style={{
                          color: industry.accent,
                        }}
                      />
                    </div>

                    {/* Description */}
                    <motion.p
                      className="mt-1 line-clamp-2 text-[11px] leading-[1.55] text-slate-500 dark:text-slate-500"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {industry.description}
                    </motion.p>
                  </div>

                  {/* Number */}
                  <span className="hidden shrink-0 self-start pt-0.5 font-mono text-[9px] text-slate-300 transition-colors duration-300 group-hover:text-slate-400 dark:text-white/10 dark:group-hover:text-white/20 xl:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className="absolute bottom-0 left-4 h-0.5 rounded-full"
                  style={{
                    backgroundColor: industry.accent,
                  }}
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
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
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-7 flex items-center justify-between gap-4 border-t border-slate-200 pt-5 dark:border-white/10"
        >
          <div className="flex items-center gap-2.5">
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.7)]"
            />

            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
              One engineering partner
            </span>
          </div>

          <span className="hidden text-[11px] text-slate-400 sm:block">
            Built for scale. Designed for impact.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraModernIndustries;

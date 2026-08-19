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
      staggerChildren: 0.06,
    },
  },
};

const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
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
      className="relative overflow-hidden bg-slate-50 py-20 text-slate-900 dark:bg-[#050a11] dark:text-white sm:py-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-100 w-100 rounded-full bg-blue-500/10 blur-[140px] dark:bg-blue-500/10" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-100 w-100 rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-size-[70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#276ea5] dark:bg-sky-400" />

              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#276ea5] dark:text-sky-400">
                <Layers size={13} />
                Cross-Industry Intelligence
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-black leading-none tracking-[-0.045em] sm:text-5xl lg:text-6xl"
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400"
          >
            Domain-specific digital products engineered for complex operations,
            ambitious businesses and scale.
          </motion.p>
        </div>

        {/* Industry grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 border-l border-t border-slate-200 dark:border-white/10 sm:grid-cols-2"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                variants={itemAnimation}
                className="group relative min-h-47.5 border-b border-r border-slate-200 p-6 transition-colors duration-300 hover:bg-white dark:border-white/10 dark:hover:bg-white/2.5 sm:min-h-52.5 sm:p-7 lg:p-8"
              >
                {/* Hover accent */}
                <div
                  className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  style={{ backgroundColor: industry.accent }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      color: industry.accent,
                      borderColor: `${industry.accent}35`,
                    }}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-tight text-slate-800 transition-colors group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-white sm:text-2xl">
                      {industry.title}
                    </h3>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 opacity-20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      style={{ color: industry.accent }}
                    />
                  </div>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-500">
                    {industry.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-6 h-px w-0 transition-all duration-500 group-hover:w-16 lg:left-8"
                  style={{ backgroundColor: industry.accent }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-7 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.7)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
              One engineering partner
            </span>
          </div>

          <span className="text-xs text-slate-400">
            Built for scale. Designed for impact.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraModernIndustries;

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Code2,
  Globe2,
  Clock,
  ShieldCheck,
  Tag,
  Headphones,
  Sparkles,
  HelpCircle,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import askingImg from "../assets/images/flat-people-asking-questions_23-2148919346.jpg";

const ABOVE_FOLD = false;

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
};

const reasons = [
  {
    id: 1,
    icon: Award,
    title: "Expertise & Experience",
    description:
      "We partner with enterprises globally as their trusted IT ally, focusing on long-term growth and association.",
  },
  {
    id: 2,
    icon: Code2,
    title: "Expert Programmers",
    description:
      "Engineered strictly to global coding standards with clean, maintainable, and high-performance codebases.",
  },
  {
    id: 3,
    icon: Globe2,
    title: "Offshore IT Partners",
    description:
      "Seamlessly extending your internal capabilities with tech talent kept continuously in sync with modern stacks.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Punctual product delivery is our promise. We keep pace with the digital market to maximize your ROI.",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous testing protocols ensuring reliable, airtight security, and enterprise-grade speed.",
  },
  {
    id: 6,
    icon: Tag,
    title: "Competitive Pricing",
    description:
      "Transparent and flexible engagement models delivering premium digital solutions without budget bloat.",
  },
  {
    id: 7,
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Comprehensive post-launch maintenance to keep your applications updated, secure, and fully optimized.",
  },
];

const ReasonsWhySection = () => {
  return (
    <section
      id="reason-why"
      className="relative overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-[#050b14] dark:text-white"
    >
      <div
        className="pointer-events-none absolute -left-40 top-20 h-130 w-130 rounded-full blur-[160px]"
        style={{
          background: `${brandTheme.primaryBlue}18`,
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-130 w-130 rounded-full blur-[160px]"
        style={{
          background: `${brandTheme.electricCyan}12`,
        }}
      />

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-350 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[#276ea5] dark:bg-[#60a5fa]" />

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#276ea5] dark:text-[#60a5fa]">
                <HelpCircle size={14} />
                Why Choose Shilsha Technologies
              </div>
            </div>

            {/* heading */}
            <h2 className="mt-8 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              More than a
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(
                    100deg,
                    ${brandTheme.primaryBlue},
                    ${brandTheme.secondaryIndigo},
                    ${brandTheme.electricCyan}
                  )`,
                }}
              >
                technology
              </span>{" "}
              partner.
              <br />
              <span className="text-slate-400 dark:text-slate-600">
                Your growth partner.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              Shilsha Technologies is a premier web and mobile application
              engineering firm. We build high-performing Web Apps, iOS/Android
              solutions, and enterprise software designed to scale.
            </p>

            {/* mini proof */}
            <div className="mt-10 flex items-center gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: `${brandTheme.primaryBlue}15`,
                  color: brandTheme.primaryBlue,
                }}
              >
                <CheckCircle2 size={19} />
              </div>

              <div>
                <p className="text-sm font-bold">
                  Built for long-term partnerships
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">
                  Quality • Transparency • Reliability
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center lg:col-span-5"
          >
            <div className="relative w-full max-w-125">
              {/* decorative ring */}
              <div
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full border"
                style={{
                  borderColor: `${brandTheme.electricCyan}35`,
                }}
              />

              <div
                className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full border"
                style={{
                  borderColor: `${brandTheme.primaryBlue}30`,
                }}
              />

              {/* image */}
              <div className="relative overflow-hidden rounded-4xl">
                <div className="absolute inset-0 z-10 bg-linear-to-t from-[#050b14]/50 via-transparent to-transparent" />

                <img
                  src={askingImg}
                  alt="Engineering team collaboration"
                  width={640}
                  height={480}
                  style={{ aspectRatio: "4 / 3" }}
                  loading={ABOVE_FOLD ? "eager" : "lazy"}
                  fetchPriority={ABOVE_FOLD ? "high" : "auto"}
                  decoding="async"
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* image accent */}
                <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#276ea5] shadow-xl">
                    <CheckCircle2 size={21} />
                  </div>

                  <div className="text-white">
                    <p className="text-sm font-bold">100% Quality Code</p>
                    <p className="text-[10px] font-medium text-white/70">
                      Global Standards
                    </p>
                  </div>
                </div>

                {/* floating badge */}
                <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md">
                  <Sparkles size={14} className="text-[#60a5fa]" />
                  Agile Process
                </div>
              </div>

              {/* tiny caption */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Engineering with purpose
                </span>

                <span className="h-px w-20 bg-slate-300 dark:bg-white/10" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-28 lg:mt-36">
          {/* section heading */}
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#276ea5] dark:text-[#60a5fa]">
                Why work with us
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                What sets us apart
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-500">
              Seven principles that shape every product, partnership and
              technology decision we make.
            </p>
          </div>

          <div className="border-t border-slate-200 dark:border-white/10">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.04,
                  }}
                  className="group relative border-b border-slate-200 dark:border-white/10"
                >
                  <div className="grid grid-cols-12 items-center gap-4 py-8 sm:py-10 lg:py-11 lg:gap-8">
                    {/* NUMBER */}
                    <div className="col-span-2 lg:col-span-1">
                      <span
                        className="text-xs font-bold tracking-[0.18em] transition-colors duration-300"
                        style={{
                          color:
                            index === 0 ? brandTheme.primaryBlue : undefined,
                        }}
                      >
                        0{item.id}
                      </span>
                    </div>

                    {/* ICON */}
                    <div className="col-span-2 flex justify-center lg:col-span-1">
                      <motion.div
                        whileHover={{
                          scale: 1.15,
                          rotate: -8,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <Icon
                          size={27}
                          strokeWidth={1.5}
                          className="text-slate-400 transition-colors duration-300 group-hover:text-[#276ea5] dark:text-slate-600 dark:group-hover:text-[#60a5fa]"
                        />
                      </motion.div>
                    </div>

                    {/* TITLE */}
                    <div className="col-span-8 lg:col-span-4">
                      <h4 className="text-xl font-bold tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#276ea5] sm:text-2xl dark:group-hover:text-[#60a5fa]">
                        {item.title}
                      </h4>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="col-span-12 lg:col-span-5">
                      <p className="max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>

                    {/* ARROW */}
                    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileHover={{
                          opacity: 1,
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#276ea5]/30 text-[#276ea5] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:border-[#60a5fa]/30 dark:text-[#60a5fa]"
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>
                  </div>

                  {/* hover glow line */}
                  <div
                    className="absolute -bottom-px left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                    style={{
                      background: `linear-gradient(
                        90deg,
                        ${brandTheme.primaryBlue},
                        ${brandTheme.electricCyan},
                        transparent
                      )`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              One team. One vision.
            </p>

            <h3 className="mt-3 max-w-2xl text-2xl font-black tracking-tight sm:text-3xl">
              From the first conversation to long-term growth,
              <span className="text-[#276ea5] dark:text-[#60a5fa]">
                {" "}
                we're with you.
              </span>
            </h3>
          </div>

          <div className="hidden h-20 w-px bg-slate-200 sm:block dark:bg-white/10" />

          <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Ready to build
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReasonsWhySection;

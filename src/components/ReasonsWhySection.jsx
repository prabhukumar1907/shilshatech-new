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
  CheckCircle2,
  ArrowUpRight,
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
    id: "01",
    icon: Award,
    title: "Expertise & Experience",
    description:
      "We partner with enterprises globally as their trusted IT ally, focusing on long-term growth and association.",
  },
  {
    id: "02",
    icon: Code2,
    title: "Expert Programmers",
    description:
      "Engineered strictly to global coding standards with clean, maintainable, and high-performance codebases.",
  },
  {
    id: "03",
    icon: Globe2,
    title: "Offshore IT Partners",
    description:
      "Seamlessly extending your internal capabilities with tech talent kept continuously in sync with modern stacks.",
  },
  {
    id: "04",
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Punctual product delivery is our promise. We keep pace with the digital market to maximize your ROI.",
  },
  {
    id: "05",
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous testing protocols ensuring reliable, airtight security, and enterprise-grade speed.",
  },
  {
    id: "06",
    icon: Tag,
    title: "Competitive Pricing",
    description:
      "Transparent and flexible engagement models delivering premium digital solutions without budget bloat.",
  },
  {
    id: "07",
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Comprehensive post-launch maintenance to keep your applications updated, secure, and fully optimized.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const ReasonsWhySection = () => {
  const featuredReason = reasons[0];
  const otherReasons = reasons.slice(1);

  return (
    <section
      id="reason-why"
      className="relative overflow-hidden py-12 sm:py-14 lg:py-18 px-4 sm:px-6 lg:px-8 font-sans bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-white"
    >
      <div
        className="absolute -top-32 left-1/3 w-125 h-125 rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{ backgroundColor: brandTheme.primaryBlue }}
      />

      <div
        className="absolute bottom-0 -right-40 w-112.5 h-112.5 rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{ backgroundColor: brandTheme.electricCyan }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.05] bg-[linear-gradient(#276ea5_1px,transparent_1px),linear-gradient(90deg,#276ea5_1px,transparent_1px)] bg-size-[45px_45px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 lg:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-0.5 bg-[#276ea5] dark:bg-sky-400" />

              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#276ea5] dark:text-sky-400">
                Why Choose Shilsha Technologies
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-black tracking-tight leading-[1.02]">
              More Than a
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#276ea5] via-[#1d4ed8] to-[#60a5fa]">
                Technology Partner
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Shilsha Technologies is a premier web and mobile application
              engineering firm. We build high-performing Web Apps, iOS/Android
              solutions, and enterprise software designed to scale.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative h-full min-h-125 overflow-hidden rounded-4xl border border-slate-200 dark:border-white/10 bg-[#0b1528] shadow-xl">
              <img
                src={askingImg}
                alt="Engineering team collaboration"
                width={480}
                height={360}
                loading={ABOVE_FOLD ? "eager" : "lazy"}
                fetchPriority={ABOVE_FOLD ? "high" : "auto"}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-b from-[#070d18]/20 via-[#070d18]/30 to-[#070d18]" />

              <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#070d18]/60 to-transparent" />

              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <Sparkles size={14} className="text-sky-300" />

                <span className="text-xs font-semibold text-white">
                  Our Difference
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                  <featuredReason.icon size={26} className="text-sky-300" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {featuredReason.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-lg">
                  {featuredReason.description}
                </p>

                <div className="flex items-center gap-2 mt-7 text-sm font-semibold text-sky-300">
                  <CheckCircle2 size={17} />
                  Trusted technology expertise
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8"
          >
            {otherReasons.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className={`
                    group relative py-7
                    border-b border-slate-200 dark:border-white/10
                    ${index < 2 ? "sm:border-t-0" : ""}
                  `}
                >
                  <div className="absolute -inset-x-3 inset-y-2 rounded-2xl bg-[#276ea5]/3 dark:bg-sky-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-[#0b1528] text-[#276ea5] dark:text-sky-400 transition-all duration-300 group-hover:border-[#276ea5]/30 group-hover:scale-105">
                        <IconComponent size={20} />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight group-hover:text-[#276ea5] dark:group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-5 flex justify-end">
                      <ArrowUpRight
                        size={18}
                        className="text-slate-300 dark:text-slate-700 group-hover:text-[#276ea5] dark:group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2
              size={19}
              className="text-[#276ea5] dark:text-sky-400 shrink-0"
            />

            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Global Coding Standards
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={19}
              className="text-[#276ea5] dark:text-sky-400 shrink-0"
            />

            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Scalable Digital Solutions
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={19}
              className="text-[#276ea5] dark:text-sky-400 shrink-0"
            />

            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Long-Term Technology Partnership
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReasonsWhySection;

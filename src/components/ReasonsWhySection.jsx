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
  CheckCircle2,
} from "lucide-react";
import askingImg from "../assets/images/flat-people-asking-questions_23-2148919346.jpg";

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

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ReasonsWhySection = () => {
  return (
    <section
      id="reason-why"
      className="relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden font-sans bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-white"
    >
      {/* Background Radial Glow Effects */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-96 sm:w-150 h-80 rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ backgroundColor: brandTheme.primaryBlue }}
      />
      <div
        className="absolute bottom-10 right-10 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ backgroundColor: brandTheme.electricCyan }}
      />

      {/* Subtle Mesh Grid */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none bg-[radial-gradient(#276ea5_1px,transparent_1px)] dark:bg-[radial-gradient(#60a5fa_1px,transparent_1px)] bg-size-[36px_36px] mask-[radial-gradient(ellipse_70%_60%_at_50%_50%,black_20%,transparent_80%)]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start gap-4"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase backdrop-blur-md bg-blue-50 border-blue-200 text-[#276ea5] dark:bg-[#276ea5]/15 dark:border-[#276ea5]/40 dark:text-sky-400">
              <HelpCircle size={14} />
              <span>Why Choose Shilsha Technologies</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Reasons Why We Are Your{" "}
              <span
                className="bg-clip-text text-transparent bg-linear-to-r from-[#276ea5] to-[#1d4ed8] dark:from-white dark:via-sky-200 dark:to-sky-400"
              >
                Ideal Tech Partner
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">
              Shilsha Technologies is a premier web and mobile application engineering firm. We build high-performing Web Apps, iOS/Android solutions, and enterprise software designed to scale.
            </p>
          </motion.div>

          {/* RHS Hero Illustration with Floating Glass Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md group">
              {/* Outer Glow Halo */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-20 blur-xl transition duration-500 group-hover:opacity-35"
                style={{
                  background: `linear-gradient(135deg, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
                }}
              />

              {/* Main Image Container */}
              <div className="relative rounded-3xl border overflow-hidden p-6 backdrop-blur-xl shadow-2xl bg-white border-slate-200 dark:bg-[#0b1528]/70 dark:border-white/10">
                <img
                  src={askingImg}
                  alt="Engineering team collaboration"
                  className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Metric Badge 1 */}
                <div className="absolute bottom-4 left-4 p-3 rounded-2xl border backdrop-blur-md flex items-center gap-3 shadow-lg bg-white/90 border-slate-300 dark:bg-[#070d18]/85 dark:border-sky-400/30">
                  <div className="p-2 rounded-xl bg-[#276ea5]/20 text-sky-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      100% Quality Code
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Global Standards
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 */}
                <div className="absolute top-4 right-4 px-3 py-2 rounded-xl border backdrop-blur-md flex items-center gap-2 shadow-lg bg-white/90 border-slate-300 text-slate-900 dark:bg-[#070d18]/85 dark:border-sky-400/30 dark:text-white">
                  <Sparkles size={14} style={{ color: brandTheme.electricCyan }} />
                  <span className="text-xs font-bold">Agile Process</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Grid Layout for Reasons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl p-6 border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl bg-white border-slate-200 dark:bg-[#0b1528]/70 dark:border-white/10"
              >
                {/* Top Card Line Glow on Hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${brandTheme.electricCyan}, transparent)`,
                  }}
                />

                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-colors duration-300 bg-blue-50 border-blue-200 text-[#276ea5] dark:bg-[#276ea5]/15 dark:border-[#276ea5]/30 dark:text-sky-400">
                    <IconComponent size={22} />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold mb-2 tracking-tight group-hover:text-blue-500 dark:group-hover:text-sky-400 transition-colors text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ReasonsWhySection;
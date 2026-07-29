import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, MessageSquare, UserCheck } from "lucide-react";
import {
  FaApple,
  FaReact,
  FaAngular,
  FaVuejs,
  FaJava,
  FaPhp,
  FaPython,
  FaNodeJs,
  FaLaravel,
  FaAws,
  FaDocker,
  FaRust,
  FaSwift,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiGooglecloud,
  SiFirebase,
  SiGraphql,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiDjango,
  SiPytorch,
  SiTensorflow,
  SiKotlin,
} from "react-icons/si";

import { SiIonic, SiDotnet, SiMongodb } from "react-icons/si";
import { FaAndroid, FaFlutter, FaGolang } from "react-icons/fa6";
import {
  UserPlus,
  Rocket,
  Briefcase,
  Terminal,
  Sparkles,
  Zap,
  Globe,
  Clock,
  Smile,
  CheckCircle2,
  ArrowUpRight,
  ChevronDown,
  Infinity as InfinityIcon,
} from "lucide-react";
import ClientSlider from "../components/ClientSlider";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
};

const ENGAGEMENT_MODELS = [
  {
    num: "01",
    title: "Dedicated Developer",
    desc: "Hire dedicated developers full time as your extended team reporting directly to you.",
    meta: [
      { label: "Duration", value: "8 hours/day, 5 days/week" },
      { label: "Tools", value: "Skype, Slack, Meet" },
      { label: "Period", value: "Min 1 month" },
    ],
  },
  {
    num: "02",
    title: "Time & Material",
    desc: "Pay as per hourly Developer efforts which means actual amount of time spent is billed.",
    meta: [
      { label: "Duration", value: "Flexible Hours" },
      { label: "Tools", value: "Jira, Slack, Meet" },
      { label: "Period", value: "Min 15 days" },
    ],
  },
  {
    num: "03",
    title: "Fixed Cost",
    desc: "Ideal for MVP or phase wise development with fixed, clear requirements and budgets.",
    meta: [
      { label: "Duration", value: "Project Based" },
      { label: "Tools", value: "Basecamp, Slack" },
      { label: "Period", value: "Milestone based" },
    ],
  },
];

const FEATURES = [
  {
    icon: CheckCircle2,
    title: "Quality & Expertise",
    desc: "Our developers excel at technical expertise, ensuring robust, scalable solutions.",
  },
  {
    icon: Zap,
    title: "Cost-Effectiveness",
    desc: "Competitive rates without uncompromised quality, optimizing your budget.",
  },
  {
    icon: Terminal,
    title: "Cutting-Edge Tech",
    desc: "Proficiency in latest programming languages and frameworks.",
  },
  {
    icon: Globe,
    title: "Global Communication",
    desc: "Seamless communication with excellent English language proficiency.",
  },
  {
    icon: Clock,
    title: "Time Zone Advantage",
    desc: "Real-time communication and enhanced collaboration based on your hours.",
  },
  {
    icon: Smile,
    title: "Strong Work Ethics",
    desc: "Dedication, discipline, and commitment to project success.",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    id: "reqs",
    title: "Define Requirements",
    desc: "Identify skills, technologies, and experience level required.",
  },
  {
    icon: MessageSquare,
    id: "discuss",
    title: "Discuss Project",
    desc: "Share details, goals, and timelines with our technical team.",
  },
  {
    icon: UserCheck,
    id: "select",
    title: "Select Developers",
    desc: "Review candidate profiles and pick highly-skilled professionals.",
  },
  {
    icon: Rocket,
    id: "start",
    title: "Start Development",
    desc: "Fast-track onboarding and monitor progress through agile systems.",
  },
];

const TECH = [
  // Mobile & Cross-Platform
  { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
  { name: "iOS", icon: <FaApple />, color: "#A2AAAD" },
  { name: "Flutter", icon: <FaFlutter />, color: "#02569B" },
  { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
  { name: "Ionic", icon: <SiIonic />, color: "#3880FF" },
  { name: "Swift", icon: <FaSwift />, color: "#F05138" },
  { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },

  // Frontend & Web
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
  { name: "Vue.js", icon: <FaVuejs />, color: "#4FC08D" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },

  // Backend & Frameworks
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Java", icon: <FaJava />, color: "#5382A1" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  { name: "Django", icon: <SiDjango />, color: "#092E20" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
  { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
  { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
  { name: "Go", icon: <FaGolang />, color: "#00ADD8" },
  { name: "Rust", icon: <FaRust />, color: "#CE412B" },

  // Stacks & API
  { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
  { name: "MEAN Stack", icon: <SiMongodb />, color: "#47A248" },
  { name: "MERN Stack", icon: <SiMongodb />, color: "#47A248" },

  // Databases
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },

  // Cloud & DevOps
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
  { name: "Firebase", icon: <SiFirebase />, color: "#DD2C00" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  { name: "DevOps", icon: <InfinityIcon size={18} />, color: "#007ACC" },

  // AI & Data Science
  { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
];

const FAQS = [
  {
    q: "Can I hire dedicated developers for my project?",
    a: "Yes, at Shilsha Technologies, we offer the option to hire dedicated developers for your project. Hiring dedicated developers provides numerous advantages, including an exclusive focus on your project, seamless collaboration, and enhanced productivity. You can trust our developers to bring their technical proficiency to meet your project requirements and ensure successful completion.",
  },
  {
    q: "How do you ensure my project's security?",
    a: "We prioritize security and confidentiality. We take several measures, including robust secure coding practices, data encryption mechanisms, and automated penetration testing. Furthermore, we sign non-disclosure agreements (NDAs) at the outset of every partnership to protect your valuable data.",
  },
  {
    q: "Will I communicate directly with the developers?",
    a: "Yes, you will communicate directly with our developers. We believe in transparent and effective communication, allowing you to collaborate directly with the individuals working on your project. This ensures clear understanding, timely updates, and seamless coordination to deliver the highest quality results for your project.",
  },
  {
    q: "Can I see examples of the developers' previous work?",
    a: "Yes, we can provide you with a comprehensive portfolio of our developers' previous work, including websites, web applications, and mobile apps they have developed successfully. This will give you a clear idea of their technical expertise, creativity, and ability to deliver high-quality solutions for your project.",
  },
  {
    q: "What qualifications do your developers possess?",
    a: "Our developers are highly qualified professionals with extensive web and mobile app development experience. They possess relevant technical degrees and certifications in their respective fields. Moreover, they have a proven track record of successfully delivering projects for clients across diverse industries worldwide.",
  },
];

const FaqItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-200 dark:border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 text-left group focus:outline-none"
      >
        <span
          className={`font-semibold text-base transition-colors ${
            isOpen
              ? "text-[#276ea5] dark:text-blue-400"
              : "text-slate-900 dark:text-slate-200 group-hover:text-[#276ea5] dark:group-hover:text-blue-400"
          }`}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 ml-4 p-1.5 rounded-full transition-colors ${
            isOpen
              ? "bg-[#276ea5]/10 dark:bg-blue-500/10 text-[#276ea5] dark:text-blue-400"
              : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:bg-[#276ea5]/10 dark:group-hover:bg-blue-500/10 group-hover:text-[#276ea5] dark:group-hover:text-blue-400"
          }`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SectionHead = ({ eyebrow, title, desc, alignLeft }) => (
  <div
    className={`max-w-3xl ${alignLeft ? "text-left" : "mx-auto text-center"} mb-12`}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 shadow-sm backdrop-blur-xl bg-blue-50 border-blue-200 text-[#276ea5] dark:bg-slate-900/80 dark:border-slate-800 dark:text-sky-400"
    >
      <Sparkles size={14} style={{ color: brandTheme.electricCyan }} />
      <span className="text-xs font-bold uppercase tracking-widest">
        {eyebrow}
      </span>
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
    >
      {title}
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400"
    >
      {desc}
    </motion.p>
  </div>
);

const TerminalUI = () => (
  <div className="bg-[#0c141e] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl font-mono text-[11px] sm:text-[13px] leading-relaxed select-none overflow-hidden text-slate-300">
    <div className="flex items-center gap-1.5 mb-5 pb-3 border-b border-white/10">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
      <span className="ml-3 text-slate-500 font-medium tracking-tight">
        /hire-engineer.sh
      </span>
    </div>
    <div className="space-y-1">
      <div className="flex items-center">
        <span className="text-blue-400 font-semibold mr-2">
          $ shilsha :: hire --init
        </span>
        <span className="text-slate-600"> # connecting global talent</span>
      </div>
      <div className="flex gap-2">
        <span className="text-slate-500">→ requirements:</span>
        <span className="text-[#a5b4fc]">"[tech_requirements.json]"</span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-slate-500">→ engagement:</span>
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-500/10 text-[#60a5fa] font-semibold text-[10px] uppercase tracking-wider">
          Dedicated
        </span>
        <span className="text-slate-600">|</span>
        <span className="text-[#a5b4fc]">Fixed</span>
        <span className="text-slate-600">|</span>
        <span className="text-[#a5b4fc]">Hourly</span>
      </div>
      <div className="flex gap-2">
        <span className="text-slate-500">→ timeframe:</span>
        <span className="text-[#a5b4fc]">"instant"</span>
      </div>
      <div className="flex gap-2">
        <span className="text-slate-500">→ matching_status:</span>
        <span className="text-emerald-400 font-semibold">"READY"</span>
      </div>
      <div className="flex items-center gap-1 text-slate-500 pt-2">
        <span>$ shilsha matching success --notify</span>
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          className="w-1.5 h-3.5 bg-[#60a5fa]"
        />
      </div>
    </div>
  </div>
);

export default function HireADeveloper() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans select-none min-h-screen transition-colors duration-500 relative">
      {/* Radial Grid Pattern Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, ${brandTheme.electricCyan} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Ambient Glows */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-15 dark:opacity-25"
          style={{ backgroundColor: brandTheme.primaryBlue }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[110px] pointer-events-none opacity-15 dark:opacity-20"
          style={{ backgroundColor: brandTheme.secondaryIndigo }}
        />

        <div className="max-w-7xl py-8  mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 shadow-lg backdrop-blur-xl bg-blue-50 border-blue-200 text-[#276ea5] dark:bg-slate-900/80 dark:border-slate-700 dark:text-blue-400"
            >
              <UserPlus size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">
                // Hire-A-Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Expert{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${brandTheme.electricCyan} 0%, ${brandTheme.primaryBlue} 50%, ${brandTheme.secondaryIndigo} 100%)`,
                }}
              >
                Programming
              </span>{" "}
              Talent, Tailored for Your Vision
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl text-slate-600 dark:text-slate-400"
            >
              Hire skilled web and mobile app developers from Shilsha Technologies to
              bring your digital ideas to life with technical precision and
              creative engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-linear-to-r from-[#276ea5] to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 group"
              >
                Hire a Developer
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                to="/services"
                className="relative inline-block group py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#276ea5] dark:hover:text-blue-400 transition-colors"
              >
                Explore our Services
                <span
                  className="absolute bottom-2 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
                  }}
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 relative"
          >
            <TerminalUI />
          </motion.div>
        </div>
      </div>

      {/* Engagement Models */}
      <section id="engagement" className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHead
            eyebrow="Flexible Hiring"
            title="Choose Your Engagement Model"
            desc="Our Hire a Developer Engagement models are structured to align with your specific budget, deliverables, and timeline constraints, ensuring a bespoke technical partnership."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <motion.div
                key={model.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700 bg-white/90 dark:bg-slate-900/60 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-none backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-dashed border-slate-200 dark:border-white/10">
                  <div
                    className="p-3.5 rounded-2xl text-white font-mono font-bold text-sm shadow-md"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
                    }}
                  >
                    {model.num}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {model.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6 min-h-15">
                  {model.desc}
                </p>
                <div className="space-y-2.5 border-t border-dashed border-slate-200 dark:border-white/10 pt-5">
                  {model.meta.map((m) => (
                    <div
                      key={m.label}
                      className="flex justify-between items-center text-xs"
                    >
                      <span className="font-semibold text-slate-800 dark:text-slate-300">
                        {m.label}
                      </span>
                      <span className="text-slate-500 dark:text-slate-500">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - Features */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-15 dark:opacity-20"
          style={{ backgroundColor: brandTheme.primaryBlue }}
        />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Why Shilsha Technologies"
              title="Hire the Top 1% Engineering Talent"
              desc="Experience the difference with highly skilled, disciplined, and proactive technical professionals committed to exceeding your expectations. We take pride in aligning your development budget effectively with uncompromised technical expertise."
              alignLeft
            />
            <div className="mt-8">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-linear-to-r from-[#276ea5] to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg active:scale-95 group"
              >
                Speak with a Hiring Expert
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl border border-slate-100 dark:border-white/10 hover:border-slate-200 dark:hover:border-blue-500/30 bg-white/80 dark:bg-slate-950/70 backdrop-blur-md group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div
                      className="p-2.5 rounded-lg text-white"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHead
            eyebrow="Onboarding Flow"
            title="Seamless Hiring in 4 Simple Steps"
            desc="Shilsha Technologies provides a structured approach for hassle-free developer onboarding, ensuring you quickly and efficiently access the right talent for your digital goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative mt-16 pt-8">
            {/* Connecting line between steps on desktop */}
            <div className="hidden md:block absolute top-18 left-[15%] right-[15%] h-0.5 bg-slate-200 dark:bg-slate-800" />

            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative z-10 group cursor-pointer"
                >
                  <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-md group-hover:shadow-xl group-hover:border-[#276ea5] dark:group-hover:border-blue-400 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
                    <div
                      className="p-3.5 rounded-xl text-white transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
                      }}
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Step Label */}
                  <span className="inline-block mt-6 text-xs font-bold uppercase tracking-widest text-[#276ea5] dark:text-blue-400 group-hover:text-indigo-600 dark:group-hover:text-sky-300 transition-colors">
                    Step {idx + 1}
                  </span>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2 group-hover:text-[#276ea5] dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Stack */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHead
            eyebrow="Key Competencies"
            title="Hire Specialists in Major Stacks"
            desc="Access dedicated developers proficient in widely-used modern technical stacks, from cloud platforms to mobile frameworks."
          />

          <div className="flex flex-wrap items-center justify-center gap-3 mt-12 pt-4">
            {TECH.map((item) => (
              <div
                key={item.name}
                className="group relative inline-flex items-center gap-2.5 px-4 py-2.5 border rounded-xl transition-all duration-300 shadow-sm bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-white/10 hover:scale-105 hover:shadow-md cursor-pointer overflow-hidden"
              >
                {/* Subtle colored background flash on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: item.color }}
                />

                {/* Colored Icon */}
                <span
                  className="text-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>

                {/* Tech Name */}
                <span className="text-sm font-semibold truncate text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                  {item.name}
                </span>

                {/* Check Icon */}
                <CheckCircle2
                  size={13}
                  style={{ color: brandTheme.electricCyan }}
                  className="opacity-50 group-hover:opacity-100 transition-opacity shrink-0 ml-0.5"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientSlider />

      {/* FAQ Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHead
            eyebrow="Help Center"
            title="Frequently Asked Questions"
            desc="Everything you need to know about our technical capabilities, project security, and client communication onboarding process."
          />

          <div className="mt-12 space-y-2">
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

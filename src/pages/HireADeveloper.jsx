import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  MessageSquare,
  UserCheck,
  UserPlus,
  Rocket,
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
  SiIonic,
  SiDotnet,
  SiMongodb,
} from "react-icons/si";

import { FaAndroid, FaFlutter, FaGolang } from "react-icons/fa6";
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
    title: "Hire a Dedicated Developer",
    desc: "Hire dedicated developers full time as your extended team reporting directly to client.",
    meta: [
      { label: "Duration", value: "8 hours/day, 5 days/week" },
      { label: "Communication", value: "Email, Skype, Slack, Meet" },
      { label: "Hiring Period", value: "Minimum 1 month" },
    ],
  },
  {
    num: "02",
    title: "Time & Material",
    desc: "Pay as per hourly Developer efforts which means actual amount of time and efforts spent is billed.",
    meta: [
      { label: "Duration", value: "8 hours/day, 5 days/week" },
      { label: "Communication", value: "Email, Skype, Slack, Meet" },
      { label: "Hiring Period", value: "Minimum 15 days" },
    ],
  },
  {
    num: "03",
    title: "Fixed Cost",
    desc: "Pay fixed price for fixed and clear requirements. Ideal for limited budget, MVP, or phase wise development.",
    meta: [
      { label: "Duration", value: "As per the requirement" },
      { label: "Communication", value: "Email, Skype, Slack, Meet" },
      { label: "Hiring Period", value: "Fixed Cost" },
    ],
  },
];

const FEATURES = [
  {
    icon: CheckCircle2,
    title: "Quality and Expertise",
    desc: "Our developers excel at technical expertise, and proficiency in programming languages and frameworks, ensuring robust, scalable, and efficient solutions development.",
  },
  {
    icon: Zap,
    title: "Cost-Effectiveness",
    desc: "We offer cost advantages for hiring developers with competitive rates and uncompromised quality, optimizing your development budget effectively.",
  },
  {
    icon: Terminal,
    title: "Technical Expertise",
    desc: "Our developers excel in technical skills and expertise across technologies, staying updated with industry trends to develop projects with cutting-edge technologies.",
  },
  {
    icon: Globe,
    title: "English Proficiency",
    desc: "Our developers communicate seamlessly with excellent English language skills, ensuring clear and concise communication during the development process.",
  },
  {
    icon: Clock,
    title: "Time Zone Advantage",
    desc: "India's time zone advantage facilitates real-time communication, faster response times, and improved collaboration with clients in North America and Europe.",
  },
  {
    icon: Smile,
    title: "Strong Work Ethics",
    desc: "Our developers possess dedication, discipline, and commitment, delivering high-quality work with a strong work ethic, ensuring project completion and success.",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    id: "reqs",
    title: "Define Your Requirements",
    desc: "Start by identifying your project requirements, including the technologies, skills, and experience level you are looking for in a developer.",
  },
  {
    icon: MessageSquare,
    id: "discuss",
    title: "Discuss Your Project",
    desc: "Reach out to our team and discuss your project details. We will understand your goals, timelines, and any specific needs you have.",
  },
  {
    icon: UserCheck,
    id: "select",
    title: "Select the Best Developers",
    desc: "Our expert team will shortlist highly-skilled and experienced developers that match your requirements. We will provide candidate profiles for your review.",
  },
  {
    icon: Rocket,
    id: "start",
    title: "Start Your Project",
    desc: "Once you have selected the developers, we will facilitate a smooth onboarding process. You can start working with your dedicated team and monitor progress throughout the project.",
  },
];

const TECH = [
  { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
  { name: "IOS", icon: <FaApple />, color: "#A2AAAD" },
  { name: "Flutter", icon: <FaFlutter />, color: "#02569B" },
  { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
  { name: "Ionic", icon: <SiIonic />, color: "#3880FF" },
  { name: "Xamarin", icon: <FaSwift />, color: "#3498DB" },

  { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "VUE", icon: <FaVuejs />, color: "#4FC08D" },
  { name: "DevOps", icon: <InfinityIcon size={18} />, color: "#007ACC" },
  { name: "Mean", icon: <SiMongodb />, color: "#47A248" },
  { name: "Mern", icon: <SiMongodb />, color: "#47A248" },

  { name: "Java", icon: <FaJava />, color: "#5382A1" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
  { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Node JS", icon: <FaNodeJs />, color: "#339933" },
  { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },

  // Additional technologies already supported by the component
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  { name: "Django", icon: <SiDjango />, color: "#092E20" },
  { name: "Go", icon: <FaGolang />, color: "#00ADD8" },
  { name: "Rust", icon: <FaRust />, color: "#CE412B" },
  { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
  { name: "Firebase", icon: <SiFirebase />, color: "#DD2C00" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
  { name: "Swift", icon: <FaSwift />, color: "#F05138" },
  { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
];

const FAQS = [
  {
    q: "Can I hire dedicated developers for my project?",
    a: "Yes, at our web development company, we offer the option to hire dedicated developers for your project. Hiring dedicated developers provides numerous advantages, including exclusive focus on your project, seamless collaboration, and enhanced productivity. Our dedicated developers are highly skilled professionals with expertise in various technologies and frameworks. They have a proven track record of successfully delivering projects across different industries. You can trust our dedicated developers to bring their technical proficiency, creativity, and problem-solving abilities to meet your project requirements and ensure their successful completion.",
  },
  {
    q: "How do you ensure my project's security and confidentiality?",
    a: "At our web development company, we prioritize your project's security and confidentiality. We take several measures to ensure your project and sensitive information are protected. Firstly, we strictly adhere to industry best practices and follow robust security protocols to safeguard your data. We also sign non-disclosure agreements (NDAs) to ensure confidentiality. We implement robust security measures, including secure servers, encrypted connections, and strict access controls. Our top priority is ensuring your information's confidentiality and security.",
  },
  {
    q: "Will I communicate directly with the developers?",
    a: "Yes, you will communicate directly with our developers at our web development company. We believe in transparent and effective communication, allowing you to collaborate directly with the developers working on your project. This ensures clear understanding, timely updates, and seamless coordination to deliver the highest results for your project.",
  },
  {
    q: "Can I see examples of the developers' previous work?",
    a: "Yes, we understand the importance of showcasing our developers' capabilities. We can provide you with a portfolio of our developers' previous work, including websites, web applications, and mobile apps they have developed. This will give you a clear idea of their expertise, creativity, and ability to deliver high-quality solutions for your project.",
  },
  {
    q: "What qualifications and experience do your developers possess?",
    a: "Our developers are highly qualified professionals with extensive web development experience. They possess relevant degrees and certifications in their respective fields, ensuring a strong technical foundation. Moreover, they have a proven track record of successfully delivering projects for clients across diverse industries. This showcases their expertise and ability to meet your project requirements.",
  },
  {
    q: "Can I hire developers for both short-term and long-term projects?",
    a: "Yes, we offer flexibility to hire developers for short- and long-term projects. Whether you need developers for a specific task or ongoing support, we can provide you with the right talent. We understand that project durations vary, and we are here to accommodate your specific needs, ensuring your project's success.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Yes, we take your project and confidential information seriously. We are more than willing to sign a Non-Disclosure Agreement (NDA) to ensure the confidentiality and security of your intellectual property and sensitive data. Our customers' privacy and trust are our highest priorities.",
  },
  {
    q: "Can I interview the developer before hiring?",
    a: "Yes, we understand how critical it is to find the right developer for your project. You can interview the developer before hiring. We believe in transparent communication and want you to feel confident in the developer's skills and expertise. Your satisfaction is our priority, and we encourage open dialogue throughout the hiring process.",
  },
  {
    q: "Can I switch developers if I'm unhappy?",
    a: "Yes, your satisfaction is our priority. If you're not satisfied with the assigned developer, we can arrange a smooth transition to another developer who better fits your requirements. We aim to ensure your project's success and will work closely with you to find the best developer to meet your needs.",
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
    className={`max-w-3xl ${
      alignLeft ? "text-left" : "mx-auto text-center"
    } mb-12`}
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
        /hire-developer.sh
      </span>
    </div>

    <div className="space-y-1">
      <div className="flex items-center">
        <span className="text-blue-400 font-semibold mr-2">
          $ shilsha :: hire --init
        </span>
        <span className="text-slate-600">
          # connecting global talent
        </span>
      </div>

      <div className="flex gap-2">
        <span className="text-slate-500">→ requirements:</span>
        <span className="text-[#a5b4fc]">
          "[tech_requirements.json]"
        </span>
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
        <span className="text-emerald-400 font-semibold">
          "READY"
        </span>
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
        {/* Background Pattern */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle, ${brandTheme.electricCyan} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Hero / Breadcrumb Content */}
        <section className="relative overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-15 dark:opacity-25"
            style={{ backgroundColor: brandTheme.primaryBlue }}
          />

          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[110px] pointer-events-none opacity-15 dark:opacity-20"
            style={{ backgroundColor: brandTheme.secondaryIndigo }}
          />

          <div className="max-w-7xl py-8 mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
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
                Hire a{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${brandTheme.electricCyan} 0%, ${brandTheme.primaryBlue} 50%, ${brandTheme.secondaryIndigo} 100%)`,
                  }}
                >
                  Developer
                </span>{" "}
                for Your Next Digital Project
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl text-slate-600 dark:text-slate-400"
              >
                Hire skilled web and mobile app developers from Shilsha
                Technologies to bring your digital ideas to life with precision
                and creativity.
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
        </section>

        {/* Engagement Models */}
        <section
          id="engagement"
          className="relative py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHead
              eyebrow="Flexible Hiring"
              title="Our Engagement Models"
              desc="Our Hire a Developer Engagement models are based on a specification that includes the budget, deliverables, and timeline. This is to ensure that all needs are met within a predetermined timeline."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENGAGEMENT_MODELS.map((model, idx) => (
                <motion.div
                  key={model.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-7 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700 bg-white/90 dark:bg-slate-900/60 transition-all duration-300 shadow-sm hover:shadow-xl backdrop-blur-xl"
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

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
                    {model.desc}
                  </p>

                  <div className="space-y-2.5 border-t border-dashed border-slate-200 dark:border-white/10 pt-5">
                    {model.meta.map((m) => (
                      <div
                        key={m.label}
                        className="flex justify-between items-start gap-4 text-xs"
                      >
                        <span className="font-semibold text-slate-800 dark:text-slate-300">
                          {m.label}
                        </span>
                        <span className="text-right text-slate-500 dark:text-slate-500">
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

        {/* Why Hire Developers */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-15 dark:opacity-20"
            style={{ backgroundColor: brandTheme.primaryBlue }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHead
              eyebrow="Why Hire From Us"
              title="Why Hire Developers from Shilsha Technologies?"
              desc="Welcome to Shilsha Technologies, a leading web and mobile app development company. At Shilsha Technologies, we take pride in our team of highly skilled and experienced developers. With a proven track record of delivering successful projects for clients worldwide, we offer expertise across various technologies and industries. When you choose Shilsha Technologies, you can expect top-notch development services, innovative solutions, and a commitment to excellence. Trust us to bring your ideas to life, deliver exceptional results, and exceed your expectations. Experience the difference with Shilsha Technologies."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((feat, idx) => {
                const Icon = feat.icon;

                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
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

        {/* CTA 1 */}
        <section className="relative py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden relative p-8 sm:p-10 bg-linear-to-r from-[#276ea5] to-indigo-700 text-white shadow-xl"
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-9 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black">
                    Tap into India's Top Programming Talent
                  </h3>
                  <h5 className="mt-2 text-sm sm:text-base font-medium text-blue-100">
                    Hire Indian Programmer | Rent Indian Developer
                  </h5>
                </div>

                <div className="lg:col-span-3 flex justify-center lg:justify-end">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#276ea5] font-bold rounded-xl hover:bg-blue-50 transition-all"
                  >
                    Join Us
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHead
              eyebrow="Simple Process"
              title="Hire Developers In 4 Easy Steps"
              desc="Shilsha Technologies makes it simple and hassle-free to hire developers for web and mobile app development projects. Our streamlined process ensures that you can quickly and efficiently onboard the right talent to bring your ideas to life."
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative mt-16 pt-8">
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
                    className="flex flex-col items-center text-center relative z-10 group"
                  >
                    <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-md group-hover:shadow-xl group-hover:border-[#276ea5] dark:group-hover:border-blue-400 group-hover:-translate-y-1.5 transition-all duration-300">
                      <div
                        className="p-3.5 rounded-xl text-white"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
                        }}
                      >
                        <Icon size={24} />
                      </div>
                    </div>

                    <span className="inline-block mt-6 text-xs font-bold uppercase tracking-widest text-[#276ea5] dark:text-blue-400">
                      Step {idx + 1}
                    </span>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2">
                      {step.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <section className="relative py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 sm:p-10 bg-linear-to-r from-indigo-700 to-[#276ea5] text-white shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-9 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black">
                    Tap Into India's Tech Talent
                  </h3>
                  <h5 className="mt-2 text-sm sm:text-base font-medium text-blue-100">
                    Hire Part Time Developer | Hire Programmer in India
                  </h5>
                </div>

                <div className="lg:col-span-3 flex justify-center lg:justify-end">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#276ea5] font-bold rounded-xl hover:bg-blue-50 transition-all"
                  >
                    Join Us
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologies */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHead
              eyebrow="Technology Expertise"
              title="Key Technologies we work with"
              desc="Hire dedicated developers in India skilled in a wide range of technologies. Explore our list of talented professionals for your development needs."
            />

            <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
              {TECH.map((item) => (
                <div
                  key={item.name}
                  className="group relative inline-flex items-center gap-2.5 px-4 py-2.5 border rounded-xl transition-all duration-300 shadow-sm bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-white/10 hover:scale-105 hover:shadow-md cursor-pointer overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: item.color }}
                  />

                  <span
                    className="text-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>

                  <span className="text-sm font-semibold truncate text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                    {item.name}
                  </span>

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

        {/* Clients */}
        <ClientSlider />

        {/* FAQ */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto relative z-10">
            <SectionHead
              eyebrow="Help Center"
              title="Frequently Asked Questions"
              desc="Everything you need to know about hiring developers, project security, communication, experience, and our flexible engagement options."
            />

            <div className="mt-12 space-y-2">
              {FAQS.map((item, i) => (
                <FaqItem
                  key={item.q}
                  item={item}
                  isOpen={openFaq === i}
                  onToggle={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

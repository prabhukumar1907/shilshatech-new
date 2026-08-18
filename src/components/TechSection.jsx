import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Layout,
  Server,
  Cloud,
  FileText,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  Boxes,
  Globe,
  Bot,
  Brain,
  ShieldCheck,
} from "lucide-react";

import {
  FaAndroid,
  FaApple,
  FaJava,
  FaPhp,
  FaPython,
  FaLaravel,
  FaAws,
  FaWindows,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaDrupal,
  FaEthereum,
} from "react-icons/fa6";

import {
  SiFlutter,
  SiIonic,
  SiDotnet,
  SiGooglecloud,
  SiTensorflow,
  SiNextdotjs,
} from "react-icons/si";

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
};

const techCategories = [
  { id: "all", label: "All Tech", icon: Layers },
  {
    id: "mobility",
    title: "Mobility",
    icon: Smartphone,
    glow: "rgba(39, 110, 165, 0.25)",
    items: [
      { name: "Android", tag: "Native Mobile", icon: FaAndroid, color: "#3DDC84" },
      { name: "iOS", tag: "Native Mobile", icon: FaApple, color: "#A2AAAD" },
      { name: "Flutter", tag: "Cross-Platform", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", tag: "Cross-Platform", icon: FaReact, color: "#61DAFB" },
      { name: "Ionic", tag: "Hybrid Mobile", icon: SiIonic, color: "#3880FF" },
      { name: "Xamarin", tag: "Cross-Platform", icon: SiDotnet, color: "#3498DB" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    glow: "rgba(29, 78, 216, 0.25)",
    items: [
      { name: "Angular JS", tag: "Web Framework", icon: FaAngular, color: "#DD0031" },
      { name: "React JS", tag: "Web Library", icon: FaReact, color: "#61DAFB" },
      { name: "Vue JS", tag: "Web Framework", icon: FaVuejs, color: "#4FC08D" },
      { name: "Next.js", tag: "React Framework", icon: SiNextdotjs, color: "#000000" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    glow: "rgba(39, 110, 165, 0.25)",
    items: [
      { name: "Java", tag: "Enterprise", icon: FaJava, color: "#5382A1" },
      { name: ".NET", tag: "Enterprise Core", icon: SiDotnet, color: "#512BD4" },
      { name: "PHP", tag: "Web Engine", icon: FaPhp, color: "#777BB4" },
      { name: "Node JS", tag: "Async Runtime", icon: FaNodeJs, color: "#339933" },
      { name: "Python", tag: "Data & Web", icon: FaPython, color: "#3776AB" },
      { name: "Laravel", tag: "PHP Framework", icon: FaLaravel, color: "#FF2D20" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    glow: "rgba(96, 165, 250, 0.25)",
    items: [
      { name: "DevOps", tag: "CI/CD Automation", icon: Cpu, color: "#007ACC" },
      { name: "Azure", tag: "Microsoft Cloud", icon: FaWindows, color: "#0089D6" },
      { name: "AWS", tag: "Amazon Web Services", icon: FaAws, color: "#FF9900" },
      { name: "GCP", tag: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
  {
    id: "cms",
    title: "Content Management",
    icon: FileText,
    glow: "rgba(39, 110, 165, 0.25)",
    items: [
      { name: "SharePoint", tag: "Enterprise Portal", icon: FaWindows, color: "#0078D4" },
      { name: "Drupal", tag: "Headless CMS", icon: FaDrupal, color: "#0678BE" },
      { name: "Sitecore", tag: "Digital Experience", icon: Boxes, color: "#EB292C" },
      { name: "Sitefinity", tag: "Web CMS", icon: Globe, color: "#50B848" },
    ],
  },
  {
    id: "ai-blockchain",
    title: "Blockchain & ML",
    icon: Cpu,
    glow: "rgba(29, 78, 216, 0.25)",
    items: [
      { name: "ML & AI", tag: "Machine Learning", icon: Brain, color: "#8E44AD" },
      { name: "Chatbot", tag: "Conversational AI", icon: Bot, color: "#10A37F" },
      { name: "Ethereum", tag: "Smart Contracts", icon: FaEthereum, color: "#3C3C3D" },
      { name: "TensorFlow", tag: "Deep Learning", icon: SiTensorflow, color: "#FF6F00" },
    ],
  },
];

const TechSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categoriesToShow =
    activeTab === "all"
      ? techCategories.filter((c) => c.id !== "all")
      : techCategories.filter((c) => c.id === activeTab);

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden font-sans bg-slate-50 text-slate-900 dark:bg-[#060b13] dark:text-white">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-125 blur-[120px] pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at top, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo}, transparent)`,
          willChange: "transform",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-4 transition-colors bg-blue-50 border-blue-200 text-[#276ea5] dark:bg-slate-900/80 dark:border-slate-800 dark:text-sky-400">
            <Sparkles size={14} style={{ color: brandTheme.electricCyan }} />
            <span>Robust Tech Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Expertise in{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${brandTheme.electricCyan}, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
              }}
            >
              Technology
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
            From front-end UI frameworks and enterprise backend runtimes to
            cloud platforms, CMS engines, AI, and distributed ledgers—we build
            scalable digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-linear-to-r from-[#276ea5] to-[#1d4ed8] border-sky-400 text-white shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm dark:bg-slate-900/80 dark:border-slate-800/80 dark:text-slate-400 dark:hover:text-white dark:hover:border-slate-700 dark:hover:bg-slate-800/60"
                }`}
              >
                <Icon size={16} />
                <span>{cat.label || cat.title}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {categoriesToShow.map((cat) => {
              const CategoryIcon = cat.icon;

              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div
                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                    style={{ background: cat.glow }}
                  />

                  <div className="relative h-full p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between bg-white/95 border-slate-200 hover:border-slate-300 shadow-xl shadow-slate-200/50 dark:border-slate-800/80 dark:bg-slate-900/90 dark:hover:border-slate-700/80 dark:shadow-none">
                    <div>
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/60">
                        <div className="flex items-center gap-3">
                          <div
                            className="p-3 rounded-2xl text-white shadow-md"
                            style={{
                              backgroundImage: `linear-gradient(to bottom right, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
                            }}
                          >
                            <CategoryIcon size={22} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                              {cat.title}
                            </h3>
                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                              {cat.items.length} Tech Frameworks
                            </span>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={18}
                          className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-400 group-hover:text-[#276ea5] dark:text-slate-600 dark:group-hover:text-sky-400"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {cat.items.map((item) => {
                          const ItemIcon = item.icon;

                          return (
                            <div
                              key={item.name}
                              className="group/item flex flex-col p-2.5 rounded-xl border transition-all duration-200 border-slate-100 bg-slate-50 hover:bg-slate-100/80 hover:border-slate-200 dark:border-slate-800/60 dark:bg-[#060b13]/60 dark:hover:bg-slate-900/80 dark:hover:border-slate-700 overflow-hidden relative"
                            >
                              <div
                                className="absolute inset-0 opacity-0 group-hover/item:opacity-5 transition-opacity pointer-events-none"
                                style={{ backgroundColor: item.color }}
                              />

                              <div className="flex items-center gap-2">
                                <span
                                  className="shrink-0 transition-transform duration-200 group-hover/item:scale-110 flex items-center justify-center text-sm"
                                  style={{ color: item.color }}
                                >
                                  <ItemIcon />
                                </span>
                                <span className="text-xs font-bold truncate text-slate-800 dark:text-slate-200">
                                  {item.name}
                                </span>
                              </div>
                              <span className="text-[10px] font-medium pl-6 mt-0.5 truncate text-slate-500 dark:text-slate-500">
                                {item.tag}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
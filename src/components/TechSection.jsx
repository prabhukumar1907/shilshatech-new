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
  Globe,
  Bot,
  Brain,
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
  {
    id: "all",
    label: "All Technology",
    icon: Layers,
  },
  {
    id: "mobility",
    title: "Mobility",
    icon: Smartphone,
    items: [
      {
        name: "Android",
        tag: "Native Mobile",
        icon: FaAndroid,
        color: "#3DDC84",
      },
      {
        name: "iOS",
        tag: "Native Mobile",
        icon: FaApple,
        color: "#A2AAAD",
      },
      {
        name: "Flutter",
        tag: "Cross-Platform",
        icon: SiFlutter,
        color: "#02569B",
      },
      {
        name: "React Native",
        tag: "Cross-Platform",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Ionic",
        tag: "Hybrid Mobile",
        icon: SiIonic,
        color: "#3880FF",
      },
      {
        name: "Xamarin",
        tag: "Cross-Platform",
        icon: SiDotnet,
        color: "#3498DB",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    items: [
      {
        name: "Angular JS",
        tag: "Web Framework",
        icon: FaAngular,
        color: "#DD0031",
      },
      {
        name: "React JS",
        tag: "Web Library",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Vue JS",
        tag: "Web Framework",
        icon: FaVuejs,
        color: "#4FC08D",
      },
      {
        name: "Next.js",
        tag: "React Framework",
        icon: SiNextdotjs,
        color: "#000000",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    items: [
      {
        name: "Java",
        tag: "Enterprise",
        icon: FaJava,
        color: "#F89820",
      },
      {
        name: ".NET",
        tag: "Enterprise Core",
        icon: SiDotnet,
        color: "#512BD4",
      },
      {
        name: "PHP",
        tag: "Web Engine",
        icon: FaPhp,
        color: "#777BB4",
      },
      {
        name: "Node JS",
        tag: "Async Runtime",
        icon: FaNodeJs,
        color: "#339933",
      },
      {
        name: "Python",
        tag: "Data & Web",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "Laravel",
        tag: "PHP Framework",
        icon: FaLaravel,
        color: "#FF2D20",
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      {
        name: "DevOps",
        tag: "CI/CD Automation",
        icon: Cpu,
        color: "#007ACC",
      },
      {
        name: "Azure",
        tag: "Microsoft Cloud",
        icon: FaWindows,
        color: "#0089D6",
      },
      {
        name: "AWS",
        tag: "Amazon Web Services",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        name: "GCP",
        tag: "Google Cloud",
        icon: SiGooglecloud,
        color: "#4285F4",
      },
    ],
  },
  {
    id: "cms",
    title: "Content Management",
    icon: FileText,
    items: [
      {
        name: "SharePoint",
        tag: "Enterprise Portal",
        icon: FaWindows,
        color: "#0078D4",
      },
      {
        name: "Drupal",
        tag: "Headless CMS",
        icon: FaDrupal,
        color: "#0678BE",
      },
      {
        name: "Sitecore",
        tag: "Digital Experience",
        icon: Globe,
        color: "#EB292C",
      },
      {
        name: "Sitefinity",
        tag: "Web CMS",
        icon: Globe,
        color: "#50B848",
      },
    ],
  },
  {
    id: "ai-blockchain",
    title: "AI & Blockchain",
    icon: Cpu,
    items: [
      {
        name: "ML & AI",
        tag: "Machine Learning",
        icon: Brain,
        color: "#8E44AD",
      },
      {
        name: "Chatbot",
        tag: "Conversational AI",
        icon: Bot,
        color: "#10A37F",
      },
      {
        name: "Ethereum",
        tag: "Smart Contracts",
        icon: FaEthereum,
        color: "#3C3C3D",
      },
      {
        name: "TensorFlow",
        tag: "Deep Learning",
        icon: SiTensorflow,
        color: "#FF6F00",
      },
    ],
  },
];

const TechnologyItem = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.035,
      }}
      whileHover={{
        y: -4,
        x: 2,
      }}
      className="group relative flex cursor-default items-center gap-3"
    >
      {/* Icon glow */}
      <span
        className="pointer-events-none absolute -inset-3 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-25"
        style={{
          backgroundColor: item.color,
        }}
      />

      {/* Icon */}
      <motion.span
        whileHover={{
          scale: 1.1,
          rotate: 4,
        }}
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 group-hover:shadow-md dark:bg-white/4.5 dark:ring-white/8"
        style={{
          color: item.color,
        }}
      >
        <Icon size={23} />

        <span
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{
            backgroundColor: item.color,
          }}
        />
      </motion.span>

      {/* Text */}
      <div className="relative min-w-0">
        <p className="whitespace-nowrap text-sm font-bold tracking-tight text-slate-800 dark:text-slate-100">
          {item.name}
        </p>

        <p className="mt-0.5 whitespace-nowrap text-[10px] font-medium text-slate-400 dark:text-slate-500">
          {item.tag}
        </p>
      </div>
    </motion.div>
  );
};

const CategoryButton = ({ category, active, onClick }) => {
  const Icon = category.icon;

  return (
    <button
      onClick={onClick}
      className={`relative flex cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
        active
          ? "text-white"
          : "text-slate-500 hover:text-[#276ea5] dark:text-slate-400 dark:hover:text-sky-400"
      }`}
    >
      {active && (
        <motion.span
          layoutId="technology-active-pill"
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(
              135deg,
              ${brandTheme.primaryBlue},
              ${brandTheme.secondaryIndigo}
            )`,
            boxShadow: "0 8px 24px rgba(39,110,165,.20)",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        <Icon size={16} />
        {category.label || category.title}
      </span>
    </button>
  );
};

/* -------------------------------------------------
   CATEGORY HEADER
-------------------------------------------------- */

const CategoryHeader = ({ category }) => {
  const Icon = category.icon;

  return (
    <div className="mb-5 flex items-center gap-3">
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: -4,
        }}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
        style={{
          background: `linear-gradient(
            135deg,
            ${brandTheme.primaryBlue},
            ${brandTheme.secondaryIndigo}
          )`,
        }}
      >
        <Icon size={18} />
      </motion.div>

      <div>
        <h3 className="text-base font-black tracking-tight text-slate-900 dark:text-white">
          {category.title}
        </h3>

        <p className="text-[10px] font-medium text-slate-400">
          {category.items.length} technologies
        </p>
      </div>
    </div>
  );
};

/* -------------------------------------------------
   MAIN SECTION
-------------------------------------------------- */

const TechSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories =
    activeTab === "all"
      ? techCategories.filter((item) => item.id !== "all")
      : techCategories.filter((item) => item.id === activeTab);

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-slate-50 py-10 font-sans text-slate-900 transition-colors duration-500 dark:bg-[#060b13] dark:text-white sm:py-14"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-150 -translate-x-1/2 rounded-full opacity-[0.09] blur-[110px]"
        style={{
          background: `radial-gradient(
            circle,
            ${brandTheme.electricCyan},
            ${brandTheme.primaryBlue},
            transparent 70%
          )`,
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${brandTheme.primaryBlue} 1px, transparent 1px),
            linear-gradient(to bottom, ${brandTheme.primaryBlue} 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mx-auto mb-7 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-2.5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#276ea5] dark:text-sky-400"
          >
            <Sparkles size={14} />

            <span>Technology Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-[54px]"
          >
            Technology that{" "}
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
              moves ideas forward.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-[15px]"
          >
            A modern engineering stack covering mobile, web, backend, cloud, AI
            and enterprise technologies.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-7 flex flex-wrap justify-center gap-1.5"
        >
          {techCategories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              active={activeTab === category.id}
              onClick={() => setActiveTab(category.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* ALL TECHNOLOGY */}
            {activeTab === "all" ? (
              <div className="relative overflow-hidden rounded-3xl bg-white/55 px-5 py-6 ring-1 ring-slate-200/60 backdrop-blur-sm dark:bg-white/[0.018] dark:ring-white/6 sm:px-7">
                <div
                  className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full opacity-10 blur-[70px]"
                  style={{
                    backgroundColor: brandTheme.electricCyan,
                  }}
                />

                <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                  {categories.map((category, categoryIndex) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: categoryIndex * 0.05,
                      }}
                      className="relative"
                    >
                      <CategoryHeader category={category} />

                      <div className="flex flex-wrap gap-x-7 gap-y-5">
                        {category.items.map((item, index) => (
                          <TechnologyItem
                            key={item.name}
                            item={item}
                            index={index}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (

              categories.map((category) => (
                <div
                  key={category.id}
                  className="relative overflow-hidden rounded-3xl bg-white/55 px-5 py-6 ring-1 ring-slate-200/60 backdrop-blur-sm dark:bg-white/[0.018] dark:ring-white/6 sm:px-7"
                >
                  <CategoryHeader category={category} />

                  <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {category.items.map((item, index) => (
                      <TechnologyItem
                        key={item.name}
                        item={item}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-linear-to-r from-transparent to-[#276ea5]" />

          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: brandTheme.electricCyan,
              boxShadow: "0 0 10px rgba(96,165,250,.8)",
            }}
          />

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
            Built for scale
          </span>

          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: brandTheme.primaryBlue,
            }}
          />

          <span className="h-px w-10 bg-linear-to-l from-transparent to-[#276ea5]" />
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;

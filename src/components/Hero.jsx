import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Terminal,
  GitBranch,
  Rocket,
  Check,
  ChevronRight,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const theme = {
  primary: "#286b94", // Core Shilsha Brand Blue
  secondary: "#1e3a8a", // Deep Indigo Accent
  glow: "#6ea1ff", // Cyan-Blue Electric Glow
  accent: "#38bdf8", // Vibrant Sky Highlight
};

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "24/7", label: "Dedicated Support" },
];

const techMarquee = [
  "React",
  "Node.js",
  "Python",
  "Flutter",
  "AWS",
  "MongoDB",
  "Generative AI",
  "Angular",
  ".NET",
  "iOS & Android",
  "GCP",
  "PostgreSQL",
];

const pipelineStages = [
  { label: "Build", Icon: Terminal },
  { label: "Test", Icon: Check },
  { label: "Deploy", Icon: GitBranch },
  { label: "Ship", Icon: Rocket },
];

const leftTagsPool = [
  { label: "LLM Integrations", offset: "top-1/4" },
  { label: "Cloud Architecture", offset: "top-1/2" },
  { label: "Automated CI/CD", offset: "top-3/4" },
  { label: "Neural Search", offset: "top-1/4" },
  { label: "Microservices", offset: "top-1/2" },
  { label: "Enterprise Security", offset: "top-3/4" },
];

const rightTagsPool = [
  { label: "Fullstack Apps", offset: "top-1/4" },
  { label: "Kubernetes", offset: "top-1/2" },
  { label: "Enterprise MLOps", offset: "top-3/4" },
  { label: "Real-time Analytics", offset: "top-1/4" },
  { label: "Cross-Platform", offset: "top-1/2" },
  { label: "Automated Testing", offset: "top-3/4" },
];

const typingPhrases = [
  "AI Development",
  "Full-Stack Development",
  "Next-Gen SaaS Platforms",
  "Enterprise Mobile Solutions",
  "Secure Cloud Ecosystems",
];

const Hero = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [currentLeftTags, setCurrentLeftTags] = useState([
    leftTagsPool[0],
    leftTagsPool[1],
    leftTagsPool[2],
  ]);
  const [currentRightTags, setCurrentRightTags] = useState([
    rightTagsPool[0],
    rightTagsPool[1],
    rightTagsPool[2],
  ]);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const checkDark = () => document.documentElement.classList.contains("dark");
    setIsDarkMode(checkDark());

    const observer = new MutationObserver(() => setIsDarkMode(checkDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStage((s) => (s + 1) % pipelineStages.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const tagInterval = setInterval(() => {
      setCurrentLeftTags((prev) => {
        const offsets = prev.map((item) => item.offset);
        const available = leftTagsPool.filter(
          (t) => !prev.some((p) => p.label === t.label),
        );
        const shuffled = [...available].sort(() => 0.5 - Math.random());
        return offsets.map((offset, i) => ({
          ...(shuffled[i] || leftTagsPool[i]),
          offset,
        }));
      });

      setCurrentRightTags((prev) => {
        const offsets = prev.map((item) => item.offset);
        const available = rightTagsPool.filter(
          (t) => !prev.some((p) => p.label === t.label),
        );
        const shuffled = [...available].sort(() => 0.5 - Math.random());
        return offsets.map((offset, i) => ({
          ...(shuffled[i] || rightTagsPool[i]),
          offset,
        }));
      });
    }, 4500);

    return () => clearInterval(tagInterval);
  }, []);

  useEffect(() => {
    const fullText = typingPhrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(60);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
          setTypingSpeed(120);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearInterval(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 transition-colors duration-500 selection:bg-blue-500 selection:text-white bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-slate-100">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(${
            isDarkMode ? theme.glow : theme.primary
          } 1.2px, transparent 1.2px)`,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 80%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="h-136 w-136 sm:h-184 sm:w-184 rounded-full blur-[150px] animate-pulse transition-opacity duration-500 opacity-20 dark:opacity-35"
          style={{
            background: `radial-gradient(circle, ${theme.primary} 0%, ${theme.secondary} 50%, ${theme.accent} 85%)`,
            animationDuration: "9s",
          }}
        />
      </div>

      <div className="hidden xl:block">
        <AnimatePresence mode="popLayout">
          {currentLeftTags.map(({ label, offset }, i) => (
            <motion.div
              key={`${label}-${i}`}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`absolute ${offset} left-8 2xl:left-16 flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-xl shadow-lg transition-colors border-slate-200 bg-white/80 text-slate-700 shadow-slate-200/60 dark:border-blue-500/25 dark:bg-[#0e182d]/80 dark:text-slate-200 dark:shadow-black/40`}
            >
              <span
                className="h-2 w-2 rounded-full animate-ping"
                style={{ background: theme.glow }}
              />
              {label}
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {currentRightTags.map(({ label, offset }, i) => (
            <motion.div
              key={`${label}-${i}`}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`absolute ${offset} right-8 2xl:right-16 flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-xl shadow-lg transition-colors border-slate-200 bg-white/80 text-slate-700 shadow-slate-200/60 dark:border-blue-500/25 dark:bg-[#0e182d]/80 dark:text-slate-200 dark:shadow-black/40`}
            >
              <span
                className="h-2 w-2 rounded-full animate-ping"
                style={{ background: theme.glow }}
              />
              {label}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center"
      >
        <motion.div variants={fadeUp}>
          <div className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-xl transition-colors border-blue-200 bg-blue-50/80 text-blue-900 hover:border-blue-300 dark:border-blue-400/30 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:border-blue-400/60">
            <Sparkles size={14} className="text-blue-500 animate-spin-slow" />
            <span>Next-Gen Software Development</span>
            <ChevronRight size={12} className="text-blue-500 opacity-70" />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] max-w-4xl"
        >
          Engineering Excellence for{" "}
          <span className="block sm:inline min-h-[1.2em]">
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: isDarkMode
                  ? `linear-gradient(135deg, #a5f3fc 0%, ${theme.glow} 40%, #818cf8 100%)`
                  : `linear-gradient(135deg, ${theme.primary} 0%, #1d4ed8 50%, ${theme.secondary} 100%)`,
              }}
            >
              {currentText}
              <span className="animate-pulse font-light ml-0.5 text-blue-500">
                |
              </span>
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed font-normal text-slate-600 dark:text-slate-300 dark:opacity-90"
        >
          We engineer high-performance web platforms, intelligent mobile
          applications, and scalable cloud infrastructure designed to accelerate
          enterprise growth.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center items-center gap-4"
        >
          <Link
            to="/contact-us"
            className="group relative inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
              boxShadow: `0 10px 25px -5px ${theme.primary}80`,
            }}
          >
            <span>Get Started</span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <Link
            to="/services"
            className="group flex items-center gap-3 rounded-xl border px-6 py-3.5 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-md border-slate-200 bg-white/90 text-slate-800 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-blue-500/20 dark:bg-[#0c1629]/80 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:bg-[#121f3a] dark:hover:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300 bg-blue-100 text-[#286b94] group-hover:bg-[#286b94] group-hover:text-white dark:bg-blue-500/15 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
              <Layers size={14} />
            </span>
            Explore Our Services
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-14 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border p-2.5 backdrop-blur-2xl shadow-2xl transition-colors border-slate-200/80 bg-white/80 shadow-slate-200/50 dark:border-blue-500/20 dark:bg-[#0a1325]/70"
        >
          {pipelineStages.map(({ label, Icon }, i) => {
            const isActive = i === activeStage;
            return (
              <React.Fragment key={label}>
                <div
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-500 ${
                    isActive
                      ? "text-white shadow-md shadow-blue-900/30"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                  style={{
                    background: isActive
                      ? `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`
                      : "transparent",
                  }}
                >
                  <Icon
                    size={14}
                    className={isActive ? "animate-bounce" : ""}
                  />
                  {label}
                </div>
                {i < pipelineStages.length - 1 && (
                  <div className="h-px w-4 sm:w-8 bg-slate-300 dark:bg-blue-500/20" />
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-10 mt-16 w-full max-w-4xl"
      >
        <div className="grid grid-cols-2 gap-4 rounded-2xl border p-6 backdrop-blur-2xl sm:grid-cols-4 sm:gap-8 shadow-2xl transition-colors border-slate-200 bg-white/80 shadow-slate-200/50 dark:border-blue-500/20 dark:bg-[#0a1325]/60">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <span
                className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage: isDarkMode
                    ? `linear-gradient(90deg, #93c5fd, ${theme.glow})`
                    : `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tech Marquee */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-10 mt-16 w-full max-w-5xl overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex w-max gap-3 mt-2 animate-marquee">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="
                whitespace-nowrap rounded-full
                border border-slate-200 dark:border-blue-500/20
                bg-white/80 dark:bg-[#0a1325]/80
                px-5 py-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
                shadow-sm
                backdrop-blur-md

                transition-all duration-300 ease-out

                hover:-translate-y-0.5
                hover:border-blue-500
                hover:bg-blue-50
                hover:text-blue-700
                hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)]

                dark:hover:border-blue-400
                dark:hover:bg-blue-950/40
                dark:hover:text-white
                dark:hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)]
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

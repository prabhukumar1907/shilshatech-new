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
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
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
  "AI/ML Solutions",
  "Full-Stack Development",
  "Next-Gen SaaS Platforms",
  "Enterprise Solutions",
  "App Development",
];

const Hero = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * -30;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 transition-colors duration-500 selection:bg-blue-500 selection:text-white bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-slate-100"
      style={{ perspective: "1400px" }}
    >
      <motion.div 
        className="absolute pointer-events-none w-150 h-150 rounded-full blur-[140px] opacity-30 dark:opacity-40 transition-all duration-300 z-0"
        style={{
          background: `radial-gradient(circle, ${theme.glow} 0%, ${theme.primary} 60%, transparent 100%)`,
          left: `calc(50% + ${mousePos.x * 12}px - 300px)`,
          top: `calc(50% + ${mousePos.y * 12}px - 300px)`,
        }}
      />

      <div
        className="absolute inset-0 opacity-25 pointer-events-none transition-opacity duration-500 z-0"
        style={{
          backgroundImage: `radial-gradient(${
            isDarkMode ? theme.glow : theme.primary
          } 1.3px, transparent 1.3px)`,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 80%)",
        }}
      />

      <div className="hidden xl:block z-10">
        <AnimatePresence mode="popLayout">
          {currentLeftTags.map(({ label, offset }, i) => (
            <motion.div
              key={`${label}-${i}`}
              initial={{ opacity: 0, x: -50, scale: 0.8, rotateZ: -10 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotateZ: 0 }}
              exit={{ opacity: 0, x: -50, scale: 0.8, rotateZ: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.15, x: 10, rotateZ: 2, z: 60 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`absolute ${offset} left-8 2xl:left-16 flex items-center gap-3 rounded-2xl border px-5 py-2.5 text-xs font-semibold shadow-2xl transition-all border-slate-200/80 bg-white/80 text-slate-700 shadow-slate-300/50 dark:border-blue-500/30 dark:bg-[#0e182d]/85 dark:text-slate-200 dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] cursor-pointer backdrop-blur-xl`}
            >
              <span
                className="h-2.5 w-2.5 rounded-full animate-ping"
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
              initial={{ opacity: 0, x: 50, scale: 0.8, rotateZ: 10 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotateZ: 0 }}
              exit={{ opacity: 0, x: 50, scale: 0.8, rotateZ: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.15, x: -10, rotateZ: -2, z: 60 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`absolute ${offset} right-8 2xl:right-16 flex items-center gap-3 rounded-2xl border px-5 py-2.5 text-xs font-semibold shadow-2xl transition-all border-slate-200/80 bg-white/80 text-slate-700 shadow-slate-300/50 dark:border-blue-500/30 dark:bg-[#0e182d]/85 dark:text-slate-200 dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] cursor-pointer backdrop-blur-xl`}
            >
              <span
                className="h-2.5 w-2.5 rounded-full animate-ping"
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
        style={{
          transform: `rotateX(${mousePos.y * 0.8}deg) rotateY(${mousePos.x * 0.8}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="relative z-20 mx-auto max-w-5xl text-center flex flex-col items-center transition-transform duration-150 ease-out"
      >
        <motion.div 
          variants={fadeUp} 
          whileHover={{ scale: 1.08, z: 40 }} 
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-xs font-bold tracking-wide transition-all border-blue-200 bg-blue-50/90 text-blue-900 hover:border-blue-400 dark:border-blue-400/40 dark:bg-blue-950/70 dark:text-blue-300 shadow-xl shadow-blue-500/10 backdrop-blur-xl">
            <Sparkles size={15} className="text-blue-500 animate-spin" style={{ animationDuration: "4s" }} />
            <span>Next-Gen Software Development</span>
            <ChevronRight size={13} className="text-blue-500 opacity-80" />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] max-w-4xl"
          style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
        >
          Engineering Excellence for{" "}
          <span className="block sm:inline min-h-[1.2em]">
            <span
              className="bg-clip-text text-transparent inline-block drop-shadow-lg"
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

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed font-normal text-slate-600 dark:text-slate-300/90"
          style={{ transform: "translateZ(40px)" }}
        >
          We engineer high-performance web platforms, intelligent mobile
          applications, and scalable cloud infrastructure designed to accelerate
          enterprise growth.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center items-center gap-5"
          style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
        >
          <motion.div whileHover={{ scale: 1.08, z: 30 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact-us"
              className="group relative inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-sm font-bold text-white shadow-2xl transition-all"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                boxShadow: `0 20px 40px -10px ${theme.primary}99, inset 0 1px 0 rgba(255,255,255,0.4)`,
              }}
            >
              <span>Get Started</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
              />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08, z: 30 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="group flex items-center gap-3 rounded-2xl border px-7 py-4 text-sm font-bold transition-all shadow-xl border-slate-200/80 bg-white/90 text-slate-800 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-blue-500/25 dark:bg-[#0c1629]/90 dark:text-slate-200 dark:hover:border-blue-500/50 dark:hover:bg-[#121f3a] dark:hover:text-white backdrop-blur-xl"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 bg-blue-100 text-[#286b94] group-hover:bg-[#286b94] group-hover:text-white dark:bg-blue-500/20 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                <Layers size={15} />
              </span>
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-14 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-3xl border p-3 shadow-2xl transition-colors border-slate-200/80 bg-white/90 shadow-slate-200/50 dark:border-blue-500/25 dark:bg-[#0a1325]/85 backdrop-blur-2xl"
          style={{ transform: "translateZ(50px)" }}
        >
          {pipelineStages.map(({ label, Icon }, i) => {
            const isActive = i === activeStage;
            return (
              <React.Fragment key={label}>
                <motion.div
                  whileHover={{ scale: 1.06, y: -2 }}
                  className={`flex items-center gap-2.5 rounded-2xl px-5 py-2.5 text-xs font-bold transition-all duration-500 ${
                    isActive
                      ? "text-white shadow-xl shadow-blue-900/40"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`
                      : "transparent",
                  }}
                >
                  <Icon
                    size={15}
                    className={isActive ? "animate-bounce" : ""}
                  />
                  {label}
                </motion.div>
                {i < pipelineStages.length - 1 && (
                  <div className="h-px w-4 sm:w-8 bg-slate-300 dark:bg-blue-500/20" />
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-25 mt-16 w-full max-w-4xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          whileHover={{ scale: 1.02, rotateX: 4, rotateY: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="grid grid-cols-2 gap-4 rounded-3xl border p-7 sm:grid-cols-4 sm:gap-8 shadow-2xl transition-all border-slate-200/80 bg-white/80 shadow-slate-200/50 dark:border-blue-500/25 dark:bg-[#0a1325]/75 backdrop-blur-2xl"
          style={{ transform: "translateZ(45px)" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <span
                className="text-3xl sm:text-4xl font-black tracking-tight bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: isDarkMode
                    ? `linear-gradient(90deg, #93c5fd, ${theme.glow})`
                    : `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-20 mt-16 w-full max-w-5xl overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <style>{`
          @keyframes crossBrowserMarquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .firefox-safe-marquee {
            display: flex;
            width: max-content;
            will-change: transform;
            animation: crossBrowserMarquee 25s linear infinite;
          }
          .firefox-safe-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="firefox-safe-marquee gap-3.5 mt-2">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="
                whitespace-nowrap rounded-full
                border border-slate-200/80 dark:border-blue-500/25
                bg-white/90 dark:bg-[#0a1325]/90
                px-6 py-2.5
                text-sm font-semibold
                text-slate-700 dark:text-slate-300
                shadow-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:scale-110
                hover:border-blue-500
                hover:bg-blue-50
                hover:text-blue-700
                hover:shadow-[0_15px_35px_rgba(59,130,246,0.3)]
                dark:hover:border-blue-400
                dark:hover:bg-blue-950/50
                dark:hover:text-white
                dark:hover:shadow-[0_15px_35px_rgba(59,130,246,0.4)]
                cursor-pointer backdrop-blur-xl
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
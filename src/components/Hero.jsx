import React, { useState, useEffect, useRef, useMemo, memo } from "react";
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

const theme = {
  primary: "#286b94",
  secondary: "#1e3a8a",
  glow: "#6ea1ff",
  accent: "#38bdf8",
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
  "AI/ML Solutions",
  "Full-Stack Development",
  "SaaS Platforms",
  "Enterprise Solutions",
  "App Development",
];

const TypingHeadline = memo(function TypingHeadline({ isDarkMode }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingPhrases[phraseIndex];
    const speed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.substring(0, currentText.length + 1);
        setCurrentText(next);
        if (next === fullText) setTimeout(() => setIsDeleting(true), 1800);
      } else {
        const next = fullText.substring(0, currentText.length - 1);
        setCurrentText(next);
        if (next === "") {
          setIsDeleting(false);
          setPhraseIndex((p) => (p + 1) % typingPhrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <span
      className="bg-clip-text text-transparent inline-block drop-shadow-lg"
      style={{
        backgroundImage: isDarkMode
          ? `linear-gradient(135deg, #a5f3fc 0%, ${theme.glow} 40%, #818cf8 100%)`
          : `linear-gradient(135deg, ${theme.primary} 0%, #1d4ed8 50%, ${theme.secondary} 100%)`,
      }}
    >
      {currentText}
      <span className="animate-pulse font-light ml-0.5 text-blue-500">|</span>
    </span>
  );
});

const PipelineStrip = memo(function PipelineStrip({ inView }) {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setActiveStage((s) => (s + 1) % pipelineStages.length);
    }, 2200);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div className="mt-14 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-3xl border p-3 shadow-2xl transition-colors border-slate-200/80 bg-white/90 shadow-slate-200/50 dark:border-blue-500/25 dark:bg-[#0a1325]/95">
      {pipelineStages.map(({ label, Icon }, i) => {
        const isActive = i === activeStage;
        return (
          <React.Fragment key={label}>
            <div
              className={`flex items-center gap-2.5 rounded-2xl px-5 py-2.5 text-xs font-bold transition-colors duration-500 ${
                isActive
                  ? "text-white shadow-xl shadow-blue-900/40"
                  : "text-slate-500 dark:text-slate-400"
              }`}
              style={{
                background: isActive
                  ? `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`
                  : "transparent",
              }}
            >
              <Icon size={15} />
              {label}
            </div>
            {i < pipelineStages.length - 1 && (
              <div className="h-px w-4 sm:w-8 bg-slate-300 dark:bg-blue-500/20" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
});

const TagCloud = memo(function TagCloud({ pool, side, inView }) {
  const [tags, setTags] = useState([pool[0], pool[1], pool[2]]);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setTags((prev) => {
        const offsets = prev.map((t) => t.offset);
        const available = pool.filter(
          (t) => !prev.some((p) => p.label === t.label),
        );
        const shuffled = [...available].sort(() => 0.5 - Math.random());
        return offsets.map((offset, i) => ({
          ...(shuffled[i] || pool[i]),
          offset,
        }));
      });
    }, 6000);
    return () => clearInterval(id);
  }, [pool, inView]);

  const sideClass =
    side === "left" ? "left-8 2xl:left-16" : "right-8 2xl:right-16";

  return (
    <AnimatePresence mode="popLayout">
      {tags.map(({ label, offset }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: side === "left" ? -40 : 40, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: side === "left" ? -40 : 40, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          className={`absolute ${offset} ${sideClass} flex items-center gap-3 rounded-2xl border px-5 py-2.5 text-xs font-semibold shadow-2xl border-slate-200/80 bg-white/90 text-slate-700 shadow-slate-300/40 dark:border-blue-500/30 dark:bg-[#0e182d]/95 dark:text-slate-200`}
        >
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: theme.glow }}
          />
          {label}
        </motion.div>
      ))}
    </AnimatePresence>
  );
});

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetPos.current = {
        x: (e.clientX / innerWidth - 0.5) * 30,
        y: (e.clientY / innerHeight - 0.5) * -30,
      };
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (glowRef.current) {
          glowRef.current.style.setProperty("--mx", `${targetPos.current.x}px`);
          glowRef.current.style.setProperty("--my", `${targetPos.current.y}px`);
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const marqueeItems = useMemo(() => [...techMarquee, ...techMarquee], []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 transition-colors duration-500 selection:bg-blue-500 selection:text-white bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-slate-100"
    >
      <div
        ref={glowRef}
        className="absolute pointer-events-none w-96 h-96 rounded-full blur-[90px] opacity-25 dark:opacity-35 z-0"
        style={{
          background: `radial-gradient(circle, ${theme.glow} 0%, ${theme.primary} 60%, transparent 100%)`,
          left: "50%",
          top: "50%",
          transform:
            "translate3d(calc(-50% + var(--mx, 0px)), calc(-50% + var(--my, 0px)), 0)",
          willChange: "transform",
        }}
      />

      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(${isDarkMode ? theme.glow : theme.primary} 1.3px, transparent 1.3px)`,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 80%)",
        }}
      />

      <div className="hidden xl:block z-10">
        <TagCloud pool={leftTagsPool} side="left" inView={inView} />
        <TagCloud pool={rightTagsPool} side="right" inView={inView} />
      </div>

      <div className="relative z-20 mx-auto max-w-5xl text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-xs font-bold tracking-wide border-blue-200 bg-blue-50/90 text-blue-900 dark:border-blue-400/40 dark:bg-blue-950/70 dark:text-blue-300 shadow-xl shadow-blue-500/10">
          <Sparkles
            size={15}
            className={`text-blue-500 ${inView ? "animate-spin" : ""}`}
            style={{ animationDuration: "4s" }}
          />
          <span>Next-Gen Software Development</span>
          <ChevronRight size={13} className="text-blue-500 opacity-80" />
        </div>

        <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] max-w-4xl">
          Engineering Excellence for{" "}
          <span className="block sm:inline min-h-[1.2em]">
            <TypingHeadline isDarkMode={isDarkMode} />
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed font-normal text-slate-600 dark:text-slate-300/90">
          We engineer high-performance web platforms, intelligent mobile
          applications, and scalable cloud infrastructure designed to accelerate
          enterprise growth.
        </p>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
          <Link
            to="/contact-us"
            className="group relative inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-sm font-bold text-white shadow-2xl transition-transform hover:scale-105 active:scale-95"
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

          <Link
            to="/services"
            className="group flex items-center gap-3 rounded-2xl border px-7 py-4 text-sm font-bold shadow-xl border-slate-200/80 bg-white/90 text-slate-800 hover:border-slate-300 hover:bg-slate-100 dark:border-blue-500/25 dark:bg-[#0c1629]/90 dark:text-slate-200 dark:hover:border-blue-500/50 dark:hover:bg-[#121f3a] transition-transform hover:scale-105 active:scale-95"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 bg-blue-100 text-[#286b94] group-hover:bg-[#286b94] group-hover:text-white dark:bg-blue-500/20 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
              <Layers size={15} />
            </span>
            Explore Our Services
          </Link>
        </div>

        <PipelineStrip inView={inView} />
      </div>

      <div className="relative z-20 mt-16 w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border p-7 sm:grid-cols-4 sm:gap-8 shadow-2xl border-slate-200/80 bg-white/90 shadow-slate-200/50 dark:border-blue-500/25 dark:bg-[#0a1325]/95">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <span
                className="text-3xl sm:text-4xl font-black tracking-tight bg-clip-text text-transparent"
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
            </div>
          ))}
        </div>
      </div>

      <div
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
            animation-play-state: ${inView ? "running" : "paused"};
          }
          .firefox-safe-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="firefox-safe-marquee gap-3.5 mt-2">
          {marqueeItems.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-slate-200/80 dark:border-blue-500/25 bg-white/90 dark:bg-[#0a1325]/90 px-6 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-xl transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 dark:hover:border-blue-400 dark:hover:bg-blue-950/50 dark:hover:text-white cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

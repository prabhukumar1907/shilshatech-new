import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Terminal,
  Check,
  GitBranch,
  Rocket,
  Layers,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const theme = {
  primary: "#286b94",
  secondary: "#1e3a8a",
  glow: "#6ea1ff",
  accent: "#38bdf8",
};

const stats = [
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "50+",
    label: "Global Clients",
  },
  {
    value: "99.9%",
    label: "Uptime Guaranteed",
  },
  {
    value: "24/7",
    label: "Dedicated Support",
  },
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
  {
    label: "Build",
    description: "Design & develop",
    Icon: Terminal,
  },
  {
    label: "Test",
    description: "Validate & refine",
    Icon: Check,
  },
  {
    label: "Deploy",
    description: "Release to cloud",
    Icon: GitBranch,
  },
  {
    label: "Ship",
    description: "Launch & scale",
    Icon: Rocket,
  },
];

const leftTagsPool = [
  {
    label: "LLM Integrations",
    offset: "top-[24%]",
  },
  {
    label: "Cloud Architecture",
    offset: "top-[50%]",
  },
  {
    label: "Automated CI/CD",
    offset: "top-[76%]",
  },
  {
    label: "Neural Search",
    offset: "top-[24%]",
  },
  {
    label: "Microservices",
    offset: "top-[50%]",
  },
  {
    label: "Enterprise Security",
    offset: "top-[76%]",
  },
];

const rightTagsPool = [
  {
    label: "Fullstack Apps",
    offset: "top-[24%]",
  },
  {
    label: "Kubernetes",
    offset: "top-[50%]",
  },
  {
    label: "Enterprise MLOps",
    offset: "top-[76%]",
  },
  {
    label: "Real-time Analytics",
    offset: "top-[24%]",
  },
  {
    label: "Cross-Platform",
    offset: "top-[50%]",
  },
  {
    label: "Automated Testing",
    offset: "top-[76%]",
  },
];

const typingPhrases = [
  "AI/ML Solutions",
  "Full-Stack Development",
  "SaaS Platforms",
  "Enterprise Solutions",
  "App Development",
];

const TypingHeadline = memo(function TypingHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingPhrases[phraseIndex];

    if (!fullText) return;

    const typingSpeed = isDeleting ? 45 : 85;

    const timer = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = fullText.slice(0, currentText.length + 1);

          setCurrentText(nextText);

          if (nextText === fullText) {
            setIsDeleting(true);
          }
        } else {
          const nextText = fullText.slice(
            0,
            Math.max(0, currentText.length - 1),
          );

          setCurrentText(nextText);

          if (nextText === "") {
            setIsDeleting(false);

            setPhraseIndex((previous) => (previous + 1) % typingPhrases.length);
          }
        }
      },
      currentText === fullText && !isDeleting ? 1600 : typingSpeed,
    );

    return () => window.clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <span className="relative inline-block">
      <span
        className="
          bg-linear-to-r
          from-[#286b94]
          via-[#2563eb]
          to-[#1e3a8a]
          bg-clip-text
          text-transparent
          dark:from-[#d7f1ff]
          dark:via-[#8bb8ff]
          dark:to-[#a5b4fc]
        "
      >
        {currentText}
      </span>

      <span
        className="
          ml-1
          inline-block
          animate-pulse
          font-light
          text-[#286b94]
          dark:text-[#8bb8ff]
        "
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
});

const TagCloud = memo(function TagCloud({ pool, side, inView }) {
  const [tags, setTags] = useState([pool[0], pool[1], pool[2]]);

  useEffect(() => {
    if (!inView) return;

    const interval = window.setInterval(() => {
      setTags((previous) => {
        const offsets = previous.map((item) => item.offset);

        const available = pool.filter(
          (item) => !previous.some((current) => current.label === item.label),
        );

        const shuffled = [...available].sort(() => Math.random() - 0.5);

        return offsets.map((offset, index) => ({
          ...(shuffled[index] || pool[index]),
          offset,
        }));
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, [pool, inView]);

  const isLeft = side === "left";

  return (
    <AnimatePresence mode="popLayout">
      {tags.map(({ label, offset }) => (
        <motion.div
          key={label}
          initial={{
            opacity: 0,
            x: isLeft ? -20 : 20,
          }}
          animate={{
            opacity: 0.85,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: isLeft ? -20 : 20,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className={`
            absolute
            ${offset}
            ${isLeft ? "left-4 2xl:left-12" : "right-4 2xl:right-12"}
            hidden
            items-center
            gap-3
            xl:flex
            ${isLeft ? "flex-row" : "flex-row-reverse"}
            text-[10px]
            font-semibold
            tracking-wide
            text-slate-600
            dark:text-slate-300
            drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]
            dark:drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]
          `}
        >
          <span
            className="
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-[#286b94]
              shadow-[0_0_10px_rgba(110,161,255,0.7)]
              dark:bg-[#8bb8ff]
            "
          />

          <span>{label}</span>

          <span
            className={`
              h-px
              w-10
              ${
                isLeft
                  ? "bg-linear-to-r from-[#286b94]/60 to-transparent"
                  : "bg-linear-to-l from-[#286b94]/60 to-transparent"
              }
            `}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
});

const DeliveryPipeline = memo(function DeliveryPipeline({ inView }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % pipelineStages.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [inView]);

  return (
    <div className="mt-14 w-full max-w-4xl px-2 sm:px-4">
      {/* Heading */}
      <div className="mb-8 flex items-center justify-center gap-3">
        <span
          className="
            h-px
            w-8
            bg-[#286b94]/30
            sm:w-12
            dark:bg-[#8bb8ff]/30
          "
        />

        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-slate-600
            dark:text-slate-300
          "
        >
          How We Deliver
        </span>

        <span
          className="
            h-px
            w-8
            bg-[#286b94]/30
            sm:w-12
            dark:bg-[#8bb8ff]/30
          "
        />
      </div>

      {/* Pipeline */}
      <div className="flex w-full items-start justify-center">
        {pipelineStages.map((stage, index) => {
          const Icon = stage.Icon;

          const isActive = index === active;
          const isComplete = index < active;

          return (
            <React.Fragment key={stage.label}>
              {/* Stage */}
              <motion.div
                animate={{
                  opacity: isActive ? 1 : 0.78,
                  y: isActive ? -4 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Icon */}
                <div className="relative">
                  {isActive && (
                    <>
                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: [0.15, 0.35, 0.15],
                          scale: [0.9, 1.3, 0.9],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          absolute
                          -inset-3
                          rounded-full
                          bg-[#6ea1ff]/20
                          blur-lg
                        "
                      />

                      <motion.span
                        animate={{
                          scale: [1, 1.45, 1],
                          opacity: [0.4, 0, 0.4],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                        }}
                        className="
                          absolute
                          -inset-1.25
                          rounded-full
                          border
                          border-[#6ea1ff]/40
                        "
                      />
                    </>
                  )}

                  {/* Icon circle */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className={`
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? `
                            border-[#286b94]
                            bg-[#286b94]
                            text-white
                            shadow-[0_8px_28px_rgba(40,107,148,0.3)]
                            dark:border-[#8bb8ff]
                            dark:bg-[#286b94]
                          `
                          : isComplete
                            ? `
                              border-[#286b94]/40
                              bg-[#286b94]/10
                              text-[#286b94]
                              dark:border-[#8bb8ff]/40
                              dark:bg-[#6ea1ff]/10
                              dark:text-[#8bb8ff]
                            `
                            : `
                              border-slate-300
                              bg-white
                              text-slate-500
                              shadow-sm
                              dark:border-white/10
                              dark:bg-white/5
                              dark:text-slate-300
                            `
                      }
                    `}
                  >
                    <Icon size={17} strokeWidth={2} />

                    {isComplete && (
                      <motion.span
                        initial={{
                          scale: 0,
                        }}
                        animate={{
                          scale: 1,
                        }}
                        className="
                          absolute
                          -right-0.5
                          -top-0.5
                          h-2
                          w-2
                          rounded-full
                          bg-[#286b94]
                          shadow-[0_0_8px_rgba(110,161,255,0.7)]
                          dark:bg-[#8bb8ff]
                        "
                      />
                    )}
                  </motion.div>
                </div>

                {/* Label */}
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : isComplete ? 0.9 : 0.8,
                  }}
                  className={`
                    mt-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    sm:text-[11px]
                    ${
                      isActive
                        ? "text-[#286b94] dark:text-[#8bb8ff]"
                        : "text-slate-600 dark:text-slate-300"
                    }
                  `}
                >
                  {stage.label}
                </motion.span>

                {/* Description */}
                <span
                  className="
                    mt-1
                    hidden
                    text-[9px]
                    font-medium
                    leading-4
                    text-slate-500
                    dark:text-slate-400
                    sm:block
                  "
                >
                  {stage.description}
                </span>
              </motion.div>

              {/* Connector */}
              {index < pipelineStages.length - 1 && (
                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    pt-4
                    sm:pt-3
                  "
                >
                  <motion.div
                    animate={{
                      x: index === active ? [0, 3, 0] : 0,
                      opacity: index < active ? 0.9 : 0.35,
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: index === active ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      text-[#286b94]
                      dark:text-[#8bb8ff]
                      sm:h-7
                      sm:w-7
                    "
                  >
                    <ChevronRight size={16} strokeWidth={1.8} />
                  </motion.div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active status */}
      <div className="mt-7 flex items-center justify-center gap-2">
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#286b94]
            dark:bg-[#8bb8ff]
          "
        />

        <AnimatePresence mode="wait">
          <motion.span
            key={pipelineStages[active].label}
            initial={{
              opacity: 0,
              y: 4,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -4,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              text-[10px]
              font-medium
              text-slate-600
              dark:text-slate-400
            "
          >
            Currently focused on{" "}
            <span
              className="
                font-bold
                text-[#286b94]
                dark:text-[#8bb8ff]
              "
            >
              {pipelineStages[active].label}
            </span>
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
});

const Hero = () => {
  const [inView, setInView] = useState(true);

  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const rafRef = useRef(null);

  const targetPosition = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;

      targetPosition.current = {
        x: (event.clientX / innerWidth - 0.5) * 40,

        y: (event.clientY / innerHeight - 0.5) * -30,
      };

      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;

        if (!glowRef.current) return;

        glowRef.current.style.setProperty(
          "--mx",
          `${targetPosition.current.x}px`,
        );

        glowRef.current.style.setProperty(
          "--my",
          `${targetPosition.current.y}px`,
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const marqueeItems = useMemo(() => [...techMarquee, ...techMarquee], []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-slate-50
        px-5
        pb-20
        pt-32
        text-slate-900
        transition-colors
        duration-500
        dark:bg-[#050b14]
        dark:text-white
        sm:px-8
        lg:pt-36
      "
    >
      <div
        ref={glowRef}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          z-0
          h-105
          w-105
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[110px]
          opacity-20
          dark:opacity-30
        "
        style={{
          background: `
            radial-gradient(
              circle,
              ${theme.glow} 0%,
              ${theme.primary} 38%,
              transparent 72%
            )
          `,
          transform:
            "translate3d(calc(-50% + var(--mx, 0px)), calc(-50% + var(--my, 0px)), 0)",
          willChange: "transform",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-[0.28]
          dark:opacity-[0.15]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(40,107,148,0.09) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(40,107,148,0.09) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 42%, black 15%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 42%, black 15%, transparent 80%)",
        }}
      />

      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-px
          w-[min(700px,70vw)]
          -translate-x-1/2
          origin-center
          bg-linear-to-r
          from-transparent
          via-[#286b94]
          to-transparent
          opacity-60
          dark:via-[#6ea1ff]
        "
      />

      <TagCloud pool={leftTagsPool} side="left" inView={inView} />
      <TagCloud pool={rightTagsPool} side="right" inView={inView} />

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          text-center
        "
      >
        {/* Eyebrow */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            items-center
            gap-3
            text-[10px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#286b94]
            dark:text-[#8bb8ff]
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              animate-pulse
              rounded-full
              bg-[#286b94]
              shadow-[0_0_12px_rgba(110,161,255,0.8)]
              dark:bg-[#8bb8ff]
            "
          />

          <Sparkles
            size={14}
            className="
              text-[#286b94]
              dark:text-[#8bb8ff]
            "
          />

          <span>Next-Gen Software Development</span>

          <span
            className="
              h-px
              w-8
              bg-[#286b94]/50
              sm:w-14
              dark:bg-[#8bb8ff]/50
            "
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            mt-7
            max-w-5xl
            text-4xl
            font-black
            leading-[1.06]
            tracking-[-0.045em]
            text-slate-950
            dark:text-white
            sm:text-6xl
            lg:text-7xl
            xl:text-[84px]
          "
        >
          Engineering Excellence
          <br />
          <span className="relative">
            <span
              className="
                text-slate-950
                dark:text-white
              "
            >
              for{" "}
            </span>

            <TypingHeadline />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="
            mt-7
            max-w-2xl
            text-sm
            font-medium
            leading-7
            text-slate-700
            dark:text-slate-200
            sm:text-base
            lg:text-lg
          "
        >
          We engineer high-performance web platforms, intelligent mobile
          applications, and scalable cloud infrastructure designed to accelerate
          enterprise growth.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mt-9
            flex
            flex-wrap
            items-center
            justify-center
            gap-6
          "
        >
          {/* Primary CTA */}
          <Link
            to="/contact-us"
            className="
              group
              relative
              inline-flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              bg-linear-to-r
              from-[#286b94]
              to-[#1e3a8a]
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-[0_16px_40px_rgba(30,58,138,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_22px_50px_rgba(30,58,138,0.35)]
              active:translate-y-0
            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-linear-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            <span className="relative">Get Started</span>

            <ArrowUpRight
              size={17}
              className="
                relative
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/services"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              px-2
              py-3
              text-sm
              font-bold
              text-slate-800
              transition-all
              duration-300
              hover:text-[#286b94]
              dark:text-slate-200
              dark:hover:text-[#8bb8ff]
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-slate-400
                text-[#286b94]
                transition-all
                duration-300
                group-hover:border-[#286b94]
                group-hover:bg-[#286b94]
                group-hover:text-white
                dark:border-[#8bb8ff]/40
                dark:text-[#8bb8ff]
                dark:group-hover:border-[#8bb8ff]
              "
            >
              <Layers size={14} />
            </span>

            <span>Explore Our Services</span>

            <ChevronRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>

        {/* Delivery Pipeline */}
        <DeliveryPipeline inView={inView} />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.7,
        }}
        className="
          relative
          z-20
          mt-16
          grid
          w-full
          max-w-5xl
          grid-cols-2
          divide-x
          divide-y
          divide-slate-300
          border-y
          border-slate-300
          dark:divide-[#6ea1ff]/20
          dark:border-[#6ea1ff]/20
          sm:grid-cols-4
          sm:divide-y-0
        "
      >
        {stats.map(({ value, label }) => (
          <motion.div
            key={label}
            whileHover={{
              y: -3,
            }}
            className="
              group
              relative
              flex
              flex-col
              items-center
              justify-center
              px-4
              py-6
              text-center
              transition-colors
              sm:py-7
            "
          >
            <span
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-px
                w-0
                -translate-x-1/2
                bg-[#286b94]
                transition-all
                duration-500
                group-hover:w-16
                dark:bg-[#8bb8ff]
              "
            />

            <span
              className="
                bg-linear-to-r
                from-[#286b94]
                to-[#1e3a8a]
                bg-clip-text
                text-3xl
                font-black
                tracking-[-0.04em]
                text-transparent
                dark:from-[#d7f1ff]
                dark:to-[#8bb8ff]
                sm:text-4xl
              "
            >
              {value}
            </span>

            <span
              className="
                mt-1
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-slate-600
                dark:text-slate-300
              "
            >
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div
        className="
          relative
          z-20
          mt-14
          w-full
          overflow-hidden
        "
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-3
            text-[9px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-slate-600
            dark:text-slate-300
          "
        >
          <span
            className="
              h-px
              w-10
              bg-slate-300
              dark:bg-[#8bb8ff]/30
            "
          />
          Technologies We Build With
          <span
            className="
              h-px
              w-10
              bg-slate-300
              dark:bg-[#8bb8ff]/30
            "
          />
        </div>

        <style>{`
          @keyframes heroMarquee {
            from {
              transform: translate3d(0, 0, 0);
            }

            to {
              transform: translate3d(-50%, 0, 0);
            }
          }

          .hero-marquee {
            display: flex;
            width: max-content;
            animation: heroMarquee 28s linear infinite;
            will-change: transform;
          }

          .hero-marquee:hover {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-marquee {
              animation: none;
            }
          }
        `}</style>

        <div
          className="hero-marquee gap-8"
          style={{
            animationPlayState: inView ? "running" : "paused",
          }}
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="
                  group
                  flex
                  items-center
                  gap-3
                  whitespace-nowrap
                  text-sm
                  font-semibold
                  text-slate-600
                  transition-colors
                  duration-300
                  hover:text-[#286b94]
                  dark:text-slate-300
                  dark:hover:text-[#8bb8ff]
                "
            >
              <span
                className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-slate-400
                    transition-all
                    duration-300
                    group-hover:bg-[#286b94]
                    group-hover:shadow-[0_0_10px_rgba(110,161,255,0.8)]
                    dark:bg-slate-600
                    dark:group-hover:bg-[#8bb8ff]
                  "
              />

              {tech}
            </div>
          ))}
        </div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-32
          w-[min(900px,100vw)]
          -translate-x-1/2
          bg-linear-to-t
          from-[#286b94]/5
          to-transparent
        "
      />

      {/* Bottom label */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-7
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-2
          text-[8px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-slate-500
          dark:text-slate-400
        "
      >
        <span>+</span>
        <span>Built for Scale</span>
        <span>+</span>
      </div>
    </section>
  );
};

export default memo(Hero);

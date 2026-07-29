import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, CheckCircle2, MapPin, Award, TrendingUp } from "lucide-react";

const theme = {
  primary: "#276ea5",   // Primary Brand Blue
  secondary: "#1d4ed8", // Indigo Accent
  glow: "#60a5fa",      // Electric Cyan Accent
  heroBg: "#070d18",    // Canvas Dark Background
};

const stats = [
  {
    icon: Users,
    endValue: 106,
    suffix: "+",
    label: "Satisfied Clients",
    subtitle: "Global Trust",
  },
  {
    icon: CheckCircle2,
    endValue: 340,
    suffix: "+",
    label: "Projects Done",
    subtitle: "High Quality",
  },
  {
    icon: MapPin,
    endValue: 3,
    suffix: "",
    label: "Office Locations",
    subtitle: "Worldwide Reach",
  },
  {
    icon: Award,
    endValue: 75,
    suffix: "+",
    label: "Hard Workers",
    subtitle: "Expert Team",
  },
];

const AnimatedCounter = ({ end, duration = 1800, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      
      setCount(Math.floor(easeOutCubic(progress) * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const CountsSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <section
      id="counts"
      className="relative py-12 px-4 transition-colors duration-500 overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-white"
    >
      {/* Radial Grid & Blueprint Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(${
            isDarkMode ? theme.glow : theme.primary
          } 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-[#276ea5]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-87.5 h-50 bg-[#60a5fa]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header Badge */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider backdrop-blur-xl mb-3 transition-colors border-[#276ea5]/30 bg-blue-50 text-[#276ea5] dark:border-[#276ea5]/40 dark:bg-[#276ea5]/20 dark:text-[#60a5fa]">
            <TrendingUp size={14} className="shrink-0" />
            <span>Our Impact in Numbers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Proven Track Record of Excellence
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Gradient Border Halo on Hover */}
                <div
                  className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-md pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.glow})`,
                  }}
                />

                {/* Main Glass Card */}
                <div className="relative h-full p-6 sm:p-8 rounded-2xl border text-center backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1.5 bg-white/90 border-slate-200/80 shadow-sm hover:shadow-xl shadow-slate-200/60 dark:bg-[#0b1528]/80 dark:border-blue-500/20 dark:shadow-[0_12px_35px_-15px_rgba(0,0,0,0.7)] dark:group-hover:bg-[#0c182e]">
                  <div className="relative z-10 flex flex-col items-center justify-between h-full">
                    
                    {/* Top Icon Badge */}
                    <div className="p-3.5 rounded-2xl border mb-5 transition-all duration-300 group-hover:scale-110 bg-blue-50 border-blue-200 text-[#276ea5] group-hover:bg-[#276ea5] group-hover:text-white dark:bg-[#276ea5]/20 dark:border-[#276ea5]/40 dark:text-[#60a5fa] dark:group-hover:bg-[#276ea5] dark:group-hover:text-white dark:group-hover:border-[#60a5fa]">
                      <IconComponent size={24} />
                    </div>

                    {/* Counter Number */}
                    <div
                      className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent mb-1"
                      style={{
                        backgroundImage: isDarkMode
                          ? `linear-gradient(135deg, #ffffff 30%, ${theme.glow} 100%)`
                          : `linear-gradient(135deg, #0f172a 30%, ${theme.primary} 100%)`,
                      }}
                    >
                      <AnimatedCounter
                        end={stat.endValue}
                        suffix={stat.suffix}
                        duration={1800}
                      />
                    </div>

                    {/* Label & Subtitle */}
                    <div className="mt-1">
                      <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors text-slate-800 dark:text-slate-200 dark:group-hover:text-white">
                        {stat.label}
                      </h3>
                      <p className="text-[11px] font-medium mt-0.5 text-slate-500 dark:text-slate-400">
                        {stat.subtitle}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CountsSection;
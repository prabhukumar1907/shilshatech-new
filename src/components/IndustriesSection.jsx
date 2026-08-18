import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Tv,
  Truck,
  GraduationCap,
  Factory,
  UtensilsCrossed,
  HeartPulse,
  Gamepad2,
  Sparkles,
  Building2,
  CheckCircle2,
  TrendingUp,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
  accentGlow: "#38bdf8",
};

const industries = [
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    badge: "Omnichannel",
    description:
      "High-converting storefronts, real-time inventory sync, AI recommendation engines, and low-friction payment flows.",
    highlights: ["Custom E-Stores", "Inventory Systems", "Seamless Payments"],
    stat: "3.5x",
    statLabel: "Conversion Growth",
    accentColor: "#60a5fa",
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
  },
  {
    id: "media",
    icon: Tv,
    title: "Media & Entertainment",
    badge: "Streaming",
    description:
      "Low-latency streaming architectures, video portals, and dynamic content delivery backends built for global concurrency.",
    highlights: ["OTT Video Platforms", "Interactive Portals", "Low Latency CDN"],
    stat: "99.99%",
    statLabel: "Platform Uptime",
    accentColor: "#c084fc",
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Transport & Logistics",
    badge: "Telematics",
    description:
      "Fleet management suites featuring AI route optimization algorithms, real-time GPS tracking, and supply chain telemetry.",
    highlights: ["Fleet Telematics", "Route Optimization", "Supply Chain BI"],
    stat: "-25%",
    statLabel: "Transit Delays",
    accentColor: "#2dd4bf",
    gradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & EdTech",
    badge: "E-Learning",
    description:
      "Interactive digital learning hubs, virtual classrooms, curriculum tools, and automated student performance analytics.",
    highlights: ["Virtual Classrooms", "LMS Integration", "Learner Analytics"],
    stat: "1M+",
    statLabel: "Active Learners",
    accentColor: "#34d399",
    gradient: "from-emerald-500/10 via-green-500/5 to-transparent",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing & Industry 4.0",
    badge: "Smart Factory",
    description:
      "Industrial software connecting IoT shop-floor sensors, automated QA workflows, and real-time inventory fulfillment.",
    highlights: ["IoT Telemetry", "Production Tracking", "Automated QA"],
    stat: "+40%",
    statLabel: "Efficiency Gain",
    accentColor: "#fbbf24",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
  },
  {
    id: "food",
    icon: UtensilsCrossed,
    title: "Food Delivery & Hospitality",
    badge: "Hyper-Fast",
    description:
      "Multi-tenant food ordering engines with real-time courier tracking, dynamic kitchen dispatch queues, and POS sync.",
    highlights: ["Live Courier Maps", "Menu Automation", "POS Integration"],
    stat: "< 30s",
    statLabel: "Order Speed",
    accentColor: "#fb7185",
    gradient: "from-rose-500/10 via-pink-500/5 to-transparent",
  },
  {
    id: "health",
    icon: HeartPulse,
    title: "Healthcare & MedTech",
    badge: "HIPAA Vault",
    description:
      "HIPAA-compliant telemedicine platforms streamlining online consultations, encrypted health records, and smart booking.",
    highlights: ["Telehealth Video", "HIPAA Compliant", "EHR Sync"],
    stat: "100%",
    statLabel: "Data Privacy",
    accentColor: "#38bdf8",
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
  },
  {
    id: "gaming",
    icon: Gamepad2,
    title: "Gaming & Interactive Media",
    badge: "Web3 & 3D",
    description:
      "Low-latency multiplayer server architectures, Web3 virtual asset marketplaces, and engaging digital store interfaces.",
    highlights: ["Multiplayer Backends", "In-Game Commerce", "Asset Vaults"],
    stat: "< 15ms",
    statLabel: "Target Latency",
    accentColor: "#a855f7",
    gradient: "from-violet-500/10 via-purple-500/5 to-transparent",
  },
  {
    id: "lifestyle",
    icon: Sparkles,
    title: "Lifestyle & Fashion",
    badge: "Visual Commerce",
    description:
      "Visually captivating web portals featuring 3D product lookbooks, personalized quizzes, and social commerce features.",
    highlights: ["3D/AR Lookbooks", "Social Commerce", "Brand Portals"],
    stat: "+85%",
    statLabel: "User Engagement",
    accentColor: "#f0abfc",
    gradient: "from-fuchsia-500/10 via-pink-500/5 to-transparent",
  },
  {
    id: "finance",
    icon: Building2,
    title: "Banking & FinTech",
    badge: "Bank-Grade",
    description:
      "Resilient digital banking mobile apps and web portals with end-to-end encryption, fraud analytics, and instant ledger settlement.",
    highlights: ["Bank Encryption", "Instant Settlement", "Fraud Analytics"],
    stat: "0.0s",
    statLabel: "Security Breaches",
    accentColor: "#60a5fa",
    gradient: "from-blue-600/10 via-indigo-500/5 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
};

const UltraModernIndustries = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden font-sans select-none bg-slate-50 text-slate-900 dark:bg-[#060b13] dark:text-white"
    >
      <style>{`
        @keyframes pulseGlowA {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.2); opacity: 0.25; }
        }
        @keyframes pulseGlowB {
          0%, 100% { transform: scale(1.2); opacity: 0.2; }
          50% { transform: scale(1); opacity: 0.3; }
        }
        .glow-a {
          animation: pulseGlowA 12s ease-in-out infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }
        .glow-b {
          animation: pulseGlowB 15s ease-in-out infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }
      `}</style>

      <div
        className="glow-a absolute top-1/4 left-10 w-96 h-96 rounded-full blur-[130px] pointer-events-none"
        style={{ backgroundColor: brandTheme.primaryBlue, willChange: "transform, opacity" }}
      />
      <div
        className="glow-b absolute bottom-10 right-10 w-88 h-88 rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: brandTheme.electricCyan, willChange: "transform, opacity" }}
      />

      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#276ea5_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#60a5fa_1.2px,transparent_1.2px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_90%_80%_at_50%_50%,black_30%,transparent_85%)]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-wider uppercase shadow-lg bg-blue-50 border-[#276ea5]/20 text-[#276ea5] dark:bg-[#276ea5]/20 dark:border-[#60a5fa]/30 dark:text-[#60a5fa]"
          >
            <Layers size={14} className="animate-pulse" />
            <span>Cross-Industry Intelligence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
          >
            Industries We{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#276ea5] to-[#1d4ed8] dark:from-white dark:via-sky-300 dark:to-sky-400">
              Engineered For
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed max-w-2xl text-slate-600 dark:text-slate-400"
          >
            Empowering global companies with domain-specific architectures, scalable web applications, and high-performance software.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl bg-white border-slate-200 dark:bg-[#0a1220]/95 dark:border-white/10"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-50 pointer-events-none`}
                />

                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-13 h-13 p-3 rounded-2xl border flex items-center justify-center shadow-lg bg-sky-50 border-blue-200 dark:bg-[#0f1b30]/95 dark:border-white/10"
                      style={{ color: item.accentColor }}
                    >
                      <Icon size={24} />
                    </div>

                    {/* backdrop-blur-md removed */}
                    <div className="px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider bg-slate-100 border-slate-300 text-slate-600 dark:bg-white/10 dark:border-white/10 dark:text-slate-300">
                      {item.badge}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 tracking-tight flex items-center justify-between text-slate-900 dark:text-white">
                    <span>{item.title}</span>
                    <ArrowUpRight
                      size={18}
                      className="opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: item.accentColor }}
                    />
                  </h3>

                  <p className="text-sm leading-relaxed mb-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    {item.highlights.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 size={14} className="shrink-0" style={{ color: item.accentColor }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-dashed flex items-center justify-between border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} style={{ color: item.accentColor }} />
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {item.statLabel}
                    </span>
                  </div>

                  <span className="text-lg font-black tracking-tight" style={{ color: item.accentColor }}>
                    {item.stat}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default UltraModernIndustries;
import React, { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Workflow,
  ChevronDown,
  Sparkles,
  Globe,
  Layers,
  Cpu,
  Code2,
  Terminal,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const theme = {
  primary: "#276ea5",
  secondary: "#1d4ed8",
  glow: "#60a5fa",
};

const servicesList = [
  {
    title: "Custom ReactJS Applications",
    desc: "Engineered from scratch to match your exact business logic with hyper-responsive layouts.",
    icon: Code2,
  },
  {
    title: "UI/UX Modernization",
    desc: "Translating complex design systems into pixel-perfect, accessible React interfaces.",
    icon: Sparkles,
  },
  {
    title: "Modular Component Design",
    desc: "Building atomic, reusable component libraries that accelerate your entire engineering cycle.",
    icon: Layers,
  },
  {
    title: "Enterprise API Integration",
    desc: "Seamless bridging between React frontends and robust microservices or cloud architectures.",
    icon: Workflow,
  },
  {
    title: "Legacy Migration & Upgrades",
    desc: "Upgrading monoliths or older frameworks to modern React stacks with zero downtime.",
    icon: Terminal,
  },
  {
    title: "Speed & Core Web Vitals",
    desc: "Optimizing virtual DOM re-renders and bundle sizes for maximum SEO and lightning performance.",
    icon: Gauge,
  },
];

const faqs = [
  {
    q: "Why choose ReactJS for modern enterprise web applications?",
    a: "React's virtual DOM architecture ensures lightning-fast rendering, unmatched modularity via reusable components, and a massive ecosystem of enterprise-grade libraries.",
  },
  {
    q: "How does Shilsha Technologies handle quality assurance?",
    a: "We enforce strict code reviews, automated unit testing, continuous integration pipelines, and component-driven testing to eliminate regressions.",
  },
  {
    q: "Can you connect React with our existing backend stack?",
    a: "Yes. Our engineers specialize in integrating React frontends with diverse backends including Node.js, Python/Django, PHP, Java, and serverless cloud setups.",
  },
  {
    q: "What is your typical project kickoff timeline?",
    a: "We deploy vetted engineering squads within 48 to 72 hours following initial architecture alignment and scope definition.",
  },
];

const ReactServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-137.5 rounded-full blur-[160px] pointer-events-none opacity-20 dark:opacity-20"
        style={{
          background: `radial-gradient(circle, ${theme.primary} 0%, ${theme.secondary} 60%, transparent 100%)`,
        }}
      />
      <div className="absolute top-[40%] right-[-10%] w-125 h-125 rounded-full blur-[180px] pointer-events-none opacity-10 bg-blue-600" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Hero Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-linear-to-br from-white/90 via-slate-50/50 to-blue-50/30 dark:from-slate-900/90 dark:via-slate-900/50 dark:to-blue-950/30 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 backdrop-blur-xl">
                <FaReact
                  size={15}
                  className="animate-spin text-sky-500 dark:text-sky-400"
                  style={{ animationDuration: "12s" }}
                />
                <span>Shilsha Technologies Enterprise Division</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Next-Gen ReactJS{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${theme.primary} 0%, #3b82f6 50%, ${theme.secondary} 100%)`,
                  }}
                >
                  Development
                </span>
              </h1>

              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
                Empowering global enterprises with high-performance, scalable,
                and beautifully crafted ReactJS architectures built by elite
                developers at Shilsha Technologies.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-8 relative z-10">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white text-sm font-bold shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-600/50"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                }}
              >
                <span>Hire React Experts</span>
                <ArrowRight size={16} />
              </Link>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for immediate onboarding
              </div>
            </div>
          </motion.div>

          {/* Hero Side Metric Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/60 backdrop-blur-2xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 w-fit border border-blue-200 dark:border-blue-500/20">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Lightning Speed
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Optimized state management and minimal re-renders guarantee
                sub-second load times across mobile and desktop viewports.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 gap-4 text-center">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <div className="text-2xl font-black text-sky-600 dark:text-sky-400">
                  99.9%
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                  Uptime SLA
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  2x
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                  Faster Delivery
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 group shadow-xl dark:shadow-none">
            <div className="h-12 w-12 rounded-2xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu size={22} />
            </div>
            <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              Virtual DOM Efficiency
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Smart reconciliation algorithms ensure your interface updates
              smoothly even under heavy data streams.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 group shadow-xl dark:shadow-none">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Workflow size={22} />
            </div>
            <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              Atomic Architecture
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Decoupled, modular code structures that make scaling features
              seamless for multi-team engineering units.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 group shadow-xl dark:shadow-none">
            <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={22} />
            </div>
            <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              Enterprise Security
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Vulnerability scans, secure state boundaries, and robust
              authentication patterns built into every release.
            </p>
          </div>
        </div>

        {/* Brand Showcase Banner */}
        <section className="relative rounded-3xl border border-slate-200/80 dark:border-white/10 bg-linear-to-r from-blue-50/80 via-white/90 to-white/90 dark:from-blue-950/40 dark:via-slate-900/80 dark:to-slate-900/80 backdrop-blur-2xl p-10 sm:p-14 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Power Your Digital Ecosystem with Shilsha Technologies
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              As a premier ReactJS development authority in India, Shilsha
              Technologies bridges the gap between ambitious product roadmaps
              and flawless technical execution. Let's engineer your market
              advantage today.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors"
              >
                <span>Consult with our React architects</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Modern Services Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
              <Sparkles size={13} /> Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Specialized ReactJS Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Comprehensive front-end solutions designed for modern enterprise
              demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.title}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-blue-500/50 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-600">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="max-w-4xl mx-auto w-full space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Everything you need to know about partnering with Shilsha
              Technologies.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-lg transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-sm sm:text-base focus:outline-none cursor-pointer text-slate-900 dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 text-blue-600 dark:text-blue-400 shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        <ReasonsWhySection />
        <AwardsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ReactServicesPage;

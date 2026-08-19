import React, { useState } from "react";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Workflow,
  ChevronDown,
  Sparkles,
  Layers,
  Cpu,
  Code2,
  Terminal,
  Gauge,
  CheckCircle2,
  MoveUpRight,
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
    a: "React's virtual DOM architecture ensures fast rendering, strong modularity through reusable components, and access to a mature ecosystem of enterprise-grade libraries.",
  },
  {
    q: "How does Shilsha Technologies handle quality assurance?",
    a: "We enforce code reviews, automated testing, continuous integration pipelines, component-driven testing, and performance checks to reduce regressions.",
  },
  {
    q: "Can you connect React with our existing backend stack?",
    a: "Yes. Our engineers integrate React applications with Node.js, Python/Django, PHP, Java, serverless architectures, REST APIs, GraphQL, and cloud platforms.",
  },
  {
    q: "What is your typical project kickoff timeline?",
    a: "Following architecture alignment and scope definition, we can assemble and onboard an appropriate engineering team based on the project's requirements.",
  },
];

const ReactServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#050b14] text-slate-900 dark:text-white font-sans overflow-hidden selection:bg-blue-500 selection:text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 left-1/2 -translate-x-1/2 w-225 h-150 rounded-full blur-[180px] opacity-[0.12] dark:opacity-[0.10]"
          style={{
            background: `radial-gradient(circle, ${theme.glow}, transparent 65%)`,
          }}
        />

        <div className="absolute top-[55%] -right-40 w-125 h-125 rounded-full bg-blue-500/5 blur-[140px]" />

        <div
          className="
            absolute inset-0
            opacity-[0.035]
            dark:opacity-[0.025]
            bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            bg-size-[40px_40px]
          "
        />
      </div>

      <main className="relative z-10 pt-28">
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="min-h-170 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 relative z-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-blue-500" />

                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  <FaReact
                    size={15}
                    className="animate-spin"
                    style={{ animationDuration: "12s" }}
                  />
                  React Engineering
                </div>
              </div>

              <h1 className="text-[3.5rem] sm:text-6xl lg:text-[5.5rem] xl:text-[6.2rem] leading-[0.92] tracking-[-0.065em] font-black max-w-5xl">
                Build the
                <span
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(120deg, ${theme.primary}, #3b82f6 45%, ${theme.glow})`,
                  }}
                >
                  next interface.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-400">
                Shilsha Technologies engineers high-performance ReactJS
                applications for ambitious businesses — from complex enterprise
                platforms to polished customer-facing products.
              </p>

              {/* CTA */}

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact-us"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-4
                    rounded-xl
                    text-white
                    text-sm
                    font-bold
                    shadow-xl
                    shadow-blue-600/20
                    hover:-translate-y-1
                    hover:shadow-blue-600/30
                    transition-all
                  "
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  Hire React Experts
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/15">
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>

                <span className="text-xs font-semibold text-slate-500 dark:text-slate-500">
                  Available for new projects
                </span>
              </div>

              {/* Bottom stats */}

              <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5">
                <div>
                  <p className="text-2xl font-black tracking-tight">01</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
                    Architecture
                  </p>
                </div>

                <div className="h-9 w-px bg-slate-200 dark:bg-white/10" />

                <div>
                  <p className="text-2xl font-black tracking-tight">02</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
                    Experience
                  </p>
                </div>

                <div className="h-9 w-px bg-slate-200 dark:bg-white/10" />

                <div>
                  <p className="text-2xl font-black tracking-tight">03</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
                    Performance
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="lg:col-span-5 relative min-h-125 flex items-center justify-center"
            >
              <div
                className="absolute w-85 h-85 sm:w-110 sm:h-110 rounded-full blur-[90px] opacity-20"
                style={{
                  background: theme.glow,
                }}
              />

              {/* Orbit */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-75
                  h-75
                  sm:w-97.5
                  sm:h-97.5
                  rounded-full
                  border
                  border-blue-500/10
                "
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-55
                  h-55
                  sm:w-75
                  sm:h-75
                  rounded-full
                  border
                  border-blue-400/10
                "
              >
                <div className="absolute bottom-1 right-5 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              </motion.div>

              {/* React Logo */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    blur-[45px]
                    opacity-40
                  "
                  style={{
                    background: theme.primary,
                  }}
                />

                <FaReact
                  size={250}
                  className="relative text-blue-500/90 dark:text-blue-400/90 drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                />
              </motion.div>

              {/* Floating labels */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 right-0 sm:right-5 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />

                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                  Production Ready
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 left-0 sm:left-5 flex items-center gap-2"
              >
                <Zap size={15} className="text-blue-500" />

                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                  High Performance
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500">
                  Why React
                </p>

                <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  Interfaces engineered for scale.
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed tracking-tight text-slate-600 dark:text-slate-300">
                  Your frontend should not just look good. It should remain
                  fast, maintainable and adaptable as your business grows.
                </p>

                <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
                  {[
                    "Reusable architecture",
                    "Performance-first development",
                    "Accessible interfaces",
                    "Enterprise-ready security",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 size={16} className="text-blue-500" />

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-28">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: Cpu,
                title: "Performance",
                text: "Smart rendering, efficient state management and optimized bundles keep complex interfaces responsive.",
              },
              {
                number: "02",
                icon: Workflow,
                title: "Architecture",
                text: "Modular component systems make large applications easier to maintain, extend and scale across teams.",
              },
              {
                number: "03",
                icon: ShieldCheck,
                title: "Security",
                text: "Secure authentication patterns, protected state boundaries and development best practices are built into the workflow.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  className={`
                    py-10
                    md:py-5
                    md:px-8
                    ${
                      index !== 2
                        ? "border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={25}
                      strokeWidth={1.6}
                      className="text-blue-500"
                    />

                    <span className="text-5xl font-black tracking-tighter text-slate-200 dark:text-white/6">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-black">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400 max-w-sm">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24">
            <div className="relative">
              <div
                className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] opacity-20"
                style={{
                  background: theme.glow,
                }}
              />

              <p className="relative text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 mb-7">
                Shilsha Technologies
              </p>

              <h2 className="relative text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] max-w-5xl">
                From ambitious product ideas to{" "}
                <span className="text-blue-500">
                  production-grade interfaces.
                </span>
              </h2>

              <div className="relative mt-10 flex flex-wrap items-center gap-6">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 text-sm font-bold text-blue-600 dark:text-blue-400"
                >
                  Talk to our React architects
                  <MoveUpRight
                    size={17}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>

                <span className="h-px w-16 bg-slate-300 dark:bg-white/10" />

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Design • Engineering • Scale
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 text-blue-500 text-[11px] uppercase tracking-[0.2em] font-bold">
                  <Sparkles size={14} />
                  Capabilities
                </div>

                <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight leading-none">
                  What we build.
                </h2>

                <p className="mt-6 text-sm leading-7 text-slate-500 dark:text-slate-400 max-w-sm">
                  A complete React engineering practice covering product
                  development, modernization, architecture and performance.
                </p>
              </div>

              {/* Service list */}

              <div className="lg:col-span-8">
                <div className="divide-y divide-slate-200 dark:divide-white/10">
                  {servicesList.map((service, index) => {
                    const Icon = service.icon;

                    return (
                      <motion.div
                        key={service.title}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.06,
                        }}
                        className="
                          group
                          py-7
                          flex
                          items-center
                          gap-5
                          cursor-default
                        "
                      >
                        <span className="w-8 text-[11px] font-bold text-slate-400">
                          0{index + 1}
                        </span>

                        <div className="w-11 h-11 shrink-0 flex items-center justify-center text-blue-500">
                          <Icon size={23} strokeWidth={1.6} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold group-hover:text-blue-500 transition-colors">
                            {service.title}
                          </h3>

                          <p className="mt-1.5 text-xs sm:text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-xl">
                            {service.desc}
                          </p>
                        </div>

                        <ArrowRight
                          size={18}
                          className="
                            hidden sm:block
                            text-slate-300
                            dark:text-slate-700
                            group-hover:text-blue-500
                            group-hover:translate-x-1
                            transition-all
                          "
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-28">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500">
              Our approach
            </p>

            <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight">
              From architecture to launch.
            </h2>

            <p className="mt-5 text-slate-500 dark:text-slate-400 leading-7">
              A disciplined engineering process designed to turn product
              requirements into reliable digital experiences.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-4">
            {[
              [
                "01",
                "Discover",
                "Understand your product, users and technical requirements.",
              ],
              [
                "02",
                "Architect",
                "Define scalable React architecture and component systems.",
              ],
              [
                "03",
                "Engineer",
                "Build, test and continuously optimize the experience.",
              ],
              [
                "04",
                "Launch",
                "Deploy confidently with monitoring and performance validation.",
              ],
            ].map(([number, title, text], index) => (
              <motion.div
                key={number}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className={`
                  relative
                  py-8
                  px-6
                  ${
                    index !== 3
                      ? "border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10"
                      : ""
                  }
                `}
              >
                <span className="text-xs font-bold text-blue-500">
                  {number}
                </span>

                <h3 className="mt-6 text-xl font-black">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500">
                FAQ
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                Questions, answered.
              </h2>
            </div>

            <div className="lg:col-span-3 divide-y divide-slate-200 dark:divide-white/10">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={faq.q}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="
                        w-full
                        py-6
                        flex
                        items-center
                        justify-between
                        gap-6
                        text-left
                        cursor-pointer
                      "
                    >
                      <span className="text-sm sm:text-base font-bold">
                        {faq.q}
                      </span>

                      <ChevronDown
                        size={18}
                        className={`
                          shrink-0
                          text-blue-500
                          transition-transform
                          duration-300
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-10 text-sm leading-7 text-slate-500 dark:text-slate-400">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-28">
          <div className="relative overflow-hidden py-20 sm:py-28 border-y border-slate-200 dark:border-white/10">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 rounded-full blur-[120px] opacity-20"
              style={{
                background: theme.glow,
              }}
            />

            <div className="relative text-center max-w-4xl mx-auto">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500">
                Start your next build
              </p>

              <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-[-0.04em] leading-tight">
                Ready to build something
                <span className="text-blue-500"> exceptional?</span>
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
                Work with Shilsha Technologies to transform your product idea
                into a fast, scalable and beautifully engineered React
                experience.
              </p>

              <div className="mt-9">
                <Link
                  to="/contact-us"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-4
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    text-sm
                    font-bold
                    shadow-xl
                    shadow-blue-600/20
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  Start a conversation
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ReasonsWhySection />
        <AwardsSection />
      </main>

      <Footer />
    </div>
  );
};

export default ReactServicesPage;

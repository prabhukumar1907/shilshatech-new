import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Globe,
  Layers3,
  ShieldCheck,
  Sparkles,
  Zap,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaAngular } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#dd0031",
  secondary: "#9f1239",
  glow: "#ff5252",
};

const faqs = [
  {
    q: "Why choose Angular for enterprise applications?",
    a: "Angular provides a structured framework with TypeScript, dependency injection, routing, forms, testing capabilities, and powerful tooling. This makes it particularly suitable for large applications that require consistency, scalability, and long-term maintainability.",
  },
  {
    q: "Can you modernize an existing Angular application?",
    a: "Yes. We can audit an existing Angular codebase, upgrade dependencies, modernize architecture, improve performance, migrate legacy patterns, and introduce modern Angular capabilities while minimizing disruption.",
  },
  {
    q: "Can Angular integrate with our existing backend?",
    a: "Absolutely. Angular applications can integrate with REST APIs, GraphQL, microservices, authentication systems, cloud services, and enterprise backend technologies.",
  },
  {
    q: "Do you build responsive Angular applications?",
    a: "Yes. Our Angular interfaces are designed around responsive layouts, accessibility, performance, and consistent experiences across desktop, tablet, and mobile devices.",
  },
];

const capabilities = [
  {
    number: "01",
    icon: Zap,
    title: "High-performance Angular",
    description:
      "Build responsive applications using modern Angular architecture, Signals, optimized rendering, lazy loading, and efficient state management.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Scalable architecture",
    description:
      "Create structured application foundations with reusable components, clean TypeScript patterns, dependency injection, and maintainable modules.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Enterprise security",
    description:
      "Implement authentication, authorization, secure API communication, route protection, and application-level security practices.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Design systems",
    description:
      "Turn your product language into reusable Angular components and scalable UI systems that keep large applications visually consistent.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your product, users, technical environment, and business objectives.",
  },
  {
    number: "02",
    title: "Architect",
    text: "Define the Angular architecture, application structure, integrations, and scalability strategy.",
  },
  {
    number: "03",
    title: "Engineer",
    text: "Build reusable interfaces and production-ready functionality with clean TypeScript.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Test, measure, refine, and prepare the application for reliable production deployment.",
  },
];

export const AngularServicePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#06090f] text-slate-900 dark:text-white font-sans overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-[15%] w-125 h-125 rounded-full blur-[150px] opacity-[0.08]"
          style={{ background: theme.primary }}
        />

        <div className="absolute top-[45%] -right-40 w-125 h-125 rounded-full bg-red-500 blur-[180px] opacity-[0.04]" />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <main className="relative z-10 pt-28">
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="min-h-170 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative"
            >
              {/* Eyebrow */}

              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-red-50 dark:bg-red-500/10 text-[#dd0031]">
                  <FaAngular size={19} />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Angular Development Services
                </span>

                <span className="hidden sm:block h-px w-16 bg-red-200 dark:bg-red-500/30" />
              </div>

              {/* Heading */}

              <h1 className="text-[3.4rem] sm:text-6xl lg:text-[5.6rem] xl:text-[6.2rem] font-black tracking-[-0.055em] leading-[0.94] max-w-5xl">
                Enterprise
                <span className="block text-[#dd0031]">Angular.</span>
                <span className="block text-slate-400 dark:text-slate-600">
                  Built to scale.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-400">
                Build powerful digital products with modern Angular
                architecture, TypeScript, Signals, reusable systems, and
                performance-first engineering.
              </p>

              {/* CTA */}

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-white text-sm font-bold shadow-lg shadow-red-600/20 hover:-translate-y-0.5 transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  Start Your Angular Project
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/15">
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for new projects
                </div>
              </div>

              {/* Hero Stats */}

              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5">
                <div>
                  <p className="text-2xl font-black">01</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                    Architecture
                  </p>
                </div>

                <div className="w-px bg-slate-200 dark:bg-white/10" />

                <div>
                  <p className="text-2xl font-black">02</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                    Engineering
                  </p>
                </div>

                <div className="w-px bg-slate-200 dark:bg-white/10" />

                <div>
                  <p className="text-2xl font-black">03</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                    Optimization
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5 relative min-h-125 flex items-center justify-center"
            >
              {/* Decorative orbit */}

              <div className="absolute w-82.5 h-82.5 rounded-full border border-red-500/10" />
              <div className="absolute w-107.5 h-107.5 rounded-full border border-red-500/6" />
              <div className="absolute w-132.5 h-132.5 rounded-full border border-red-500/[0.035]" />

              {/* Angular Core */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <div
                  className="absolute inset-0 rounded-full blur-[70px] opacity-30"
                  style={{ background: theme.primary }}
                />

                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[3rem] bg-linear-to-br from-[#dd0031] via-red-600 to-[#7f1d1d] flex items-center justify-center shadow-[0_30px_100px_rgba(221,0,49,0.25)]">
                  <FaAngular size={125} className="text-white" />

                  <div className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-[#101722] border border-slate-200 dark:border-white/10 shadow-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        Production Ready
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 right-0 sm:right-5 z-30 flex items-center gap-2"
              >
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#101722] border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-center text-red-500">
                  <Cpu size={17} />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Performance
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-24 left-0 sm:left-5 z-30 flex items-center gap-2"
              >
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#101722] border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-center text-red-500">
                  <Code2 size={17} />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  TypeScript
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
              {[
                ["Angular", "Modern framework"],
                ["TypeScript", "Strong foundations"],
                ["Signals", "Fine-grained reactivity"],
                ["Cloud Ready", "Built to deploy"],
              ].map(([title, text], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative px-4 first:pl-0 md:border-r md:last:border-r-0 border-slate-200 dark:border-white/10"
                >
                  <p className="text-sm font-black">{title}</p>
                  <p className="mt-1 text-[10px] text-slate-400 uppercase tracking-wider">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dd0031]">
                <Sparkles size={14} />
                What we build
              </div>

              <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
                Angular systems
                <span className="block text-slate-400 dark:text-slate-600">
                  without the clutter.
                </span>
              </h2>

              <p className="mt-6 text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
                We focus on architecture, maintainability, performance, and
                product experience rather than simply writing frontend code.
              </p>
            </div>

            {/* Feature Rows */}

            <div className="lg:col-span-8">
              <div className="divide-y divide-slate-200 dark:divide-white/10 border-y border-slate-200 dark:border-white/10">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="group py-8 grid grid-cols-[50px_1fr_auto] sm:grid-cols-[70px_1fr_auto] gap-5 items-start"
                    >
                      <span className="text-xs font-mono text-slate-400 pt-1">
                        {item.number}
                      </span>

                      <div>
                        <div className="flex items-center gap-3">
                          <Icon size={19} className="text-[#dd0031]" />

                          <h3 className="text-lg sm:text-xl font-bold group-hover:text-[#dd0031] transition-colors">
                            {item.title}
                          </h3>
                        </div>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-slate-300 dark:text-slate-700 group-hover:text-[#dd0031] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-slate-200 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-red-50/70 via-transparent to-transparent dark:from-red-950/20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-[#dd0031]">
                  <Workflow size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Engineering approach
                  </span>
                </div>

                <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                  From architecture
                  <span className="block text-slate-400 dark:text-slate-600">
                    to production.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
                  Every Angular project starts with a strong technical
                  foundation. We design systems that remain understandable and
                  adaptable as your product, users, and engineering teams grow.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Standalone components",
                    "Signals & reactive state",
                    "Lazy-loaded applications",
                    "API & microservice integration",
                    "Reusable design systems",
                    "Performance optimization",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500 shrink-0"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-6 bg-red-500/10 blur-3xl rounded-full" />

                  <div className="relative font-mono text-xs sm:text-sm bg-[#0a0d12] text-slate-300 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />

                      <span className="ml-3 text-[10px] text-slate-500">
                        app.component.ts
                      </span>
                    </div>

                    <div className="p-6 leading-7 overflow-x-auto">
                      <p>
                        <span className="text-pink-400">import</span> {"{"}{" "}
                        signal {"}"} <span className="text-pink-400">from</span>{" "}
                        <span className="text-green-400">
                          "'@angular/core'"
                        </span>
                        ;
                      </p>

                      <p className="mt-4">
                        <span className="text-purple-400">@Component</span>
                        {"({"}
                      </p>

                      <p className="pl-4">
                        <span className="text-blue-400">standalone</span>:{" "}
                        <span className="text-orange-300">true</span>,
                      </p>

                      <p className="pl-4">
                        <span className="text-blue-400">selector</span>:{" "}
                        <span className="text-green-400">
                          "'enterprise-app'"
                        </span>
                      </p>

                      <p>{"})"}</p>

                      <p>
                        <span className="text-purple-400">export class</span>{" "}
                        <span className="text-yellow-300">App</span>
                      </p>

                      <p className="pl-4">
                        performance ={" "}
                        <span className="text-blue-400">signal</span>(
                        <span className="text-orange-300">100</span>);
                      </p>

                      <p className="mt-3 text-emerald-400">
                        // Built for scale →
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dd0031]">
              Our process
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
              A clearer path to production.
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
              A focused engineering process designed to keep your Angular
              project predictable, scalable, and aligned with business goals.
            </p>
          </div>

          <div className="relative mt-20">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-red-300 via-red-500 to-red-300 dark:from-red-900 dark:via-red-500 dark:to-red-900" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#fafafa] dark:bg-[#06090f] border-2 border-[#dd0031] flex items-center justify-center text-xs font-black text-[#dd0031]">
                    {step.number}
                  </div>

                  <h3 className="mt-7 text-lg font-bold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-28">
          <div className="relative overflow-hidden border-y border-slate-200 dark:border-white/10 py-20">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[120px] opacity-10"
              style={{ background: theme.primary }}
            />

            <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-[#dd0031] text-xs font-bold uppercase tracking-[0.2em]">
                  <Globe size={14} />
                  Ready when you are
                </div>

                <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                  Let's build your
                  <span className="block text-[#dd0031]">
                    next Angular product.
                  </span>
                </h2>
              </div>

              <Link
                to="/contact-us"
                className="group shrink-0 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#dd0031] text-white font-bold text-sm hover:bg-[#b90029] transition-colors"
              >
                Talk to our team
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* FAQ Heading */}

            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dd0031]">
                FAQ
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
                Questions,
                <span className="block text-slate-400 dark:text-slate-600">
                  answered.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Still evaluating Angular for your next project? Here are some of
                the questions we hear most often.
              </p>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 mt-7 text-sm font-bold text-[#dd0031] hover:gap-3 transition-all"
              >
                Ask our experts
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* FAQ Accordion */}

            <div className="lg:col-span-8 border-t border-slate-200 dark:border-white/10">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.q}
                    className="border-b border-slate-200 dark:border-white/10"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                    >
                      <div className="flex items-start gap-5">
                        <span className="text-[10px] font-mono text-slate-400 pt-1">
                          0{index + 1}
                        </span>

                        <span className="text-base sm:text-lg font-bold group-hover:text-[#dd0031] transition-colors">
                          {faq.q}
                        </span>
                      </div>

                      <span
                        className={`shrink-0 w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all ${
                          isOpen
                            ? "bg-[#dd0031] border-[#dd0031] text-white"
                            : "text-slate-500"
                        }`}
                      >
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
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
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-10 sm:pl-18 pr-8">
                            <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
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

export default AngularServicePage;

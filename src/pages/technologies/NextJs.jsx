import React from "react";
import { ArrowRight, Cpu, Globe, Layers3, Sparkles, Zap } from "lucide-react";
import { SiNextdotjs } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ReasonsWhySection from "../../components/ReasonsWhySection";
import AwardsSection from "../../components/AwardsSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#286b94",
  secondary: "#1e3a8a",
  glow: "#6ea1ff",
};

const features = [
  {
    number: "01",
    icon: Globe,
    title: "Superior SEO Performance",
    description:
      "Server-side rendering, static generation, and incremental regeneration help create fast, search-friendly digital experiences.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Full-Stack Architecture",
    description:
      "Build complete applications with modern server components, API routes, server actions, authentication, and scalable backend integrations.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Automatic Optimization",
    description:
      "Next.js image, font, script, caching, and code optimization capabilities help deliver consistently fast user experiences.",
  },
];

const architecture = [
  {
    number: "01",
    title: "Presentation Layer",
    description: "React Server Components and modern UI architecture",
  },
  {
    number: "02",
    title: "Application Layer",
    description: "Business logic, server actions, APIs and integrations",
  },
  {
    number: "03",
    title: "Data Layer",
    description: "Databases, external APIs and enterprise services",
  },
  {
    number: "04",
    title: "Infrastructure Layer",
    description: "Cloud deployment, CDN, caching and edge infrastructure",
  },
];

const NextJsServicePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#050b14] dark:text-white">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full opacity-20 blur-[140px]"
        style={{
          background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
        }}
      />

      <div
        className="pointer-events-none absolute -right-50 top-[20%] h-125 w-125 rounded-full opacity-10 blur-[140px]"
        style={{
          background: theme.primary,
        }}
      />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <main className="relative z-10 pt-12">
        <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-162.5 items-center py-12 lg:py-20">
            <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-12">
              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7"
              >
                {/* Label */}
                <div className="mb-8 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    }}
                  >
                    <SiNextdotjs size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      Next.js Development
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Enterprise Web Engineering
                    </p>
                  </div>
                </div>

                {/* Heading */}
                <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[82px]">
                  Build faster.
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(100deg, ${theme.primary}, ${theme.glow}, ${theme.secondary})`,
                    }}
                  >
                    Scale smarter.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                  We build high-performance Next.js applications designed for
                  speed, scalability, SEO, and exceptional digital experiences.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-3 rounded-xl px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                      boxShadow: `0 15px 35px ${theme.primary}35`,
                    }}
                  >
                    Hire Next.js Developers
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <span className="text-sm text-slate-500 dark:text-slate-500">
                    From concept to production
                  </span>
                </div>

                {/* Mini highlights */}
                <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Zap size={15} className="text-blue-500" />
                    High Performance
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Sparkles size={15} className="text-blue-500" />
                    Modern Architecture
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Globe size={15} className="text-blue-500" />
                    SEO Ready
                  </div>
                </div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="flex justify-center lg:col-span-5 lg:justify-end"
              >
                <div className="relative h-80 w-[320px] sm:h-100 sm:w-100">
                  {/* Glow */}
                  <div
                    className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[70px]"
                    style={{
                      background: theme.glow,
                    }}
                  />

                  {/* Rings */}
                  <div className="absolute inset-0 rounded-full border border-slate-300/60 dark:border-white/10" />

                  <div className="absolute inset-8 rounded-full border border-slate-300/50 dark:border-white/10" />

                  <div className="absolute inset-16 rounded-full border border-slate-300/40 dark:border-white/5" />

                  {/* Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.04, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <SiNextdotjs
                        size={135}
                        className="text-slate-900 drop-shadow-2xl dark:text-white"
                      />
                    </motion.div>
                  </div>

                  {/* Floating labels */}
                  <div className="absolute right-0 top-8 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold shadow-lg dark:border-white/10 dark:bg-slate-900">
                    SSR
                  </div>

                  <div className="absolute bottom-20 left-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold shadow-lg dark:border-white/10 dark:bg-slate-900">
                    React
                  </div>

                  <div className="absolute bottom-4 right-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-600/30">
                    Production Ready
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-blue-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Why Next.js
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The modern foundation for
              <span className="text-slate-400 dark:text-slate-600">
                {" "}
                ambitious digital products.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              Next.js combines React's component architecture with powerful
              rendering, routing, caching, and backend capabilities. Our team
              uses these technologies to create applications that remain fast,
              maintainable, and scalable as your business grows.
            </p>
          </motion.div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between py-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Core capabilities
              </span>

              <span className="text-xs font-mono text-slate-400">
                NEXT / 03
              </span>
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group border-t border-slate-200 py-10 dark:border-white/10 sm:py-14"
                >
                  <div className="grid grid-cols-12 items-start gap-5 sm:gap-8">
                    <div className="col-span-2 sm:col-span-1">
                      <span className="font-mono text-sm text-blue-500">
                        {feature.number}
                      </span>
                    </div>

                    <div className="col-span-10 sm:col-span-4">
                      <div className="flex items-center gap-4">
                        <Icon
                          size={22}
                          className="text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400"
                        />

                        <h3 className="text-lg font-bold sm:text-xl">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-7">
                      <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Layers3 size={17} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Architecture
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Engineered for
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  growth.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                We combine modern rendering strategies, reusable component
                systems, optimized data fetching, and scalable deployment
                patterns to create Next.js applications that can evolve with
                your business.
              </p>

              <Link
                to="/contact-us"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400"
              >
                Talk to our Next.js architects
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Architecture list */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {architecture.map((item) => (
                <div
                  key={item.number}
                  className="group flex items-center gap-5 border-b border-slate-200 py-6 dark:border-white/10"
                >
                  <span className="w-8 shrink-0 font-mono text-xs text-blue-500">
                    {item.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden border-y border-slate-200 py-12 dark:border-white/10 sm:py-20"
          >
            <div
              className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
              style={{
                background: theme.glow,
              }}
            />

            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                  Start your project
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-6xl">
                  Let's build something
                  <span className="text-blue-600 dark:text-blue-400">
                    {" "}
                    exceptional.
                  </span>
                </h2>
              </div>

              <Link
                to="/contact-us"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-slate-900 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 dark:bg-white dark:text-slate-900"
              >
                Start a conversation
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </section>
        <ReasonsWhySection />
        <AwardsSection />
      </main>

      <Footer />
    </div>
  );
};

export default NextJsServicePage;

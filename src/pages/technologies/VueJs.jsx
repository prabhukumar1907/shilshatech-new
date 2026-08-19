import React from "react";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Workflow,
  Gauge,
  Code2,
  Layers3,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiVuedotjs } from "react-icons/si";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#10b981",
  secondary: "#286b94",
  glow: "#6ee7b7",
};

const capabilities = [
  {
    number: "01",
    icon: Zap,
    title: "High-Performance Vue Applications",
    description:
      "Build exceptionally fast interfaces using Vue's reactive architecture, optimized rendering, lazy loading, and modern application patterns.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Composable Architecture",
    description:
      "Create maintainable applications with reusable components, composables, clean state boundaries, and scalable frontend architecture.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Enterprise-Ready Security",
    description:
      "Implement secure authentication, authorization, API communication, protected routes, and robust frontend security practices.",
  },
  {
    number: "04",
    icon: Gauge,
    title: "Performance Engineering",
    description:
      "Improve Core Web Vitals, bundle efficiency, rendering performance, caching strategies, and real-world user experience.",
  },
  {
    number: "05",
    icon: Code2,
    title: "Modern Vue Ecosystem",
    description:
      "Work with Vue 3, Composition API, Pinia, Vite, TypeScript, Nuxt, and modern frontend tooling.",
  },
  {
    number: "06",
    icon: Layers3,
    title: "Scalable Product Systems",
    description:
      "Design frontend systems that can grow from an MVP into a sophisticated enterprise-grade digital product.",
  },
];

const benefits = [
  "Vue 3 and Composition API",
  "TypeScript-based development",
  "Pinia state management",
  "Vite-powered builds",
  "REST & GraphQL integrations",
  "Responsive UI engineering",
];

export const VueJsServicePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#050b14] dark:text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
          style={{
            background: `radial-gradient(circle, ${theme.primary}, transparent 65%)`,
          }}
        />

        <div
          className="absolute right-[-15%] top-[35%] h-125 w-125 rounded-full opacity-10 blur-[140px]"
          style={{ background: theme.secondary }}
        />

        <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
        </div>
      </div>

      <main className="relative z-10 pt-4">
        <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid min-h-170 grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="mb-7 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    color: theme.primary,
                  }}
                >
                  <SiVuedotjs size={22} />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                    Vue.js Engineering
                  </p>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                    Shilsha Technologies
                  </p>
                </div>
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Build interfaces
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(100deg, ${theme.primary}, #34d399, ${theme.secondary})`,
                  }}
                >
                  that move faster.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                We engineer modern Vue.js applications for ambitious products
                and enterprises — combining clean architecture, exceptional
                performance, and intuitive user experiences.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    boxShadow: "0 15px 40px rgba(16,185,129,0.25)",
                  }}
                >
                  Start a Vue.js Project
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
                  Vue 3 · TypeScript · Vite · Pinia
                </span>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex min-h-105 items-center justify-center lg:col-span-5"
            >
              {/* Orbit */}
              <div className="absolute h-72 w-72 rounded-full border border-emerald-500/20 sm:h-96 sm:w-96" />

              <div className="absolute h-55 w-55 rounded-full border border-emerald-500/10 sm:h-72 sm:w-72" />

              <div className="absolute h-105 w-105 rounded-full border border-dashed border-emerald-500/10" />

              {/* Glow */}
              <div
                className="absolute h-60 w-60 rounded-full blur-[80px]"
                style={{
                  background: theme.primary,
                  opacity: 0.18,
                }}
              />

              {/* Vue Logo */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48"
              >
                <div
                  className="absolute inset-0 rounded-full opacity-20 blur-2xl"
                  style={{ background: theme.primary }}
                />

                <SiVuedotjs
                  size={145}
                  className="relative text-emerald-500 drop-shadow-[0_20px_40px_rgba(16,185,129,0.3)]"
                />
              </motion.div>

              {/* Floating labels */}
              <div className="absolute left-0 top-12 hidden rounded-full border border-emerald-500/20 bg-white/70 px-4 py-2 text-xs font-bold backdrop-blur-md dark:bg-slate-900/60 sm:block">
                Vue 3
              </div>

              <div className="absolute bottom-16 right-0 hidden rounded-full border border-blue-500/20 bg-white/70 px-4 py-2 text-xs font-bold backdrop-blur-md dark:bg-slate-900/60 sm:block">
                TypeScript
              </div>

              <div className="absolute right-4 top-0 hidden rounded-full border border-purple-500/20 bg-white/70 px-4 py-2 text-xs font-bold backdrop-blur-md dark:bg-slate-900/60 sm:block">
                Vite
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 dark:border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                Why Vue.js
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Simplicity for developers.
                <br />
                <span className="text-slate-400 dark:text-slate-600">
                  Power for products.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
                Vue gives teams the flexibility to build everything from focused
                interactive experiences to complex enterprise applications. Our
                engineers use its ecosystem to create interfaces that remain
                fast, maintainable, and easy to evolve as your business grows.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              Our capabilities
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Everything needed to ship
              <span className="text-emerald-500"> better Vue products.</span>
            </h2>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-white/10 border-y border-slate-200 dark:border-white/10">
            {[
              {
                ...capabilities[0],
                accent: "emerald",
              },
              {
                ...capabilities[1],
                accent: "blue",
              },
              {
                ...capabilities[2],
                accent: "violet",
              },
              {
                ...capabilities[3],
                accent: "amber",
              },
              {
                ...capabilities[4],
                accent: "cyan",
              },
              {
                ...capabilities[5],
                accent: "rose",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group grid grid-cols-12 items-center gap-5 py-8 sm:py-10"
                >
                  <div className="col-span-2 sm:col-span-1">
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-600">
                      {item.number}
                    </span>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <Icon
                      size={22}
                      className="text-emerald-500 transition-transform duration-300 group-hover:scale-125"
                    />
                  </div>

                  <div className="col-span-8 sm:col-span-4">
                    <h3 className="text-lg font-bold transition-colors group-hover:text-emerald-500 sm:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <p className="text-sm leading-7 text-slate-500 dark:text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-slate-200 bg-white dark:border-white/10 dark:bg-[#07101d]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                Technology stack
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Modern tools.
                <br />
                <span className="text-slate-400 dark:text-slate-600">
                  Proven architecture.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
                We combine Vue's progressive architecture with a carefully
                selected ecosystem to build applications that are easy to
                develop today and easy to maintain tomorrow.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex items-center gap-4 border-b border-slate-200 py-5 dark:border-white/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <Check size={15} />
                  </span>

                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden py-12 sm:py-20"
          >
            <div
              className="absolute left-0 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
              style={{ background: theme.primary }}
            />

            <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
                  Let's build
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] sm:text-6xl">
                  Have a product
                  <br />
                  <span className="text-emerald-500">worth building?</span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
                  Turn your idea into a fast, scalable, and beautifully
                  engineered Vue.js experience with Shilsha Technologies.
                </p>
              </div>

              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 border-b-2 border-emerald-500 pb-2 text-base font-bold text-slate-900 dark:text-white"
                >
                  Talk to Vue.js experts
                  <ArrowRight
                    size={18}
                    className="text-emerald-500 transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </div>
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

export default VueJsServicePage;

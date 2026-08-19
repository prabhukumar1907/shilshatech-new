import React from "react";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Server,
  Cloud,
  Code2,
  Database,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#16a34a",
  secondary: "#15803d",
  glow: "#4ade80",
};

const features = [
  {
    number: "01",
    icon: Zap,
    title: "Blazing Fast Performance",
    description:
      "Node.js uses the V8 engine and non-blocking I/O to efficiently handle concurrent requests, APIs, and high-traffic workloads.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Real-Time Applications",
    description:
      "Build responsive chat platforms, dashboards, collaboration tools, notifications, and other real-time experiences.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Scalable Architecture",
    description:
      "Create modular backend systems that can scale horizontally with microservices, caching, queues, and cloud infrastructure.",
  },
];

const services = [
  {
    title: "Custom Node.js Development",
    description:
      "High-performance backend applications designed around your business workflows, APIs, integrations, and scalability requirements.",
    icon: Code2,
  },
  {
    title: "REST API & GraphQL Development",
    description:
      "Secure and scalable APIs designed for web applications, mobile apps, third-party integrations, and enterprise platforms.",
    icon: Database,
  },
  {
    title: "Real-Time Application Development",
    description:
      "Develop real-time experiences using WebSockets and event-driven architecture for collaboration, messaging, and live data.",
    icon: Zap,
  },
  {
    title: "Microservices Architecture",
    description:
      "Design independent and maintainable Node.js services that allow teams to scale individual business capabilities efficiently.",
    icon: Workflow,
  },
  {
    title: "Node.js Migration & Upgrades",
    description:
      "Modernize older Node.js applications and runtimes while improving performance, security, maintainability, and compatibility.",
    icon: Server,
  },
  {
    title: "Cloud-Native Node.js",
    description:
      "Deploy resilient Node.js applications across AWS, Azure, and Google Cloud using containers and modern cloud architecture.",
    icon: Cloud,
  },
];

const benefits = [
  "Event-driven and non-blocking architecture",
  "High concurrency and efficient request handling",
  "Large npm ecosystem and reusable packages",
  "REST, GraphQL and real-time API capabilities",
  "Microservices and cloud-ready architecture",
];

const NodeJsServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050914] text-slate-900 dark:text-white font-sans overflow-hidden selection:bg-green-500 selection:text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-162.5 h-100 rounded-full blur-[140px] opacity-[0.07]"
          style={{ background: theme.primary }}
        />

        <div
          className="absolute top-[55%] -right-60 w-112.5 h-112.5 rounded-full blur-[150px] opacity-[0.04]"
          style={{ background: theme.glow }}
        />

        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <main className="relative z-10 pt-24">
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="min-h-155 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="h-px w-10"
                    style={{ background: theme.primary }}
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-green-600 dark:text-green-400">
                    Node.js Development Services
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-black tracking-[-0.055em] leading-[0.94] max-w-5xl">
                  Fast backends.
                  <br />
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(110deg, ${theme.primary}, ${theme.glow})`,
                    }}
                  >
                    Built with Node.js.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-400">
                  Build scalable APIs, real-time applications and modern backend
                  platforms with an experienced Node.js engineering team focused
                  on performance, reliability and growth.
                </p>

                <div className="flex flex-wrap items-center gap-5 mt-8">
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-bold transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                      boxShadow: "0 12px 30px rgba(22,163,74,0.18)",
                    }}
                  >
                    Hire Node.js Developers
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    Explore services
                    <ChevronRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>

                <div className="flex items-center gap-3 mt-8 text-xs text-slate-500">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  Node.js engineering teams available for new projects
                </div>
              </motion.div>

              {/* Node Visual */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-4 flex justify-center lg:justify-end"
              >
                <div className="relative w-60 h-60 sm:w-75 sm:h-75">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border border-green-500/20"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 36,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-7 rounded-full border border-dashed border-green-500/20"
                  />

                  <div
                    className="absolute inset-12 rounded-full blur-[50px] opacity-20"
                    style={{ background: theme.primary }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaNodeJs
                      size={135}
                      className="text-green-600 dark:text-green-500 drop-shadow-[0_0_35px_rgba(22,163,74,0.25)]"
                    />
                  </div>

                  <span className="absolute top-3 right-0 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                    Runtime
                  </span>

                  <span className="absolute bottom-6 left-0 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                    Backend
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="py-7 md:py-8 px-0 md:px-7 first:pl-0 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-slate-200 dark:border-white/[0.07]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-green-500">
                        {feature.number}
                      </span>

                      <Icon size={19} className="text-green-500" />

                      <h3 className="text-base font-bold">{feature.title}</h3>
                    </div>

                    <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Why Node.js
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-[1.02]">
                Backend technology
                <span className="block text-slate-400 dark:text-slate-600">
                  built for speed.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="border-l-2 border-green-500/40 pl-6 sm:pl-8 space-y-5">
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Looking for a backend technology capable of handling
                  high-concurrency applications? Our Node.js development team
                  creates fast, scalable and maintainable server-side platforms
                  tailored to your business.
                </p>

                <p className="text-base leading-7 text-slate-500 dark:text-slate-400">
                  From REST APIs and GraphQL services to real-time systems and
                  cloud-native microservices, we build backend infrastructure
                  that can evolve with your product.
                </p>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 text-sm font-bold text-green-600 dark:text-green-400 hover:gap-4 transition-all"
                >
                  Discuss your Node.js project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
            <div className="grid lg:grid-cols-12 gap-10 mb-10">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                  Engineering Approach
                </span>

                <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
                  Designed for
                  <span className="block text-slate-400 dark:text-slate-600">
                    high-demand systems.
                  </span>
                </h2>
              </div>

              <p className="lg:col-span-6 lg:col-start-7 text-base leading-7 text-slate-500 dark:text-slate-400">
                We combine Node.js performance with clean architecture, secure
                APIs, efficient databases and scalable infrastructure to create
                backend systems ready for real-world workloads.
              </p>
            </div>

            <div>
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group border-t border-slate-200 dark:border-white/8 py-7 grid grid-cols-12 gap-5 sm:gap-8"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-xs font-mono text-green-500">
                        {feature.number}
                      </span>
                    </div>

                    <div className="col-span-10 sm:col-span-4 flex items-center gap-3">
                      <Icon size={20} className="text-green-500" />

                      <h3 className="text-lg font-bold group-hover:text-green-500 transition-colors">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="col-span-12 sm:col-span-7 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20"
        >
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              What We Build
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              Node.js services
              <span className="text-slate-400 dark:text-slate-600">
                {" "}
                for modern products.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group border-t border-slate-200 dark:border-white/8 py-7"
                >
                  <div className="flex items-start gap-4">
                    <Icon size={21} className="mt-1 shrink-0 text-green-500" />

                    <div>
                      <h3 className="text-lg font-bold group-hover:text-green-500 transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {service.description}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-green-500 transition-colors">
                        Explore capability
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="bg-[#111827] dark:bg-[#0b1220] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                  The Advantage
                </span>

                <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                  A backend foundation built for growth.
                </h2>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/10 py-5 first:pt-0"
                  >
                    <CheckCircle2
                      size={19}
                      className="text-green-400 shrink-0"
                    />

                    <span className="text-sm sm:text-base text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
          <div className="relative text-center">
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-16 w-64 h-64 rounded-full blur-[100px] opacity-[0.08]"
              style={{ background: theme.primary }}
            />

            <FaNodeJs
              size={40}
              className="relative mx-auto text-green-500 mb-6"
            />

            <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-green-600 dark:text-green-400">
              Start your project
            </p>

            <h2 className="relative mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl mx-auto">
              Ready to build a
              <span className="text-green-500"> faster backend?</span>
            </h2>

            <p className="relative max-w-2xl mx-auto mt-5 text-base leading-7 text-slate-500 dark:text-slate-400">
              Turn your backend requirements into a scalable, secure and
              high-performance Node.js platform.
            </p>

            <div className="mt-7">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-sm font-bold transition-all hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Talk to Node.js Experts
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default NodeJsServicesPage;

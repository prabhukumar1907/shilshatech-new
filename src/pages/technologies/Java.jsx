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
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#ea580c",
  secondary: "#c2410c",
  glow: "#fb923c",
};

const features = [
  {
    number: "01",
    icon: Zap,
    title: "High Performance",
    description:
      "Optimized JVM execution, concurrency, and efficient memory management help us build high-throughput Java systems capable of handling demanding workloads.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Robust Architecture",
    description:
      "Clean architecture, Spring Boot, microservices, and modular engineering practices create maintainable and scalable systems.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Secure authentication, authorization, encryption, validation, and resilient backend architecture are integrated throughout development.",
  },
];

const services = [
  {
    title: "Custom Java Development",
    description:
      "Enterprise-grade Java applications designed around your business processes, workflows, integrations, and scalability goals.",
    icon: Code2,
  },
  {
    title: "Spring Boot & Microservices",
    description:
      "Modern distributed architectures using Spring Boot and Spring Cloud for scalable, independently deployable services.",
    icon: Workflow,
  },
  {
    title: "Enterprise Application Integration",
    description:
      "Connect legacy platforms, third-party services, APIs, databases, and internal systems into one cohesive ecosystem.",
    icon: Database,
  },
  {
    title: "Java Migration & Modernization",
    description:
      "Modernize legacy Java applications while improving security, maintainability, performance, and cloud readiness.",
    icon: Server,
  },
  {
    title: "Cloud-Native Java",
    description:
      "Build resilient Java workloads across AWS, Azure, and Google Cloud with containerized architectures.",
    icon: Cloud,
  },
  {
    title: "Java Support & Optimization",
    description:
      "Continuous monitoring, JVM tuning, troubleshooting, security updates, and performance optimization.",
    icon: Zap,
  },
];

const stats = [
  { value: "01", label: "Architecture First" },
  { value: "02", label: "Enterprise Ready" },
  { value: "03", label: "Cloud Optimized" },
  { value: "04", label: "Security Focused" },
];

const JavaServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050914] text-slate-900 dark:text-white overflow-hidden font-sans selection:bg-orange-500 selection:text-white">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full blur-[130px] opacity-[0.07]"
          style={{ background: theme.primary }}
        />

        <div
          className="absolute top-[50%] -right-60 w-112.5 h-112.5 rounded-full blur-[140px] opacity-[0.04]"
          style={{ background: theme.glow }}
        />

        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <main className="relative z-10 pt-8">
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="min-h-142.5 lg:min-h-150 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center w-full">
              {/* HERO CONTENT */}

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65 }}
                className="lg:col-span-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="h-px w-9"
                    style={{ background: theme.primary }}
                  />

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                    Java Development Services
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[68px] xl:text-[76px] font-black tracking-[-0.045em] leading-[0.96] max-w-4xl">
                  Enterprise software.
                  <br />
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(110deg, ${theme.primary}, ${theme.glow})`,
                    }}
                  >
                    Built with Java.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-slate-600 dark:text-slate-400">
                  Build secure, scalable and high-performance enterprise
                  applications with a Java engineering team focused on
                  architecture, reliability and long-term growth.
                </p>

                <div className="flex flex-wrap items-center gap-5 mt-8">
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                      boxShadow: "0 12px 35px rgba(234,88,12,0.18)",
                    }}
                  >
                    Hire Java Developers
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    Explore our services
                    <ChevronRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>

                <div className="flex items-center gap-3 mt-7 text-[11px] text-slate-500">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  Enterprise engineering teams available for new projects
                </div>
              </motion.div>

              {/* JAVA VISUAL */}

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-4 flex justify-center lg:justify-end"
              >
                <div className="relative w-55 h-55 sm:w-67.5 sm:h-67.5">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border border-orange-500/20"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 38,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-7 rounded-full border border-dashed border-orange-500/20"
                  />

                  <div
                    className="absolute inset-12.5 rounded-full blur-2xl opacity-20"
                    style={{ background: theme.primary }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaJava
                      size={115}
                      className="text-orange-500 drop-shadow-[0_0_30px_rgba(234,88,12,0.22)]"
                    />
                  </div>

                  <div className="absolute top-2 right-0 text-[9px] uppercase tracking-[0.25em] text-slate-400">
                    JVM
                  </div>

                  <div className="absolute bottom-6 left-0 text-[9px] uppercase tracking-[0.25em] text-slate-400">
                    Enterprise
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="py-6 sm:py-7 border-r last:border-r-0 border-slate-200 dark:border-white/[0.07] px-4 sm:px-5 first:pl-0"
                >
                  <div
                    className="text-2xl sm:text-3xl font-black"
                    style={{ color: theme.primary }}
                  >
                    {item.value}
                  </div>

                  <div className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                Why Java
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.02]">
                Technology that
                <span className="block text-slate-400 dark:text-slate-600">
                  grows with you.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="border-l-2 pl-6 sm:pl-8 border-orange-500/35 space-y-5">
                <p className="text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Are you looking to leverage Java's unmatched security,
                  stability and scalability for enterprise applications? Shilsha
                  Technologies designs robust software platforms around your
                  business objectives and technical requirements.
                </p>

                <p className="text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
                  From Spring Boot microservices to cloud-native applications,
                  our Java engineers create systems that are easier to scale,
                  maintain and evolve as your organization grows.
                </p>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400 hover:gap-3 transition-all"
                >
                  Discuss your Java architecture
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
            <div className="grid lg:grid-cols-12 gap-10 mb-6">
              <div className="lg:col-span-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                  Engineering Principles
                </span>

                <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                  Built for
                  <span className="block text-slate-400 dark:text-slate-600">
                    serious workloads.
                  </span>
                </h2>
              </div>

              <p className="lg:col-span-6 lg:col-start-7 text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
                Java remains a powerful foundation for organizations that need
                predictable performance, mature tooling, strong security and
                architectures capable of supporting complex business systems.
              </p>
            </div>

            <div>
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group border-t border-slate-200 dark:border-white/8 py-7 sm:py-8 grid grid-cols-12 gap-4 sm:gap-8 items-start"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-[11px] font-mono text-orange-500">
                        {feature.number}
                      </span>
                    </div>

                    <div className="col-span-10 sm:col-span-3 flex items-center gap-3">
                      <Icon size={20} className="text-orange-500 shrink-0" />

                      <h3 className="text-base sm:text-lg font-bold">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="col-span-12 sm:col-span-7 sm:col-start-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
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
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
        >
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
              What We Build
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.02]">
              Java services
              <span className="text-slate-400 dark:text-slate-600">
                {" "}
                for every stage of growth.
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
                    <div
                      className="mt-1 shrink-0"
                      style={{ color: theme.primary }}
                    >
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold group-hover:text-orange-500 transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {service.description}
                      </p>

                      <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-orange-500 transition-colors">
                        Explore capability
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="bg-[#111827] dark:bg-[#0b1220] text-white relative overflow-hidden">
          <div
            className="absolute right-0 top-0 w-100 h-100 rounded-full blur-[120px] opacity-[0.08]"
            style={{ background: theme.primary }}
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400">
                  The Advantage
                </span>

                <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  A stronger foundation for your digital business.
                </h2>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 space-y-5">
                {[
                  "Cross-platform JVM architecture",
                  "Mature enterprise development ecosystem",
                  "Scalable Spring Boot and microservice architecture",
                  "Cloud-ready infrastructure",
                  "Strong security and transaction capabilities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/10 pb-5"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-orange-400 shrink-0"
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

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
          <div className="relative text-center">
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-16 w-64 h-64 rounded-full blur-[90px] opacity-[0.08]"
              style={{ background: theme.primary }}
            />

            <FaJava
              size={36}
              className="relative mx-auto text-orange-500 mb-6"
            />

            <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">
              Start your next project
            </p>

            <h2 className="relative mt-4 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[0.98] max-w-4xl mx-auto">
              Ready to build something
              <span className="text-orange-500"> enterprise-grade?</span>
            </h2>

            <p className="relative max-w-xl mx-auto mt-5 text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
              Let's turn your technical requirements into a secure, scalable and
              high-performance Java platform.
            </p>

            <div className="mt-7">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Talk to Java Experts
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

export default JavaServicesPage;

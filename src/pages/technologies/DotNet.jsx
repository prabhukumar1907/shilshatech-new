import React from "react";
import {
  Zap,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cloud,
  Database,
  Server,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#512bd4",
  secondary: "#3c1fb8",
  glow: "#818cf8",
};

const features = [
  {
    icon: Zap,
    title: "Exceptional Speed",
    desc: "Modern .NET runtimes deliver fast execution, efficient memory usage, and reliable performance for demanding workloads.",
  },
  {
    icon: Workflow,
    title: "Modern Architecture",
    desc: "Build modular, cloud-ready applications using C#, ASP.NET Core, APIs, and scalable microservice architectures.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Strong identity management, authorization, validation, and secure development practices protect critical business systems.",
  },
];

const services = [
  {
    title: "Custom .NET Development",
    description:
      "Scalable enterprise applications built around your business workflows, integrations, and long-term technology goals.",
    icon: Code2,
  },
  {
    title: "ASP.NET Core Web APIs",
    description:
      "Secure and high-performance REST APIs powering web, mobile, desktop, and third-party applications.",
    icon: Server,
  },
  {
    title: "Enterprise Integration",
    description:
      "Connect databases, legacy platforms, third-party applications, APIs, and cloud services into a unified ecosystem.",
    icon: Database,
  },
  {
    title: ".NET Migration & Modernization",
    description:
      "Modernize legacy .NET Framework applications with current .NET versions for better performance, security, and maintainability.",
    icon: Workflow,
  },
  {
    title: "Cloud-Native .NET",
    description:
      "Build cloud-ready applications using Azure, AWS, containers, APIs, and modern distributed architectures.",
    icon: Cloud,
  },
  {
    title: "Performance & Support",
    description:
      "Continuous monitoring, optimization, troubleshooting, security updates, and technical maintenance.",
    icon: Zap,
  },
];

const benefits = [
  "Cross-platform application development",
  "Modern ASP.NET Core architecture",
  "Scalable microservices development",
  "Cloud-ready infrastructure",
  "Strong enterprise security",
];

const DotNetServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050914] text-slate-900 dark:text-white overflow-hidden font-sans selection:bg-indigo-500 selection:text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 left-1/2 -translate-x-1/2 w-162.5 h-100 rounded-full blur-[140px] opacity-[0.07]"
          style={{ background: theme.primary }}
        />

        <div
          className="absolute top-[50%] -right-60 w-112.5 h-112.5 rounded-full blur-[150px] opacity-[0.045]"
          style={{ background: theme.glow }}
        />

        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-size-[56px_56px]" />
      </div>

      <main className="relative z-10 pt-12">
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-14">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-8 h-px"
                  style={{ background: theme.primary }}
                />

                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">
                  .NET Development Services
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[82px] font-black tracking-[-0.055em] leading-[0.95] max-w-5xl">
                Enterprise software.
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(110deg, ${theme.primary}, ${theme.glow})`,
                  }}
                >
                  Built with .NET.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-slate-600 dark:text-slate-400">
                Build secure, scalable and high-performance enterprise
                applications with a .NET engineering team focused on
                architecture, reliability and long-term growth.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-7">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    boxShadow: "0 10px 30px rgba(81,43,212,0.18)",
                  }}
                >
                  Hire .NET Developers
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#services"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Explore services
                  <ChevronRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="flex items-center gap-3 mt-7 text-xs text-slate-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                  <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Enterprise engineering teams available for new projects
              </div>
            </motion.div>

            {/* .NET Visual */}

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="relative w-55 h-55 sm:w-70 sm:h-70">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-indigo-500/20"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-7 rounded-full border border-dashed border-indigo-500/20"
                />

                <div
                  className="absolute inset-11.25 rounded-full blur-[45px] opacity-20"
                  style={{ background: theme.primary }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <SiDotnet
                    size={125}
                    className="text-[#512bd4] dark:text-[#818cf8] drop-shadow-[0_0_35px_rgba(81,43,212,0.25)]"
                  />
                </div>

                <span className="absolute top-2 right-1 text-[9px] uppercase tracking-[0.25em] text-slate-400">
                  ASP.NET
                </span>

                <span className="absolute bottom-4 left-1 text-[9px] uppercase tracking-[0.25em] text-slate-400">
                  Enterprise
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`py-7 sm:py-8 md:px-7 ${
                      index !== 0
                        ? "border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/[0.07]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={19} className="text-indigo-500 shrink-0" />

                      <h3 className="text-base font-bold">{feature.title}</h3>
                    </div>

                    <p className="text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-md">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                Why .NET
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.02]">
                Enterprise technology
                <span className="block text-slate-400 dark:text-slate-600">
                  that scales.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="border-l-2 border-indigo-500/40 pl-6 sm:pl-8 space-y-5">
                <p className="text-base sm:text-lg leading-7 text-slate-600 dark:text-slate-300">
                  Are you looking to leverage .NET for secure, scalable and
                  high-performance business applications? Shilsha Technologies
                  builds robust enterprise platforms around your business
                  objectives and technical requirements.
                </p>

                <p className="text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
                  From ASP.NET Core APIs to cloud-native microservices, our
                  engineers create systems that are easier to maintain, scale
                  and evolve as your organization grows.
                </p>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
                >
                  Discuss your .NET architecture
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-8 mb-10">
              <div className="lg:col-span-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
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
                .NET provides a mature foundation for organizations that need
                predictable performance, modern tooling, strong security and
                architectures capable of supporting complex business systems.
              </p>
            </div>

            <div className="border-t border-slate-200 dark:border-white/8">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="grid grid-cols-12 gap-4 sm:gap-8 items-start py-6 border-b border-slate-200 dark:border-white/8"
                  >
                    <span className="col-span-2 sm:col-span-1 text-xs font-mono text-indigo-500">
                      0{index + 1}
                    </span>

                    <div className="col-span-10 sm:col-span-4 flex items-center gap-3">
                      <Icon size={19} className="text-indigo-500 shrink-0" />

                      <h3 className="text-base sm:text-lg font-bold">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="col-span-12 sm:col-span-7 sm:col-start-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20"
        >
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              What We Build
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none">
              .NET services
              <span className="text-slate-400 dark:text-slate-600">
                {" "}
                for modern businesses.
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
                  transition={{ delay: index * 0.07 }}
                  className="group border-t border-slate-200 dark:border-white/8 py-6"
                >
                  <div className="flex items-start gap-4">
                    <Icon size={21} className="mt-1 shrink-0 text-indigo-500" />

                    <div>
                      <h3 className="text-base sm:text-lg font-bold group-hover:text-indigo-500 transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {service.description}
                      </p>

                      <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-indigo-500 transition-colors">
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

        <section className="bg-[#111827] dark:bg-[#0b1220] text-white relative overflow-hidden">
          <div
            className="absolute right-0 top-0 w-100 h-100 rounded-full blur-[130px] opacity-[0.08]"
            style={{ background: theme.primary }}
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 lg:py-18">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                  The Advantage
                </span>

                <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  A stronger foundation for your digital business.
                </h2>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 py-4 border-b border-white/10"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-indigo-400 shrink-0"
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

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
          <div className="relative text-center">
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-16 w-64 h-64 rounded-full blur-[100px] opacity-[0.08]"
              style={{ background: theme.primary }}
            />

            <SiDotnet
              size={38}
              className="relative mx-auto text-indigo-500 mb-5"
            />

            <p className="relative text-[11px] font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
              Start your next project
            </p>

            <h2 className="relative mt-4 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl mx-auto">
              Ready to build something
              <span className="text-indigo-500"> enterprise-grade?</span>
            </h2>

            <p className="relative max-w-xl mx-auto mt-5 text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400">
              Let's turn your requirements into a secure, scalable and
              high-performance .NET platform.
            </p>

            <div className="mt-7">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Talk to .NET Experts
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

export default DotNetServicesPage;

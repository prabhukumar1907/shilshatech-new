import React from "react";
import {
  Zap,
  ShieldCheck,
  ArrowRight,
  Database,
  Server,
  Activity,
  Lock,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#00758F",
  secondary: "#005466",
  glow: "#38bdf8",
};

const features = [
  {
    number: "01",
    icon: Database,
    title: "Optimized Database Architecture",
    desc: "Design normalized, scalable MySQL schemas built around performance, reliability, and long-term maintainability.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Advanced Query Optimization",
    desc: "Identify slow queries, improve indexing strategies, optimize joins, and tune execution plans for faster response times.",
  },
  {
    number: "03",
    icon: Server,
    title: "High Availability & Replication",
    desc: "Build resilient database environments with replication, failover strategies, load balancing, and recovery planning.",
  },
  {
    number: "04",
    icon: Lock,
    title: "Security & Access Control",
    desc: "Harden database infrastructure with least-privilege access, encrypted connections, auditing, and secure configurations.",
  },
  {
    number: "05",
    icon: Activity,
    title: "Migration & Modernization",
    desc: "Move legacy workloads to modern MySQL environments and cloud platforms while minimizing downtime and risk.",
  },
  {
    number: "06",
    icon: Gauge,
    title: "Continuous Performance Tuning",
    desc: "Monitor database workloads and continuously tune resources, queries, indexes, and server configuration.",
  },
];

const services = [
  "MySQL Database Architecture & Design",
  "Query Performance Tuning & Indexing",
  "Cloud Migration & Managed Hosting",
  "Replication & High Availability",
  "Backup & Disaster Recovery",
  "Stored Procedures & Triggers",
  "Database Security & Hardening",
  "Ongoing Database Maintenance",
];

const MysqlServicesPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#050a12] text-slate-900 dark:text-white overflow-hidden">

      <section className="relative pt-28 sm:pt-36 pb-24 sm:pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-[-10%] w-125 h-125 rounded-full blur-[140px] opacity-20"
            style={{ background: theme.glow }}
          />

          <div
            className="absolute bottom-0 left-[-10%] w-100 h-100 rounded-full blur-[140px] opacity-10"
            style={{ background: theme.primary }}
          />

          <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(#00758F 1px, transparent 1px),
                  linear-gradient(90deg, #00758F 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00758F]/10 dark:bg-[#38bdf8]/10">
              <SiMysql
                size={23}
                className="text-[#00758F] dark:text-[#38bdf8]"
              />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#00758F] dark:text-[#38bdf8]">
                Shilsha Technologies
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Database Engineering Services
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-14 lg:gap-20 items-center">

            {/* Hero content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.98]">
                MySQL Database
                <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-[#00758F] to-[#38bdf8]">
                  Built for Performance.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                High-performance MySQL architecture, optimization, migration,
                security, and high-availability solutions for modern
                applications and enterprise workloads.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#00758F] hover:bg-[#005466] text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#00758F]/20"
                >
                  Hire MySQL Experts
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center px-6 py-3.5 rounded-full border border-slate-300 dark:border-white/15 text-sm font-semibold hover:border-[#00758F] hover:text-[#00758F] dark:hover:text-[#38bdf8] transition-colors"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-65 h-65 sm:w-85 sm:h-85">

                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-[#00758F]/20 dark:border-[#38bdf8]/20" />

                <div className="absolute inset-6 rounded-full border border-dashed border-[#00758F]/20 dark:border-[#38bdf8]/20 animate-[spin_25s_linear_infinite]" />

                {/* Glow */}
                <div className="absolute inset-12 rounded-full bg-[#00758F]/10 dark:bg-[#38bdf8]/10 blur-3xl" />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <SiMysql
                    size={150}
                    className="relative z-10 text-[#00758F] dark:text-[#38bdf8] drop-shadow-[0_0_30px_rgba(56,189,248,0.25)]"
                  />
                </div>

                {/* Floating labels */}
                <div className="absolute top-3 right-0 sm:-right-5 px-3 py-2 rounded-lg bg-white/80 dark:bg-[#0b1528]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#00758F] dark:text-[#38bdf8]">
                  High Availability
                </div>

                <div className="absolute bottom-8 -left-3.75 px-3 py-2 rounded-lg bg-white/80 dark:bg-[#0b1528]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-wider">
                  Query Optimization
                </div>

              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20 border-y border-slate-200 dark:border-white/10"
          >
            {[
              ["01", "Architecture"],
              ["02", "Optimization"],
              ["03", "Security"],
              ["04", "Availability"],
            ].map(([num, label]) => (
              <div
                key={num}
                className="py-6 px-5 border-r last:border-r-0 border-slate-200 dark:border-white/10"
              >
                <span className="text-xs font-bold text-[#00758F] dark:text-[#38bdf8]">
                  {num}
                </span>
                <p className="mt-1 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          <div className="grid lg:grid-cols-12 gap-12">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00758F] dark:text-[#38bdf8] mb-5">
                Database Engineering
              </p>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Power your applications with a stronger data layer.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                MySQL remains one of the most widely used relational database
                technologies for modern web and enterprise applications.
                Shilsha Technologies helps organizations design, optimize,
                secure, migrate, and scale their MySQL environments.
              </p>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                From schema architecture and indexing to replication,
                disaster recovery, and cloud migration, our database
                engineers build infrastructure that stays reliable under
                demanding workloads.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#00758F] dark:text-[#38bdf8]">
                <span className="w-8 h-px bg-current" />
                Performance-first database engineering
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-slate-100/70 dark:bg-[#08111e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00758F] dark:text-[#38bdf8] mb-5">
              Why MySQL Engineering Matters
            </p>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Every millisecond matters when your database powers the product.
            </h2>
          </motion.div>

          <div className="divide-y divide-slate-300 dark:divide-white/10 border-y border-slate-300 dark:border-white/10">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group grid md:grid-cols-[80px_60px_1fr] gap-5 md:gap-8 items-start py-8 sm:py-10"
                >
                  <span className="text-sm font-bold text-[#00758F] dark:text-[#38bdf8]">
                    {feature.number}
                  </span>

                  <div className="w-11 h-11 flex items-center justify-center">
                    <Icon
                      size={22}
                      className="text-slate-500 group-hover:text-[#00758F] dark:text-slate-500 dark:group-hover:text-[#38bdf8] transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-[#00758F] dark:group-hover:text-[#38bdf8] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-24 sm:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00758F] dark:text-[#38bdf8] mb-5">
                What We Do
              </p>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                MySQL services designed around your workload.
              </h2>

              <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you need a database from scratch or need to rescue a
                struggling production environment, our engineers can help.
              </p>

              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 mt-8 text-sm font-bold text-[#00758F] dark:text-[#38bdf8]"
              >
                Discuss your database
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="divide-y divide-slate-200 dark:divide-white/10 border-y border-slate-200 dark:border-white/10">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="group flex items-center justify-between gap-5 py-5 sm:py-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-base sm:text-lg font-semibold group-hover:text-[#00758F] dark:group-hover:text-[#38bdf8] transition-colors">
                        {service}
                      </span>
                    </div>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-slate-300 dark:text-slate-700 group-hover:text-[#00758F] dark:group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />

    </main>
  );
};

export default MysqlServicesPage;
import React from "react";
import { ArrowRight, Check, Database, Layers, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#47A248",
  secondary: "#13AA52",
  glow: "#86efac",
};

const features = [
  {
    number: "01",
    icon: <Layers size={21} />,
    title: "Flexible Document Architecture",
    description:
      "Design scalable document models that evolve naturally with your product, users, and data requirements.",
  },
  {
    number: "02",
    icon: <Zap size={21} />,
    title: "High-Performance Queries",
    description:
      "Optimize indexes, aggregation pipelines, and queries to reduce latency and keep applications responsive.",
  },
  {
    number: "03",
    icon: <Database size={21} />,
    title: "Elastic Data Scaling",
    description:
      "Build MongoDB architectures that scale horizontally as your traffic, workloads, and datasets grow.",
  },
  {
    number: "04",
    icon: <ShieldCheck size={21} />,
    title: "Secure Cloud Infrastructure",
    description:
      "Implement secure access controls, encryption, backups, monitoring, and resilient MongoDB environments.",
  },
];

const services = [
  "MongoDB Schema Design & Data Modeling",
  "Aggregation Pipeline Optimization",
  "MongoDB Atlas Setup & Management",
  "Indexing & Query Performance Tuning",
  "Sharding & Horizontal Scalability",
  "SQL to MongoDB Migration",
  "Backup & Disaster Recovery",
  "Security & Infrastructure Hardening",
];

const MongodbServicesPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-[#050b12] dark:text-white">

      <section className="relative min-h-180 flex items-center pt-28">
        <div
          className="absolute left-1/2 top-20 h-125 w-125 -translate-x-1/2 rounded-full opacity-20 blur-[140px] pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-[20%] h-px w-32 bg-linear-to-r from-transparent via-emerald-400/50 to-transparent" />
          <div className="absolute right-[10%] top-[35%] h-px w-40 bg-linear-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="absolute left-[20%] bottom-[15%] h-px w-24 bg-emerald-400/20" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Brand label */}
            <div className="mb-7 flex items-center gap-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10">
                <SiMongodb size={20} />
              </span>

              <span>Shilsha Technologies</span>

              <span className="h-1 w-1 rounded-full bg-emerald-500" />

              <span className="text-slate-500 dark:text-slate-400">
                MongoDB Experts
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Build faster with
              <span
                className="block bg-linear-to-r from-[#47A248] via-[#13AA52] to-emerald-300 bg-clip-text text-transparent"
              >
                intelligent data.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              MongoDB consulting and development services for businesses that
              need flexible data architecture, high-performance applications,
              and infrastructure that scales without friction.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full bg-[#47A248] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#388e3c] hover:shadow-[0_15px_40px_rgba(71,162,72,0.3)]"
              >
                Talk to MongoDB Experts
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <span className="text-sm text-slate-500 dark:text-slate-500">
                Architecture • Performance • Scale
              </span>
            </div>

            {/* Small trust line */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              <span>Atlas</span>
              <span>Aggregation</span>
              <span>Sharding</span>
              <span>Security</span>
            </div>
          </motion.div>

          {/* MongoDB Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative flex min-h-107.5 items-center justify-center"
          >
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-92.5 w-92.5 rounded-full border border-dashed border-emerald-400/20"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-72.5 w-72.5 rounded-full border border-emerald-400/10"
            />

            {/* Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-emerald-400/20 blur-[90px]" />

            {/* Logo */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-64 w-64 items-center justify-center"
            >
              <SiMongodb
                size={210}
                className="text-[#47A248] drop-shadow-[0_20px_50px_rgba(71,162,72,0.35)]"
              />
            </motion.div>

            {/* Floating labels */}
            <div className="absolute left-0 top-20 hidden rounded-full border border-emerald-400/20 bg-white/80 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-lg backdrop-blur-md dark:bg-[#0b1528]/80 dark:text-emerald-300 sm:block">
              Flexible Schema
            </div>

            <div className="absolute bottom-20 right-0 hidden rounded-full border border-emerald-400/20 bg-white/80 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-lg backdrop-blur-md dark:bg-[#0b1528]/80 dark:text-emerald-300 sm:block">
              Cloud Ready
            </div>

            <div className="absolute right-8 top-5 hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-lg dark:border-white/10 dark:bg-[#0b1528] dark:text-slate-300 lg:block">
              High Availability
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-slate-200/80 dark:border-white/6">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                MongoDB Engineering
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Data architecture built for change.
              </h2>
            </div>

            <div>
              <p className="text-xl leading-9 text-slate-600 dark:text-slate-400">
                Modern applications need data platforms that can evolve as
                quickly as the products they power. We architect MongoDB
                solutions around performance, flexibility, reliability, and
                long-term scalability.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-500 dark:text-slate-500">
                From application-level document modeling to production-grade
                MongoDB Atlas infrastructure, our engineers help you create a
                data layer that is ready for real-world workloads.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Why MongoDB
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Engineered for modern workloads.
            </h2>
          </motion.div>

          <div className="divide-y divide-slate-200 dark:divide-white/8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group grid grid-cols-[55px_1fr] gap-6 py-9 md:grid-cols-[80px_60px_1fr] md:items-center"
              >
                <span className="text-sm font-bold text-emerald-500/70">
                  {feature.number}
                </span>

                <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-[#47A248] group-hover:text-white dark:bg-emerald-500/10 dark:text-emerald-400 md:flex">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#47A248] sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#06100b] py-28 text-white">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-green-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Built to Scale
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Turn complex data into a competitive advantage.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Whether you're launching a new product, modernizing an existing
              platform, or handling rapidly growing datasets, our MongoDB
              engineers design infrastructure that keeps your applications
              fast and dependable.
            </p>

            <Link
              to="/contact-us"
              className="group mt-10 inline-flex items-center gap-3 border-b border-emerald-400 pb-2 text-sm font-bold text-emerald-400 transition-colors hover:text-white"
            >
              Discuss your architecture
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                Our Capabilities
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Everything your MongoDB environment needs.
              </h2>

              <p className="mt-6 leading-8 text-slate-500 dark:text-slate-400">
                From initial architecture through optimization and ongoing
                management, our team provides end-to-end MongoDB expertise.
              </p>
            </motion.div>

            <div className="divide-y divide-slate-200 dark:divide-white/8">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex items-center gap-5 py-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-[#47A248] group-hover:text-white dark:bg-emerald-500/10 dark:text-emerald-400">
                    <Check size={14} />
                  </span>

                  <span className="text-base font-semibold text-slate-700 transition-colors group-hover:text-[#47A248] dark:text-slate-300 dark:group-hover:text-emerald-400">
                    {service}
                  </span>

                  <ArrowRight
                    size={16}
                    className="ml-auto text-slate-300 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:text-slate-600"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </main>
  );
};

export default MongodbServicesPage;
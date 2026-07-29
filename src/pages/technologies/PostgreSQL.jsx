import React from "react";
import { Zap, ShieldCheck, Workflow, ArrowRight, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#4169E1", // PostgreSQL Royal Blue
  secondary: "#2c4d9e",
  glow: "#93c5fd",
};

const PostgresqlServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#336791",
    secondaryIndigo: "#20415d",
    electricCyan: "#93c5fd",
  };

  const whyChooseItems = [
    {
      title: "Advanced SQL Specialists",
      desc: "Leverage PostgreSQL's rich type system, custom functions, and advanced indexing capabilities.",
    },
    {
      title: "JSONB & Relational Hybrid",
      desc: "Combine strict relational integrity with flexible semi-structured JSONB data querying.",
    },
    {
      title: "High Performance & Concurrency",
      desc: "Implement Multi-Version Concurrency Control (MVCC) tuning for high-throughput enterprise systems.",
    },
    {
      title: "Complex Migration Services",
      desc: "Migrate legacy databases (Oracle, SQL Server, MySQL) safely to PostgreSQL without downtime.",
    },
    {
      title: "Partitioning & Sharding",
      desc: "Scale multi-terabyte datasets efficiently using declarative table partitioning.",
    },
    {
      title: "Enterprise Security & Auditing",
      desc: "Configure row-level security (RLS), SSL connections, and rigorous role-based access management.",
    },
  ];

  const servicesList = [
    {
      title: "PostgreSQL Architecture & Schema Design",
      desc: "Design robust relational schemas utilizing advanced types, enums, foreign keys, and constraints.",
    },
    {
      title: "JSONB & Semi-Structured Data Integration",
      desc: "Store and query flexible JSON documents efficiently alongside structured relational data.",
    },
    {
      title: "Query Optimization & Execution Tuning",
      desc: "Analyze slow queries using EXPLAIN ANALYZE and implement B-Tree, GIN, or GiST indexes.",
    },
    {
      title: "Table Partitioning & Scaling",
      desc: "Implement declarative table partitioning to maintain high query speeds on massive datasets.",
    },
    {
      title: "Cloud Migration & Managed Setup",
      desc: "Transition workloads to managed PostgreSQL on AWS RDS/Aurora, Azure, or GCP Cloud SQL.",
    },
    {
      title: "Replication & High Availability",
      desc: "Set up streaming replication, connection pooling (PgBouncer), and automated failover architectures.",
    },
    {
      title: "Row-Level Security & Access Control",
      desc: "Enforce strict multi-tenant data isolation using native PostgreSQL row-level security policies.",
    },
    {
      title: "Ongoing Maintenance & Support",
      desc: "Monitor database health, vacuum routines, index bloat, and perform routine security patching.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#93c5fd] selection:text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{
              background: `linear-gradient(90deg, #4169E1, ${theme.glow})`,
            }}
          />

          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: theme.glow }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 shadow-sm">
                <SiPostgresql size={22} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                PostgreSQL Consulting & Advanced Database Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies delivers enterprise-grade PostgreSQL
                architecture, complex query optimization, JSONB hybrid storage,
                and high-availability clustering.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(90deg, #4169E1, ${theme.secondary})`,
                  }}
                >
                  <span>Hire PostgreSQL Experts</span>
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-blue-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <SiPostgresql
                  className="text-[#336791] dark:text-[#93c5fd] transition-transform duration-500 group-hover:scale-110"
                  size={130}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Server size={20} />,
              title: "Advanced SQL Architecture",
              desc: "Build highly robust relational schemas leveraging PostgreSQL's powerful extensibility.",
            },
            {
              icon: <Zap size={20} />,
              title: "JSONB Flexibility",
              desc: "Combine strict ACID relational structures with high-speed semi-structured JSON querying.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Row-Level Security",
              desc: "Enforce multi-tenant data isolation and strict access control policies natively.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-700 dark:text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Intro Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-12 space-y-8">
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-snug"
              style={{ color: brandTheme.primaryBlue }}
            >
              Empower Enterprise Applications with Expert PostgreSQL Solutions
            </h2>
            <div
              className="w-full h-1 rounded-full my-6 opacity-40"
              style={{
                background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
              }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-blue-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                PostgreSQL is the world's most advanced open-source relational
                database, renowned for its bulletproof reliability,
                extensibility, and complex query performance. Shilsha
                Technologies designs, optimizes, and scales PostgreSQL
                infrastructures for modern enterprises.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact our database engineering team today to elevate your data
                architecture and unlock maximum throughput!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-blue-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Unmatched Concurrency and Data Reliability
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-lg transition-transform duration-300"
            >
              As an expert software development agency, we integrate
              high-performance PostgreSQL backends into complex enterprise
              applications, ensuring strict ACID compliance, secure
              multi-tenancy, and rapid query response times.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-lg transition-transform duration-300"
            >
              Get in touch with our certified engineers to architect or optimize
              your PostgreSQL database environment today.
            </motion.p>
          </div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default PostgresqlServicesPage;

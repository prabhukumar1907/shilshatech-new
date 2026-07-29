import React from "react";
import { Zap, ShieldCheck, Workflow, ArrowRight, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#00758F", // MySQL Blue
  secondary: "#005466",
  glow: "#38bdf8",
};

const MysqlServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#00758F",
    secondaryIndigo: "#005466",
    electricCyan: "#38bdf8",
  };

  const whyChooseItems = [
    {
      title: "Relational Database Experts",
      desc: "Our database engineers specialize in designing highly normalized, performant, and secure MySQL database schemas.",
    },
    {
      title: "Advanced Query Optimization",
      desc: "We analyze execution plans and configure proper indexing to ensure lightning-fast read and write operations.",
    },
    {
      title: "High Availability & Replication",
      desc: "Set up master-slave replication, clustering, and automated failover systems to guarantee 99.99% uptime.",
    },
    {
      title: "Enterprise Security & Auditing",
      desc: "Implement strict user access controls, data encryption at rest/transit, and regular vulnerability assessments.",
    },
    {
      title: "Seamless Migration Services",
      desc: "Migrate your legacy databases safely to MySQL or cloud-managed instances (RDS, Aurora) with zero data loss.",
    },
    {
      title: "Proactive Performance Tuning",
      desc: "Continuously monitor database metrics and tune server parameters (InnoDB buffer pool, query cache) for peak efficiency.",
    },
  ];

  const servicesList = [
    {
      title: "MySQL Database Architecture & Design",
      desc: "Design robust, scalable relational schemas with proper foreign keys, constraints, and normalization standards.",
    },
    {
      title: "Query Performance Tuning & Indexing",
      desc: "Identify bottlenecks, optimize complex joins, and configure strategic indexes using EXPLAIN plans.",
    },
    {
      title: "Cloud Migration & Managed Hosting",
      desc: "Transition on-premise databases to MySQL on AWS RDS, Azure Database, or Google Cloud SQL seamlessly.",
    },
    {
      title: "Replication & High Availability Setup",
      desc: "Configure master-replica configurations, load balancing, and automated failover to prevent downtime.",
    },
    {
      title: "Database Backup & Disaster Recovery",
      desc: "Implement automated snapshot backups, point-in-time recovery (PITR), and tested recovery protocols.",
    },
    {
      title: "Stored Procedures & Triggers",
      desc: "Develop efficient stored procedures, functions, and triggers to handle complex business logic inside the database.",
    },
    {
      title: "Database Security & Hardening",
      desc: "Secure user permissions, enable SSL connections, and protect against SQL injection vulnerabilities.",
    },
    {
      title: "Ongoing Maintenance & Support",
      desc: "Monitor query performance, handle routine maintenance, and apply security patches proactively.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#38bdf8] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{
              background: `linear-gradient(90deg, #00758F, ${theme.glow})`,
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
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 shadow-sm">
                <SiMysql size={24} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                MySQL Database Consulting & Optimization Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies delivers high-performance MySQL database
                architecture, query optimization, and high-availability
                clustering solutions for modern enterprise applications.
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
                    background: `linear-gradient(90deg, #00758F, ${theme.secondary})`,
                  }}
                >
                  <span>Hire MySQL Experts</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-cyan-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <SiMysql
                  className="text-[#00758F] dark:text-[#38bdf8] transition-transform duration-500 group-hover:scale-110"
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
              icon: <Database size={20} />,
              title: "Optimized Schemas",
              desc: "Build well-structured, normalized relational databases designed for data integrity and speed.",
            },
            {
              icon: <Zap size={20} />,
              title: "Query Tuning",
              desc: "Eliminate slow-running queries and configure proper indexes to maximize execution velocity.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "High Availability",
              desc: "Ensure continuous operations with robust replication and automated failover setups.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-700 dark:text-cyan-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-cyan-600 transition-colors duration-200">
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
              Power Your Applications with Expert MySQL Database Solutions
            </h2>
            <div
              className="w-full h-1 rounded-full my-6 opacity-40"
              style={{
                background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
              }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-cyan-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                MySQL remains the backbone of millions of web applications
                worldwide. Shilsha Technologies provides expert database
                administration, schema design, query optimization, and scaling
                services to ensure your application data layer performs
                flawlessly under any load.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact our database specialists today to audit your MySQL setup
                and elevate your system performance!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-cyan-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Ensure Data Integrity and Unmatched Speed
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-cyan-500/20 shadow-lg transition-transform duration-300"
            >
              As an expert software development agency, we integrate secure,
              high-speed relational storage systems into every web and mobile
              solution we build, ensuring absolute reliability and transaction
              safety.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-cyan-500/20 shadow-lg transition-transform duration-300"
            >
              Get in touch with our engineers to architect or optimize your
              MySQL database infrastructure today.
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

export default MysqlServicesPage;

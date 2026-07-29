import React from "react";
import { Zap, ShieldCheck, Workflow, ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#47A248", // MongoDB Green
  secondary: "#388e3c",
  glow: "#86efac",
};

const MongodbServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#13aa52",
    secondaryIndigo: "#0f8240",
    electricCyan: "#86efac",
  };

  const whyChooseItems = [
    {
      title: "NoSQL Database Specialists",
      desc: "Our engineers excel at designing flexible, schema-optimized document models tailored for high-velocity data.",
    },
    {
      title: "Aggregation Pipeline Masters",
      desc: "Write complex, high-performance aggregation pipelines for real-time analytics and reporting.",
    },
    {
      title: "Sharding & Horizontal Scaling",
      desc: "Distribute massive datasets seamlessly across multiple servers to handle limitless growth.",
    },
    {
      title: "Indexing & Performance Tuning",
      desc: "Implement optimal compound and geospatial indexes adhering to the ESR (Equality, Sort, Range) rule.",
    },
    {
      title: "Atlas Cloud Management",
      desc: "Deploy, secure, and manage fully managed MongoDB Atlas clusters with automated backups.",
    },
    {
      title: "Robust Data Security",
      desc: "Configure encryption at rest/transit, network peering, and role-based access control (RBAC).",
    },
  ];

  const servicesList = [
    {
      title: "MongoDB Schema Design & Modeling",
      desc: "Architect balanced document structures leveraging embedding and referencing strategies for peak performance.",
    },
    {
      title: "Aggregation Pipeline Optimization",
      desc: "Develop advanced aggregation workflows for data transformation, analytics, and reporting.",
    },
    {
      title: "MongoDB Atlas Cloud Setup",
      desc: "Provision, configure, and secure fully managed MongoDB Atlas clusters across AWS, GCP, or Azure.",
    },
    {
      title: "Indexing & Query Performance Tuning",
      desc: "Analyze slow queries with explain plans and configure strategic indexes to drastically reduce latency.",
    },
    {
      title: "Sharding & Horizontal Scalability",
      desc: "Scale clusters horizontally across multiple nodes to accommodate enterprise-grade data growth.",
    },
    {
      title: "Relational to NoSQL Migration",
      desc: "Seamlessly transition data from legacy relational databases (MySQL/PostgreSQL) to MongoDB structures.",
    },
    {
      title: "Backup & Disaster Recovery Plans",
      desc: "Set up continuous automated backups, point-in-time restores, and high-availability replica sets.",
    },
    {
      title: "Database Security & Hardening",
      desc: "Enforce secure connections, database auditing, and principle-of-least-privilege IAM roles.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#86efac] selection:text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-emerald-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{
              background: `linear-gradient(90deg, #47A248, ${theme.glow})`,
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
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 shadow-sm">
                <SiMongodb size={22} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                MongoDB NoSQL Consulting & Development Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies specializes in high-performance NoSQL
                architecture, advanced aggregation pipelines, and scalable
                MongoDB Atlas cloud deployments.
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
                    background: `linear-gradient(90deg, #47A248, ${theme.secondary})`,
                  }}
                >
                  <span>Hire MongoDB Experts</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-emerald-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <SiMongodb
                  className="text-[#47A248] dark:text-[#86efac] transition-transform duration-500 group-hover:scale-110"
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
              icon: <Layers size={20} />,
              title: "Flexible Document Design",
              desc: "Build dynamic, scalable schemas that evolve effortlessly alongside your application requirements.",
            },
            {
              icon: <Zap size={20} />,
              title: "Real-Time Aggregation",
              desc: "Process data efficiently with optimized pipelines for instant analytics and reporting.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Atlas Cloud Scaling",
              desc: "Manage multi-region clusters with automated failover and enterprise-grade security.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-emerald-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-200">
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
              Scale Modern Applications with Expert MongoDB Solutions
            </h2>
            <div
              className="w-full h-1 rounded-full my-6 opacity-40"
              style={{
                background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
              }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-emerald-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                MongoDB empowers modern businesses to handle unstructured,
                high-velocity data with complete flexibility. Shilsha
                Technologies designs robust NoSQL schemas, optimizes aggregation
                pipelines, and manages high-availability Atlas clusters.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact our NoSQL experts today to discuss your data
                architecture and scale your application effortlessly!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Unlock Agility and Limitless Scalability
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-emerald-500/20 shadow-lg transition-transform duration-300"
            >
              As a trusted software engineering partner, we integrate MongoDB
              seamlessly into modern MERN/MEVN stacks and microservice
              architectures to deliver lightning-fast data retrieval and
              exceptional user experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-emerald-500/20 shadow-lg transition-transform duration-300"
            >
              Get in touch with our database architects to build or optimize
              your MongoDB infrastructure today.
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

export default MongodbServicesPage;

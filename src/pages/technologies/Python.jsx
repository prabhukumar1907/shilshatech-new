import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#2563eb", // Python Blue / Accent
  secondary: "#1d4ed8",
  glow: "#60a5fa",
};

const PythonServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#2563eb",
    secondaryIndigo: "#1d4ed8",
    electricCyan: "#60a5fa",
  };

  const whyChooseItems = [
    {
      title: "Python & AI Expertise",
      desc: "Our skilled Python developers specialize in building robust web applications, data pipelines, and machine learning solutions.",
    },
    {
      title: "Customized Solutions",
      desc: "We design tailored Python and Django/FastAPI architectures aligned precisely with your unique business goals.",
    },
    {
      title: "Agile Approach",
      desc: "We follow agile methodologies for rapid iteration, continuous delivery, and transparent project tracking.",
    },
    {
      title: "Transparent Communication",
      desc: "Stay fully aligned throughout development with direct collaboration channels and regular sprint reports.",
    },
    {
      title: "On-Time Delivery",
      desc: "We respect project schedules, ensuring strict planning and deployment within agreed-upon timelines.",
    },
    {
      title: "Quality Assurance",
      desc: "Rigorously tested codebases and thorough peer reviews guarantee secure, stable, and fault-tolerant software.",
    },
  ];

  const servicesList = [
    {
      title: "Custom Python Web Development",
      desc: "We build scalable, high-performance web applications from scratch using Django, FastAPI, and Flask frameworks.",
    },
    {
      title: "AI & Machine Learning Integration",
      desc: "Integrate predictive analytics, natural language processing, and AI models seamlessly into your core software.",
    },
    {
      title: "RESTful API & Backend Development",
      desc: "Develop secure, high-throughput APIs and robust server-side engines powering web and mobile frontends.",
    },
    {
      title: "Python Migration & Upgrades",
      desc: "Seamlessly upgrade older Python applications or legacy systems to modern versions for enhanced performance and security.",
    },
    {
      title: "Data Engineering & Automation",
      desc: "Build automated web scrapers, data processing pipelines, and complex data migration scripts.",
    },
    {
      title: "Python Support & Maintenance",
      desc: "Comprehensive performance tuning, server monitoring, and continuous maintenance to keep your applications optimized.",
    },
    {
      title: "Cloud & Microservices Solutions",
      desc: "Deploy containerized Python services on AWS, Azure, or GCP using Docker and modern DevOps pipelines.",
    },
    {
      title: "Performance Optimization",
      desc: "Identify system bottlenecks, optimize database queries using ORMs, and scale concurrency for heavy workloads.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#60a5fa] selection:text-white overflow-hidden">
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
            style={{ background: `linear-gradient(90deg, #2563eb, ${theme.glow})` }}
          />

          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 shadow-sm">
                <FaPython size={16} className="shrink-0 animate-bounce" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Python Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert Python development services for scalable web apps, robust backends, and AI-driven solutions. Transform your platform today!
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #2563eb, ${theme.secondary})` }}
                >
                  <span>Hire Python Developers</span>
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
                <FaPython className="text-blue-600 dark:text-blue-500 transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Zap size={20} />,
              title: "Rapid Development",
              desc: "Leverage Python's clean syntax and extensive ecosystem of frameworks to build and launch software products faster.",
            },
            {
              icon: <Workflow size={20} />,
              title: "AI & Data Ready",
              desc: "Seamlessly integrate advanced machine learning models, data analytics, and automation workflows into your core application.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Secure & Scalable",
              desc: "Enterprise-grade backend security and high concurrency support using powerful frameworks like Django and FastAPI.",
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
              <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-blue-500 transition-colors duration-200">{feature.title}</h3>
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
              Power Your Applications with the Best Python Development Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-blue-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to leverage Python's versatility and AI capabilities for your digital products? Look no further! As a premier Python Development Company, our expert team builds dynamic, secure, and intelligent web applications.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your vision and discover what Python can achieve for your organization!
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
            Build innovative solutions with Python
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
              As a Python Development Company in India, we deliver unmatched versatility across web backends, data science, and artificial intelligence systems. Python provides clean, readable code architecture that cuts down development time while maintaining enterprise-grade security and modular expandability.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-lg transition-transform duration-300"
            >
              By partnering with our Python development team, you ensure a high-performing backend infrastructure capable of scaling smoothly alongside evolving market demands and user traffic.
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

export default PythonServicesPage;
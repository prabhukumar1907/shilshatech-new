import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#ea580c", // Java Orange/Red
  secondary: "#c2410c",
  glow: "#fb923c",
};

const JavaServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#ea580c",
    secondaryIndigo: "#c2410c",
    electricCyan: "#fb923c",
  };

  const whyChooseItems = [
    {
      title: "Deep Technical Expertise",
      desc: "Our seasoned Java developers bring years of experience building secure, high-performance enterprise applications.",
    },
    {
      title: "Tailored Architecture",
      desc: "We design custom Java solutions aligned with your unique business goals, ensuring flexibility and long-term scalability.",
    },
    {
      title: "Agile Development",
      desc: "We utilize agile methodologies for rapid iteration, continuous delivery, and transparent project milestones.",
    },
    {
      title: "Transparent Communication",
      desc: "Stay fully informed throughout the lifecycle with regular sprint updates and direct collaboration channels.",
    },
    {
      title: "On-Time Delivery",
      desc: "We respect deadlines and follow strict project management to deliver robust software solutions on schedule.",
    },
    {
      title: "Uncompromising Quality",
      desc: "Our rigorous QA and code review protocols ensure secure, stable, and fault-tolerant Java applications.",
    },
  ];

  const servicesList = [
    {
      title: "Custom Java Development",
      desc: "We build enterprise-grade, scalable applications from the ground up tailored to complex business requirements.",
    },
    {
      title: "Spring Boot & Microservices",
      desc: "Develop modern, decoupled microservices architectures using Spring Boot and Spring Cloud for high availability.",
    },
    {
      title: "Enterprise Application Integration",
      desc: "Seamlessly integrate third-party systems, legacy software, and APIs into a cohesive Java ecosystem.",
    },
    {
      title: "Java Migration & Modernization",
      desc: "Upgrade legacy Java systems or older frameworks to modern versions for enhanced speed, security, and support.",
    },
    {
      title: "Cloud-Native Java Solutions",
      desc: "Deploy scalable Java applications on AWS, Azure, or GCP using containerization tools like Docker and Kubernetes.",
    },
    {
      title: "Java Support & Maintenance",
      desc: "Comprehensive monitoring, performance tuning, and continuous maintenance to keep your applications secure and running.",
    },
    {
      title: "API & Backend Development",
      desc: "Build secure, high-throughput RESTful APIs and robust backend engines powering web and mobile frontends.",
    },
    {
      title: "Performance Optimization",
      desc: "Identify bottlenecks, optimize JVM memory usage, and drastically improve execution speed for high-load systems.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#fb923c] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-orange-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #ea580c, ${theme.glow})` }}
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
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20 shadow-sm">
                <FaJava size={14} className="shrink-0 animate-bounce" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Java Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert Java development services for secure, enterprise-grade web solutions. Transform your business architecture today!
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #ea580c, ${theme.secondary})` }}
                >
                  <span>Hire Java Developers</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-orange-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaJava className="text-orange-500 animate-pulse transition-transform duration-500 group-hover:scale-110" size={140} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Zap size={20} />,
              title: "High Performance",
              desc: "Leverage optimized JVM execution and multi-threading capabilities to build ultra-fast, high-throughput enterprise systems.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Robust Architecture",
              desc: "Object-oriented design patterns and secure frameworks ensure clean code maintainability, reusability, and stability.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Enterprise Security",
              desc: "Built-in security features, robust access controls, and reliable error-handling make Java ideal for mission-critical applications.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-orange-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-orange-500 transition-colors duration-200">{feature.title}</h3>
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
              Power Your Enterprise with the Best Java Development Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-orange-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to leverage Java's unmatched security and scalability for your enterprise applications? Look no further! As a premier Java Development Company, our expert team builds robust, reliable, and secure software solutions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your architecture requirements and discover what Java can achieve for your organization!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-orange-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Build enterprise-grade applications with Java
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-orange-500/20 shadow-lg transition-transform duration-300"
            >
              As a Java Development Company in India, we deliver massive advantages for corporate infrastructure. Java provides exceptional cross-platform portability through the JVM, ensuring consistent execution across diverse environments. Its extensive ecosystem of frameworks, including Spring Boot and Hibernate, accelerates backend development while maintaining high standards of data security and transaction safety.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-orange-500/20 shadow-lg transition-transform duration-300"
            >
              By choosing our Java development services, you guarantee a resilient system architecture that scales seamlessly alongside growing user loads and business expansion.
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

export default JavaServicesPage;
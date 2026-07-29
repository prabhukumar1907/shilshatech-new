import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#16a34a", // Node.js Green
  secondary: "#15803d",
  glow: "#4ade80",
};

const NodeJsServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#16a34a",
    secondaryIndigo: "#15803d",
    electricCyan: "#4ade80",
  };

  const whyChooseItems = [
    {
      title: "Backend Excellence",
      desc: "Our expert Node.js developers specialize in creating fast, scalable, and network-intensive backend applications.",
    },
    {
      title: "Customized API Solutions",
      desc: "We design tailored RESTful and GraphQL APIs to seamlessly connect your frontend applications and third-party services.",
    },
    {
      title: "Agile Delivery",
      desc: "We practice agile methodologies to ensure rapid prototyping, continuous feedback, and timely project delivery.",
    },
    {
      title: "Transparent Communication",
      desc: "Keep fully aligned with development milestones through continuous progress reports and open communication channels.",
    },
    {
      title: "On-Time Execution",
      desc: "We respect your timelines, ensuring rigorous sprint planning and deployment within agreed-upon schedules.",
    },
    {
      title: "Quality Assurance",
      desc: "Stringent testing and robust code reviews guarantee secure, high-performing, and fault-tolerant server-side logic.",
    },
  ];

  const servicesList = [
    {
      title: "Custom Node.js Development",
      desc: "We build scalable, high-performance server-side applications from scratch tailored to your exact business requirements.",
    },
    {
      title: "RESTful API & GraphQL Development",
      desc: "Develop robust, secure, and lightning-fast APIs to handle massive data exchange smoothly.",
    },
    {
      title: "Real-Time Application Development",
      desc: "Leverage WebSockets and Socket.io to build real-time collaborative tools, chat apps, and live streaming solutions.",
    },
    {
      title: "Microservices Architecture",
      desc: "Design modular and decoupled microservices using Node.js for enhanced flexibility and independent scalability.",
    },
    {
      title: "Node.js Migration & Upgrades",
      desc: "Seamlessly upgrade your legacy backend or older Node versions to the latest secure and high-speed runtime releases.",
    },
    {
      title: "Node.js Support & Maintenance",
      desc: "Comprehensive monitoring, performance profiling, and continuous maintenance to keep your servers running without downtime.",
    },
    {
      title: "Third-Party Integration",
      desc: "Integrate complex payment gateways, cloud services, and external APIs into your Node.js ecosystem securely.",
    },
    {
      title: "Performance Optimization",
      desc: "Identify event loop bottlenecks, optimize database queries, and drastically improve server throughput.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#4ade80] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-green-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #16a34a, ${theme.glow})` }}
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
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400 border border-green-200 dark:border-green-500/20 shadow-sm">
                <FaNodeJs size={16} className="shrink-0 animate-pulse" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Node.js Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert Node.js development services for fast, scalable, and real-time backend solutions. Transform your web infrastructure today!
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #16a34a, ${theme.secondary})` }}
                >
                  <span>Hire Node.js Developers</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-green-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaNodeJs className="text-green-600 dark:text-green-500 transition-transform duration-500 group-hover:scale-110" size={140} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Zap size={20} />,
              title: "Blazing Fast Performance",
              desc: "Powered by Chrome's V8 engine and asynchronous non-blocking I/O model for exceptionally quick request handling.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Real-Time Capabilities",
              desc: "Build highly responsive real-time applications like chat platforms and live dashboards using event-driven architecture.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Scalable Ecosystem",
              desc: "Easily scale applications horizontally or vertically with robust package management (npm) and microservices support.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-green-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-green-500 transition-colors duration-200">{feature.title}</h3>
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
              Power Your Backend with the Best Node.js Development Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-green-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to leverage Node.js for high-speed, scalable server-side execution? Look no further! As a premier Node.js Development Company, our expert team builds robust, real-time backend systems and APIs.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your server requirements and discover what Node.js can achieve for your web application!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-green-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Build scalable applications with Node.js
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-green-500/20 shadow-lg transition-transform duration-300"
            >
              As a Node.js Development Company in India, we empower businesses with lightning-fast runtime performance and unified JavaScript development across the full stack. Node.js excels in handling concurrent connections efficiently without lagging, making it the top choice for enterprise data streams, single-page applications, and high-load APIs.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-green-500/20 shadow-lg transition-transform duration-300"
            >
              By partnering with our Node.js development team, you ensure an agile, maintainable, and highly responsive backend infrastructure that scales effortlessly with your user growth.
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

export default NodeJsServicesPage;
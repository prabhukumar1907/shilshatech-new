import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaLaravel } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#f9322c", // Laravel Red
  secondary: "#d92b25",
  glow: "#ff6b65",
};

const LaravelServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#f9322c",
    secondaryIndigo: "#d92b25",
    electricCyan: "#ff6b65",
  };

  const whyChooseItems = [
    {
      title: "PHP & Laravel Mastery",
      desc: "Our expert Laravel developers bring deep experience in building secure, elegant, and high-performance web applications.",
    },
    {
      title: "Customized Web Solutions",
      desc: "We design tailored Laravel architectures aligned with your specific business goals, ensuring flexibility and rapid scaling.",
    },
    {
      title: "Agile Development",
      desc: "We practice agile methodologies for rapid iteration, continuous delivery, and transparent project tracking.",
    },
    {
      title: "Transparent Communication",
      desc: "Stay fully aligned throughout development with direct collaboration channels and regular sprint reports.",
    },
    {
      title: "On-Time Execution",
      desc: "We respect your project deadlines, ensuring structured sprint planning and timely deployment.",
    },
    {
      title: "Rigorous Quality Assurance",
      desc: "Comprehensive testing and robust code reviews guarantee secure, stable, and bug-free web solutions.",
    },
  ];

  const servicesList = [
    {
      title: "Custom Laravel Development",
      desc: "We build scalable, feature-rich web applications from scratch tailored to your exact business requirements.",
    },
    {
      title: "RESTful API & Backend Services",
      desc: "Develop robust, secure, and lightning-fast APIs powering web and mobile frontends efficiently.",
    },
    {
      title: "Laravel Package & Module Development",
      desc: "Create reusable custom packages and modules to extend your Laravel application capabilities.",
    },
    {
      title: "Legacy Application Migration",
      desc: "Seamlessly upgrade older PHP applications or legacy systems to the latest secure versions of Laravel.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Build secure, high-conversion e-commerce platforms using Laravel ecosystem tools like Livewire and Inertia.js.",
    },
    {
      title: "Laravel Support & Maintenance",
      desc: "Comprehensive performance tuning, security monitoring, and continuous maintenance to keep your site optimized.",
    },
    {
      title: "Third-Party API Integration",
      desc: "Integrate payment gateways, CRM systems, cloud storage, and external services securely into your Laravel app.",
    },
    {
      title: "Performance Optimization",
      desc: "Optimize database queries, configure caching layers, and speed up page load times for heavy traffic volumes.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#ff6b65] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-red-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #f9322c, ${theme.glow})` }}
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
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-500/20 shadow-sm">
                <FaLaravel size={16} className="shrink-0 animate-bounce" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Laravel Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert Laravel development services for secure, elegant, and high-performance web applications. Transform your digital web solutions today!
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #f9322c, ${theme.secondary})` }}
                >
                  <span>Hire Laravel Developers</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-red-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaLaravel className="text-red-600 dark:text-red-500 transition-transform duration-500 group-hover:scale-110" size={130} />
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
              desc: "Leverage Laravel's expressive syntax and rich ecosystem tools to build robust applications in record time.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Elegant Architecture",
              desc: "Built on MVC architecture with powerful ORM (Eloquent) ensuring clean, modular, and maintainable codebase structure.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Built-in Security",
              desc: "Robust protection against SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-red-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-red-500 transition-colors duration-200">{feature.title}</h3>
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
              Power Your Web Applications with the Best Laravel Development Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-red-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to leverage Laravel's elegant syntax and speed for your business web platform? Look no further! As a premier Laravel Development Company, our expert team builds secure, scalable, and feature-rich web applications.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your project specifications and discover what Laravel can achieve for your organization!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-red-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Build feature-rich applications with Laravel
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-red-500/20 shadow-lg transition-transform duration-300"
            >
              As a Laravel Development Company in India, we deliver massive advantages for digital web products. Laravel provides an intuitive MVC framework, built-in authorization mechanisms, and a vast ecosystem of tools like Forge and Vapor that streamline deployment and maintenance while maintaining high security standards.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-red-500/20 shadow-lg transition-transform duration-300"
            >
              By partnering with our Laravel development team, you ensure a reliable, scalable, and highly maintainable web architecture that expands effortlessly alongside your business user growth.
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

export default LaravelServicesPage;
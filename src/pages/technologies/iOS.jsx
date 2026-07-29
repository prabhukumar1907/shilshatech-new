import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#475569", // iOS Slate / Dark Neutral
  secondary: "#334155",
  glow: "#94a3b8",
};

const IOSServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#0f172a",
    secondaryIndigo: "#334155",
    electricCyan: "#64748b",
  };

  const whyChooseItems = [
    {
      title: "iOS Native Expertise",
      desc: "Our expert iOS developers specialize in Swift and SwiftUI to build lightning-fast, highly secure iPhone and iPad applications.",
    },
    {
      title: "Apple Guidelines",
      desc: "We strictly adhere to Apple's Human Interface Guidelines to ensure fluid navigation and gorgeous UI aesthetics.",
    },
    {
      title: "Agile Development",
      desc: "We practice agile methodologies for rapid iteration, continuous testing, and transparent milestone tracking.",
    },
    {
      title: "Transparent Communication",
      desc: "Stay fully aligned throughout development with direct collaboration channels and regular sprint reports.",
    },
    {
      title: "On-Time Execution",
      desc: "We respect deadlines, ensuring structured sprint planning and smooth App Store deployment.",
    },
    {
      title: "Rigorous Quality Testing",
      desc: "Comprehensive testing across iOS devices guarantees unmatched stability and performance.",
    },
  ];

  const servicesList = [
    {
      title: "Custom iOS App Development",
      desc: "Build feature-rich, high-performance native iOS applications from scratch using Swift and SwiftUI.",
    },
    {
      title: "SwiftUI Migration Services",
      desc: "Upgrade legacy Objective-C or older Swift apps to modern SwiftUI frameworks for cleaner code and better rendering.",
    },
    {
      title: "iOS UI/UX Design",
      desc: "Design intuitive, elegant interfaces that provide an exceptional user experience across iPhones, iPads, and Apple Watches.",
    },
    {
      title: "API & Backend Integration",
      desc: "Connect your iOS app securely with cloud databases, RESTful APIs, and enterprise server infrastructure.",
    },
    {
      title: "Apple Watch & iPad Companion Apps",
      desc: "Expand your product ecosystem with tailored companion apps for watchOS and iPadOS.",
    },
    {
      title: "App Store Submission & Optimization",
      desc: "Manage the complete review and submission lifecycle to guarantee quick approval on the Apple App Store.",
    },
    {
      title: "iOS App Support & Maintenance",
      desc: "Provide ongoing monitoring, performance tuning, iOS version updates, and continuous enhancements.",
    },
    {
      title: "Performance Profiling",
      desc: "Identify memory leaks, optimize CPU usage, and ensure buttery-smooth 120Hz animations.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#94a3b8] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #475569, #cbd5e1)` }}
          />

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: '#94a3b8' }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                <FaApple size={16} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                iOS App Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert iOS app development services using Swift for secure, elegant, and high-performance Apple ecosystem applications. Transform your mobile vision today!
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800"
                >
                  <span>Hire iOS Developers</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaApple className="text-slate-800 dark:text-slate-200 transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Zap size={20} />,
              title: "Native Swift Performance",
              desc: "Built using Apple's modern Swift language for lightning-fast execution speed and maximum hardware optimization.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Exceptional UI/UX",
              desc: "Stunning, fluid animations and designs built with SwiftUI adhering to Apple's pristine design principles.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Top-Tier Security",
              desc: "Apple's rigorous security architecture combined with advanced encryption to protect sensitive enterprise data.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">{feature.title}</h3>
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
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-snug text-slate-900 dark:text-white"
            >
              Conquer the App Store with the Best iOS Development Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40 bg-linear-to-r from-slate-700 to-slate-400" 
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to target high-value users on iPhones and iPads? Look no further! As a premier iOS App Development Company, our expert team builds secure, feature-rich native applications for the Apple ecosystem.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your app specifications and discover what iOS native development can achieve for your organization!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Build premium mobile experiences with iOS
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-slate-700 shadow-lg transition-transform duration-300"
            >
              As an iOS Development Company in India, we empower businesses to connect with high-intent mobile users. Native iOS applications guarantee seamless performance, exceptional security standards, and full access to advanced Apple hardware capabilities like Face ID, ARKit, and CoreML.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-slate-700 shadow-lg transition-transform duration-300"
            >
              Partner with our expert iOS engineers to craft a world-class application that shines on the Apple App Store and drives measurable business growth.
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

export default IOSServicesPage;
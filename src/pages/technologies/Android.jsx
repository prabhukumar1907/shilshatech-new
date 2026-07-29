import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaAndroid } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#16a34a", // Android Green
  secondary: "#15803d",
  glow: "#4ade80",
};

const AndroidServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#16a34a",
    secondaryIndigo: "#15803d",
    electricCyan: "#4ade80",
  };

  const whyChooseItems = [
    {
      title: "Android Native Experts",
      desc: "Our dedicated Android developers specialize in Kotlin and Java to build secure, feature-packed mobile applications.",
    },
    {
      title: "Customized UI/UX",
      desc: "We follow Material Design guidelines to craft fluid, intuitive interfaces tailored specifically for Android users.",
    },
    {
      title: "Agile Approach",
      desc: "We use agile workflows for rapid iterations, continuous testing, and on-time project delivery.",
    },
    {
      title: "Transparent Communication",
      desc: "Stay updated throughout the entire development cycle with direct collaboration and sprint reports.",
    },
    {
      title: "On-Time Deployment",
      desc: "We respect schedules, ensuring strict milestone planning and Google Play compliance.",
    },
    {
      title: "Comprehensive Testing",
      desc: "Rigorous testing across multiple screen sizes and Android OS versions ensures maximum stability.",
    },
  ];

  const servicesList = [
    {
      title: "Custom Android App Development",
      desc: "Build highly responsive, scalable native Android applications from scratch using Kotlin and modern Android Jetpack libraries.",
    },
    {
      title: "Kotlin Migration Services",
      desc: "Upgrade legacy Java-based Android apps to modern Kotlin for cleaner code, better safety, and faster performance.",
    },
    {
      title: "Android UI/UX Design",
      desc: "Design stunning interfaces adhering strictly to Google's Material Design system for optimal user engagement.",
    },
    {
      title: "API & Backend Integration",
      desc: "Connect your Android app securely with cloud databases, RESTful web services, and third-party APIs.",
    },
    {
      title: "Android Wear & IoT Integration",
      desc: "Expand your mobile ecosystem by building companion apps for smartwatches, IoT devices, and Android TVs.",
    },
    {
      title: "Google Play Store Optimization & Publishing",
      desc: "Ensure seamless deployment, compliance with Google guidelines, and top visibility on the Play Store.",
    },
    {
      title: "Android App Support & Maintenance",
      desc: "Provide continuous monitoring, performance tuning, OS compatibility updates, and feature upgrades.",
    },
    {
      title: "Performance Optimization",
      desc: "Reduce battery consumption, eliminate memory leaks, and maximize execution frame rates.",
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

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400 border border-green-200 dark:border-green-500/20 shadow-sm">
                <FaAndroid size={16} className="shrink-0 animate-bounce" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Android App Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert Android app development services using Kotlin for high-performing, feature-rich mobile solutions. Transform your business mobile strategy today!
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
                  <span>Hire Android Developers</span>
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
                <FaAndroid className="text-green-600 dark:text-green-500 transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Zap size={20} />,
              title: "Native Optimization",
              desc: "Built with Kotlin and Jetpack Compose to ensure maximum device hardware utilization and silky-smooth rendering.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Material Design",
              desc: "Create beautiful, accessible interfaces adhering to Google's rigorous design guidelines for incredible user experiences.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Enterprise Security",
              desc: "Advanced data encryption, secure storage, and robust permissions management safeguarding user privacy.",
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
              Dominate the Play Store with the Best Android Development Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-green-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to capture the massive Android user base with a powerful app? Look no further! As a premier Android App Development Company, our expert team builds high-performance native applications.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your mobile project and discover what Android native development can achieve for your business!
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
            Build industry-leading apps with Android
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
              As an Android Development Company in India, we provide deep expertise across the entire Android OS ecosystem. Native Android apps deliver unrivaled performance, direct hardware access, and deep integration with device features, offering your customers a frictionless experience.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-green-500/20 shadow-lg transition-transform duration-300"
            >
              Partner with our dedicated Android developers to create secure, scalable, and beautifully designed mobile apps that stand out in the Google Play Store.
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

export default AndroidServicesPage;
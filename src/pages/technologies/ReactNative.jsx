import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#0284c7", // React Native Cyan/Blue
  secondary: "#0369a1",
  glow: "#38bdf8",
};

const ReactNativeServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#0284c7",
    secondaryIndigo: "#0369a1",
    electricCyan: "#38bdf8",
  };

  const whyChooseItems = [
    {
      title: "Cross-Platform Mastery",
      desc: "Our expert React Native developers build high-performance mobile apps for both iOS and Android using a single codebase.",
    },
    {
      title: "Native Performance",
      desc: "We leverage native bridges and optimized components to ensure your mobile app runs smoothly with near-native execution speed.",
    },
    {
      title: "Agile Execution",
      desc: "We follow agile development methodologies for rapid prototyping, continuous feedback, and timely milestone delivery.",
    },
    {
      title: "Transparent Communication",
      desc: "Stay fully aligned throughout the app lifecycle with regular progress updates and direct collaboration.",
    },
    {
      title: "On-Time Delivery",
      desc: "We respect project schedules, ensuring rigorous planning and deployment within agreed-upon timelines.",
    },
    {
      title: "Rigorous QA & Testing",
      desc: "Comprehensive multi-device testing guarantees secure, stable, and bug-free mobile experiences.",
    },
  ];

  const servicesList = [
    {
      title: "Custom React Native App Development",
      desc: "Build feature-rich, high-performance cross-platform mobile applications tailored to your exact business specifications.",
    },
    {
      title: "Cross-Platform Migration",
      desc: "Migrate existing native iOS or Android apps seamlessly to React Native to reduce maintenance costs and time-to-market.",
    },
    {
      title: "React Native UI/UX Design",
      desc: "Craft intuitive, responsive, and gorgeous user interfaces optimized for both iOS and Android human interface guidelines.",
    },
    {
      title: "API & Backend Integration",
      desc: "Connect your mobile app smoothly with secure RESTful APIs, GraphQL backends, and cloud databases.",
    },
    {
      title: "Third-Party Module Integration",
      desc: "Integrate payment gateways, push notifications, maps, and device hardware sensors into your React Native app.",
    },
    {
      title: "App Store & Google Play Deployment",
      desc: "Manage the complete publishing lifecycle, ensuring compliance with Apple App Store and Google Play Store guidelines.",
    },
    {
      title: "React Native App Support & Maintenance",
      desc: "Provide ongoing performance tuning, OS version updates, bug fixes, and continuous feature enhancements.",
    },
    {
      title: "Performance Optimization",
      desc: "Profile app bottlenecks, optimize bridge communications, and ensure seamless 60fps animations.",
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
          className="relative rounded-3xl border border-slate-200/80 dark:border-sky-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #0284c7, ${theme.glow})` }}
          />

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 shadow-sm">
                <FaReact size={16} className="shrink-0 animate-spin" style={{ animationDuration: '10s' }} />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                React Native Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert React Native development services for cross-platform mobile apps with native performance. Transform your mobile presence today!
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #0284c7, ${theme.secondary})` }}
                >
                  <span>Hire React Native Developers</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-sky-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaReact className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-500 group-hover:scale-110 animate-spin" style={{ animationDuration: '20s', fontSize: '130px' }} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Zap size={20} />,
              title: "Single Codebase",
              desc: "Write once and deploy seamlessly across both iOS and Android platforms, cutting development time and costs significantly.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Near-Native Performance",
              desc: "Render native UI components directly via JavaScript bridges for an authentic user experience on all devices.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Robust Ecosystem",
              desc: "Leverage a massive library of plugins, packages, and community support for rapid feature implementation.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-sky-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-sky-500 transition-colors duration-200">{feature.title}</h3>
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
              Build Cross-Platform Apps with the Best React Native Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-sky-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to launch mobile applications for both iOS and Android efficiently? Look no further! As a premier React Native development partner, our expert team builds top-tier cross-platform mobile apps.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your app concept and discover what React Native can accomplish for your enterprise!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-sky-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Empower your business with React Native apps
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-sky-500/20 shadow-lg transition-transform duration-300"
            >
              As a React Native Development Company in India, we deliver massive cost efficiency and speed. Instead of maintaining separate codebases for iOS and Android, React Native enables us to share up to 90% of the code logic while preserving native UI look and feel, lowering maintenance overhead.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-sky-500/20 shadow-lg transition-transform duration-300"
            >
              Partner with our expert developers to build a high-performance mobile solution that engages users on all major app stores simultaneously.
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

export default ReactNativeServicesPage;
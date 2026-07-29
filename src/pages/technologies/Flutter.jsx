import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { RiFlutterFill } from "react-icons/ri";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#0284c7", // Flutter Blue / Sky Cyan
  secondary: "#0369a1",
  glow: "#38bdf8",
};

const FlutterServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#0284c7",
    secondaryIndigo: "#0369a1",
    electricCyan: "#38bdf8",
  };

  const whyChooseItems = [
    {
      title: "Flutter & Dart Experts",
      desc: "Our skilled Flutter developers specialize in building gorgeous, high-performance cross-platform apps using a single codebase.",
    },
    {
      title: "Custom Widget Design",
      desc: "We craft custom, pixel-perfect widgets that offer consistent native-like rendering across both iOS and Android platforms.",
    },
    {
      title: "Agile Development",
      desc: "We follow agile methodologies for rapid prototyping, continuous feedback, and timely project milestone delivery.",
    },
    {
      title: "Transparent Communication",
      desc: "Stay fully aligned throughout development with direct collaboration channels and regular sprint reports.",
    },
    {
      title: "On-Time Execution",
      desc: "We respect project deadlines, ensuring structured sprint planning and smooth store deployment.",
    },
    {
      title: "Rigorous Quality Testing",
      desc: "Comprehensive testing across multiple device configurations guarantees secure, stable, and bug-free apps.",
    },
  ];

  const servicesList = [
    {
      title: "Custom Flutter App Development",
      desc: "Build feature-rich, high-performance cross-platform mobile apps from scratch tailored to your exact business needs.",
    },
    {
      title: "Cross-Platform Migration",
      desc: "Migrate existing native or hybrid mobile applications smoothly to Flutter for lower maintenance costs and faster performance.",
    },
    {
      title: "Flutter UI/UX & Widget Design",
      desc: "Design stunning, highly reactive user interfaces using Flutter's rich library of customizable material and Cupertino widgets.",
    },
    {
      title: "API & Backend Integration",
      desc: "Connect your Flutter mobile app seamlessly with secure RESTful APIs, GraphQL, and cloud databases.",
    },
    {
      title: "Third-Party SDK Integration",
      desc: "Integrate payment gateways, maps, push notifications, and device sensors effortlessly into your Flutter app.",
    },
    {
      title: "App Store & Play Store Publishing",
      desc: "Manage the complete publishing lifecycle to ensure rapid compliance and approval on both Apple and Google stores.",
    },
    {
      title: "Flutter App Support & Maintenance",
      desc: "Provide ongoing performance optimization, OS updates, bug fixes, and continuous feature expansion.",
    },
    {
      title: "Performance Optimization",
      desc: "Optimize widget rebuilds, streamline state management, and ensure fluid 60fps animations.",
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
                <RiFlutterFill size={16} className="shrink-0 animate-bounce" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Flutter Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert Flutter development services for lightning-fast, beautiful cross-platform mobile apps. Transform your mobile product strategy today!
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
                  <span>Hire Flutter Developers</span>
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
                <RiFlutterFill className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Zap size={20} />,
              title: "Lightning-Fast Execution",
              desc: "Compiled directly to native machine code using Google's Dart language for incredible 60fps performance.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Single Codebase",
              desc: "Develop and deploy gorgeous, feature-rich apps simultaneously across iOS, Android, and web platforms.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Custom Widgets",
              desc: "Leverage a rich suite of pre-designed widgets that offer pixel-perfect rendering and brand consistency.",
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
              Build Cross-Platform Apps with the Best Flutter Development Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-sky-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to leverage Google's Flutter framework for fast, expressive, and scalable mobile apps? Look no further! As a premier Flutter Development Company, our expert team builds top-tier cross-platform solutions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your mobile application concept and discover what Flutter can achieve for your business!
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
            Build stunning applications with Flutter
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
              As a Flutter Development Company in India, we deliver exceptional advantages for modern startups and enterprises. Flutter allows simultaneous deployment across iOS and Android from a single codebase, significantly accelerating time-to-market while keeping UI consistency immaculate across all screen types.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-sky-500/20 shadow-lg transition-transform duration-300"
            >
              Partner with our expert Flutter developers to guarantee a high-performance, visually striking mobile app that engages customers across both major app ecosystems.
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

export default FlutterServicesPage;
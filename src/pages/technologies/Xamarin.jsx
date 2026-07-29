import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#6366f1", // .NET MAUI Indigo/Purple
  secondary: "#4338ca",
  glow: "#818cf8",
};

const DotNetMauiServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#4f46e5",
    secondaryIndigo: "#3730a3",
    electricCyan: "#818cf8",
  };

  const whyChooseItems = [
    {
      title: "Expert Xamarin Migration",
      desc: "Xamarin reached End-of-Life in May 2024. Our experts ensure a smooth, secure migration of your legacy apps to .NET MAUI.",
    },
    {
      title: "C# & .NET Mastery",
      desc: "Leverage our deep expertise in the .NET ecosystem to share business logic seamlessly across iOS, Android, macOS, and Windows.",
    },
    {
      title: "Native UI Performance",
      desc: "We utilize .NET MAUI's handler architecture to deliver blazing-fast, pixel-perfect native user interfaces on every platform.",
    },
    {
      title: "Agile & Transparent",
      desc: "Stay fully aligned throughout the development or migration lifecycle with direct collaboration and regular sprint reports.",
    },
    {
      title: "Future-Proof Architecture",
      desc: "Ensure your apps comply with the latest Apple App Store and Google Play SDK requirements with modern Microsoft frameworks.",
    },
    {
      title: "Rigorous QA Testing",
      desc: "Comprehensive testing across multiple device configurations guarantees secure, stable, and flawless cross-platform apps.",
    },
  ];

  const servicesList = [
    {
      title: "Legacy Xamarin to .NET MAUI Migration",
      desc: "Rescue your unsupported Xamarin.Forms apps. We migrate custom renderers to modern handlers and update your core logic to .NET 8+.",
    },
    {
      title: "Custom .NET MAUI Development",
      desc: "Build highly scalable, cross-platform mobile and desktop applications from scratch using a single C# codebase.",
    },
    {
      title: "Enterprise Mobile Solutions",
      desc: "Develop secure, robust internal business applications that integrate flawlessly with your existing Microsoft Azure and .NET backend infrastructure.",
    },
    {
      title: "UI/UX Modernization",
      desc: "Upgrade outdated Xamarin interfaces with modern, fluid, and accessible designs utilizing .NET MAUI's enhanced control library.",
    },
    {
      title: "API & Azure Cloud Integration",
      desc: "Connect your mobile application securely with REST APIs, gRPC, Entity Framework, and Azure cloud services.",
    },
    {
      title: "App Store Deployment & Compliance",
      desc: "Navigate strict App Store and Google Play guidelines seamlessly, ensuring your modernized apps are approved instantly.",
    },
    {
      title: "Third-Party Component Upgrades",
      desc: "Replace deprecated Xamarin third-party libraries (like Syncfusion or Telerik) with fully supported .NET MAUI equivalents.",
    },
    {
      title: "Ongoing Maintenance & Support",
      desc: "Keep your application secure, performant, and compliant with annual OS updates and continuous feature enhancements.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#818cf8] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-indigo-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #4f46e5, ${theme.glow})` }}
          />

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 shadow-sm">
                <SiDotnet size={16} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                .NET MAUI & Xamarin Migration Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies specializes in rescuing legacy Xamarin apps and building next-generation cross-platform solutions with .NET MAUI. Secure your mobile future today!
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` }}
                >
                  <span>Hire .NET MAUI Developers</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-indigo-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <SiDotnet className="text-[#4f46e5] dark:text-[#818cf8] transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <RefreshCw size={20} />,
              title: "Seamless Migration",
              desc: "Safely transition from deprecated Xamarin architectures to modern .NET frameworks without losing core business logic.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Unified C# Codebase",
              desc: "Target iOS, Android, macOS, and Windows from a single highly-maintainable project structure.",
            },
            {
              icon: <Zap size={20} />,
              title: "Enhanced Performance",
              desc: "Leverage .NET 8 and optimized UI handlers for significantly faster startup times and smoother animations than legacy Xamarin.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-indigo-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-indigo-500 transition-colors duration-200">{feature.title}</h3>
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
              Modernize Your Mobile Strategy with the Best .NET MAUI Agency in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-indigo-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                With official support for Xamarin ended in May 2024, businesses face critical risks regarding app store compliance and security. As a premier .NET development partner, Shilsha Technologies specializes in smoothly migrating your legacy Xamarin applications to .NET MAUI.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Whether you need to rescue an existing Xamarin app or build a powerful new cross-platform product natively in C#, contact us today to discuss your Microsoft mobility strategy!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-indigo-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Future-Proof your Enterprise Apps
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-indigo-500/20 shadow-lg transition-transform duration-300"
            >
              As a .NET MAUI Development Company in India, we empower enterprises heavily invested in the Microsoft ecosystem. .NET MAUI represents the evolution of Xamarin.Forms, allowing developers to target mobile and desktop from a single project structure while delivering drastically improved UI performance and smaller app sizes.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-indigo-500/20 shadow-lg transition-transform duration-300"
            >
              Partner with our expert .NET engineers to ensure your business-critical applications remain secure, scalable, and fully compatible with the latest iOS and Android operating systems.
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

export default DotNetMauiServicesPage;
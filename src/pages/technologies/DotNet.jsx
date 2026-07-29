import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#512bd4", // .NET Purple
  secondary: "#3c1fb8",
  glow: "#818cf8",
};

const DotNetServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#512bd4",
    secondaryIndigo: "#3c1fb8",
    electricCyan: "#818cf8",
  };

  const whyChooseItems = [
    {
      title: "Microsoft Tech Expertise",
      desc: "Our seasoned .NET developers bring deep domain knowledge in building secure, high-performance enterprise applications.",
    },
    {
      title: "Customized Solutions",
      desc: "We design tailored .NET architectures aligned with your specific business goals, ensuring long-term flexibility.",
    },
    {
      title: "Agile Execution",
      desc: "We follow agile development methodologies for rapid iterations, continuous feedback, and transparent milestones.",
    },
    {
      title: "Transparent Communication",
      desc: "Stay fully aligned throughout the project lifecycle with regular sprint updates and direct collaboration.",
    },
    {
      title: "On-Time Delivery",
      desc: "We respect project schedules, ensuring rigorous planning and deployment within agreed-upon timelines.",
    },
    {
      title: "Quality Assurance",
      desc: "Stringent code reviews and automated testing protocols guarantee secure, stable, and fault-tolerant software.",
    },
  ];

  const servicesList = [
    {
      title: "Custom .NET Development",
      desc: "We build scalable, enterprise-grade web applications from scratch using .NET Core and modern C# practices.",
    },
    {
      title: "ASP.NET Core Web APIs",
      desc: "Develop secure, high-throughput RESTful APIs and backend services powering web, mobile, and desktop clients.",
    },
    {
      title: "Enterprise Application Integration",
      desc: "Seamlessly integrate legacy systems, third-party software, and cloud microservices into a cohesive .NET ecosystem.",
    },
    {
      title: ".NET Migration & Modernization",
      desc: "Upgrade legacy .NET Framework applications to modern .NET Core / .NET 8+ versions for enhanced speed and security.",
    },
    {
      title: "Cloud-Native .NET Solutions",
      desc: "Deploy robust containerized .NET applications on Azure or AWS using Docker and Kubernetes architectures.",
    },
    {
      title: ".NET Support & Maintenance",
      desc: "Comprehensive monitoring, performance optimization, and continuous support to keep your platforms running smoothly.",
    },
    {
      title: "Microservices Architecture",
      desc: "Design modular, independent microservices using .NET for high availability and enterprise scalability.",
    },
    {
      title: "Performance Tuning",
      desc: "Identify system bottlenecks, optimize database queries, and drastically improve execution throughput.",
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
            style={{ background: `linear-gradient(90deg, #512bd4, ${theme.glow})` }}
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
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 shadow-sm">
                <SiDotnet size={16} className="shrink-0 animate-pulse" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                .NET Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert .NET development services for secure, high-performance enterprise web applications. Transform your digital infrastructure today!
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #512bd4, ${theme.secondary})` }}
                >
                  <span>Hire .NET Developers</span>
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
                <SiDotnet className="text-[#512bd4] dark:text-[#818cf8] transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Zap size={20} />,
              title: "Exceptional Speed",
              desc: "Built on modern .NET runtimes optimized for lightning-fast compilation, low memory footprint, and high-load capacity.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Modern Architecture",
              desc: "Leverage cross-platform cloud support, modular microservices design, and robust C# object-oriented programming patterns.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Enterprise Security",
              desc: "Built-in protection mechanisms, identity management frameworks, and reliable controls ideal for mission-critical operations.",
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
              Power Your Enterprise with the Best .NET Development Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-indigo-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to leverage the power of .NET for scalable and secure business solutions? Look no further! As a premier .NET Development Company, our expert team builds robust enterprise software and web applications.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your project specifications and discover what .NET can achieve for your organization!
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
            Build enterprise applications with .NET
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
              As a .NET Development Company in India, we deliver massive strategic advantages for corporate environments. .NET provides exceptional cross-platform capabilities, allowing applications to run smoothly across Windows, Linux, and macOS. Its rich ecosystem and comprehensive libraries drastically accelerate development timelines while upholding rigorous standards of security and reliability.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-indigo-500/20 shadow-lg transition-transform duration-300"
            >
              By selecting our .NET development services, you guarantee a future-proof architecture that scales effortlessly as your user base and business requirements expand.
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

export default DotNetServicesPage;
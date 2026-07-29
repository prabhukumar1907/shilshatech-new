import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight,
  Box
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#2496ED", // Docker Blue
  secondary: "#0db7ed",
  glow: "#60a5fa",
};

const DockerServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#2496ED",
    secondaryIndigo: "#0284c7",
    electricCyan: "#60a5fa",
  };

  const whyChooseItems = [
    {
      title: "Containerization Specialists",
      desc: "Eliminate environment discrepancies ('it works on my machine') with expert Docker packaging.",
    },
    {
      title: "Optimized Image Sizes",
      desc: "Build secure, lightweight multi-stage Docker images to boost deployment speed and reduce storage costs.",
    },
    {
      title: "Microservices Architecture",
      desc: "Isolate complex monolithic apps into modular, highly scalable, and manageable containers.",
    },
    {
      title: "Seamless CI/CD Integration",
      desc: "Integrate Docker containers effortlessly with automated testing and deployment pipelines.",
    },
    {
      title: "Enhanced Security Scanning",
      desc: "Audit Docker images for vulnerabilities and apply secure container runtime configurations.",
    },
    {
      title: "Cross-Platform Consistency",
      desc: "Ensure identical behavior across local dev laptops, staging servers, and production cloud clusters.",
    },
  ];

  const servicesList = [
    {
      title: "Application Containerization",
      desc: "Package legacy or modern applications and their dependencies into standardized, portable Docker containers.",
    },
    {
      title: "Docker Compose Configuration",
      desc: "Define and run multi-container Docker applications easily for local testing and staging environments.",
    },
    {
      title: "Multi-Stage Dockerfile Optimization",
      desc: "Refactor bloated images into production-ready lightweight assets for rapid scaling and booting.",
    },
    {
      title: "Container CI/CD Integration",
      desc: "Automate image building, tagging, and pushing to registries (Docker Hub, AWS ECR, GCP Artifact Registry).",
    },
    {
      title: "Container Security Auditing",
      desc: "Scan images for CVE vulnerabilities and implement best-practice non-root user permissions.",
    },
    {
      title: "Microservices Refactoring",
      desc: "Deconstruct monolithic apps into clean, independent microservices managed via containers.",
    },
    {
      title: "Registry Setup & Management",
      desc: "Manage private container registries securely with strict access control and versioning.",
    },
    {
      title: "Developer Training & Support",
      desc: "Upskill your internal development team on Docker best practices, workflows, and container management.",
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
          className="relative rounded-3xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #2496ED, ${theme.glow})` }}
          />

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 dark:bg-cyan-500/10 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 shadow-sm">
                <FaDocker size={20} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Docker Containerization & Consulting Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies standardizes software deployment across environments by packaging applications into reliable, lightweight, and secure Docker containers.
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #2496ED, ${theme.secondary})` }}
                >
                  <span>Hire Docker Experts</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-cyan-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaDocker className="text-[#2496ED] dark:text-[#60a5fa] transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Box size={20} />,
              title: "Portable Containers",
              desc: "Package code and dependencies together so it runs reliably on any infrastructure.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Optimized Workflow",
              desc: "Speed up software build and testing cycles using multi-stage lightweight builds.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Vulnerability Scanning",
              desc: "Ensure container runtime security and rootless operation across all images.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-cyan-500 transition-colors duration-200">{feature.title}</h3>
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
              Streamline Deployments with Professional Docker Containerization
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-cyan-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Containerization is the backbone of modern software development. Shilsha Technologies helps businesses containerize monolithic applications, configure multi-container setups, and optimize Docker workflows for ultimate efficiency.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact our container experts today to modernize your software packaging and deployment workflow!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-cyan-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Build, Ship, and Run Anywhere Securely
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-cyan-500/20 shadow-lg transition-transform duration-300"
            >
              As a leading software development partner, we integrate Docker containerization across all client projects to ensure code consistency, frictionless team onboarding, and effortless scaling across any cloud provider.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-cyan-500/20 shadow-lg transition-transform duration-300"
            >
              Partner with our engineers to containerize your tech stack and elevate your release velocity today.
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

export default DockerServicesPage;
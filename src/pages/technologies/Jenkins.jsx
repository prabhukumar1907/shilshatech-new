import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight,
  GitPullRequest
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaJenkins } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#D24939", // Jenkins Red
  secondary: "#b91c1c",
  glow: "#fca5a5",
};

const JenkinsServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#D24939",
    secondaryIndigo: "#991b1b",
    electricCyan: "#fca5a5",
  };

  const whyChooseItems = [
    {
      title: "CI/CD Pipeline Architects",
      desc: "Design and implement robust automated build, test, and deployment workflows using Jenkins.",
    },
    {
      title: "Custom Plugin Integration",
      desc: "Extend pipeline capabilities securely by integrating third-party tools, code linters, and testing suites.",
    },
    {
      title: "Scalable Agent Architecture",
      desc: "Configure master-agent nodes and Kubernetes-based dynamic build agents to handle heavy workloads.",
    },
    {
      title: "Declarative Pipeline Syntax",
      desc: "Write clean, version-controlled Jenkinsfiles to codify your entire software delivery lifecycle.",
    },
    {
      title: "Automated Quality Gates",
      desc: "Enforce code security checks, automated unit tests, and code coverage requirements before production releases.",
    },
    {
      title: "High Availability & Maintenance",
      desc: "Keep your Jenkins controllers stable, secure, and backed up regularly to prevent deployment bottlenecks.",
    },
  ];

  const servicesList = [
    {
      title: "Jenkins CI/CD Pipeline Setup",
      desc: "Build automated end-to-end delivery pipelines from source code commit to production deployment.",
    },
    {
      title: "Declarative Jenkinsfile Migration",
      desc: "Refactor legacy freestyle jobs into clean, scalable declarative Jenkinsfiles stored in version control.",
    },
    {
      title: "Jenkins Master-Agent Scaling",
      desc: "Configure distributed build agents (including dynamic Kubernetes agents) to optimize build speeds.",
    },
    {
      title: "Automated Testing & Quality Gates",
      desc: "Integrate unit tests, SonarQube code analysis, and security vulnerability scanners into pipeline stages.",
    },
    {
      title: "Webhook & Git Integration",
      desc: "Connect Jenkins seamlessly with GitHub, GitLab, and Bitbucket for automated trigger-based builds.",
    },
    {
      title: "Security & Access Control Hardening",
      desc: "Implement role-based matrix authorization, secure credential management, and regular plugin updates.",
    },
    {
      title: "Docker & Kubernetes Deployment Automation",
      desc: "Automate container image builds and cluster deployments directly from Jenkins pipelines.",
    },
    {
      title: "Ongoing Jenkins Maintenance & Support",
      desc: "Monitor pipeline health, resolve build bottlenecks, and perform routine server updates and backups.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#fca5a5] selection:text-white overflow-hidden">
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
            style={{ background: `linear-gradient(90deg, #D24939, ${theme.glow})` }}
          />

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-500/20 shadow-sm">
                <FaJenkins size={22} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Jenkins CI/CD Automation & Consulting Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies accelerates software delivery velocity by engineering robust, automated, and secure CI/CD pipelines using Jenkins.
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #D24939, ${theme.secondary})` }}
                >
                  <span>Hire Jenkins Experts</span>
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
                <FaJenkins className="text-[#D24939] dark:text-[#fca5a5] transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Workflow size={20} />,
              title: "Automated Pipelines",
              desc: "Streamline code building, testing, and deployment without manual intervention.",
            },
            {
              icon: <GitPullRequest size={20} />,
              title: "Seamless Git Hooks",
              desc: "Trigger builds instantly upon code commits or pull requests from GitHub and GitLab.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Secure Quality Gates",
              desc: "Enforce automated testing and security vulnerability checks prior to release.",
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
              Accelerate Release Cycles with Expert Jenkins Automation
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-red-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Continuous integration and deployment are essential for modern engineering velocity. Shilsha Technologies designs, optimizes, and maintains resilient Jenkins pipelines that minimize deployment friction and eliminate human error.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact our DevOps automation team today to supercharge your software delivery pipeline!
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
            Power Seamless Software Delivery
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
              As a leading software engineering partner, we implement automated CI/CD pipelines to ensure code changes are thoroughly tested, built, and shipped with absolute reliability.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-red-500/20 shadow-lg transition-transform duration-300"
            >
              Get in touch with our DevOps specialists to optimize your Jenkins infrastructure and achieve unprecedented release efficiency.
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

export default JenkinsServicesPage;
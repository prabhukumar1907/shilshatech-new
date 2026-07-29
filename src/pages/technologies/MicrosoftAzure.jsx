import React from "react";
import { Zap, ShieldCheck, Workflow, ArrowRight, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";
import { TbBrandAzure } from "react-icons/tb";

const theme = {
  primary: "#0089D6", // Azure Blue
  secondary: "#005a9e",
  glow: "#38bdf8",
};

const AzureServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#0078d4",
    secondaryIndigo: "#004578",
    electricCyan: "#38bdf8",
  };

  const whyChooseItems = [
    {
      title: "Certified Azure Consultants",
      desc: "Our team consists of Microsoft-certified Azure solutions architects specializing in enterprise IT integration.",
    },
    {
      title: ".NET & Enterprise Synergy",
      desc: "Get unmatched optimization when pairing your .NET apps and databases directly with native Azure services.",
    },
    {
      title: "Robust Hybrid Cloud Setup",
      desc: "Seamlessly integrate your on-premise Active Directory and data centers with secure Azure cloud architectures.",
    },
    {
      title: "Enterprise Compliance & Security",
      desc: "Rely on Microsoft's industry-leading multi-layered security safeguards, Azure Sentinel, and compliance certifications.",
    },
    {
      title: "Cost Control & Azure Advisor",
      desc: "Maximize ROI using automated cost management tools, reserved instances, and tailored resource scaling.",
    },
    {
      title: "Continuous DevOps & CI/CD",
      desc: "Accelerate releases through Azure DevOps pipelines, GitHub Actions, and containerized AKS clusters.",
    },
  ];

  const servicesList = [
    {
      title: "Azure Cloud Migration & Modernization",
      desc: "Migrate legacy servers, databases, and apps to Microsoft Azure securely with zero business disruption.",
    },
    {
      title: "Azure Kubernetes Service (AKS)",
      desc: "Deploy, scale, and manage containerized applications with fully managed Kubernetes clusters on Azure.",
    },
    {
      title: "Enterprise .NET App Hosting",
      desc: "Optimize performance for web apps, APIs, and microservices using Azure App Service and Azure Functions.",
    },
    {
      title: "Azure SQL & Database Management",
      desc: "Implement high-availability database options like Azure SQL Database, Cosmos DB, and Azure Cache for Redis.",
    },
    {
      title: "DevOps & CI/CD Pipelines",
      desc: "Streamline software delivery cycles using Azure DevOps, GitHub, and Infrastructure as Code via Bicep/Terraform.",
    },
    {
      title: "Active Directory & Identity (Entra ID)",
      desc: "Secure user authentication and role-based access control using Microsoft Entra ID (formerly Azure AD).",
    },
    {
      title: "Azure Security & Compliance Auditing",
      desc: "Harden your cloud perimeter with Microsoft Defender for Cloud, Key Vault, and customized security policies.",
    },
    {
      title: "24/7 Infrastructure Support",
      desc: "Keep systems running smoothly with continuous monitoring using Azure Monitor and Log Analytics.",
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
            style={{
              background: `linear-gradient(90deg, #0089D6, ${theme.glow})`,
            }}
          />

          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: theme.glow }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 shadow-sm">
                <TbBrandAzure size={18} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Microsoft Azure Cloud Consulting & Development Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies delivers enterprise-grade Microsoft Azure
                solutions, spanning cloud migrations, AKS container
                architectures, and high-performance .NET cloud hosting.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(90deg, #0089D6, ${theme.secondary})`,
                  }}
                >
                  <span>Hire Azure Experts</span>
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
                <TbBrandAzure
                  className="text-[#0089D6] dark:text-[#38bdf8] transition-transform duration-500 group-hover:scale-110"
                  size={130}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Cloud size={20} />,
              title: "Enterprise Hybrid Cloud",
              desc: "Unify on-premise legacy tech with scalable Microsoft cloud instances seamlessly.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Azure DevOps Integration",
              desc: "Automate build pipelines and deployments with native Microsoft development toolchains.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "World-Class Security",
              desc: "Protect intellectual property with Microsoft Entra ID and advanced perimeter auditing tools.",
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
              <h3 className="text-base font-bold mb-2 group-hover:text-sky-500 transition-colors duration-200">
                {feature.title}
              </h3>
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
              Scale Enterprise Workloads with Certified Microsoft Azure Experts
            </h2>
            <div
              className="w-full h-1 rounded-full my-6 opacity-40"
              style={{
                background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
              }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-sky-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                For organizations anchored in the Microsoft technology stack,
                Azure provides unmatched performance, security, and developer
                synergy. Shilsha Technologies designs and builds reliable
                enterprise cloud solutions optimized for scale.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact our cloud team today to discuss your Azure migration
                strategy and enterprise architecture needs!
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
            Empower Your Business With Cloud Flexibility
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
              As a trusted Azure development partner, we help businesses
              implement hybrid infrastructure, migrate legacy systems, and
              optimize backend applications to run lightning-fast on Microsoft
              cloud architecture.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-sky-500/20 shadow-lg transition-transform duration-300"
            >
              Get in touch with our certified engineers to build secure,
              elastic, and high-performing cloud environments tailored to your
              enterprise.
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

export default AzureServicesPage;

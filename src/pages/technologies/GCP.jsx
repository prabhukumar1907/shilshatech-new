import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight,
  Cloud
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiGooglecloud } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#4285F4", // GCP Blue
  secondary: "#1a73e8",
  glow: "#8ab4f8",
};

const GcpServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#1a73e8",
    secondaryIndigo: "#174ea6",
    electricCyan: "#8ab4f8",
  };

  const whyChooseItems = [
    {
      title: "Certified GCP Architects",
      desc: "Our cloud experts hold advanced Google Cloud certifications, ensuring best-practice infrastructure design and deployment.",
    },
    {
      title: "Kubernetes & Big Data Masters",
      desc: "Leverage Google's industry-leading expertise in container orchestration (GKE) and data analytics (BigQuery).",
    },
    {
      title: "Multi-Layered Security",
      desc: "Protect sensitive enterprise data utilizing Google's secure-by-design infrastructure, IAM policies, and VPC service controls.",
    },
    {
      title: "High Performance & Low Latency",
      desc: "Build lightning-fast applications leveraging Google’s private global fiber-optic network infrastructure.",
    },
    {
      title: "Cost Management & FinOps",
      desc: "Optimize cloud usage, leverage sustained use discounts, and eliminate resource waste efficiently.",
    },
    {
      title: "24/7 Proactive Monitoring",
      desc: "Ensure maximum availability with continuous monitoring using Google Cloud Operations suite.",
    },
  ];

  const servicesList = [
    {
      title: "GCP Cloud Migration & Strategy",
      desc: "Seamlessly transition your legacy workloads, databases, and applications to Google Cloud with zero downtime.",
    },
    {
      title: "Google Kubernetes Engine (GKE)",
      desc: "Deploy, manage, and scale containerized microservices reliably using fully managed Kubernetes clusters on GCP.",
    },
    {
      title: "BigQuery & Data Analytics",
      desc: "Unlock real-time business insights by scaling petabyte-scale data analytics pipelines using BigQuery and Dataflow.",
    },
    {
      title: "Serverless Application Development",
      desc: "Build modern apps without server management using Cloud Run, Cloud Functions, and App Engine.",
    },
    {
      title: "Cloud Database Solutions",
      desc: "Implement high-performance managed databases like Cloud SQL, Cloud Spanner, and Firestore.",
    },
    {
      title: "DevOps & CI/CD on GCP",
      desc: "Automate delivery pipelines using Cloud Build, Artifact Registry, and Terraform infrastructure management.",
    },
    {
      title: "AI & Machine Learning Integration",
      desc: "Empower your applications with Google's state-of-the-art AI models, Vertex AI, and machine learning APIs.",
    },
    {
      title: "Cloud Security & IAM Hardening",
      desc: "Secure your cloud environment with advanced security command centers, encryption, and custom IAM roles.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#8ab4f8] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #4285F4, ${theme.glow})` }}
          />

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 shadow-sm">
                <SiGooglecloud size={18} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Google Cloud (GCP) Consulting & Engineering Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies helps businesses harness the full potential of Google Cloud Platform, specializing in GKE containerization, big data, and high-speed cloud migrations.
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #4285F4, ${theme.secondary})` }}
                >
                  <span>Hire GCP Experts</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-blue-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <SiGooglecloud className="text-[#4285F4] dark:text-[#8ab4f8] transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Cloud size={20} />,
              title: "Global Infrastructure",
              desc: "Deploy applications on Google's robust private global network for optimized delivery speed.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Kubernetes Leadership",
              desc: "Take advantage of GKE—the industry benchmark for container orchestration created by Google.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Advanced Data & AI",
              desc: "Incorporate machine learning models and petabyte-scale analytics straight into your core products.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-blue-500 transition-colors duration-200">{feature.title}</h3>
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
              Accelerate Digital Transformation with Google Cloud Services
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-blue-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Google Cloud Platform delivers market-leading performance in data engineering, artificial intelligence, and containerized architectures. Shilsha Technologies pairs expert certified architects with your vision to create elite, resilient cloud systems.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Partner with us today to scale your infrastructure and unlock innovative data workflows on GCP!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-blue-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Power Next-Gen Apps with Google Cloud
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-lg transition-transform duration-300"
            >
              As a premier GCP partner, we design systems that take full advantage of Google's serverless and cloud-native services. Whether you are modernizing existing microservices or processing billions of database metrics, we ensure optimized cost and top-tier security standards.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-lg transition-transform duration-300"
            >
              Reach out to our cloud engineers to configure a custom multi-region or cloud-native architecture tailored precisely to your company goals.
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

export default GcpServicesPage;
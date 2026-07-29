import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight,
  Server
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiKubernetes } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#326CE5", // Kubernetes Blue
  secondary: "#1d4ed8",
  glow: "#60a5fa",
};

const KubernetesServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#326CE5",
    secondaryIndigo: "#1d4ed8",
    electricCyan: "#60a5fa",
  };

  const whyChooseItems = [
    {
      title: "Certified Kubernetes Experts",
      desc: "Our engineers possess deep technical proficiency in orchestrating production-grade container clusters.",
    },
    {
      title: "Zero-Downtime Deployments",
      desc: "Implement rolling updates and canary releases to push code changes without interrupting users.",
    },
    {
      title: "Auto-Scaling & Resource Efficiency",
      desc: "Automatically scale pods and cluster nodes up or down based on real-time traffic demand.",
    },
    {
      title: "Multi-Cloud & Hybrid Support",
      desc: "Run Kubernetes seamlessly across AWS (EKS), GCP (GKE), Azure (AKS), or on-premise hardware.",
    },
    {
      title: "Robust Cluster Security",
      desc: "Configure RBAC, network policies, and pod security standards to protect your workloads from threats.",
    },
    {
      title: "Automated Self-Healing",
      desc: "Ensure high availability with automatic container restarts, node replacements, and health checks.",
    },
  ];

  const servicesList = [
    {
      title: "Kubernetes Cluster Architecture & Setup",
      desc: "Design and provision high-availability Kubernetes clusters tailored to your precise workload scale.",
    },
    {
      title: "Managed Kubernetes (EKS / GKE / AKS)",
      desc: "Deploy and configure managed container services on leading public cloud providers securely.",
    },
    {
      title: "CI/CD Deployment Automation",
      desc: "Integrate Kubernetes manifests and Helm charts seamlessly into automated build pipelines.",
    },
    {
      title: "Helm Chart Development & Management",
      desc: "Package and manage complex Kubernetes applications reliably using Helm templating.",
    },
    {
      title: "Cluster Monitoring & Observability",
      desc: "Configure Prometheus, Grafana, and ELK/Loki logging stacks for full system visibility.",
    },
    {
      title: "Kubernetes Security & RBAC Hardening",
      desc: "Secure cluster entrypoints, implement strict role-based access control, and audit vulnerabilities.",
    },
    {
      title: "Cost Optimization & Resource Tuning",
      desc: "Fine-tune CPU/memory limits and implement Cluster Autoscaler to minimize cloud expenditure.",
    },
    {
      title: "24/7 Cluster Maintenance & Support",
      desc: "Ensure continuous uptime with ongoing cluster patching, health audits, and disaster recovery support.",
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
          className="relative rounded-3xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #326CE5, ${theme.glow})` }}
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
                <SiKubernetes size={20} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Kubernetes Consulting & Cluster Management Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies specializes in enterprise-grade container orchestration, automating scaling, self-healing, and high-availability deployments with Kubernetes.
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #326CE5, ${theme.secondary})` }}
                >
                  <span>Hire Kubernetes Experts</span>
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
                <SiKubernetes className="text-[#326CE5] dark:text-[#60a5fa] transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Server size={20} />,
              title: "Container Orchestration",
              desc: "Manage thousands of containers efficiently with automated scheduling and scaling.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Zero-Downtime Releases",
              desc: "Deploy updates seamlessly using advanced rolling updates and canary strategies.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Cluster Security",
              desc: "Harden cluster perimeter defenses using strict RBAC protocols and network security policies.",
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
              Automate and Scale Infrastructure with Expert Kubernetes Engineers
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-blue-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Managing microservices at scale requires robust container orchestration. Shilsha Technologies designs, deploys, and manages high-performance Kubernetes clusters that guarantee 99.99% uptime and automatic elasticity.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact our cluster architecture team today to take absolute control of your cloud microservices!
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
            Achieve Enterprise Resiliency with Kubernetes
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
              As a premier DevOps and cloud engineering partner, we help enterprises migrate from legacy setups to cloud-native Kubernetes environments, optimizing resource usage and eliminating single points of failure.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-lg transition-transform duration-300"
            >
              Partner with our certified experts to build, secure, and maintain scalable container clusters with complete transparency.
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

export default KubernetesServicesPage;
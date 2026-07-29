import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight,
  Cloud
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#f97316", // AWS Orange
  secondary: "#c2410c",
  glow: "#fb923c",
};

const AwsServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#ea580c",
    secondaryIndigo: "#c2410c",
    electricCyan: "#fb923c",
  };

  const whyChooseItems = [
    {
      title: "Certified AWS Architects",
      desc: "Our team consists of certified AWS cloud practitioners and solutions architects with deep expertise in multi-cloud infrastructure.",
    },
    {
      title: "Scalable Cloud Architecture",
      desc: "We design highly available, fault-tolerant, and elastic architectures that scale dynamically with your user growth.",
    },
    {
      title: "Cost Optimization (FinOps)",
      desc: "We right-size your cloud infrastructure, implement reserved instances, and configure automated scaling to minimize cloud spend.",
    },
    {
      title: "Enterprise Security & Compliance",
      desc: "Implement rigorous IAM policies, data encryption at rest/transit, and compliance frameworks (SOC2, HIPAA, GDPR).",
    },
    {
      title: "DevOps & CI/CD Automation",
      desc: "Accelerate software delivery using AWS native CI/CD pipelines, container orchestration, and Infrastructure as Code (IaC).",
    },
    {
      title: "24/7 Monitoring & Support",
      desc: "Proactive infrastructure monitoring using Amazon CloudWatch and automated alert systems to guarantee maximum uptime.",
    },
  ];

  const servicesList = [
    {
      title: "AWS Cloud Migration & Strategy",
      desc: "Seamlessly migrate your legacy on-premise applications, databases, and workloads to Amazon Web Services with zero downtime.",
    },
    {
      title: "Serverless Application Development",
      desc: "Build scalable, cost-efficient backends using AWS Lambda, API Gateway, DynamoDB, and S3 without managing servers.",
    },
    {
      title: "Containerization & Kubernetes (EKS/ECS)",
      desc: "Deploy, manage, and scale containerized microservices reliably using Amazon EKS, ECS, and AWS Fargate.",
    },
    {
      title: "Cloud Infrastructure as Code (IaC)",
      desc: "Automate and manage AWS environments securely using Terraform, AWS CloudFormation, and CDK scripts.",
    },
    {
      title: "Database Design & Optimization",
      desc: "Set up high-performance managed databases utilizing Amazon RDS, Aurora, DynamoDB, and ElastiCache.",
    },
    {
      title: "DevOps & CI/CD Pipeline Setup",
      desc: "Streamline code deployments with automated pipelines using AWS CodePipeline, CodeBuild, GitHub Actions, and Docker.",
    },
    {
      title: "AWS Security & IAM Auditing",
      desc: "Strengthen your cloud defense posture with comprehensive security audits, VPC peering, WAF, and IAM policy hardening.",
    },
    {
      title: "Cloud Cost Optimization & Management",
      desc: "Analyze usage patterns, eliminate resource waste, and optimize your monthly AWS billing footprint significantly.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#fb923c] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-orange-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{ background: `linear-gradient(90deg, #f97316, ${theme.glow})` }}
          />

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20 shadow-sm">
                <FaAws size={18} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                AWS Cloud Consulting & Development Services in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies delivers end-to-end Amazon Web Services (AWS) solutions, from cloud migration and serverless architecture to robust DevOps automation and cost optimization.
              </p>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, #f97316, ${theme.secondary})` }}
                >
                  <span>Hire AWS Experts</span>
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
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-orange-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaAws className="text-[#f97316] dark:text-[#fb923c] transition-transform duration-500 group-hover:scale-110" size={130} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Cloud size={20} />,
              title: "Cloud Infrastructure",
              desc: "Build highly scalable, reliable, and secure cloud environments customized for your enterprise workloads.",
            },
            {
              icon: <Workflow size={20} />,
              title: "DevOps Automation",
              desc: "Automate code compilation, testing, and deployment cycles for maximum software release velocity.",
            },
            {
              icon: <ShieldCheck size={20} />,
              title: "Cloud Security",
              desc: "Protect critical data assets with multi-layered defense protocols, IAM access controls, and compliance standards.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-orange-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-orange-500 transition-colors duration-200">{feature.title}</h3>
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
              Scale Your Infrastructure with the Best AWS Partner in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-orange-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to migrate workloads, optimize cloud costs, or build secure cloud-native apps on Amazon Web Services? Look no further! As an expert AWS consulting and development partner, our certified engineers build robust, high-performance cloud architectures.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your cloud objectives and discover what AWS can achieve for your enterprise!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-orange-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Unlock infinite scalability with AWS Cloud
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-orange-500/20 shadow-lg transition-transform duration-300"
            >
              As a premier AWS Cloud Consulting Company in India, we help organizations harness the world's most comprehensive and broadly adopted cloud platform. AWS provides unmatched reliability, global server footprint, and an extensive suite of advanced tools spanning compute, storage, databases, and machine learning.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-orange-500/20 shadow-lg transition-transform duration-300"
            >
              Partner with our certified cloud architects to build, secure, and scale your digital ecosystem seamlessly while maintaining total budget transparency.
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

export default AwsServicesPage;
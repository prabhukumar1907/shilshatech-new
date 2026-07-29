import React from "react";
import { 
  Cpu, 
  Workflow, 
  Database, 
  ArrowRight,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReasonsWhySection from "../components/ReasonsWhySection";
import AwardsSection from "../components/AwardsSection";
import Footer from "../components/Footer";

const theme = {
  primary: "#276ea5",
  secondary: "#1d527d",
  glow: "#60a5fa",
};

const LlmDevelopmentPage = () => {
  const brandTheme = {
    primaryBlue: theme.primary,
    secondaryIndigo: theme.secondary,
    electricCyan: theme.glow,
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#60a5fa] selection:text-slate-900 overflow-hidden">
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
            style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})` }}
          />

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div 
                className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold shadow-sm border"
                style={{ 
                  backgroundColor: 'rgba(39, 110, 165, 0.08)', 
                  color: theme.primary,
                  borderColor: 'rgba(39, 110, 165, 0.2)'
                }}
              >
                <Cpu size={20} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Custom LLM Development & Advanced RAG Architectures in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies designs, fine-tunes, and deploys high-performance Large Language Models and Retrieval-Augmented Generation (RAG) pipelines for enterprise automation.
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
                  <span>Build LLM Systems</span>
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
              <div className="p-10 rounded-2xl border border-slate-100 dark:border-blue-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Bot style={{ color: theme.primary }} className="transition-transform duration-500 group-hover:scale-110" size={120} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid - Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Database size={20} />,
              title: "Enterprise RAG Pipelines",
              desc: "Connect your private vector databases securely to foundational models to eliminate hallucinations and achieve real-time document search.",
            },
            {
              icon: <Cpu size={20} />,
              title: "Domain-Specific Fine-Tuning",
              desc: "Adapt open-source models (Llama, Mistral, Gemma) on your company's proprietary codebases, technical manuals, and financial records.",
            },
            {
              icon: <Workflow size={20} />,
              title: "Autonomous Agent Workflows",
              desc: "Build cognitive multi-agent systems capable of reasoning, calling internal APIs, and executing multi-step enterprise workflows.",
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
              <div 
                className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(39, 110, 165, 0.08)', color: theme.primary }}
              >
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-[#276ea5] transition-colors duration-200">{feature.title}</h3>
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
              Architecting Production-Ready Language Intelligence Systems
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-blue-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Standard chat interfaces only scratch the surface of what Large Language Models can achieve. Shilsha Technologies designs tailored LLM solutions equipped with custom vector stores, robust safety filters, and optimized inference architectures built for real enterprise workloads.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Whether you need a confidential internal knowledge assistant, automated code generation tools, or scalable customer interaction layers, our engineers ensure high accuracy and absolute data security.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
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
            Empower Your Infrastructure with Secure, Zero-Leakage LLMs
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
              We implement rigid token optimization, latency reduction strategies, and private cloud deployments to guarantee your enterprise language solutions perform reliably under heavy use.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-lg transition-transform duration-300"
            >
              Partner with Shilsha Technologies today to turn frontier language models into high-utility corporate assets.
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

export default LlmDevelopmentPage;
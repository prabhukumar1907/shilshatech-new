import React from "react";
import { 
  Cpu, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  Bot,
  ShieldCheck,
  TrendingUp,
  Compass,
  CheckCircle2
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

const AiDevelopmentPage = () => {
  const brandTheme = {
    primaryBlue: "#276ea5",
    electricCyan: "#60a5fa",
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#60a5fa] selection:text-slate-900 overflow-hidden">
      
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-blue-500/20 bg-linear-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-[#0b1528] dark:via-[#0b1528] dark:to-[#0f2035] p-8 sm:p-14 shadow-2xl overflow-hidden mb-16"
        >
          {/* Top glowing accent border */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="absolute top-0 left-0 h-1.5 w-full origin-left shadow-lg shadow-blue-500/50"
            style={{ background: `linear-gradient(90deg, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan}, ${theme.secondary})` }}
          />

          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: theme.glow }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-6 lg:col-span-7"
            >
              <div 
                className="inline-flex items-center gap-2.5 w-fit px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border shadow-sm backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(39, 110, 165, 0.1)",
                  color: brandTheme.electricCyan,
                  borderColor: "rgba(96, 165, 250, 0.3)"
                }}
              >
                <Cpu size={16} className="shrink-0 animate-pulse" style={{ color: brandTheme.electricCyan }} />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-linear-to-r from-slate-900 via-slate-800 to-blue-950 dark:from-white dark:via-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
                Next-Gen AI Development & Machine Learning Solutions
              </h1>
              
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Shilsha Technologies engineers bespoke artificial intelligence models, generative AI applications, and autonomous agent workflows to future-proof your enterprise.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white text-sm font-semibold shadow-xl shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(135deg, ${brandTheme.primaryBlue}, ${theme.secondary})` }}
                  >
                    <span>Hire AI Engineers</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
                
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium px-3 py-2 rounded-lg bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>Production-Grade Neural Architectures</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Graphic / Visual Representation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:col-span-5"
            >
              <div className="relative w-full max-w-md aspect-square rounded-3xl border border-blue-200/50 dark:border-blue-500/20 bg-linear-to-br from-blue-50/50 via-white to-slate-100 dark:from-[#070d18] dark:via-[#0b1528] dark:to-[#0f2035] p-8 flex flex-col items-center justify-center shadow-inner group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,110,165,0.08)_0,transparent_70%)] pointer-events-none" />
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
                
                <div className="relative z-10 p-6 rounded-2xl bg-white/80 dark:bg-[#0b1528]/90 border border-blue-100 dark:border-blue-500/30 shadow-2xl mb-4 group-hover:scale-105 transition-transform duration-500">
                  <BrainCircuit style={{ color: brandTheme.primaryBlue }} size={72} />
                </div>
                
                <div className="relative z-10 text-center space-y-1">
                  <div className="text-sm font-bold tracking-wide text-slate-800 dark:text-slate-200">Cognitive Engine Core</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">LLM Fine-Tuning • Neural Networks • Agents</p>
                </div>

                {/* Floating metric badges */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-2">
                  <TrendingUp size={14} className="text-emerald-500" />
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">High Throughput</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid - Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Sparkles size={22} />,
              title: "Generative AI & Fine-Tuning",
              desc: "Deploy customized Large Language Models tailored to your exact business domain and data privacy frameworks.",
              tag: "Pillar 01"
            },
            {
              icon: <Bot size={22} />,
              title: "Autonomous Agents & Chatbots",
              desc: "Build intelligent cognitive assistants capable of multi-step reasoning, complex task automation, and CRM integration.",
              tag: "Pillar 02"
            },
            {
              icon: <Cpu size={22} />,
              title: "Predictive Analytics & ML",
              desc: "Uncover deep enterprise insights, forecast market behavior, and automate decision-making with custom models.",
              tag: "Pillar 03"
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-3xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-lg shadow-slate-100 dark:shadow-none transition-all duration-300 hover:shadow-2xl hover:border-blue-400/40 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
              
              <div className="flex items-center justify-between mb-6">
                <div 
                  className="h-12 w-12 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "rgba(39, 110, 165, 0.12)", color: brandTheme.primaryBlue }}
                >
                  {feature.icon}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 tracking-wider">
                  {feature.tag}
                </span>
              </div>

              <h3 
                className="text-lg font-bold mb-3 text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-[#276ea5]"
              >
                {feature.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Main Intro Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "rgba(39, 110, 165, 0.1)", color: brandTheme.primaryBlue }}
            >
              <Compass size={14} />
              <span>Cognitive Operations</span>
            </div>
            
            <h2 
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
              style={{ color: brandTheme.primaryBlue }}
            >
              Transforming Enterprise Operations Through Cognitive Intelligence
            </h2>
            
            <div 
              className="w-24 h-1.5 mx-auto rounded-full opacity-60" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200/80 dark:border-blue-500/20 shadow-xl space-y-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="shrink-0" style={{ color: brandTheme.primaryBlue }} size={20} />
                Bridging Architecture and Practical Impact
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Artificial intelligence is no longer a futuristic luxury—it is the core engine driving operational efficiency, hyper-personalization, and disruptive market growth. Shilsha Technologies bridges the gap between complex neural architectures and practical enterprise applications.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200/80 dark:border-blue-500/20 shadow-xl space-y-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="shrink-0" style={{ color: brandTheme.primaryBlue }} size={20} />
                Scalable RAG and Decision Engines
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether you need to embed cognitive search into legacy infrastructure, build domain-specific RAG pipelines, or deploy automated decision engines, our AI architects deliver scalable, production-ready systems built for heavy workloads.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-100/70 dark:bg-[#0b1528]/50 border-y border-slate-200 dark:border-blue-500/20 relative z-10 my-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: brandTheme.primaryBlue }}
            >
              Why Industry Leaders Choose Shilsha Technologies for AI
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Partner with our AI engineering division to turn complex data streams into automated assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3 }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                  style={{ backgroundColor: "rgba(39, 110, 165, 0.12)", color: brandTheme.primaryBlue }}
                >
                  01
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Rigorous Governance & Security</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  We implement strict model governance, secure data handling pipelines, and low-latency API integrations that ensure your implementations are enterprise-secure and ethically compliant.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3 }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                  style={{ backgroundColor: "rgba(39, 110, 165, 0.12)", color: brandTheme.primaryBlue }}
                >
                  02
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">High-Performance Scalability</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Leverage state-of-the-art infrastructure design to scale your cognitive workloads effortlessly as your user base and data volume expand.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default AiDevelopmentPage;
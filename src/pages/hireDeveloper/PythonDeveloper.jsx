import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Zap,
  Users,
  Clock,
  Award,
  ChevronDown,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import RequestForm from "../../components/RequestForm";

const theme = {
  primary: "#286b94", // Core Shilsha Brand Blue
  secondary: "#1e3a8a", // Deep Indigo Accent
  glow: "#6ea1ff", // Cyan-Blue Electric Glow
};

const engagementModels = [
  {
    title: "Dedicated Python Squad",
    desc: "Scale your backend, AI/ML, or data engineering capacity instantly with senior Python developers dedicated exclusively to your product roadmap.",
    icon: Users,
    badge: "Most Popular",
  },
  {
    title: "Project-Based Delivery",
    desc: "End-to-end Python execution from API architecture to machine learning model deployment and database optimization, managed by our technical leads.",
    icon: Workflow,
    badge: "Turnkey Solution",
  },
  {
    title: "Hourly / Staff Augmentation",
    desc: "Flexible engagement model ideal for AI integration, data pipeline tuning, Django/FastAPI microservices scaling, or filling specific Python skill gaps.",
    icon: Clock,
    badge: "Flexible",
  },
];

const coreExpertise = [
  { label: "Python Frameworks", desc: "Django, FastAPI, Flask, Tornado, Pyramid", icon: Code },
  { label: "AI, ML & Data Science", desc: "TensorFlow, PyTorch, Scikit-Learn, Pandas, NumPy, LangChain", icon: Cpu },
  { label: "Databases & Storage", desc: "PostgreSQL, MySQL, MongoDB, Redis, SQLAlchemy, ORMs", icon: Database },
  { label: "Infrastructure & DevOps", desc: "Docker, Kubernetes, AWS / GCP, Celery, CI/CD Pipelines", icon: Terminal },
];

const comparisonData = [
  {
    feature: "Vetting & Tech Assessment",
    shilsha: "Top 1% rigorously tested Python and AI engineers",
    freelance: "Variable skill levels, time-consuming screening",
    agency: "Inconsistent developer talent assignment",
  },
  {
    feature: "Onboarding Speed",
    shilsha: "Ready to deploy within 24 to 48 hours",
    freelance: "1 to 3 weeks of sourcing and interviews",
    agency: "2 to 4 weeks of formal contract and setup",
  },
  {
    feature: "Replacement Guarantee",
    shilsha: "Instant, seamless developer replacement at zero cost",
    freelance: "None — back to square one if they disappear",
    agency: "Lengthy bureaucratic approval delays",
  },
  {
    feature: "Management & Oversight",
    shilsha: "Dedicated technical leads & agile PMs included",
    freelance: "You handle all management yourself",
    agency: "Over-billed, non-technical account managers",
  },
];

const faqs = [
  {
    q: "How fast can I hire a Python Developer from Shilsha Technologies?",
    a: "We can onboard vetted senior Python developers within 24 to 48 hours of initial requirement alignment.",
  },
  {
    q: "Do your Python developers have experience with AI/ML and Large Language Models (LLMs)?",
    a: "Yes! Alongside robust web frameworks like Django and FastAPI, our Python engineers specialize in AI/ML integration, data engineering, PyTorch, TensorFlow, and LLM orchestration tools like LangChain.",
  },
  {
    q: "Can I interview the Python developers before hiring?",
    a: "Yes, absolutely. We encourage direct technical interviews so you can assess their coding standards, architecture knowledge, and problem-solving skills.",
  },
  {
    q: "What if I am not satisfied with the developer's output?",
    a: "We provide a risk-free 2-week trial period with an immediate, hassle-free replacement guarantee if expectations are not met.",
  },
];

const PythonDeveloper = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-36 pb-24 transition-colors duration-500 bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-slate-100 selection:bg-blue-500 selection:text-white">
        
        <div 
          className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full blur-[180px] pointer-events-none opacity-25 dark:opacity-35"
          style={{ background: `radial-gradient(circle, ${theme.primary} 0%, ${theme.secondary} 70%, transparent 100%)` }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl w-full flex flex-col items-center">
          
          {/* Breadcrumb Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide border-blue-200 bg-white/80 text-blue-900 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300 shadow-md shadow-blue-500/5 backdrop-blur-xl mb-8"
          >
            <Code size={13} className="text-blue-500" />
            <span>Hire Developers &gt; Python Developer</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
            
            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                Hire Elite{" "}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${theme.primary} 0%, #3b82f6 50%, ${theme.secondary} 100%)`,
                  }}
                >
                  Python Developers
                </span>{" "}
                from Shilsha Technologies
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Build high-performance web applications, scalable APIs, and advanced AI/ML solutions with world-class Python talent from Shilsha Technologies. We deliver clean, maintainable, and enterprise-grade code tailored to your business needs.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-slate-200/80 bg-white/90 dark:border-blue-500/20 dark:bg-[#0a1325]/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-none">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500"><ShieldCheck size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm">Top 1% Python Talent</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Rigorously screened devs</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-slate-200/80 bg-white/90 dark:border-blue-500/20 dark:bg-[#0a1325]/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-none">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400"><Zap size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm">48-Hour Onboarding</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Fast team integration</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Request Form Right Side */}
            <div className="lg:col-span-5 w-full">
              <RequestForm 
                className="w-full shadow-2xl shadow-blue-900/10 dark:shadow-blue-950/50 border border-slate-200/80 dark:border-blue-500/20 rounded-3xl bg-white/90 dark:bg-[#0a1325]/90 backdrop-blur-xl p-2 sm:p-4"
                title="Request Python Expert"
                subtitle="Fill out the form below and connect with matched Python developers in less than 24 hours."
                textareaPlaceholder="Tell us about your Python project requirements and tech stack..."
                theme={theme}
              />
            </div>

          </div>

          {/* Core Expertise Grid */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 w-full"
          >
            {coreExpertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-3xl border p-6 transition-all border-slate-200/80 bg-white/90 shadow-xl shadow-slate-200/40 dark:border-blue-500/20 dark:bg-[#0a1325]/90 backdrop-blur-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-600">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Engagement Models Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 w-full rounded-3xl border p-8 sm:p-12 border-slate-200/80 bg-white/90 shadow-2xl shadow-slate-200/50 dark:border-blue-500/20 dark:bg-[#0a1325]/85 backdrop-blur-2xl"
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 mb-3 shadow-inner">
                <Award size={13} /> Flexible Hiring
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Choose Your Engagement Model
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
                Whether you need specialized individual contributors or an entire agile Python unit, we adapt to your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model) => {
                const Icon = model.icon;
                return (
                  <div
                    key={model.title}
                    className="rounded-2xl border p-6 transition-all border-slate-200 dark:border-blue-500/15 bg-slate-50/80 dark:bg-[#060c17]/80 flex flex-col justify-between hover:border-blue-400/40 hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                          <Icon size={20} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                          {model.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{model.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {model.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-blue-500/10 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      <CheckCircle2 size={15} /> Ready to onboard in 48 hours
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 w-full rounded-3xl border p-8 sm:p-12 border-slate-200/80 bg-white/90 shadow-2xl shadow-slate-200/50 dark:border-blue-500/20 dark:bg-[#0a1325]/85 backdrop-blur-2xl"
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 mb-3 shadow-inner">
                <Sparkles size={13} /> Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                How Shilsha Technologies Compares
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
                See why leading enterprises choose Shilsha Technologies over standard freelancers or legacy agencies.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-blue-500/20 text-xs sm:text-sm">
                    <th className="py-4 px-4 font-bold text-slate-900 dark:text-white">Feature</th>
                    <th className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/50 rounded-t-xl">Shilsha Technologies</th>
                    <th className="py-4 px-4 font-bold text-slate-500 dark:text-slate-400">Standard Freelancers</th>
                    <th className="py-4 px-4 font-bold text-slate-500 dark:text-slate-400">Traditional Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-blue-500/10 text-xs sm:text-sm">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-blue-950/20 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-800 dark:text-slate-200">{row.feature}</td>
                      <td className="py-4 px-4 font-semibold text-blue-700 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-950/40">{row.shilsha}</td>
                      <td className="py-4 px-4 text-slate-500 dark:text-slate-400">{row.freelance}</td>
                      <td className="py-4 px-4 text-slate-500 dark:text-slate-400">{row.agency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 w-full max-w-4xl"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
                Got questions about hiring Python developers? We have answers.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200/80 bg-white/90 dark:border-blue-500/20 dark:bg-[#0a1325]/90 backdrop-blur-xl overflow-hidden shadow-lg transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base focus:outline-none cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 text-blue-500 shrink-0 ml-4 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-blue-500/10 pt-3">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default PythonDeveloper;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  Zap,
  Laptop,
  Users,
  Clock,
  Award,
  ChevronDown,
  Sparkles,
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
    title: "Dedicated Full-Stack Team",
    desc: "Scale your engineering capacity instantly with senior developers dedicated exclusively to your product roadmap.",
    icon: Users,
    badge: "Most Popular",
  },
  {
    title: "Project-Based Delivery",
    desc: "End-to-end execution from architecture design to deployment, managed completely by our expert technical leads.",
    icon: Workflow,
    badge: "Turnkey Solution",
  },
  {
    title: "Hourly / Staff Augmentation",
    desc: "Flexible engagement model ideal for code reviews, feature additions, or filling specific tech-stack gaps.",
    icon: Clock,
    badge: "Flexible",
  },
];

const coreExpertise = [
  { label: "Modern Frontend", desc: "React, Next.js, Vue, TypeScript, Tailwind CSS", icon: Code2 },
  { label: "Resilient Backend", desc: "Node.js, Python, .NET Core, Microservices", icon: Server },
  { label: "High-Performance DB", desc: "PostgreSQL, MongoDB, Redis, MySQL", icon: Database },
  { label: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes, CI/CD Automation", icon: Cloud },
];

const comparisonData = [
  {
    feature: "Vetting & Tech Assessment",
    shilsha: "Top 1% rigorously tested full-stack engineers",
    freelance: "Variable quality, time-consuming screening",
    agency: "Hit or miss depending on assigned team",
  },
  {
    feature: "Onboarding Speed",
    shilsha: "Ready to deploy within 24 to 48 hours",
    freelance: "1 to 3 weeks of sourcing and interviews",
    agency: "2 to 4 weeks of contract and setup",
  },
  {
    feature: "Replacement Guarantee",
    shilsha: "Instant, seamless developer replacement at zero cost",
    freelance: "None — back to square one if they quit",
    agency: "Tedious bureaucratic delays",
  },
  {
    feature: "Management & Oversight",
    shilsha: "Dedicated technical leads & project managers included",
    freelance: "You manage everything yourself",
    agency: "Over-billed account managers",
  },
];

const faqs = [
  {
    q: "How fast can I hire a Full-Stack Developer from Shilsha Technologies?",
    a: "We can onboard vetted senior full-stack developers within 24 to 48 hours of initial requirement alignment.",
  },
  {
    q: "What time zone do your developers work in?",
    a: "Our developers are fully flexible and can align with your working hours across US, European, or Asia-Pacific time zones.",
  },
  {
    q: "Can I interview the developers before hiring?",
    a: "Yes! We encourage direct technical interviews so you can evaluate their communication, expertise, and cultural fit.",
  },
  {
    q: "What if I am not satisfied with the developer's performance?",
    a: "We offer a risk-free 2-week trial period with an immediate, hassle-free replacement guarantee if expectations are not met.",
  },
];

const FullStackDeveloper = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-32 pb-24 transition-colors duration-500 bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-slate-100 selection:bg-blue-500 selection:text-white">
        
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full blur-[160px] pointer-events-none opacity-20 dark:opacity-30"
          style={{ background: `radial-gradient(circle, ${theme.primary} 0%, ${theme.secondary} 70%, transparent 100%)` }}
        />

        <div className="relative z-10 mx-auto max-w-6xl w-full flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-bold tracking-wide border-blue-200 bg-blue-50/90 text-blue-900 dark:border-blue-400/30 dark:bg-blue-950/70 dark:text-blue-300 shadow-xl shadow-blue-500/10 backdrop-blur-xl mb-6"
          >
            <Laptop size={14} className="text-blue-500" />
            <span>Hire Developers &gt; Full-Stack Developer</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Hire Elite{" "}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${theme.primary} 0%, #1d4ed8 50%, ${theme.secondary} 100%)`,
                  }}
                >
                  Full-Stack Developers
                </span>{" "}
                from Shilsha Technologies
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Scale your engineering team instantly with vetted, world-class full-stack experts from Shilsha Technologies. We build secure, high-performance web and cloud applications tailored to your exact business specifications.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200/80 bg-white/80 dark:border-blue-500/20 dark:bg-[#0a1325]/80 backdrop-blur-xl shadow-lg">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500"><ShieldCheck size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm">Top 1% Vetted Talent</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Rigorously tested engineers</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200/80 bg-white/80 dark:border-blue-500/20 dark:bg-[#0a1325]/80 backdrop-blur-xl shadow-lg">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400"><Zap size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm">48-Hour Onboarding</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Quick team integration</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <RequestForm
              className="lg:col-span-5"
              title="Request Full-Stack Expert"
              subtitle="Fill out the form below and get connected with matched developers in less than 24 hours."
              textareaPlaceholder="Tell us about your tech stack and hiring needs..."
              theme={theme}
            />

          </div>

          {/* Core Expertise Grid */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full"
          >
            {coreExpertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-3xl border p-6 transition-all border-slate-200/80 bg-white/80 shadow-xl shadow-slate-200/50 dark:border-blue-500/20 dark:bg-[#0a1325]/80 backdrop-blur-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">0{index + 1}</span>
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
            className="mt-16 w-full rounded-3xl border p-8 sm:p-12 border-slate-200/80 bg-white/90 shadow-2xl shadow-slate-200/50 dark:border-blue-500/20 dark:bg-[#0a1325]/85 backdrop-blur-2xl"
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 mb-3">
                <Award size={14} /> Flexible Hiring
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Choose Your Engagement Model
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
                Whether you need individual contributors or a fully managed agile development squad, we adapt to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model) => {
                const Icon = model.icon;
                return (
                  <div
                    key={model.title}
                    className="rounded-2xl border p-6 transition-all border-slate-200 dark:border-blue-500/15 bg-slate-50 dark:bg-[#060c17] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
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
            className="mt-16 w-full rounded-3xl border p-8 sm:p-12 border-slate-200/80 bg-white/90 shadow-2xl shadow-slate-200/50 dark:border-blue-500/20 dark:bg-[#0a1325]/85 backdrop-blur-2xl"
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 mb-3">
                <Sparkles size={14} /> Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                How Shilsha Technologies Compares
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
                See why leading companies prefer Shilsha Technologies over standard freelancers or traditional agencies.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-blue-500/20 text-xs sm:text-sm">
                    <th className="py-4 px-4 font-bold text-slate-900 dark:text-white">Feature</th>
                    <th className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/40 rounded-t-xl">Shilsha Technologies</th>
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
            className="mt-16 w-full max-w-4xl"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                Got questions about hiring developers? We have answers.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-blue-500/20 dark:bg-[#0a1325]/80 backdrop-blur-xl overflow-hidden shadow-lg transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base focus:outline-none"
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
      <Footer/>
    </>
  );
};

export default FullStackDeveloper;
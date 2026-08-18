import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  MessageCircle,
  Phone,
  Mail,
  ShieldCheck,
  Code2,
  Globe,
  Clock,
  CheckCircle2,
  X,
  HelpCircle,
} from "lucide-react";

const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "services", label: "Services & Tech" },
  { id: "process", label: "Process & Security" },
];

const faqData = [
  {
    id: 1,
    category: "services",
    question:
      "Can you build mobile-friendly, responsive websites, fast-loading and SEO-friendly?",
    answer:
      "Absolutely! At Shilsha Technologies, we build mobile-first, responsive, and SEO-optimized web applications. We implement clean code architecture, performance budget tuning, and meta-tag optimization to maximize page load speeds and organic search rankings across all device viewports.",
    icon: Globe,
    badge: "Core Service",
  },
  {
    id: 2,
    category: "process",
    question:
      "Why should I choose Shilsha Technologies to design and develop my website?",
    answer:
      "Shilsha Technologies stands out through custom engineering tailored directly to your business KPIs. We combine experienced full-stack developers, modern frameworks, agile iteration, and continuous post-launch support to deliver scalable digital products that drive enterprise growth.",
    icon: CheckCircle2,
    badge: "Why Us",
  },
  {
    id: 3,
    category: "process",
    question: "How do you handle website security and data privacy?",
    answer:
      "We enforce enterprise security protocols including SSL encryption, strict OWASP coding practices, secure authentication mechanisms, automated penetration testing, and firewall configurations to protect your digital assets against vulnerabilities.",
    icon: ShieldCheck,
    badge: "Security",
  },
  {
    id: 4,
    category: "services",
    question:
      "What technologies and frameworks do you use for website and mobile app development?",
    answer:
      "We utilize a modern tech stack. For web platforms: React, Angular, Vue.js, Node.js, and HTML5/CSS3. For cross-platform mobile apps: React Native and Flutter. Database solutions include MySQL, PostgreSQL, and MongoDB.",
    icon: Code2,
    badge: "Tech Stack",
  },
  {
    id: 5,
    category: "process",
    question:
      "Is Shilsha Technologies able to work according to my time zone preference?",
    answer:
      "Yes! Our project management framework easily aligns with international client schedules. We establish overlapping communication windows for daily standups, progress reviews, and real-time updates regardless of your location.",
    icon: Clock,
    badge: "Global Ready",
  },
  {
    id: 6,
    category: "process",
    question: "How do I get started with your web development services?",
    answer:
      "Getting started takes just three quick steps: reach out via our contact form, email info@shilshatech.com, or call +91-120-412-0113. We will instantly schedule a technical discovery call to review your scope and provide a detailed timeline.",
    icon: MessageCircle,
    badge: "Onboarding",
  },
  {
    id: 7,
    category: "services",
    question: "Do you provide ongoing support and maintenance for websites?",
    answer:
      "Yes, Shilsha Technologies provides proactive post-launch SLA maintenance packages, including routine security updates, performance monitoring, bug fixes, and feature enhancements to keep your platform running flawlessly.",
    icon: ShieldCheck,
    badge: "Support",
  },
];

export default function FAQSectionShilsha() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState([1]);

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 dark:bg-[#060b13] dark:text-white transition-colors duration-300 font-sans relative overflow-hidden">
      {/* Background Accent Blur matching Hero Section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full blur-[140px] pointer-events-none opacity-15 bg-[#276ea5]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#276ea5]/10 text-[#276ea5] dark:text-[#60a5fa] border border-[#276ea5]/20 mb-4">
            <HelpCircle size={14} />
            Help & Knowledge Base
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-[#276ea5] to-[#60a5fa] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about partnering with Shilsha
            Technologies for your custom development projects.
          </p>

          {/* Search Bar */}
          <div className="relative mt-8 max-w-xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search questions, tech stacks, process..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-white border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#276ea5]/30 focus:border-[#276ea5] dark:bg-slate-900/90 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:ring-[#60a5fa]/30 dark:focus:border-[#60a5fa] rounded-2xl border outline-none shadow-sm text-sm sm:text-base transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#276ea5] text-white shadow-lg shadow-[#276ea5]/25 dark:bg-[#276ea5] dark:shadow-[#276ea5]/20"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100 dark:bg-slate-900/60 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800/80 border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-10 text-center bg-white border-slate-200 text-slate-500 dark:bg-slate-900/50 dark:border-slate-800 dark:text-slate-400 rounded-2xl border">
              <p className="text-base font-medium">
                No questions matched "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-3 text-sm font-semibold text-[#276ea5] dark:text-[#60a5fa] hover:underline"
              >
                Clear search filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((item) => {
              const isOpen = openIds.includes(item.id);
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#276ea5]/40 shadow-md ring-1 ring-[#276ea5]/20 dark:bg-slate-900 dark:border-[#276ea5]/60 dark:ring-[#276ea5]/20"
                      : "bg-white/70 border-slate-200 hover:border-slate-300 dark:bg-slate-900/40 dark:border-slate-800 dark:hover:border-slate-700"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left cursor-pointer p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#276ea5]/10 text-[#276ea5] dark:bg-[#276ea5]/20 dark:text-[#60a5fa]"
                            : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                        }`}
                      >
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">
                          {item.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-slate-100 dark:bg-slate-800 text-[#276ea5] dark:text-[#60a5fa]"
                          : "text-slate-400"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Support Banner using Hero Palette */}
        <div className="mt-14 bg-linear-to-r from-[#060b13] via-[#0e1d32] to-[#276ea5] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Have more questions?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-md">
              Can't find the answer you're looking for? Reach out to our
              technical team directly.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+911204120113"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
            >
              <Phone size={16} /> +91-120-412-0113
            </a>
            <a
              href="mailto:info@shilshatech.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#276ea5] hover:bg-[#1d4ed8] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-[#276ea5]/30"
            >
              <Mail size={16} /> Email Us
            </a>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#60a5fa]/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import img1 from "../assets/images/41Z_2106.w009.n001.5B.p8.5.jpg";
import img2 from "../assets/images/mobside6.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const categories = ["All", "Web & Digital", "Core Engineering", "AI & Data"];

  const services = [
    {
      title: "Web Development",
      desc: "Captivating, highly responsive web solutions empowering scalable online success and enterprise growth.",
      category: "Web & Digital",
      icon: (
        <svg
          className="w-6 h-6 text-sky-600 dark:text-sky-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      featured: true,
    },
    {
      title: "Software Development",
      desc: "Custom-engineered digital solutions built to drive seamless operational efficiency and integration.",
      category: "Core Engineering",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "IT Consulting Services",
      desc: "Strategic technological guidance to optimize software architecture for maximum speed and security.",
      category: "Core Engineering",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile solutions delivering fluid experiences on iOS and Android.",
      category: "Web & Digital",
      icon: (
        <svg
          className="w-6 h-6 text-sky-600 dark:text-sky-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "UI / UX Development",
      desc: "Intuitive design systems and seamless visual journeys that elevate customer brand perception.",
      category: "Web & Digital",
      icon: (
        <svg
          className="w-6 h-6 text-cyan-600 dark:text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Product Engineering",
      desc: "Transforming complex product visions into reliable, enterprise-grade software products.",
      category: "Core Engineering",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];

  const aiServices = [
    {
      title: "AI Development",
      desc: "Automating core business workflows with bespoke AI models for intelligent decision-making.",
      badge: "Popular",
      icon: (
        <svg
          className="w-5 h-5 text-sky-600 dark:text-sky-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Generative AI Integration",
      desc: "Harness state-of-the-art LLMs and generative pipelines to unlock deep enterprise insights.",
      badge: "Trending",
      icon: (
        <svg
          className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-4a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Natural Language Processing",
      desc: "Deploy custom conversational agents, sentiment engines, and automated document analysis.",
      badge: "Enterprise",
      icon: (
        <svg
          className="w-5 h-5 text-sky-600 dark:text-sky-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Machine Learning Models",
      desc: "Predictive analytics algorithms and real-time pattern recognition designed to scale with your data.",
      badge: "Scalable",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Requirement Discovery",
      desc: "Analyzing your enterprise targets to blueprint a fully aligned execution strategy.",
    },
    {
      num: "02",
      title: "Architecture & UI/UX",
      desc: "Designing high-converting interfaces and resilient cloud application architectures.",
    },
    {
      num: "03",
      title: "Interactive Prototyping",
      desc: "Crafting clickable visual prototypes for review and validation prior to production.",
    },
    {
      num: "04",
      title: "Full-Stack Development",
      desc: "Executing rapid agile coding sprints backed by clean, scalable tech stacks.",
    },
    {
      num: "05",
      title: "QA & Security Testing",
      desc: "Subjecting all core engines to end-to-end security and cross-device functionality audits.",
    },
    {
      num: "06",
      title: "Seamless Deployment",
      desc: "Managing automated cloud release pipelines for zero-downtime launches.",
    },
    {
      num: "07",
      title: "Optimization & Support",
      desc: "Continuous maintenance, operational monitoring, and feature iteration.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Enterprise Technical Expertise",
      desc: "Dedicated digital partner focused on multi-year strategic business value.",
    },
    {
      title: "Strict Coding Standards",
      desc: "Rigorous engineering protocols enforcing clean architecture and security.",
    },
    {
      title: "Offshore Development Synergy",
      desc: "Scale developer capacity seamlessly with dedicated offshore tech units.",
    },
    {
      title: "Agile Timelines",
      desc: "Rapid delivery milestones backed by crystal-clear project communication.",
    },
    {
      title: "Uncompromising Quality",
      desc: "Comprehensive testing procedures ensuring performance, speed, and reliability.",
    },
  ];

  const testimonials = [
    {
      name: "Saul Goodman",
      role: "CEO & Founder",
      initials: "SG",
      text: "Shilsha Technologies exceeded my expectations with their web and mobile app services. Their engineering rigor delivered a visually stunning platform.",
    },
    {
      name: "Sara Wilsson",
      role: "Design Director",
      initials: "SW",
      text: "Extremely pleased with the exceptional platform execution. Architectural expertise and team professionalism made all the difference.",
    },
    {
      name: "Jena Karlis",
      role: "Chief Marketing Officer",
      initials: "JK",
      text: "Delighted with their work! The high-performing web application perfectly showcases our global enterprise solutions.",
    },
    {
      name: "Matt Brandon",
      role: "Tech Lead",
      initials: "MB",
      text: "A seamless collaboration. Engineering standards, rapid delivery cycles, and transparent workflows set Shilsha Technologies apart.",
    },
  ];

  const faqs = [
    {
      q: "What full-stack web engineering services does Shilsha Technologies offer?",
      a: "We offer end-to-end web engineering including custom web applications, SaaS development, enterprise portals, API architectures, microservices, and front-end modernizations.",
    },
    {
      q: "What mobile application solutions do you develop?",
      a: "We engineer native iOS and Android apps alongside performant cross-platform frameworks like React Native and Flutter, including enterprise cloud linkages.",
    },
    {
      q: "Can Shilsha Technologies handle custom integrations and legacy upgrades?",
      a: "Yes, we specialize in modernizing legacy architectures and integrating complex third-party APIs, CRM platforms, and payment gateways into custom software ecosystems.",
    },
    {
      q: "Do you support offshore software development engagement models?",
      a: "We offer dedicated offshore engineering teams, staff augmentation, and end-to-end project execution options tailored to client workflow and time zones.",
    },
    {
      q: "How does Shilsha Technologies ensure high code quality and software security?",
      a: "Our teams enforce continuous integration, automated unit testing, static code analysis, and standard OWASP security benchmarks prior to every deployment.",
    },
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter(
          (s) =>
            s.category === activeCategory ||
            (activeCategory === "AI & Data" &&
              s.category === "Core Engineering"),
        );

  return (
    <>
      <main className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen font-sans selection:bg-sky-500 selection:text-white overflow-hidden transition-colors duration-300">
        {/* Glow Ambient Background Layers */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-linear-to-tr from-sky-400/25 via-indigo-400/25 to-transparent dark:from-sky-600/15 dark:via-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase border border-sky-500/30 bg-sky-100/70 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 backdrop-blur-xl mb-8 shadow-md dark:shadow-lg dark:shadow-sky-950/50">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse" />
            Shilsha Technologies • Software & AI Engineering
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.1]">
            Architecting{" "}
            <span className="bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Digital Breakthroughs
            </span>{" "}
            For Tomorrow
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            High-velocity full-stack engineering, cloud architectures, and
            modern enterprise AI systems designed for scale and resilience.
          </p>

          {/* Key Metrics Banner */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-4 rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-lg dark:shadow-none">
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                99.9%
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Uptime Reliability
              </p>
            </div>
            <div className="p-3 border-l border-slate-200 dark:border-slate-800/80">
              <p className="text-2xl sm:text-3xl font-black text-sky-600 dark:text-sky-400">
                100+
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Projects Shipped
              </p>
            </div>
            <div className="p-3 border-l border-slate-200 dark:border-slate-800/80">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                24/7
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Dedicated Support
              </p>
            </div>
            <div className="p-3 border-l border-slate-200 dark:border-slate-800/80">
              <p className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">
                10x
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Faster Velocity
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Core Engineering Services
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 cursor-pointer rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-sky-500 text-white dark:text-slate-950 shadow-md shadow-sky-500/20 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Bento-Style Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Feature Column: Dynamic Grid Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredServices.map((service, idx) => (
                <div
                  key={idx}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-none ${
                    service.featured
                      ? "sm:col-span-2 bg-linear-to-br from-white via-sky-50/60 to-indigo-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-sky-950/30 border-sky-300 dark:border-sky-500/40 hover:border-sky-500 dark:hover:border-sky-500 shadow-xl shadow-sky-500/5 dark:shadow-sky-950/20"
                      : "bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/80"
                  }`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-6 group-hover:border-sky-500/50 transition duration-300">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-200 dark:border-sky-800/40 inline-block mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/50 flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Technical Stack <span className="ml-1">→</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Feature Column: Visual Interactive Frame */}
            <div className="lg:col-span-5 p-4 rounded-2xl bg-linear-to-b from-white to-slate-100 dark:from-slate-900/80 dark:to-slate-950 border border-slate-200 dark:border-slate-800 relative overflow-hidden group shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition duration-500" />

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  mobile_suite.v2.png
                </span>
              </div>

              {/* Image */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-lg">
                <img
                  src={img2}
                  alt="Shilsha Technologies Mobile Showcase"
                  className="
                              w-full
                              h-52
                              sm:h-60
                              object-cover
                              object-top
                              group-hover:scale-105
                              transition-transform
                              duration-700
                            "
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 dark:from-slate-950/40 via-transparent" />
              </div>

              {/* Content */}
              <div className="mt-3 space-y-1.5">
                <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                  Mobile First
                </span>

                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Cross-Platform Application Suite
                </h4>

                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  High-efficiency native iOS & Android applications built for
                  seamless enterprise deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next-Gen AI Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-white via-sky-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-sky-950/20 dark:to-slate-900 border border-sky-200 dark:border-sky-500/20 relative overflow-hidden shadow-xl dark:shadow-none">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-3 mb-12">
              <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-950 border border-sky-200 dark:border-sky-800/60">
                AI & Intelligence Stack
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Empowering Platforms With Intelligent Automation
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Deploy proprietary predictive models, custom LLM agents, and NLP
                engines tailored specifically for real-time enterprise
                performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiServices.map((ai, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/40 backdrop-blur-md transition duration-300 flex flex-col justify-between shadow-sm dark:shadow-none"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800/40">
                        {ai.icon}
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                        {ai.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {ai.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {ai.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div
            className="
                        relative overflow-hidden rounded-3xl
                        bg-linear-to-br
                        from-[#286b94]
                        via-[#1f587d]
                        to-[#12344d]
                        p-8 sm:p-12
                        shadow-2xl
                        shadow-[#286b94]/30
                        dark:shadow-[#286b94]/20
                        "
          >
            <div
              className="
                        absolute -top-32 -right-20
                        h-72 w-72
                        rounded-full
                        bg-white/20
                        blur-3xl
                        "
            />

            <div
              className="
                        absolute -bottom-40 -left-20
                        h-80 w-80
                        rounded-full
                        bg-[#60a5fa]/20
                        blur-3xl
                        "
            />

            {/* Grid Overlay */}
            <div
              className="absolute inset-0
                        opacity-[0.08]
                        bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
                        bg-size-[40px_40px]"
            />

            <div
              className="
      relative z-10
      flex flex-col lg:flex-row
      items-center justify-between
      gap-8
      text-center lg:text-left
      "
            >
              <div className="max-w-3xl space-y-4">
                <span
                  className="
                            inline-flex items-center
                            rounded-full
                            bg-white/15
                            border border-white/20
                            px-4 py-1.5
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-white
                            backdrop-blur-md
                            "
                >
                  Enterprise Solutions
                </span>

                <h3
                  className="
                            text-3xl sm:text-5xl
                            font-black
                            leading-tight
                            text-white
                            "
                >
                  Ready To Build
                  <span className="block text-sky-200">
                    Next-Gen Digital Solutions?
                  </span>
                </h3>

                <p
                  className="
                            max-w-2xl
                            text-sm sm:text-base
                            font-medium
                            leading-relaxed
                            text-blue-100
                            "
                >
                  Partner with Shilsha Technologies' expert engineers to
                  transform innovative ideas into scalable software, AI-powered
                  platforms, and enterprise-grade solutions.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="
                            group relative
                            inline-flex
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-2xl
                            bg-white
                            px-8 py-4
                            text-sm
                            font-black
                            uppercase
                            tracking-widest
                            text-[#286b94]
                            shadow-xl
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-2xl
                            shrink-0
                            "
              >
                <span className="relative z-10">Schedule Consultation</span>

                <div
                  className="absolute inset-0
                                  translate-y-full
                                  bg-slate-100
                                  transition-transform
                                  duration-300
                                  group-hover:translate-y-0
                                  "
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Process Framework Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
              Execution Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our 7-Stage Engineering Framework
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Structured agile execution pipelines optimized for transparency,
              quality, and fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-none ${
                  idx === 0
                    ? "bg-sky-50 dark:bg-sky-950/20 border-sky-300 dark:border-sky-500/40"
                    : "bg-white dark:bg-slate-900/30 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900/60"
                }`}
              >
                <div>
                  <span className="text-2xl font-black text-sky-600 dark:text-sky-400 font-mono mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-y border-slate-200 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/20 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Frame */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-sky-500 to-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                  <img
                    src={img1}
                    alt="Why Choose Shilsha Technologies"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Reasons List */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                    Why Partner With Us
                  </span>
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1 leading-tight">
                    Engineered for high-performing technology leaders.
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none"
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs mb-3 border border-sky-200 dark:border-sky-800/40">
                        0{idx + 1}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="py-12 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
              Client Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between space-y-6 shadow-sm dark:shadow-none"
              >
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal italic">
                  "{t.text}"
                </p>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold border border-sky-200 dark:border-sky-800/50 flex items-center justify-center text-xs">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {t.name}
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {t.role}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-slate-200 dark:border-slate-700">
                    Verified Partner
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* FAQs */}
        <section className="max-w-3xl mx-auto px-6 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm dark:shadow-none"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-900/80 transition"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white text-sm pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-600 dark:text-sky-400" : ""}`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-100 dark:border-slate-800/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;

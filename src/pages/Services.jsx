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
          className="w-5 h-5 text-sky-600 dark:text-sky-400"
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
          className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
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
          className="w-5 h-5 text-blue-600 dark:text-blue-400"
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
          className="w-5 h-5 text-sky-600 dark:text-sky-400"
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
          className="w-5 h-5 text-cyan-600 dark:text-cyan-400"
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
          className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
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
          (service) =>
            service.category === activeCategory ||
            (activeCategory === "AI & Data" &&
              service.category === "Core Engineering"),
        );

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-800 selection:bg-sky-500 selection:text-white dark:bg-slate-950 dark:text-slate-100">
        <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-96 w-3xl -translate-x-1/2 rounded-full bg-linear-to-r from-sky-400/15 via-indigo-400/15 to-transparent blur-[120px] dark:from-sky-600/10 dark:via-indigo-600/10" />

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-6 sm:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 border-b border-sky-500/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-500" />
              Shilsha Technologies • Software & AI Engineering
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Architecting{" "}
              <span className="bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400">
                Digital Breakthroughs
              </span>{" "}
              For Tomorrow
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
              High-velocity full-stack engineering, cloud architectures, and
              modern enterprise AI systems designed for scale and resilience.
            </p>
          </div>

          {/* Metrics — compact grid instead of card */}
          <div className="mx-auto mt-9 grid max-w-4xl grid-cols-2 border-y border-slate-200 py-4 dark:border-slate-800 sm:grid-cols-4">
            {[
              ["99.9%", "Uptime Reliability", "text-slate-900 dark:text-white"],
              ["100+", "Projects Shipped", "text-sky-600 dark:text-sky-400"],
              ["24/7", "Dedicated Support", "text-slate-900 dark:text-white"],
              ["10x", "Faster Velocity", "text-indigo-600 dark:text-indigo-400"],
            ].map(([value, label, color], index) => (
              <div
                key={label}
                className={`px-3 py-2 text-center ${
                  index !== 0
                    ? "border-l border-slate-200 dark:border-slate-800"
                    : ""
                }`}
              >
                <p className={`text-2xl font-black sm:text-3xl ${color}`}>
                  {value}
                </p>
                <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6">
          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Capabilities
              </span>

              <h2 className="mt-1 text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
                Core Engineering Services
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-1 border-b border-slate-200 dark:border-slate-800">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer border-b-2 px-3 py-2 text-xs font-semibold transition ${
                    activeCategory === category
                      ? "border-sky-500 text-sky-600 dark:text-sky-400"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <article
                key={index}
                className={`group border-b border-slate-200 py-6 dark:border-slate-800 ${
                  service.featured
                    ? "sm:col-span-2 lg:col-span-1 lg:border-l-2 lg:border-sky-500/50 lg:pl-6"
                    : ""
                }`}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-950/40">
                    {service.icon}
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                  {service.title}
                </h3>

                <p className="mt-2 max-w-md text-xs leading-5 text-slate-600 dark:text-slate-400">
                  {service.desc}
                </p>

                <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-sky-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-sky-400">
                  Explore Technical Stack →
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Showcase */}
          <div className="mt-8 grid grid-cols-1 items-center gap-6 border-t border-slate-200 pt-8 dark:border-slate-800 lg:grid-cols-[1fr_360px]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Mobile First
              </span>

              <h3 className="mt-1 text-2xl font-extrabold text-slate-950 dark:text-white">
                Cross-Platform Application Suite
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                High-efficiency native iOS & Android applications built for
                seamless enterprise deployment.
              </p>
            </div>

            <div className="overflow-hidden border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <img
                src={img2}
                alt="Shilsha Technologies Mobile Showcase"
                className="h-48 w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* AI SECTION */}
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6">
          <div className="border-y border-sky-200 py-9 dark:border-sky-500/20">
            <div className="mb-7 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                AI & Intelligence Stack
              </span>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                Empowering Platforms With Intelligent Automation
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Deploy proprietary predictive models, custom LLM agents, and
                NLP engines tailored specifically for real-time enterprise
                performance.
              </p>
            </div>

            <div className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {aiServices.map((ai, index) => (
                <article
                  key={index}
                  className="group px-0 py-5 first:pt-0 last:pb-0 sm:px-5 sm:first:pl-0 sm:last:pr-0 sm:first:pt-5 sm:last:pb-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 dark:bg-sky-950/40">
                      {ai.icon}
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {ai.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 dark:text-white">
                    {ai.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                    {ai.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6">
          <div className="relative overflow-hidden bg-linear-to-br from-[#286b94] via-[#1f587d] to-[#12344d] px-6 py-8 shadow-xl sm:px-10 sm:py-9">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-200">
                  Enterprise Solutions
                </span>

                <h3 className="mt-2 text-2xl font-black leading-tight text-white sm:text-4xl">
                  Ready To Build{" "}
                  <span className="text-sky-200">
                    Next-Gen Digital Solutions?
                  </span>
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
                  Partner with Shilsha Technologies' expert engineers to
                  transform innovative ideas into scalable software, AI-powered
                  platforms, and enterprise-grade solutions.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="inline-flex shrink-0 items-center justify-center bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-[#286b94] transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              Execution Methodology
            </span>

            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              Our 7-Stage Engineering Framework
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Structured agile execution pipelines optimized for transparency,
              quality, and fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={index}
                className="group border-b border-slate-200 py-5 dark:border-slate-800"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xl font-black text-sky-600 dark:text-sky-400">
                    {step.num}
                  </span>

                  <div>
                    <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-slate-600 dark:text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="border-y border-slate-200 py-10 dark:border-slate-800">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                <img
                  src={img1}
                  alt="Why Choose Shilsha Technologies"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Why Partner With Us
              </span>

              <h3 className="mt-1 text-2xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-3xl">
                Engineered for high-performing technology leaders.
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {whyChooseUs.map((item, index) => (
                  <article
                    key={index}
                    className="border-b border-slate-200 py-4 dark:border-slate-800"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-[10px] font-bold text-sky-600 dark:text-sky-400">
                        0{index + 1}
                      </span>

                      <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                        {item.title}
                      </h4>
                    </div>

                    <p className="pl-7 text-xs leading-5 text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-5 py-12 sm:px-6">
          <div className="mb-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              Knowledge Base
            </span>

            <h2 className="mt-1 text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={index}
                  className="border-b border-slate-200 dark:border-slate-800"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-950 dark:text-white">
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all dark:border-slate-800 dark:text-slate-400 ${
                        isOpen
                          ? "rotate-180 border-sky-500 text-sky-600 dark:text-sky-400"
                          : ""
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
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
                    <div className="max-w-3xl pb-5 pr-12 text-xs leading-5 text-slate-600 dark:text-slate-400">
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

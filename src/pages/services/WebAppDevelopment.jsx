import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  MonitorSmartphone,
  Layers3,
  Gauge,
  ShieldCheck,
  Database,
  CloudCog,
  CheckCircle2,
  Rocket,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/shilshalogofinal.webp";
import Footer from "../../components/Footer";

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
};

const developmentServices = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Build scalable, high-performance web applications tailored to your business processes, users, and long-term technology goals.",
    accent: "#276ea5",
    features: [
      "Custom Applications",
      "Modern Web Technologies",
      "Scalable Architecture",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web Applications",
    description:
      "Create seamless digital experiences that work beautifully across desktops, tablets, and mobile devices.",
    accent: "#1d4ed8",
    features: [
      "Responsive Design",
      "Mobile-First Development",
      "Cross-Device Experiences",
    ],
  },
  {
    icon: Layers3,
    title: "Enterprise Applications",
    description:
      "Develop robust business applications that integrate with your existing systems, workflows, APIs, and enterprise platforms.",
    accent: "#7c3aed",
    features: [
      "Enterprise Platforms",
      "API Integration",
      "Business Workflows",
    ],
  },
  {
    icon: Rocket,
    title: "Modernization & Optimization",
    description:
      "Modernize legacy applications and improve existing systems with better architecture, performance, usability, and maintainability.",
    accent: "#0891b2",
    features: [
      "Legacy Modernization",
      "Performance Optimization",
      "Technology Upgrades",
    ],
  },
];

const capabilities = [
  "Custom web application development",
  "Enterprise application development",
  "Responsive and mobile-first applications",
  "API and third-party integrations",
  "Frontend and backend engineering",
  "Database architecture and development",
  "Legacy application modernization",
  "Application performance optimization",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const DevelopmentItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="group relative border-b border-slate-200/80 py-5 first:pt-0 last:border-0 dark:border-white/8"
    >
      <div className="flex gap-4">
        <motion.div
          whileHover={{ scale: 1.06, rotate: -3 }}
          transition={{ duration: 0.2 }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
          style={{
            background: `linear-gradient(135deg, ${item.accent}, ${brandTheme.electricCyan})`,
          }}
        >
          <Icon size={20} />
        </motion.div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white sm:text-xl">
              {item.title}
            </h3>

            <ArrowUpRight
              size={17}
              className="shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              style={{ color: item.accent }}
            />
          </div>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            {item.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {item.features.map((feature) => (
              <span
                key={feature}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WebAppDevelopment = () => {
  return (
    <>
      <main className="relative py-8 overflow-hidden bg-slate-50 font-sans text-slate-900 dark:bg-[#060b13] dark:text-white">
        {/* Background */}

        <div
          className="pointer-events-none absolute left-1/2 -top-45 h-125 w-175 -translate-x-1/2 rounded-full opacity-[0.1] blur-[130px]"
          style={{
            background: `radial-gradient(
              circle,
              ${brandTheme.electricCyan},
              ${brandTheme.primaryBlue},
              transparent 70%
            )`,
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${brandTheme.primaryBlue} 1px, transparent 1px),
              linear-gradient(to bottom, ${brandTheme.primaryBlue} 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />

        {/* HERO */}

        <section className="relative px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 lg:px-10 lg:pb-14 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="lg:col-span-7"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#276ea5]/15 bg-white/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#276ea5] shadow-sm backdrop-blur-md dark:border-sky-400/20 dark:bg-white/3 dark:text-sky-400">
                  <Sparkles size={12} />
                  <span>Web & Application Development</span>
                </div>

                <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[68px]">
                  Build digital
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(
                        90deg,
                        ${brandTheme.primaryBlue},
                        ${brandTheme.secondaryIndigo},
                        ${brandTheme.electricCyan}
                      )`,
                    }}
                  >
                    experiences that scale.
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
                  We design and develop modern web applications that combine
                  intuitive user experiences, scalable architecture, strong
                  performance, and reliable engineering to help businesses
                  grow digitally.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#276ea5] to-[#1d4ed8] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#276ea5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Start Your Project
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-5 py-3 text-sm font-bold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-[#276ea5]/30 hover:text-[#276ea5] dark:border-white/10 dark:bg-white/3 dark:text-slate-200 dark:hover:border-sky-400/30 dark:hover:text-sky-400"
                  >
                    Explore Services
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-6">
                  <div>
                    <p className="text-xl font-black">UI/UX</p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      User Experience
                    </p>
                  </div>

                  <div className="h-9 w-px bg-slate-200 dark:bg-white/10" />

                  <div>
                    <p className="text-xl font-black">API</p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Integrations
                    </p>
                  </div>

                  <div className="h-9 w-px bg-slate-200 dark:bg-white/10" />

                  <div>
                    <p className="text-xl font-black">Scale</p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Built to Grow
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* HERO VISUAL */}

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto h-80 w-[320px] sm:h-90 sm:w-90">
                  <div
                    className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
                    style={{
                      background: `radial-gradient(
                        circle,
                        ${brandTheme.electricCyan}40,
                        transparent 70%
                      )`,
                    }}
                  />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border border-[#276ea5]/15"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-7 rounded-full border border-dashed border-sky-400/20"
                  />

                  {/* Center */}

                  <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-white/80 bg-white shadow-[0_25px_70px_rgba(39,110,165,0.18)] dark:border-white/10 dark:bg-[#0d1727]">
                    <div className="text-center">
                      <img
                        src={logo}
                        alt="Shilsha Technologies"
                        className="mx-auto mb-2 w-20 object-contain"
                      />

                      <div className="flex items-center justify-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#276ea5] dark:text-sky-400">
                        <Code2 size={10} />
                        Development
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}

                  {[
                    {
                      icon: Code2,
                      position: "left-0 top-14",
                    },
                    {
                      icon: MonitorSmartphone,
                      position: "right-0 top-10",
                    },
                    {
                      icon: Database,
                      position: "right-5 bottom-10",
                    },
                    {
                      icon: CloudCog,
                      position: "left-8 bottom-3",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={index}
                        animate={{ y: [0, -7, 0] }}
                        transition={{
                          duration: 2.5 + index * 0.35,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute ${item.position} flex h-12 w-12 items-center justify-center rounded-xl border border-white bg-white text-[#276ea5] shadow-lg dark:border-white/10 dark:bg-[#0d1727] dark:text-sky-400`}
                      >
                        <Icon size={21} />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT SERVICES */}

        <section className="relative px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="lg:col-span-4"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#276ea5] dark:bg-sky-400" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#276ea5] dark:text-sky-400">
                    What We Build
                  </span>
                </div>

                <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.04em] sm:text-4xl">
                  Digital products that{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(
                        90deg,
                        ${brandTheme.primaryBlue},
                        ${brandTheme.electricCyan}
                      )`,
                    }}
                  >
                    move business forward.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
                  From customer-facing platforms to complex enterprise
                  applications, we engineer solutions that are designed for
                  usability, performance, security, and long-term growth.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="lg:col-span-8"
              >
                {developmentServices.map((item) => (
                  <DevelopmentItem key={item.title} item={item} />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}

        <section className="relative px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#276ea5]/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#276ea5] dark:bg-sky-400/10 dark:text-sky-400">
                  <Layers3 size={12} />
                  Our Capabilities
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                  From idea to{" "}
                  <span className="text-[#276ea5] dark:text-sky-400">
                    production.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
                  Our development teams combine product thinking, modern
                  engineering practices, and scalable architecture to turn
                  business requirements into dependable digital products.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <div className="grid gap-x-8 sm:grid-cols-2">
                  {capabilities.map((item) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      className="flex items-center gap-3 border-b border-slate-200/70 py-3.5 dark:border-white/[0.07]"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#276ea5] dark:text-sky-400"
                      />

                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY WEB APPLICATION DEVELOPMENT */}

        <section className="relative px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="border-y border-slate-200/80 py-9 dark:border-white/8"
            >
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <Gauge
                    size={22}
                    className="mb-3 text-[#276ea5] dark:text-sky-400"
                  />

                  <h3 className="text-lg font-black">
                    Performance First
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Build fast, responsive applications that deliver smooth
                    experiences and efficient business workflows.
                  </p>
                </div>

                <div>
                  <Workflow
                    size={22}
                    className="mb-3 text-[#276ea5] dark:text-sky-400"
                  />

                  <h3 className="text-lg font-black">
                    Seamless Integration
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Connect applications with APIs, databases, cloud platforms,
                    third-party services, and existing business systems.
                  </p>
                </div>

                <div>
                  <ShieldCheck
                    size={22}
                    className="mb-3 text-[#276ea5] dark:text-sky-400"
                  />

                  <h3 className="text-lg font-black">
                    Secure & Scalable
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Engineer applications with security, maintainability, and
                    scalability built into the architecture from day one.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}

        <section className="relative px-5 pb-10 pt-2 sm:px-8 lg:px-10 lg:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto max-w-7xl border-t border-slate-200/80 pt-9 dark:border-white/8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-7 bg-[#276ea5] dark:bg-sky-400" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#276ea5] dark:text-sky-400">
                    Let's Build
                  </span>
                </div>

                <h2 className="text-2xl font-black leading-tight tracking-[-0.03em] text-slate-900 dark:text-white sm:text-3xl">
                  Have an idea for a web application?{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(
                        90deg,
                        ${brandTheme.primaryBlue},
                        ${brandTheme.secondaryIndigo},
                        ${brandTheme.electricCyan}
                      )`,
                    }}
                  >
                    Let's build it.
                  </span>
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Tell us about your product, business requirement, or
                  application challenge and we'll help turn it into a scalable
                  digital solution.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-[#276ea5] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Start a Conversation
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WebAppDevelopment;

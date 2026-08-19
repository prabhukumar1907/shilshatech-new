import React from "react";
import {
  Layout,
  Monitor,
  Code,
  ArrowUpRight,
  Globe,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#3B82F6",
  secondary: "#1D4ED8",
  glow: "#93c5fd",
};

const WebDesignServicesPage = () => {
  const features = [
    {
      number: "01",
      icon: Monitor,
      title: "Responsive by Design",
      desc: "Pixel-perfect experiences that adapt naturally across desktops, tablets, and mobile devices.",
    },
    {
      number: "02",
      icon: Code,
      title: "Performance & SEO",
      desc: "Clean front-end architecture, optimized assets, and fast-loading experiences built for visibility.",
    },
    {
      number: "03",
      icon: Layout,
      title: "Purposeful UI Systems",
      desc: "Modern interfaces with consistent visual systems designed around your brand and business goals.",
    },
  ];

  const capabilities = [
    "Corporate & Business Websites",
    "Landing Page Design",
    "Responsive Web Applications",
    "UI/UX Design Systems",
    "Conversion-Focused Experiences",
    "Performance Optimization",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans overflow-hidden selection:bg-blue-200 selection:text-slate-900 dark:selection:bg-blue-500/30">
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-20">
        <div
          className="absolute top-10 -right-30 w-105 h-105 rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-center">
            {/* Hero Copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-blue-500" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  Shilsha Technologies
                </span>
              </div>

              <h1 className="text-[2.7rem] sm:text-5xl lg:text-6xl xl:text-[4.4rem] font-black tracking-[-0.04em] leading-[0.98] max-w-4xl">
                Modern websites
                <span className="block text-blue-500">built to perform.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We design and develop fast, responsive digital experiences that
                combine strong visual identity, intuitive interaction, and
                conversion-focused engineering.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-8">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-200"
                >
                  Start a Project
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Web Design · UI/UX · Frontend
                </span>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative w-70 h-85">
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(59,130,246,.15) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(59,130,246,.15) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Main visual */}
                <div className="absolute inset-8 border border-blue-500/30 bg-white/70 dark:bg-[#0b1528]/70 backdrop-blur-sm">
                  <div className="h-9 border-b border-slate-200 dark:border-blue-500/20 flex items-center px-4 gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <span className="w-2 h-2 rounded-full bg-green-400/70" />
                  </div>

                  <div className="p-6">
                    <div className="w-16 h-1.5 bg-blue-500 mb-4" />

                    <div className="space-y-2">
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                      <div className="w-4/5 h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                      <div className="w-3/5 h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-8">
                      <div className="h-20 bg-blue-500/10 border border-blue-500/20" />
                      <div className="h-20 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
                    </div>
                  </div>
                </div>

                {/* Floating icon */}
                <div className="absolute -right-3 top-12 w-14 h-14 bg-blue-600 text-white flex items-center justify-center shadow-xl">
                  <Globe size={25} />
                </div>

                <div className="absolute -left-4 bottom-10 w-16 h-16 bg-white dark:bg-[#0b1528] border border-blue-500/20 flex items-center justify-center shadow-lg">
                  <Monitor size={28} className="text-blue-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`
                    py-7 sm:py-8
                    md:px-7
                    first:md:pl-0
                    last:md:pr-0
                    ${
                      index !== 0
                        ? "border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold tracking-widest text-blue-500">
                      {feature.number}
                    </span>

                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="text-blue-500"
                    />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-24"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">
                Our approach
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] leading-tight">
                Design that looks
                <span className="text-blue-500"> good.</span>
                <br />
                Engineering that
                <span className="text-blue-500"> works.</span>
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                Your website is often the first interaction customers have with
                your brand. We combine thoughtful UX, modern visual systems,
                responsive development, and performance engineering to turn that
                interaction into a meaningful experience.
              </p>

              <p className="mt-5 text-base leading-relaxed text-slate-500 dark:text-slate-400">
                From corporate websites and landing pages to sophisticated web
                applications, every interface is designed around your users,
                your brand, and your business objectives.
              </p>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-blue-600 dark:text-blue-400 group"
              >
                Discuss your website
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-slate-100/70 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">
                What we build
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                Digital experiences
                <span className="text-blue-500"> built around results.</span>
              </h2>
            </motion.div>

            <div>
              {capabilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700 first:border-t"
                >
                  <div className="flex items-center gap-4">
                    <Check size={17} className="text-blue-500 shrink-0" />

                    <span className="text-sm sm:text-base font-medium group-hover:text-blue-500 transition-colors">
                      {item}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden border-t border-b border-blue-500/30 py-10 sm:py-14"
          >
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
              style={{ background: theme.glow }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">
                  Ready to build?
                </span>

                <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
                  Create a website your
                  <span className="text-blue-500"> customers remember.</span>
                </h2>

                <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-500 dark:text-slate-400">
                  Let's turn your vision into a fast, modern, conversion-focused
                  digital experience.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="group inline-flex shrink-0 items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all"
              >
                Start Your Project
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default WebDesignServicesPage;

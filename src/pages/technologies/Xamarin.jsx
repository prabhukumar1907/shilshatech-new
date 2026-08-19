import React from "react";
import {
  Zap,
  Workflow,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#6366f1",
  secondary: "#4338ca",
  glow: "#818cf8",
};

const DotNetMauiServicesPage = () => {
  const features = [
    {
      icon: <RefreshCw size={19} />,
      title: "Seamless Migration",
      desc: "Move from deprecated Xamarin architectures to modern .NET MAUI while preserving your core business logic.",
    },
    {
      icon: <Workflow size={19} />,
      title: "Unified C# Codebase",
      desc: "Build for iOS, Android, macOS, and Windows from one maintainable project structure.",
    },
    {
      icon: <Zap size={19} />,
      title: "Enhanced Performance",
      desc: "Leverage modern .NET architecture, optimized handlers, faster startup, and smoother application experiences.",
    },
  ];

  const services = [
    "Legacy Xamarin to .NET MAUI Migration",
    "Custom .NET MAUI Application Development",
    "Enterprise Mobile Solutions",
    "UI/UX Modernization",
    "API & Azure Cloud Integration",
    "App Store Deployment & Compliance",
    "Third-Party Component Upgrades",
    "Ongoing Maintenance & Support",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans overflow-hidden">
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Background glow */}
        <div
          className="absolute top-0 right-0 w-105 h-105 rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <SiDotnet size={20} />
                </span>

                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                  .NET MAUI Development
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950 dark:text-white max-w-4xl">
                Modern
                <span className="text-indigo-600 dark:text-indigo-400">
                  {" "}
                  .NET MAUI
                </span>{" "}
                Apps Built for What's Next
              </h1>

              {/* Accent */}
              <div className="flex items-center gap-2 mt-6 mb-5">
                <span className="w-16 h-0.75 rounded-full bg-indigo-600" />
                <span className="w-5 h-0.75 rounded-full bg-indigo-300 dark:bg-indigo-500/40" />
              </div>

              <p className="max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-slate-600 dark:text-slate-300">
                Shilsha Technologies helps businesses migrate legacy Xamarin
                applications and build modern cross-platform products with .NET
                MAUI, C#, Azure, and the Microsoft ecosystem.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 mt-7">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all"
                  >
                    Hire .NET MAUI Developers
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>

                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Xamarin migration • Cross-platform • Enterprise
                </span>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-indigo-500/10" />
                <div className="absolute inset-6 rounded-full border border-indigo-500/15" />
                <div className="absolute inset-12 rounded-full bg-indigo-500/5 blur-xl" />

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <SiDotnet
                    size={125}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </motion.div>

                {/* Floating labels */}
                <span className="absolute top-4 right-0 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-white/80 dark:bg-[#0b1528]/80 border border-slate-200 dark:border-indigo-500/20 backdrop-blur text-slate-600 dark:text-slate-300">
                  C#
                </span>

                <span className="absolute bottom-5 left-0 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-white/80 dark:bg-[#0b1528]/80 border border-slate-200 dark:border-indigo-500/20 backdrop-blur text-slate-600 dark:text-slate-300">
                  Azure
                </span>

                <span className="absolute bottom-0 right-8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-indigo-600 text-white">
                  MAUI
                </span>
              </div>
            </motion.div>
          </div>

          {/* Hero bottom line */}
          <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-5">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-indigo-500" />
                Single Codebase
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-indigo-500" />
                Native Platform Performance
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-indigo-500" />
                Microsoft Ecosystem
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-indigo-500" />
                Enterprise Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-4">
              Modernize Your Mobile Strategy
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-950 dark:text-white">
              Your Xamarin investment shouldn't become a technology roadblock.
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-6 lg:gap-12">
              <p className="text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-300">
                With official Xamarin support ending in May 2024, businesses
                need a clear path toward a supported and future-ready
                application architecture. Shilsha Technologies helps you
                transition legacy Xamarin applications to .NET MAUI with minimal
                disruption.
              </p>

              <p className="text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-300">
                Whether you're migrating an existing product or starting a new
                cross-platform application, our engineers use C#, .NET, Azure,
                and modern MAUI architecture to create secure, scalable, and
                maintainable solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`py-5 md:py-2 ${
                  index === 0
                    ? "md:pr-8"
                    : index === features.length - 1
                      ? "md:pl-8"
                      : "md:px-8"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {feature.icon}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-100/70 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-3">
                Why .NET MAUI
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-950 dark:text-white">
                Future-proof your enterprise applications
              </h2>

              <div className="mt-5 w-20 h-1 bg-linear-to-r from-indigo-600 to-indigo-300 rounded-full" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <p className="text-sm sm:text-base lg:text-lg leading-7 text-slate-600 dark:text-slate-300">
                .NET MAUI represents the evolution of Xamarin.Forms, giving
                organizations a modern framework for developing applications
                across mobile and desktop platforms from a unified project
                structure.
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-7 text-slate-600 dark:text-slate-300">
                Businesses already invested in Microsoft technologies can
                benefit from seamless integration with Azure, ASP.NET Core,
                Entity Framework, APIs, authentication systems, and existing
                enterprise infrastructure.
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-7 text-slate-600 dark:text-slate-300">
                Our .NET engineers help you modernize your application without
                sacrificing the business logic and functionality that your
                existing product already provides.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-3">
                  Our Expertise
                </p>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
                  .NET MAUI services
                </h2>
              </div>

              <p className="max-w-md text-sm text-slate-500 dark:text-slate-400">
                From Xamarin modernization to new enterprise applications, we
                cover the complete .NET MAUI development lifecycle.
              </p>
            </div>

            {/* Service List */}
            <div className="border-t border-slate-200 dark:border-slate-800">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="group flex items-center justify-between gap-5 py-4 border-b border-slate-200 dark:border-slate-800"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-indigo-500 w-6">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service}
                    </h3>
                  </div>

                  <ArrowRight
                    size={17}
                    className="shrink-0 text-slate-300 dark:text-slate-700 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden border-t border-b border-indigo-500/20 py-8 sm:py-10"
          >
            <div
              className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[100px] opacity-15 pointer-events-none"
              style={{ background: theme.glow }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-2">
                  Ready to modernize?
                </p>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  Move your application forward with .NET MAUI.
                </h2>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Talk to our .NET engineers about your migration or new
                  application.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  Start Your Project
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
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

export default DotNetMauiServicesPage;

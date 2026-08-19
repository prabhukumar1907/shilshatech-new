import React from "react";
import {
  Zap,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaLaravel } from "react-icons/fa";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#FF2D20",
  secondary: "#E51F17",
  glow: "#FF6B61",
};

const features = [
  {
    number: "01",
    icon: Zap,
    title: "Rapid Development",
    desc: "Leverage Laravel's expressive syntax, powerful tooling, and rich ecosystem to build production-ready applications faster.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Elegant Architecture",
    desc: "Build clean, maintainable applications with MVC architecture, Eloquent ORM, queues, events, jobs, and reusable components.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Secure by Design",
    desc: "Implement reliable authentication, authorization, validation, CSRF protection, encryption, and secure API architectures.",
  },
];

const benefits = [
  "Custom Laravel web development",
  "Laravel REST API development",
  "Eloquent ORM & database solutions",
  "Laravel e-commerce platforms",
  "Third-party API integrations",
  "Legacy PHP application migration",
  "Cloud-ready Laravel applications",
  "Performance optimization",
];

const LaravelServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans selection:bg-[#FF2D20] selection:text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full blur-[140px] opacity-[0.055]"
          style={{ background: theme.primary }}
        />

        <div
          className="absolute top-[55%] -right-60 w-112.5 h-112.5 rounded-full blur-[150px] opacity-[0.035]"
          style={{ background: theme.glow }}
        />

        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <main className="relative z-10 pt-12">
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 sm:pt-24 pb-14 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <FaLaravel size={20} className="text-[#FF2D20]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF2D20]">
                  Laravel Development Services
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[72px] xl:text-[82px] font-black tracking-[-0.055em] leading-[0.95] max-w-5xl">
                Powerful web apps.
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(
                      110deg,
                      ${theme.primary},
                      ${theme.glow}
                    )`,
                  }}
                >
                  Built with Laravel.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-600 dark:text-slate-400">
                Build secure, scalable, and high-performance web applications
                with a Laravel engineering team focused on clean architecture,
                rapid development, and long-term maintainability.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-8">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.primary},
                      ${theme.secondary}
                    )`,
                    boxShadow: "0 12px 30px rgba(255,45,32,0.16)",
                  }}
                >
                  Hire Laravel Developers
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#why-laravel"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#FF2D20] transition-colors"
                >
                  Why Laravel
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="flex items-center gap-3 mt-7 text-xs text-slate-500">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                Laravel engineering teams available for new projects
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="relative w-57.5 h-57.5 sm:w-70 sm:h-70">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-[#FF2D20]/20"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 34,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-7 rounded-full border border-dashed border-[#FF2D20]/20"
                />

                <div
                  className="absolute inset-13.75 rounded-full blur-[45px] opacity-20"
                  style={{ background: theme.primary }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <FaLaravel
                    size={135}
                    className="text-[#FF2D20] drop-shadow-[0_0_35px_rgba(255,45,32,0.2)]"
                  />
                </div>

                <span className="absolute top-2 right-0 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  Laravel
                </span>

                <span className="absolute bottom-5 left-0 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  PHP • API • Web
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="
                      py-8
                      md:px-7
                      first:md:pl-0
                      last:md:pr-0
                      border-b md:border-b-0
                      md:border-r last:border-r-0
                      border-slate-200
                      dark:border-white/[0.07]
                    "
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-[#FF2D20]">
                        {feature.number}
                      </span>

                      <Icon size={19} className="text-[#FF2D20]" />
                    </div>

                    <h3 className="text-lg font-bold">{feature.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="why-laravel"
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF2D20]">
                Why Laravel
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Build beautifully.
                <span className="block text-slate-400 dark:text-slate-600">
                  Scale confidently.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="border-l-2 border-[#FF2D20]/40 pl-6 sm:pl-8 space-y-6">
                <p className="text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300">
                  Are you looking to leverage Laravel's elegant architecture and
                  powerful ecosystem for your business platform? Our Laravel
                  development team builds secure, flexible, and high-performance
                  web applications around your requirements.
                </p>

                <p className="text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                  From custom Laravel applications and REST APIs to e-commerce,
                  third-party integrations, and enterprise platforms, we create
                  software that is easier to develop, maintain, and scale.
                </p>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 font-bold text-[#FF2D20] hover:gap-4 transition-all"
                >
                  Discuss your Laravel project
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-10 mb-12">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF2D20]">
                  Laravel Capabilities
                </span>

                <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
                  One framework.
                  <span className="block text-slate-400 dark:text-slate-600">
                    Endless possibilities.
                  </span>
                </h2>
              </div>

              <p className="lg:col-span-6 lg:col-start-7 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                Laravel provides a modern foundation for business websites,
                enterprise platforms, APIs, e-commerce applications,
                integrations, and cloud-ready web products.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-slate-200 dark:border-white/8">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="
                    flex items-center gap-3
                    py-5
                    border-b border-slate-200
                    dark:border-white/8
                    sm:px-5
                    first:sm:pl-0
                  "
                >
                  <CheckCircle2 size={18} className="text-[#FF2D20] shrink-0" />

                  <span className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF2D20]">
                Business Advantage
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Technology that
                <span className="block text-slate-400 dark:text-slate-600">
                  grows with you.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="space-y-6">
                <p className="text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
                  As a Laravel Development Company in India, we deliver
                  versatile solutions for business applications, e-commerce
                  platforms, APIs, and enterprise systems. Laravel's expressive
                  architecture helps development teams move quickly while
                  maintaining clean and reliable code.
                </p>

                <p className="text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                  With the Laravel ecosystem, your application can evolve from
                  an initial product into a scalable platform capable of
                  handling increasing users, transactions, integrations, and
                  business requirements.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/8">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#FF2D20]"
                >
                  Build with Laravel
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
            <div className="relative text-center">
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-20 w-72 h-72 rounded-full blur-[100px] opacity-[0.07]"
                style={{ background: theme.primary }}
              />

              <FaLaravel
                size={40}
                className="relative mx-auto text-[#FF2D20] mb-6"
              />

              <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-[#FF2D20]">
                Start your next project
              </p>

              <h2 className="relative mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl mx-auto">
                Ready to build something
                <span className="text-[#FF2D20]"> powerful?</span>
              </h2>

              <p className="relative max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                Let's turn your product vision into a secure, scalable, and
                high-performance Laravel application.
              </p>

              <div className="mt-7">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-sm font-bold transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.primary},
                      ${theme.secondary}
                    )`,
                  }}
                >
                  Talk to Laravel Experts
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default LaravelServicesPage;

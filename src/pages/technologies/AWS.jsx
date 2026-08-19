import React from "react";
import {
  ArrowRight,
  Cloud,
  ShieldCheck,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#f97316",
  secondary: "#c2410c",
  glow: "#fb923c",
};

const AwsServicesPage = () => {
  const features = [
    {
      icon: Cloud,
      number: "01",
      title: "Cloud Infrastructure",
      desc: "Design highly available, scalable, and secure AWS environments built around your business workloads.",
    },
    {
      icon: Workflow,
      number: "02",
      title: "DevOps Automation",
      desc: "Automate development, testing, infrastructure, and deployment workflows for faster product delivery.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Cloud Security",
      desc: "Protect critical workloads with IAM, encryption, network security, monitoring, and compliance controls.",
    },
  ];

  const services = [
    "AWS Cloud Migration & Strategy",
    "Serverless Application Development",
    "Containerization & Kubernetes",
    "Infrastructure as Code",
    "Database Design & Optimization",
    "DevOps & CI/CD Pipeline Setup",
    "AWS Security & IAM Auditing",
    "Cloud Cost Optimization",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-800 dark:bg-[#070d18] dark:text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Background glow */}
        <div className="absolute top-10 -right-30 w-87.5 h-87.5 rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 -left-37.5 w-75 h-75 rounded-full bg-orange-400/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Top line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className="h-px bg-linear-to-r from-orange-500 via-orange-300 to-transparent mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Label */}
              <div className="inline-flex items-center gap-2 mb-5 text-xs font-semibold tracking-wide uppercase text-orange-600 dark:text-orange-400">
                <FaAws size={19} />
                <span>AWS Cloud Services</span>
              </div>

              {/* Heading */}
              <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950 dark:text-white">
                Build, scale & modernize
                <span className="block text-orange-500">with AWS Cloud.</span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Shilsha Technologies delivers end-to-end AWS consulting, cloud
                migration, serverless development, DevOps automation, security,
                and cost optimization for modern businesses.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 mt-7">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-orange-500/20"
                >
                  Hire AWS Experts
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <span className="text-xs text-slate-500 dark:text-slate-500">
                  Cloud strategy • Migration • DevOps • Security
                </span>
              </div>
            </motion.div>

            {/* AWS Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-orange-500/20 blur-[70px] rounded-full" />

                {/* Icon */}
                <div className="relative flex items-center justify-center">
                  <FaAws
                    size={190}
                    className="text-orange-500 drop-shadow-[0_0_35px_rgba(249,115,22,0.25)]"
                  />
                </div>

                {/* Floating label */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-2 -left-4 sm:-left-10 px-3 py-2 bg-white/90 dark:bg-[#0b1528]/90 backdrop-blur-md border border-slate-200 dark:border-orange-500/20 rounded-lg shadow-lg"
                >
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Cloud powered by
                  </p>
                  <p className="text-xs font-bold text-orange-500">
                    Amazon Web Services
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="py-7 md:px-7 first:md:pl-0 last:md:pr-0 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 text-orange-500 mt-1">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold tracking-widest text-orange-500">
                          {feature.number}
                        </span>

                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {feature.title}
                        </h3>
                      </div>

                      <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                AWS Consulting & Development
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-950 dark:text-white">
                Scale your infrastructure with a smarter
                <span className="text-orange-500"> cloud strategy.</span>
              </h2>

              <div className="w-20 h-1 bg-orange-500 mt-5 mb-6 rounded-full" />

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                <p>
                  Are you looking to migrate workloads, optimize cloud costs, or
                  build secure cloud-native applications on Amazon Web Services?
                  Shilsha Technologies helps businesses architect, deploy, and
                  manage reliable AWS environments designed for long-term
                  growth.
                </p>

                <p>
                  From cloud migration and serverless applications to DevOps,
                  security, and infrastructure automation, our AWS specialists
                  help you turn complex cloud infrastructure into a scalable
                  technology advantage.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-colors group"
              >
                Discuss your cloud strategy
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-slate-100/70 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                What We Do
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                Complete AWS
                <span className="block text-orange-500">cloud services.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                From your first cloud migration to global-scale infrastructure,
                our team provides the expertise required at every stage.
              </p>
            </motion.div>

            {/* Services List */}
            <div>
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group flex items-center gap-4 py-3.5 border-b border-slate-200 dark:border-slate-800 first:border-t"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-orange-500 transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-orange-500 transition-colors">
                    {service}
                  </span>

                  <ArrowRight
                    size={15}
                    className="text-slate-400 dark:text-slate-600 transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-1"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Why AWS
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Unlock scalable digital growth
              <span className="text-orange-500"> with AWS.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 mt-8">
              <div>
                <div className="w-8 h-1 bg-orange-500 mb-4 rounded-full" />

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Built for global scale
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  AWS provides a broad ecosystem of compute, storage, databases,
                  networking, analytics, and machine learning services that can
                  evolve alongside your organization.
                </p>
              </div>

              <div>
                <div className="w-8 h-1 bg-orange-500 mb-4 rounded-full" />

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Secure by architecture
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Build secure cloud environments with granular IAM, encryption,
                  network isolation, monitoring, automated backups, and
                  proactive security controls.
                </p>
              </div>

              <div>
                <div className="w-8 h-1 bg-orange-500 mb-4 rounded-full" />

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Optimized cloud spending
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Right-size infrastructure, automate scaling, identify unused
                  resources, and establish cloud cost visibility without
                  sacrificing application performance.
                </p>
              </div>

              <div>
                <div className="w-8 h-1 bg-orange-500 mb-4 rounded-full" />

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Faster engineering
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Modern DevOps practices, serverless architectures, containers,
                  and infrastructure automation allow teams to release software
                  faster and more reliably.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden border-y border-orange-500/30 py-8 sm:py-10"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/10 blur-[70px] rounded-full pointer-events-none" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-orange-500 mb-2">
                  Ready to scale?
                </p>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  Let's build your AWS cloud strategy.
                </h2>
              </div>

              <Link
                to="/contact-us"
                className="group inline-flex items-center justify-center gap-2 shrink-0 px-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 transition-all duration-300"
              >
                Start a Conversation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
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

export default AwsServicesPage;

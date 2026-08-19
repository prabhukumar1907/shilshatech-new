import React from "react";
import {
  ShieldCheck,
  Workflow,
  ArrowRight,
  Cloud,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";
import { TbBrandAzure } from "react-icons/tb";

const theme = {
  primary: "#0089D6",
  secondary: "#005a9e",
  glow: "#38bdf8",
};

const AzureServicesPage = () => {
  const features = [
    {
      number: "01",
      icon: <Cloud size={21} />,
      title: "Enterprise Hybrid Cloud",
      desc: "Connect on-premise infrastructure with scalable Azure cloud environments through secure hybrid architecture.",
    },
    {
      number: "02",
      icon: <Workflow size={21} />,
      title: "Azure DevOps Integration",
      desc: "Automate development, testing and deployment workflows with Azure DevOps, GitHub Actions and infrastructure as code.",
    },
    {
      number: "03",
      icon: <ShieldCheck size={21} />,
      title: "Cloud Security",
      desc: "Strengthen your infrastructure with Microsoft Entra ID, Defender for Cloud, Key Vault and security policies.",
    },
  ];

  const services = [
    "Azure Cloud Migration & Modernization",
    "Azure Kubernetes Service (AKS)",
    "Enterprise .NET Application Hosting",
    "Azure SQL & Database Management",
    "DevOps & CI/CD Pipeline Automation",
    "Microsoft Entra ID & Identity Management",
    "Azure Security & Compliance",
    "24/7 Infrastructure Monitoring & Support",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050b14] text-slate-900 dark:text-white font-sans overflow-hidden selection:bg-sky-500 selection:text-white">
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-125 h-125 rounded-full blur-[130px] opacity-20"
            style={{ background: theme.glow }}
          />

          <div
            className="absolute top-[40%] -left-60 w-112.5 h-112.5 rounded-full blur-[140px] opacity-10"
            style={{ background: theme.primary }}
          />

          <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04] bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-size-[70px_70px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-7">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500">
                  <TbBrandAzure size={25} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-sky-600 dark:text-sky-400">
                    Azure Cloud Services
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                    Shilsha Technologies
                  </p>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-[-0.04em] leading-[1.02] max-w-5xl">
                Build the future
                <br />
                <span className="bg-linear-to-r from-[#0089D6] via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                  on Microsoft Azure.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-8">
                Transform your infrastructure with secure, scalable and
                intelligent Microsoft Azure solutions. From cloud migration and
                modernization to DevOps, containers and enterprise application
                development.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-5 mt-9">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#0089D6] hover:bg-[#0078c1] text-white text-sm font-bold shadow-xl shadow-sky-500/20 transition-all"
                  >
                    Talk to Azure Experts
                    <ArrowRight size={17} />
                  </Link>
                </motion.div>

                <a
                  href="#azure-services"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-colors"
                >
                  Explore services
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </div>

              {/* Trust line */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 pt-7 border-t border-slate-200 dark:border-white/10">
                <div>
                  <p className="text-xl font-bold">Cloud</p>
                  <p className="text-xs text-slate-500 mt-1">Architecture</p>
                </div>

                <div>
                  <p className="text-xl font-bold">DevOps</p>
                  <p className="text-xs text-slate-500 mt-1">Automation</p>
                </div>

                <div>
                  <p className="text-xl font-bold">Security</p>
                  <p className="text-xs text-slate-500 mt-1">Engineering</p>
                </div>

                <div>
                  <p className="text-xl font-bold">24/7</p>
                  <p className="text-xs text-slate-500 mt-1">Support</p>
                </div>
              </div>
            </motion.div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center min-h-95"
            >
              <div className="absolute w-70 h-70 sm:w-90 sm:h-90 rounded-full border border-sky-500/10" />
              <div className="absolute w-55 h-55 sm:w-72.5 sm:h-72.5 rounded-full border border-sky-500/15" />
              <div className="absolute w-40 h-40 sm:w-55 sm:h-55 rounded-full border border-sky-500/20" />
              <div className="absolute w-44 h-44 bg-sky-500/20 blur-[80px] rounded-full" />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <TbBrandAzure
                  size={180}
                  className="text-[#0089D6] dark:text-[#38bdf8] drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]"
                />
              </motion.div>

              {/* Floating labels */}
              <div className="absolute top-5 right-0 sm:right-5 px-4 py-2 rounded-full bg-white/80 dark:bg-white/6 backdrop-blur-md border border-slate-200 dark:border-white/10 text-xs font-semibold shadow-lg">
                Cloud Migration
              </div>

              <div className="absolute bottom-8 left-0 sm:left-5 px-4 py-2 rounded-full bg-white/80 dark:bg-white/6 backdrop-blur-md border border-slate-200 dark:border-white/10 text-xs font-semibold shadow-lg">
                Enterprise Cloud
              </div>

              <div className="absolute top-1/2 -right-4 sm:right-0 px-4 py-2 rounded-full bg-sky-500 text-white text-xs font-bold shadow-lg shadow-sky-500/20">
                Azure
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`py-9 md:px-8 ${
                  index !== 0
                    ? "border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10"
                    : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs font-bold text-sky-500 pt-1">
                    {feature.number}
                  </span>

                  <div>
                    <div className="flex items-center gap-2 text-sky-500 mb-3">
                      {feature.icon}
                    </div>

                    <h3 className="text-lg font-bold tracking-tight">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-sky-500 mb-5">
                Azure expertise
              </p>

              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] leading-tight">
                Scale your business with a cloud built for{" "}
                <span className="text-sky-500">enterprise.</span>
              </h2>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="space-y-7 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-400">
                <p>
                  For organizations built around the Microsoft technology
                  ecosystem, Azure delivers a powerful combination of
                  scalability, security and developer productivity.
                </p>

                <p>
                  Shilsha Technologies designs and engineers Azure environments
                  that are built around your business objectives — whether
                  you're migrating legacy infrastructure, modernizing
                  applications or building cloud-native platforms.
                </p>

                <p className="text-slate-900 dark:text-white font-semibold">
                  We don't simply move workloads to the cloud. We engineer cloud
                  environments designed to perform.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 mt-9 text-sm font-bold text-sky-600 dark:text-sky-400 group"
              >
                Discuss your Azure architecture
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="azure-services"
        className="relative py-24 sm:py-32 bg-slate-100/70 dark:bg-[#080f1b] border-y border-slate-200 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left title */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-sky-500 mb-5">
                What we do
              </p>

              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] leading-tight">
                Complete Azure
                <br />
                <span className="text-sky-500">engineering.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base leading-7 text-slate-500 dark:text-slate-400 max-w-sm">
                From your first cloud migration to continuous optimization, our
                engineers help you get more from Microsoft Azure.
              </p>
            </motion.div>

            {/* Services list */}
            <div className="lg:col-span-8">
              <div className="border-t border-slate-300 dark:border-white/10">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="group flex items-center gap-5 py-6 border-b border-slate-300 dark:border-white/10"
                  >
                    <span className="w-7 text-xs font-bold text-slate-400 group-hover:text-sky-500 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="flex-1 text-base sm:text-xl font-semibold group-hover:text-sky-500 transition-colors">
                      {service}
                    </h3>

                    <ArrowUpRight
                      size={19}
                      className="text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-sky-500 mb-5">
              Why Azure
            </p>

            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] leading-tight">
              Empower your business with{" "}
              <span className="text-sky-500">cloud flexibility.</span>
            </h2>

            <p className="mt-8 text-base sm:text-xl leading-8 text-slate-600 dark:text-slate-400">
              Azure gives modern organizations the flexibility to run
              applications across cloud, hybrid and distributed environments
              while maintaining enterprise-grade security and control.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mt-16">
            {[
              "Modernize legacy applications without disrupting operations.",
              "Build highly scalable and resilient cloud infrastructure.",
              "Automate deployments with DevOps and Infrastructure as Code.",
              "Secure applications with identity-driven cloud architecture.",
              "Optimize resources and control cloud infrastructure costs.",
              "Gain visibility through centralized monitoring and analytics.",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="flex gap-4 items-start"
              >
                <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-sky-500/10 text-sky-500 flex items-center justify-center">
                  <Check size={14} strokeWidth={3} />
                </div>

                <p className="text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default AzureServicesPage;

import React from "react";
import {
  ShieldCheck,
  Workflow,
  ArrowRight,
  GitPullRequest,
  Terminal,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaJenkins } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#D24939",
  secondary: "#b91c1c",
  glow: "#fca5a5",
};

const JenkinsServicesPage = () => {
  const features = [
    {
      icon: <Workflow size={21} />,
      number: "01",
      title: "Automated Pipelines",
      desc: "Streamline code building, testing, and deployment without manual intervention.",
    },
    {
      icon: <GitPullRequest size={21} />,
      number: "02",
      title: "Seamless Git Hooks",
      desc: "Trigger builds instantly from GitHub, GitLab, and Bitbucket commits or pull requests.",
    },
    {
      icon: <ShieldCheck size={21} />,
      number: "03",
      title: "Secure Quality Gates",
      desc: "Enforce automated testing, security scanning, and quality checks before every release.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-10 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#fca5a5] selection:text-white overflow-hidden">
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div
          className="absolute -top-32 right-0 w-105 h-105 rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: theme.primary }}
        />

        <div
          className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full blur-[100px] opacity-[0.04] pointer-events-none"
          style={{ background: theme.glow }}
        />

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          className="h-px mb-8 origin-left"
          style={{
            background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow}, transparent)`,
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{
                  background: `${theme.primary}12`,
                  color: theme.primary,
                }}
              >
                <FaJenkins size={19} />
              </span>

              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                Shilsha Technologies
                <span className="mx-2 text-slate-300 dark:text-slate-700">
                  /
                </span>
                Jenkins Expert Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] leading-[1.05] text-slate-900 dark:text-white max-w-4xl">
              Jenkins CI/CD
              <span className="block" style={{ color: theme.primary }}>
                Automation Services
              </span>
              <span className="block text-slate-700 dark:text-slate-300">
                Built for Speed.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-slate-600 dark:text-slate-400">
              Shilsha Technologies engineers robust, automated, and secure
              Jenkins pipelines that help engineering teams ship software
              faster, reduce deployment friction, and eliminate repetitive
              manual processes.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold shadow-lg shadow-red-900/10"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  Hire Jenkins Experts
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: theme.primary }}
                />
                CI/CD • DevOps • Automation
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Outer rings */}
              <div
                className="absolute inset-3 rounded-full border opacity-20"
                style={{ borderColor: theme.primary }}
              />

              <div
                className="absolute inset-10 rounded-full border opacity-20"
                style={{
                  borderColor: theme.glow,
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-16 rounded-full blur-3xl opacity-20"
                style={{ background: theme.primary }}
              />

              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <FaJenkins
                  size={150}
                  className="drop-shadow-2xl"
                  style={{ color: theme.primary }}
                />
              </motion.div>

              {/* Floating labels */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-0 sm:right-2 flex items-center gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300"
              >
                <Terminal size={14} style={{ color: theme.primary }} />
                Pipeline as Code
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 left-0 sm:left-2 flex items-center gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300"
              >
                <Gauge size={14} style={{ color: theme.primary }} />
                Faster Releases
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="py-7 md:px-7 first:md:pl-0 last:md:pr-0 group"
              >
                <div className="flex gap-4">
                  <div
                    className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${theme.primary}10`,
                      color: theme.primary,
                    }}
                  >
                    {feature.icon}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[10px] font-bold"
                        style={{ color: theme.primary }}
                      >
                        {feature.number}
                      </span>

                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Heading */}
            <div className="lg:col-span-5">
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: theme.primary }}
              >
                Jenkins Automation
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Accelerate release cycles with
                <span style={{ color: theme.primary }}>
                  {" "}
                  smarter automation.
                </span>
              </h2>

              <div
                className="mt-5 w-16 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                }}
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400">
              <p>
                Continuous integration and continuous deployment are essential
                for modern engineering velocity. Shilsha Technologies designs,
                optimizes, and maintains resilient Jenkins pipelines that
                automate repetitive delivery tasks and minimize deployment
                friction.
              </p>

              <p>
                From Jenkinsfile architecture and Git integrations to automated
                testing, security gates, Docker, and Kubernetes deployments, we
                build delivery workflows around your engineering process.
              </p>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 text-sm font-bold group"
                style={{ color: theme.primary }}
              >
                Talk to our DevOps team
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative border-y border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-[#0b1528]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: theme.primary }}
              >
                Why Jenkins
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Power seamless
                <span style={{ color: theme.primary }}>
                  {" "}
                  software delivery.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-md">
                Turn every code change into a predictable, repeatable, and
                observable software delivery process.
              </p>
            </motion.div>

            {/* Right content */}
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-5 border-l-2"
                style={{ borderColor: theme.primary }}
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Reliable automated delivery
                </h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  We implement automated CI/CD pipelines so code changes can be
                  built, tested, scanned, and shipped consistently with minimal
                  manual intervention.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative pl-5 border-l-2 border-slate-300 dark:border-slate-700"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Scalable DevOps infrastructure
                </h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  From distributed Jenkins agents to Docker and Kubernetes, our
                  architectures are designed to support growing development
                  teams and increasingly demanding workloads.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-5 border-l-2 border-slate-300 dark:border-slate-700"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Security at every stage
                </h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Integrate automated security scanning, credentials management,
                  quality gates, and controlled deployment permissions directly
                  into your delivery pipeline.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
            style={{
              background: `linear-gradient(${theme.primary}, ${theme.glow})`,
            }}
          />

          <div className="pl-6 sm:pl-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: theme.primary }}
              >
                Ready to automate?
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Build a faster software delivery pipeline.
              </h2>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Get expert Jenkins and DevOps guidance tailored to your
                engineering environment.
              </p>
            </div>

            <Link
              to="/contact-us"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              }}
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default JenkinsServicesPage;

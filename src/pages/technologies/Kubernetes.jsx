import React from "react";
import { ShieldCheck, Workflow, ArrowRight, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { SiKubernetes } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#326CE5",
  secondary: "#1d4ed8",
  glow: "#60a5fa",
};

const KubernetesServicesPage = () => {
  const features = [
    {
      icon: <Server size={19} />,
      title: "Container Orchestration",
      desc: "Manage thousands of containers with intelligent scheduling, scaling, and workload distribution.",
    },
    {
      icon: <Workflow size={19} />,
      title: "Zero-Downtime Releases",
      desc: "Deploy updates seamlessly using rolling releases, health checks, and canary strategies.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Cluster Security",
      desc: "Protect workloads with RBAC, network policies, secure access controls, and continuous monitoring.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-10 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200 overflow-hidden selection:bg-blue-500 selection:text-white">
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 pb-14">
        <div
          className="absolute -top-32 right-0 w-96 h-96 rounded-full blur-[120px] opacity-[0.08] pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10">
                <SiKubernetes size={17} />
              </span>

              <span>Kubernetes Consulting & DevOps</span>

              <span className="w-1 h-1 rounded-full bg-blue-500" />

              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Shilsha Technologies
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950 dark:text-white max-w-4xl">
              Kubernetes infrastructure built to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                }}
              >
                scale.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Shilsha Technologies helps businesses design, deploy, secure, and
              manage production-ready Kubernetes environments with automated
              scaling, self-healing, and high availability.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Hire Kubernetes Experts
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                EKS · GKE · AKS · On-Prem
              </span>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Rings */}
              <div className="absolute inset-5 rounded-full border border-blue-500/10" />
              <div className="absolute inset-10 rounded-full border border-blue-500/15" />
              <div className="absolute inset-16 rounded-full border border-blue-500/20" />

              {/* Glow */}
              <div
                className="absolute w-40 h-40 rounded-full blur-3xl opacity-20"
                style={{ background: theme.primary }}
              />

              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 text-[#326CE5] dark:text-[#60a5fa]"
              >
                <SiKubernetes size={115} />
              </motion.div>

              {/* Decorative dots */}
              <span className="absolute top-8 right-10 w-2 h-2 rounded-full bg-blue-400" />
              <span className="absolute bottom-12 left-8 w-1.5 h-1.5 rounded-full bg-blue-300" />
              <span className="absolute bottom-5 right-20 w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
          </motion.div>
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 h-px w-full origin-left"
          style={{
            background: `linear-gradient(90deg, ${theme.primary}, transparent)`,
          }}
        />
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-slate-200 dark:divide-slate-800">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="group py-5 md:px-7 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16"
          >
            {/* Heading */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                Kubernetes Engineering
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-950 dark:text-white">
                Automate and scale infrastructure with expert Kubernetes
                engineers.
              </h2>

              <div
                className="mt-5 w-16 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                }}
              />
            </div>

            {/* Content */}
            <div className="space-y-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Managing microservices at scale requires reliable container
                orchestration. Shilsha Technologies designs, deploys, and
                manages production-grade Kubernetes clusters with automated
                elasticity, health monitoring, and resilient infrastructure.
              </p>

              <p>
                From cluster architecture and managed Kubernetes to CI/CD,
                observability, security, and optimization, our engineers help
                you build an infrastructure platform that grows with your
                business.
              </p>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Talk to our Kubernetes team
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/2.5 dark:bg-blue-500/3" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Why Kubernetes
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Achieve enterprise resiliency with Kubernetes.
            </h2>
          </motion.div>

          <div className="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              As a premier DevOps and cloud engineering partner, we help
              enterprises migrate from legacy infrastructure to cloud-native
              Kubernetes environments. Automated scheduling, resource
              management, health checks, and self-healing capabilities help
              eliminate infrastructure bottlenecks and single points of failure.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Partner with our Kubernetes specialists to build, secure, and
              maintain scalable container platforms across AWS, Google Cloud,
              Azure, hybrid environments, and on-premise infrastructure.
            </motion.p>
          </div>

          {/* Bottom stats */}
          <div className="mt-10 pt-7 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
                EKS
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Amazon Kubernetes
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
                GKE
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Google Kubernetes
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
                AKS
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Azure Kubernetes
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
                24/7
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Cluster support
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default KubernetesServicesPage;

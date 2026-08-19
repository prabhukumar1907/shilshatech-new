import React from "react";
import { ShieldCheck, Workflow, ArrowRight, Box } from "lucide-react";
import { Link } from "react-router-dom";
import { FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#2496ED",
  secondary: "#0284c7",
  glow: "#60a5fa",
};

const DockerServicesPage = () => {
  const features = [
    {
      icon: <Box size={19} />,
      title: "Portable Containers",
      desc: "Package applications and dependencies together for reliable execution across any environment.",
    },
    {
      icon: <Workflow size={19} />,
      title: "Optimized Workflows",
      desc: "Accelerate development and deployment with lightweight images and efficient container workflows.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Container Security",
      desc: "Strengthen runtime security with vulnerability scanning, least-privilege access, and secure images.",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        pt-24
        bg-slate-50
        dark:bg-[#070d18]
        text-slate-800
        dark:text-slate-100
        font-sans
        overflow-hidden
      "
    >
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Background glow */}
        <div
          className="
            absolute
            -top-32
            right-0
            w-80
            h-80
            rounded-full
            blur-[120px]
            opacity-20
            pointer-events-none
          "
          style={{ background: theme.glow }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.3fr_.7fr]
            gap-10
            lg:gap-16
            items-center
          "
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-sky-600
                dark:text-sky-400
                mb-5
              "
            >
              <FaDocker size={19} />

              <span>Shilsha Technologies · Docker Services</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                tracking-[-0.04em]
                leading-[1.05]
                max-w-4xl
              "
            >
              Docker Containerization
              <span className="block" style={{ color: theme.primary }}>
                Built for Modern Delivery.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                mt-5
                max-w-2xl
                text-sm
                sm:text-base
                text-slate-600
                dark:text-slate-400
                leading-7
              "
            >
              Shilsha Technologies helps businesses containerize applications,
              modernize deployment workflows, and build secure, portable
              environments using Docker.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-7 flex flex-wrap items-center gap-5"
            >
              <Link
                to="/contact-us"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-lg
                  text-white
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Hire Docker Experts
                <ArrowRight size={15} />
              </Link>

              <span className="text-xs text-slate-500 dark:text-slate-500">
                Containerization · DevOps · Cloud
              </span>
            </motion.div>
          </div>

          {/* Floating Docker Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
          >
            <div className="relative">
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  blur-3xl
                  opacity-20
                "
                style={{ background: theme.glow }}
              />

              <FaDocker
                size={170}
                className="
                  relative
                  text-[#2496ED]
                  dark:text-[#60a5fa]
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section
        className="
          border-y
          border-slate-200
          dark:border-slate-800
        "
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              divide-y
              md:divide-y-0
              md:divide-x
              divide-slate-200
              dark:divide-slate-800
            "
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="
                  py-5
                  md:px-6
                  first:md:pl-0
                  last:md:pr-0
                  group
                "
              >
                <div className="flex items-start gap-3">
                  <div
                    className="
                      mt-0.5
                      shrink-0
                      text-sky-500
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold">{feature.title}</h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5" style={{ background: theme.primary }} />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
              "
              style={{ color: theme.primary }}
            >
              Docker Development
            </span>
          </div>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              tracking-tight
              leading-tight
            "
          >
            Streamline deployments with
            <span className="ml-2" style={{ color: theme.primary }}>
              professional Docker solutions.
            </span>
          </h2>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-7">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-7">
              Containerization is the backbone of modern software development.
              Shilsha Technologies helps businesses containerize monolithic
              applications, configure multi-container environments, and optimize
              Docker workflows for better reliability and efficiency.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-7">
              Our engineers create portable and repeatable deployment
              environments that reduce infrastructure inconsistencies, simplify
              scaling, and improve release velocity across development, staging,
              and production.
            </p>
          </div>
        </motion.div>
      </section>

      <section
        className="
          py-16
          border-y
          border-slate-200
          dark:border-slate-800
          bg-slate-100/50
          dark:bg-white/1.5
        "
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-8 h-0.5"
                style={{ background: theme.primary }}
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                "
                style={{ color: theme.primary }}
              >
                Why Docker
              </span>
            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-extrabold
                tracking-tight
              "
            >
              Build. Ship. Run.
              <span className="ml-2" style={{ color: theme.primary }}>
                Anywhere.
              </span>
            </h2>

            <div
              className="
                mt-8
                grid
                grid-cols-1
                md:grid-cols-2
                gap-x-12
                gap-y-8
              "
            >
              <div>
                <h3 className="text-base font-bold mb-2">
                  Consistent environments
                </h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Package your application and dependencies together so
                  development, testing, staging, and production environments
                  behave consistently.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold mb-2">Faster deployment</h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Lightweight container images allow teams to build, test,
                  distribute, and deploy applications faster.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold mb-2">Cloud flexibility</h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Deploy containerized workloads across AWS, Azure, GCP,
                  Kubernetes, or your own infrastructure.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold mb-2">
                  Secure infrastructure
                </h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Implement image scanning, non-root containers, access
                  controls, and secure runtime configurations.
                </p>
              </div>
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

export default DockerServicesPage;

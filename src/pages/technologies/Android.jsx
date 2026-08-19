import React from "react";
import {
  Zap,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaAndroid } from "react-icons/fa";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#16a34a",
  secondary: "#15803d",
  glow: "#4ade80",
};

const AndroidServicesPage = () => {
  const features = [
    {
      icon: <Zap size={20} />,
      title: "Native Performance",
      desc: "Kotlin-powered applications optimized for speed, responsiveness, battery efficiency, and modern Android hardware.",
    },
    {
      icon: <Workflow size={20} />,
      title: "Modern Android UI",
      desc: "Clean and intuitive interfaces built around modern Android design principles and responsive layouts.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Secure by Design",
      desc: "Strong authentication, encrypted data, secure storage, and permission management for business-critical apps.",
    },
  ];

  const capabilities = [
    "Custom Android application development",
    "Kotlin and Jetpack development",
    "Android UI/UX development",
    "API and backend integration",
    "Google Play Store publishing",
    "Android app migration",
    "Wear OS and IoT integration",
    "Application maintenance and optimization",
  ];

  return (
    <div
      className="
        min-h-screen
        overflow-hidden
        bg-slate-50
        dark:bg-[#070d18]
        text-slate-800
        dark:text-slate-100
        font-sans
        transition-colors
        duration-300
        selection:bg-green-500
        selection:text-white
      "
    >
    
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div
          className="
            absolute
            top-0
            right-0
            w-105
            h-105
            rounded-full
            blur-[120px]
            opacity-[0.08]
            pointer-events-none
          "
          style={{ background: theme.glow }}
        />

        <div
          className="
            absolute
            -left-37.5
            top-62.5
            w-75
            h-75
            rounded-full
            blur-[110px]
            opacity-[0.05]
            pointer-events-none
          "
          style={{ background: theme.primary }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  mb-5
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-green-700
                  dark:text-green-400
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-green-400
                      opacity-70
                    "
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                <FaAndroid size={17} />

                <span>Android Development Experts</span>
              </div>

              {/* Heading */}
              <h1
                className="
                  text-[2.6rem]
                  sm:text-5xl
                  lg:text-[4.2rem]
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-slate-950
                  dark:text-white
                "
              >
                Android App
                <span className="block">Development</span>
                <span
                  className="
                    block
                    bg-linear-to-r
                    from-green-600
                    via-green-500
                    to-emerald-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Company in India
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  max-w-2xl
                  mt-6
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-300
                "
              >
                We build powerful, secure, and scalable Android applications
                using Kotlin and modern Android technologies. From startup
                products to enterprise platforms, we transform ideas into
                high-performing mobile experiences.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 mt-7">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to="/contact-us"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-lg
                      bg-green-600
                      hover:bg-green-700
                      text-white
                      text-sm
                      font-semibold
                      shadow-lg
                      shadow-green-600/20
                      transition-all
                    "
                  >
                    Hire Android Developers
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>

                <span
                  className="
                    text-xs
                    sm:text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Kotlin • Jetpack • Android
                </span>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="
                lg:col-span-5
                flex
                justify-center
                lg:justify-end
              "
            >
              <div className="relative">
                {/* Outer Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    blur-[80px]
                    opacity-25
                  "
                  style={{
                    background: theme.glow,
                  }}
                />

                {/* Circle */}
                <div
                  className="
                    relative
                    w-56
                    h-56
                    sm:w-64
                    sm:h-64
                    lg:w-72
                    lg:h-72
                    rounded-full
                    flex
                    items-center
                    justify-center
                    border
                    border-green-500/20
                    dark:border-green-400/20
                    bg-linear-to-br
                    from-green-50
                    to-emerald-100
                    dark:from-green-500/10
                    dark:to-emerald-500/5
                  "
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaAndroid
                      className="
                        text-green-600
                        dark:text-green-400
                        drop-shadow-2xl
                      "
                      size={150}
                    />
                  </motion.div>

                  {/* Decorative Rings */}
                  <div
                    className="
                      absolute
                      -inset-4.5
                      rounded-full
                      border
                      border-green-500/10
                    "
                  />

                  <div
                    className="
                      absolute
                      -inset-9
                      rounded-full
                      border
                      border-green-500/5
                    "
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE STRIP
      ====================================================== */}
      <section className="py-10 sm:py-12">
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
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  py-6
                  md:px-7
                  first:pt-0
                  md:first:pl-0
                  last:pb-0
                  md:last:pr-0
                  group
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-3
                  "
                >
                  <div
                    className="
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      bg-green-100
                      text-green-600
                      dark:bg-green-500/10
                      dark:text-green-400
                      group-hover:scale-105
                      transition-transform
                    "
                  >
                    {feature.icon}
                  </div>

                  <h3
                    className="
                      text-base
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {feature.title}
                  </h3>
                </div>

                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-5xl"
          >
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-green-600
                dark:text-green-400
              "
            >
              Android Development
            </span>

            <h2
              className="
                mt-3
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                tracking-tight
                leading-tight
                text-slate-950
                dark:text-white
              "
            >
              Build powerful mobile products
              <span className="text-green-600 dark:text-green-400">
                {" "}
                that scale.
              </span>
            </h2>

            <div
              className="
                mt-5
                w-16
                h-1
                rounded-full
              "
              style={{
                background: `linear-gradient(
                  90deg,
                  ${theme.primary},
                  ${theme.glow}
                )`,
              }}
            />

            <div
              className="
                mt-7
                grid
                md:grid-cols-2
                gap-6
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
                text-slate-600
                dark:text-slate-300
              "
            >
              <p>
                Are you looking to capture the massive Android user base with a
                powerful application? Our Android development team creates
                native experiences engineered for speed, usability, scalability,
                and long-term maintainability.
              </p>

              <p>
                From product discovery and UI development to API integration,
                testing, deployment, and maintenance, we help businesses build
                reliable Android products that are ready for real-world users.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="
          py-14
          sm:py-16
          border-y
          border-slate-200
          dark:border-slate-800
          bg-white/50
          dark:bg-white/1.5
        "
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Heading */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="lg:col-span-5"
            >
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-green-600
                  dark:text-green-400
                "
              >
                What We Do
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  sm:text-4xl
                  font-extrabold
                  tracking-tight
                  text-slate-950
                  dark:text-white
                "
              >
                Complete Android
                <span className="block text-green-600 dark:text-green-400">
                  development services.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-400
                  max-w-lg
                "
              >
                Everything you need to turn your Android product idea into a
                scalable and production-ready mobile application.
              </p>
            </motion.div>

            {/* List */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="lg:col-span-7"
            >
              <div className="grid sm:grid-cols-2 gap-x-10">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      py-3
                      border-b
                      border-slate-200
                      dark:border-slate-800
                    "
                  >
                    <CheckCircle2
                      size={17}
                      className="
                        shrink-0
                        text-green-600
                        dark:text-green-400
                      "
                    />

                    <span
                      className="
                        text-sm
                        text-slate-700
                        dark:text-slate-300
                      "
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS BENEFITS
      ====================================================== */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-5xl"
          >
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-green-600
                dark:text-green-400
              "
            >
              Why Android
            </span>

            <h2
              className="
                mt-3
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                tracking-tight
                text-slate-950
                dark:text-white
              "
            >
              Create experiences users
              <span className="text-green-600 dark:text-green-400">
                {" "}
                love to use.
              </span>
            </h2>

            <div className="mt-7 space-y-5">
              <p
                className="
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-300
                "
              >
                As an Android Development Company in India, we provide deep
                expertise across the Android ecosystem. Native Android
                applications give businesses direct access to device
                capabilities, excellent runtime performance, and flexible
                integration with modern mobile technologies.
              </p>

              <p
                className="
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-300
                "
              >
                Our developers combine thoughtful product design, modern Kotlin
                development, robust APIs, and comprehensive testing to deliver
                applications that remain fast, secure, and maintainable as your
                business grows.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8">
              <Link
                to="/contact-us"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-green-600
                  dark:text-green-400
                  hover:text-green-700
                  dark:hover:text-green-300
                  transition-colors
                "
              >
                Start your Android project
                <ArrowRight size={16} />
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

export default AndroidServicesPage;

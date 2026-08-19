import React from "react";
import { Zap, ShieldCheck, Workflow, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#475569",
  secondary: "#334155",
  glow: "#94a3b8",
};

const IOSServicesPage = () => {
  const features = [
    {
      icon: <Zap size={22} />,
      title: "Native Swift Performance",
      desc: "Built using Apple's modern Swift language for lightning-fast execution speed and maximum hardware optimization.",
    },
    {
      icon: <Workflow size={22} />,
      title: "Exceptional UI/UX",
      desc: "Stunning, fluid animations and interfaces built with SwiftUI while following Apple's design principles.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Top-Tier Security",
      desc: "Apple's security architecture combined with advanced encryption helps protect sensitive enterprise data.",
    },
  ];

  const services = [
    {
      title: "Custom iOS App Development",
      desc: "Build feature-rich, high-performance native iOS applications from scratch using Swift and SwiftUI.",
    },
    {
      title: "SwiftUI Migration Services",
      desc: "Upgrade legacy Objective-C or older Swift applications to modern SwiftUI frameworks for cleaner architecture and improved rendering.",
    },
    {
      title: "iOS UI/UX Design",
      desc: "Design intuitive and elegant interfaces that provide exceptional experiences across iPhones, iPads, and Apple Watches.",
    },
    {
      title: "API & Backend Integration",
      desc: "Connect iOS applications securely with cloud databases, RESTful APIs, GraphQL services, and enterprise infrastructure.",
    },
    {
      title: "Apple Watch & iPad Applications",
      desc: "Extend your product ecosystem with dedicated companion applications for watchOS and iPadOS.",
    },
    {
      title: "App Store Submission & Optimization",
      desc: "Manage the complete App Store submission lifecycle while preparing your application for Apple's review requirements.",
    },
    {
      title: "iOS App Support & Maintenance",
      desc: "Keep your application reliable with ongoing monitoring, performance tuning, OS updates, bug fixes, and enhancements.",
    },
    {
      title: "Performance Profiling",
      desc: "Identify memory leaks, optimize CPU and GPU usage, reduce bottlenecks, and deliver smooth high-refresh-rate experiences.",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        pt-28
        pb-16
        bg-slate-50
        dark:bg-[#070d18]
        text-slate-800
        dark:text-slate-100
        transition-colors
        duration-200
        font-sans
        selection:bg-[#94a3b8]
        selection:text-white
        overflow-hidden
      "
    >
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              relative
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-12
              lg:gap-16
              items-center
              pb-16
              border-b
              border-slate-200
              dark:border-slate-800
            "
          >
            {/* Top accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 w-full h-0.5 origin-left"
              style={{
                background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
              }}
            />

            {/* Ambient Glow */}
            <div
              className="
                absolute
                -top-32
                -right-32
                w-96
                h-96
                rounded-full
                blur-3xl
                opacity-[0.08]
                pointer-events-none
              "
              style={{ background: theme.glow }}
            />

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-8 flex flex-col gap-6 pt-8"
            >
              {/* Label */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  w-fit
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-600
                  dark:text-slate-300
                "
              >
                <FaApple size={18} />

                <span>Shilsha Technologies Expert Services</span>
              </div>

              {/* Heading */}
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  tracking-tight
                  leading-[1.05]
                  text-slate-900
                  dark:text-white
                "
              >
                iOS App Development
                <span className="block text-slate-500 dark:text-slate-400">
                  Company in India
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  max-w-3xl
                  text-base
                  sm:text-lg
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-300
                "
              >
                Shilsha Technologies offers expert iOS app development services
                using Swift for secure, elegant, and high-performance Apple
                ecosystem applications. Transform your mobile vision into a
                premium digital experience.
              </p>

              {/* CTA */}
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="pt-2"
              >
                <Link
                  to="/contact-us"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-6
                    py-3
                    rounded-lg
                    bg-slate-900
                    dark:bg-white
                    text-white
                    dark:text-slate-900
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-slate-800
                    dark:hover:bg-slate-200
                    hover:shadow-lg
                  "
                >
                  <span>Hire iOS Developers</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Apple Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="
                lg:col-span-4
                flex
                justify-center
                lg:justify-end
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
                className="relative flex items-center justify-center"
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    blur-3xl
                    opacity-10
                  "
                  style={{ background: theme.glow }}
                />

                <FaApple
                  className="
                    relative
                    text-slate-800
                    dark:text-slate-200
                    transition-transform
                    duration-500
                  "
                  size={190}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="
                  py-8
                  md:px-8
                  first:pt-0
                  md:first:pl-0
                  last:pb-0
                  md:last:pr-0
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-4
                    text-slate-800
                    dark:text-slate-200
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-full
                      bg-slate-200
                      dark:bg-slate-800
                      text-slate-700
                      dark:text-slate-300
                    "
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-base font-bold">{feature.title}</h3>
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-5xl">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                  dark:text-slate-400
                  mb-5
                "
              >
                Native iOS Development
              </p>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-extrabold
                  tracking-tight
                  leading-tight
                  text-slate-900
                  dark:text-white
                "
              >
                Conquer the App Store with the Best iOS Development Company in
                India
              </h2>

              <div
                className="
                  w-24
                  h-1
                  rounded-full
                  mt-8
                  mb-10
                "
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                }}
              />

              <div
                className="
                  space-y-6
                  max-w-4xl
                  text-base
                  sm:text-lg
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-300
                "
              >
                <p>
                  Are you looking to target high-value users on iPhones and
                  iPads? Look no further. As a premier iOS App Development
                  Company, our expert team builds secure, feature-rich native
                  applications specifically designed for the Apple ecosystem.
                </p>

                <p>
                  We combine Swift, SwiftUI, modern architecture, and Apple's
                  development ecosystem to create applications that deliver
                  excellent performance and a polished user experience.
                </p>

                <p>
                  Contact us today to discuss your app specifications and
                  discover what native iOS development can achieve for your
                  organization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="
          py-20
          border-y
          border-slate-200
          dark:border-slate-800
          bg-slate-100/50
          dark:bg-[#0b1528]/40
        "
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-5xl">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                  dark:text-slate-400
                  mb-5
                "
              >
                Why Native iOS
              </p>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-extrabold
                  tracking-tight
                  leading-tight
                  text-slate-900
                  dark:text-white
                "
              >
                Build premium mobile experiences with iOS
              </h2>

              <div
                className="
                  w-24
                  h-1
                  rounded-full
                  mt-8
                  mb-10
                "
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                }}
              />

              <div
                className="
                  space-y-8
                  text-base
                  sm:text-lg
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-300
                "
              >
                <p>
                  As an iOS Development Company in India, we empower businesses
                  to connect with high-intent mobile users. Native iOS
                  applications provide seamless performance, strong security
                  standards, and deep access to Apple's hardware and software
                  capabilities.
                </p>

                <p>
                  Our engineers can take advantage of technologies such as Face
                  ID, ARKit, Core ML, Apple Pay, Push Notifications, CloudKit,
                  and other Apple frameworks to create sophisticated digital
                  products.
                </p>

                <p>
                  Partner with our expert iOS engineers to craft a world-class
                  application that stands out on the Apple App Store and
                  delivers measurable business value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-5xl">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                  dark:text-slate-400
                  mb-5
                "
              >
                Our iOS Services
              </p>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-extrabold
                  tracking-tight
                  leading-tight
                  text-slate-900
                  dark:text-white
                "
              >
                Complete iOS development solutions for modern businesses
              </h2>

              <div
                className="
                  w-24
                  h-1
                  rounded-full
                  mt-8
                  mb-12
                "
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                }}
              />
            </div>

            {/* Service List - No Cards */}
            <div
              className="
                border-t
                border-slate-200
                dark:border-slate-800
              "
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    grid
                    grid-cols-1
                    lg:grid-cols-12
                    gap-4
                    lg:gap-10
                    py-7
                    border-b
                    border-slate-200
                    dark:border-slate-800
                  "
                >
                  <div className="lg:col-span-1">
                    <span
                      className="
                        text-sm
                        font-semibold
                        text-slate-400
                        dark:text-slate-500
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <h3
                      className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-slate-900
                        dark:text-white
                        transition-colors
                        duration-200
                        group-hover:text-slate-500
                        dark:group-hover:text-slate-300
                      "
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-7">
                    <p
                      className="
                        text-sm
                        sm:text-base
                        leading-relaxed
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              border-y
              border-slate-300
              dark:border-slate-700
              py-12
              flex
              flex-col
              md:flex-row
              items-start
              md:items-center
              justify-between
              gap-8
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                  dark:text-slate-400
                  mb-3
                "
              >
                Start Your Project
              </p>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                Ready to build your next iOS application?
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  sm:text-base
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Talk to our iOS development experts and turn your application
                idea into a premium Apple experience.
              </p>
            </div>

            <Link
              to="/contact-us"
              className="
                shrink-0
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-lg
                bg-slate-900
                dark:bg-white
                text-white
                dark:text-slate-900
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-slate-800
                dark:hover:bg-slate-200
                hover:shadow-lg
              "
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default IOSServicesPage;

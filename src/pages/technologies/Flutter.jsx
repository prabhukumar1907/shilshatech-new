import React from "react";
import {
  Zap,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Layers3,
  Gauge,
  Code2,
  Cloud,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { RiFlutterFill } from "react-icons/ri";
import { motion } from "framer-motion";

import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#0284c7",
  secondary: "#0369a1",
  glow: "#38bdf8",
};

const features = [
  {
    number: "01",
    icon: Zap,
    title: "Lightning-Fast Execution",
    desc: "Build responsive Flutter applications with smooth animations, optimized rendering, and a performance-focused architecture.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Single Codebase",
    desc: "Develop applications for iOS and Android from one maintainable codebase while reducing development time and complexity.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Custom Widgets",
    desc: "Create consistent, scalable interfaces with reusable Flutter widgets designed around your product and brand requirements.",
  },
];

const benefits = [
  "Cross-platform mobile development",
  "Flutter and Dart expertise",
  "Custom UI/UX and widget development",
  "REST API and GraphQL integration",
  "Third-party SDK integration",
  "Firebase and cloud integration",
  "App Store and Play Store deployment",
  "Performance optimization",
  "Ongoing maintenance and support",
];

const whyChooseItems = [
  {
    icon: Code2,
    title: "Flutter & Dart Experts",
    desc: "Our experienced Flutter developers build scalable and visually polished applications using modern Flutter and Dart development practices.",
  },
  {
    icon: Layers3,
    title: "Custom Application Architecture",
    desc: "We design clean application structures that make your Flutter project easier to maintain, extend, test, and scale.",
  },
  {
    icon: Workflow,
    title: "Agile Development",
    desc: "Our agile approach enables rapid iterations, continuous feedback, transparent progress, and predictable project delivery.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Expertise",
    desc: "Build consistent mobile experiences across iOS and Android while maximizing code reuse and minimizing maintenance overhead.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    desc: "We optimize application architecture, widget rebuilds, state management, API calls, and rendering for smooth user experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Security",
    desc: "From code reviews to device testing, we follow structured QA practices to deliver stable, secure, and reliable applications.",
  },
];

const servicesList = [
  {
    icon: Smartphone,
    title: "Custom Flutter App Development",
    desc: "Build feature-rich, scalable, and high-performance Flutter applications tailored to your business requirements.",
  },
  {
    icon: Layers3,
    title: "Flutter UI/UX & Widget Development",
    desc: "Create beautiful, responsive interfaces using reusable custom widgets, Material Design, and Cupertino components.",
  },
  {
    icon: Workflow,
    title: "API & Backend Integration",
    desc: "Connect Flutter applications with REST APIs, GraphQL services, authentication systems, databases, and cloud platforms.",
  },
  {
    icon: Cloud,
    title: "Firebase & Cloud Integration",
    desc: "Implement authentication, push notifications, analytics, cloud storage, real-time databases, and other cloud capabilities.",
  },
  {
    icon: Wrench,
    title: "Flutter App Migration",
    desc: "Modernize existing native or hybrid mobile applications by migrating them to a maintainable Flutter architecture.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Identify application bottlenecks and optimize rendering, state management, network requests, and widget rebuilds.",
  },
  {
    icon: Smartphone,
    title: "App Store & Play Store Deployment",
    desc: "Prepare, configure, and deploy Flutter applications across Apple App Store and Google Play Store environments.",
  },
  {
    icon: ShieldCheck,
    title: "Flutter Support & Maintenance",
    desc: "Keep your application secure and reliable with continuous updates, bug fixes, performance improvements, and feature enhancements.",
  },
];

const FlutterServicesPage = () => {
  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        dark:bg-[#070d18]
        text-slate-800
        dark:text-slate-100
        font-sans
        selection:bg-[#38bdf8]
        selection:text-white
        overflow-hidden
      "
    >
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            -top-40
            left-1/2
            -translate-x-1/2
            w-150
            h-100
            rounded-full
            blur-[140px]
            opacity-[0.06]
          "
          style={{ background: theme.primary }}
        />

        <div
          className="
            absolute
            top-[55%]
            -right-60
            w-112.5
            h-112.5
            rounded-full
            blur-[150px]
            opacity-[0.04]
          "
          style={{ background: theme.glow }}
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
            dark:opacity-[0.035]
            bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            bg-size-[48px_48px]
          "
        />
      </div>

      <main className="relative z-10 pt-12">
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 sm:pt-24 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <RiFlutterFill
                  size={21}
                  className="text-sky-600 dark:text-sky-400"
                />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                  Flutter Development Services
                </span>
              </div>

              <h1
                className="
                  text-5xl
                  sm:text-6xl
                  lg:text-[72px]
                  xl:text-[82px]
                  font-black
                  tracking-[-0.055em]
                  leading-[0.95]
                  max-w-5xl
                "
              >
                Beautiful apps.
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
                  Built with Flutter.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-600 dark:text-slate-400">
                Build fast, scalable, and visually stunning cross-platform
                applications with a Flutter engineering team focused on
                performance, maintainability, and exceptional user experience.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-8">
                <Link
                  to="/contact-us"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-6
                    py-3.5
                    rounded-full
                    text-white
                    text-sm
                    font-bold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.primary},
                      ${theme.secondary}
                    )`,
                    boxShadow: "0 12px 30px rgba(2,132,199,0.18)",
                  }}
                >
                  Hire Flutter Developers
                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <a
                  href="#why-flutter"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-slate-600
                    dark:text-slate-300
                    hover:text-sky-600
                    dark:hover:text-sky-400
                    transition-colors
                  "
                >
                  Why Flutter
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
                Flutter engineering teams available for new projects
              </div>
            </motion.div>

            {/* RIGHT FLUTTER VISUAL */}

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
                  className="absolute inset-0 rounded-full border border-sky-500/20"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 34,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-7
                    rounded-full
                    border
                    border-dashed
                    border-sky-500/20
                  "
                />

                <div
                  className="
                    absolute
                    inset-13.75
                    rounded-full
                    blur-[45px]
                    opacity-20
                  "
                  style={{ background: theme.primary }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <RiFlutterFill
                      size={145}
                      className="
                        text-sky-600
                        dark:text-sky-400
                        drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]
                      "
                    />
                  </motion.div>
                </div>

                <span className="absolute top-2 right-0 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  Flutter
                </span>

                <span className="absolute bottom-5 left-0 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  Mobile • Web • UI
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
                      sm:py-9
                      md:px-7
                      first:md:pl-0
                      last:md:pr-0
                      border-b
                      md:border-b-0
                      md:border-r
                      last:border-r-0
                      border-slate-200
                      dark:border-white/[0.07]
                    "
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-sky-500">
                        {feature.number}
                      </span>

                      <Icon size={19} className="text-sky-500" />
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
          id="why-flutter"
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Why Flutter
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Build once.
                <span className="block text-slate-400 dark:text-slate-600">
                  Experience everywhere.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="border-l-2 border-sky-500/40 pl-6 sm:pl-8 space-y-6">
                <p className="text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300">
                  Are you looking to build beautiful mobile applications without
                  maintaining completely separate codebases? Our Flutter
                  development team creates modern applications that combine
                  expressive interfaces with scalable architecture.
                </p>

                <p className="text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                  From custom Flutter interfaces and API integrations to
                  Firebase, cloud services, performance optimization, and
                  app-store deployment, we provide an end-to-end development
                  solution for startups and enterprises.
                </p>

                <Link
                  to="/contact-us"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-bold
                    text-sky-600
                    dark:text-sky-400
                    hover:gap-4
                    transition-all
                  "
                >
                  Discuss your Flutter project
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
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                  Flutter Capabilities
                </span>

                <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
                  One framework.
                  <span className="block text-slate-400 dark:text-slate-600">
                    Multiple possibilities.
                  </span>
                </h2>
              </div>

              <p className="lg:col-span-6 lg:col-start-7 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                Flutter provides a powerful foundation for creating mobile
                applications with reusable components, expressive UI, integrated
                platform capabilities, and a streamlined development workflow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-slate-200 dark:border-white/8">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="
                    flex
                    items-center
                    gap-3
                    py-5
                    border-b
                    border-slate-200
                    dark:border-white/8
                    sm:px-5
                    first:sm:pl-0
                  "
                >
                  <CheckCircle2 size={18} className="text-sky-500 shrink-0" />

                  <span className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Our Flutter Services
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                From idea.
                <span className="block text-slate-400 dark:text-slate-600">
                  To App Store.
                </span>
              </h2>
            </div>

            <p className="lg:col-span-6 lg:col-start-7 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
              Our Flutter development services cover the complete product
              lifecycle, from application architecture and UI development to
              integrations, optimization, deployment, and long-term support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200 dark:border-white/8">
            {servicesList.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="
                    group
                    p-6
                    sm:p-7
                    border-r
                    border-b
                    border-slate-200
                    dark:border-white/8
                    transition-all
                    duration-300
                    hover:bg-sky-50/50
                    dark:hover:bg-sky-500/3
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-sky-50
                      dark:bg-sky-500/10
                      text-sky-600
                      dark:text-sky-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-base font-bold group-hover:text-sky-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                  Business Advantage
                </span>

                <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                  Technology that
                  <span className="block text-slate-400 dark:text-slate-600">
                    grows with your business.
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
                    As a Flutter Development Company in India, we help
                    businesses create modern mobile products with a streamlined
                    development process. Flutter allows teams to share
                    application logic and UI components across platforms,
                    helping reduce unnecessary development complexity.
                  </p>

                  <p className="text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                    Our Flutter development team focuses on building products
                    that are easy to maintain, optimize, and evolve as your
                    customer base and product requirements grow.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/8">
                  <Link
                    to="/contact-us"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-sky-600
                      dark:text-sky-400
                    "
                  >
                    Build with Flutter
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
                A Flutter team
                <span className="block text-slate-400 dark:text-slate-600">
                  built for results.
                </span>
              </h2>
            </div>

            <p className="lg:col-span-6 lg:col-start-7 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
              We combine Flutter expertise, product thinking, engineering
              discipline, and transparent communication to help businesses turn
              mobile product ideas into dependable digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200 dark:border-white/8">
            {whyChooseItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="
                    p-7
                    border-r
                    border-b
                    border-slate-200
                    dark:border-white/8
                    group
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-sky-50
                        dark:bg-sky-500/10
                        text-sky-600
                        dark:text-sky-400
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="text-base font-bold group-hover:text-sky-500 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-slate-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
            <div className="relative text-center">
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -top-20
                  w-72
                  h-72
                  rounded-full
                  blur-[100px]
                  opacity-[0.08]
                "
                style={{ background: theme.primary }}
              />

              <RiFlutterFill
                size={42}
                className="
                  relative
                  mx-auto
                  text-sky-600
                  dark:text-sky-400
                  mb-6
                "
              />

              <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
                Start your next project
              </p>

              <h2
                className="
                  relative
                  mt-4
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  tracking-tight
                  leading-none
                  max-w-4xl
                  mx-auto
                "
              >
                Ready to build something
                <span className="text-sky-500"> beautiful?</span>
              </h2>

              <p className="relative max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-8 text-slate-500 dark:text-slate-400">
                Let's transform your product vision into a fast, scalable, and
                engaging Flutter application designed for today's multi-platform
                world.
              </p>

              <div className="mt-7">
                <Link
                  to="/contact-us"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-3.5
                    rounded-full
                    text-white
                    text-sm
                    font-bold
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.primary},
                      ${theme.secondary}
                    )`,
                  }}
                >
                  Talk to Flutter Experts
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

export default FlutterServicesPage;

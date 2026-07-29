import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Target,
  Eye,
  MapPin,
  ChevronDown,
  GraduationCap,
  UtensilsCrossed,
  Plane,
  Home,
  Landmark,
  ShieldCheck,
  DollarSign,
  Hotel,
  Film,
  Award,
  Mail,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import AwardsSection from "../components/AwardsSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const theme = {
  primary: "#276ea5",
  darkNavy: "#0b1329",
  glow: "#38bdf8",
};

const MotionLink = motion.create(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const industries = [
  {
    title: "Education",
    icon: GraduationCap,
    desc: "Interactive e-learning portals, student management systems, and custom educational mobile apps.",
  },
  {
    title: "Restaurant",
    icon: UtensilsCrossed,
    desc: "Online ordering engines, table reservation portals, digital menus, and delivery platform integrations.",
  },
  {
    title: "Tour & Travel",
    icon: Plane,
    desc: "Comprehensive booking platforms, itinerary planners, interactive maps, and trip management tools.",
  },
  {
    title: "Real Estate",
    icon: Home,
    desc: "Property listing platforms, interactive maps, mortgage calculators, and lead capture pipelines.",
  },
  {
    title: "Banking",
    icon: Landmark,
    desc: "Encrypted transaction workflows, account management systems, and financial tracking dashboards.",
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    desc: "Policy administration, automated quote generation, claims processing, and client portals.",
  },
  {
    title: "Finance",
    icon: DollarSign,
    desc: "Loan calculators, investment management dashboards, and personalized wealth tools.",
  },
  {
    title: "Hotel Booking",
    icon: Hotel,
    desc: "Seamless reservation systems, real-time availability tracking, and secure payment integrations.",
  },
  {
    title: "Media & Entertainment",
    icon: Film,
    desc: "Content delivery systems, live streaming integrations, and audience engagement platforms.",
  },
];

const faqs = [
  {
    q: "What is the general process for IoT application development?",
    a: "In general, IoT app development begins with platform selection, followed by choosing hardware and development boards, designing for optimal usability, and ensuring high-speed firmware cloud connectivity.",
  },
  {
    q: "How much time will it take to build an IoT application?",
    a: "It takes around 12 weeks for a startup MVP with standard feature sets. Complex enterprise applications with custom firmware, hardware integrations, and AWS deployment range between 12 to 18 weeks.",
  },
  {
    q: "Why choose Shilsha Technologies for app & software development?",
    a: "Shilsha Technologies blends deep full-stack technical knowledge with extensive cross-industry experience, delivering scalable, highly secure solutions backed by agile project management.",
  },
  {
    q: "Does your company work according to my time zone preferences?",
    a: "Yes! We operate flexibly across global time zones (PST, EST, CST, MST, GMT, and IST) to guarantee overlapping communication windows and on-time project delivery.",
  },
  {
    q: "Can your developers work with my existing system, tool, or CRM?",
    a: "Absolutely. We routinely integrate with legacy systems, custom APIs, third-party software, and existing cloud infrastructures without interrupting ongoing business operations.",
  },
  {
    q: "Do you sign a Non-Disclosure Agreement (NDA)?",
    a: "Yes, confidentiality is strictly guaranteed. We sign standard NDAs before any deep technical discussions to ensure your business concept, assets, and intellectual property remain 100% secure.",
  },
];

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () => document.documentElement.classList.contains("dark");
    setIsDarkMode(checkDark());

    const observer = new MutationObserver(() => setIsDarkMode(checkDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans">
        {/* Modernized Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-12 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          {/* Subtle Background Glow Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={staggerItem}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-sm"
              >
                <Sparkles size={14} className="text-[#276ea5]" />
                <span>Leading Software Engineering Partner</span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]"
              >
                About{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-[#276ea5] to-blue-600 dark:from-[#38bdf8] dark:to-blue-400">
                  Shilsha Technologies
                </span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                transition={{ duration: 0.6 }}
                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
              >
                Hire India's expert team for Mobile App and Website Development
                Services. Delivering high-quality, cost-effective digital
                solutions tailored to accelerate global business growth.
              </motion.p>

              <motion.div
                variants={staggerItem}
                transition={{ duration: 0.6 }}
                className="pt-2 flex flex-wrap gap-4"
              >
                <MotionLink
                  to="/contact-us"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-2.5"
                  style={{ backgroundColor: "#276ea5" }}
                >
                  <span>Connect With Us</span>
                  <ArrowRight size={16} />
                </MotionLink>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-xl space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Who We Are
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Shilsha Technologies is a premier web and mobile app
                  development company specializing in custom digital solutions.
                  Our passion for technology drives us to deliver exceptional
                  results across web, mobile, cloud, and enterprise platforms.
                </p>
                <div className="pt-2 space-y-2.5">
                  {[
                    "Mobile App Development (iOS & Android)",
                    "Custom Web & Portal Engineering",
                    "Quality Assurance & Performance Testing",
                    "Digital Transformation & Cloud Services",
                  ].map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#276ea5] shrink-0"
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-6 max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Mission */}
            <motion.div
              variants={staggerItem}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white shadow-md shadow-blue-500/20"
                style={{ backgroundColor: "#276ea5" }}
              >
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                At Shilsha Technologies, our mission is to transform businesses
                and empower individuals through innovative web and mobile app
                solutions. We strive to create cutting-edge, user-centric
                experiences that enhance efficiency, productivity, and
                engagement across all industries.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={staggerItem}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white shadow-md shadow-blue-500/20"
                style={{ backgroundColor: "#276ea5" }}
              >
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Our Vision
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                At Shilsha Technologies, our vision is to be a pioneering force
                in web and mobile app development, empowering businesses with
                innovative solutions that drive growth and long-term success
                through seamless user experiences and scalable architecture.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          className="py-12 px-6 bg-slate-900 text-white border-y border-slate-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Improve Your Online Presence with Professional Web Development
              Services Today!
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Partner with Shilsha Technologies to scale your business with
              robust software applications.
            </p>
            <div>
              <MotionLink
                to="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block px-8 py-3.5 rounded-lg text-sm font-bold text-white transition-transform shadow-lg shadow-blue-500/20"
                style={{ backgroundColor: "#276ea5" }}
              >
                Get In Touch
              </MotionLink>
            </div>
          </div>
        </motion.section>

        <section className="py-12 px-6 max-w-7xl mx-auto">
          <motion.div
            className="mb-12 text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold mb-3 text-slate-900 dark:text-white">
              Industries We Cater
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              We deliver high-level customer satisfaction through innovative
              project management and robust web & mobile engineering.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {industries.map(({ title, icon: Icon, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-3 rounded-lg text-white"
                    style={{ backgroundColor: "#276ea5" }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <AwardsSection />

        <section className="py-12 px-6 max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-8 text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Where We Are
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <motion.div
              className="lg:col-span-4 p-8 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#276ea5] mb-4">
                  <Globe2 size={16} />
                  <span>India Development Center</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">
                  Shilsha Technologies
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  iThum Tower, Sector 62, Noida,
                  <br />
                  Uttar Pradesh 201301, INDIA
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="mailto:info@shilshatech.com"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#276ea5]"
                >
                  <Mail size={14} />
                  <span>info@shilshatech.com</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-8 min-h-75 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <iframe
                title="Shilsha Technologies Map"
                className="w-full h-full min-h-75 border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.494949419112!2d77.3783989695381!3d28.63036757560618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8a45d37eeb%3A0xebd3d070a044e5f9!2sShilsha%20Technologies!5e0!3m2!1sen!2sus!4v1704460082333!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-6 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800">
          <motion.h2
            className="text-2xl font-bold text-center mb-10 text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={faq.q}
                  variants={staggerItem}
                  transition={{ duration: 0.4 }}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left cursor-pointer font-semibold text-xs sm:text-sm flex items-center justify-between gap-4 text-slate-900 dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: "#276ea5" }}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
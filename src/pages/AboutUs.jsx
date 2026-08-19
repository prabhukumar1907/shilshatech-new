import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Eye,
  GraduationCap,
  UtensilsCrossed,
  Plane,
  Home,
  Landmark,
  ShieldCheck,
  DollarSign,
  Hotel,
  Film,
  Mail,
  Globe2,
  ChevronDown,
  Code2,
  Layers3,
  CloudCog,
  Smartphone,
} from "lucide-react";
import AwardsSection from "../components/AwardsSection";
import Footer from "../components/Footer";

const theme = {
  primary: "#276ea5",
  cyan: "#38bdf8",
  navy: "#07111f",
};

const industries = [
  {
    title: "Education",
    icon: GraduationCap,
    desc: "E-learning platforms, student systems, education portals and mobile applications.",
  },
  {
    title: "Restaurant",
    icon: UtensilsCrossed,
    desc: "Ordering platforms, digital menus, reservations and delivery integrations.",
  },
  {
    title: "Tour & Travel",
    icon: Plane,
    desc: "Booking engines, itinerary systems, interactive maps and travel management.",
  },
  {
    title: "Real Estate",
    icon: Home,
    desc: "Property platforms, map experiences, calculators and lead management systems.",
  },
  {
    title: "Banking",
    icon: Landmark,
    desc: "Secure financial workflows, account systems and transaction dashboards.",
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    desc: "Policy platforms, automated quotes, claims systems and customer portals.",
  },
  {
    title: "Finance",
    icon: DollarSign,
    desc: "Investment dashboards, loan tools and personalized financial experiences.",
  },
  {
    title: "Hotel Booking",
    icon: Hotel,
    desc: "Reservation systems, live availability and secure payment experiences.",
  },
  {
    title: "Media & Entertainment",
    icon: Film,
    desc: "Streaming platforms, content systems and audience engagement products.",
  },
];

const faqs = [
  {
    q: "What is the general process for IoT application development?",
    a: "IoT app development generally starts with platform selection, hardware and development-board planning, UX design, firmware development and cloud connectivity.",
  },
  {
    q: "How much time will it take to build an IoT application?",
    a: "A startup MVP with standard functionality generally takes around 12 weeks. More complex enterprise applications involving custom hardware, firmware and AWS deployment can take 12 to 18 weeks.",
  },
  {
    q: "Why choose Shilsha Technologies for app & software development?",
    a: "Shilsha Technologies combines full-stack engineering expertise with cross-industry experience to create scalable, secure and user-focused digital products.",
  },
  {
    q: "Does your company work according to my time zone preferences?",
    a: "Yes. Our teams can work across PST, EST, CST, MST, GMT and IST time zones to provide convenient communication windows.",
  },
  {
    q: "Can your developers work with my existing system, tool, or CRM?",
    a: "Yes. We integrate with legacy applications, APIs, CRMs, third-party software and existing cloud infrastructures.",
  },
  {
    q: "Do you sign a Non-Disclosure Agreement (NDA)?",
    a: "Yes. NDAs can be signed before detailed technical discussions to protect your business information, intellectual property and project concepts.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () => document.documentElement.classList.contains("dark");

    setIsDarkMode(checkDark());

    const observer = new MutationObserver(() => {
      setIsDarkMode(checkDark());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#050b14] dark:text-white font-sans overflow-hidden">
        <section className="relative px-6 lg:px-10 pt-24 pb-10 lg:pt-28 lg:pb-12 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-40 -right-40 w-125 h-125 rounded-full blur-[120px] opacity-20"
              style={{
                background: isDarkMode ? "#0ea5e9" : "#93c5fd",
              }}
            />

            <div
              className="absolute -bottom-40 -left-32 w-100 h-100 rounded-full blur-[120px] opacity-10"
              style={{
                background: "#276ea5",
              }}
            />

            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#276ea5 1px, transparent 1px), linear-gradient(90deg, #276ea5 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* LEFT */}
              <motion.div
                className="lg:col-span-8"
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  className="flex items-center gap-3 mb-5"
                >
                  <span className="w-8 h-px bg-[#276ea5]" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#276ea5] dark:text-[#38bdf8]">
                    About Shilsha Technologies
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  transition={{ duration: 0.55 }}
                  className="text-5xl sm:text-6xl lg:text-[76px] font-black tracking-[-0.045em] leading-[0.98]"
                >
                  Engineering
                  <br />
                  <span className="bg-linear-to-r from-[#276ea5] via-blue-500 to-[#38bdf8] bg-clip-text text-transparent">
                    Digital Futures.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.55 }}
                  className="mt-6 max-w-2xl text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  Shilsha Technologies builds high-performance web, mobile,
                  cloud and enterprise solutions that help ambitious businesses
                  turn complex ideas into scalable digital products.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.55 }}
                  className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5"
                >
                  {[
                    "Web Development",
                    "Mobile Engineering",
                    "Cloud Solutions",
                    "Digital Transformation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#276ea5] dark:bg-[#38bdf8]" />
                      {item}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* RIGHT VISUAL */}
              <motion.div
                className="lg:col-span-4 relative"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative aspect-square max-w-80 mx-auto">
                  {/* Rings */}
                  <div className="absolute inset-8 rounded-full border border-[#276ea5]/20 dark:border-[#38bdf8]/20" />
                  <div className="absolute inset-16 rounded-full border border-[#276ea5]/20 dark:border-[#38bdf8]/20" />
                  <div className="absolute inset-24 rounded-full border border-[#276ea5]/30 dark:border-[#38bdf8]/30" />

                  {/* Glow */}
                  <div className="absolute inset-20 rounded-full bg-[#276ea5]/10 dark:bg-[#38bdf8]/10 blur-2xl" />

                  {/* Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-28 h-28 rounded-full bg-white dark:bg-[#0b1626] border border-slate-200 dark:border-blue-400/20 shadow-xl flex items-center justify-center">
                      <Code2
                        size={46}
                        className="text-[#276ea5] dark:text-[#38bdf8]"
                      />

                      <motion.div
                        className="absolute -inset-3.5 rounded-full border border-[#38bdf8]/30"
                        animate={{
                          scale: [1, 1.12, 1],
                          opacity: [0.4, 0.1, 0.4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>

                  {/* Floating labels */}
                  <div className="absolute top-2 right-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Smartphone
                      size={13}
                      className="text-[#276ea5] dark:text-[#38bdf8]"
                    />
                    Mobile
                  </div>

                  <div className="absolute bottom-8 left-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <CloudCog
                      size={13}
                      className="text-[#276ea5] dark:text-[#38bdf8]"
                    />
                    Cloud
                  </div>

                  <div className="absolute top-1/2 -right-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Layers3
                      size={13}
                      className="text-[#276ea5] dark:text-[#38bdf8]"
                    />
                    Scale
                  </div>
                </div>
              </motion.div>
            </div>

            {/* STATS */}
            <motion.div
              className="mt-10 pt-5 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                ["01", "Product Engineering"],
                ["02", "Cross-Industry Expertise"],
                ["03", "Scalable Architecture"],
                ["04", "Long-Term Partnerships"],
              ].map(([number, title]) => (
                <div key={number} className="flex gap-3">
                  <span className="text-[11px] font-black text-[#276ea5] dark:text-[#38bdf8]">
                    {number}
                  </span>

                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    {title}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-10 py-12 lg:py-14 bg-white dark:bg-[#08111e]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Heading */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="lg:col-span-4"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#276ea5] dark:text-[#38bdf8] mb-3">
                  Our Philosophy
                </p>

                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  Built around ideas that create impact.
                </h2>
              </motion.div>

              {/* Mission / Vision */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#276ea5]/10 dark:bg-[#38bdf8]/10 flex items-center justify-center">
                    <Target
                      size={17}
                      className="text-[#276ea5] dark:text-[#38bdf8]"
                    />
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#276ea5] dark:text-[#38bdf8] mb-3">
                    Our Mission
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    Transforming ideas into useful technology.
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    We transform businesses through innovative web and mobile
                    solutions designed around real user needs, operational
                    efficiency and measurable business outcomes.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: 0.18 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#276ea5]/10 dark:bg-[#38bdf8]/10 flex items-center justify-center">
                    <Eye
                      size={17}
                      className="text-[#276ea5] dark:text-[#38bdf8]"
                    />
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#276ea5] dark:text-[#38bdf8] mb-3">
                    Our Vision
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    Building technology that lasts.
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    We aim to be a pioneering technology partner, creating
                    scalable digital experiences that help businesses grow,
                    adapt and succeed in an evolving digital landscape.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative px-6 sm:px-8 lg:px-12 py-16 lg:py-20 bg-[#07111f] text-white overflow-hidden">
          <div
            className="absolute top-0 right-0 w-125 h-125 rounded-full blur-[130px] opacity-15"
            style={{
              background: "#38bdf8",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
              <motion.div
                className="lg:col-span-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#38bdf8] font-bold mb-4">
                  Why We Build
                </p>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                  Technology should make
                  <span className="text-[#38bdf8]"> complexity disappear.</span>
                </h2>
              </motion.div>

              <motion.p
                className="lg:col-span-4 text-sm text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                From the first product concept to deployment and continuous
                improvement, we focus on creating digital systems that are
                intuitive, reliable and ready to scale.
              </motion.p>
            </div>

            {/* THINK / BUILD / EVOLVE */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 border-t border-white/10">
              {[
                [
                  "01",
                  "Think",
                  "Understand the problem before writing the solution.",
                ],
                [
                  "02",
                  "Build",
                  "Engineer products around people, performance and scale.",
                ],
                [
                  "03",
                  "Evolve",
                  "Continuously improve products as businesses grow.",
                ],
              ].map(([number, title, desc]) => (
                <motion.div
                  key={number}
                  className="pt-6 px-5 pb-2 sm:pr-8 sm:py-6 sm:border-r border-white/10 last:border-0"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: Number(number) * 0.06,
                  }}
                >
                  <span className="text-[11px] font-bold text-[#38bdf8]">
                    {number}
                  </span>

                  <h3 className="mt-2.5 text-lg font-bold">{title}</h3>

                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed max-w-xs">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-10 py-14 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="lg:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#276ea5] dark:text-[#38bdf8] mb-3">
                  Industry Experience
                </p>

                <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                  Built for different industries.
                </h2>
              </div>

              <p className="lg:col-span-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed lg:pt-7">
                Our engineering teams adapt technology to the workflows,
                customers and operational requirements of each industry rather
                than forcing businesses into generic solutions.
              </p>
            </motion.div>

            {/* GRID */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200 dark:border-slate-800"
            >
              {industries.map(({ title, icon: Icon, desc }, index) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="group min-h-45 p-5 sm:p-6 border-r border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300 hover:bg-slate-100/60 dark:hover:bg-white/2.5"
                >
                  {/* Hover accent */}
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-[#276ea5] dark:bg-[#38bdf8] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Icon
                      size={19}
                      className="text-[#276ea5] dark:text-[#38bdf8] group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-base font-bold mb-2 group-hover:text-[#276ea5] dark:group-hover:text-[#38bdf8] transition-colors">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <AwardsSection />

        <section className="px-6 lg:px-10 py-14 lg:py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <motion.div
                className="lg:col-span-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#276ea5] dark:text-[#38bdf8] mb-3">
                  Where We Are
                </p>

                <h2 className="text-4xl font-black tracking-tight leading-tight">
                  Our India
                  <br />
                  Development Center.
                </h2>

                <div className="mt-6 flex items-start gap-3">
                  <Globe2
                    size={17}
                    className="text-[#276ea5] dark:text-[#38bdf8] mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="text-sm font-bold">Shilsha Technologies</p>

                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      iThum Tower, Sector 62,
                      <br />
                      Noida, Uttar Pradesh 201301,
                      <br />
                      INDIA
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:info@shilshatech.com"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#276ea5] dark:hover:text-[#38bdf8] transition-colors"
                >
                  <Mail size={14} />
                  info@shilshatech.com
                </a>
              </motion.div>

              <motion.div
                className="lg:col-span-8 h-72 sm:h-80 overflow-hidden border border-slate-200 dark:border-slate-800"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <iframe
                  title="Shilsha Technologies Map"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.494949419112!2d77.3783989695381!3d28.63036757560618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8a45d37eeb%3A0xebd3d070a044e5f9!2sShilsha%20Technologies!5e0!3m2!1sen!2sus!4v1704460082333!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 lg:px-10 py-14 lg:py-16 bg-white dark:bg-[#08111e]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-8"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#276ea5] dark:text-[#38bdf8] mb-3">
                FAQ
              </p>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                Frequently asked questions.
              </h2>
            </motion.div>

            <div className="border-t border-slate-200 dark:border-slate-800">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.03,
                    }}
                    className="border-b border-slate-200 dark:border-slate-800"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-5 flex items-center justify-between gap-5 text-left cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-[11px] font-bold text-[#276ea5] dark:text-[#38bdf8] pt-0.5">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm sm:text-base font-bold group-hover:text-[#276ea5] dark:group-hover:text-[#38bdf8] transition-colors">
                          {faq.q}
                        </span>
                      </div>

                      <ChevronDown
                        size={17}
                        className={`shrink-0 text-[#276ea5] dark:text-[#38bdf8] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.22,
                          }}
                        >
                          <p className="pb-5 pl-8 sm:pl-9 pr-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;

import React from "react";
import {
  PenTool,
  Image,
  Sparkles,
  ArrowRight,
  Layers,
  MoveUpRight,
  Palette,
  Megaphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#8B5CF6",
  secondary: "#6D28D9",
  glow: "#DDD6FE",
  pink: "#EC4899",
};

const GraphicDesignServicesPage = () => {
  const capabilities = [
    {
      number: "01",
      icon: PenTool,
      title: "Brand Identity",
      desc: "Logos, typography, color systems and visual guidelines designed to make your brand instantly recognizable.",
    },
    {
      number: "02",
      icon: Megaphone,
      title: "Campaign Design",
      desc: "Social creatives, advertising visuals, banners and campaign assets built for attention and engagement.",
    },
    {
      number: "03",
      icon: Palette,
      title: "Visual Systems",
      desc: "A consistent design language that works across digital products, presentations, print and marketing.",
    },
  ];

  const services = [
    "Logo & Brand Identity",
    "Social Media Design",
    "Advertising & Campaign Creatives",
    "Presentation & Pitch Deck Design",
    "Packaging & Print Design",
    "Illustration & Visual Assets",
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#060912] text-slate-900 dark:text-white font-sans overflow-hidden selection:bg-purple-200 selection:text-purple-950">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 right-[-10%] w-125 h-125 rounded-full blur-[150px] opacity-[0.12]"
          style={{ background: theme.primary }}
        />

        <div
          className="absolute top-[45%] left-[-15%] w-100 h-100 rounded-full blur-[140px] opacity-[0.08]"
          style={{ background: theme.pink }}
        />
      </div>

      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-20">
        {/* subtle grid */}
        <div
          className="absolute inset-x-0 top-0 h-162.5 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(#8B5CF6 1px, transparent 1px),
              linear-gradient(90deg, #8B5CF6 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* eyebrow */}

              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-9 h-px"
                  style={{ background: theme.primary }}
                />

                <span
                  className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase"
                  style={{ color: theme.primary }}
                >
                  Creative Design Studio
                </span>
              </div>

              {/* heading */}

              <h1 className="max-w-5xl text-[2.8rem] sm:text-5xl lg:text-[5rem] font-black tracking-[-0.055em] leading-[0.94]">
                We design brands
                <br />
                <span
                  className="inline-block mt-2"
                  style={{
                    background: `linear-gradient(90deg, ${theme.primary}, ${theme.pink})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  people remember.
                </span>
              </h1>

              {/* description */}

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-7 text-slate-600 dark:text-slate-300">
                Shilsha Technologies creates distinctive brand identities,
                campaign visuals and digital experiences that turn businesses
                into recognizable brands.
              </p>

              {/* CTA */}

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-semibold shadow-lg shadow-purple-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/30"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  Start a design project
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <span className="text-xs sm:text-sm text-slate-400">
                  Identity · Digital · Campaigns · Print
                </span>
              </div>

              {/* trust line */}

              <div className="mt-10 flex items-center gap-6 text-xs text-slate-400">
                <span>01 — Strategy</span>
                <span>02 — Design</span>
                <span>03 — Delivery</span>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-70 sm:w-87.5 h-82.5 sm:h-100">

                <div
                  className="absolute inset-8 rounded-[45px] rotate-6 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.pink})`,
                  }}
                />

                <div
                  className="absolute inset-5 rounded-[45px] -rotate-3 opacity-20"
                  style={{
                    background: theme.glow,
                  }}
                />

                {/* main canvas */}

                <div className="absolute inset-0 rounded-[42px] bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-white/10 overflow-hidden">

                  <div
                    className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-[70px] opacity-40"
                    style={{ background: theme.primary }}
                  />

                  <div
                    className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full blur-[70px] opacity-25"
                    style={{ background: theme.pink }}
                  />

                  {/* giant typography */}

                  <div className="absolute top-8 left-8 text-[10px] tracking-[0.3em] uppercase text-slate-400">
                    SHILSHA / CREATIVE
                  </div>

                  <div className="absolute bottom-8 right-8 text-[10px] tracking-[0.25em] uppercase text-slate-400">
                    VISUAL SYSTEM
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        animate={{
                          rotate: [0, 8, -8, 0],
                          scale: [1, 1.04, 1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles
                          size={105}
                          strokeWidth={1}
                          style={{ color: theme.primary }}
                        />
                      </motion.div>

                      {/* floating dots */}

                      <motion.span
                        animate={{ y: [-5, 5, -5] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        className="absolute -top-5 -right-8 w-3 h-3 rounded-full"
                        style={{ background: theme.primary }}
                      />

                      <motion.span
                        animate={{ y: [5, -5, 5] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                        }}
                        className="absolute bottom-0 -left-8 w-2 h-2 rounded-full"
                        style={{ background: theme.pink }}
                      />
                    </div>
                  </div>

                  {/* corner numbers */}

                  <span className="absolute top-8 right-8 text-xs font-mono text-slate-400">
                    26
                  </span>

                  <span className="absolute bottom-8 left-8 text-xs font-mono text-slate-400">
                    001
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-slate-200 dark:border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`group relative py-8 sm:py-10 ${
                    index !== 0
                      ? "border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/8"
                      : ""
                  }`}
                >
                  <div className="md:px-7">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[11px] font-mono text-purple-500">
                        {item.number}
                      </span>

                      <Icon
                        size={21}
                        strokeWidth={1.6}
                        className="text-purple-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-xl font-bold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
                style={{ color: theme.primary }}
              >
                The Design Philosophy
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-black tracking-[-0.045em] leading-none">
                Good design gets noticed.
                <br />
                Great design gets remembered.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300">
                Your visual identity is more than a logo. It is how people
                recognize your business, understand your value and decide
                whether they trust you.
              </p>

              <div
                className="my-7 h-px"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, transparent)`,
                }}
              />

              <p className="text-base leading-7 text-slate-500 dark:text-slate-400">
                Our designers combine strategy, typography, composition, color
                and visual storytelling to build a consistent identity across
                every customer touchpoint — from websites and social media to
                presentations, packaging and print.
              </p>

              <Link
                to="/contact-us"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold"
                style={{ color: theme.primary }}
              >
                Build your visual identity
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-slate-100/60 dark:bg-[#0b1220]/60 border-y border-slate-200 dark:border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20">
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Capabilities
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.045em] leading-none">
                Everything your brand needs to look remarkable.
              </h2>

              <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-md">
                From a single campaign asset to a complete visual identity, our
                design systems are created to remain consistent as your brand
                grows.
              </p>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="group flex items-center justify-between gap-5 py-5 sm:py-6 border-b border-slate-200 dark:border-white/10"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[11px] font-mono text-slate-400">
                      0{index + 1}
                    </span>

                    <h3 className="text-base sm:text-lg font-semibold transition-colors duration-200 group-hover:text-purple-500">
                      {service}
                    </h3>
                  </div>

                  <MoveUpRight
                    size={17}
                    className="shrink-0 text-slate-400 transition-all duration-300 group-hover:text-purple-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden border-y border-slate-200 dark:border-white/10 py-12 sm:py-16"
          >
            <div
              className="absolute left-0 top-0 w-40 h-full opacity-10 blur-3xl"
              style={{ background: theme.primary }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <p
                  className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4"
                  style={{ color: theme.primary }}
                >
                  Let's Create
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.045em]">
                  Your next visual identity starts here.
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl">
                  Bring us your idea, product or brand challenge. We'll turn it
                  into a visual system built to stand out.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="group shrink-0 inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-semibold shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Talk to our designers
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

export default GraphicDesignServicesPage;

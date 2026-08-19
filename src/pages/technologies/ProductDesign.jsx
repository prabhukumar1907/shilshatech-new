import React from "react";
import { Box, Cpu, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#F59E0B",
  secondary: "#D97706",
  glow: "#fde68a",
};

const ProductDesignServicesPage = () => {
  const features = [
    {
      icon: <Workflow size={18} />,
      title: "Product Strategy & Discovery",
      desc: "Define product-market fit, user personas, and core value propositions.",
    },
    {
      icon: <Box size={18} />,
      title: "MVP Prototyping",
      desc: "Build focused prototypes to validate concepts with users and stakeholders.",
    },
    {
      icon: <Cpu size={18} />,
      title: "Design Systems & Scale",
      desc: "Create scalable systems that connect product design with engineering.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans overflow-hidden">
      {/* HERO */}
      <section className="pt-24 sm:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            {/* Accent */}
            <div
              className="absolute left-0 top-0 w-20 h-1 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
              }}
            />

            <div className="grid lg:grid-cols-[1.4fr_.6fr] gap-10 lg:gap-16 items-end pt-7">
              <div>
                {/* Label */}
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-600 dark:text-amber-300 mb-5">
                  <Workflow size={17} />
                  <span>Product Design & Strategy</span>
                </div>

                {/* Heading */}
                <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[1.02]">
                  End-to-End Digital Product Design
                  <span className="block" style={{ color: theme.primary }}>
                    Built for Real-World Growth
                  </span>
                </h1>

                <p className="max-w-2xl mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
                  Shilsha Technologies transforms innovative business ideas into
                  market-ready digital products through strategy, UX,
                  prototyping, design systems, and product engineering.
                </p>
              </div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:flex justify-end"
              >
                <div className="relative w-44 h-44">
                  <div
                    className="absolute inset-5 rounded-full blur-3xl opacity-25"
                    style={{ background: theme.glow }}
                  />

                  <div className="relative h-full flex items-center justify-center">
                    <Workflow
                      size={120}
                      strokeWidth={1}
                      style={{ color: theme.primary }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* FEATURES — NO CARDS */}
          <div className="mt-12 border-y border-slate-200 dark:border-slate-800">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="py-5 md:px-6 first:pl-0 last:pr-0"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-amber-600 dark:text-amber-300">
                      {feature.icon}
                    </span>

                    <h3 className="text-sm font-bold">{feature.title}</h3>
                  </div>

                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-8 h-px"
                style={{ background: theme.primary }}
              />

              <span
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: theme.primary }}
              >
                Product Strategy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] leading-tight">
              Build Market-Leading Products with Holistic Product Design
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mt-7">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
                Successful digital products require a seamless fusion of
                business strategy, user experience, and technical feasibility.
                Shilsha Technologies guides your product from ideation to launch
                and beyond.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
                Our product specialists combine strategic thinking, UX
                expertise, prototyping, and engineering to turn complex ideas
                into useful, scalable digital experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-white/2">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-8 lg:gap-16">
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight"
            >
              Bridge Vision and Execution with Expert Product Engineering
            </motion.h2>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7"
              >
                As a full-service technology agency, Shilsha Technologies
                integrates strategic product design with rigorous software
                development to create sustainable digital products.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7"
              >
                From early discovery and UX validation to design systems and
                engineering handoff, every stage is designed around usability,
                scalability, and measurable business outcomes.
              </motion.p>

              <div
                className="w-16 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                }}
              />
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

export default ProductDesignServicesPage;

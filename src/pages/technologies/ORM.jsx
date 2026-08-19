import React from "react";
import { ShieldCheck, Lock, Smile, Star } from "lucide-react";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#8B5CF6",
  secondary: "#6D28D9",
  glow: "#ddd6fe",
};

const OrmServicesPage = () => {
  const features = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Brand Reputation Monitoring",
      desc: "Track brand mentions, reviews, and sentiment across search engines, social platforms, and relevant online channels.",
    },
    {
      number: "02",
      icon: Lock,
      title: "Negative Review Mitigation",
      desc: "Address customer concerns and manage harmful or unfair feedback through transparent, ethical reputation strategies.",
    },
    {
      number: "03",
      icon: Smile,
      title: "Positive Sentiment Building",
      desc: "Strengthen your digital presence with authentic reviews, testimonials, thought leadership, and positive brand narratives.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-10 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans overflow-hidden">
    
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 pb-14">
        <div
          className="absolute -top-32 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: theme.glow }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-purple-600 dark:text-purple-300"
          >
            <span className="w-8 h-px bg-purple-500" />
            <ShieldCheck size={16} />
            <span>Shilsha Technologies · ORM Services</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-8 lg:gap-12 items-end">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Shape the way
                <span
                  className="block mt-2"
                  style={{
                    background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  people see your brand.
                </span>
              </h1>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex lg:justify-end"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 blur-3xl opacity-30"
                  style={{ background: theme.glow }}
                />

                <Star
                  size={105}
                  strokeWidth={1.1}
                  className="relative text-purple-500 dark:text-purple-300"
                />
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 max-w-3xl"
          >
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Shilsha Technologies protects your brand image, monitors online
              sentiment, and builds a credible digital reputation that
              strengthens consumer trust.
            </p>
          </motion.div>

          <div className="mt-10 h-px bg-linear-to-r from-purple-500/60 via-purple-300/30 to-transparent" />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300 mb-3">
              What we do
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Reputation management built around trust.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Your reputation is an important part of your digital identity.
              We combine monitoring, strategy, and content to help maintain a
              strong and credible online presence.
            </p>
          </motion.div>

          {/* Feature rows */}
          <div className="divide-y divide-slate-200 dark:divide-purple-500/15 border-y border-slate-200 dark:border-purple-500/15">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group py-6 sm:py-7 grid grid-cols-[45px_1fr] sm:grid-cols-[60px_1fr] gap-4"
                >
                  {/* Number */}
                  <div className="text-xs font-bold text-purple-500 dark:text-purple-300 pt-1">
                    {feature.number}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        className="text-purple-500 dark:text-purple-300 transition-transform duration-300 group-hover:scale-110"
                      />

                      <h3 className="text-base sm:text-lg font-bold group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300 mb-3">
                Digital Reputation
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Safeguard and enhance your digital reputation.
              </h2>
            </div>

            <div className="space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Your online reputation influences consumer trust, purchasing
                decisions, and long-term brand value. Shilsha Technologies
                provides comprehensive ORM services designed to monitor,
                manage, and strengthen your digital standing.
              </p>

              <p>
                From identifying reputation risks to developing positive brand
                narratives, our approach focuses on building a consistent,
                credible presence across the digital ecosystem.
              </p>
            </div>
          </div>

          <div
            className="mt-10 h-px w-full opacity-50"
            style={{
              background: `linear-gradient(to right, ${theme.primary}, transparent)`,
            }}
          />
        </motion.div>
      </section>

      <section className="relative py-12 border-y border-slate-200 dark:border-purple-500/15 bg-slate-100/50 dark:bg-[#0b1528]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300 mb-3">
                Why ORM matters
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Build lasting trust with your audience.
              </h2>
            </motion.div>

            <div className="space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 shrink-0" />

                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    As a full-service digital agency, Shilsha Technologies
                    combines proactive monitoring, sentiment management, and
                    strategic content to protect your corporate reputation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 shrink-0" />

                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    A consistent and credible digital presence helps your
                    audience discover the right stories about your brand while
                    strengthening confidence at every stage of the customer
                    journey.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden"
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${theme.primary}, ${theme.glow})`,
            }}
          />

          <div className="pl-6 sm:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300 mb-3">
              Reputation is an asset
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-4xl">
              Your digital reputation should work{" "}
              <span className="text-purple-500 dark:text-purple-300">
                for your brand.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Build credibility, strengthen trust, and create a digital
              presence that reflects the true value of your business.
            </p>
          </div>
        </motion.div>
      </section>
      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default OrmServicesPage;
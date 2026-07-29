import React from "react";
import { Share2, Users, MessageCircle, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#EC4899",
  secondary: "#BE185D",
  glow: "#fbcfe8",
};

const SmoServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#EC4899",
    secondaryIndigo: "#BE185D",
    electricCyan: "#fbcfe8",
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#fbcfe8] selection:text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-pink-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-1 w-full origin-left"
            style={{
              background: `linear-gradient(90deg, #EC4899, ${theme.glow})`,
            }}
          />

          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: theme.glow }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300 border border-pink-200 dark:border-pink-500/20 shadow-sm">
                <Share2 size={20} className="shrink-0" />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Social Media Optimization (SMO) & Brand Building in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies enhances your social media footprint,
                builds active community engagement, and accelerates brand
                loyalty across channels.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-shadow duration-200 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(90deg, #EC4899, ${theme.secondary})`,
                  }}
                >
                  <span>Hire SMO Experts</span>
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="p-10 rounded-2xl border border-slate-100 dark:border-pink-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner relative group">
                <div className="absolute inset-0 rounded-2xl bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Users
                  className="text-[#EC4899] dark:text-[#fbcfe8] transition-transform duration-500 group-hover:scale-110"
                  size={120}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Share2 size={20} />,
              title: "Profile Optimization",
              desc: "Optimize social handles, bio details, and brand messaging across platforms.",
            },
            {
              icon: <Heart size={20} />,
              title: "Engaging Content Creation",
              desc: "Design viral posts, carousels, reels, and stories that resonate with followers.",
            },
            {
              icon: <MessageCircle size={20} />,
              title: "Community Management",
              desc: "Foster real-time interactions, handle responses, and cultivate loyal brand advocates.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-pink-500/20 bg-white dark:bg-[#0b1528] shadow-sm transition-shadow duration-300 hover:shadow-xl group"
            >
              <div className="h-10 w-10 rounded-xl bg-pink-50 dark:bg-pink-500/10 flex items-center justify-center text-pink-700 dark:text-pink-300 mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2 group-hover:text-pink-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Intro Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-12 space-y-8">
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-snug"
              style={{ color: brandTheme.primaryBlue }}
            >
              Amplify Your Brand Presence Across Social Media Platforms
            </h2>
            <div
              className="w-full h-1 rounded-full my-6 opacity-40"
              style={{
                background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})`,
              }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-pink-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Social media is where your audience spends their time. Shilsha
                Technologies creates strategic SMO campaigns that turn passive
                scrollers into active brand advocates.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Partner with our social media experts today to build a vibrant
                community around your brand!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-pink-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Drive Meaningful Engagement and Trust
          </motion.h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-pink-500/20 shadow-lg transition-transform duration-300"
            >
              As a premier digital marketing partner, Shilsha Technologies
              integrates creative visual assets with active social optimization
              to maximize your reach.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-pink-500/20 shadow-lg transition-transform duration-300"
            >
              Contact our SMO team today to transform your social channels.
            </motion.p>
          </div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default SmoServicesPage;

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Star } from "lucide-react";

import award1 from "../assets/images/truspilot_award.png";
import award2 from "../assets/images/Shilsha technologies awards (2).png";
import award3 from "../assets/images/Shilsha technologies awards (5).png";
import award4 from "../assets/images/Shilsha technologies awards (6).png";
import award5 from "../assets/images/bark_award.jpg";
import award6 from "../assets/images/ambition_award.png";

const brandTheme = {
  primaryBlue: "#276ea5",
  electricCyan: "#60a5fa",
};

const awardsData = [
  {
    id: 1,
    name: "Clutch Top Developer",
    platform: "Clutch",
    rating: "4.9 / 5.0",
    image: award2,
    link: "https://www.clutch.co",
    badge: "Top Rated",
  },
  {
    id: 2,
    name: "Trustpilot Excellence",
    platform: "Trustpilot",
    rating: "5.0 Stars",
    image: award1,
    link: "https://www.trustpilot.com",
    badge: "Verified",
  },
  {
    id: 3,
    name: "GoodFirms Leader",
    platform: "GoodFirms",
    rating: "Top Mobile App Dev",
    image: award3,
    link: "https://www.goodfirms.co",
    badge: "Industry Leader",
  },
  {
    id: 4,
    name: "Software Suggest Leader",
    platform: "Software Suggest",
    rating: "Best Usability",
    image: award4,
    link: "https://www.softwaresuggest.com",
    badge: "Excellence",
  },
  {
    id: 5,
    name: "Bark Certificate of Excellence",
    platform: "Bark",
    rating: "Great Service",
    image: award5,
    link: "https://www.bark.com",
    badge: "Top Pro",
  },
  {
    id: 6,
    name: "AmbitionBox Award",
    platform: "AmbitionBox",
    rating: "Top Workplace",
    image: award6,
    link: "https://www.ambitionbox.com",
    badge: "Top Choice",
  },
];

const marqueeItems = [...awardsData, ...awardsData, ...awardsData];

const AwardsSection = () => {
  return (
    <section
      id="awards"
      className="relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden font-sans select-none bg-slate-50 text-slate-900 dark:bg-[#060b13] dark:text-white"
    >
      {/* Background Ambient Glowing Lights */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-96 h-96 sm:w-125 sm:h-125 rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: brandTheme.primaryBlue }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/4 w-96 h-96 sm:w-125 sm:h-125 rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: brandTheme.electricCyan }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-wider uppercase backdrop-blur-xl shadow-lg bg-blue-50 border-blue-200/60 text-[#276ea5] dark:bg-[#276ea5]/15 dark:border-sky-400/30 dark:text-sky-400"
          >
            <Award size={14} className="animate-pulse" />
            <span>Validated Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight leading-tight"
          >
            Awards &{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#276ea5] to-[#1d4ed8] dark:from-white dark:to-sky-400">
              Recognition
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed max-w-2xl text-slate-600 dark:text-slate-400"
          >
            Our web and mobile app development company has garnered significant
            recognition from industry leaders including Trustpilot, Clutch, and
            GoodFirms.
          </motion.p>
        </div>

        {/* Right-to-Left Infinite Marquee Container */}
        <div className="relative w-full overflow-hidden group">
          {/* Side Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-20 pointer-events-none bg-linear-to-r from-slate-50 to-transparent dark:from-[#060b13]" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-20 pointer-events-none bg-linear-to-l from-slate-50 to-transparent dark:from-[#060b13]" />

          {/* Continuous Moving Track */}
          <motion.div
            className="flex gap-6 w-max py-4"
            animate={{
              x: ["0%", "-33.333%"],
            }}
            transition={{
              ease: "linear",
              duration: 28,
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((award, index) => (
              <motion.a
                key={`${award.id}-${index}`}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group/card relative rounded-2xl p-4 border backdrop-blur-xl flex flex-col items-center justify-between transition-all duration-300 shadow-lg overflow-hidden h-52 w-56 shrink-0 bg-white border-slate-200 dark:bg-[#0a1220]/75 dark:border-white/10"
              >
                {/* Top Glowing Beam */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${brandTheme.electricCyan}, transparent)`,
                  }}
                />

                {/* Badge Header */}
                <div className="w-full flex justify-between items-center mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-slate-100 border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">
                    <ShieldCheck size={10} className="text-emerald-400" />
                    {award.badge}
                  </span>

                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover/card:opacity-100 transition-opacity text-[#276ea5] dark:text-sky-400"
                  />
                </div>

                {/* Image */}
                <div className="relative my-auto py-2 flex items-center justify-center w-full h-20">
                  <img
                    src={award.image}
                    alt={award.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover/card:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Title & Rating */}
                <div className="text-center w-full pt-2 border-t border-dashed border-slate-200 dark:border-white/10">
                  <h3 className="text-xs font-bold truncate text-slate-900 dark:text-white">
                    {award.platform}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-[11px] font-semibold mt-0.5 text-[#276ea5] dark:text-sky-400">
                    <Star size={10} className="fill-current text-amber-400" />
                    <span>{award.rating}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
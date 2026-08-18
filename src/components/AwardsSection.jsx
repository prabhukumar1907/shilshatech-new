import React, { useRef, useState, useEffect } from "react";
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
  { id: 1, name: "Clutch Top Developer", platform: "Clutch", rating: "4.9 / 5.0", image: award2, link: "https://www.clutch.co", badge: "Top Rated" },
  { id: 2, name: "Trustpilot Excellence", platform: "Trustpilot", rating: "5.0 Stars", image: award1, link: "https://www.trustpilot.com", badge: "Verified" },
  { id: 3, name: "GoodFirms Leader", platform: "GoodFirms", rating: "Top Mobile App Dev", image: award3, link: "https://www.goodfirms.co", badge: "Industry Leader" },
  { id: 4, name: "Software Suggest Leader", platform: "Software Suggest", rating: "Best Usability", image: award4, link: "https://www.softwaresuggest.com", badge: "Excellence" },
  { id: 5, name: "Bark Certificate of Excellence", platform: "Bark", rating: "Great Service", image: award5, link: "https://www.bark.com", badge: "Top Pro" },
  { id: 6, name: "AmbitionBox Award", platform: "AmbitionBox", rating: "Top Workplace", image: award6, link: "https://www.ambitionbox.com", badge: "Top Choice" },
];

const marqueeItems = [...awardsData, ...awardsData, ...awardsData];

const AwardsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden font-sans select-none bg-slate-50 text-slate-900 dark:bg-[#060b13] dark:text-white"
    >
      <style>{`
        @keyframes pulseGlowA {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.2); opacity: 0.25; }
        }
        @keyframes pulseGlowB {
          0%, 100% { transform: scale(1.2); opacity: 0.2; }
          50% { transform: scale(1); opacity: 0.3; }
        }
        @keyframes awardsMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .glow-a {
          animation: pulseGlowA 10s ease-in-out infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }
        .glow-b {
          animation: pulseGlowB 12s ease-in-out infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }
        .awards-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: awardsMarquee 28s linear infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }
        .awards-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient glows: CSS-driven, paused off-screen, reduced blur radius */}
      <div
        className="glow-a absolute top-1/3 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-[110px] pointer-events-none"
        style={{ backgroundColor: brandTheme.primaryBlue, willChange: "transform, opacity" }}
      />
      <div
        className="glow-b absolute bottom-10 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-[110px] pointer-events-none"
        style={{ backgroundColor: brandTheme.electricCyan, willChange: "transform, opacity" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-wider uppercase shadow-lg bg-blue-50 border-blue-200/60 text-[#276ea5] dark:bg-[#276ea5]/20 dark:border-sky-400/30 dark:text-sky-400"
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

        <div className="relative w-full overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-20 pointer-events-none bg-linear-to-r from-slate-50 to-transparent dark:from-[#060b13]" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-20 pointer-events-none bg-linear-to-l from-slate-50 to-transparent dark:from-[#060b13]" />

          {/* CSS-driven marquee instead of Framer Motion — GPU compositor
              only, no per-frame React reconciliation */}
          <div className="awards-marquee-track gap-6 py-4">
            {marqueeItems.map((award, index) => (
              <a
                key={`${award.id}-${index}`}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card relative rounded-2xl p-4 border flex flex-col items-center justify-between transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02] shadow-lg overflow-hidden h-52 w-56 shrink-0 bg-white border-slate-200 dark:bg-[#0a1220]/95 dark:border-white/10"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${brandTheme.electricCyan}, transparent)`,
                  }}
                />

                <div className="w-full flex justify-between items-center mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-slate-100 border-slate-200 text-slate-600 dark:bg-white/10 dark:border-white/10 dark:text-slate-300">
                    <ShieldCheck size={10} className="text-emerald-400" />
                    {award.badge}
                  </span>

                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover/card:opacity-100 transition-opacity text-[#276ea5] dark:text-sky-400"
                  />
                </div>

                <div className="relative my-auto py-2 flex items-center justify-center w-full h-20">
                  <img
                    src={award.image}
                    alt={award.name}
                    width={140}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover/card:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="text-center w-full pt-2 border-t border-dashed border-slate-200 dark:border-white/10">
                  <h3 className="text-xs font-bold truncate text-slate-900 dark:text-white">
                    {award.platform}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-[11px] font-semibold mt-0.5 text-[#276ea5] dark:text-sky-400">
                    <Star size={10} className="fill-current text-amber-400" />
                    <span>{award.rating}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
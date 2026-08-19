import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Star } from "lucide-react";

import award1 from "../assets/images/truspilot_award.png";
import award2 from "../assets/images/Shilsha technologies awards (2).png";
import award3 from "../assets/images/Shilsha technologies awards (5).png";
import award4 from "../assets/images/Shilsha technologies awards (6).png";
import award5 from "../assets/images/bark_award.jpg";
import award6 from "../assets/images/ambition_award.png";

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
};

const awardsData = [
  {
    id: 1,
    name: "Clutch Top Developer",
    platform: "Clutch",
    rating: "4.9 / 5.0",
    image: award2,
    badge: "Top Rated",
  },
  {
    id: 2,
    name: "Trustpilot Excellence",
    platform: "Trustpilot",
    rating: "5.0 Stars",
    image: award1,
    badge: "Verified",
  },
  {
    id: 3,
    name: "GoodFirms Leader",
    platform: "GoodFirms",
    rating: "Top Mobile App Dev",
    image: award3,
    badge: "Industry Leader",
  },
  {
    id: 4,
    name: "Software Suggest Leader",
    platform: "Software Suggest",
    rating: "Best Usability",
    image: award4,
    badge: "Excellence",
  },
  {
    id: 5,
    name: "Bark Certificate of Excellence",
    platform: "Bark",
    rating: "Great Service",
    image: award5,
    badge: "Top Pro",
  },
  {
    id: 6,
    name: "AmbitionBox Award",
    platform: "AmbitionBox",
    rating: "Top Workplace",
    image: award6,
    badge: "Top Choice",
  },
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
      className="relative overflow-hidden bg-slate-50 py-12 font-sans text-slate-900 transition-colors duration-500 dark:bg-[#050a11] dark:text-white sm:py-16"
    >
      <style>{`
        @keyframes awardsGlowA {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: .06;
          }

          50% {
            transform: translate3d(20px, -15px, 0) scale(1.15);
            opacity: .12;
          }
        }

        @keyframes awardsGlowB {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: .04;
          }

          50% {
            transform: translate3d(-20px, 10px, 0) scale(1.12);
            opacity: .09;
          }
        }

        @keyframes awardsMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        .awards-glow-a {
          animation: awardsGlowA 12s ease-in-out infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }

        .awards-glow-b {
          animation: awardsGlowB 15s ease-in-out infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }

        .awards-marquee {
          display: flex;
          width: max-content;
          animation: awardsMarquee 32s linear infinite;
          animation-play-state: ${inView ? "running" : "paused"};
          will-change: transform;
        }

        .awards-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Theme glow */}
      <div
        className="awards-glow-a pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full blur-[120px]"
        style={{
          backgroundColor: brandTheme.primaryBlue,
          willChange: "transform, opacity",
        }}
      />

      <div
        className="awards-glow-b pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full blur-[120px]"
        style={{
          backgroundColor: brandTheme.electricCyan,
          willChange: "transform, opacity",
        }}
      />

      {/* Subtle theme grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${brandTheme.primaryBlue} 1px, transparent 1px),
            linear-gradient(to bottom, ${brandTheme.primaryBlue} 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-9 grid gap-5 lg:grid-cols-[1fr_400px] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-4 flex items-center gap-3"
            >
              <span
                className="h-px w-8"
                style={{
                  background: `linear-gradient(
                    90deg,
                    ${brandTheme.primaryBlue},
                    ${brandTheme.electricCyan}
                  )`,
                }}
              />

              <span
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{
                  color: brandTheme.primaryBlue,
                }}
              >
                <Award size={13} />
                Validated Excellence
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-3xl font-black leading-none tracking-[-0.04em] sm:text-4xl lg:text-5xl"
            >
              Recognition that{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(
                    90deg,
                    ${brandTheme.primaryBlue},
                    ${brandTheme.secondaryIndigo},
                    ${brandTheme.electricCyan}
                  )`,
                }}
              >
                speaks for itself.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400"
          >
            Recognized by leading technology and business platforms for
            delivering high-quality digital products and exceptional client
            experiences.
          </motion.p>
        </div>

        {/* AWARDS SLIDER */}
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-linear-to-r from-slate-50 to-transparent dark:from-[#050a11]" />

          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-linear-to-l from-slate-50 to-transparent dark:from-[#050a11]" />

          {/* Top line */}
          <div className="border-t border-slate-200 dark:border-white/10" />

          <div className="overflow-hidden">
            <div className="awards-marquee">
              {marqueeItems.map((award, index) => (
                <div
                  key={`${award.id}-${index}`}
                  className="
                    group relative flex w-62.5 shrink-0
                    flex-col justify-between
                    px-5 py-6
                    transition-all duration-500
                    sm:w-70
                    sm:px-6
                    sm:py-7
                  "
                >
                  {/* Hover theme line */}
                  <span
                    className="
                      absolute left-5 right-5 top-0 h-px
                      scale-x-0 opacity-0
                      transition-all duration-500
                      group-hover:scale-x-100
                      group-hover:opacity-100
                    "
                    style={{
                      background: `linear-gradient(
                        90deg,
                        transparent,
                        ${brandTheme.electricCyan},
                        transparent
                      )`,
                    }}
                  />

                  {/* Soft hover glow */}
                  <div
                    className="
                      pointer-events-none absolute inset-4
                      rounded-3xl opacity-0 blur-2xl
                      transition-opacity duration-500
                      group-hover:opacity-100
                    "
                    style={{
                      backgroundColor: `${brandTheme.primaryBlue}10`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Badge */}
                    <div
                      className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        color: brandTheme.primaryBlue,
                      }}
                    >
                      <ShieldCheck
                        size={12}
                        style={{
                          color: brandTheme.electricCyan,
                        }}
                      />

                      {award.badge}
                    </div>

                    {/* Award image */}
                    <div className="flex h-24 items-center justify-center py-3">
                      <img
                        src={award.image}
                        alt={award.name}
                        width={150}
                        height={85}
                        loading="lazy"
                        decoding="async"
                        className="
                          max-h-full
                          max-w-37.5
                          object-contain
                          opacity-80
                          transition-all duration-500
                          group-hover:scale-105
                          group-hover:opacity-100
                          drop-shadow-[0_8px_20px_rgba(39,110,165,0.12)]
                        "
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    {/* Award information */}
                    <div className="border-t border-dashed border-slate-200 pt-3 dark:border-white/10">
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold tracking-tight text-slate-800 dark:text-slate-200">
                            {award.platform}
                          </h3>

                          <p className="mt-0.5 truncate text-[10px] text-slate-400">
                            {award.name}
                          </p>
                        </div>

                        <div
                          className="flex shrink-0 items-center gap-1 text-[9px] font-bold"
                          style={{
                            color: brandTheme.primaryBlue,
                          }}
                        >
                          <Star
                            size={10}
                            className="fill-current"
                            style={{
                              color: brandTheme.electricCyan,
                            }}
                          />

                          {award.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom line */}
          <div className="border-b border-slate-200 dark:border-white/10" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: brandTheme.electricCyan,
                boxShadow: `0 0 10px ${brandTheme.electricCyan}`,
              }}
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Trusted by industry platforms
            </span>
          </div>

          <span className="text-[11px] text-slate-400">
            Built on quality. Recognized by results.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;

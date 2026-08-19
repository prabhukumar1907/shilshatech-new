import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2 } from "lucide-react";

import biz2credit from "../assets/images/icon/clientslogo/biz2credit.png";
import pinelabs from "../assets/images/icon/clientslogo/pinelabs.png";
import Namestecredit from "../assets/images/icon/clientslogo/Namestecredit.png";
import scoreme from "../assets/images/icon/clientslogo/scoreme.png";
import Agribazaar from "../assets/images/icon/Agribazaar.png";
import unravel from "../assets/images/icon/unravel.png";
import Kitabel from "../assets/images/icon/clientslogo/Kitabel.png";
import Bccs from "../assets/images/icon/clientslogo/Bccs.png";
import Ulearn from "../assets/images/icon/clientslogo/Ulearn.png";
import Torum from "../assets/images/icon/clientslogo/Torum.png";
import Zenuis from "../assets/images/icon/clientslogo/Zenuis.png";

const brandTheme = {
  primaryBlue: "#276ea5",
  electricCyan: "#60a5fa",
};

const row1Clients = [
  {
    name: "Biz2Credit",
    logo: biz2credit,
    category: "FinTech",
  },
  {
    name: "Pine Labs",
    logo: pinelabs,
    category: "Payments",
  },
  {
    name: "Namaste Credit",
    logo: Namestecredit,
    category: "Banking",
  },
  {
    name: "ScoreMe",
    logo: scoreme,
    category: "Analytics",
  },
  {
    name: "Agribazaar",
    logo: Agribazaar,
    category: "AgriTech",
  },
  {
    name: "Unravel",
    logo: unravel,
    category: "Media",
  },
];

const row2Clients = [
  {
    name: "Kitabel",
    logo: Kitabel,
    category: "E-Commerce",
  },
  {
    name: "BCCS",
    logo: Bccs,
    category: "Enterprise",
  },
  {
    name: "ULearn",
    logo: Ulearn,
    category: "EdTech",
  },
  {
    name: "Torum",
    logo: Torum,
    category: "Web3",
  },
  {
    name: "Zenius",
    logo: Zenuis,
    category: "Learning",
  },
];

const marqueeRow1 = [...row1Clients, ...row1Clients, ...row1Clients];

const marqueeRow2 = [...row2Clients, ...row2Clients, ...row2Clients];

const ClientLogo = ({ client }) => {
  return (
    <div className="group relative flex h-24 w-52 shrink-0 items-center justify-center px-8 sm:h-26 sm:w-60 sm:px-10">
      {/* Color glow on hover */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-30"
        style={{
          backgroundColor: brandTheme.electricCyan,
        }}
      />

      {/* Logo */}
      <img
        src={client.logo}
        alt={client.name}
        width={170}
        height={70}
        loading="lazy"
        decoding="async"
        className="
          relative z-10
          max-h-16
          max-w-42.5
          w-auto
          object-contain
          opacity-80
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:opacity-100
          drop-shadow-sm
          group-hover:drop-shadow-[0_8px_20px_rgba(96,165,250,0.25)]
        "
        onError={(e) => {
          e.currentTarget.style.display = "none";

          if (e.currentTarget.nextElementSibling) {
            e.currentTarget.nextElementSibling.classList.remove("hidden");
          }
        }}
      />

      {/* Fallback */}
      <span className="hidden relative z-10 text-sm font-bold text-slate-700 dark:text-white">
        {client.name}
      </span>

      {/* Small category */}
      <div
        className="
          absolute
          bottom-1
          left-1/2
          -translate-x-1/2
          translate-y-2
          whitespace-nowrap
          opacity-0
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-sky-500">
          {client.category}
        </span>
      </div>
    </div>
  );
};

const ClientSlider = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-10
        font-sans
        text-slate-900
        transition-colors
        duration-500
        dark:bg-[#04080e]
        dark:text-white
        sm:py-12
        lg:py-14
      "
    >
      <style>{`
        @keyframes clientsLTR {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        @keyframes clientsRTL {
          from {
            transform: translate3d(-33.333%, 0, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes clientAmbient {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: .08;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: .16;
          }
        }

        .clients-row-one {
          animation: clientsLTR 30s linear infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }

        .clients-row-two {
          animation: clientsRTL 34s linear infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }

        .clients-row-one:hover,
        .clients-row-two:hover {
          animation-play-state: paused;
        }

        .client-ambient {
          animation: clientAmbient 12s ease-in-out infinite;
          animation-play-state: ${inView ? "running" : "paused"};
        }

        @media (prefers-reduced-motion: reduce) {
          .clients-row-one,
          .clients-row-two,
          .client-ambient {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      <div
        className="
          client-ambient
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-125
          w-200
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[150px]
        "
        style={{
          backgroundColor: brandTheme.primaryBlue,
        }}
      />

      {/* Cyan glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-80
          w-80
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      {/* Purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-10
          h-80
          w-80
          rounded-full
          bg-violet-500/10
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-8 px-5 sm:px-8 lg:px-10">
          <div className="grid items-end gap-5 lg:grid-cols-[1fr_430px]">
            {/* Heading */}
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mb-3 flex items-center gap-3"
              >
                <span
                  className="
                    h-px
                    w-10
                    bg-linear-to-r
                    from-[#276ea5]
                    to-sky-400
                  "
                />

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#276ea5]
                    dark:text-sky-400
                  "
                >
                  <Globe2 size={13} />
                  Global Client Network
                </span>
              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-none
                  tracking-[-0.045em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Trusted by teams{" "}
                <span
                  className="
                    bg-linear-to-r
                    from-[#276ea5]
                    via-[#2563eb]
                    to-cyan-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  building what's next.
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
            >
              <p className="max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
                We partner with ambitious companies across finance, commerce,
                education, media, enterprise and emerging technology.
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.8)]" />

                <span>
                  Technology partnerships that move businesses forward
                </span>

                <ArrowUpRight size={13} className="text-sky-400" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          {/* Left fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              bottom-0
              z-30
              w-20
              bg-linear-to-r
              from-slate-50
              via-slate-50/80
              to-transparent
              dark:from-[#04080e]
              dark:via-[#04080e]/80
            "
          />

          {/* Right fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              bottom-0
              z-30
              w-20
              bg-linear-to-l
              from-slate-50
              via-slate-50/80
              to-transparent
              dark:from-[#04080e]
              dark:via-[#04080e]/80
            "
          />

          {/* TOP LINE */}
          <div className="mx-5 border-t border-slate-200 dark:border-white/10 sm:mx-8 lg:mx-10" />

          {/* ROW 1 */}
          <div className="overflow-hidden">
            <div
              className="clients-row-one flex w-max"
              style={{
                willChange: "transform",
              }}
            >
              {marqueeRow1.map((client, index) => (
                <ClientLogo
                  key={`row1-${client.name}-${index}`}
                  client={client}
                />
              ))}
            </div>
          </div>

          {/* MIDDLE LINE */}
          <div className="mx-5 border-t border-slate-200 dark:border-white/10 sm:mx-8 lg:mx-10" />

          {/* ROW 2 */}
          <div className="overflow-hidden">
            <div
              className="clients-row-two flex w-max"
              style={{
                willChange: "transform",
              }}
            >
              {marqueeRow2.map((client, index) => (
                <ClientLogo
                  key={`row2-${client.name}-${index}`}
                  client={client}
                />
              ))}
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="mx-5 border-t border-slate-200 dark:border-white/10 sm:mx-8 lg:mx-10" />
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 px-5 text-center">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,.8)]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Scroll through our ecosystem
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,.8)]" />
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;

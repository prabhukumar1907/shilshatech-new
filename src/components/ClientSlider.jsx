import React from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

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
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
  darkCanvas: "#060b13",
};

const row1Clients = [
  { name: "Biz2Credit", logo: biz2credit, category: "FinTech" },
  { name: "Pine Labs", logo: pinelabs, category: "Payments" },
  { name: "Namaste Credit", logo: Namestecredit, category: "Banking" },
  { name: "ScoreMe", logo: scoreme, category: "Analytics" },
  { name: "Agribazaar", logo: Agribazaar, category: "AgriTech" },
  { name: "Unravel", logo: unravel, category: "Media" },
];

const row2Clients = [
  { name: "Kitabel", logo: Kitabel, category: "E-Commerce" },
  { name: "BCCS", logo: Bccs, category: "Enterprise" },
  { name: "ULearn", logo: Ulearn, category: "EdTech" },
  { name: "Torum", logo: Torum, category: "Web3" },
  { name: "Zenius", logo: Zenuis, category: "Learning" },
];

const marqueeRow1 = [...row1Clients, ...row1Clients, ...row1Clients];
const marqueeRow2 = [...row2Clients, ...row2Clients, ...row2Clients];

const ClientSlider = () => {
  return (
    <section
      id="clients"
      className="relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden font-sans select-none bg-slate-50 text-slate-900 dark:bg-[#04080e] dark:text-white"
    >
      {/* Background Grid & Radial Glow Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${brandTheme.primaryBlue} 1px, transparent 1px), linear-gradient(to bottom, ${brandTheme.primaryBlue} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Ambient Radial Lights */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 rounded-full blur-[180px] pointer-events-none opacity-20"
        style={{ backgroundColor: brandTheme.primaryBlue }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md text-xs font-mono uppercase tracking-widest border mb-4 bg-sky-100 border-[#276ea5]/30 text-[#276ea5] dark:bg-sky-400/10 dark:border-sky-400/30 dark:text-sky-400"
            >
              <Globe2 size={13} className="animate-spin-slow" />
              <span>Global Client Network</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              Powering Visionaries Across{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#276ea5] to-blue-600 dark:from-[#60a5fa] dark:to-sky-400">
                Every Scale
              </span>
            </motion.h2>
          </div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-4 rounded-2xl border backdrop-blur-md shrink-0 shadow-sm bg-white border-slate-300 dark:bg-[#0a1220]/60 dark:border-white/10"
          >
            <div className="text-center px-2">
              <p className="text-xl font-black text-[#276ea5] dark:text-sky-400">
                150+
              </p>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Products Shipped
              </p>
            </div>
            <div className="w-px h-8 bg-slate-300 dark:bg-white/10" />
            <div className="text-center px-2">
              <p className="text-xl font-black text-emerald-500">99.4%</p>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Retention Rate
              </p>
            </div>
          </motion.div>
        </div>

        {/* Dual Stream Marquee */}
        <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
          {/* Side Fade Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-linear-to-r from-slate-50 to-transparent dark:from-[#04080e]" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-linear-to-l from-slate-50 to-transparent dark:from-[#04080e]" />

          {/* Stream 1: Moving Right-to-Left */}
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeRow1.map((client, idx) => (
              <div
                key={`row1-${client.name}-${idx}`}
                className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 shrink-0 w-48 h-24 hover:scale-105 shadow-md bg-white border-slate-200 dark:bg-slate-900/75 dark:border-white/10"
              >
                {/* Scaled Prominent Logo Image */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-32.5 w-auto h-auto object-contain transition-all duration-300 filter drop-shadow-sm group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.classList.remove(
                        "hidden"
                      );
                    }
                  }}
                />

                {/* Text Fallback if Image Fails */}
                <span className="hidden text-sm font-bold text-center text-slate-800 dark:text-white">
                  {client.name}
                </span>

                {/* Category Badge */}
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-blue-500 transition-colors">
                  {client.category}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Stream 2: Moving Left-to-Right */}
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{ ease: "linear", duration: 34, repeat: Infinity }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeRow2.map((client, idx) => (
              <div
                key={`row2-${client.name}-${idx}`}
                className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 shrink-0 w-48 h-24 hover:scale-105 shadow-md bg-white border-slate-200 dark:bg-slate-900/75 dark:border-white/10"
              >
                {/* Scaled Prominent Logo Image */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-32.5 w-auto h-auto object-contain transition-all duration-300 filter drop-shadow-sm group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.classList.remove(
                        "hidden"
                      );
                    }
                  }}
                />

                {/* Text Fallback if Image Fails */}
                <span className="hidden text-sm font-bold text-center text-slate-800 dark:text-white">
                  {client.name}
                </span>

                {/* Category Badge */}
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-cyan-500 transition-colors">
                  {client.category}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
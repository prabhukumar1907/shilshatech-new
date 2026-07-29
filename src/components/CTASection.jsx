import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, PhoneCall, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const theme = {
  primary: "#276ea5",
  secondary: "#1d4ed8",
  glow: "#60a5fa",
};

const CTASection = ({ darkMode = false }) => {
  return (
    <section
      id="cta"
      className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans transition-colors duration-500 ${
        darkMode ? "bg-[#070d18] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background Radial Glow Effects */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 blur-[140px] pointer-events-none rounded-full"
        style={{
          background: `radial-gradient(circle, ${theme.primary}25 0%, ${theme.glow}15 100%)`,
        }}
      />

      {/* Grid Pattern Mesh Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${
            darkMode ? theme.glow : theme.primary
          } 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-3xl border p-8 sm:p-12 lg:p-16 backdrop-blur-2xl text-center shadow-2xl overflow-hidden ${
            darkMode
              ? "bg-[#0b1528]/80 border-blue-500/20 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
              : "bg-white/90 border-slate-200/80 shadow-slate-200/60"
          }`}
        >
          {/* Top Accent Line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1"
            style={{
              background: `linear-gradient(to right, transparent, ${theme.glow}, transparent)`,
            }}
          />

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 transition-colors ${
              darkMode
                ? "bg-[#276ea5]/20 border-[#276ea5]/40 text-[#60a5fa]"
                : "bg-blue-50 border-blue-200 text-[#276ea5]"
            }`}
          >
            <Sparkles size={14} />
            <span>Ready to Scale Your Business?</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight sm:leading-tight">
            Take Your Business to the Next Level with Premier{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: darkMode
                  ? `linear-gradient(135deg, #ffffff 20%, ${theme.glow} 100%)`
                  : `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
              }}
            >
              Web & Mobile App Development
            </span>
          </h2>

          {/* Supporting Copy */}
          <p
            className={`mt-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Partner with engineering experts to turn your complex ideas into scalable, high-converting digital products. Let's build your next breakthrough together.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              style={{
                background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                boxShadow: "0 10px 25px -5px rgba(39, 110, 165, 0.4)",
              }}
            >
              <Rocket size={18} className="transition-transform group-hover:-translate-y-0.5" />
              <span>Start Your Project</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact-us"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                darkMode
                  ? "bg-[#276ea5]/20 border-[#276ea5]/40 text-slate-200 hover:text-white hover:bg-[#276ea5]/40"
                  : "bg-blue-50 border-blue-200/80 text-[#276ea5] hover:bg-blue-100"
              }`}
            >
              <PhoneCall size={16} />
              <span>Book a Free Call</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
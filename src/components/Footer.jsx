import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Code2,
} from "lucide-react";

import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";
import logo from "../assets/shilshalogofinal.webp";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="relative font-sans bg-slate-50 text-slate-700 dark:bg-[#060b13] dark:text-slate-200 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.08] bg-[radial-gradient(#276ea5_1px,transparent_1px)] dark:bg-[radial-gradient(#60a5fa_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div
        className="absolute -top-32 left-1/4 w-125 h-75 rounded-full blur-[130px] pointer-events-none opacity-20 bg-[#276ea5]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-100 h-62.5 rounded-full blur-[120px] pointer-events-none opacity-20 bg-[#276ea5]"
        style={{ willChange: "transform" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          <div className="lg:col-span-3 space-y-5">
            <Link to="/" className="items-center group inline-block">
              <div className="relative">
                <img
                  src={logo}
                  alt="Shilsha Technologies"
                  width={140}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark:drop-shadow-[0_0_10px_rgba(96,165,250,0.25)]"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 pr-2">
              Part of ATS USA,{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                Shilsha Technologies
              </strong>{" "}
              delivers enterprise software engineering, AI, RPA, Mobile App
              development, Web applications, and automated QA services.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              {[
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/shilshatechnologies",
                  label: "Facebook",
                  color: "#1877F2",
                },
                {
                  icon: BsInstagram,
                  href: "https://www.instagram.com/shilsha_technologies",
                  label: "Instagram",
                  color: "#E4405F",
                },
                {
                  icon: BsLinkedin,
                  href: "https://www.linkedin.com/company/shilsha-technologies",
                  label: "LinkedIn",
                  color: "#0A66C2",
                },
                {
                  icon: BsTwitterX,
                  href: "https://twitter.com/shilshatech",
                  label: "Twitter",
                  color: "#000000",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="relative group w-9 h-9 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-[#60a5fa]/50"
                >
                  <item.icon
                    size={15}
                    color={`${item.color}`}
                    className="relative z-10 transition-transform duration-300 group-hover:text-white group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 text-[#276ea5] dark:text-[#60a5fa]">
              <Sparkles size={13} />
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              {[
                "AI & RPA Solutions",
                "Mobile App Dev",
                "Web Applications",
                "QA & Automation",
                "Application Support",
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="relative inline-flex items-center gap-1 group py-0.5 transition-colors duration-300 hover:text-[#276ea5] dark:hover:text-[#60a5fa]"
                  >
                    <span>{link}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-[#60a5fa]"
                    />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 text-[#276ea5] dark:text-[#60a5fa]">
              <Code2 size={13} />
              Hire Developers
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              {[
                {
                  name: "ReactJS Developers",
                  path: "/hire-developers/react-developer",
                },
                {
                  name: "Node.js Developers",
                  path: "/hire-developers/nodejs-developer",
                },
                {
                  name: "Full Stack Experts",
                  path: "/hire-developers/full-stack-developer",
                },
                {
                  name: "Mobile App Engineers",
                  path: "/hire-developers/mobile-app-developer",
                },
                {
                  name: "AI & ML Specialists",
                  path: "/hire-developers/ai-ml-developer",
                },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="relative inline-flex items-center gap-1 group py-0.5 transition-colors duration-300 hover:text-[#276ea5] dark:hover:text-[#60a5fa]"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-[#60a5fa]"
                    />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#276ea5] dark:text-[#60a5fa]">
              Address
            </h4>

            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="shrink-0 mt-0.5 text-[#276ea5] dark:text-[#60a5fa]"
                />
                <address className="not-italic leading-relaxed text-xs sm:text-sm">
                  Shilsha Technologies
                  <br />
                  iThum Tower, Sector 62, Noida
                  <br />
                  Uttar Pradesh 201301, INDIA
                </address>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone
                  size={16}
                  className="shrink-0 text-[#276ea5] dark:text-[#60a5fa]"
                />
                <a
                  href="tel:+911204120113"
                  className="relative inline-block group py-0.5 hover:text-[#276ea5] dark:hover:text-[#60a5fa] transition-colors text-xs sm:text-sm"
                >
                  +91 - 120 - 412 - 0113
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="shrink-0 text-[#276ea5] dark:text-[#60a5fa]"
                />
                <a
                  href="mailto:info@shilshatech.com"
                  className="relative inline-block group py-0.5 hover:text-[#276ea5] dark:hover:text-[#60a5fa] transition-colors text-xs sm:text-sm"
                >
                  info@shilshatech.com
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#276ea5] dark:text-[#60a5fa]">
              Want to ask something?
            </h4>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-xs">
                <CheckCircle2 size={16} />
                <span>Thank you! Your query has been submitted.</span>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/info@shilshatech.com"
                method="POST"
                onSubmit={handleSubmit}
                className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xl"
              >
                <input
                  type="email"
                  name="E-mail"
                  placeholder="Your Email"
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#060b13]/80 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#276ea5] dark:focus:border-[#60a5fa] focus:ring-1 focus:ring-[#276ea5] dark:focus:ring-[#60a5fa] transition-all duration-300"
                />
                <input
                  type="text"
                  name="Message"
                  placeholder="Your Query"
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#060b13]/80 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#276ea5] dark:focus:border-[#60a5fa] focus:ring-1 focus:ring-[#276ea5] dark:focus:ring-[#60a5fa] transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 cursor-pointer text-white font-semibold text-xs rounded-xl transition-all duration-300 shadow-md shadow-[#276ea5]/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 bg-linear-to-r from-[#276ea5] to-[#1e527b]"
                >
                  <span>Submit</span>
                  <Send size={12} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="py-6 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-start gap-2.5 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            <ShieldCheck
              size={14}
              className="shrink-0 mt-0.5 text-slate-400 dark:text-slate-500"
            />
            <p>
              <strong className="font-medium text-slate-700 dark:text-slate-300">
                Legal & Trademark Notice:
              </strong>{" "}
              All client logos, partner emblems, and third-party award images
              displayed in our Client Sliders and Awards section belong to their
              respective registered trademark owners. Shilsha Technologies
              displays these assets solely for portfolio presentation, case
              study illustration, and historical verification purposes under
              fair usage practices. No implicit endorsement or direct
              sponsorship is claimed unless explicitly specified.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Shilsha Technologies. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="relative py-0.5 group hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />
            </Link>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <Link
              to="/terms-and-conditions"
              className="relative py-0.5 group hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 bg-linear-to-r from-[#276ea5] to-[#60a5fa]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

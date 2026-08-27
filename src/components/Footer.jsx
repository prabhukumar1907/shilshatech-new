import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Code2,
  Building2,
} from "lucide-react";

import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";
import logo from "../assets/shilshalogofinal.webp";

export default function Footer() {
  const services = [
    {
      label: "AI & RPA Solutions",
      url: "/services/ai-rpa-solutions",
    },
    {
      label: "Mobile App Dev",
      url: "/services",
      // url: "/services/mobile-app-development",
    },
    {
      label: "Web Applications",
      url: "/services",
      //  url: "/services/web-application-development",
    },
    {
      label: "QA & Automation",
      url: "/technologies/qa-automation",
    },
    {
      label: "Application Support",
      url: "/services",
      // url: "/services/application-support",
    },
  ];

  const companyLinks = [
    {
      label: "About Us",
      url: "/about-us",
    },
    {
      label: "Careers",
      url: "/careers",
    },
    {
      label: "Our Team",
      url: "/team",
    },
    {
      label: "Contact Us",
      url: "/contact-us",
    },
    // {
    //   label: "Case Studies",
    //   url: "/case-studies",
    // },
  ];

  const developers = [
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
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 font-sans text-slate-700 transition-colors duration-500 dark:border-slate-800/80 dark:bg-[#060b13] dark:text-slate-200">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#276ea5_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-[0.08] dark:bg-[radial-gradient(#60a5fa_1px,transparent_1px)]" />

      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-75 w-125 rounded-full bg-[#276ea5] opacity-20 blur-[130px]"
        style={{ willChange: "transform" }}
      />

      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-62.5 w-100 rounded-full bg-[#276ea5] opacity-20 blur-[120px]"
        style={{ willChange: "transform" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-200 pb-12 dark:border-slate-800/80 sm:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          <div className="space-y-5 sm:col-span-2 lg:col-span-3">
            <Link to="/" className="group inline-block">
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

            <p className="max-w-sm pr-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Part of ATS USA,{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                Shilsha Technologies
              </strong>{" "}
              delivers enterprise software engineering, AI, RPA, Mobile App
              development, Web applications, and automated QA services.
            </p>

            {/* Social Links */}
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
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/95 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#60a5fa]/50 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-900/95 dark:hover:bg-blue-950/30"
                >
                  <item.icon
                    size={15}
                    color={item.color}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#276ea5] dark:text-[#60a5fa]">
              <Sparkles size={13} />
              Services
            </h4>

            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              {services.map((item) => (
                <li key={item.url}>
                  <FooterLink to={item.url} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#276ea5] dark:text-[#60a5fa]">
              <Code2 size={13} />
              Hire Developers
            </h4>

            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              {developers.map((item) => (
                <li key={item.path}>
                  <FooterLink to={item.path} label={item.name} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#276ea5] dark:text-[#60a5fa]">
              <Building2 size={13} />
              Company
            </h4>

            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              {companyLinks.map((item) => (
                <li key={item.url}>
                  <FooterLink to={item.url} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact us */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#276ea5] dark:text-[#60a5fa]">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#276ea5] dark:text-[#60a5fa]"
                />

                <address className="not-italic text-xs leading-relaxed sm:text-sm">
                  <strong className="font-semibold text-slate-800 dark:text-slate-200">
                    Shilsha Technologies
                  </strong>
                  <br />
                  iThum Tower, Sector 62, Noida
                  <br />
                  Uttar Pradesh 201301, INDIA
                </address>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="shrink-0 text-[#276ea5] dark:text-[#60a5fa]"
                />

                <a
                  href="tel:+919266300671"
                  className="group relative inline-block py-0.5 text-xs transition-colors hover:text-[#276ea5] dark:hover:text-[#60a5fa] sm:text-sm"
                >
                  +91 - 926 - 630 - 0671
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="shrink-0 text-[#276ea5] dark:text-[#60a5fa]"
                />

                <a
                  href="mailto:info@shilshatech.com"
                  className="group relative inline-block py-0.5 text-xs transition-colors hover:text-[#276ea5] dark:hover:text-[#60a5fa] sm:text-sm"
                >
                  info@shilshatech.com
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-b border-slate-200 py-6 dark:border-slate-800/80">
          <div className="flex items-start gap-2.5 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            <ShieldCheck
              size={14}
              className="mt-0.5 shrink-0 text-slate-400 dark:text-slate-500"
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

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-slate-500 dark:text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Shilsha Technologies. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="group relative py-0.5 transition-colors hover:text-slate-900 dark:hover:text-slate-200"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
            </Link>

            <span className="text-slate-300 dark:text-slate-700">|</span>

            <Link
              to="/terms-and-conditions"
              className="group relative py-0.5 transition-colors hover:text-slate-900 dark:hover:text-slate-200"
            >
              Terms & Conditions
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, label }) {
  return (
    <Link
      to={to}
      className="group relative inline-flex items-center gap-1 py-0.5 transition-colors duration-300 hover:text-[#276ea5] dark:hover:text-[#60a5fa]"
    >
      <span>{label}</span>

      <ArrowUpRight
        size={12}
        className="text-[#60a5fa] opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      />

      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#276ea5] to-[#60a5fa] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
    </Link>
  );
}

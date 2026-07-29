import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  ShieldCheck,
  Smartphone,
  Code2,
  Building2,
  Cpu,
  Megaphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const theme = {
  primary: "#276ea5",
  secondary: "#1d4ed8",
  glow: "#60a5fa",
};

const services = [
  {
    icon: Globe,
    title: "Web Development & Portals",
    description:
      "Specialized in high-converting Business Websites, complex Web Portals, e-commerce platforms, and custom CMS architectures engineered for performance and speed.",
    tags: ["Business Websites", "Web Portals", "React", "Next.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "End-to-end mobile engineering covering Native Android Apps, Native iPhone Apps, and high-performance Cross-Platform mobile solutions.",
    tags: ["Android Apps", "iPhone Apps", "Native Mobile", "Cross-Platform"],
  },
  {
    icon: Palette,
    title: "UI / UX Designing",
    description:
      "Our UI/UX design services prioritize user needs to create intuitive and engaging interfaces. Through research, prototyping, and testing, we craft seamless digital experiences.",
    tags: ["Figma", "Prototypes", "User Research", "Wireframing"],
  },
  {
    icon: ShieldCheck,
    title: "QA & Testing Services",
    description:
      "Our comprehensive QA & Testing services provide meticulous analysis, rigorous automated testing, and security strategies to ensure software reliability and performance.",
    tags: ["Automation", "Security", "Performance", "Manual QA"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end custom software solutions tailored to your unique enterprise needs. From conceptualization to deployment, we deliver scalable, secure, and innovative applications.",
    tags: ["SaaS", "Microservices", "API Integration", "Cloud"],
  },
  {
    icon: Building2,
    title: "Offshore Development Center",
    description:
      "Dedicated tech teams, cost-effective scaling, agile methodologies, and 24/7 support. Maximize efficiency, minimize risks, and boost ROI with our offshore expertise.",
    tags: ["Dedicated Team", "Agile", "24/7 Support", "Cost Effective"],
  },
  {
    icon: Cpu,
    title: "AI Development Services",
    description:
      "Harness Machine Learning, Deep Learning, and Generative AI consulting to automate processes, derive deep business analytics, and unlock a competitive edge.",
    tags: ["LLMs", "Machine Learning", "Automation", "NLP"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    description:
      "Encompassing SEO, PPC advertising, social media management, content marketing, and conversion analytics. Drive qualified traffic and maximize your online revenue.",
    tags: ["SEO", "PPC", "SMO", "Growth Hacking"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const ServicesSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () => document.documentElement.classList.contains("dark");
    setIsDarkMode(checkDark());

    const observer = new MutationObserver(() => setIsDarkMode(checkDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-white"
    >
      {/* Background Radial Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(${
            isDarkMode ? theme.glow : theme.primary
          } 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#276ea5]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider backdrop-blur-xl mb-4 transition-colors border-[#276ea5]/30 bg-blue-50 text-[#276ea5] dark:border-[#276ea5]/40 dark:bg-[#276ea5]/20 dark:text-[#60a5fa]">
            <Sparkles size={14} className="shrink-0" />
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Comprehensive Digital &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: isDarkMode
                  ? `linear-gradient(135deg, #ffffff 20%, ${theme.glow} 100%)`
                  : `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
              }}
            >
              Software Solutions
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            We design and build high-impact enterprise applications, web portals,
            and AI solutions. We empower industries worldwide including Healthcare, Retail,
            Finance, and Manufacturing.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative h-full"
              >
                {/* Glow Border Effect on Hover */}
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-md pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.glow})`,
                  }}
                />

                {/* Main Card Content */}
                <div className="relative flex flex-col justify-between h-full p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1.5 bg-white/90 border-slate-200/80 shadow-sm hover:shadow-xl shadow-slate-200/60 dark:bg-[#0b1528]/80 dark:border-blue-500/20 dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] dark:group-hover:bg-[#0d1a32]">
                  <div>
                    {/* Icon Badge */}
                    <div className="inline-flex p-3 rounded-xl border mb-5 transition-all duration-300 group-hover:scale-110 bg-blue-50 border-blue-200 text-[#276ea5] group-hover:bg-[#276ea5] group-hover:text-white dark:bg-[#276ea5]/20 dark:border-[#276ea5]/40 dark:text-[#60a5fa] dark:group-hover:bg-[#276ea5] dark:group-hover:text-white dark:group-hover:border-[#60a5fa]">
                      <IconComponent size={24} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold tracking-tight mb-2 transition-colors dark:group-hover:text-[#60a5fa]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed mb-6 text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer Tags & CTA Link */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md border bg-blue-50 border-blue-200/60 text-[#276ea5] dark:bg-blue-950/40 dark:border-blue-500/20 dark:text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-all group/link text-[#276ea5] hover:text-blue-900 dark:text-[#60a5fa] dark:hover:text-white"
                    >
                      <span>Explore Service</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
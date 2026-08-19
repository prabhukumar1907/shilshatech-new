import React from "react";
import {
  Search,
  TrendingUp,
  Globe,
  ArrowRight,
  BarChart3,
  Target,
  LineChart,
  MousePointerClick,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#2563EB",
  secondary: "#1D4ED8",
  glow: "#93c5fd",
};

const SeoServicesPage = () => {
  const capabilities = [
    {
      number: "01",
      icon: Search,
      title: "Keyword Research & Search Strategy",
      desc: "Identify high-intent search opportunities and build a keyword strategy around the terms that matter to your business.",
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Technical SEO",
      desc: "Improve crawlability, indexing, Core Web Vitals, site architecture and technical performance.",
    },
    {
      number: "03",
      icon: Target,
      title: "On-Page Optimization",
      desc: "Optimize content, metadata, internal linking and page structure around real search intent.",
    },
    {
      number: "04",
      icon: Globe,
      title: "Authority & Off-Page SEO",
      desc: "Strengthen domain authority through relevant digital PR, quality links and strategic authority building.",
    },
    {
      number: "05",
      icon: LineChart,
      title: "SEO Analytics & Reporting",
      desc: "Track rankings, traffic, conversions and visibility with clear performance-focused reporting.",
    },
    {
      number: "06",
      icon: MousePointerClick,
      title: "Conversion-Focused SEO",
      desc: "Turn organic visibility into meaningful business outcomes with landing pages and experiences designed to convert.",
    },
  ];

  const stats = [
    {
      value: "01",
      label: "Data-led strategy",
    },
    {
      value: "360°",
      label: "Technical + Content SEO",
    },
    {
      value: "ROI",
      label: "Business-focused growth",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 font-sans overflow-hidden">
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16">
        {/* Background glow */}
        <div
          className="absolute -top-20 -right-37.5 w-120 h-120 rounded-full blur-[130px] opacity-20 pointer-events-none"
          style={{ background: theme.glow }}
        />

        <div
          className="absolute bottom-0 -left-45 w-95 h-95 rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: theme.primary }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-10 h-px"
                  style={{ background: theme.primary }}
                />

                <span
                  className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase"
                  style={{ color: theme.primary }}
                >
                  Search Growth Studio
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[2.7rem] sm:text-5xl lg:text-[4.5rem] font-black tracking-tighter leading-[0.96] max-w-5xl">
                Get found by the people{" "}
                <span
                  className="relative inline-block"
                  style={{ color: theme.primary }}
                >
                  looking for you.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-7">
                Shilsha Technologies builds data-driven SEO strategies that
                improve search visibility, attract qualified traffic and turn
                organic discovery into measurable business growth.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 px-5 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  Hire SEO Experts
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Strategy • Technical • Content • Growth
                </span>
              </div>
            </motion.div>

            {/* SEO Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72.5 sm:w-90 h-75 sm:h-87.5">
                {/* Background shape */}
                <div
                  className="absolute inset-8 rounded-[42px] rotate-6 opacity-25"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.glow})`,
                  }}
                />

                {/* Main visual */}
                <div className="absolute inset-0 rounded-[42px] bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 overflow-hidden">
                  {/* Glow */}
                  <div
                    className="absolute -top-16 -right-10 w-48 h-48 rounded-full blur-3xl opacity-25"
                    style={{ background: theme.primary }}
                  />

                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `
                        linear-gradient(${theme.primary} 1px, transparent 1px),
                        linear-gradient(90deg, ${theme.primary} 1px, transparent 1px)
                      `,
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-7">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400">
                        Organic Growth
                      </span>

                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: theme.primary }}
                      />
                    </div>

                    {/* Chart */}
                    <div className="relative h-36">
                      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200 dark:bg-white/10" />

                      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/50 dark:bg-white/5" />

                      <svg
                        viewBox="0 0 320 140"
                        className="absolute inset-0 w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="seoGradient"
                            x1="0"
                            x2="1"
                            y1="0"
                            y2="0"
                          >
                            <stop offset="0%" stopColor={theme.glow} />
                            <stop offset="100%" stopColor={theme.primary} />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 120 C35 115 45 105 70 108 C100 111 105 82 135 88 C165 95 170 65 195 70 C220 75 230 42 250 50 C275 58 280 25 320 15"
                          fill="none"
                          stroke="url(#seoGradient)"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />

                        <path
                          d="M0 120 C35 115 45 105 70 108 C100 111 105 82 135 88 C165 95 170 65 195 70 C220 75 230 42 250 50 C275 58 280 25 320 15 L320 140 L0 140 Z"
                          fill={theme.primary}
                          opacity="0.06"
                        />
                      </svg>

                      {/* Points */}
                      <span
                        className="absolute right-0 top-2 w-3 h-3 rounded-full ring-4 ring-blue-500/10"
                        style={{ background: theme.primary }}
                      />
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-4xl font-black tracking-tight">
                          +87%
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          Visibility potential
                        </p>
                      </div>

                      <TrendingUp
                        size={32}
                        strokeWidth={1.5}
                        style={{ color: theme.primary }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className={`py-6 sm:py-7 flex items-center gap-4 ${
                  index !== 0
                    ? "border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-white/10 sm:pl-8"
                    : ""
                }`}
              >
                <span
                  className="text-2xl sm:text-3xl font-black"
                  style={{ color: theme.primary }}
                >
                  {stat.value}
                </span>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Our SEO Approach
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-tight">
                Visibility is valuable only when it creates business impact.
              </h2>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-8">
                SEO is not simply about ranking for more keywords. It is about
                understanding what your customers search for, creating useful
                experiences and making your business easier to discover at the
                right moment.
              </p>

              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, transparent)`,
                  opacity: 0.35,
                }}
              />

              <p className="text-base text-slate-500 dark:text-slate-400 leading-7">
                Our team combines technical optimization, content strategy,
                search intent and analytics to create sustainable organic growth
                programs built around your commercial goals.
              </p>

              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-2 text-sm font-bold"
                style={{ color: theme.primary }}
              >
                Build your SEO strategy
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-slate-100/70 dark:bg-[#0b1528]/50 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: theme.primary }}
              >
                SEO Capabilities
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em]">
                Everything your search presence needs.
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-6">
              A complete search growth system designed to improve visibility,
              relevance, authority and conversions.
            </p>
          </div>

          {/* Capability rows */}
          <div className="border-t border-slate-200 dark:border-white/10">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="group grid md:grid-cols-[60px_48px_1fr_32px] items-center gap-4 sm:gap-5 py-6 border-b border-slate-200 dark:border-white/10"
                >
                  {/* Number */}
                  <span className="text-xs font-mono font-bold text-blue-500/60">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-blue-500/10"
                    style={{ color: theme.primary }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-blue-500 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    size={18}
                    className="text-slate-400 transition-all duration-300 group-hover:text-blue-500 group-hover:translate-x-1"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: theme.primary }}
              >
                Organic Growth
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-tight">
                Build search visibility that compounds over time.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-7 max-w-2xl">
                Sustainable SEO comes from consistently improving technical
                foundations, content quality, authority and user experience. We
                focus on strategies that create long-term search equity rather
                than chasing short-lived ranking spikes.
              </p>

              <Link
                to="/contact-us"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold"
                style={{ color: theme.primary }}
              >
                Talk to an SEO strategist
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Growth visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative border-y border-slate-200 dark:border-white/10 py-8">
                <div className="space-y-6">
                  {[
                    {
                      label: "Technical Foundation",
                      value: "Strong",
                      width: "42%",
                    },
                    {
                      label: "Search Visibility",
                      value: "Growing",
                      width: "67%",
                    },
                    {
                      label: "Organic Authority",
                      value: "Scaling",
                      width: "84%",
                    },
                    {
                      label: "Business Impact",
                      value: "Compounding",
                      width: "94%",
                    },
                  ].map((item, index) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>

                        <span
                          className="text-xs font-semibold"
                          style={{ color: theme.primary }}
                        >
                          {item.value}
                        </span>
                      </div>

                      <div className="h-1.5 bg-slate-200 dark:bg-white/10 overflow-hidden rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.width }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: index * 0.12,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${theme.glow}, ${theme.primary})`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden border-y border-slate-200 dark:border-white/10 py-10 sm:py-12"
          >
            <div
              className="absolute top-0 left-0 w-32 h-px"
              style={{ background: theme.primary }}
            />

            <div
              className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-15 pointer-events-none"
              style={{ background: theme.primary }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-7">
              <div>
                <p
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                  style={{ color: theme.primary }}
                >
                  Ready to Grow?
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em]">
                  Turn search traffic into growth.
                </h2>

                <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl">
                  Let's build an SEO strategy around the searches, customers and
                  opportunities that matter most to your business.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="group shrink-0 inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Start an SEO project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default SeoServicesPage;

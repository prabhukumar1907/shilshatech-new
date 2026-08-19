import React, { useState } from "react";
import {
  Sparkles,
  Compass,
  Target,
  Code,
  ShieldCheck,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import strengthImg from "../assets/images/Group 38.png";

const ABOVE_FOLD = true;

const theme = {
  primary: "#286b94",
  secondary: "#1e3a8a",
  glow: "#6ea1ff",
};

const strengths = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery and Analysis",
    description:
      "We begin by understanding your business, target audience, and project goals. Through in-depth discussions and analysis, we gather valuable insights to shape the development process.",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy and Planning",
    description:
      "Based on the gathered information, we devise a strategic plan to ensure a seamless development journey. We focus on aligning your goals with the latest trends and industry best practices.",
  },
  {
    number: "03",
    icon: Code,
    title: "Design and Development",
    description:
      "Our skilled designers and developers work collaboratively to bring your vision to life. We craft visually stunning and highly functional web solutions using cutting-edge technologies.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality Assurance and Testing",
    description:
      "We prioritize delivering high-quality and bug-free solutions. Our dedicated QA team conducts rigorous testing to ensure optimal performance, compatibility, and security of your website.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment and Support",
    description:
      "Once your website is ready, we assist in the smooth deployment to your desired hosting environment. We provide ongoing support and maintenance to ensure your website remains secure and up-to-date.",
  },
];

const OurStrength = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = strengths[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      id="our_strength"
      className="
        relative isolate overflow-hidden
        bg-slate-50 text-slate-900
        dark:bg-[#070d18] dark:text-white
        py-12 sm:py-12 lg:py-16
      "
    >
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-125 w-125 rounded-full blur-[150px] opacity-20 dark:opacity-25"
        style={{
          background: `radial-gradient(circle, ${theme.glow}, transparent 70%)`,
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full blur-[150px] opacity-15 dark:opacity-20"
        style={{
          background: `radial-gradient(circle, ${theme.primary}, transparent 70%)`,
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100,160,255,.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,160,255,.7) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                <Sparkles size={16} />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Our Strength
              </span>

              <span className="h-px w-16 bg-slate-300 dark:bg-blue-500/30" />
            </div>

            {/* Heading */}
            <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl xl:text-7xl">
              A proven process.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(
                    110deg,
                    ${theme.primary} 0%,
                    ${theme.glow} 50%,
                    #818cf8 100%
                  )`,
                }}
              >
                Built for digital excellence.
              </span>
            </h2>
          </div>

          {/* Intro */}
          <div className="flex items-end lg:col-span-5 lg:pb-2">
            <div className="max-w-lg">
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                From the first conversation to long-term support, we combine
                strategy, design, engineering, and quality to turn ambitious
                ideas into dependable digital products.
              </p>

              <div className="mt-7 flex items-center gap-3 text-sm font-bold text-[#286b94] dark:text-[#6ea1ff]">
                <span>Our approach</span>
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-20">
          {/* Image */}
          <div className="relative lg:col-span-5">
            <div className="sticky top-28">
              {/* Number behind image */}
              <div
                className="
                  pointer-events-none absolute -left-5 -top-14
                  select-none text-[130px] font-black leading-none
                  tracking-[-0.08em] text-slate-200
                  dark:text-white/[0.035]
                  sm:text-[170px]
                "
              >
                {active.number}
              </div>

              {/* Image */}
              <div className="relative">
                <div
                  className="absolute inset-8 rounded-[40px] blur-3xl opacity-30"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.primary},
                      ${theme.glow}
                    )`,
                  }}
                />

                <div className="relative overflow-hidden">
                  <img
                    src={strengthImg}
                    alt="Shilsha Technologies Strength"
                    width={640}
                    height={640}
                    loading={ABOVE_FOLD ? "eager" : "lazy"}
                    fetchPriority={ABOVE_FOLD ? "high" : "auto"}
                    decoding="async"
                    className="
                      relative z-10 mx-auto w-full max-w-140
                      object-contain
                      transition-transform duration-700
                      hover:scale-[1.025]
                    "
                  />
                </div>
              </div>

              {/* Active process label */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: theme.glow }}
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Currently exploring
                  </span>
                </div>

                <span className="text-sm font-black text-[#286b94] dark:text-[#6ea1ff]">
                  {active.number} / 05
                </span>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="
                  absolute left-5.75 top-5 bottom-5 w-px
                  bg-linear-to-b
                  from-[#286b94]/50
                  via-slate-300
                  to-transparent
                  dark:via-blue-500/20
                "
              />

              <div className="space-y-2">
                {strengths.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      className="
                        group relative block w-full
                        text-left outline-none
                      "
                    >
                      <div className="flex gap-7 sm:gap-9">
                        {/* Timeline node */}
                        <div className="relative z-10 shrink-0">
                          <div
                            className={`
                              flex h-12 w-12 items-center justify-center
                              rounded-full border
                              transition-all duration-500
                              ${
                                isActive
                                  ? "border-[#286b94] bg-[#286b94] text-white shadow-[0_0_30px_rgba(40,107,148,.35)] dark:border-[#6ea1ff] dark:bg-[#286b94]"
                                  : "border-slate-300 bg-slate-50 text-slate-400 dark:border-blue-500/20 dark:bg-[#070d18] dark:text-slate-500"
                              }
                            `}
                          >
                            <Icon size={18} strokeWidth={2} />
                          </div>
                        </div>

                        {/* Content */}
                        <div
                          className={`
                            flex-1 border-b pb-8 pt-1
                            transition-all duration-500
                            ${
                              isActive
                                ? "border-[#286b94]/30"
                                : "border-slate-200 dark:border-white/[0.07]"
                            }
                          `}
                        >
                          <div className="flex items-start justify-between gap-5">
                            <div>
                              <span
                                className={`
                                  text-xs font-black tracking-[0.2em]
                                  transition-colors duration-300
                                  ${
                                    isActive
                                      ? "text-[#286b94] dark:text-[#6ea1ff]"
                                      : "text-slate-400 dark:text-slate-600"
                                  }
                                `}
                              >
                                {item.number}
                              </span>

                              <h3
                                className={`
                                  mt-1 text-xl font-bold tracking-tight
                                  transition-all duration-300
                                  sm:text-2xl
                                  ${
                                    isActive
                                      ? "text-slate-950 dark:text-white"
                                      : "text-slate-600 dark:text-slate-400"
                                  }
                                `}
                              >
                                {item.title}
                              </h3>
                            </div>

                            <ArrowUpRight
                              size={20}
                              className={`
                                mt-1 shrink-0
                                transition-all duration-300
                                ${
                                  isActive
                                    ? "translate-x-0 translate-y-0 text-[#286b94] opacity-100 dark:text-[#6ea1ff]"
                                    : "translate-x-2 translate-y-2 text-slate-400 opacity-0"
                                }
                              `}
                            />
                          </div>

                          <div
                            className={`
                              grid transition-[grid-template-rows,opacity,margin]
                              duration-500
                              ${
                                isActive
                                  ? "mt-4 grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }
                            `}
                          >
                            <div className="overflow-hidden">
                              <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10 sm:mt-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                From idea to impact
              </p>

              <p className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-3xl">
                Every stage is designed to move your product forward.
              </p>
            </div>

            {/* Decorative progress */}
            <div className="flex items-center gap-2">
              {strengths.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  aria-label={`View ${item.title}`}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    h-1.5 rounded-full transition-all duration-500
                    ${
                      index === activeIndex
                        ? "w-12 bg-[#286b94] dark:bg-[#6ea1ff]"
                        : "w-5 bg-slate-300 dark:bg-blue-500/20"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrength;

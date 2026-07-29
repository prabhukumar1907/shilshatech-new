import React from "react";
import { Sparkles, Compass, Target, Code, ShieldCheck, Rocket } from "lucide-react";
import strengthImg from "../assets/images/Group 38.png";

const theme = {
  primary: "#286b94",   // Core Brand Blue
  secondary: "#1e3a8a", // Deep Indigo Accent
  glow: "#6ea1ff",      // Cyan-Blue Electric Glow
  heroBg: "#070d18",    // Canvas Dark Background
  cardBgDark: "#0b1528",// Glassmorphic Card Surface
};

const strengths = [
  {
    icon: Compass,
    title: "Discovery and Analysis",
    description:
      "We begin by understanding your business, target audience, and project goals. Through in-depth discussions and analysis, we gather valuable insights to shape the development process.",
  },
  {
    icon: Target,
    title: "Strategy and Planning",
    description:
      "Based on the gathered information, we devise a strategic plan to ensure a seamless development journey. We focus on aligning your goals with the latest trends and industry best practices.",
  },
  {
    icon: Code,
    title: "Design and Development",
    description:
      "Our skilled designers and developers work collaboratively to bring your vision to life. We craft visually stunning and highly functional web solutions using cutting-edge technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance and Testing",
    description:
      "We prioritize delivering high-quality and bug-free solutions. Our dedicated QA team conducts rigorous testing to ensure optimal performance, compatibility, and security of your website.",
  },
  {
    icon: Rocket,
    title: "Deployment and Support",
    description:
      "Once your website is ready, we assist in the smooth deployment to your desired hosting environment. We provide ongoing support and maintenance to ensure your website remains secure and up-to-date.",
  },
];

const OurStrength = () => {
  return (
    <section
      id="our_strength"
      className="relative py-12 px-4 transition-colors duration-500 overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-white"
    >
      <div className="absolute top-1/4 left-0 w-125 h-125 bg-[#286b94]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-100 h-100 bg-[#6ea1ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Outer Glow Halo */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-30 group-hover:opacity-60 transition duration-500 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.glow})`,
                }}
              />
              
              {/* Card Container */}
              <div className="relative rounded-3xl border p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 bg-white/80 border-slate-200 shadow-xl shadow-slate-200/50 dark:bg-[#0b1528]/80 dark:border-blue-500/20 dark:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8)]">
                <img
                  src={strengthImg}
                  alt="Shilsha Technologies Strength"
                  className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col gap-6">
            
            {/* Header Badge */}
            <div className="px-1">
              <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-colors border-[#286b94]/30 bg-blue-50 text-[#1e3a8a] dark:border-[#286b94]/40 dark:bg-[#286b94]/20 dark:text-[#6ea1ff]">
                <Sparkles size={14} className="shrink-0" />
                <span>Our Strength</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              A Proven Process Built for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.glow}, ${theme.primary})`,
                }}
              >
                Digital Excellence
              </span>
            </h2>

            {/* Strengths List */}
            <div className="flex flex-col gap-4 mt-2">
              {strengths.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 bg-white border-slate-200/80 hover:border-[#286b94]/40 hover:bg-blue-50/40 hover:translate-x-1 shadow-sm hover:shadow-md dark:bg-[#0b1528]/60 dark:border-blue-500/15 dark:hover:border-[#6ea1ff]/50 dark:hover:bg-[#0b1528] dark:hover:translate-x-1 dark:shadow-none"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon Pill */}
                      <div className="p-2.5 rounded-xl border shrink-0 transition-colors bg-blue-50 border-blue-200 text-[#1e3a8a] group-hover:bg-blue-100 dark:bg-[#286b94]/20 dark:border-[#286b94]/40 dark:text-[#6ea1ff] dark:group-hover:bg-[#286b94]/40">
                        <IconComponent size={20} />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-base font-bold transition-colors text-slate-900 group-hover:text-[#1e3a8a] dark:text-white dark:group-hover:text-[#6ea1ff]">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStrength;
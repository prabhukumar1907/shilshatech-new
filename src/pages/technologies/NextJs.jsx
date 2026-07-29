import { ArrowRight, Cpu, Globe, Layers3 } from "lucide-react";
import { SiNextdotjs } from "react-icons/si";
import { Link } from "react-router-dom";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import AwardsSection from "../../components/AwardsSection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#286b94",
  secondary: "#1e3a8a",
  glow: "#6ea1ff",
};
export const NextJsServicePage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12">
          <div
            className="absolute top-0 left-0 h-1 w-full"
            style={{
              background: `linear-gradient(90deg, #000000, ${theme.glow})`,
            }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white border border-slate-300 dark:border-slate-700">
                <SiNextdotjs size={14} className="shrink-0" />
                <span>Next.js Development Services</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Full-Stack React Framework with Next.js
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Build production-grade applications with server-side rendering,
                static site generation, and unmatched SEO optimizations using
                our specialized Next.js engineering capabilities.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(90deg, #000000, ${theme.primary})`,
                  }}
                >
                  <span>Hire Next.js Developers</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-blue-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner">
                <SiNextdotjs
                  className="text-slate-900 dark:text-white animate-pulse"
                  size={120}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-4">
              <Globe size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">
              Superior SEO Performance
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Server-side rendering (SSR) and Incremental Static Regeneration
              (ISR) guarantee lightning-fast indexing by search engines.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-4">
              <Cpu size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">
              Server Actions & API Routes
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Develop unified full-stack applications with built-in backend
              features, reducing the need for separate external server
              configurations.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-4">
              <Layers3 size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">Automatic Optimization</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Built-in font, script, and image optimization engines provide
              incredible user experiences out of the box.
            </p>
          </div>
        </div>
      </div>
      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

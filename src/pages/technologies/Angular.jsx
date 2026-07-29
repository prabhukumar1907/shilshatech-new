import React from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Code, 
  Globe, 
  Layers3, 
  Workflow 
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaAngular } from "react-icons/fa";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const theme = {
  primary: "#dd0031", // Angular Red
  secondary: "#1e3a8a",
  glow: "#ff5252",
};

export const AngularServicePage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl border border-slate-200/80 dark:border-red-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12">
          <div 
            className="absolute top-0 left-0 h-1 w-full"
            style={{ background: `linear-gradient(90deg, #dd0031, ${theme.glow})` }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-500/20">
                <FaAngular size={14} className="shrink-0" />
                <span>Angular Development Services</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                High-Performance Angular Application Development
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Build robust, scalable, and maintainable enterprise user interfaces with our expert Angular development solutions. We create lightweight, modern web applications customized for your business needs using TypeScript and Signals.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ background: `linear-gradient(90deg, #dd0031, ${theme.secondary})` }}
                >
                  <span>Hire Angular Developers</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-red-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner">
                <FaAngular className="text-red-500 animate-pulse" size={120} />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-red-500/20 bg-white dark:bg-[#0b1528] shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
              <Zap size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">High Performance & Signals</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Leverage Angular's fine-grained reactivity system and standalone components for exceptionally fast compilation and optimal execution speeds.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-red-500/20 bg-white dark:bg-[#0b1528] shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
              <Workflow size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">Modular Architecture</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Hierarchical dependency injection and robust TypeScript structure ensure clean code organization, maintainability, and seamless reusability.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-red-500/20 bg-white dark:bg-[#0b1528] shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">Enterprise Scalability</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Seamlessly integrate with NgRx state management and enterprise tooling to build secure, large-scale single-page applications.
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

export default AngularServicePage;
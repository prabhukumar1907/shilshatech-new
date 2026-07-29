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
import { FaReact } from "react-icons/fa";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import ServicesSection from "../../components/ServiceSection";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const theme = {
  primary: "#276ea5",
  secondary: "#1d4ed8",
  glow: "#60a5fa",
};

const ReactServicesPage = () => {
  const brandTheme = {
    primaryBlue: "#276ea5",
    secondaryIndigo: "#1d4ed8",
    electricCyan: "#60a5fa",
  };

  const whyChooseItems = [
    {
      title: "Expertise and Experience",
      desc: "Our team of experienced React JS developers builds robust and scalable web applications, ensuring high-quality deliverables.",
    },
    {
      title: "Customized Solutions",
      desc: "We understand the unique requirements of your business and provide tailored React JS development solutions that align with your specific needs and objectives.",
    },
    {
      title: "Agile Approach",
      desc: "We follow an agile development methodology, ensuring regular updates, efficient collaboration, and flexibility to accommodate changes throughout the project.",
    },
    {
      title: "Transparent Communication",
      desc: "We maintain open and transparent communication channels, keeping you informed about progress, milestones, and decisions throughout the development process.",
    },
    {
      title: "Timely Delivery",
      desc: "We prioritize delivering projects on time, ensuring that your React JS application is deployed within the agreed-upon timeframe.",
    },
    {
      title: "Quality Assurance",
      desc: "Our stringent quality assurance processes guarantee a flawless user experience and a high-performance React JS application.",
    },
  ];

  const servicesList = [
    {
      title: "Custom ReactJS Development",
      desc: "We build highly interactive and scalable web applications from scratch, precisely tailored to your unique requirements.",
    },
    {
      title: "ReactJS UI/UX Design",
      desc: "Our design team crafts stunning user interfaces with intuitive navigation and seamless user experiences to capture your target audience.",
    },
    {
      title: "ReactJS Component Development",
      desc: "We specialize in developing reusable and modular React components, accelerating development time, and ensuring code efficiency.",
    },
    {
      title: "ReactJS Integration Services",
      desc: "Seamlessly integrate ReactJS with existing systems and third-party APIs to enhance functionality and data exchange across platforms.",
    },
    {
      title: "ReactJS Migration and Upgrades",
      desc: "We help migrate your existing applications to ReactJS or upgrade them to the latest versions, ensuring smooth transitions and improved performance.",
    },
    {
      title: "ReactJS Support and Maintenance",
      desc: "Our team provides ongoing support, monitoring, and maintenance services to ensure your ReactJS applications stay secure, optimized, and up-to-date.",
    },
    {
      title: "ReactJS Plugin and API Integrations",
      desc: "We integrate third-party plugins and APIs seamlessly into your ReactJS application, expanding its functionality and allowing seamless communication with external services and platforms.",
    },
    {
      title: "ReactJS Performance Optimization",
      desc: "We optimize your ReactJS applications for maximum performance, ensuring fast loading times, efficient rendering, and smooth user interactions. This optimization enhances user experience and boosts conversion rates.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-[#070d18] text-slate-800 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-[#60a5fa] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] p-8 sm:p-12 shadow-xl overflow-hidden mb-12">
          <div 
            className="absolute top-0 left-0 h-1 w-full"
            style={{ background: `linear-gradient(90deg, #276ea5, ${theme.glow})` }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20">
                <FaReact size={14} className="shrink-0 animate-spin" style={{ animationDuration: '10s' }} />
                <span>Shilsha Technologies Expert Services</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                ReactJS Development Company in India
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Shilsha Technologies offers expert ReactJS services for seamless web development. Transform your ideas into reality today!
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-semibold shadow-md transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ background: `linear-gradient(90deg, #276ea5, ${theme.secondary})` }}
                >
                  <span>Hire React Developers</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-blue-500/10 bg-slate-50 dark:bg-[#070d18] flex items-center justify-center shadow-inner">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png?w=1380&t=st=1689938464~exp=1689939064~hmac=18fb1d5ba0eb7d7b6f0d2d4404a50cb4f6a6a12953c4878069d8e5780163aacf"
                  alt="React Development"
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain drop-shadow-2xl animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
              <Zap size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">High Performance</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Leverage React's virtual DOM and efficient rendering engine for lightning-fast web applications and optimal user engagement.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
              <Workflow size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">Component-Based Architecture</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Modular and reusable components ensure clean code organization, rapid development workflows, and simplified ongoing maintenance.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-blue-500/20 bg-white dark:bg-[#0b1528] shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">Enterprise Scalability</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Easily integrate with robust state management tools and third-party APIs to scale your application alongside your growing business needs.
            </p>
          </div>
        </div>

      </div>

      {/* Main Intro Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12 space-y-8">
            <h2 
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-snug"
              style={{ color: brandTheme.primaryBlue }}
            >
              Power Your Web Presence with the Best React JS Development Company in India
            </h2>
            <div 
              className="w-full h-1 rounded-full my-6 opacity-40" 
              style={{ background: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.electricCyan})` }}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] backdrop-blur-xl border border-slate-200 dark:border-blue-500/20 shadow-xl space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Are you looking to leverage React JS's full potential for your web development projects? Look no further! As a premier React JS Development Company, our expert team builds dynamic and responsive web applications.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                Contact us today to discuss your requirements and find out what ReactJS can do for you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Application Benefits Section */}
      <section className="py-16 px-6 bg-slate-100/60 dark:bg-[#0b1528]/40 border-y border-slate-200 dark:border-blue-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: brandTheme.primaryBlue }}
          >
            Build a full-featured application with React JS
          </h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-lg transition-transform hover:-translate-y-1 duration-300">
              As a ReactJS Development Company in India, we offer numerous benefits to websites. We provide a fast and responsive user interface, ensuring smooth rendering and an enhanced user experience. Its component-based architecture enables code reusability, resulting in faster development and easier maintenance. We also offer efficient state management, optimizing performance and scalability. As a ReactJS Development Company, we leverage these advantages to create highly interactive, performant, and user-friendly websites.
            </p>
            <p className="p-8 rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-blue-500/20 shadow-lg transition-transform hover:-translate-y-1 duration-300">
              By choosing our ReactJS development services, you ensure a website that stands out, engages users and drives business growth in the competitive digital landscape.
            </p>
          </div>
        </div>
      </section>

      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default ReactServicesPage;
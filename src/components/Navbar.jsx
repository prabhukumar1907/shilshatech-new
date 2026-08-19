import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Moon,
  Sun,
  X,
  Sparkles,
  Code2,
  Cpu,
  Globe,
  Database,
  ShieldCheck,
  Palette,
  Megaphone,
  Smartphone,
  Star,
  PieChart,
  MessageCircle,
  TrendingUp,
  Users,
  Server,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNextdotjs,
  SiOpenjdk,
  SiNodedotjs,
  SiDotnet,
  SiPython,
  SiLaravel,
  SiFlutter,
  SiIos,
  SiAndroid,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSelenium,
  SiExpress,
} from "react-icons/si";

import {
  VscChecklist,
  VscTools,
  VscBeaker,
  VscSymbolInterface,
  VscColorMode,
  VscWindow,
  VscDeviceMobile,
  VscPackage,
} from "react-icons/vsc";

import logo from "../assets/shilshalogofinal.webp";
import { useTheme } from "../context/ThemeContext";
import { FaAws } from "react-icons/fa6";
import {
  TbBrandReactNative,
  TbBrandXamarin,
  TbBrandAzure,
} from "react-icons/tb";

const theme = {
  primary: "#286b94",
  secondary: "#1e3a8a",
  glow: "#6ea1ff",
  heroBg: "#070d18",
};

const services = [
  {
    label: "AI Development",
    href: "/ai-development",
    desc: "Custom end-to-end AI models",
    icon: <Cpu className="shrink-0 text-blue-500" size={16} />,
  },
  {
    label: "AI Consulting",
    href: "/ai-consulting-company",
    desc: "Strategy & roadmap planning",
    icon: <Sparkles className="shrink-0 text-purple-500" size={16} />,
  },
  {
    label: "Generative AI",
    href: "/generative-ai",
    desc: "LLMs & synthetic media",
    icon: <Layers className="shrink-0 text-cyan-500" size={16} />,
  },
  {
    label: "Model Training",
    href: "/ai-modal-training",
    desc: "Fine-tuning & optimization",
    icon: <Server className="shrink-0 text-green-600" size={16} />,
  },
  {
    label: "Natural Language Processing",
    href: "/natural-language-processing",
    desc: "Text & speech analytics",
    icon: <MessageCircle className="shrink-0 text-indigo-500" size={16} />,
  },
  {
    label: "LLM Development",
    href: "/llm-development",
    desc: "Enterprise AI integrations",
    icon: <Code2 className="shrink-0 text-blue-600" size={16} />,
  },
];

const hireDevelopers = [
  {
    label: "Full Stack Developer",
    href: "/hire-developers/full-stack-developer",
    desc: "End-to-end web architecture & scalable solutions",
    icon: <Code2 className="shrink-0 text-blue-500" size={16} />,
  },
  {
    label: "AI/ML Developer",
    href: "/hire-developers/ai-ml-developer",
    desc: "Expert neural networks & predictive models",
    icon: <Cpu className="shrink-0 text-purple-500" size={16} />,
  },
  {
    label: "React Developer",
    href: "/hire-developers/react-developer",
    desc: "Dynamic, high-performance UI components",
    icon: <SiReact className="shrink-0 text-cyan-500" size={16} />,
  },
  {
    label: "Node.js Developer",
    href: "/hire-developers/nodejs-developer",
    desc: "Fast, scalable backend & microservices",
    icon: <SiNodedotjs className="shrink-0 text-green-600" size={16} />,
  },
  {
    label: "Mobile App Developer",
    href: "/hire-developers/mobile-app-developer",
    desc: "Native & cross-platform iOS/Android apps",
    icon: <Smartphone className="shrink-0 text-indigo-500" size={16} />,
  },
  {
    label: "Python Developer",
    href: "/hire-developers/python-developer",
    desc: "Robust scripting, data analytics & APIs",
    icon: <SiPython className="shrink-0 text-blue-600" size={16} />,
  },
  {
    label: "DevOps Engineer",
    href: "/hire-developers/devops-engineer",
    desc: "CI/CD pipelines, cloud infrastructure & automation",
    icon: <Server className="shrink-0 text-amber-500" size={16} />,
  },
  {
    label: "MERN Stack Developer",
    href: "/hire-developers/mern-stack-developer",
    desc: "MongoDB, Express, React, Node full-stack apps",
    icon: <SiMongodb className="shrink-0 text-emerald-600" size={16} />,
  },
  {
    label: "MEAN Stack Developer",
    href: "/hire-developers/mean-stack-developer",
    desc: "MongoDB, Express, Angular, Node solutions",
    icon: <SiAngular className="shrink-0 text-red-600" size={16} />,
  },
  {
    label: ".NET Developer",
    href: "/hire-developers/dotnet-developer",
    desc: "Enterprise web apps using C# and .NET Core",
    icon: <SiDotnet className="shrink-0 text-purple-600" size={16} />,
  },
  {
    label: "Frontend Developer",
    href: "/hire-developers/frontend-developer",
    desc: "Stunning, responsive UI/UX web interfaces",
    icon: <Globe className="shrink-0 text-cyan-600" size={16} />,
  },
  {
    label: "Backend Developer",
    href: "/hire-developers/backend-developer",
    desc: "Secure databases, APIs, and server architecture",
    icon: <Database className="shrink-0 text-blue-500" size={16} />,
  },
];

const technologies = [
  {
    category: "Frontend",
    icon: Globe,
    items: [
      {
        label: "ReactJS",
        to: "/technologies/react-js",
        icon: <SiReact className="shrink-0 text-cyan-500" size={15} />,
      },
      {
        label: "Angular",
        to: "/technologies/angular",
        icon: <SiAngular className="shrink-0 text-red-600" size={15} />,
      },
      {
        label: "Vue.js",
        to: "/technologies/vue-js",
        icon: <SiVuedotjs className="shrink-0 text-emerald-500" size={15} />,
      },
      {
        label: "Next.js",
        to: "/technologies/next-js",
        icon: (
          <SiNextdotjs
            className="shrink-0 text-slate-900 dark:text-white"
            size={15}
          />
        ),
      },
    ],
  },
  {
    category: "Backend",
    icon: Code2,
    items: [
      {
        label: "Java",
        to: "/technologies/java-development-services",
        icon: <SiOpenjdk className="shrink-0 text-red-500" size={15} />,
      },
      {
        label: "Node JS",
        to: "/technologies/nodejs-development-services",
        icon: <SiNodedotjs className="shrink-0 text-green-600" size={15} />,
      },
      {
        label: ".NET",
        to: "/technologies/dot-net-development-company",
        icon: <SiDotnet className="shrink-0 text-purple-600" size={15} />,
      },
      {
        label: "Python",
        to: "/technologies/python-development-company",
        icon: <SiPython className="shrink-0 text-blue-500" size={15} />,
      },
      {
        label: "Laravel",
        to: "/technologies/laravel-development-company",
        icon: <SiLaravel className="shrink-0 text-red-500" size={15} />,
      },
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: [
      {
        label: "React Native",
        to: "/technologies/react-native-app-development",
        icon: (
          <TbBrandReactNative className="shrink-0 text-cyan-500" size={15} />
        ),
      },
      {
        label: "Flutter",
        to: "/technologies/flutter-development-company",
        icon: <SiFlutter className="shrink-0 text-blue-400" size={15} />,
      },
      {
        label: "Xamarin",
        to: "/technologies/xamarin-app-development-company",
        icon: <TbBrandXamarin className="shrink-0 text-blue-600" size={15} />,
      },
      {
        label: "iOS",
        to: "/technologies/ios-app-development-company",
        icon: (
          <SiIos
            className="shrink-0 text-slate-700 dark:text-slate-300"
            size={15}
          />
        ),
      },
      {
        label: "Android",
        to: "/technologies/android-app-development-company",
        icon: <SiAndroid className="shrink-0 text-green-500" size={15} />,
      },
    ],
  },
  {
    category: "Cloud",
    icon: Cpu,
    items: [
      {
        label: "AWS Services",
        to: "/technologies/aws-services",
        icon: <FaAws className="shrink-0 text-amber-500" size={15} />,
      },
      {
        label: "GCP Services",
        to: "/technologies/gcp-services",
        icon: <SiGooglecloud className="shrink-0 text-blue-500" size={15} />,
      },
      {
        label: "Microsoft Azure",
        to: "/technologies/azure-services",
        icon: <TbBrandAzure className="shrink-0 text-blue-600" size={15} />,
      },
      {
        label: "Docker",
        to: "/technologies/docker",
        icon: <SiDocker className="shrink-0 text-blue-500" size={15} />,
      },
      {
        label: "Kubernetes",
        to: "/technologies/kubernetes",
        icon: <SiKubernetes className="shrink-0 text-blue-600" size={15} />,
      },
      {
        label: "Jenkins",
        to: "/technologies/jenkins",
        icon: <SiJenkins className="shrink-0 text-red-500" size={15} />,
      },
    ],
  },
  {
    category: "Database",
    icon: Database,
    items: [
      {
        label: "MySQL",
        to: "/technologies/mysql-database-development-services-company",
        icon: <SiMysql className="shrink-0 text-blue-600" size={15} />,
      },
      {
        label: "MongoDB",
        to: "/technologies/mongodb-development-services-company",
        icon: <SiMongodb className="shrink-0 text-green-600" size={15} />,
      },
      {
        label: "PostgresSQL",
        to: "/technologies/postgresql-development-services",
        icon: <SiPostgresql className="shrink-0 text-indigo-500" size={15} />,
      },
    ],
  },
  {
    category: "QA & Testing",
    icon: ShieldCheck,
    items: [
      {
        label: "QA & Automation",
        to: "/technologies/qa-automation",
        icon: <VscChecklist className="shrink-0 text-blue-500" size={15} />,
      },
      {
        label: "Manual Testing",
        to: "/technologies/manual-testing",
        icon: <VscTools className="shrink-0 text-amber-500" size={15} />,
      },
      {
        label: "Automation Testing",
        to: "/technologies/automation-testing",
        icon: <VscBeaker className="shrink-0 text-emerald-500" size={15} />,
      },
      {
        label: "Selenium",
        to: "/technologies/selenium",
        icon: <SiSelenium className="shrink-0 text-green-600" size={15} />,
      },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    items: [
      {
        label: "UI/UX Design",
        to: "/technologies/ui-ux-design",
        icon: (
          <VscSymbolInterface className="shrink-0 text-pink-500" size={15} />
        ),
      },
      {
        label: "Graphic Design",
        to: "/technologies/graphic-design",
        icon: <VscColorMode className="shrink-0 text-purple-500" size={15} />,
      },
      {
        label: "Web Design",
        to: "/technologies/web-design",
        icon: <VscWindow className="shrink-0 text-blue-500" size={15} />,
      },
      {
        label: "Mobile App Design",
        to: "/technologies/mobile-app-design",
        icon: <VscDeviceMobile className="shrink-0 text-cyan-500" size={15} />,
      },
      {
        label: "Product Design",
        to: "/technologies/product-design",
        icon: <VscPackage className="shrink-0 text-amber-500" size={15} />,
      },
    ],
  },
  {
    category: "Digital Marketing",
    icon: Megaphone,
    items: [
      {
        label: "SEO Services",
        to: "/technologies/best-seo-services",
        icon: <TrendingUp className="shrink-0 text-blue-600" size={15} />,
      },
      {
        label: "SMO Services",
        to: "/technologies/smo-services-company",
        icon: <MessageCircle className="shrink-0 text-pink-600" size={15} />,
      },
      {
        label: "PPC Campaigns",
        to: "/technologies/ppc-services",
        icon: <PieChart className="shrink-0 text-emerald-600" size={15} />,
      },
      {
        label: "ORM Services",
        to: "/technologies/best-orm-services",
        icon: <Star className="shrink-0 text-indigo-600" size={15} />,
      },
    ],
  },
];
const NavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="group relative rounded-xl px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#1e3a8a] dark:text-slate-200 dark:hover:text-white"
    >
      <span>{children}</span>

      <span
        className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full transition-all duration-300 ease-out group-hover:w-3/5"
        style={{
          background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow})`,
        }}
      />
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [desktopDropdown, setDesktopDropdown] = useState(null);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHireOpen, setMobileHireOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const { darkMode, toggleDarkMode } = useTheme();

  const navbarRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setDesktopDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDesktopDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeAllMenus = () => {
    setDesktopDropdown(null);
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileHireOpen(false);
    setMobileTechOpen(false);
  };

  const toggleDesktopDropdown = (menu) => {
    setDesktopDropdown((current) => (current === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsOpen((current) => !current);
    setDesktopDropdown(null);
  };

  return (
    <header
      ref={navbarRef}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-4 shadow-sm backdrop-blur-md transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-slate-200/90 bg-white/95 shadow-md dark:border-blue-500/25 dark:bg-[#070d18]/95"
            : "border-slate-200/60 bg-white/85 dark:border-blue-500/20 dark:bg-[#070d18]/85"
        }`}
      >
        <Link
          to="/"
          onClick={closeAllMenus}
          aria-label="Shilsha Technologies Home"
          className="group flex shrink-0 items-center"
        >
          <img
            src={logo}
            width={60}
            height={60}
            loading="eager"
            decoding="async"
            alt="Shilsha Logo"
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          <NavLink to="/" onClick={closeAllMenus}>
            Home
          </NavLink>

          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={desktopDropdown === "services"}
              onClick={() => toggleDesktopDropdown("services")}
              onMouseEnter={() => setDesktopDropdown("services")}
              className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                desktopDropdown === "services"
                  ? "bg-blue-50 text-[#1e3a8a] dark:bg-[#286b94]/25 dark:text-white"
                  : "text-slate-700 hover:text-[#1e3a8a] dark:text-slate-200 dark:hover:text-white"
              }`}
            >
              Services
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  desktopDropdown === "services"
                    ? "rotate-180 text-[#6ea1ff]"
                    : ""
                }`}
              />
            </button>

            <div
              onMouseEnter={() => setDesktopDropdown("services")}
              onMouseLeave={() => setDesktopDropdown(null)}
              className={`absolute left-0 top-full w-130 max-w-[calc(100vw-24px)] pt-3 transition-all duration-200 ${
                desktopDropdown === "services"
                  ? "visible translate-y-0 opacity-100"
                  : "invisible pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-xl backdrop-blur-md dark:border-blue-500/30 dark:bg-[#0b1528] dark:text-white dark:shadow-black/90">
                <div className="mb-3 flex items-center gap-2 border-b border-slate-200 px-3 py-2 text-[#286b94] dark:border-[#286b94]/30 dark:text-[#6ea1ff]">
                  <Sparkles size={14} />

                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    AI & Digital Services
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      onClick={closeAllMenus}
                      className="group flex items-start gap-2.5 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-[#286b94]/40 hover:bg-blue-50/80 dark:hover:border-[#6ea1ff]/40 dark:hover:bg-[#286b94]/20"
                    >
                      <div className="mt-0.5 shrink-0 rounded-lg bg-blue-50 p-1.5 dark:bg-[#286b94]/30">
                        {service.icon}
                      </div>

                      <div className="min-w-0">
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-[#1e3a8a] dark:text-white dark:group-hover:text-sky-300">
                          {service.label}
                        </span>

                        <span className="mt-0.5 block line-clamp-2 text-[10px] leading-snug text-slate-500 dark:text-slate-400">
                          {service.desc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={desktopDropdown === "hire"}
              onClick={() => toggleDesktopDropdown("hire")}
              onMouseEnter={() => setDesktopDropdown("hire")}
              className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                desktopDropdown === "hire"
                  ? "bg-blue-50 text-[#1e3a8a] dark:bg-[#286b94]/25 dark:text-white"
                  : "text-slate-700 hover:text-[#1e3a8a] dark:text-slate-200 dark:hover:text-white"
              }`}
            >
              Hire Developers
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  desktopDropdown === "hire" ? "rotate-180 text-[#6ea1ff]" : ""
                }`}
              />
            </button>

            <div
              onMouseEnter={() => setDesktopDropdown("hire")}
              onMouseLeave={() => setDesktopDropdown(null)}
              className={`absolute left-0 top-full w-180 max-w-[calc(100vw-24px)] pt-3 transition-all duration-200 ${
                desktopDropdown === "hire"
                  ? "visible translate-y-0 opacity-100"
                  : "invisible pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-xl backdrop-blur-md dark:border-blue-500/30 dark:bg-[#0b1528] dark:text-white dark:shadow-black/90">
                <div className="mb-3 flex items-center gap-2 border-b border-slate-200 px-3 py-2 text-[#286b94] dark:border-[#286b94]/30 dark:text-[#6ea1ff]">
                  <Users size={14} />

                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    Trusted Developers
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {hireDevelopers.map((developer) => (
                    <Link
                      key={developer.label}
                      to={developer.href}
                      onClick={closeAllMenus}
                      className="group flex items-start gap-2.5 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-[#286b94]/40 hover:bg-blue-50/80 dark:hover:border-[#6ea1ff]/40 dark:hover:bg-[#286b94]/20"
                    >
                      <div className="mt-0.5 shrink-0 rounded-lg bg-blue-50 p-1.5 dark:bg-[#286b94]/30">
                        {developer.icon}
                      </div>

                      <div className="min-w-0">
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-[#1e3a8a] dark:text-white dark:group-hover:text-sky-300">
                          {developer.label}
                        </span>

                        <span className="mt-0.5 block line-clamp-2 text-[10px] leading-snug text-slate-500 dark:text-slate-400">
                          {developer.desc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={desktopDropdown === "technologies"}
              onClick={() => toggleDesktopDropdown("technologies")}
              onMouseEnter={() => setDesktopDropdown("technologies")}
              className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                desktopDropdown === "technologies"
                  ? "bg-blue-50 text-[#1e3a8a] dark:bg-[#286b94]/25 dark:text-white"
                  : "text-slate-700 hover:text-[#1e3a8a] dark:text-slate-200 dark:hover:text-white"
              }`}
            >
              Technologies
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  desktopDropdown === "technologies"
                    ? "rotate-180 text-[#6ea1ff]"
                    : ""
                }`}
              />
            </button>

            <div
              onMouseEnter={() => setDesktopDropdown("technologies")}
              onMouseLeave={() => setDesktopDropdown(null)}
              className={`absolute left-1/2 top-full w-280 max-w-[calc(100vw-24px)] -translate-x-1/2 pt-3 transition-all duration-200 ${
                desktopDropdown === "technologies"
                  ? "visible translate-y-0 opacity-100"
                  : "invisible pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="relative grid grid-cols-4 gap-x-6 gap-y-7 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-xl backdrop-blur-md dark:border-blue-500/30 dark:bg-[#0b1528] dark:text-slate-100 dark:shadow-black/90">
                <div
                  className="absolute left-0 top-0 h-0.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow}, ${theme.secondary})`,
                  }}
                />

                {technologies.map((group) => {
                  const Icon = group.icon;

                  return (
                    <div
                      key={group.category}
                      className="flex min-w-0 flex-col gap-2.5"
                    >
                      <div className="mb-2 px-1">
                        <div className="flex w-fit items-center gap-2 rounded-lg border border-[#286b94]/30 bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#286b94] dark:border-[#286b94]/40 dark:bg-[#286b94]/20 dark:text-[#6ea1ff]">
                          <Icon size={13} />

                          <span>{group.category}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            onClick={closeAllMenus}
                            className="flex items-center gap-2 rounded-lg border-l-2 border-transparent px-2.5 py-1.5 text-xs font-semibold text-slate-800 transition-all duration-200 hover:translate-x-1 hover:border-[#286b94] hover:bg-blue-100/70 hover:text-[#1e3a8a] dark:text-slate-200 dark:hover:border-[#6ea1ff] dark:hover:bg-[#286b94]/30 dark:hover:text-white"
                          >
                            {item.icon}

                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <NavLink to="/about-us" onClick={closeAllMenus}>
            About
          </NavLink>

          <NavLink to="/contact-us" onClick={closeAllMenus}>
            Contact
          </NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Dark Mode */}
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-200 hover:bg-slate-100 active:scale-95 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-amber-300 dark:hover:bg-blue-500/20"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Desktop CTA */}
          <Link
            to="/contact-us"
            onClick={closeAllMenus}
            className="group relative hidden items-center gap-2 overflow-hidden rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 lg:flex"
            style={{
              background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
            }}
          >
            <span className="relative">Get a Quote</span>

            <ArrowUpRight
              size={15}
              className="relative transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition-all duration-200 hover:bg-slate-100 active:scale-95 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-white lg:hidden"
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>
      {/* Mobile Menus */}
      <div
        className={`mx-1 mt-2 overflow-hidden rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-300 sm:mx-4 ${
          isOpen
            ? "max-h-[calc(100vh-90px)] overflow-y-auto border-slate-200 bg-white p-3 opacity-100 dark:border-blue-500/20 dark:bg-[#0b1528]"
            : "pointer-events-none max-h-0 border-transparent p-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
          {/* Home */}
          <Link
            to="/"
            onClick={closeAllMenus}
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            Home
          </Link>

          <button
            type="button"
            aria-expanded={mobileServicesOpen}
            onClick={() => setMobileServicesOpen((current) => !current)}
            className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            <span>Services</span>

            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${
                mobileServicesOpen ? "rotate-180 text-[#6ea1ff]" : ""
              }`}
            />
          </button>

          {mobileServicesOpen && (
            <div className="ml-3 grid grid-cols-2 gap-1.5 border-l border-blue-500/20 pl-3">
              {services.map((service) => (
                <Link
                  key={service.label}
                  to={service.href}
                  onClick={closeAllMenus}
                  className="rounded-lg bg-slate-50 px-2.5 py-2 text-slate-900 transition-colors hover:bg-blue-50 dark:bg-[#286b94]/10 dark:text-white dark:hover:bg-[#286b94]/30"
                >
                  <span className="block text-[11px] font-bold leading-tight">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>
          )}

          <button
            type="button"
            aria-expanded={mobileHireOpen}
            onClick={() => setMobileHireOpen((current) => !current)}
            className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            <span>Hire Developers</span>

            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${
                mobileHireOpen ? "rotate-180 text-[#6ea1ff]" : ""
              }`}
            />
          </button>

          {mobileHireOpen && (
            <div className="ml-3 grid grid-cols-2 gap-1.5 border-l border-blue-500/20 pl-3">
              {hireDevelopers.map((developer) => (
                <Link
                  key={developer.label}
                  to={developer.href}
                  onClick={closeAllMenus}
                  className="rounded-lg bg-slate-50 px-2.5 py-2 text-slate-900 transition-colors hover:bg-blue-50 dark:bg-[#286b94]/10 dark:text-white dark:hover:bg-[#286b94]/30"
                >
                  <span className="block text-[11px] font-bold leading-tight">
                    {developer.label}
                  </span>
                </Link>
              ))}
            </div>
          )}

          <button
            type="button"
            aria-expanded={mobileTechOpen}
            onClick={() => setMobileTechOpen((current) => !current)}
            className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            <span>Technologies</span>

            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${
                mobileTechOpen ? "rotate-180 text-[#6ea1ff]" : ""
              }`}
            />
          </button>

          {mobileTechOpen && (
            <div className="ml-3 flex flex-col gap-3 border-l border-blue-500/20 pl-3">
              {technologies.map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.category} className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 px-2 text-[10px] font-bold uppercase tracking-wider text-[#6ea1ff]">
                      <Icon size={12} />
                      {group.category}
                    </div>

                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={closeAllMenus}
                        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-blue-500/15"
                      >
                        {item.icon}

                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                );
              })}
            </div>
          )}

          {/* About */}
          <Link
            to="/about-us"
            onClick={closeAllMenus}
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            About
          </Link>

          {/* Contact */}
          <Link
            to="/contact-us"
            onClick={closeAllMenus}
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <Link
            to="/contact-us"
            onClick={closeAllMenus}
            className="mt-2 rounded-xl py-2.5 text-center text-xs font-semibold text-white shadow-md transition-transform active:scale-[0.98]"
            style={{
              background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
            }}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Navbar);

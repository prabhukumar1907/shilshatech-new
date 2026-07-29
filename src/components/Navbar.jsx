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
  SiGithubactions,
  SiGitlab,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSelenium,
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
  VscMegaphone,
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
  },
  {
    label: "AI Consulting",
    href: "/ai-consulting-company",
    desc: "Strategy & roadmap planning",
  },
  {
    label: "Generative AI",
    href: "/generative-ai",
    desc: "LLMs & synthetic media",
  },
  {
    label: "Model Training",
    href: "/ai-modal-training",
    desc: "Fine-tuning & optimization",
  },
  {
    label: "Natural Language Processing",
    href: "/natural-language-processing",
    desc: "Text & speech analytics",
  },
  {
    label: "LLM Development",
    href: "/llm-development",
    desc: "Enterprise AI integrations",
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
      // { label: "GitHub Actions", to: "/technologies/github-actions", icon: <SiGithubactions className="shrink-0 text-blue-400" size={15} /> },
      // { label: "GitLab CI/CD", to: "/technologies/gitlab-ci-cd", icon: <SiGitlab className="shrink-0 text-orange-600" size={15} /> },
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

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="group relative px-3.5 py-2 rounded-xl text-sm font-medium transition-colors duration-200 text-slate-700 hover:text-[#1e3a8a] dark:text-slate-200 dark:hover:text-white"
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border transition-colors duration-200 px-6 transform-gpu ${
          scrolled
            ? "bg-white/95 border-slate-200/90 shadow-md backdrop-blur-md dark:bg-[#070d18]/95 dark:border-blue-500/25"
            : "bg-white/85 border-slate-200/60 shadow-sm backdrop-blur-sm dark:bg-[#070d18]/85 dark:border-blue-500/20"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <img
              src={logo}
              alt="Shilsha Logo"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/">Home</NavLink>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                servicesOpen
                  ? "text-[#1e3a8a] bg-blue-50 dark:text-white dark:bg-[#286b94]/25"
                  : "text-slate-700 hover:text-[#1e3a8a] dark:text-slate-200 dark:hover:text-white"
              }`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#6ea1ff]" : ""}`}
              />
            </Link>

            <div
              className={`absolute left-0 top-full pt-3 w-88 transition-all duration-200 origin-top-left ${
                servicesOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              <div className="rounded-2xl border p-3 shadow-xl backdrop-blur-md overflow-hidden bg-white border-slate-200 text-slate-900 dark:bg-[#0b1528] dark:border-blue-500/30 dark:text-white dark:shadow-black/90">
                {/* Header Badge */}
                <div className="flex items-center gap-2 px-3 py-2 border-b mb-2 border-slate-200 text-[#286b94] dark:border-[#286b94]/30 dark:text-[#6ea1ff]">
                  <Sparkles size={14} className="shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    AI & Digital Services
                  </span>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.label}
                      to={s.href}
                      className="group flex flex-col px-3.5 py-2.5 rounded-xl transition-all duration-200 border-l-2 border-transparent hover:bg-blue-50/80 hover:border-[#286b94] dark:hover:bg-[#286b94]/30 dark:hover:border-[#6ea1ff]"
                    >
                      <span className="text-xs font-bold text-slate-900 group-hover:text-[#1e3a8a] dark:text-white dark:group-hover:text-white">
                        {s.label}
                      </span>
                      <span className="text-[11px] mt-0.5 leading-snug text-slate-600 group-hover:text-blue-950 font-medium dark:text-slate-300 dark:group-hover:text-sky-300 dark:font-normal">
                        {s.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/hire-a-developer">Hire Developers</NavLink>

          {/* Technologies Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setTechOpen(true)}
            onMouseLeave={() => setTechOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
                techOpen
                  ? "text-[#1e3a8a] bg-blue-50 dark:text-white dark:bg-[#286b94]/25"
                  : "text-slate-700 hover:text-[#1e3a8a] dark:text-slate-200 dark:hover:text-white"
              }`}
            >
              Technologies
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${techOpen ? "rotate-180 text-[#6ea1ff]" : ""}`}
              />
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-232 max-w-[95vw] transition-all duration-200 origin-top ${
                techOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              <div className="relative rounded-2xl border p-6 shadow-xl backdrop-blur-md grid grid-cols-4 gap-x-6 gap-y-7 overflow-hidden bg-white border-slate-200 text-slate-800 dark:bg-[#0b1528] dark:border-blue-500/30 dark:text-slate-100 dark:shadow-black/90">
                <div
                  className="absolute top-0 left-0 h-0.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${theme.primary}, ${theme.glow}, ${theme.secondary})`,
                  }}
                />

                {technologies.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div key={group.category} className="flex flex-col gap-2.5">
                      <div className="px-1 mb-2">
                        <div className="flex items-center gap-2 w-fit px-2.5 py-1 rounded-lg border text-[11px] font-bold uppercase tracking-wider border-[#286b94]/30 bg-blue-50 text-[#286b94] dark:border-[#286b94]/40 dark:bg-[#286b94]/20 dark:text-[#6ea1ff]">
                          <Icon size={13} className="shrink-0" />
                          <span>{group.category}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold border-l-2 border-transparent transition-all duration-200 text-slate-800 hover:text-[#1e3a8a] hover:border-[#286b94] hover:bg-blue-100/70 hover:translate-x-1 dark:text-slate-200 dark:hover:text-white dark:hover:border-[#6ea1ff] dark:hover:bg-[#286b94]/30"
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

          <NavLink to="/about-us">About</NavLink>
          <NavLink to="/contact-us">Contact</NavLink>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Dark Mode Switcher */}
          <button
            onClick={toggleDarkMode}
            className="h-9 w-9 cursor-pointer rounded-xl border flex items-center justify-center transition-colors duration-200 active:scale-95 border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-amber-300 dark:hover:bg-blue-500/20"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA Button */}
          <Link
            to="/contact-us"
            className="hidden lg:flex relative cursor-pointer items-center gap-2 px-4.5 py-2 rounded-xl text-white text-xs font-semibold transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden group shadow-md"
            style={{
              background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
            }}
          >
            <span className="relative">Get a Quote</span>
            <ArrowUpRight
              size={15}
              className="relative transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden cursor-pointer h-9 w-9 rounded-xl border flex items-center justify-center transition-colors duration-200 active:scale-95 border-slate-200 text-slate-800 hover:bg-slate-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-white"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden mx-4 mt-2 overflow-hidden rounded-2xl border transition-all duration-200 backdrop-blur-md bg-white border-slate-200 text-slate-800 shadow-xl dark:bg-[#0b1528] dark:border-blue-500/20 dark:text-slate-100 ${
          isOpen
            ? "max-h-[85vh] overflow-y-auto opacity-100 p-4"
            : "max-h-0 opacity-0 p-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            <span>Services</span>
            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#6ea1ff]" : ""}`}
            />
          </button>
          {mobileServicesOpen && (
            <div className="ml-3 pl-3 border-l border-blue-500/20 flex flex-col gap-1.5 my-1">
              {services.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs flex flex-col text-slate-900 hover:bg-blue-50 dark:text-white dark:hover:bg-[#286b94]/25"
                >
                  <span className="font-bold">{s.label}</span>
                  <span className="text-[10px] text-slate-600 dark:text-sky-300">
                    {s.desc}
                  </span>
                </a>
              ))}
            </div>
          )}

          <Link
            to="hire-a-developer"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            Hire Developers
          </Link>

          {/* Mobile Technologies Accordion */}
          <button
            onClick={() => setMobileTechOpen(!mobileTechOpen)}
            className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            <span>Technologies</span>
            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${mobileTechOpen ? "rotate-180 text-[#6ea1ff]" : ""}`}
            />
          </button>
          {mobileTechOpen && (
            <div className="ml-3 pl-3 border-l border-blue-500/20 flex flex-col gap-3 my-2">
              {technologies.map((group) => (
                <div key={group.category} className="flex flex-col gap-1">
                  <span className="text-[11px] font-semibold uppercase text-[#6ea1ff]">
                    {group.category}
                  </span>
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium text-slate-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-blue-500/15"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          <Link
            to="/about-us"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            About
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-blue-500/15"
          >
            Contact
          </Link>

          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="mt-2 py-2.5 text-center cursor-pointer rounded-xl text-white text-xs font-semibold shadow-md"
            style={{
              background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
            }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);

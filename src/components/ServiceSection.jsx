import React, { useState } from "react";
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
  ArrowUpRight,
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
    number: "01",
    icon: Globe,
    title: "Web Development & Portals",
    description:
      "Specialized in high-converting Business Websites, complex Web Portals, e-commerce platforms, and custom CMS architectures engineered for performance and speed.",
    tags: ["Business Websites", "Web Portals", "React", "Next.js"],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "End-to-end mobile engineering covering Native Android Apps, Native iPhone Apps, and high-performance Cross-Platform mobile solutions.",
    tags: ["Android Apps", "iPhone Apps", "Native Mobile", "Cross-Platform"],
  },
  {
    number: "03",
    icon: Palette,
    title: "UI / UX Designing",
    description:
      "Our UI/UX design services prioritize user needs to create intuitive and engaging interfaces. Through research, prototyping, and testing, we craft seamless digital experiences.",
    tags: ["Figma", "Prototypes", "User Research", "Wireframing"],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "QA & Testing Services",
    description:
      "Our comprehensive QA & Testing services provide meticulous analysis, rigorous automated testing, and security strategies to ensure software reliability and performance.",
    tags: ["Automation", "Security", "Performance", "Manual QA"],
  },
  {
    number: "05",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end custom software solutions tailored to your unique enterprise needs. From conceptualization to deployment, we deliver scalable, secure, and innovative applications.",
    tags: ["SaaS", "Microservices", "API Integration", "Cloud"],
  },
  {
    number: "06",
    icon: Building2,
    title: "Offshore Development Center",
    description:
      "Dedicated tech teams, cost-effective scaling, agile methodologies, and 24/7 support. Maximize efficiency, minimize risks, and boost ROI with our offshore expertise.",
    tags: ["Dedicated Team", "Agile", "24/7 Support", "Cost Effective"],
  },
  {
    number: "07",
    icon: Cpu,
    title: "AI Development Services",
    description:
      "Harness Machine Learning, Deep Learning, and Generative AI consulting to automate processes, derive deep business analytics, and unlock a competitive edge.",
    tags: ["LLMs", "Machine Learning", "Automation", "NLP"],
  },
  {
    number: "08",
    icon: Megaphone,
    title: "Digital Marketing Services",
    description:
      "Encompassing SEO, PPC advertising, social media management, content marketing, and conversion analytics. Drive qualified traffic and maximize your online revenue.",
    tags: ["SEO", "PPC", "SMO", "Growth Hacking"],
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-slate-50
        text-slate-900
        transition-colors
        duration-500
        dark:bg-[#050b14]
        dark:text-white
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-40
          h-125
          w-125
          rounded-full
          blur-[150px]
        "
        style={{
          background: `${theme.primary}18`,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-125
          w-125
          rounded-full
          blur-[150px]
        "
        style={{
          background: `${theme.glow}12`,
        }}
      />
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          dark:opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-350
          px-5
          py-12
          sm:px-8
          lg:px-12
          lg:py-22
        "
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-3">
            <div className="sticky top-22">
              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#276ea5]
                  dark:text-[#60a5fa]
                "
              >
                <span className="h-px w-10 bg-current" />

                <span>Our Services</span>
              </div>

              <div className="mt-8 hidden lg:block">
                <p
                  className="
                    -mt-5
                    max-w-55
                    text-sm
                    leading-relaxed
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Technology, creativity and engineering brought together to
                  build digital products that move businesses forward.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-9">
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                max-w-5xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.045em]
                sm:text-6xl
                lg:text-[78px]
              "
            >
              We build digital
              <br />
              <span className="relative inline-block">
                <span
                  className="
                    bg-clip-text
                    text-transparent
                  "
                  style={{
                    backgroundImage: `linear-gradient(
                      100deg,
                      ${theme.primary},
                      ${theme.secondary},
                      ${theme.glow}
                    )`,
                  }}
                >
                  experiences
                </span>

                <span
                  className="
                    absolute
                    -right-5
                    -top-1
                    h-3
                    w-3
                    rounded-full
                    sm:-right-7
                    sm:-top-2
                    sm:h-4
                    sm:w-4
                  "
                  style={{
                    background: theme.glow,
                    boxShadow: `0 0 30px ${theme.glow}`,
                  }}
                />
              </span>
              <br />
              <span
                className="
                  text-slate-400
                  dark:text-slate-500
                "
              >
                engineered to perform.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              We design and build high-impact enterprise applications, web
              portals, and AI solutions. We empower industries worldwide
              including Healthcare, Retail, Finance, and Manufacturing.
            </motion.p>

            <div className="mt-12 flex items-center gap-4">
              <div
                className="h-px w-24"
                style={{
                  background: `linear-gradient(
                    90deg,
                    ${theme.primary},
                    transparent
                  )`,
                }}
              />

              <Sparkles
                size={16}
                className="
                  text-[#276ea5]
                  dark:text-[#60a5fa]
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-slate-400
                "
              >
                Explore our capabilities
              </span>
            </div>
          </div>
        </div>
        {/* Service grid */}
        <div className="mt-12 lg:mt-14">
          <div
            className="
              grid
              grid-cols-1
              border-t
              border-slate-200
              dark:border-white/10
              md:grid-cols-3
              md:divide-x
              md:divide-slate-200
              dark:md:divide-white/10
            "
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.035,
                  }}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className="
                    group
                    relative
                    min-w-0
                    border-b
                    border-slate-200
                    dark:border-white/10
                  "
                >
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scaleY: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-0
                      z-0
                      w-px
                      origin-top
                      bg-[#276ea5]
                      dark:bg-[#60a5fa]
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      min-h-105
                      flex-col
                      px-6
                      py-9
                      transition-all
                      duration-500
                      sm:px-8
                      sm:py-10
                      lg:min-h-115
                      lg:px-10
                      lg:py-12
                      xl:px-12
                    "
                  >
                    {/* Top line */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`
                          text-xs
                          font-bold
                          tracking-[0.15em]
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-[#276ea5] dark:text-[#60a5fa]"
                              : "text-slate-400 dark:text-slate-600"
                          }
                        `}
                      >
                        {service.number}
                      </span>

                      <motion.div
                        animate={{
                          x: isActive ? 0 : -8,
                          opacity: isActive ? 1 : 0.35,
                          rotate: isActive ? 0 : -10,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          text-[#276ea5]
                          dark:text-[#60a5fa]
                        "
                      >
                        <ArrowUpRight size={20} />
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{
                        y: isActive ? -4 : 0,
                        rotate: isActive ? -6 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative mt-10 w-fit"
                    >
                      <div
                        className={`
                          absolute
                          inset-0
                          rounded-full
                          blur-xl
                          transition-opacity
                          duration-500
                          ${isActive ? "opacity-50" : "opacity-0"}
                        `}
                        style={{
                          background: theme.glow,
                        }}
                      />

                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className={`
                          relative
                          z-10
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-[#276ea5] dark:text-[#60a5fa]"
                              : "text-slate-400 dark:text-slate-600"
                          }
                        `}
                      />
                    </motion.div>

                    <motion.h3
                      animate={{
                        x: isActive ? 6 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className={`
                        mt-7
                        max-w-md
                        text-2xl
                        font-bold
                        tracking-tight
                        transition-colors
                        duration-300
                        sm:text-3xl
                        lg:text-[30px]
                        ${
                          isActive
                            ? "text-[#276ea5] dark:text-white"
                            : "text-slate-900 dark:text-white"
                        }
                      `}
                    >
                      {service.title}
                    </motion.h3>

                    <p
                      className="
                        mt-5
                        max-w-xl
                        text-sm
                        leading-7
                        text-slate-500
                        transition-colors
                        duration-300
                        dark:text-slate-400
                      "
                    >
                      {service.description}
                    </p>

                    <div
                      className={`
                        mt-auto
                        flex
                        flex-wrap
                        gap-x-4
                        gap-y-2
                        pt-8
                        transition-all
                        duration-500
                        ${isActive ? "opacity-100" : "opacity-70"}
                      `}
                    >
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wide
                            text-slate-400
                            dark:text-slate-500
                          "
                        >
                          <span
                            className="
                              h-1
                              w-1
                              rounded-full
                              bg-slate-400
                              transition-colors
                              duration-300
                              dark:bg-slate-600
                            "
                          />

                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        width: isActive ? "64px" : "0px",
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        bg-[#276ea5]
                        dark:bg-[#60a5fa]
                      "
                    />
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-0
                      origin-left
                      bg-[linear-gradient(135deg,rgba(39,110,165,0.055),transparent_60%)]
                      dark:bg-[linear-gradient(135deg,rgba(39,110,165,0.08),transparent_60%)]
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-20
            flex
            flex-col
            items-start
            justify-between
            gap-8
            sm:flex-row
            sm:items-center
          "
        >
          <div>
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-400
              "
            >
              Have a project in mind?
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-bold
                tracking-tight
                sm:text-3xl
              "
            >
              Let's build something remarkable.
            </h3>
          </div>

          <Link
            to="/services"
            className="
              group
              inline-flex
              items-center
              gap-3
              border-b-2
              border-[#276ea5]
              pb-2
              text-sm
              font-bold
              text-[#276ea5]
              transition-all
              hover:gap-5
              dark:border-[#60a5fa]
              dark:text-[#60a5fa]
            "
          >
            Explore all services
            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

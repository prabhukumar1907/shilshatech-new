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
  CloudCog,
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
    color: "#4285F4",
    title: "Web Development & Portals",
    description:
      "Specialized in high-converting Business Websites, complex Web Portals, e-commerce platforms, and custom CMS architectures engineered for performance and speed.",
    tags: ["Business Websites", "Web Portals", "React", "Next.js"],
  },
  {
    number: "02",
    icon: Smartphone,
    color: "#34A853",
    title: "Mobile App Development",
    description:
      "End-to-end mobile engineering covering Native Android Apps, Native iPhone Apps, and high-performance Cross-Platform mobile solutions.",
    tags: ["Android Apps", "iPhone Apps", "Native Mobile", "Cross-Platform"],
  },
  {
    number: "03",
    icon: Palette,
    color: "#A855F7",
    title: "UI / UX Designing",
    description:
      "Our UI/UX design services prioritize user needs to create intuitive and engaging interfaces. Through research, prototyping, and testing, we craft seamless digital experiences.",
    tags: ["Figma", "Prototypes", "User Research", "Wireframing"],
  },
  {
    number: "04",
    icon: ShieldCheck,
    color: "#10B981",
    title: "QA & Testing Services",
    description:
      "Our comprehensive QA & Testing services provide meticulous analysis, rigorous automated testing, and security strategies to ensure software reliability and performance.",
    tags: ["Automation", "Security", "Performance", "Manual QA"],
  },
  {
    number: "05",
    icon: Code2,
    color: "#F89820",
    title: "Custom Software Development",
    description:
      "End-to-end custom software solutions tailored to your unique enterprise needs. From conceptualization to deployment, we deliver scalable, secure, and innovative applications.",
    tags: ["SaaS", "Microservices", "API Integration", "Cloud"],
  },
  {
    number: "09",
    icon: CloudCog,
    color: "#8B5CF6",
    title: "Cloud & DevOps Services",
    description:
      "Modern cloud infrastructure, CI/CD automation, containerization, monitoring and scalable deployment solutions built for reliability and performance.",
    tags: ["AWS", "Azure", "Docker", "CI/CD"],
  },

  {
    number: "06",
    icon: Building2,
    color: "#06B6D4",
    title: "Offshore Development Center",
    description:
      "Dedicated tech teams, cost-effective scaling, agile methodologies, and 24/7 support. Maximize efficiency, minimize risks, and boost ROI with our offshore expertise.",
    tags: ["Dedicated Team", "Agile", "24/7 Support", "Cost Effective"],
  },
  {
    number: "07",
    icon: Cpu,
    color: "#EC4899",
    title: "AI Development Services",
    description:
      "Harness Machine Learning, Deep Learning, and Generative AI consulting to automate processes, derive deep business analytics, and unlock a competitive edge.",
    tags: ["LLMs", "Machine Learning", "Automation", "NLP"],
  },
  {
    number: "08",
    icon: Megaphone,
    color: "#EF4444",
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

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
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
          py-8
          sm:px-8
          sm:py-10
          lg:px-12
          lg:py-10
        "
      >
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-16">
          {/* LEFT */}
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

              <div className="mt-6 hidden lg:block">
                <p
                  className="
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

          {/* RIGHT */}

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
                  className="bg-clip-text text-transparent"
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

                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
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
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              We design and build high-impact enterprise applications, web
              portals, and AI solutions. We empower industries worldwide
              including Healthcare, Retail, Finance, and Manufacturing.
            </motion.p>

            <div className="mt-7 flex items-center gap-4">
              <div
                className="h-px w-20"
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

        <div className="mt-9 lg:mt-11">
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
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  whileHover={{
                    backgroundColor: "rgba(39,110,165,0.025)",
                  }}
                  className="
                    group
                    relative
                    min-w-0
                    cursor-pointer
                    border-b
                    border-slate-200
                    transition-colors
                    duration-300
                    dark:border-white/10
                    dark:hover:bg-white/[0.018]
                  "
                >
                  {/* Vertical active line */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scaleY: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-0
                      z-20
                      w-0.5
                      origin-top
                      rounded-full
                      bg-[#276ea5]
                      dark:bg-[#60a5fa]
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      px-5
                      py-6
                      sm:px-7
                      sm:py-7
                      lg:px-8
                      lg:py-8
                      xl:px-9
                    "
                  >
                    <div className="flex items-center justify-between">
                      <motion.span
                        animate={{
                          x: isActive ? 3 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={`
                          text-[11px]
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
                      </motion.span>

                      <motion.div
                        animate={{
                          x: isActive ? 0 : -5,
                          y: isActive ? -1 : 0,
                          opacity: isActive ? 1 : 0.25,
                          rotate: isActive ? 0 : -8,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          text-[#276ea5]
                          dark:text-[#60a5fa]
                        "
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>

                    <div className="mt-6 flex items-center gap-3.5">
                      {/* ICON */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.08 : 1,
                          rotate: isActive ? -5 : 0,
                          y: isActive ? -1 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 18,
                        }}
                        className="
                          relative
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          bg-white/70
                          shadow-sm
                          transition-all
                          duration-300
                          dark:bg-white/[0.035]
                        "
                        style={{
                          color: service.color,
                          borderColor: `${service.color}35`,
                          boxShadow: isActive
                            ? `0 8px 25px ${service.color}18`
                            : undefined,
                        }}
                      >
                        <motion.span
                          animate={{
                            scale: isActive ? 1.2 : 0.8,
                            opacity: isActive ? 0.18 : 0,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          className="
                            pointer-events-none
                            absolute
                            inset-1
                            rounded-lg
                            blur-lg
                          "
                          style={{
                            background: service.color,
                          }}
                        />

                        <Icon
                          size={21}
                          strokeWidth={1.7}
                          className="relative z-10"
                        />
                      </motion.div>

                      {/* TITLE */}

                      <motion.h3
                        animate={{
                          x: isActive ? 3 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        className={`
                          min-w-0
                          flex-1
                          text-lg
                          font-bold
                          leading-tight
                          tracking-tight
                          transition-colors
                          duration-300
                          sm:text-xl
                          lg:text-[21px]
                          ${
                            isActive
                              ? "text-[#276ea5] dark:text-white"
                              : "text-slate-900 dark:text-white"
                          }
                        `}
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    <motion.p
                      animate={{
                        opacity: isActive ? 1 : 0.82,
                        x: isActive ? 3 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        mt-4
                        max-w-xl
                        text-[13px]
                        leading-6
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {service.description}
                    </motion.p>

                    <div
                      className="
                        mt-5
                        flex
                        flex-wrap
                        gap-x-3.5
                        gap-y-1.5
                      "
                    >
                      {service.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0.65,
                            x: isActive ? 2 : 0,
                          }}
                          transition={{
                            duration: 0.25,
                            delay: tagIndex * 0.02,
                          }}
                          className="
                            flex
                            items-center
                            gap-1.5
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.06em]
                            text-slate-400
                            dark:text-slate-500
                          "
                        >
                          <span
                            className="
                              h-1
                              w-1
                              shrink-0
                              rounded-full
                              transition-colors
                              duration-300
                            "
                            style={{
                              backgroundColor: isActive
                                ? service.color
                                : undefined,
                            }}
                          />

                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        width: isActive ? "58px" : "0px",
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-0.5
                        rounded-full
                        bg-[#276ea5]
                        dark:bg-[#60a5fa]
                      "
                    />
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      right-0
                      top-0
                      z-0
                      w-1/2
                      bg-[radial-gradient(circle_at_bottom_right,rgba(39,110,165,0.08),transparent_65%)]
                      dark:bg-[radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.07),transparent_65%)]
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
            duration: 0.6,
          }}
          className="
            mt-11
            flex
            flex-col
            items-start
            justify-between
            gap-5
            border-t
            border-slate-200
            pt-6
            dark:border-white/10
            sm:flex-row
            sm:items-center
          "
        >
          <div>
            <p
              className="
                text-xs
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
                mt-1.5
                text-xl
                font-bold
                tracking-tight
                sm:text-2xl
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
              cursor-pointer
              items-center
              gap-2.5
              border-b-2
              border-[#276ea5]
              pb-1.5
              text-sm
              font-bold
              text-[#276ea5]
              transition-all
              duration-300
              hover:gap-4
              dark:border-[#60a5fa]
              dark:text-[#60a5fa]
            "
          >
            Explore all services
            <ArrowUpRight
              size={17}
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

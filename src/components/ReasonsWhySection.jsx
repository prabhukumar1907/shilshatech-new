import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Code2,
  Globe2,
  Clock,
  ShieldCheck,
  Tag,
  Headphones,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import askingImg from "../assets/images/flat-people-asking-questions_23-2148919346.jpg";

const ABOVE_FOLD = false;

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
};

const reasons = [
  {
    id: "01",
    icon: Award,
    title: "Expertise & Experience",
    description:
      "We partner with enterprises globally as their trusted IT ally, focusing on long-term growth and association.",
  },
  {
    id: "02",
    icon: Code2,
    title: "Expert Programmers",
    description:
      "Engineered strictly to global coding standards with clean, maintainable, and high-performance codebases.",
  },
  {
    id: "03",
    icon: Globe2,
    title: "Offshore IT Partners",
    description:
      "Seamlessly extending your internal capabilities with tech talent kept continuously in sync with modern stacks.",
  },
  {
    id: "04",
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Punctual product delivery is our promise. We keep pace with the digital market to maximize your ROI.",
  },
  {
    id: "05",
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous testing protocols ensuring reliable, airtight security, and enterprise-grade speed.",
  },
  {
    id: "06",
    icon: Tag,
    title: "Competitive Pricing",
    description:
      "Transparent and flexible engagement models delivering premium digital solutions without budget bloat.",
  },
  {
    id: "07",
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Comprehensive post-launch maintenance to keep your applications updated, secure, and fully optimized.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const ReasonsWhySection = () => {
  const featuredReason = reasons[0];
  const otherReasons = reasons.slice(1);

  return (
    <section
      id="reason-why"
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-4
        py-16
        font-sans
        text-slate-900
        transition-colors
        duration-500
        dark:bg-[#070d18]
        dark:text-white
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
      "
    >
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -top-32
          left-1/3
          h-125
          w-125
          rounded-full
          bg-[#276ea5]/10
          blur-[180px]
          dark:bg-[#276ea5]/15
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-125
          w-125
          rounded-full
          bg-[#60a5fa]/10
          blur-[180px]
          dark:bg-[#60a5fa]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(#276ea5_1px,transparent_1px),linear-gradient(90deg,#276ea5_1px,transparent_1px)]
          bg-size-[45px_45px]
          opacity-[0.025]
          dark:opacity-[0.05]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="
            mb-16
            grid
            grid-cols-1
            items-end
            gap-10
            lg:mb-20
            lg:grid-cols-12
            lg:gap-16
          "
        >
          {/* LEFT HEADER */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  h-0.5
                  bg-[#276ea5]
                  dark:bg-sky-400
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#276ea5]
                  dark:text-sky-400
                  sm:text-sm
                "
              >
                Why Choose Shilsha Technologies
              </span>
            </div>

            <h2
              className="
                text-4xl
                font-black
                leading-[1.02]
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-[4.25rem]
              "
            >
              More Than a
              <br />
              <span
                className="
                  bg-linear-to-r
                  from-[#276ea5]
                  via-[#1d4ed8]
                  to-[#60a5fa]
                  bg-clip-text
                  text-transparent
                "
              >
                Technology Partner
              </span>
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p
              className="
                text-base
                leading-relaxed
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              Shilsha Technologies is a premier web and mobile application
              engineering firm. We build high-performing Web Apps, iOS/Android
              solutions, and enterprise software designed to scale.
            </p>
          </motion.div>
        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-12
            lg:gap-8
          "
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative lg:col-span-5"
          >
            <div
              className="
                relative
                min-h-125
                h-full
                overflow-hidden
                rounded-4xl
                border
                border-slate-200
                bg-[#0b1528]
                shadow-xl
                shadow-slate-300/20
                dark:border-white/10
                dark:shadow-black/30
              "
            >
              {/* IMAGE */}

              <motion.img
                src={askingImg}
                alt="Engineering team collaboration"
                width={480}
                height={360}
                loading={ABOVE_FOLD ? "eager" : "lazy"}
                fetchPriority={ABOVE_FOLD ? "high" : "auto"}
                decoding="async"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  opacity-80
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* IMAGE OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-b
                  from-[#070d18]/10
                  via-[#070d18]/35
                  to-[#070d18]
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-40
                  bg-linear-to-b
                  from-[#070d18]/60
                  to-transparent
                "
              />

              {/* TOP BADGE */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.5,
                }}
                className="
                  absolute
                  right-6
                  top-6
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-3
                  py-2
                  backdrop-blur-md
                "
              >
                <Sparkles size={14} className="text-sky-300" />

                <span className="text-xs font-semibold text-white">
                  Our Difference
                </span>
              </motion.div>

              {/* FEATURED CONTENT */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-7
                  sm:p-9
                "
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 180,
                  }}
                  whileHover={{
                    scale: 1.06,
                    rotate: -4,
                  }}
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-md
                  "
                >
                  <featuredReason.icon size={26} className="text-sky-300" />
                </motion.div>

                <h3
                  className="
                    mb-4
                    text-2xl
                    font-bold
                    text-white
                    sm:text-3xl
                  "
                >
                  {featuredReason.title}
                </h3>

                <p
                  className="
                    max-w-lg
                    text-sm
                    leading-relaxed
                    text-slate-300
                    sm:text-base
                  "
                >
                  {featuredReason.description}
                </p>

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-sky-300
                  "
                >
                  <CheckCircle2 size={17} />
                  Trusted technology expertise
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-50px",
            }}
            className="
              lg:col-span-7
              grid
              grid-cols-1
              gap-x-8
              sm:grid-cols-2
            "
          >
            {otherReasons.map((item) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
                  }}
                  className="
                    group
                    relative
                    border-b
                    border-slate-200
                    py-6
                    dark:border-white/10
                  "
                >
                  {/* HOVER BACKGROUND */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scaleX: 0.8,
                    }}
                    whileHover={{
                      opacity: 1,
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      origin-left
                      rounded-2xl
                      bg-[#276ea5]/[0.035]
                      dark:bg-sky-400/[0.035]
                    "
                  />

                  {/* CONTENT */}

                  <div className="relative z-10">
                    {/* ICON + TITLE + ARROW */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >
                      {/* ICON + TITLE */}

                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-4
                        "
                      >
                        {/* ICON */}

                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: -5,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 350,
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
                            border-slate-200
                            bg-white
                            text-[#276ea5]
                            shadow-sm
                            transition-all
                            duration-300
                            group-hover:border-[#276ea5]/30
                            group-hover:bg-[#276ea5]/5
                            group-hover:shadow-md
                            dark:border-white/10
                            dark:bg-[#0b1528]
                            dark:text-sky-400
                            dark:group-hover:border-sky-400/30
                            dark:group-hover:bg-sky-400/5
                          "
                        >
                          <span
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              rounded-xl
                              bg-[#276ea5]/20
                              opacity-0
                              blur-lg
                              transition-opacity
                              duration-300
                              group-hover:opacity-70
                              dark:bg-sky-400/20
                            "
                          />

                          <IconComponent
                            size={20}
                            strokeWidth={1.8}
                            className="relative z-10"
                          />
                        </motion.div>

                        {/* TITLE */}

                        <motion.h3
                          whileHover={{
                            x: 2,
                          }}
                          className="
                            min-w-0
                            text-base
                            font-bold
                            tracking-tight
                            text-slate-900
                            transition-colors
                            duration-300
                            group-hover:text-[#276ea5]
                            dark:text-white
                            dark:group-hover:text-sky-400
                            sm:text-lg
                          "
                        >
                          {item.title}
                        </motion.h3>
                      </div>

                      {/* ARROW */}

                      <motion.div
                        animate={{
                          x: 0,
                          y: 0,
                          opacity: 0.3,
                        }}
                        whileHover={{
                          x: 4,
                          y: -4,
                          opacity: 1,
                        }}
                        className="
                          shrink-0
                          text-slate-300
                          transition-colors
                          duration-300
                          group-hover:text-[#276ea5]
                          dark:text-slate-700
                          dark:group-hover:text-sky-400
                        "
                      >
                        <ArrowUpRight size={18} strokeWidth={1.8} />
                      </motion.div>
                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-4
                        pl-15
                        text-sm
                        leading-6.5
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {item.description}
                    </p>

                    {/* ACCENT LINE */}

                    <motion.div
                      initial={{
                        width: 0,
                        opacity: 0,
                      }}
                      whileHover={{
                        width: 42,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-0.5
                        rounded-full
                        bg-linear-to-r
                        from-[#276ea5]
                        to-[#60a5fa]
                      "
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
            mt-14
            grid
            grid-cols-1
            gap-6
            border-t
            border-slate-200
            pt-8
            dark:border-white/10
            sm:grid-cols-3
          "
        >
          {[
            "Global Coding Standards",
            "Scalable Digital Solutions",
            "Long-Term Technology Partnership",
          ].map((text, index) => (
            <motion.div
              key={text}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.45,
              }}
              whileHover={{
                x: 4,
              }}
              className="
                flex
                items-center
                gap-3
              "
            >
              <CheckCircle2
                size={19}
                className="
                  shrink-0
                  text-[#276ea5]
                  dark:text-sky-400
                "
              />

              <span
                className="
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:text-slate-300
                "
              >
                {text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReasonsWhySection;

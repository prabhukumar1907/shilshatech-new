import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  CheckCircle2,
  MapPin,
  Award,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const theme = {
  primary: "#276ea5",
  secondary: "#1d4ed8",
  glow: "#60a5fa",
};

const stats = [
  {
    icon: Users,
    endValue: 106,
    suffix: "+",
    label: "Satisfied Clients",
    subtitle: "Global Trust",
  },
  {
    icon: CheckCircle2,
    endValue: 340,
    suffix: "+",
    label: "Projects Delivered",
    subtitle: "High Quality",
  },
  {
    icon: MapPin,
    endValue: 3,
    suffix: "",
    label: "Office Locations",
    subtitle: "Worldwide Reach",
  },
  {
    icon: Award,
    endValue: 75,
    suffix: "+",
    label: "Expert Team",
    subtitle: "Skilled Professionals",
  },
];

const AnimatedCounter = ({ end, duration = 1800, suffix = "" }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let frame;

    const easeOut = (t) => 1 - Math.pow(1 - t, 4);

    const update = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(easeOut(progress) * end));

      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const CountsSection = () => {
  return (
    <section
      id="counts"
      className="
        relative
        isolate
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
          inset-0
          opacity-[0.025]
          dark:opacity-[0.045]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              currentColor 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              currentColor 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          x: [0, 55, 0],
          y: [0, -35, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[30%]
          top-[10%]
          h-125
          w-125
          rounded-full
          bg-[#276ea5]/8
          blur-[150px]
          dark:bg-[#276ea5]/15
        "
      />

      <motion.div
        animate={{
          x: [0, -45, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-30s
          right-[5%]
          h-100
          w-100
          rounded-full
          bg-[#60a5fa]/8
          blur-[130px]
          dark:bg-[#60a5fa]/10
        "
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
          sm:py-14
          lg:px-12
          lg:py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-7
            lg:grid-cols-12
            lg:gap-12
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <div
              className="
                flex
                items-center
                gap-3
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#276ea5]
                dark:text-[#60a5fa]
              "
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="h-px bg-current"
              />

              <TrendingUp size={14} />

              <span>Our Impact</span>
            </div>

            <p
              className="
                mt-4
                max-w-xs
                text-sm
                leading-7
                text-slate-500
                dark:text-slate-400
              "
            >
              Numbers that reflect the trust, experience and relationships we've
              built with businesses worldwide.
            </p>
          </motion.div>

          {/* RIGHT */}

          <motion.div
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
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-9"
          >
            <h2
              className="
                max-w-5xl
                text-4xl
                font-black
                leading-[1.02]
                tracking-[-0.055em]
                sm:text-5xl
                lg:text-[68px]
              "
            >
              Experience that
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
                speaks for itself.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* HEADER DIVIDER */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10
            h-px
            origin-left
            bg-slate-200
            dark:bg-white/10
            lg:mt-14
          "
        />

        {/* STATS GRID */}

        <div
          className="
            mt-2
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  min-h-60
                  overflow-hidden
                  border-b
                  border-slate-200
                  py-7
                  pr-5
                  dark:border-white/10
                  sm:min-h-68
                  sm:pr-6
                  lg:min-h-76
                  lg:px-6

                  /* FIX: give the first box a little left padding */
                  lg:first:pl-4

                  lg:last:border-r-0
                  lg:last:pr-0
                  ${index !== stats.length - 1 ? "lg:border-r" : ""}
                  ${index % 2 === 0 ? "sm:border-r" : "sm:border-r-0"}
                  ${index === 2 || index === 3 ? "sm:border-b" : ""}
                  lg:border-b
                `}
              >
                <motion.div
                  initial={false}
                  animate={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-72
                    w-72
                    rounded-full
                    bg-[#276ea5]/10
                    blur-[80px]
                    dark:bg-[#60a5fa]/10
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-white/50
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      tracking-[0.25em]
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:border-[#276ea5]/30
                      group-hover:text-[#276ea5]
                      dark:border-white/10
                      dark:bg-white/2
                      dark:text-slate-600
                      dark:group-hover:border-[#60a5fa]/30
                      dark:group-hover:text-[#60a5fa]
                    "
                  >
                    0{index + 1}
                  </span>

                  <motion.div
                    whileHover={{
                      x: 5,
                      y: -5,
                      rotate: 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      text-slate-300
                      transition-all
                      duration-300
                      group-hover:border-[#276ea5]/40
                      group-hover:text-[#276ea5]
                      dark:border-white/10
                      dark:text-slate-700
                      dark:group-hover:border-[#60a5fa]/40
                      dark:group-hover:text-[#60a5fa]
                    "
                  >
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </motion.div>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    rotate: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.25 + index * 0.1,
                    duration: 0.55,
                    type: "spring",
                    stiffness: 180,
                  }}
                  whileHover={{
                    y: -6,
                    rotate: -8,
                    scale: 1.05,
                  }}
                  className="
                    relative
                    z-10
                    mt-7
                    w-fit
                  "
                >
                  <motion.div
                    animate={{
                      opacity: [0.15, 0.4, 0.15],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      bg-[#60a5fa]
                      blur-xl
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#276ea5]/20
                      bg-[#276ea5]/5
                      text-[#276ea5]
                      shadow-[0_8px_30px_-12px_rgba(39,110,165,0.5)]
                      transition-all
                      duration-500
                      group-hover:rounded-xl
                      group-hover:border-[#276ea5]
                      group-hover:bg-[#276ea5]
                      group-hover:text-white
                      group-hover:shadow-[0_10px_35px_-10px_rgba(39,110,165,0.7)]
                      dark:border-[#60a5fa]/20
                      dark:bg-[#60a5fa]/5
                      dark:text-[#60a5fa]
                      dark:group-hover:border-[#60a5fa]
                      dark:group-hover:bg-[#276ea5]
                    "
                  >
                    <Icon size={23} strokeWidth={1.6} />
                  </div>
                </motion.div>

                <div className="relative z-10 mt-6">
                  <motion.div
                    whileHover={{
                      x: 3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="
                      text-[58px]
                      font-black
                      leading-none
                      tracking-[-0.065em]
                      sm:text-[68px]
                      lg:text-[72px]
                    "
                  >
                    <span
                      className="
                        bg-linear-to-br
                        from-slate-950
                        via-[#276ea5]
                        to-[#60a5fa]
                        bg-clip-text
                        text-transparent
                        dark:from-white
                        dark:via-[#dbeafe]
                        dark:to-[#60a5fa]
                      "
                    >
                      <AnimatedCounter
                        end={stat.endValue}
                        suffix={stat.suffix}
                      />
                    </span>
                  </motion.div>

                  <div className="mt-4">
                    <h3
                      className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-800
                        transition-colors
                        duration-300
                        group-hover:text-[#276ea5]
                        dark:text-slate-200
                        dark:group-hover:text-[#60a5fa]
                      "
                    >
                      {stat.label}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-slate-400
                        dark:text-slate-500
                      "
                    >
                      {stat.subtitle}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "32px",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    duration: 0.5,
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
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                />

                <motion.div
                  initial={{
                    scaleY: 0,
                  }}
                  whileHover={{
                    scaleY: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    absolute
                    bottom-5
                    left-0
                    top-5
                    w-0.5
                    origin-center
                    rounded-full
                    bg-linear-to-b
                    from-transparent
                    via-[#276ea5]
                    to-[#60a5fa]
                    dark:via-[#60a5fa]
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-[#60a5fa]
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#276ea5]
                  dark:bg-[#60a5fa]
                "
              />
            </span>

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-slate-400
              "
            >
              Building what comes next
            </span>
          </div>

          <div
            className="
              hidden
              h-px
              flex-1
              bg-linear-to-r
              from-slate-200
              via-slate-200
              to-transparent
              sm:ml-6
              sm:block
              dark:from-white/10
              dark:via-white/10
            "
          />

          <span
            className="
              text-xs
              font-medium
              text-slate-400
              dark:text-slate-500
            "
          >
            Trusted by businesses worldwide
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CountsSection;

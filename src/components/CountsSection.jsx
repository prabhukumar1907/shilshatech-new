import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  CheckCircle2,
  MapPin,
  Award,
  ArrowUpRight,
  Globe2,
  Sparkles,
  MoveUpRight,
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
    color: "#60a5fa",
  },
  {
    icon: CheckCircle2,
    endValue: 340,
    suffix: "+",
    label: "Projects Delivered",
    subtitle: "High Quality",
    color: "#34d399",
  },
  {
    icon: MapPin,
    endValue: 3,
    suffix: "",
    label: "Office Locations",
    subtitle: "Worldwide Reach",
    color: "#a78bfa",
  },
  {
    icon: Award,
    endValue: 75,
    suffix: "+",
    label: "Expert Team",
    subtitle: "Skilled Professionals",
    color: "#fbbf24",
  },
];

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "UAE",
];

const AnimatedCounter = ({ end, duration = 1800, suffix = "" }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
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
    <span ref={ref} className="p-3">
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
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[25%]
          top-[5%]
          h-150
          w-150
          rounded-full
          bg-[#276ea5]/8
          blur-[150px]
          dark:bg-[#276ea5]/15
        "
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
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
          -right-40
          bottom-0
          h-125
          w-125
          rounded-full
          bg-[#60a5fa]/8
          blur-[140px]
          dark:bg-[#60a5fa]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-30
          top-[8%]
          hidden
          h-105
          w-105
          lg:block
        "
      >
        {/* Outer ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-[#276ea5]/10
            dark:border-[#60a5fa]/10
          "
        />

        {/* Middle ring */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-10
            rounded-full
            border
            border-dashed
            border-[#276ea5]/10
            dark:border-[#60a5fa]/10
          "
        />

        {/* Globe */}

        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-25
            flex
            items-center
            justify-center
            rounded-full
            border
            border-[#276ea5]/20
            bg-[#276ea5]/5
            shadow-[0_0_80px_rgba(39,110,165,0.12)]
            dark:border-[#60a5fa]/20
            dark:bg-[#60a5fa]/5
          "
        >
          <Globe2
            size={100}
            strokeWidth={0.6}
            className="text-[#276ea5]/30 dark:text-[#60a5fa]/30"
          />
        </motion.div>

        {/* Orbiting point */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <span
            className="
              absolute
              left-1/2
              top-0
              h-2.5
              w-2.5
              -translate-x-1/2
              rounded-full
              bg-[#60a5fa]
              shadow-[0_0_20px_#60a5fa]
            "
          />
        </motion.div>
      </div>

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
          lg:py-14
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-12
            lg:gap-16
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
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 40,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="h-px bg-current"
              />

              <TrendingIcon />

              <span>Our Impact</span>
            </div>

            <p
              className="
                mt-5
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

            {/* Countries */}

            <div className="mt-7">
              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-400
                "
              >
                <Globe2 size={13} />
                Serving worldwide
              </div>

              <div className="flex max-w-xs flex-wrap gap-2">
                {countries.map((country, index) => (
                  <motion.span
                    key={country}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.3 + index * 0.06,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-white/60
                      px-2.5
                      py-1
                      text-[10px]
                      font-medium
                      text-slate-500
                      transition-colors
                      hover:border-[#276ea5]/30
                      hover:text-[#276ea5]
                      dark:border-white/10
                      dark:bg-white/2.5
                      dark:text-slate-500
                      dark:hover:border-[#60a5fa]/30
                      dark:hover:text-[#60a5fa]
                    "
                  >
                    {country}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
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
              duration: 0.8,
            }}
            className="relative lg:col-span-9"
          >
            <div className="relative">
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

              {/* Decorative line */}
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 110,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="
                  mt-6
                  h-1
                  rounded-full
                  bg-linear-to-r
                  from-[#276ea5]
                  to-transparent
                "
              />
            </div>
          </motion.div>
        </div>

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

        <div
          className="
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
                  y: 40,
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
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-slate-200
                  py-8
                  sm:px-6
                  dark:border-white/10

                  ${index % 2 === 0 ? "sm:border-r" : "sm:border-r-0"}

                  lg:border-r
                  lg:border-b

                  ${index === stats.length - 1 ? "lg:border-r-0" : ""}
                `}
              >
                {/* Hover glow */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-56
                    w-56
                    rounded-full
                    blur-[70px]
                  "
                  style={{
                    background: `${stat.color}22`,
                  }}
                />

                {/* TOP */}
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
                      font-mono
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-slate-400
                      dark:text-slate-600
                    "
                  >
                    {stat.label === "Office Locations" ? "03" : `0${index + 1}`}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      x: 3,
                      y: -3,
                    }}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      text-slate-300
                      transition-all
                      group-hover:border-[#276ea5]/30
                      group-hover:text-[#276ea5]
                      dark:border-white/10
                      dark:text-slate-600
                      dark:group-hover:border-[#60a5fa]/30
                      dark:group-hover:text-[#60a5fa]
                    "
                  >
                    <ArrowUpRight size={15} />
                  </motion.div>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      bg-white/70
                      shadow-sm
                      dark:bg-white/3"
                    style={{
                      color: stat.color,
                      borderColor: `${stat.color}35`,
                    }}
                  >
                    <Icon size={21} strokeWidth={1.6} />
                  </motion.div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                      "
                    >
                      {stat.subtitle}
                    </p>

                    <h3
                      className="
                        mt-1
                        text-sm
                        font-bold
                        text-slate-700
                        dark:text-slate-300
                      "
                    >
                      {stat.label}
                    </h3>
                  </div>
                </div>

                {/* NUMBER */}

                <div
                  className="
                    relative
                    z-10
                    mt-7
                    overflow-visible
                    whitespace-nowrap
                  "
                >
                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 20,
                    }}
                    className="
                      inline-flex
                      items-baseline
                      text-[58px]
                      font-black
                      leading-[0.9]
                      tracking-[-0.065em]
                      sm:text-[64px]
                      lg:text-[68px]
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
                </div>

                {/* DESCRIPTION LINE */}

                <div className="relative z-10 mt-7 flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                    "
                    style={{
                      backgroundColor: stat.color,
                      boxShadow: `0 0 10px ${stat.color}`,
                    }}
                  />

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-slate-400
                    "
                  >
                    Growing every day
                  </span>
                </div>

                {/* ACTIVE BOTTOM LINE */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "35px",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.6 + index * 0.1,
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
              </motion.div>
            );
          })}
        </div>

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
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-4
            border-t
            border-slate-200
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            dark:border-white/10
          "
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
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

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Globe2 size={14} />

            <span>Connecting businesses across the globe</span>

            <MoveUpRight
              size={13}
              className="text-[#276ea5] dark:text-[#60a5fa]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrendingIcon = () => <Sparkles size={14} strokeWidth={1.8} />;

export default CountsSection;

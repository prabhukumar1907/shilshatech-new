import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";

const Careers = () => {
  const theme = {
    primary: "#286b94",
    secondary: "#173f67",
    accent: "#69a8ff",
    light: "#eaf4ff",
  };

  const jobs = [
    {
      title: "Senior React Developer",
      type: "Full Time",
      location: "Gurugram / Remote",
      experience: "3+ Years",
      department: "Engineering",
      description:
        "Build scalable, high-performance web applications using React, TypeScript, and modern frontend technologies.",
      tags: ["React", "TypeScript", "Next.js"],
    },
    {
      title: "Backend Developer",
      type: "Full Time",
      location: "Gurugram / Remote",
      experience: "2+ Years",
      department: "Engineering",
      description:
        "Design robust APIs and backend systems that power our next generation of digital products.",
      tags: ["Node.js", "MongoDB", "REST API"],
    },
    {
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Gurugram / Hybrid",
      experience: "2+ Years",
      department: "Design",
      description:
        "Create intuitive, beautiful, and user-focused experiences for web and mobile products.",
      tags: ["Figma", "UI/UX", "Design Systems"],
    },
    {
      title: "Full Stack Developer",
      type: "Full Time",
      location: "Gurugram / Remote",
      experience: "3+ Years",
      department: "Engineering",
      description:
        "Work across the frontend and backend to build reliable, scalable, and user-friendly digital products.",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Meaningful Work",
      text: "Build digital products that solve real business problems and create measurable impact.",
      icon: "spark",
    },
    {
      number: "02",
      title: "Keep Growing",
      text: "Learn continuously, take ownership and grow alongside experienced teammates.",
      icon: "growth",
    },
    {
      number: "03",
      title: "Flexible Culture",
      text: "Work in an environment built around trust, flexibility, collaboration and autonomy.",
      icon: "globe",
    },
    {
      number: "04",
      title: "Great People",
      text: "Collaborate with curious, ambitious and supportive people who enjoy building together.",
      icon: "people",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("careers-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
      },
    );

    revealRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (element) => {
    if (element && !revealRefs.current.includes(element)) {
      revealRefs.current.push(element);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = formData.position
      ? `Job Application - ${formData.position}`
      : "Job Application - Shilsha Technologies";

    const body = `
Hello Shilsha Technologies Team,

I would like to apply for an opportunity at Shilsha Technologies.

Candidate Details
-------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Position: ${formData.position || "General Application"}
Experience: ${formData.experience || "Not specified"}

Message
-------------------------
${formData.message || "No additional message provided."}

Resume
-------------------------
${
  formData.resume
    ? `Selected file: ${formData.resume.name}

Please attach this resume manually before sending this email.`
    : "No resume selected."
}

Regards,
${formData.name}
`;

    const mailto = `mailto:jobs@shilshatech.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailto;
  };

  const scrollToResume = (jobTitle = "") => {
    if (jobTitle) {
      setFormData((prev) => ({
        ...prev,
        position: jobTitle,
      }));
    }

    document.getElementById("resume")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const filteredJobs =
    selectedDepartment === "All"
      ? jobs
      : jobs.filter((job) => job.department === selectedDepartment);

  const departments = ["All", ...new Set(jobs.map((job) => job.department))];

  const Icon = ({ name, size = 20, strokeWidth = 1.8 }) => {
    const common = {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": true,
    };

    if (name === "arrow") {
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    }

    if (name === "spark") {
      return (
        <svg {...common}>
          <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" />
          <path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z" />
        </svg>
      );
    }

    if (name === "growth") {
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 4-5 3 3 5-7" />
          <path d="M15 6h4v4" />
        </svg>
      );
    }

    if (name === "globe") {
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
        </svg>
      );
    }

    if (name === "people") {
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c.5-3.2 2.5-5 6-5s5.5 1.8 6 5" />
          <path d="M16 5.5a3 3 0 0 1 0 5.8" />
          <path d="M18 15c1.9.5 3 2 3.5 5" />
        </svg>
      );
    }

    if (name === "map") {
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    }

    if (name === "clock") {
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    }

    if (name === "briefcase") {
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </svg>
      );
    }

    if (name === "mail") {
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    }

    if (name === "upload") {
      return (
        <svg {...common}>
          <path d="M12 16V4" />
          <path d="m7 9 5-5 5 5" />
          <path d="M5 20h14" />
        </svg>
      );
    }

    if (name === "check") {
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    }

    return null;
  };

  return (
    <>
      <style>{`
        @keyframes careerFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes careerPulse {
          0%, 100% {
            opacity: .35;
            transform: scale(1);
          }
          50% {
            opacity: .65;
            transform: scale(1.08);
          }
        }

        @keyframes careerGradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes careerShine {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(120%);
          }
        }

        .career-float {
          animation: careerFloat 6s ease-in-out infinite;
        }

        .career-pulse {
          animation: careerPulse 5s ease-in-out infinite;
        }

        .career-gradient {
          background-size: 200% 200%;
          animation: careerGradient 8s ease infinite;
        }

        .career-shine {
          position: relative;
          overflow: hidden;
        }

        .career-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 40%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.22),
            transparent
          );
          transform: translateX(-120%);
          pointer-events: none;
        }

        .career-shine:hover::after {
          animation: careerShine .8s ease;
        }

        .careers-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity .7s cubic-bezier(.22,1,.36,1),
            transform .7s cubic-bezier(.22,1,.36,1);
        }

        .careers-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .career-card {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .career-card:hover {
          transform: translateY(-5px);
        }

        .career-input {
          transition:
            border-color .2s ease,
            box-shadow .2s ease,
            background-color .2s ease;
        }

        .career-input:focus {
          outline: none;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }

          .careers-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <main
        className="
          min-h-screen overflow-hidden
          bg-[#f8fafc] text-slate-900
          dark:bg-[#050b13] dark:text-white
        "
      >
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="
              absolute left-[-15%] top-[-10%]
              h-125 w-125
              rounded-full blur-[120px]
            "
            style={{
              background: `${theme.primary}18`,
            }}
          />

          <div
            className="
              absolute right-[-15%] top-[20%]
              h-125 w-125
              rounded-full blur-[130px]
            "
            style={{
              background: `${theme.accent}12`,
            }}
          />

          <div
            className="
              absolute bottom-[-15%] left-[25%]
              h-112.5 w-112.5
              rounded-full blur-[130px]
            "
            style={{
              background: `${theme.secondary}10`,
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(#286b94 1px, transparent 1px),
                linear-gradient(90deg, #286b94 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div ref={addRevealRef} className="careers-reveal">
              {/* Eyebrow */}
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border
                  bg-white/80
                  px-4 py-2
                  text-xs font-bold
                  uppercase tracking-[0.15em]
                  shadow-sm
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-white/4
                "
                style={{
                  borderColor: `${theme.primary}25`,
                  color: theme.primary,
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: theme.accent,
                    boxShadow: `0 0 0 4px ${theme.accent}18`,
                  }}
                />
                We&apos;re building the future
              </div>

              {/* Heading */}
              <h1 className="mt-7 max-w-4xl text-[48px] font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[82px]">
                Do work that
                <span
                  className="
                    career-gradient
                    mt-2 block
                    bg-linear-to-r
                    bg-clip-text
                    text-transparent
                  "
                  style={{
                    backgroundImage: `linear-gradient(
                      90deg,
                      ${theme.primary},
                      ${theme.accent},
                      ${theme.secondary}
                    )`,
                  }}
                >
                  actually matters.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8">
                Join Shilsha Technologies and work alongside engineers,
                designers and problem-solvers who are creating thoughtful
                digital products for businesses around the world.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToResume()}
                  className="
                    career-shine
                    group
                    inline-flex items-center gap-3
                    rounded-xl
                    px-6 py-3.5
                    text-sm font-bold text-white
                    shadow-lg
                    transition
                    duration-300
                    hover:-translate-y-1
                  "
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.primary},
                      ${theme.secondary}
                    )`,
                    boxShadow: `0 14px 35px ${theme.primary}30`,
                  }}
                >
                  Explore open roles
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Icon name="arrow" size={17} />
                  </span>
                </button>

                <a
                  href="#culture"
                  className="
                    inline-flex items-center gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white/80
                    px-6 py-3.5
                    text-sm font-bold
                    text-slate-700
                    shadow-sm
                    backdrop-blur-xl
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-300
                    dark:border-white/10
                    dark:bg-white/4
                    dark:text-slate-200
                  "
                >
                  Discover our culture
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-slate-200/80 py-5 dark:border-white/10">
                {[
                  ["50+", "Team members"],
                  ["15+", "Countries served"],
                  ["100+", "Projects delivered"],
                ].map(([number, label], index) => (
                  <div
                    key={label}
                    ref={addRevealRef}
                    className={`careers-reveal ${
                      index > 0
                        ? "border-l border-slate-200 dark:border-white/10"
                        : ""
                    } px-4 first:pl-0`}
                  >
                    <p className="text-2xl font-black tracking-tight sm:text-3xl">
                      {number}
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-xs">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={addRevealRef}
              className="careers-reveal careers-delay-2 relative"
            >
              <div
                className="
                  career-pulse
                  absolute inset-10
                  rounded-[40px]
                  blur-[70px]
                "
                style={{
                  background: `linear-gradient(
                    135deg,
                    ${theme.primary},
                    ${theme.accent}
                  )`,
                  opacity: 0.14,
                }}
              />

              <div className="career-float relative">
                <div
                  className="
                    rounded-[30px]
                    border
                    border-slate-200/80
                    bg-white/75
                    p-2
                    shadow-[0_30px_90px_rgba(15,23,42,.12)]
                    backdrop-blur-2xl
                    dark:border-white/10
                    dark:bg-[#0b1420]/80
                    dark:shadow-[0_30px_90px_rgba(0,0,0,.3)]
                  "
                >
                  <div
                    className="
                      relative overflow-hidden
                      rounded-3xl
                      border
                      border-slate-100
                      bg-[#f8fafc]
                      p-6
                      dark:border-white/10
                      dark:bg-[#07101a]
                      sm:p-8
                    "
                  >
                    {/* top glow */}
                    <div
                      className="absolute -right-20 -top-25 h-72 w-72 rounded-full blur-[90px]"
                      style={{
                        background: theme.accent,
                        opacity: 0.12,
                      }}
                    />

                    <div className="relative">
                      {/* Browser bar */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                        </div>

                        <div className="hidden rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[9px] text-slate-400 dark:border-white/10 dark:bg-white/3 sm:block">
                          shilshatech.com/careers
                        </div>
                      </div>

                      {/* Visual header */}
                      <div className="mt-10">
                        <p
                          className="text-[10px] font-bold uppercase tracking-[0.25em]"
                          style={{ color: theme.primary }}
                        >
                          Your workspace
                        </p>

                        <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                          Create. Build. Impact.
                        </h3>

                        <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500">
                          A place where ambitious people turn ideas into
                          meaningful products.
                        </p>
                      </div>

                      {/* Mini dashboard */}
                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <div
                          className="
                            rounded-2xl
                            border
                            p-5
                          "
                          style={{
                            borderColor: `${theme.primary}18`,
                            background: `${theme.primary}07`,
                          }}
                        >
                          <div
                            className="
                              flex h-10 w-10
                              items-center justify-center
                              rounded-xl
                            "
                            style={{
                              background: `${theme.primary}15`,
                              color: theme.primary,
                            }}
                          >
                            <Icon name="spark" size={20} />
                          </div>

                          <p className="mt-8 text-xs font-bold">Innovation</p>

                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                            <div
                              className="h-full w-[88%] rounded-full"
                              style={{
                                background: `linear-gradient(
                                  90deg,
                                  ${theme.primary},
                                  ${theme.accent}
                                )`,
                              }}
                            />
                          </div>

                          <p className="mt-2 text-[10px] text-slate-400">
                            Always improving
                          </p>
                        </div>

                        <div
                          className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5
                            dark:border-white/10
                            dark:bg-white/2.5
                          "
                        >
                          <div className="flex items-end gap-1">
                            {[35, 48, 42, 66, 54, 82, 70].map(
                              (height, index) => (
                                <div
                                  key={index}
                                  className="flex-1 rounded-full"
                                  style={{
                                    height: `${height}px`,
                                    background:
                                      index === 5
                                        ? theme.accent
                                        : `${theme.primary}28`,
                                  }}
                                />
                              ),
                            )}
                          </div>

                          <p className="mt-5 text-xs font-bold">
                            Growth mindset
                          </p>

                          <p className="mt-2 text-[10px] text-slate-400">
                            Learn every day
                          </p>
                        </div>
                      </div>

                      {/* Bottom row */}
                      <div
                        className="
                          mt-3 flex items-center
                          gap-4 rounded-2xl
                          border border-slate-200
                          bg-white
                          p-4
                          dark:border-white/10
                          dark:bg-white/2.5
                        "
                      >
                        <div
                          className="
                            flex h-10 w-10 shrink-0
                            items-center justify-center
                            rounded-xl
                          "
                          style={{
                            background: `${theme.primary}12`,
                            color: theme.primary,
                          }}
                        >
                          <Icon name="people" size={19} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold">
                              People first
                            </span>

                            <span
                              className="text-[10px] font-bold"
                              style={{ color: theme.primary }}
                            >
                              100%
                            </span>
                          </div>

                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div
                              className="h-full w-full rounded-full"
                              style={{
                                background: theme.primary,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <div
                  className="
                    absolute -bottom-6 -left-3
                    rounded-2xl
                    border
                    border-slate-200/80
                    bg-white/95
                    px-4 py-3
                    shadow-xl
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-[#0b1420]/95
                    sm:-left-7
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        background: `${theme.primary}12`,
                        color: theme.primary,
                      }}
                    >
                      <Icon name="spark" size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-bold">People first</p>
                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Build · Learn · Grow
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div
                  className="
                    absolute -right-3 top-8
                    hidden rounded-2xl
                    border
                    border-slate-200/80
                    bg-white/95
                    px-4 py-3
                    shadow-xl
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-[#0b1420]/95
                    sm:block
                  "
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>

                    <span className="text-[10px] font-bold">
                      We&apos;re hiring
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="culture"
          className="
            relative z-10
            border-y
            border-slate-200/80
            bg-white/65
            py-24
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-white/1.5
          "
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              ref={addRevealRef}
              className="careers-reveal grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"
            >
              <div>
                <p
                  className="text-xs font-black uppercase tracking-[0.25em]"
                  style={{ color: theme.primary }}
                >
                  Why Shilsha
                </p>

                <h2 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                  A career should feel like progress.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 lg:pb-1">
                We want people to do the best work of their careers here. That
                means giving you ownership, room to experiment and a team that
                genuinely wants you to succeed.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  ref={addRevealRef}
                  className="careers-reveal career-card group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/2.5"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-xl
                        transition
                        duration-300
                        group-hover:scale-105
                      "
                      style={{
                        background: `${theme.primary}10`,
                        color: theme.primary,
                      }}
                    >
                      <Icon name={benefit.icon} size={20} />
                    </div>

                    <span className="text-xs font-bold text-slate-300 dark:text-slate-700">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold">{benefit.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {benefit.text}
                  </p>

                  <div
                    className="
                      mt-6 h-px w-0
                      transition-all duration-500
                      group-hover:w-full
                    "
                    style={{
                      background: `linear-gradient(
                        90deg,
                        ${theme.primary},
                        transparent
                      )`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="openings"
          className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div ref={addRevealRef} className="careers-reveal">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <p
                    className="text-xs font-black uppercase tracking-[0.25em]"
                    style={{ color: theme.primary }}
                  >
                    Open positions
                  </p>

                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-bold"
                    style={{
                      background: `${theme.primary}10`,
                      color: theme.primary,
                    }}
                  >
                    {jobs.length} roles
                  </span>
                </div>

                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                  Find your next role.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                Explore opportunities across engineering, design and product.
                Find a role where your skills can make a difference.
              </p>
            </div>

            {/* Filters */}
            <div className="mt-9 flex flex-wrap gap-2">
              {departments.map((department) => {
                const active = selectedDepartment === department;

                return (
                  <button
                    key={department}
                    type="button"
                    onClick={() => setSelectedDepartment(department)}
                    className={`
                      rounded-full
                      border
                      px-4 py-2
                      text-xs font-bold
                      transition duration-200
                      ${
                        active
                          ? "text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 dark:border-white/10 dark:bg-white/3 dark:text-slate-400"
                      }
                    `}
                    style={
                      active
                        ? {
                            borderColor: theme.primary,
                            background: theme.primary,
                          }
                        : {}
                    }
                  >
                    {department}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {filteredJobs.map((job, index) => (
              <div
                key={job.title}
                ref={addRevealRef}
                className="careers-reveal career-card group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/2.5"
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {/* Hover accent */}
                <div
                  className="
                    absolute left-0 top-0
                    h-full w-1
                    origin-top
                    scale-y-0
                    transition-transform
                    duration-300
                    group-hover:scale-y-100
                  "
                  style={{
                    background: `linear-gradient(
                      180deg,
                      ${theme.primary},
                      ${theme.accent}
                    )`,
                  }}
                />

                <div className="flex flex-col gap-6 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-[#286b94] dark:group-hover:text-[#69a8ff]">
                        {job.title}
                      </h3>

                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wide"
                        style={{
                          background: `${theme.primary}10`,
                          color: theme.primary,
                        }}
                      >
                        {job.type}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Icon name="map" size={14} />
                        {job.location}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Icon name="clock" size={14} />
                        {job.experience}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Icon name="briefcase" size={14} />
                        {job.department}
                      </div>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {job.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-lg
                            border
                            border-slate-200
                            bg-slate-50
                            px-2.5 py-1.5
                            text-[10px] font-bold
                            text-slate-500
                            dark:border-white/10
                            dark:bg-white/2.5
                            dark:text-slate-400
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToResume(job.title)}
                    className="
                      group/apply
                      inline-flex
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      px-5 py-3
                      text-sm font-bold
                      transition
                      duration-300
                      hover:-translate-y-0.5
                    "
                    style={{
                      borderColor: `${theme.primary}35`,
                      color: theme.primary,
                      background: `${theme.primary}07`,
                    }}
                  >
                    Apply now
                    <span className="transition-transform duration-300 group-hover/apply:translate-x-1">
                      <Icon name="arrow" size={16} />
                    </span>
                  </button>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center dark:border-white/10">
                <p className="font-bold">No roles found.</p>
                <p className="mt-2 text-sm text-slate-500">
                  Try selecting another department.
                </p>
              </div>
            )}
          </div>
        </section>

        <section
          id="resume"
          className="relative z-10 scroll-mt-20 px-6 pb-24 lg:px-8"
        >
          <div
            ref={addRevealRef}
            className="careers-reveal mx-auto max-w-7xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,.08)] dark:border-white/10 dark:bg-[#09121d] dark:shadow-none"
          >
            <div className="grid lg:grid-cols-[.78fr_1.22fr]">
              {/* Form intro */}
              <div
                className="relative overflow-hidden p-8 sm:p-10 lg:p-14"
                style={{
                  background: `linear-gradient(
                    145deg,
                    ${theme.primary}12,
                    ${theme.accent}07,
                    transparent
                  )`,
                }}
              >
                <div
                  className="absolute -right-30 -top-25 h-80 w-80 rounded-full blur-[100px]"
                  style={{
                    background: theme.accent,
                    opacity: 0.12,
                  }}
                />

                <div className="relative">
                  <div
                    className="
                      flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                    "
                    style={{
                      background: `${theme.primary}12`,
                      color: theme.primary,
                    }}
                  >
                    <Icon name="mail" size={21} />
                  </div>

                  <p
                    className="mt-8 text-xs font-black uppercase tracking-[0.25em]"
                    style={{ color: theme.primary }}
                  >
                    Don&apos;t see your role?
                  </p>

                  <h2 className="mt-4 max-w-md text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                    Tell us what you can bring to the team.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Great people don&apos;t always fit into a job description.
                    Send us your resume and tell us how you could make an
                    impact.
                  </p>

                  <div className="mt-9 space-y-3">
                    {[
                      "Modern technologies",
                      "Ownership and autonomy",
                      "Learning-focused environment",
                      "Supportive team culture",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span
                          className="
                            flex h-7 w-7
                            shrink-0
                            items-center justify-center
                            rounded-lg
                          "
                          style={{
                            background: `${theme.primary}10`,
                            color: theme.primary,
                          }}
                        >
                          <Icon name="check" size={14} />
                        </span>

                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="
                      mt-10
                      rounded-2xl
                      border
                      p-5
                    "
                    style={{
                      borderColor: `${theme.primary}20`,
                      background: `${theme.primary}06`,
                    }}
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                      Prefer email?
                    </p>

                    <a
                      href="mailto:jobs@shilshatech.com"
                      className="mt-2 block text-base font-bold hover:underline"
                      style={{ color: theme.primary }}
                    >
                      jobs@shilshatech.com
                    </a>

                    <p className="mt-1 text-xs text-slate-500">
                      We&apos;d love to hear from you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-8 sm:p-10 lg:p-14">
                <div className="mb-8">
                  <p
                    className="text-xs font-black uppercase tracking-[0.2em]"
                    style={{ color: theme.primary }}
                  >
                    Application
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-tight">
                    Submit your application
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    A few details are all we need to get started.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold"
                    >
                      Full name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="
                        career-input
                        w-full rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4 py-3.5
                        text-sm
                        placeholder:text-slate-400
                        focus:border-[#286b94]
                        focus:ring-4
                        focus:ring-[#286b94]/10
                        dark:border-white/10
                        dark:bg-white/[0.035]
                        dark:text-white
                        dark:placeholder:text-slate-600
                      "
                    />
                  </div>

                  {/* Email + phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="
                          career-input
                          w-full rounded-xl
                          border border-slate-200
                          bg-slate-50
                          px-4 py-3.5
                          text-sm
                          placeholder:text-slate-400
                          focus:border-[#286b94]
                          focus:ring-4
                          focus:ring-[#286b94]/10
                          dark:border-white/10
                          dark:bg-white/[0.035]
                          dark:text-white
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-bold"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="
                          career-input
                          w-full rounded-xl
                          border border-slate-200
                          bg-slate-50
                          px-4 py-3.5
                          text-sm
                          placeholder:text-slate-400
                          focus:border-[#286b94]
                          focus:ring-4
                          focus:ring-[#286b94]/10
                          dark:border-white/10
                          dark:bg-white/[0.035]
                          dark:text-white
                        "
                      />
                    </div>
                  </div>

                  {/* Position + experience */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="position"
                        className="mb-2 block text-xs font-bold"
                      >
                        Position
                      </label>

                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="
                          career-input
                          w-full rounded-xl
                          border border-slate-200
                          bg-slate-50
                          px-4 py-3.5
                          text-sm
                          focus:border-[#286b94]
                          focus:ring-4
                          focus:ring-[#286b94]/10
                          dark:border-white/10
                          dark:bg-[#101b28]
                          dark:text-white
                        "
                      >
                        <option value="">Select position</option>

                        {jobs.map((job) => (
                          <option key={job.title} value={job.title}>
                            {job.title}
                          </option>
                        ))}

                        <option value="General Application">
                          General Application
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="experience"
                        className="mb-2 block text-xs font-bold"
                      >
                        Experience
                      </label>

                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="
                          career-input
                          w-full rounded-xl
                          border border-slate-200
                          bg-slate-50
                          px-4 py-3.5
                          text-sm
                          focus:border-[#286b94]
                          focus:ring-4
                          focus:ring-[#286b94]/10
                          dark:border-white/10
                          dark:bg-[#101b28]
                          dark:text-white
                        "
                      >
                        <option value="">Select experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="1-2 Years">1–2 Years</option>
                        <option value="3-5 Years">3–5 Years</option>
                        <option value="5-8 Years">5–8 Years</option>
                        <option value="8+ Years">8+ Years</option>
                      </select>
                    </div>
                  </div>

                  {/* Resume */}
                  <div>
                    <label
                      htmlFor="resumeFile"
                      className="mb-2 block text-xs font-bold"
                    >
                      Resume / CV
                    </label>

                    <label
                      htmlFor="resumeFile"
                      className="
                        group
                        flex cursor-pointer
                        items-center gap-4
                        rounded-2xl
                        border-2 border-dashed
                        border-slate-200
                        bg-slate-50
                        p-5
                        transition
                        duration-300
                        hover:border-[#286b94]
                        hover:bg-[#286b94]/2.5
                        dark:border-white/10
                        dark:bg-white/2
                        dark:hover:border-[#69a8ff]
                      "
                    >
                      <div
                        className="
                          flex h-12 w-12
                          shrink-0
                          items-center justify-center
                          rounded-xl
                          transition
                          duration-300
                          group-hover:-translate-y-0.5
                        "
                        style={{
                          background: `${theme.primary}10`,
                          color: theme.primary,
                        }}
                      >
                        <Icon name="upload" size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold">
                          {formData.resume
                            ? formData.resume.name
                            : "Choose your resume"}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          PDF, DOC or DOCX
                        </p>
                      </div>

                      <span
                        className="hidden rounded-lg px-3 py-2 text-xs font-bold sm:block"
                        style={{
                          background: `${theme.primary}10`,
                          color: theme.primary,
                        }}
                      >
                        Browse
                      </span>

                      <input
                        id="resumeFile"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about yourself, your experience, or what you'd love to work on..."
                      className="
                        career-input
                        w-full resize-none
                        rounded-xl
                        border border-slate-200
                        bg-slate-50
                        px-4 py-3.5
                        text-sm
                        placeholder:text-slate-400
                        focus:border-[#286b94]
                        focus:ring-4
                        focus:ring-[#286b94]/10
                        dark:border-white/10
                        dark:bg-white/[0.035]
                        dark:text-white
                      "
                    />
                  </div>

                  {/* Notice */}
                  <div
                    className="rounded-xl border p-4"
                    style={{
                      borderColor: `${theme.primary}18`,
                      background: `${theme.primary}05`,
                    }}
                  >
                    <div className="flex gap-3">
                      <div
                        className="mt-0.5 shrink-0"
                        style={{ color: theme.primary }}
                      >
                        <Icon name="mail" size={17} />
                      </div>

                      <div>
                        <p className="text-xs font-bold">
                          Your email client will open
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-slate-500 dark:text-slate-400">
                          Clicking submit prepares an email containing your
                          application details. Please attach your selected
                          resume manually before sending.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Success */}
                  {submitted && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                      <div className="flex gap-3">
                        <div className="text-emerald-600 dark:text-emerald-400">
                          <Icon name="check" size={17} />
                        </div>

                        <p className="text-xs leading-5 text-emerald-700 dark:text-emerald-400">
                          Your application email is being prepared. Attach your
                          resume and click <strong>Send</strong>.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      career-shine
                      group
                      flex w-full
                      items-center justify-center
                      gap-3
                      rounded-xl
                      px-6 py-4
                      text-sm font-bold text-white
                      shadow-lg
                      transition
                      duration-300
                      hover:-translate-y-0.5
                    "
                    style={{
                      background: `linear-gradient(
                        135deg,
                        ${theme.primary},
                        ${theme.secondary}
                      )`,
                      boxShadow: `0 14px 35px ${theme.primary}28`,
                    }}
                  >
                    Submit application
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <Icon name="arrow" size={17} />
                    </span>
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Or email your resume directly to{" "}
                    <a
                      href="mailto:jobs@shilshatech.com"
                      className="font-bold hover:underline"
                      style={{ color: theme.primary }}
                    >
                      jobs@shilshatech.com
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;

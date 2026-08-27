import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";

const Careers = () => {
  const theme = {
    primary: "#286b94",
    secondary: "#1e3a8a",
    glow: "#6ea1ff",
  };

  const jobs = [
    {
      title: "Senior React Developer",
      type: "Full Time",
      location: "Gurugram / Remote",
      experience: "3+ Years",
      description:
        "Build scalable, high-performance web applications using React, TypeScript, and modern frontend technologies.",
      tags: ["React", "TypeScript", "Next.js"],
    },
    {
      title: "Backend Developer",
      type: "Full Time",
      location: "Gurugram / Remote",
      experience: "2+ Years",
      description:
        "Design robust APIs and backend systems that power our next generation of digital products.",
      tags: ["Node.js", "MongoDB", "REST API"],
    },
    {
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Gurugram / Hybrid",
      experience: "2+ Years",
      description:
        "Create intuitive, beautiful, and user-focused experiences for web and mobile products.",
      tags: ["Figma", "UI/UX", "Design Systems"],
    },
    {
      title: "Full Stack Developer",
      type: "Full Time",
      location: "Gurugram / Remote",
      experience: "3+ Years",
      description:
        "Work across the frontend and backend to build reliable, scalable, and user-friendly digital products.",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
  ];

  const benefits = [
    {
      icon: "🚀",
      title: "Grow With Us",
      text: "Work on challenging projects and accelerate your technical and professional growth.",
    },
    {
      icon: "💡",
      title: "Innovative Culture",
      text: "Bring your ideas to life in an environment that values creativity and experimentation.",
    },
    {
      icon: "🌎",
      title: "Flexible Work",
      text: "Enjoy flexible working options designed to help you do your best work.",
    },
    {
      icon: "🤝",
      title: "Great People",
      text: "Collaborate with talented, passionate people who love solving meaningful problems.",
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

  /*
   * ---------------------------------------------------------
   * Scroll reveal animation
   * ---------------------------------------------------------
   */
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
        threshold: 0.12,
      },
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  /*
   * ---------------------------------------------------------
   * Form
   * ---------------------------------------------------------
   */
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

  return (
    <>
      <style>{`
        @keyframes careers-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes careers-float-slow {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(20px, -20px, 0) scale(1.05);
          }
        }

        @keyframes careers-pulse-glow {
          0%, 100% {
            opacity: .25;
            transform: scale(1);
          }
          50% {
            opacity: .45;
            transform: scale(1.08);
          }
        }

        @keyframes careers-shimmer {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(120%);
          }
        }

        @keyframes careers-gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes careers-spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes careers-grid {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 40px 40px;
          }
        }

        .careers-float {
          animation: careers-float 5s ease-in-out infinite;
        }

        .careers-float-slow {
          animation: careers-float-slow 8s ease-in-out infinite;
        }

        .careers-pulse-glow {
          animation: careers-pulse-glow 4s ease-in-out infinite;
        }

        .careers-gradient {
          background-size: 200% 200%;
          animation: careers-gradient 8s ease infinite;
        }

        .careers-spin {
          animation: careers-spin-slow 18s linear infinite;
        }

        .careers-grid {
          animation: careers-grid 15s linear infinite;
        }

        .careers-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity .8s cubic-bezier(.22,1,.36,1),
            transform .8s cubic-bezier(.22,1,.36,1);
        }

        .careers-reveal.careers-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .careers-delay-1 {
          transition-delay: .08s;
        }

        .careers-delay-2 {
          transition-delay: .16s;
        }

        .careers-delay-3 {
          transition-delay: .24s;
        }

        .careers-delay-4 {
          transition-delay: .32s;
        }

        .careers-delay-5 {
          transition-delay: .40s;
        }

        .careers-card {
          transition:
            transform .4s cubic-bezier(.22,1,.36,1),
            box-shadow .4s ease,
            border-color .4s ease,
            background-color .4s ease;
        }

        .careers-card:hover {
          transform: translateY(-8px);
        }

        .careers-shine {
          position: relative;
          overflow: hidden;
        }

        .careers-shine::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 30%;
          left: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.15),
            transparent
          );
          transform: translateX(-120%);
          pointer-events: none;
        }

        .careers-shine:hover::after {
          animation: careers-shimmer .9s ease;
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
          relative min-h-screen overflow-hidden
          bg-slate-50 text-slate-900
          transition-colors duration-500
          dark:bg-[#050d17] dark:text-white
        "
        style={{
          "--primary": theme.primary,
          "--secondary": theme.secondary,
          "--glow": theme.glow,
        }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Grid */}
          <div
            className="
              careers-grid absolute inset-0 opacity-[0.025]
              dark:opacity-[0.045]
            "
            style={{
              backgroundImage: `
                linear-gradient(${theme.primary} 1px, transparent 1px),
                linear-gradient(90deg, ${theme.primary} 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Top glow */}
          <div
            className="
              careers-pulse-glow absolute
              -left-40 -top-40
              h-125 w-125
              rounded-full blur-[130px]
            "
            style={{
              background: theme.primary,
            }}
          />

          {/* Right glow */}
          <div
            className="
              careers-float-slow absolute
              -right-40 top-[30%]
              h-112.5 w-112.5
              rounded-full blur-[140px]
            "
            style={{
              background: theme.secondary,
              opacity: 0.15,
            }}
          />

          {/* Bottom glow */}
          <div
            className="
              careers-pulse-glow absolute
              -bottom-40 left-[35%]
              h-100 w-100
              rounded-full blur-[140px]
            "
            style={{
              background: theme.glow,
              opacity: 0.12,
            }}
          />

          {/* Decorative rings */}
          <div
            className="
              careers-spin absolute
              right-[8%] top-[12%]
              hidden h-44 w-44
              rounded-full border
              border-blue-500/10
              lg:block
            "
          />

          <div
            className="
              careers-spin absolute
              left-[4%] top-[55%]
              hidden h-24 w-24
              rounded-full border
              border-blue-500/10
              lg:block
            "
            style={{
              animationDirection: "reverse",
            }}
          />
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            {/* Content */}
            <div ref={addRevealRef} className="careers-reveal">
              <div
                className="
                  mb-7 inline-flex items-center gap-2.5
                  rounded-full border
                  px-4 py-2
                  text-sm font-medium
                  backdrop-blur-xl
                  bg-blue-50/80 text-[#286b94]
                  dark:bg-blue-500/8
                  dark:text-blue-300
                "
                style={{
                  borderColor: `${theme.glow}40`,
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute inline-flex
                      h-full w-full
                      animate-ping rounded-full
                      opacity-60
                    "
                    style={{ background: theme.glow }}
                  />
                  <span
                    className="relative inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ background: theme.glow }}
                  />
                </span>
                We&apos;re hiring talented people
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[80px]">
                Build the
                <span
                  className="
                    careers-gradient
                    mt-2 block
                    bg-linear-to-r
                    bg-clip-text
                    text-transparent
                  "
                  style={{
                    backgroundImage: `linear-gradient(
                      90deg,
                      ${theme.primary},
                      ${theme.glow},
                      ${theme.secondary}
                    )`,
                  }}
                >
                  future with us.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 sm:text-xl">
                Join Shilsha Technologies and work with passionate engineers,
                designers, and innovators building meaningful digital
                experiences for businesses around the world.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => scrollToResume()}
                  className="
                    careers-shine group relative
                    rounded-xl px-7 py-4
                    font-semibold text-white
                    shadow-xl
                    transition duration-300
                    hover:-translate-y-1
                    active:translate-y-0
                  "
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${theme.primary},
                      ${theme.secondary}
                    )`,
                    boxShadow: `0 15px 40px ${theme.primary}45`,
                  }}
                >
                  <span className="relative z-10">
                    Explore Opportunities
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </button>

                <a
                  href="#culture"
                  className="
                    group rounded-xl
                    border border-slate-200
                    bg-white/70 px-7 py-4
                    font-semibold
                    text-slate-700
                    backdrop-blur-xl
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-slate-300
                    hover:bg-white
                    dark:border-white/10
                    dark:bg-white/4
                    dark:text-slate-200
                    dark:hover:border-white/20
                    dark:hover:bg-white/8
                  "
                >
                  Our Culture
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-y-1">
                    ↓
                  </span>
                </a>
              </div>

              {/* Stats */}
              <div className="mt-14 grid max-w-xl grid-cols-3 gap-5">
                {[
                  ["50+", "Team Members"],
                  ["15+", "Countries Served"],
                  ["100+", "Projects Delivered"],
                ].map(([number, label], index) => (
                  <div
                    key={label}
                    className={`careers-reveal careers-delay-${index + 1}`}
                    ref={addRevealRef}
                  >
                    <p className="text-3xl font-black tracking-tight sm:text-4xl">
                      {number}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div
              ref={addRevealRef}
              className="careers-reveal careers-delay-2 relative"
            >
              <div
                className="
                  careers-pulse-glow
                  absolute inset-8
                  rounded-[40px]
                  blur-3xl
                "
                style={{
                  background: `linear-gradient(
                    135deg,
                    ${theme.primary},
                    ${theme.glow}
                  )`,
                  opacity: 0.18,
                }}
              />

              {/* Main card */}
              <div className="careers-float relative">
                <div
                  className="
                    rounded-4xl
                    border border-slate-200/80
                    bg-white/75
                    p-3
                    shadow-2xl
                    backdrop-blur-2xl
                    dark:border-white/10
                    dark:bg-[#0b1726]/80
                  "
                >
                  <div
                    className="
                      relative overflow-hidden
                      rounded-[25px]
                      border border-slate-100
                      bg-slate-50
                      p-7
                      dark:border-white/10
                      dark:bg-[#07111d]
                    "
                  >
                    {/* Gradient */}
                    <div
                      className="
                        absolute -right-20 -top-20
                        h-52 w-52
                        rounded-full
                        blur-3xl
                      "
                      style={{
                        background: theme.primary,
                        opacity: 0.15,
                      }}
                    />

                    {/* Browser */}
                    <div className="relative">
                      <div className="mb-8 flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-400" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400" />
                          <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        <div className="rounded-full border border-slate-200 px-3 py-1 text-[10px] text-slate-400 dark:border-white/10">
                          shilshatech.com/careers
                        </div>
                      </div>

                      <div className="mb-8">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                          Your workspace
                        </p>

                        <h3 className="mt-2 text-2xl font-bold">
                          Create. Build. Impact.
                        </h3>
                      </div>

                      {/* Dashboard */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div
                          className="
                            rounded-2xl border
                            border-slate-200
                            p-5
                            dark:border-white/10
                          "
                          style={{
                            background: `${theme.primary}08`,
                          }}
                        >
                          <div
                            className="
                              flex h-11 w-11
                              items-center justify-center
                              rounded-xl
                              text-lg
                            "
                            style={{
                              background: `${theme.primary}18`,
                              color: theme.primary,
                            }}
                          >
                            ✦
                          </div>

                          <div className="mt-8 h-2 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />

                          <div className="mt-3 h-2 w-28 rounded-full bg-slate-100 dark:bg-slate-800" />
                        </div>

                        <div
                          className="
                            rounded-2xl border
                            border-slate-200
                            bg-white
                            p-5
                            dark:border-white/10
                            dark:bg-white/3
                          "
                        >
                          <div className="flex items-end gap-1.5">
                            {[35, 55, 45, 75, 60, 90, 72].map(
                              (height, index) => (
                                <div
                                  key={index}
                                  className="flex-1 rounded-full"
                                  style={{
                                    height: `${height}px`,
                                    background:
                                      index === 5
                                        ? theme.glow
                                        : `${theme.primary}35`,
                                  }}
                                />
                              ),
                            )}
                          </div>

                          <div className="mt-6 h-2 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />

                          <div className="mt-3 h-2 w-28 rounded-full bg-slate-100 dark:bg-slate-800" />
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/3">
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-11 w-11 items-center justify-center rounded-xl"
                            style={{
                              background: `${theme.primary}15`,
                            }}
                          >
                            🚀
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold">
                                Innovation
                              </span>
                              <span
                                className="text-xs font-bold"
                                style={{ color: theme.primary }}
                              >
                                94%
                              </span>
                            </div>

                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: "94%",
                                  background: `linear-gradient(
                                    90deg,
                                    ${theme.primary},
                                    ${theme.glow}
                                  )`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <div
                  className="
                    absolute -bottom-7 -left-5
                    rounded-2xl
                    border border-slate-200
                    bg-white/95
                    p-4
                    shadow-2xl
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-[#0b1726]/95
                    sm:-left-8
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        background: `${theme.primary}18`,
                      }}
                    >
                      💙
                    </div>

                    <div>
                      <p className="text-sm font-bold">People First</p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Build. Learn. Grow.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating top badge */}
                <div
                  className="
                    absolute -right-4 top-10
                    hidden rounded-2xl
                    border border-slate-200
                    bg-white/95
                    px-4 py-3
                    shadow-xl
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-[#0b1726]/95
                    sm:block
                  "
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: "#22c55e" }}
                    />
                    <span className="text-xs font-semibold">
                      Innovation mode
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
            border-y border-slate-200/80
            bg-white/50 py-24
            backdrop-blur-xl
            dark:border-white/6
            dark:bg-white/1.5
          "
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              ref={addRevealRef}
              className="careers-reveal mx-auto max-w-2xl text-center"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.25em]"
                style={{ color: theme.primary }}
              >
                Why join us
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                More than just a job.
              </h2>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                We believe great products come from great people. That&apos;s
                why we create an environment where curiosity, ownership, and
                creativity can thrive.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  ref={addRevealRef}
                  className={`careers-reveal careers-delay-${
                    (index % 4) + 1
                  } careers-card group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#286b94]/30 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#6ea1ff]/30 dark:hover:bg-white/6`}
                >
                  <div
                    className="
                      mb-6 flex h-14 w-14
                      items-center justify-center
                      rounded-2xl text-2xl
                      transition duration-300
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                    style={{
                      background: `${theme.primary}12`,
                    }}
                  >
                    {benefit.icon}
                  </div>

                  <h3 className="text-lg font-bold">{benefit.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {benefit.text}
                  </p>

                  <div
                    className="
                      mt-6 h-1 w-0
                      rounded-full
                      transition-all duration-500
                      group-hover:w-12
                    "
                    style={{
                      background: `linear-gradient(
                        90deg,
                        ${theme.primary},
                        ${theme.glow}
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
          <div
            ref={addRevealRef}
            className="careers-reveal flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p
                className="text-sm font-bold uppercase tracking-[0.25em]"
                style={{ color: theme.primary }}
              >
                Opportunities
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Find your next role
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              Explore our current openings and find the opportunity that matches
              your skills, ambition, and experience.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {jobs.map((job, index) => (
              <div
                key={job.title}
                ref={addRevealRef}
                className={`careers-reveal careers-delay-${
                  (index % 4) + 1
                } careers-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#286b94]/30 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#6ea1ff]/25 dark:hover:bg-white/5.5 md:p-7`}
              >
                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -right-20 -top-20
                    h-48 w-48
                    rounded-full
                    opacity-0 blur-3xl
                    transition duration-500
                    group-hover:opacity-20
                  "
                  style={{
                    background: theme.glow,
                  }}
                />

                <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold transition-colors group-hover:text-[#286b94] dark:group-hover:text-[#6ea1ff]">
                        {job.title}
                      </h3>

                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold"
                        style={{
                          background: `${theme.primary}12`,
                          color: theme.primary,
                        }}
                      >
                        {job.type}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                      <span>📍 {job.location}</span>
                      <span>◷ {job.experience}</span>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {job.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-lg border
                            border-slate-200
                            bg-slate-50
                            px-3 py-1.5
                            text-xs font-medium
                            text-slate-500
                            transition
                            group-hover:border-slate-300
                            dark:border-white/6
                            dark:bg-slate-900/70
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
                      careers-shine
                      group/btn relative
                      flex shrink-0
                      items-center justify-center
                      gap-2 rounded-xl
                      border px-5 py-3
                      text-sm font-bold
                      transition duration-300
                      hover:-translate-y-1
                    "
                    style={{
                      borderColor: `${theme.primary}45`,
                      color: theme.primary,
                      background: `${theme.primary}08`,
                    }}
                  >
                    Apply Now
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="resume"
          className="
            relative z-10
            mx-auto max-w-7xl
            scroll-mt-20
            px-6 pb-24 lg:px-8
          "
        >
          <div
            ref={addRevealRef}
            className="
              careers-reveal
              overflow-hidden rounded-4xl
              border border-slate-200
              bg-white
              shadow-2xl
              dark:border-white/10
              dark:bg-[#0a1523]
              dark:shadow-none
            "
          >
            <div className="grid lg:grid-cols-[.85fr_1.15fr]">
              {/* Left */}
              <div
                className="relative overflow-hidden p-8 sm:p-12 lg:p-14"
                style={{
                  background: `linear-gradient(
                    145deg,
                    ${theme.primary}12,
                    ${theme.secondary}08,
                    transparent
                  )`,
                }}
              >
                <div
                  className="
                    careers-pulse-glow
                    absolute -right-20 -top-20
                    h-72 w-72
                    rounded-full
                    blur-[100px]
                  "
                  style={{
                    background: theme.glow,
                    opacity: 0.18,
                  }}
                />

                <div className="relative">
                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl text-2xl
                    "
                    style={{
                      background: `${theme.primary}18`,
                    }}
                  >
                    📄
                  </div>

                  <p
                    className="mt-8 text-sm font-bold uppercase tracking-[0.25em]"
                    style={{ color: theme.primary }}
                  >
                    Join our team
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                    Don&apos;t see your perfect role?
                  </h2>

                  <p className="mt-5 max-w-lg leading-7 text-slate-600 dark:text-slate-400">
                    We&apos;re always looking for talented people. Send us your
                    resume and tell us how you can make an impact at Shilsha
                    Technologies.
                  </p>

                  <div className="mt-9 space-y-4">
                    {[
                      "Work with modern technologies",
                      "Learn and grow with talented people",
                      "Build products that matter",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div
                          className="
                            flex h-9 w-9 shrink-0
                            items-center justify-center
                            rounded-xl
                            text-sm font-bold
                          "
                          style={{
                            background: `${theme.primary}15`,
                            color: theme.primary,
                          }}
                        >
                          ✓
                        </div>

                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="
                      mt-10 rounded-2xl
                      border p-5
                      transition duration-300
                      hover:-translate-y-1
                    "
                    style={{
                      borderColor: `${theme.primary}25`,
                      background: `${theme.primary}08`,
                    }}
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Send your resume directly
                    </p>

                    <a
                      href="mailto:jobs@shilshatech.com"
                      className="mt-2 block text-lg font-bold transition hover:underline"
                      style={{ color: theme.primary }}
                    >
                      jobs@shilshatech.com
                    </a>

                    <p className="mt-2 text-xs text-slate-500">
                      We&apos;d love to hear from you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-8 sm:p-12 lg:p-14">
                <div className="mb-8">
                  <p
                    className="text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ color: theme.primary }}
                  >
                    Application
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    Submit your resume
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Tell us about yourself and your experience.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Full Name <span className="text-red-500">*</span>
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
                        w-full rounded-xl
                        border border-slate-200
                        bg-slate-50
                        px-4 py-3.5
                        text-sm
                        outline-none
                        transition duration-200
                        placeholder:text-slate-400
                        focus:border-[#286b94]
                        focus:ring-4
                        focus:ring-[#286b94]/10
                        dark:border-white/10
                        dark:bg-white/[0.035]
                        dark:placeholder:text-slate-600
                      "
                    />
                  </div>

                  {/* Email / Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold"
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
                          w-full rounded-xl
                          border border-slate-200
                          bg-slate-50
                          px-4 py-3.5
                          text-sm outline-none
                          transition duration-200
                          placeholder:text-slate-400
                          focus:border-[#286b94]
                          focus:ring-4
                          focus:ring-[#286b94]/10
                          dark:border-white/10
                          dark:bg-white/[0.035]
                          dark:placeholder:text-slate-600
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold"
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
                          w-full rounded-xl
                          border border-slate-200
                          bg-slate-50
                          px-4 py-3.5
                          text-sm outline-none
                          transition duration-200
                          placeholder:text-slate-400
                          focus:border-[#286b94]
                          focus:ring-4
                          focus:ring-[#286b94]/10
                          dark:border-white/10
                          dark:bg-white/[0.035]
                          dark:placeholder:text-slate-600
                        "
                      />
                    </div>
                  </div>

                  {/* Position */}
                  <div>
                    <label
                      htmlFor="position"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Position Interested In
                    </label>

                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="
                        w-full rounded-xl
                        border border-slate-200
                        bg-slate-50
                        px-4 py-3.5
                        text-sm outline-none
                        transition
                        focus:border-[#286b94]
                        focus:ring-4
                        focus:ring-[#286b94]/10
                        dark:border-white/10
                        dark:bg-[#101d2c]
                      "
                    >
                      <option value="">Select a position</option>

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

                  {/* Experience */}
                  <div>
                    <label
                      htmlFor="experience"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Experience
                    </label>

                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="
                        w-full rounded-xl
                        border border-slate-200
                        bg-slate-50
                        px-4 py-3.5
                        text-sm outline-none
                        transition
                        focus:border-[#286b94]
                        focus:ring-4
                        focus:ring-[#286b94]/10
                        dark:border-white/10
                        dark:bg-[#101d2c]
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

                  {/* Resume */}
                  <div>
                    <label
                      htmlFor="resumeFile"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Resume / CV
                    </label>

                    <label
                      htmlFor="resumeFile"
                      className="
                        group flex cursor-pointer
                        flex-col items-center
                        justify-center
                        rounded-xl
                        border-2 border-dashed
                        border-slate-200
                        bg-slate-50
                        px-6 py-8
                        text-center
                        transition duration-300
                        hover:border-[#286b94]
                        hover:bg-blue-50/50
                        dark:border-white/10
                        dark:bg-white/2.5
                        dark:hover:border-[#6ea1ff]
                        dark:hover:bg-blue-500/5
                      "
                    >
                      <div
                        className="
                          mb-3 flex h-12 w-12
                          items-center justify-center
                          rounded-xl
                          text-xl
                          transition duration-300
                          group-hover:-translate-y-1
                          group-hover:scale-110
                        "
                        style={{
                          background: `${theme.primary}15`,
                          color: theme.primary,
                        }}
                      >
                        ↑
                      </div>

                      <p className="text-sm font-semibold">
                        {formData.resume
                          ? formData.resume.name
                          : "Choose your resume"}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        PDF, DOC or DOCX recommended
                      </p>

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
                      className="mb-2 block text-sm font-semibold"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about yourself..."
                      className="
                        w-full resize-none rounded-xl
                        border border-slate-200
                        bg-slate-50
                        px-4 py-3.5
                        text-sm outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#286b94]
                        focus:ring-4
                        focus:ring-[#286b94]/10
                        dark:border-white/10
                        dark:bg-white/[0.035]
                        dark:placeholder:text-slate-600
                      "
                    />
                  </div>

                  {/* Email notice */}
                  <div
                    className="rounded-xl border p-4"
                    style={{
                      borderColor: `${theme.primary}25`,
                      background: `${theme.primary}08`,
                    }}
                  >
                    <div className="flex gap-3">
                      <div className="text-lg">📧</div>

                      <div>
                        <p className="text-sm font-semibold">
                          Application email
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                          Clicking submit will open your email client with your
                          application details. Please attach your resume before
                          sending.
                        </p>

                        <a
                          href="mailto:jobs@shilshatech.com"
                          className="mt-1 inline-block text-xs font-bold hover:underline"
                          style={{ color: theme.primary }}
                        >
                          jobs@shilshatech.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Success */}
                  {submitted && (
                    <div
                      className="
                        rounded-xl
                        border border-green-200
                        bg-green-50
                        p-4
                        text-sm text-green-700
                        dark:border-green-500/20
                        dark:bg-green-500/10
                        dark:text-green-400
                      "
                    >
                      <div className="flex gap-3">
                        <span>✓</span>

                        <span>
                          Your application email is being prepared. Attach your
                          resume and click <strong>Send</strong>.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      careers-shine
                      group relative flex w-full
                      items-center justify-center
                      gap-2 rounded-xl
                      px-6 py-4
                      font-bold text-white
                      shadow-xl
                      transition duration-300
                      hover:-translate-y-1
                      active:translate-y-0
                    "
                    style={{
                      background: `linear-gradient(
                        135deg,
                        ${theme.primary},
                        ${theme.secondary}
                      )`,
                      boxShadow: `0 15px 35px ${theme.primary}35`,
                    }}
                  >
                    <span className="relative z-10">
                      Submit Application
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Or send your resume directly to{" "}
                    <a
                      href="mailto:jobs@shilshatech.com"
                      className="font-semibold hover:underline"
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

        <section className="relative z-10 px-6 pb-24 lg:px-8">
          <div
            ref={addRevealRef}
            className="
              careers-reveal
              relative mx-auto max-w-7xl
              overflow-hidden rounded-4xl
              border border-slate-200
              px-6 py-20 text-center
              shadow-2xl
              dark:border-white/10
              dark:shadow-none
              sm:px-12
            "
            style={{
              background: `linear-gradient(
                135deg,
                ${theme.primary}12,
                ${theme.secondary}10
              )`,
            }}
          >
            <div
              className="
                careers-pulse-glow
                absolute left-1/2 top-0
                h-48 w-80
                -translate-x-1/2
                rounded-full
                blur-[100px]
              "
              style={{
                background: theme.glow,
                opacity: 0.15,
              }}
            />

            <div className="relative">
              <p
                className="text-sm font-bold uppercase tracking-[0.25em]"
                style={{ color: theme.primary }}
              >
                Your next chapter
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Ready to create something extraordinary?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
                Bring your curiosity, creativity, and ambition. Let&apos;s build
                the future of technology together.
              </p>

              <button
                type="button"
                onClick={() => scrollToResume()}
                className="
                  careers-shine
                  group relative mt-9
                  rounded-xl
                  px-7 py-4
                  font-bold text-white
                  shadow-xl
                  transition duration-300
                  hover:-translate-y-1
                "
                style={{
                  background: `linear-gradient(
                    135deg,
                    ${theme.primary},
                    ${theme.secondary}
                  )`,
                  boxShadow: `0 15px 40px ${theme.primary}35`,
                }}
              >
                <span className="relative z-10">
                  Submit Your Resume
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;

import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  UserCheck,
  Mail,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Footer from "../components/Footer";

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
  darkCanvas: "#060b13",
};

const sections = [
  ["introduction", "Introduction"],
  ["information", "Information We Collect"],
  ["usage", "How We Use Information"],
  ["sharing", "Information Sharing"],
  ["security", "Data Security"],
  ["cookies", "Cookies"],
  ["third-party", "Third-Party Services"],
  ["retention", "Data Retention"],
  ["rights", "Your Privacy Rights"],
  ["children", "Children's Privacy"],
  ["changes", "Policy Changes"],
  ["contact", "Contact Us"],
];

const PrivacyPolicy = () => {
  const lastUpdated = "August 18, 2026";

  return (
    <>
      <main
        className="
        min-h-screen overflow-hidden
        bg-[#f3f7fb] text-slate-800
        dark:bg-[#060b13] dark:text-slate-200
      "
      >
        <section
          className="
          relative isolate overflow-hidden
          border-b border-slate-200/80
          dark:border-white/6
        "
        >
          {/* Main background */}
          <div
            className="
            absolute inset-0 -z-20
            bg-[#f3f7fb]
            dark:bg-[#060b13]
          "
          />

          {/* Soft top gradient */}
          <div
            className="
            absolute inset-x-0 top-0 -z-10 h-130
            bg-linear-to-b
            from-white
            via-[#f3f7fb]
            to-transparent
            dark:from-[#0a1624]
            dark:via-[#060b13]
            dark:to-transparent
          "
          />

          {/* Brand glow */}
          <div
            className="
            absolute -right-40 -top-48 -z-10
            h-130 w-130
            rounded-full
            bg-[#276ea5]/8
            blur-[110px]
            dark:bg-[#276ea5]/12
          "
          />

          <div
            className="
            absolute -bottom-56 -left-40 -z-10
            h-115 w-115
            rounded-full
            bg-blue-500/5
            blur-[100px]
            dark:bg-[#60a5fa]/5
          "
          />

          {/* Very subtle grid */}
          <div
            className="
            absolute inset-0 -z-10
            opacity-[0.025]
            dark:opacity-[0.035]
          "
            style={{
              backgroundImage: `
              linear-gradient(#276ea5 1px, transparent 1px),
              linear-gradient(90deg, #276ea5 1px, transparent 1px)
            `,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-2 text-sm">
              <span className="font-medium text-slate-400 dark:text-slate-600">
                Shilsha Technologies
              </span>

              <ChevronRight
                size={14}
                className="text-slate-500 dark:text-slate-700"
              />

              <span className="font-semibold text-[#276ea5] dark:text-[#60a5fa]">
                Privacy Policy
              </span>
            </div>

            <div className="grid items-end gap-12 lg:grid-cols-[1fr_320px]">
              {/* Hero content */}
              <div className="max-w-4xl">
                {/* Label */}
                <div className="mb-7 inline-flex items-center gap-3">
                  <div
                    className="
                    relative flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    bg-[#276ea5]
                    text-white
                    shadow-lg shadow-[#276ea5]/20
                    dark:bg-[#1d4ed8]
                  "
                  >
                    <ShieldCheck size={24} strokeWidth={1.8} />

                    <span
                      className="
                      absolute -right-1.5 -top-1.5
                      flex h-5 w-5 items-center justify-center
                      rounded-full
                      border-2 border-[#f3f7fb]
                      bg-[#60a5fa]
                      text-white
                      dark:border-[#060b13]
                    "
                    >
                      <Sparkles size={9} />
                    </span>
                  </div>

                  <div>
                    <p
                      className="
                      text-[11px] font-bold uppercase
                      tracking-[0.2em]
                      text-[#276ea5]
                      dark:text-[#60a5fa]
                    "
                    >
                      Privacy & Security
                    </p>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                      Your privacy is important to us
                    </p>
                  </div>
                </div>

                {/* Heading */}
                <h1
                  className="
                  max-w-4xl
                  text-4xl font-black tracking-[-0.045em]
                  text-slate-950
                  sm:text-5xl
                  lg:text-7xl
                  dark:text-white
                "
                >
                  Privacy{" "}
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
                    Policy
                  </span>
                </h1>

                <p
                  className="
                  mt-7 max-w-2xl
                  text-base leading-8
                  text-slate-600
                  sm:text-lg
                  dark:text-slate-400
                "
                >
                  Learn how Shilsha collects, uses, protects, and manages your
                  information when you visit our website or use our services.
                </p>

                {/* Meta */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <div
                    className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-slate-200
                    bg-white
                    px-4 py-2.5
                    text-sm font-medium
                    text-slate-600
                    shadow-sm
                    dark:border-white/8
                    dark:bg-white/4
                    dark:text-slate-400
                  "
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Last updated: {lastUpdated}
                  </div>

                  <div
                    className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-[#276ea5]/15
                    bg-[#276ea5]/5
                    px-4 py-2.5
                    text-sm font-semibold
                    text-[#276ea5]
                    dark:border-[#60a5fa]/15
                    dark:bg-[#60a5fa]/5
                    dark:text-[#60a5fa]
                  "
                  >
                    <ShieldCheck size={15} />
                    12 sections
                  </div>
                </div>
              </div>

              {/* Hero side card */}
              <div
                className="
                hidden lg:block
                rounded-3xl
                border border-slate-200
                bg-white/80
                p-6
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                backdrop-blur-xl
                dark:border-white/[0.07]
                dark:bg-white/2.5
                dark:shadow-none
              "
              >
                <div
                  className="
                  mb-5 flex h-11 w-11 items-center justify-center
                  rounded-2xl
                  bg-[#276ea5]/10
                  text-[#276ea5]
                  dark:bg-[#60a5fa]/10
                  dark:text-[#60a5fa]
                "
                >
                  <Lock size={20} />
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Privacy first
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-500">
                  We believe your information should be handled responsibly,
                  securely, and transparently.
                </p>

                <div className="mt-5 h-px bg-slate-200 dark:bg-white/6" />

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={14} />
                  Privacy information
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Navigation */}
        <div
          className="
          sticky top-0 z-30
          border-b border-slate-200
          bg-[#f3f7fb]/90
          px-4 py-3
          backdrop-blur-xl
          lg:hidden
          dark:border-white/6
          dark:bg-[#060b13]/90
        "
        >
          <div className="mx-auto max-w-7xl">
            <select
              onChange={(e) => {
                const element = document.getElementById(e.target.value);

                element?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              defaultValue=""
              className="
              w-full appearance-none
              rounded-xl
              border border-slate-200
              bg-white
              px-4 py-3
              text-sm font-semibold
              text-slate-700
              outline-none
              focus:border-[#276ea5]
              dark:border-white/8
              dark:bg-white/4
              dark:text-slate-300
            "
            >
              <option value="" disabled>
                Jump to a section...
              </option>

              {sections.map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[270px_minmax(0,860px)]">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="mb-4 px-2">
                  <p
                    className="
                    text-[10px] font-bold uppercase
                    tracking-[0.22em]
                    text-slate-400
                    dark:text-slate-600
                  "
                  >
                    On this page
                  </p>
                </div>

                <nav
                  className="
                  rounded-3xl
                  border border-slate-200
                  bg-white
                  p-2
                  shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                  dark:border-white/6
                  dark:bg-white/2.5
                  dark:shadow-none
                "
                >
                  {sections.map(([id, label], index) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="
                      group flex items-center gap-3
                      rounded-xl
                      px-3 py-2.5
                      text-[13px]
                      text-slate-500
                      transition-all
                      hover:bg-[#276ea5]/5
                      hover:text-[#276ea5]
                      dark:text-slate-500
                      dark:hover:bg-[#60a5fa]/5
                      dark:hover:text-[#60a5fa]
                    "
                    >
                      <span
                        className="
                        flex h-7 w-7 shrink-0 items-center justify-center
                        rounded-lg
                        bg-slate-100
                        text-[10px] font-bold
                        text-slate-400
                        transition-all
                        group-hover:bg-[#276ea5]/10
                        group-hover:text-[#276ea5]
                        dark:bg-white/4
                        dark:text-slate-600
                        dark:group-hover:bg-[#60a5fa]/10
                        dark:group-hover:text-[#60a5fa]
                      "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="leading-5">{label}</span>
                    </a>
                  ))}
                </nav>

                {/* Sidebar card */}
                <div
                  className="
                  mt-5 overflow-hidden
                  rounded-3xl
                  border border-[#276ea5]/10
                  bg-white
                  p-5
                  shadow-[0_12px_40px_rgba(15,23,42,0.04)]
                  dark:border-[#60a5fa]/10
                  dark:bg-white/2.5
                  dark:shadow-none
                "
                >
                  <div
                    className="
                    mb-4 flex h-10 w-10 items-center justify-center
                    rounded-xl
                    bg-[#276ea5]/10
                    text-[#276ea5]
                    dark:bg-[#60a5fa]/10
                    dark:text-[#60a5fa]
                  "
                  >
                    <Lock size={17} />
                  </div>

                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Your privacy matters
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Have questions about how we handle your information?
                  </p>

                  <Link
                    to="/contact-us"
                    className="
                    mt-4 inline-flex items-center gap-1
                    text-xs font-bold
                    text-[#276ea5]
                    transition-all
                    hover:gap-2
                    dark:text-[#60a5fa]
                  "
                  >
                    Contact us
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </aside>

            <article className="min-w-0">
              {/* Important notice */}
              <div
                className="
                relative mb-10 overflow-hidden
                rounded-3xl
                border border-slate-200
                bg-white
                p-6
                shadow-[0_12px_40px_rgba(15,23,42,0.04)]
                sm:p-7
                dark:border-white/6
                dark:bg-white/2.5
                dark:shadow-none
              "
              >
                <div
                  className="
                  absolute left-0 top-0 h-full w-1
                  bg-linear-to-b
                  from-[#276ea5]
                  to-[#60a5fa]
                "
                />

                <div className="flex gap-4 pl-1">
                  <div
                    className="
                    mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-xl
                    bg-[#276ea5]/10
                    text-[#276ea5]
                    dark:bg-[#60a5fa]/10
                    dark:text-[#60a5fa]
                  "
                  >
                    <ShieldCheck size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Your privacy, in simple terms
                    </p>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      We collect information needed to operate our business,
                      respond to you, deliver services, improve our website, and
                      meet legal obligations. We do not sell or rent your
                      personal information.
                    </p>
                  </div>
                </div>
              </div>

              {/* =====================================================
                01
            ===================================================== */}
              <PolicySection
                id="introduction"
                number="01"
                icon={<ShieldCheck />}
                title="Introduction"
              >
                <p>
                  Shilsha Technologies ("Shilsha", "we", "our", or "us")
                  respects your privacy and is committed to protecting your
                  personal information. This Privacy Policy describes how we
                  collect, process, use, and safeguard information obtained
                  through our website, applications, and services.
                </p>

                <p>
                  By accessing or using our website and services, you
                  acknowledge that you have read and understood this Privacy
                  Policy.
                </p>
              </PolicySection>

              {/* =====================================================
                02
            ===================================================== */}
              <PolicySection
                id="information"
                number="02"
                icon={<Database />}
                title="Information We Collect"
              >
                <p>
                  Depending on how you interact with us, we may collect the
                  following categories of information:
                </p>

                <BulletList
                  items={[
                    "Name, email address, phone number, company name, and other contact details.",
                    "Information you provide when requesting a quote, consultation, demo, or other service.",
                    "Project requirements, business information, and communications you send to us.",
                    "Website usage information, browser type, device information, IP address, and approximate location.",
                    "Technical information such as operating system, referring pages, and interaction data.",
                  ]}
                />
              </PolicySection>

              {/* =====================================================
                03
            ===================================================== */}
              <PolicySection
                id="usage"
                number="03"
                icon={<UserCheck />}
                title="How We Use Your Information"
              >
                <p>
                  We may use collected information for legitimate business and
                  operational purposes, including:
                </p>

                <BulletList
                  items={[
                    "Responding to inquiries and providing requested information.",
                    "Preparing proposals, estimates, and service agreements.",
                    "Delivering, maintaining, and improving our products and services.",
                    "Communicating with you regarding projects, support, updates, and service-related matters.",
                    "Understanding website usage and improving website performance and user experience.",
                    "Preventing fraud, abuse, unauthorized access, and security incidents.",
                    "Complying with applicable legal and regulatory obligations.",
                  ]}
                />
              </PolicySection>

              {/* =====================================================
                04
            ===================================================== */}
              <PolicySection
                id="sharing"
                number="04"
                icon={<Lock />}
                title="Information Sharing"
              >
                <p>
                  We do not sell or rent your personal information. We may share
                  information when reasonably necessary to operate our business
                  and provide services.
                </p>

                <BulletList
                  items={[
                    "Service providers and technology partners who help us operate our website or deliver services.",
                    "Professional advisers, auditors, or legal representatives where appropriate.",
                    "Government authorities or other parties when required by law or valid legal process.",
                    "Business entities involved in a merger, acquisition, restructuring, or similar transaction, subject to applicable law.",
                  ]}
                />
              </PolicySection>

              {/* =====================================================
                05
            ===================================================== */}
              <PolicySection
                id="security"
                number="05"
                icon={<ShieldCheck />}
                title="Data Security"
              >
                <p>
                  We use reasonable administrative, technical, and
                  organizational safeguards designed to protect personal
                  information against unauthorized access, alteration,
                  disclosure, or destruction.
                </p>

                <p>
                  However, no method of transmission or electronic storage is
                  completely secure. Therefore, we cannot guarantee absolute
                  security of information transmitted to or stored by us.
                </p>
              </PolicySection>

              {/* =====================================================
                06
            ===================================================== */}
              <PolicySection
                id="cookies"
                number="06"
                icon={<Cookie />}
                title="Cookies and Similar Technologies"
              >
                <p>
                  Our website may use cookies and similar technologies to
                  remember preferences, understand website traffic, analyze
                  performance, and improve the user experience.
                </p>

                <p>
                  You can generally control cookies through your browser
                  settings. Disabling certain cookies may affect the
                  functionality of parts of our website.
                </p>
              </PolicySection>

              {/* =====================================================
                07
            ===================================================== */}
              <PolicySection
                id="third-party"
                number="07"
                icon={<ArrowUpRight />}
                title="Third-Party Services and Links"
              >
                <p>
                  Our website may contain links to third-party websites,
                  platforms, or services. These third parties may have their own
                  privacy policies and practices.
                </p>

                <p>
                  We are not responsible for the privacy practices, content, or
                  security of third-party websites. We recommend reviewing their
                  privacy policies before providing personal information.
                </p>
              </PolicySection>

              {/* =====================================================
                08
            ===================================================== */}
              <PolicySection
                id="retention"
                number="08"
                icon={<Database />}
                title="Data Retention"
              >
                <p>
                  We retain personal information only for as long as reasonably
                  necessary for the purposes described in this Privacy Policy,
                  including providing services, maintaining business records,
                  resolving disputes, enforcing agreements, and complying with
                  legal obligations.
                </p>
              </PolicySection>

              {/* =====================================================
                09
            ===================================================== */}
              <PolicySection
                id="rights"
                number="09"
                icon={<UserCheck />}
                title="Your Privacy Rights"
              >
                <p>
                  Depending on your location and applicable law, you may have
                  rights regarding your personal information, including the
                  right to:
                </p>

                <BulletList
                  items={[
                    "Request access to personal information we hold about you.",
                    "Request correction of inaccurate or incomplete information.",
                    "Request deletion of information where legally applicable.",
                    "Object to or request restriction of certain processing activities.",
                    "Withdraw consent where processing is based on consent.",
                    "Request information about how your personal information is processed.",
                  ]}
                />

                <p>
                  To exercise an applicable privacy right, please contact us
                  using the details provided in the Contact Us section.
                </p>
              </PolicySection>

              {/* =====================================================
                10
            ===================================================== */}
              <PolicySection
                id="children"
                number="10"
                icon={<ShieldCheck />}
                title="Children's Privacy"
              >
                <p>
                  Our services are not intended for children who are not legally
                  permitted to use such services. We do not knowingly collect
                  personal information from children for purposes that are
                  prohibited by applicable law.
                </p>
              </PolicySection>

              <PolicySection
                id="changes"
                number="11"
                icon={<ArrowUpRight />}
                title="Changes to This Privacy Policy"
              >
                <p>
                  We may update this Privacy Policy periodically to reflect
                  changes to our practices, technology, legal requirements, or
                  services.
                </p>

                <p>
                  When changes are made, we will update the "Last updated" date
                  shown at the beginning of this page. We encourage you to
                  review this page periodically.
                </p>
              </PolicySection>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const PolicySection = ({ id, number, icon, title, children }) => {
  return (
    <section
      id={id}
      className="
        group scroll-mt-28
        border-b border-slate-200/80
        py-10
        first:pt-2
        last:border-0
        dark:border-white/6
      "
    >
      <div
        className="
          rounded-3xl
          border border-transparent
          p-2
          transition-all duration-300
          hover:border-slate-200
          hover:bg-white
          hover:shadow-[0_15px_45px_rgba(15,23,42,0.035)]
          dark:hover:border-white/5
          dark:hover:bg-white/1.5
          dark:hover:shadow-none
          sm:p-4
        "
      >
        {/* Header */}
        <div className="mb-6 flex items-start gap-4">
          {/* Number */}
          <div
            className="
              hidden pt-2
              text-[#276ea5]
              text-[11px] font-bold
              tracking-[0.15em]
              sm:block
              dark:text-slate-700
            "
          >
            {number}
          </div>

          {/* Icon */}
          <div
            className="
              relative flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-2xl
              bg-[#276ea5]/8
              text-[#276ea5]
              ring-1 ring-[#276ea5]/10
              transition-all duration-300
              group-hover:scale-105
              group-hover:bg-[#276ea5]/12
              group-hover:shadow-lg
              group-hover:shadow-[#276ea5]/10
              dark:bg-[#60a5fa]/8
              dark:text-[#60a5fa]
              dark:ring-[#60a5fa]/10
              dark:group-hover:bg-[#60a5fa]/10
            "
          >
            {React.cloneElement(icon, {
              size: 20,
              strokeWidth: 1.8,
            })}
          </div>

          <div className="min-w-0">
            <p
              className="
                mb-1 text-[10px] font-bold uppercase
                tracking-[0.18em]
                text-[#276ea5]
                sm:hidden
                dark:text-[#60a5fa]
              "
            >
              Section {number}
            </p>

            <h2
              className="
                text-xl font-bold tracking-tight
                text-slate-950
                sm:text-2xl
                dark:text-white
              "
            >
              {title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div
          className="
            space-y-5
            pl-0
            text-[15px]
            leading-7
            text-slate-600
            sm:pl-19
            dark:text-slate-400
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
};

const BulletList = ({ items }) => {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="
            group/item
            flex items-start gap-3
            rounded-2xl
            border border-slate-200/80
            bg-[#f8fafc]
            px-4 py-3.5
            text-sm leading-6
            transition-all duration-200
            hover:border-[#276ea5]/20
            hover:bg-[#276ea5]/2.5
            dark:border-white/5
            dark:bg-white/2
            dark:hover:border-[#60a5fa]/10
            dark:hover:bg-[#60a5fa]/2.5
          "
        >
          <span
            className="
              mt-2 h-1.5 w-1.5 shrink-0
              rounded-full
              bg-[#276ea5]
              shadow-[0_0_0_3px_rgba(39,110,165,0.08)]
              dark:bg-[#60a5fa]
              dark:shadow-[0_0_0_3px_rgba(96,165,250,0.08)]
            "
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(PrivacyPolicy);

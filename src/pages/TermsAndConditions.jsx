import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Code2,
  AlertCircle,
  Scale,
  Mail,
  ArrowUpRight,
  ChevronRight,
  Menu,
} from "lucide-react";
import Footer from "../components/Footer";

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
  darkCanvas: "#060b13",
};

const sections = [
  ["acceptance", "Acceptance of Terms"],
  ["services", "Our Services"],
  ["website", "Website Use"],
  ["accounts", "Accounts & Information"],
  ["projects", "Projects & Deliverables"],
  ["payments", "Payments & Fees"],
  ["intellectual-property", "Intellectual Property"],
  ["client-content", "Client Content"],
  ["confidentiality", "Confidentiality"],
  ["third-party", "Third-Party Services"],
  ["warranties", "Warranties"],
  ["liability", "Limitation of Liability"],
  ["indemnification", "Indemnification"],
  ["termination", "Termination"],
  ["governing-law", "Governing Law"],
  ["changes", "Changes to Terms"],
  ["contact", "Contact Us"],
];

/* =========================================================
   ICONS
========================================================= */

const sectionIcons = {
  acceptance: <CheckCircle2 />,
  services: <Code2 />,
  website: <ShieldCheck />,
  accounts: <CheckCircle2 />,
  projects: <Code2 />,
  payments: <CreditCard />,
  "intellectual-property": <Scale />,
  "client-content": <FileText />,
  confidentiality: <ShieldCheck />,
  "third-party": <ArrowUpRight />,
  warranties: <AlertCircle />,
  liability: <Scale />,
  indemnification: <ShieldCheck />,
  termination: <AlertCircle />,
  "governing-law": <Scale />,
  changes: <FileText />,
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const TermsAndConditions = () => {
  const lastUpdated = "August 18, 2026";

  const handleMobileNavigation = (event) => {
    const id = event.target.value;

    if (!id) return;

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    event.target.value = "";
  };

  return (
    <div
      className="min-h-screen bg-[#f4f6f8] text-slate-800 transition-colors duration-300 dark:bg-[#060b13] dark:text-slate-200"
      style={{
        "--primary": brandTheme.primaryBlue,
        "--indigo": brandTheme.secondaryIndigo,
        "--cyan": brandTheme.electricCyan,
      }}
    >

      <header className="relative overflow-hidden border-b border-slate-200 bg-[#f4f6f8] dark:border-white/6 dark:bg-[#060b13]">
        {/* Very subtle background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-30 -top-45 h-105 w-105 rounded-full bg-blue-500/[0.035] blur-3xl dark:bg-blue-400/6" />

          <div className="absolute -bottom-45 -left-25 h-87.5 w-87.5 rounded-full bg-slate-300/35 blur-3xl dark:bg-blue-950/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-sm">
            <span className="font-medium text-slate-400 dark:text-slate-600">
              Shilsha
            </span>

            <ChevronRight
              size={14}
              className="text-slate-300 dark:text-slate-700"
            />

            <span
              className="font-semibold"
              style={{ color: brandTheme.primaryBlue }}
            >
              Legal
            </span>
          </div>

          {/* Hero content */}
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                style={{
                  backgroundColor: brandTheme.primaryBlue,
                  boxShadow: "0 10px 30px rgba(39,110,165,0.18)",
                }}
              >
                <FileText size={25} strokeWidth={1.8} />
              </div>

              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: brandTheme.primaryBlue }}
                >
                  Legal Document
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                  Terms governing our website and services
                </p>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
              Please read these terms carefully. They explain the rules,
              responsibilities, and conditions that apply when using Shilsha's
              website and services.
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-600 shadow-sm dark:border-white/[0.07] dark:bg-white/2.5 dark:text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Last updated {lastUpdated}
              </div>

              <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-600 shadow-sm dark:border-white/[0.07] dark:bg-white/2.5 dark:text-slate-400">
                {sections.length} sections
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Navigation */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-[#f4f6f8]/95 px-5 py-3 backdrop-blur-xl lg:hidden dark:border-white/6 dark:bg-[#060b13]/95">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <Menu
              size={17}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              onChange={handleMobileNavigation}
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 dark:border-white/8 dark:bg-[#0b111b] dark:text-slate-300"
            >
              <option value="" disabled>
                Jump to a section
              </option>

              {sections.map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,850px)]">
          {/* Desktop Sidebar*/}

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="mb-3 px-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
                  On this page
                </p>
              </div>

              <nav className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-white/6 dark:bg-[#0b111b]">
                {sections.map(([id, label], index) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="group flex items-center gap-3 rounded-lg px-2.5 py-2 text-[13px] text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-900 dark:text-slate-500 dark:hover:bg-white/4 dark:hover:text-slate-200"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[10px] font-semibold text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-white/[0.035] dark:text-slate-600 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="leading-5">{label}</span>
                  </a>
                ))}
              </nav>

              {/* Sidebar contact */}
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/6 dark:bg-[#0b111b]">
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: brandTheme.primaryBlue }}
                >
                  <Mail size={17} />
                </div>

                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Need clarification?
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-500">
                  Our team can help answer questions about these terms.
                </p>

                <Link
                  to="/contact-us"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-all hover:gap-2"
                  style={{ color: brandTheme.primaryBlue }}
                >
                  Contact us
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </aside>

          <article className="min-w-0">
            {/* Intro notice */}
            <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-white/6 dark:bg-[#0b111b]">
              <div className="flex gap-4">
                <div
                  className="h-8 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: brandTheme.primaryBlue }}
                />

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Important information
                  </p>

                  <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    By accessing our website, submitting an inquiry, or using
                    our services, you acknowledge that you have read and agreed
                    to these Terms & Conditions.
                  </p>
                </div>
              </div>
            </div>

            <TermsSection
              id="acceptance"
              number="01"
              icon={sectionIcons.acceptance}
              title="Acceptance of Terms"
            >
              <p>
                These Terms & Conditions ("Terms") constitute a legally binding
                agreement between you ("you", "your", or "Client") and Shilsha
                Technologies ("Shilsha", "we", "our", or "us").
              </p>

              <p>
                By accessing our website, submitting an inquiry, engaging our
                services, or otherwise interacting with our services, you agree
                to be bound by these Terms.
              </p>

              <p>
                If you do not agree with any part of these Terms, you should
                discontinue use of our website and services.
              </p>
            </TermsSection>

            <TermsSection
              id="services"
              number="02"
              icon={sectionIcons.services}
              title="Our Services"
            >
              <p>
                Shilsha provides technology and digital services that may
                include software development, artificial intelligence and
                machine learning development, web and mobile application
                development, UI/UX design, cloud solutions, quality assurance,
                DevOps, consulting, and digital marketing services.
              </p>

              <p>
                The specific scope, deliverables, timelines, technologies,
                responsibilities, and commercial terms for a project may be
                defined in a separate proposal, statement of work, service
                agreement, purchase order, or other written agreement.
              </p>

              <p>
                Where a separate written agreement conflicts with these Terms,
                the terms of the specific agreement may govern the relevant
                project or service.
              </p>
            </TermsSection>

            <TermsSection
              id="website"
              number="03"
              icon={sectionIcons.website}
              title="Website Use"
            >
              <p>
                You agree to use our website only for lawful purposes and in a
                manner that does not interfere with the operation, security,
                availability, or integrity of the website.
              </p>

              <BulletList
                items={[
                  "Do not attempt to gain unauthorized access to our systems or infrastructure.",
                  "Do not introduce malicious code, malware, viruses, or other harmful material.",
                  "Do not use automated methods to abuse, overload, scrape, or disrupt our website.",
                  "Do not impersonate another person, business, or organization.",
                  "Do not use our website for fraudulent, unlawful, or abusive activities.",
                ]}
              />
            </TermsSection>

            <TermsSection
              id="accounts"
              number="04"
              icon={sectionIcons.accounts}
              title="Accounts & Information"
            >
              <p>
                If you provide information to us through forms, inquiries,
                accounts, or project communications, you agree that the
                information you provide is accurate, current, and complete to
                the best of your knowledge.
              </p>

              <p>
                You are responsible for maintaining the confidentiality of any
                credentials associated with an account or service and for
                activities performed through your account.
              </p>
            </TermsSection>

            <TermsSection
              id="projects"
              number="05"
              icon={sectionIcons.projects}
              title="Projects & Deliverables"
            >
              <p>
                Project requirements, milestones, deliverables, timelines, and
                acceptance criteria may vary depending on the engagement.
              </p>

              <p>
                Delays caused by incomplete requirements, delayed approvals,
                unavailable resources, third-party dependencies, or changes
                requested by the Client may affect the agreed project schedule.
              </p>

              <p>
                Any material change to the agreed scope may require a revised
                estimate, timeline, or written change request.
              </p>
            </TermsSection>

            <TermsSection
              id="payments"
              number="06"
              icon={sectionIcons.payments}
              title="Payments & Fees"
            >
              <p>
                Service fees, payment schedules, taxes, and other commercial
                terms will generally be specified in the applicable proposal,
                quotation, invoice, or agreement.
              </p>

              <BulletList
                items={[
                  "Invoices are payable according to the agreed payment schedule.",
                  "Additional work outside the agreed scope may be billed separately.",
                  "Applicable taxes, government charges, or transaction fees may be added where required.",
                  "Late payments may affect project schedules or service availability.",
                ]}
              />

              <p>
                Unless otherwise agreed in writing, payments made for completed
                work, delivered services, or approved project milestones may
                not be refundable.
              </p>
            </TermsSection>

            <TermsSection
              id="intellectual-property"
              number="07"
              icon={sectionIcons["intellectual-property"]}
              title="Intellectual Property"
            >
              <p>
                Ownership of project-specific deliverables will be determined
                by the applicable project agreement, proposal, statement of
                work, or other written arrangement.
              </p>

              <p>
                Unless expressly transferred in writing, Shilsha retains
                ownership of its pre-existing intellectual property,
                methodologies, frameworks, libraries, tools, templates,
                processes, know-how, and reusable components.
              </p>

              <p>
                Third-party software, open-source libraries, platforms, APIs,
                fonts, images, or other materials remain subject to their
                respective licenses and terms.
              </p>
            </TermsSection>

            <TermsSection
              id="client-content"
              number="08"
              icon={sectionIcons["client-content"]}
              title="Client Content & Materials"
            >
              <p>
                You are responsible for ensuring that content, data,
                credentials, documents, images, trademarks, software, and other
                materials provided to us may lawfully be used for the intended
                project.
              </p>

              <p>
                You represent that providing such materials to us does not
                knowingly infringe the rights of another person or entity.
              </p>
            </TermsSection>

            <TermsSection
              id="confidentiality"
              number="09"
              icon={sectionIcons.confidentiality}
              title="Confidentiality"
            >
              <p>
                We may receive confidential or proprietary information during
                an engagement. We will use reasonable measures to protect
                confidential information and use it only for legitimate
                business or project purposes.
              </p>

              <p>
                Confidentiality obligations may be further defined through a
                separate confidentiality agreement or NDA where applicable.
              </p>
            </TermsSection>

            <TermsSection
              id="third-party"
              number="10"
              icon={sectionIcons["third-party"]}
              title="Third-Party Services"
            >
              <p>
                Projects may rely on third-party platforms, hosting providers,
                cloud infrastructure, APIs, payment processors, analytics
                platforms, software libraries, or other services.
              </p>

              <p>
                Third-party services are generally governed by their own terms,
                licenses, availability, and policies. We are not responsible
                for failures, outages, changes, or restrictions imposed by
                third-party providers beyond our reasonable control.
              </p>
            </TermsSection>

            <TermsSection
              id="warranties"
              number="11"
              icon={sectionIcons.warranties}
              title="Warranties & Disclaimers"
            >
              <p>
                We will use reasonable professional care in delivering agreed
                services. However, unless expressly stated in a written
                agreement, our website and services are provided without
                warranties beyond those that cannot legally be excluded.
              </p>

              <p>
                We do not guarantee that the website or services will always be
                uninterrupted, error-free, completely secure, or compatible
                with every environment or third-party system.
              </p>
            </TermsSection>

            <TermsSection
              id="liability"
              number="12"
              icon={sectionIcons.liability}
              title="Limitation of Liability"
            >
              <p>
                To the maximum extent permitted by applicable law, Shilsha will
                not be liable for indirect, incidental, special, consequential,
                exemplary, or punitive damages arising from or related to your
                use of our website or services.
              </p>

              <p>
                Nothing in these Terms is intended to exclude or limit
                liability that cannot legally be excluded or limited under
                applicable law.
              </p>
            </TermsSection>

            <TermsSection
              id="indemnification"
              number="13"
              icon={sectionIcons.indemnification}
              title="Indemnification"
            >
              <p>
                To the extent permitted by law, you agree to indemnify and hold
                harmless Shilsha, its personnel, and representatives from
                claims, losses, liabilities, damages, and expenses arising from
                your unlawful use of our website or services, violation of these
                Terms, or infringement of third-party rights resulting from
                materials you provide.
              </p>
            </TermsSection>

            <TermsSection
              id="termination"
              number="14"
              icon={sectionIcons.termination}
              title="Termination"
            >
              <p>
                We may suspend or terminate access to our website or services
                where reasonably necessary, including in cases of misuse,
                violation of these Terms, non-payment, security concerns, or
                legal requirements.
              </p>

              <p>
                Termination of a project or service engagement will generally be
                governed by the applicable written agreement.
              </p>

              <p>
                Provisions that by their nature should survive termination,
                including intellectual property, confidentiality, liability,
                indemnification, and dispute-related provisions, may continue
                to apply.
              </p>
            </TermsSection>

            <TermsSection
              id="governing-law"
              number="15"
              icon={sectionIcons["governing-law"]}
              title="Governing Law & Disputes"
            >
              <p>
                These Terms will be governed by the laws applicable to the
                jurisdiction specified in the applicable service agreement or,
                where no separate agreement applies, the jurisdiction in which
                Shilsha's relevant business entity is established, subject to
                applicable law.
              </p>

              <p>
                The parties will make reasonable efforts to resolve disputes
                through good-faith communication before pursuing formal legal
                remedies.
              </p>
            </TermsSection>

            <TermsSection
              id="changes"
              number="16"
              icon={sectionIcons.changes}
              title="Changes to These Terms"
            >
              <p>
                We may update these Terms from time to time to reflect changes
                to our services, business practices, technology, or legal
                requirements.
              </p>

              <p>
                Updated Terms will be posted on this page with a revised "Last
                updated" date. Your continued use of the website after an
                update may constitute acceptance of the revised Terms to the
                extent permitted by applicable law.
              </p>
            </TermsSection>

            <div
              className="mt-8 rounded-2xl p-7 text-white sm:p-8"
              style={{
                backgroundColor: brandTheme.primaryBlue,
              }}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-100">
                    Need help?
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight">
                    Have questions about these terms?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-blue-100/80">
                    Our team is available to help clarify anything about our
                    terms, services, or engagement process.
                  </p>
                </div>

                <Link
                  to="/contact-us"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#276ea5] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Contact Us
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const TermsSection = ({ id, number, icon, title, children }) => {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-slate-200 py-9 last:border-0 dark:border-white/6"
    >
      <div className="flex gap-4 sm:gap-6">
        {/* Number */}
        <div className="hidden w-7 shrink-0 pt-1 text-right text-[11px] font-bold tracking-wider text-slate-300 sm:block dark:text-slate-700">
          {number}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Heading */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#276ea5] dark:bg-blue-500/8 dark:text-[#60a5fa]">
              {React.cloneElement(icon, {
                size: 19,
                strokeWidth: 1.8,
              })}
            </div>

            <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl dark:text-white">
              {title}
            </h2>
          </div>

          {/* Body */}
          <div className="space-y-4 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            {children}
          </div>
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
          className="flex items-start gap-3 rounded-lg border border-slate-200/70 bg-white px-4 py-3 text-sm leading-6 text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50/30 dark:border-white/5 dark:bg-white/1.5 dark:text-slate-400 dark:hover:border-blue-500/20 dark:hover:bg-blue-500/2.5"
        >
          <span className="mt-2.25 h-1.5 w-1.5 shrink-0 rounded-full bg-[#276ea5]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(TermsAndConditions);
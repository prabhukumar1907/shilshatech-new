import React from "react";
import { ShieldCheck, Zap, Server, Database, ArrowUpRight } from "lucide-react";
import { SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";
import AwardsSection from "../../components/AwardsSection";
import ReasonsWhySection from "../../components/ReasonsWhySection";
import Footer from "../../components/Footer";

const PostgresqlServicesPage = () => {
  const accent = "#336791";
  const lightAccent = "#93c5fd";

  const capabilities = [
    {
      number: "01",
      icon: <Server size={19} />,
      title: "Advanced SQL Architecture",
      desc: "Design robust relational systems using PostgreSQL's extensibility, advanced data types, constraints, and powerful SQL capabilities.",
    },
    {
      number: "02",
      icon: <Zap size={19} />,
      title: "Query Performance",
      desc: "Identify bottlenecks, optimize execution plans, and implement B-Tree, GIN, GiST, and specialized indexing strategies.",
    },
    {
      number: "03",
      icon: <Database size={19} />,
      title: "JSONB & Hybrid Data",
      desc: "Combine structured relational data with flexible JSONB workloads without compromising consistency or performance.",
    },
    {
      number: "04",
      icon: <ShieldCheck size={19} />,
      title: "Security & Multi-Tenancy",
      desc: "Implement row-level security, role-based access, encryption, and isolated multi-tenant database architectures.",
    },
  ];

  const services = [
    "PostgreSQL Architecture & Schema Design",
    "Query Optimization & Execution Tuning",
    "JSONB & Semi-Structured Data",
    "Database Migration & Modernization",
    "Partitioning & Large-Scale Data",
    "Replication & High Availability",
    "Cloud PostgreSQL Deployment",
    "Database Security & Hardening",
  ];

  return (
    <main
      className="
        min-h-screen
        bg-slate-50 dark:bg-[#070d18]
        text-slate-900 dark:text-slate-100
        font-sans
        overflow-hidden
        selection:bg-blue-200
        selection:text-slate-900
      "
    >
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-20">
        {/* Background glow */}
        <div
          className="
            absolute
            -top-40
            -right-30
            w-105
            h-105
            rounded-full
            blur-[120px]
            opacity-20
            pointer-events-none
          "
          style={{ background: lightAccent }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Top eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <div
                className="
                  flex items-center justify-center
                  w-10 h-10
                  text-white
                  rounded-xl
                "
                style={{ backgroundColor: accent }}
              >
                <SiPostgresql size={22} />
              </div>

              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: accent }}
                >
                  PostgreSQL Engineering
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  Shilsha Technologies
                </p>
              </div>
            </div>

            {/* Hero content */}
            <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-20 items-end">
              <div>
                <h1
                  className="
                    text-4xl
                    sm:text-5xl
                    lg:text-7xl
                    font-black
                    tracking-[-0.04em]
                    leading-[0.98]
                    max-w-5xl
                  "
                >
                  PostgreSQL
                  <span className="block" style={{ color: accent }}>
                    built for scale.
                  </span>
                </h1>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="
                  pb-1
                  lg:border-l
                  lg:border-slate-300
                  lg:dark:border-slate-700
                  lg:pl-8
                "
              >
                <p className="text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400">
                  Enterprise PostgreSQL architecture, optimization, security,
                  migration, and high-availability engineering for applications
                  that demand reliability and speed.
                </p>
              </motion.div>
            </div>

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 origin-left h-0.5 w-full"
              style={{
                background: `linear-gradient(90deg, ${accent}, ${lightAccent}, transparent)`,
              }}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
                style={{ color: accent }}
              >
                Data Infrastructure
              </span>

              <h2
                className="
                mt-4
                text-3xl
                sm:text-4xl
                font-extrabold
                tracking-tight
                leading-tight
              "
              >
                A stronger foundation for modern applications.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <p
                className="
                text-lg
                sm:text-xl
                leading-8
                text-slate-600
                dark:text-slate-300
                max-w-4xl
              "
              >
                PostgreSQL is one of the world's most capable open-source
                relational databases. Shilsha Technologies designs and optimizes
                PostgreSQL environments for high-throughput applications,
                complex queries, multi-tenant systems, analytics workloads, and
                mission-critical enterprise platforms.
              </p>

              <p
                className="
                mt-5
                text-sm
                sm:text-base
                leading-7
                text-slate-500
                dark:text-slate-500
                max-w-3xl
              "
              >
                From schema architecture and indexing to cloud migration,
                replication, partitioning, and security, our engineers build
                database environments that remain dependable as workloads grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="
          py-12
          sm:py-16
          border-y
          border-slate-200
          dark:border-slate-800
        "
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div
            className="
            flex
            flex-col
            sm:flex-row
            sm:items-end
            sm:justify-between
            gap-4
            mb-10
          "
          >
            <div>
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                Core capabilities
              </span>

              <h2
                className="
                mt-3
                text-3xl
                sm:text-4xl
                font-extrabold
                tracking-tight
              "
              >
                Engineering PostgreSQL without compromise.
              </h2>
            </div>

            <p
              className="
              text-sm
              text-slate-500
              dark:text-slate-500
              max-w-sm
              sm:text-right
            "
            >
              Performance, flexibility, security, and reliability engineered
              around your workload.
            </p>
          </div>

          {/* No cards — clean rows */}
          <div
            className="
            border-t
            border-slate-200
            dark:border-slate-800
          "
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  grid
                  grid-cols-[42px_1fr]
                  sm:grid-cols-[55px_1fr_2fr]
                  gap-4
                  sm:gap-8
                  py-6
                  border-b
                  border-slate-200
                  dark:border-slate-800
                  transition-all
                  duration-300
                  hover:px-2
                "
              >
                <div
                  className="
                    text-xs
                    font-bold
                    pt-1
                  "
                  style={{ color: accent }}
                >
                  {item.number}
                </div>

                <div>
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-slate-900
                      dark:text-white
                      font-bold
                      text-base
                      sm:text-lg
                    "
                  >
                    <span
                      className="
                        sm:hidden
                        text-slate-500
                        dark:text-slate-500
                      "
                    >
                      {item.icon}
                    </span>

                    {item.title}
                  </div>
                </div>

                <p
                  className="
                  col-span-2
                  sm:col-span-1
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-slate-400
                  max-w-xl
                "
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                What we deliver
              </span>

              <h2
                className="
                mt-4
                text-3xl
                sm:text-5xl
                font-black
                tracking-tight
                leading-tight
              "
              >
                PostgreSQL services designed around your data.
              </h2>

              <p
                className="
                mt-5
                text-sm
                sm:text-base
                leading-7
                text-slate-500
                dark:text-slate-400
                max-w-md
              "
              >
                Build a new database foundation, modernize an existing
                environment, or solve performance and scalability challenges
                with focused PostgreSQL engineering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div
                className="
                divide-y
                divide-slate-200
                dark:divide-slate-800
                border-t
                border-slate-200
                dark:border-slate-800
              "
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-4
                      py-4
                      sm:py-5
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          text-[11px]
                          font-bold
                          text-slate-400
                          dark:text-slate-600
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                        text-sm
                        sm:text-base
                        font-semibold
                        text-slate-700
                        dark:text-slate-300
                        group-hover:text-slate-950
                        dark:group-hover:text-white
                        transition-colors
                      "
                      >
                        {service}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="
                        shrink-0
                        text-slate-300
                        dark:text-slate-700
                        group-hover:text-blue-500
                        transition-all
                        duration-300
                      "
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="
          py-14
          sm:py-20
          bg-[#336791]
          text-white
          relative
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -right-25
            -top-25
            w-80
            h-80
            rounded-full
            bg-blue-300/20
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -left-25
            -bottom-37.5
            w-96
            h-96
            rounded-full
            bg-blue-900/30
            blur-[120px]
          "
        />

        <div
          className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
        "
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <p
                className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-blue-200
              "
              >
                Why PostgreSQL
              </p>

              <h2
                className="
                mt-4
                text-3xl
                sm:text-5xl
                font-black
                tracking-tight
                leading-tight
              "
              >
                Reliability for data that matters.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7"
            >
              <p
                className="
                text-base
                sm:text-xl
                leading-8
                text-blue-50/90
              "
              >
                We integrate high-performance PostgreSQL backends into
                enterprise applications where consistency, concurrency,
                security, and predictable performance are essential.
              </p>

              <div
                className="
                mt-8
                grid
                sm:grid-cols-3
                gap-6
                border-t
                border-white/20
                pt-6
              "
              >
                <div>
                  <p className="text-2xl font-black">ACID</p>
                  <p className="mt-1 text-xs text-blue-100/70">
                    Transaction reliability
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black">JSONB</p>
                  <p className="mt-1 text-xs text-blue-100/70">
                    Flexible data modeling
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black">RLS</p>
                  <p className="mt-1 text-xs text-blue-100/70">
                    Fine-grained security
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ReasonsWhySection />
      <AwardsSection />
      <Footer />
    </main>
  );
};

export default PostgresqlServicesPage;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  MessageCircle,
  Phone,
  Mail,
  ShieldCheck,
  Code2,
  Globe,
  Clock,
  CheckCircle2,
  X,
  HelpCircle,
} from "lucide-react";

const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "services", label: "Services & Tech" },
  { id: "process", label: "Process & Security" },
];

const faqData = [
  {
    id: 1,
    category: "services",
    question:
      "Can you build mobile-friendly, responsive websites, fast-loading and SEO-friendly?",
    answer:
      "Absolutely! At Shilsha Technologies, we build mobile-first, responsive, and SEO-optimized web applications. We implement clean code architecture, performance budget tuning, and meta-tag optimization to maximize page load speeds and organic search rankings across all device viewports.",
    icon: Globe,
    color: "#4285F4",
    badge: "Core Service",
  },
  {
    id: 2,
    category: "process",
    question:
      "Why should I choose Shilsha Technologies to design and develop my website?",
    answer:
      "Shilsha Technologies stands out through custom engineering tailored directly to your business KPIs. We combine experienced full-stack developers, modern frameworks, agile iteration, and continuous post-launch support to deliver scalable digital products that drive enterprise growth.",
    icon: CheckCircle2,
    color: "#34A853",
    badge: "Why Us",
  },
  {
    id: 3,
    category: "process",
    question: "How do you handle website security and data privacy?",
    answer:
      "We enforce enterprise security protocols including SSL encryption, strict OWASP coding practices, secure authentication mechanisms, automated penetration testing, and firewall configurations to protect your digital assets against vulnerabilities.",
    icon: ShieldCheck,
    color: "#10B981",
    badge: "Security",
  },
  {
    id: 4,
    category: "services",
    question:
      "What technologies and frameworks do you use for website and mobile app development?",
    answer:
      "We utilize a modern tech stack. For web platforms: React, Angular, Vue.js, Node.js, and HTML5/CSS3. For cross-platform mobile apps: React Native and Flutter. Database solutions include MySQL, PostgreSQL, and MongoDB.",
    icon: Code2,
    color: "#F89820",
    badge: "Tech Stack",
  },
  {
    id: 5,
    category: "process",
    question:
      "Is Shilsha Technologies able to work according to my time zone preference?",
    answer:
      "Yes! Our project management framework easily aligns with international client schedules. We establish overlapping communication windows for daily standups, progress reviews, and real-time updates regardless of your location.",
    icon: Clock,
    color: "#06B6D4",
    badge: "Global Ready",
  },
  {
    id: 6,
    category: "process",
    question: "How do I get started with your web development services?",
    answer:
      "Getting started takes just three quick steps: reach out via our contact form, email info@shilshatech.com, or call +91-120-412-0113. We will instantly schedule a technical discovery call to review your scope and provide a detailed timeline.",
    icon: MessageCircle,
    color: "#A855F7",
    badge: "Onboarding",
  },
  {
    id: 7,
    category: "services",
    question: "Do you provide ongoing support and maintenance for websites?",
    answer:
      "Yes, Shilsha Technologies provides proactive post-launch SLA maintenance packages, including routine security updates, performance monitoring, bug fixes, and feature enhancements to keep your platform running flawlessly.",
    icon: ShieldCheck,
    color: "#EF4444",
    badge: "Support",
  },
];

export default function FAQSectionShilsha() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState([1]);
  const [hoveredId, setHoveredId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id],
    );
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;

    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-4
        py-12
        font-sans
        text-slate-900
        transition-colors
        duration-500
        dark:bg-[#060b13]
        dark:text-white
        sm:px-6
        lg:px-8
      "
    >
      {/* Background Accent */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-75
          w-150
          -translate-x-1/2
          rounded-full
          bg-[#276ea5]
          opacity-15
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-64
          w-64
          rounded-full
          bg-[#60a5fa]
          opacity-[0.04]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-[#276ea5]
          opacity-[0.05]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="
                mb-4
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#276ea5]/20
                bg-[#276ea5]/10
                px-3.5
                py-1
                text-xs
                font-semibold
                text-[#276ea5]
                dark:text-[#60a5fa]
              "
            >
              <HelpCircle size={14} />
              Help & Knowledge Base
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-900
              dark:text-white
              sm:text-5xl
            "
          >
            Frequently Asked{" "}
            <span
              className="
                bg-linear-to-r
                from-[#276ea5]
                via-[#3b82f6]
                to-[#60a5fa]
                bg-clip-text
                text-transparent
              "
            >
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              dark:text-slate-400
              sm:text-lg
            "
          >
            Everything you need to know about partnering with Shilsha
            Technologies for your custom development projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mx-auto mt-8 max-w-xl"
          >
            <Search
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
                transition-colors
                dark:text-slate-500
              "
              size={20}
            />

            <input
              type="text"
              placeholder="Search questions, tech stacks, process..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                py-3.5
                pl-12
                pr-11
                text-sm
                text-slate-900
                outline-none
                shadow-sm
                transition-all
                duration-300
                placeholder:text-slate-400
                hover:border-slate-300
                focus:border-[#276ea5]
                focus:ring-4
                focus:ring-[#276ea5]/10
                dark:border-slate-800
                dark:bg-slate-900/90
                dark:text-white
                dark:placeholder:text-slate-500
                dark:hover:border-slate-700
                dark:focus:border-[#60a5fa]
                dark:focus:ring-[#60a5fa]/10
                sm:text-base
              "
            />

            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="
                    absolute
                    right-3.5
                    top-1/2
                    flex
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-lg
                    p-1
                    text-slate-400
                    transition-colors
                    hover:bg-slate-100
                    hover:text-slate-700
                    dark:hover:bg-slate-800
                    dark:hover:text-slate-200
                  "
                  aria-label="Clear search"
                >
                  <X size={18} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div
          className="
            no-scrollbar
            mb-10
            flex
            justify-start
            gap-2
            overflow-x-auto
            pb-2
            sm:justify-center
          "
        >
          {faqCategories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  whitespace-nowrap
                  rounded-xl
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-[#276ea5] bg-[#276ea5] text-white shadow-lg shadow-[#276ea5]/25"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#276ea5]/30 hover:bg-[#276ea5]/5 hover:text-[#276ea5] dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-[#60a5fa]/30 dark:hover:bg-[#60a5fa]/5 dark:hover:text-[#60a5fa]"
                  }
                `}
              >
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-10
                text-center
                text-slate-500
                dark:border-slate-800
                dark:bg-slate-900/50
                dark:text-slate-400
              "
            >
              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#276ea5]/10
                  text-[#276ea5]
                  dark:text-[#60a5fa]
                "
              >
                <Search size={21} />
              </div>

              <p className="text-base font-medium">
                No questions matched "{searchQuery}"
              </p>

              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="
                  mt-3
                  text-sm
                  font-semibold
                  text-[#276ea5]
                  transition-colors
                  hover:text-[#1d4ed8]
                  hover:underline
                  dark:text-[#60a5fa]
                "
              >
                Clear search filters
              </button>
            </motion.div>
          ) : (
            filteredFaqs.map((item, index) => {
              const isOpen = openIds.includes(item.id);
              const isHovered = hoveredId === item.id;
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-[#276ea5]/40 bg-white shadow-lg shadow-[#276ea5]/5 ring-1 ring-[#276ea5]/10 dark:border-[#276ea5]/60 dark:bg-slate-900 dark:ring-[#276ea5]/10"
                        : "border-slate-200 bg-white/80 hover:-translate-y-0.5 hover:border-[#276ea5]/30 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700"
                    }
                  `}
                >
                  {/* Active top accent */}
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: isOpen ? 1 : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="
                      absolute
                      inset-x-0
                      top-0
                      h-px
                      origin-left
                      bg-linear-to-r
                      from-[#276ea5]
                      via-[#60a5fa]
                      to-transparent
                    "
                  />

                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                      gap-4
                      p-5
                      text-left
                      focus:outline-none
                      sm:p-6
                    "
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          scale: isHovered || isOpen ? 1.05 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 20,
                        }}
                        className="
                          relative
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          transition-all
                          duration-300
                          sm:h-11
                          sm:w-11
                        "
                        style={{
                          background:
                            isHovered || isOpen
                              ? `${item.color}18`
                              : undefined,
                          color:
                            isHovered || isOpen
                              ? item.color
                              : undefined,
                        }}
                      >
                        <div
                          className={`
                            absolute
                            inset-0
                            rounded-xl
                            blur-md
                            transition-opacity
                            duration-300
                            ${
                              isHovered || isOpen
                                ? "opacity-30"
                                : "opacity-0"
                            }
                          `}
                          style={{
                            background: item.color,
                          }}
                        />

                        <div
                          className={`
                            relative
                            z-10
                            flex
                            h-full
                            w-full
                            items-center
                            justify-center
                            rounded-xl
                            transition-colors
                            duration-300
                            ${
                              !isHovered && !isOpen
                                ? "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                                : ""
                            }
                          `}
                        >
                          <IconComponent size={20} strokeWidth={2} />
                        </div>
                      </motion.div>

                      <div className="min-w-0">
                        <span
                          className="
                            mb-0.5
                            block
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-slate-400
                            dark:text-slate-500
                          "
                        >
                          {item.badge}
                        </span>

                        <h3
                          className={`
                            text-base
                            font-bold
                            leading-snug
                            transition-colors
                            duration-300
                            sm:text-lg
                            ${
                              isHovered || isOpen
                                ? "text-[#276ea5] dark:text-white"
                                : "text-slate-900 dark:text-slate-100"
                            }
                          `}
                        >
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                        backgroundColor: isOpen
                          ? `${item.color}12`
                          : "transparent",
                        color: isOpen ? item.color : undefined,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-colors
                        ${
                          !isOpen
                            ? "text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                            : ""
                        }
                      `}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        }}
                      >
                        <div
                          className="
                            border-t
                            border-slate-100
                            px-5
                            pb-6
                            pt-4
                            text-sm
                            leading-relaxed
                            text-slate-600
                            dark:border-slate-800/60
                            dark:text-slate-300
                            sm:px-6
                            sm:text-base
                          "
                        >
                          <div className="pl-0 sm:pl-15">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
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
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.1,
          }}
          className="
            relative
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-6
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-linear-to-r
            from-[#060b13]
            via-[#0e1d32]
            to-[#276ea5]
            p-6
            text-white
            shadow-2xl
            sm:p-10
            md:flex-row
          "
        >
          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -bottom-10
              h-48
              w-48
              rounded-full
              bg-[#60a5fa]/20
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              h-40
              w-40
              rounded-full
              bg-[#276ea5]/20
              blur-3xl
            "
          />

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-xl font-bold sm:text-2xl">
              Have more questions?
            </h3>

            <p className="mt-1 max-w-md text-sm text-slate-300">
              Can't find the answer you're looking for? Reach out to our
              technical team directly.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+911204120113"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/15
                bg-white/10
                px-4
                py-2.5
                text-xs
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/20
                hover:shadow-lg
                sm:text-sm
              "
            >
              <Phone size={16} />
              +91-120-412-0113
            </a>

            <a
              href="mailto:info@shilshatech.com"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#276ea5]
                px-5
                py-2.5
                text-xs
                font-semibold
                text-white
                shadow-md
                shadow-[#276ea5]/30
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#1d4ed8]
                hover:shadow-lg
                hover:shadow-[#276ea5]/40
                sm:text-sm
              "
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Footer from "../components/Footer";

const COUNTRY_API = "https://countriesnow.space/api/v0.1/countries/codes";
const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.494949419112!2d77.3783989695381!3d28.63036757560618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8a45d37eeb%3A0xebd3d070a044e5f9!2sShilsha%20Technologies!5e0!3m2!1sen!2sus!4v1704460082333!5m2!1sen!2sus";
const MAP_LINK =
  "https://maps.google.com/?q=Shilsha+Technologies+H-15+Sector+63+Noida";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const LazyMap = memo(function LazyMap() {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 dark:border-slate-800 dark:bg-slate-900"
    >
      {shouldLoad ? (
        <iframe
          title="Shilsha Technologies Location"
          src={MAP_URL}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-64 w-full border-0 grayscale transition-all duration-700 group-hover:grayscale-0 dark:invert dark:hue-rotate-180 dark:contrast-125"
        />
      ) : (
        <div className="h-64 w-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(39,110,165,.18),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,.14),transparent_40%)]" />
        </div>
      )}

      <div className="absolute left-4 top-4 rounded-xl border border-white/40 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

          <span className="text-[11px] font-bold text-slate-800 dark:text-white">
            Our India Office
          </span>
        </div>
      </div>

      <a
        href={MAP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-[#276ea5] px-3.5 py-2 text-[11px] font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#215b7d]"
      >
        Open Maps
        <ArrowUpRight size={13} />
      </a>
    </div>
  );
});

const CountrySelector = memo(function CountrySelector({
  loadingCountries,
  selectedCountry,
  countrySearch,
  isDropdownOpen,
  filteredCountries,
  onToggle,
  onSearch,
  onSelect,
}) {
  return (
    <div className="relative">
      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
        Country
      </label>

      <button
        type="button"
        onClick={onToggle}
        disabled={loadingCountries}
        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm transition-all hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950/70 dark:hover:border-slate-600"
      >
        <span className="flex min-w-0 items-center gap-2">
          <Globe2 className="h-4 w-4 shrink-0 text-[#276ea5]" />

          <span className="truncate">
            {loadingCountries
              ? "Loading countries..."
              : selectedCountry
                ? `${selectedCountry.name} (${selectedCountry.dial_code})`
                : "Select Country"}
          </span>
        </span>

        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isDropdownOpen && !loadingCountries && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
          <input
            type="text"
            value={countrySearch}
            onChange={onSearch}
            autoFocus
            placeholder="Search country..."
            className="mb-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-950"
          />

          <div className="max-h-52 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((item) => (
                <button
                  key={`${item.code}-${item.name}`}
                  type="button"
                  onClick={() => onSelect(item)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs transition-colors ${
                    selectedCountry?.name === item.name
                      ? "bg-blue-50 font-bold text-[#276ea5] dark:bg-blue-950/40 dark:text-sky-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>{item.name}</span>

                  <span className="font-mono text-[10px] text-slate-400">
                    {item.dial_code}
                  </span>
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-slate-400">
                No country found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

const ContactInformation = memo(function ContactInformation() {
  return (
    <div className="relative">
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#276ea5] dark:text-[#38bdf8]">
            <MessageCircle size={14} />
            Let's Connect
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            We would love to
            <span className="block text-[#276ea5] dark:text-[#38bdf8]">
              hear from you.
            </span>
          </h2>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Have an idea, project, or challenge? Talk with our team and let's
            turn it into a scalable digital solution.
          </p>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
          <a
            href="mailto:info@shilshatech.com"
            className="group flex items-center gap-4 py-4 transition-colors hover:text-[#276ea5]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#276ea5] dark:bg-blue-950/40 dark:text-[#38bdf8]">
              <Mail size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Email
              </span>

              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                info@shilshatech.com
              </span>
            </div>

            <ArrowUpRight
              size={15}
              className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="tel:+911204120113"
            className="group flex items-center gap-4 py-4 transition-colors hover:text-[#276ea5]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#276ea5] dark:bg-blue-950/40 dark:text-[#38bdf8]">
              <Phone size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Phone
              </span>

              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                +91 - 120- 412- 0113
              </span>
            </div>

            <ArrowUpRight
              size={15}
              className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <div className="flex items-start gap-4 py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#276ea5] dark:bg-blue-950/40 dark:text-[#38bdf8]">
              <MapPin size={17} />
            </div>

            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Office
              </span>

              <span className="text-sm font-semibold leading-relaxed text-slate-800 dark:text-slate-200">
                iThum Tower, Sector 62,
                <br />
                Noida, Uttar Pradesh 201301
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-b border-slate-200 pb-5 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Clock3 size={14} className="text-emerald-600" />

            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Mon - Fri · 9AM - 7PM IST
            </span>
          </div>

          <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available
          </span>
        </div>
      </div>
    </div>
  );
});

const InputField = ({ label, ...props }) => {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#276ea5] focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950/70 dark:text-white dark:hover:border-slate-600 dark:focus:bg-slate-950"
      />
    </div>
  );
};

const ContactForm = memo(function ContactForm({
  formData,
  loadingCountries,
  selectedCountry,
  countrySearch,
  isDropdownOpen,
  filteredCountries,
  onChange,
  onToggleCountry,
  onSearchCountry,
  onSelectCountry,
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-7">
      {/* Gradient accent */}
      <div className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl bg-linear-to-r from-[#276ea5] via-[#38bdf8] to-[#1d4ed8]" />

      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#276ea5] dark:text-[#38bdf8]">
            <Sparkles size={13} />
            Start a conversation
          </div>

          <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Tell us about your project
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Share your requirements and our specialists will get back to you
            shortly.
          </p>
        </div>

        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#276ea5] dark:bg-blue-950/40 dark:text-[#38bdf8] sm:flex">
          <Send size={17} />
        </div>
      </div>

      <form
        action="https://formsubmit.co/info@shilshatech.com"
        method="POST"
        className="space-y-5"
      >
        <input
          type="hidden"
          name="_subject"
          value="New Website Contact Form Submission"
        />

        <input type="hidden" name="_captcha" value="false" />

        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            required
            autoComplete="name"
            value={formData.name}
            onChange={onChange}
          />

          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            autoComplete="email"
            value={formData.email}
            onChange={onChange}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <CountrySelector
            loadingCountries={loadingCountries}
            selectedCountry={selectedCountry}
            countrySearch={countrySearch}
            isDropdownOpen={isDropdownOpen}
            filteredCountries={filteredCountries}
            onToggle={onToggleCountry}
            onSearch={onSearchCountry}
            onSelect={onSelectCountry}
          />

          <div>
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Phone Number
            </label>

            <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-all focus-within:border-[#276ea5] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950/70 dark:focus-within:bg-slate-950">
              <span className="flex items-center border-r border-slate-200 bg-slate-100 px-3 font-mono text-xs font-bold text-slate-500 dark:border-slate-700 dark:bg-slate-900">
                {formData.dialCode}
              </span>

              <input
                type="tel"
                name="phone"
                placeholder="98765 43210"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={onChange}
                className="w-full bg-transparent px-3.5 py-3 text-sm outline-none dark:text-white"
              />
            </div>
          </div>
        </div>

        <InputField
          label="Project Subject"
          type="text"
          name="subject"
          placeholder="App / Web Development"
          required
          value={formData.subject}
          onChange={onChange}
        />

        <div>
          <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Your Message
          </label>

          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project goals, scope, budget, and timeline..."
            required
            value={formData.message}
            onChange={onChange}
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#276ea5] focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950/70 dark:text-white dark:focus:bg-slate-950"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
            <ShieldCheck size={14} className="text-emerald-500" />
            Your information stays confidential.
          </div>

          <button
            type="submit"
            className="group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-[#276ea5] to-[#1d4ed8] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/30 active:translate-y-0"
          >
            Send Message
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </form>
    </div>
  );
});

const ContactUs = () => {
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    dialCode: "+91",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const controller = new AbortController();

    const fetchCountries = async () => {
      try {
        const response = await fetch(COUNTRY_API, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Country API failed");
        }

        const result = await response.json();

        if (!result.error && Array.isArray(result.data)) {
          const sorted = [...result.data].sort((a, b) =>
            a.name.localeCompare(b.name),
          );

          setCountries(sorted);

          const india =
            sorted.find(
              (country) =>
                country.code === "IN" || country.name.toLowerCase() === "india",
            ) || sorted[0];

          if (india) {
            setSelectedCountry(india);

            setFormData((prev) => ({
              ...prev,
              country: india.name,
              dialCode: india.dial_code,
            }));
          }
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingCountries(false);
        }
      }
    };

    fetchCountries();

    return () => controller.abort();
  }, []);

  const normalizedSearch = countrySearch.trim().toLowerCase();

  const filteredCountries = useMemo(() => {
    if (!normalizedSearch) return countries;

    return countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(normalizedSearch) ||
        country.dial_code.includes(normalizedSearch)
      );
    });
  }, [countries, normalizedSearch]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSelectCountry = useCallback((country) => {
    setSelectedCountry(country);

    setFormData((prev) => ({
      ...prev,
      country: country.name,
      dialCode: country.dial_code,
    }));

    setCountrySearch("");
    setIsDropdownOpen(false);
  }, []);

  const handleToggleCountry = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleSearchCountry = useCallback((event) => {
    setCountrySearch(event.target.value);
  }, []);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#f7faff] font-sans text-slate-900 dark:bg-[#050a12] dark:text-white">
        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-150 w-250 -translate-x-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(39,110,165,.16), rgba(56,189,248,.07), transparent 65%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-50 top-125 h-125 w-125 rounded-full bg-blue-500/5 blur-[120px]"
        />

        {/* ---------------------------------------------------------------- */}
        {/* Hero                                                              */}
        {/* ---------------------------------------------------------------- */}

        <section className="relative px-5 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid items-center gap-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-8">
                <motion.div
                  variants={fadeUp}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#276ea5] dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-sky-400"
                >
                  <Sparkles size={13} />
                  Let's build something great
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
                >
                  Let's turn your
                  <span className="block bg-linear-to-r from-[#276ea5] via-[#38bdf8] to-[#1d4ed8] bg-clip-text text-transparent">
                    idea into reality.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
                >
                  Tell us what you're building. Our product strategists,
                  designers, and engineers will help you create a digital
                  experience that drives real business growth.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 flex flex-wrap gap-2.5"
                >
                  {["Fast response", "Expert consultation", "Confidential"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-[11px] font-semibold text-slate-600 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
                      >
                        <CheckCircle2 size={13} className="text-emerald-500" />
                        {item}
                      </div>
                    ),
                  )}
                </motion.div>
              </div>

              {/* Hero Visual */}
              <motion.div
                variants={fadeUp}
                className="relative hidden lg:col-span-4 lg:block"
              >
                <div className="relative mx-auto h-64 w-64">
                  <div className="absolute inset-0 rounded-full border border-blue-200/60 dark:border-blue-900/50" />

                  <div className="absolute inset-6 rounded-full border border-dashed border-blue-300/60 dark:border-blue-800" />

                  <div className="absolute inset-12 flex items-center justify-center rounded-full bg-linear-to-br from-[#276ea5] to-[#1d4ed8] shadow-2xl shadow-blue-500/30">
                    <MessageCircle
                      size={58}
                      strokeWidth={1.5}
                      className="text-white"
                    />
                  </div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/60" />

                    <div className="absolute bottom-7 right-1 h-2.5 w-2.5 rounded-full bg-blue-600" />

                    <div className="absolute bottom-9 left-2 h-2 w-2 rounded-full bg-cyan-400" />
                  </motion.div>

                  <div className="absolute -right-3 top-7 rounded-xl border border-white/60 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90">
                    <div className="flex items-center gap-2">
                      <Zap size={13} className="text-amber-500" />
                      <span className="text-[11px] font-bold">Let's Talk</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 -left-7 rounded-xl border border-white/60 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90">
                    <div className="flex items-center gap-2">
                      <Users size={13} className="text-[#276ea5]" />
                      <span className="text-[11px] font-bold">Expert Team</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Main Contact Area                                                 */}
        {/* ---------------------------------------------------------------- */}

        <section className="relative px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-start gap-10 lg:grid-cols-12">
              {/* LEFT - No card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55 }}
                className="space-y-7 lg:col-span-5"
              >
                <ContactInformation />

                <LazyMap />
              </motion.div>

              {/* RIGHT - Card based form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55 }}
                className="lg:col-span-7"
              >
                <ContactForm
                  formData={formData}
                  loadingCountries={loadingCountries}
                  selectedCountry={selectedCountry}
                  countrySearch={countrySearch}
                  isDropdownOpen={isDropdownOpen}
                  filteredCountries={filteredCountries}
                  onChange={handleChange}
                  onToggleCountry={handleToggleCountry}
                  onSearchCountry={handleSearchCountry}
                  onSelectCountry={handleSelectCountry}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Trust Section - No cards                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-y border-slate-200/80 bg-white/50 px-5 py-12 dark:border-slate-800 dark:bg-slate-900/20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="grid divide-y divide-slate-200 dark:divide-slate-800 md:grid-cols-3 md:divide-x md:divide-y-0"
            >
              {[
                {
                  icon: Zap,
                  title: "Fast Communication",
                  text: "Get a quick response from our business and technical team.",
                },
                {
                  icon: ShieldCheck,
                  title: "Complete Confidentiality",
                  text: "Your project ideas and business information remain secure.",
                },
                {
                  icon: Users,
                  title: "Dedicated Experts",
                  text: "Connect directly with specialists who understand your goals.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="group px-0 py-5 md:px-7 md:py-2 first:md:pl-0 last:md:pr-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#276ea5] transition-transform group-hover:scale-110 dark:bg-blue-950/40 dark:text-[#38bdf8]">
                        <Icon size={17} />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default memo(ContactUs);

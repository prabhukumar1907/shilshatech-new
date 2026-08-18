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
  MapPin,
  Mail,
  Phone,
  Send,
  Sparkles,
  ArrowUpRight,
  Clock,
  MessageSquare,
  Globe,
  ChevronDown,
} from "lucide-react";

const brandTheme = {
  primaryBlue: "#276ea5",
  secondaryIndigo: "#1d4ed8",
  electricCyan: "#60a5fa",
};

const COUNTRY_API =
  "https://countriesnow.space/api/v0.1/countries/codes";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.494949419112!2d77.3783989695381!3d28.63036757560618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8a45d37eeb%3A0xebd3d070a044e5f9!2sShilsha%20Technologies!5e0!3m2!1sen!2sus!4v1704460082333!5m2!1sen!2sus";

const MAP_LINK =
  "https://maps.google.com/?q=Shilsha+Technologies+H-15+Sector+63+Noida";


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
        rootMargin: "300px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-lg dark:border-slate-800/80"
      style={{ minHeight: 210 }}
    >
      {shouldLoad ? (
        <iframe
          title="Shilsha Technologies Location Map"
          src={MAP_URL}
          width="100%"
          height="210"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block border-0 grayscale hover:grayscale-0 dark:invert dark:hue-rotate-180 dark:contrast-125 transition-all duration-700"
        />
      ) : (
        <div
          aria-hidden="true"
          className="h-52.5 w-full bg-slate-200/70 dark:bg-slate-800/70"
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(39,110,165,.12),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(29,78,216,.10),transparent_45%)]" />
        </div>
      )}

      <a
        href={MAP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-[#286b94] px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#215b7d]"
      >
        View on Maps

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 7h-10m10 0v10m0-10L7 17"
          />
        </svg>
      </a>
    </div>
  );
});

const CountrySelector = memo(function CountrySelector({
  countries,
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
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
        Country
      </label>

      <button
        type="button"
        onClick={onToggle}
        disabled={loadingCountries}
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
        className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#276ea5] dark:border-slate-800 dark:bg-[#060b13]/80 dark:text-white"
      >
        <span className="flex items-center gap-2 truncate">
          <Globe
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          />

          {loadingCountries ? (
            <span className="text-slate-400">
              Loading countries...
            </span>
          ) : selectedCountry ? (
            `${selectedCountry.name} (${selectedCountry.dial_code})`
          ) : (
            "Select Country"
          )}
        </span>

        <ChevronDown
          className="h-4 w-4 shrink-0 text-slate-400"
          aria-hidden="true"
        />
      </button>

      <input
        type="hidden"
        name="country"
        value={selectedCountry?.name || ""}
      />

      {isDropdownOpen && !loadingCountries && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 flex max-h-60 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
          <input
            type="text"
            placeholder="Search country or code..."
            value={countrySearch}
            onChange={onSearch}
            className="mb-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
            autoFocus
            aria-label="Search country"
          />

          <div
            className="custom-scrollbar flex-1 space-y-1 overflow-y-auto"
            role="listbox"
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.map((item) => (
                <button
                  key={`${item.code}-${item.name}`}
                  type="button"
                  onClick={() => onSelect(item)}
                  role="option"
                  aria-selected={
                    selectedCountry?.name === item.name
                  }
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors ${
                    selectedCountry?.name === item.name
                      ? "bg-blue-50 font-semibold text-[#276ea5] dark:bg-blue-950/40 dark:text-sky-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <span className="truncate">{item.name}</span>

                  <span className="ml-2 shrink-0 font-mono text-[11px] text-slate-400">
                    {item.dial_code}
                  </span>
                </button>
              ))
            ) : (
              <div className="p-3 text-center text-xs text-slate-400">
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
    <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none">
      <div>
        <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <MessageSquare
            className="h-5 w-5"
            style={{ color: brandTheme.electricCyan }}
            aria-hidden="true"
          />

          Contact Information
        </h3>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Reach out directly via email, phone, or stop by our office.
        </p>
      </div>

      <div className="space-y-4 pt-2">
        {/* Email */}
        <a
          href="mailto:Info@shilshatech.com"
          className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50 dark:border-slate-800/60 dark:bg-slate-800/30 dark:hover:border-slate-700 dark:hover:bg-slate-800/80"
        >
          <div className="flex items-center gap-4">
            <div
              className="shrink-0 rounded-xl p-3 text-white shadow-md"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
              }}
            >
              <Mail size={20} aria-hidden="true" />
            </div>

            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Email Us
              </span>

              <span className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-[#276ea5] dark:text-slate-200 dark:group-hover:text-sky-400">
                Info@shilshatech.com
              </span>
            </div>
          </div>

          <ArrowUpRight
            className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#276ea5] dark:group-hover:text-sky-400"
            aria-hidden="true"
          />
        </a>

        {/* Phone */}
        <a
          href="tel:+911204120113"
          className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50 dark:border-slate-800/60 dark:bg-slate-800/30 dark:hover:border-slate-700 dark:hover:bg-slate-800/80"
        >
          <div className="flex items-center gap-4">
            <div
              className="shrink-0 rounded-xl p-3 text-white shadow-md"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
              }}
            >
              <Phone size={20} aria-hidden="true" />
            </div>

            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Call Us
              </span>

              <span className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-[#276ea5] dark:text-slate-200 dark:group-hover:text-sky-400">
                +91 - 120- 412- 0113
              </span>
            </div>
          </div>

          <ArrowUpRight
            className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#276ea5] dark:group-hover:text-sky-400"
            aria-hidden="true"
          />
        </a>

        {/* Location */}
        <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800/60 dark:bg-slate-800/30">
          <div
            className="shrink-0 rounded-xl p-3 text-white shadow-md"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
            }}
          >
            <MapPin size={20} aria-hidden="true" />
          </div>

          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Location
            </span>

            <p className="mt-0.5 text-sm font-semibold leading-relaxed text-slate-800 dark:text-slate-200">
              Shilsha Technologies,
              <br />
              iThum Tower, Sector 62, Noida,
              <br />
              Uttar Pradesh 201301, INDIA
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-xs text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <Clock
            className="h-3.5 w-3.5 text-slate-400"
            aria-hidden="true"
          />
          Mon - Fri: 9AM - 7PM IST
        </span>

        <span className="font-medium text-emerald-600 dark:text-emerald-400">
          • Active Now
        </span>
      </div>
    </div>
  );
});

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
    <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none sm:p-12">
      <form
        action="https://formsubmit.co/info@shilshatech.com"
        method="POST"
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Send us a Message
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Fill out the form below and the team at Shilsha Technologies
            will reply shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400"
            >
              Your Name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              autoComplete="name"
              value={formData.name}
              onChange={onChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#276ea5] dark:border-slate-800 dark:bg-[#060b13]/80 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400"
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
              required
              autoComplete="email"
              value={formData.email}
              onChange={onChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#276ea5] dark:border-slate-800 dark:bg-[#060b13]/80 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CountrySelector
            countries={[]}
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
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400"
            >
              Phone Number
            </label>

            <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#276ea5] dark:border-slate-800 dark:bg-[#060b13]/80 dark:focus-within:ring-sky-400">
              <span className="shrink-0 border-r border-slate-200 bg-slate-100/70 px-3.5 py-3.5 font-mono text-sm font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                {formData.dialCode}
              </span>

              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="98765 43210"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={onChange}
                className="w-full bg-transparent px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white dark:placeholder-slate-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400"
          >
            Subject
          </label>

          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="App / Web Development"
            required
            value={formData.subject}
            onChange={onChange}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#276ea5] dark:border-slate-800 dark:bg-[#060b13]/80 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400"
          >
            Your Message
          </label>

          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Tell us about your project goals, scope, and timeline..."
            required
            value={formData.message}
            onChange={onChange}
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#276ea5] dark:border-slate-800 dark:bg-[#060b13]/80 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:opacity-95 active:scale-[0.98] sm:w-auto"
            style={{
              backgroundImage: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
            }}
          >
            <span>Send Message</span>

            <Send
              className="h-4 w-4"
              aria-hidden="true"
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

    const fetchCountryCodes = async () => {
      try {
        const response = await fetch(COUNTRY_API, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Country API failed: ${response.status}`,
          );
        }

        const result = await response.json();

        if (!result.error && Array.isArray(result.data)) {
          const sortedData = [...result.data].sort((a, b) =>
            a.name.localeCompare(b.name),
          );

          setCountries(sortedData);

          const defaultCountry =
            sortedData.find(
              (country) =>
                country.name.toLowerCase() === "india" ||
                country.code === "IN",
            ) || sortedData[0];

          if (defaultCountry) {
            setSelectedCountry(defaultCountry);

            setFormData((prev) => ({
              ...prev,
              country: defaultCountry.name,
              dialCode: defaultCountry.dial_code,
            }));
          }
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching countries:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingCountries(false);
        }
      }
    };

    fetchCountryCodes();

    return () => controller.abort();
  }, []);

  const normalizedSearch = countrySearch.trim().toLowerCase();

  const filteredCountries = useMemo(() => {
    if (!normalizedSearch) {
      return countries;
    }

    return countries.filter((item) => {
      const name = item.name.toLowerCase();

      return (
        name.includes(normalizedSearch) ||
        item.dial_code.includes(normalizedSearch)
      );
    });
  }, [countries, normalizedSearch]);

  const handleSelectCountry = useCallback((item) => {
    setSelectedCountry(item);

    setFormData((prev) => ({
      ...prev,
      country: item.name,
      dialCode: item.dial_code,
    }));

    setIsDropdownOpen(false);
    setCountrySearch("");
  }, []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleToggleCountry = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleSearchCountry = useCallback((event) => {
    setCountrySearch(event.target.value);
  }, []);

  return (
    <main
      id="main"
      className="relative min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-500 dark:bg-[#060b13] dark:text-slate-100"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-full max-w-7xl -translate-x-1/2 blur-[120px]"
        style={{
          opacity: 0.2,
          backgroundImage: `radial-gradient(ellipse at top, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo}, transparent)`,
        }}
      />

      <section className="relative px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-5xl space-y-6 py-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#276ea5] shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80 dark:text-sky-400"
          >
            <Sparkles
              size={14}
              style={{ color: brandTheme.electricCyan }}
              className="animate-pulse"
              aria-hidden="true"
            />

            <span>Let’s Build Something Great</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white"
          >
            Get in touch with{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${brandTheme.electricCyan}, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
              }}
            >
              Shilsha Technologies
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400"
          >
            Contact Shilsha Technologies for web and mobile app development
            services. We create innovative digital solutions to elevate your
            business.
          </motion.p>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 lg:col-span-5"
            >
              <ContactInformation />

              <LazyMap />
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
    </main>
  );
};

export default memo(ContactUs);
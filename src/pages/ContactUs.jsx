import React, { useState, useEffect, useMemo } from "react";
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
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/codes",
        );
        const result = await response.json();

        if (!result.error && result.data) {
          const sortedData = result.data.sort((a, b) =>
            a.name.localeCompare(b.name),
          );
          setCountries(sortedData);

          const defaultCountry =
            sortedData.find(
              (c) => c.name.toLowerCase() === "india" || c.code === "IN",
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
        console.error("Error fetching countries:", error);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountryCodes();
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter(
      (item) =>
        item.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        item.dial_code.includes(countrySearch),
    );
  }, [countries, countrySearch]);

  const handleSelectCountry = (item) => {
    setSelectedCountry(item);
    setFormData((prev) => ({
      ...prev,
      country: item.name,
      dialCode: item.dial_code,
    }));
    setIsDropdownOpen(false);
    setCountrySearch("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main
      id="main"
      className="font-sans min-h-screen transition-colors duration-500 bg-slate-50 text-slate-900 dark:bg-[#060b13] dark:text-slate-100 overflow-hidden relative"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 blur-[120px] pointer-events-none opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse at top, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo}, transparent)`,
        }}
      />

      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl py-6 mx-auto text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-wide uppercase bg-blue-50 border-blue-200 text-[#276ea5] shadow-sm backdrop-blur-md dark:bg-slate-900/80 dark:border-slate-800 dark:text-sky-400"
          >
            <Sparkles
              size={14}
              style={{ color: brandTheme.electricCyan }}
              className="animate-pulse"
            />
            <span>Let’s Build Something Great</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
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
            className="text-base sm:text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed font-normal"
          >
            Contact Shilsha Technologies for web and mobile app development
            services. We create innovative digital solutions to elevate your
            business.
          </motion.p>
        </div>
      </section>

      {/* ======= Main Content Grid ======= */}
      <section
        id="contact"
        className="pb-24 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Info & Location */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="p-8 rounded-3xl border bg-white/70 backdrop-blur-2xl border-slate-200/80 shadow-xl shadow-slate-200/40 dark:bg-slate-900/60 dark:border-slate-800/80 dark:shadow-none space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare
                      className="w-5 h-5"
                      style={{ color: brandTheme.electricCyan }}
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
                    className="group flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300 dark:border-slate-800/60 dark:bg-slate-800/30 dark:hover:bg-slate-800/80 dark:hover:border-slate-700"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-xl text-white shadow-md shrink-0"
                        style={{
                          backgroundImage: `linear-gradient(to bottom right, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
                        }}
                      >
                        <Mail size={20} />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Email Us
                        </span>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#276ea5] dark:group-hover:text-sky-400 transition-colors">
                          Info@shilshatech.com
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#276ea5] dark:group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+911204120113"
                    className="group flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300 dark:border-slate-800/60 dark:bg-slate-800/30 dark:hover:bg-slate-800/80 dark:hover:border-slate-700"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-xl text-white shadow-md shrink-0"
                        style={{
                          backgroundImage: `linear-gradient(to bottom right, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
                        }}
                      >
                        <Phone size={20} />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Call Us
                        </span>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#276ea5] dark:group-hover:text-sky-400 transition-colors">
                          +91 - 120- 412- 0113
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#276ea5] dark:group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Office Location */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 dark:border-slate-800/60 dark:bg-slate-800/30">
                    <div
                      className="p-3 rounded-xl text-white shadow-md shrink-0"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
                      }}
                    >
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Location
                      </span>
                      <p className="mt-0.5 text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                        Shilsha Technologies, <br />
                        iThum Tower, Sector 62, Noida, <br />
                        Uttar Pradesh 201301, INDIA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> Mon - Fri:
                    9AM - 7PM IST
                  </span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    • Active Now
                  </span>
                </div>
              </div>

              {/* Map Box */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-lg dark:border-slate-800/80">
                <iframe
                  title="Shilsha Technologies Location Map"
                  style={{ border: 0, width: "100%", height: "210px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.494949419112!2d77.3783989695381!3d28.63036757560618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8a45d37eeb%3A0xebd3d070a044e5f9!2sShilsha%20Technologies!5e0!3m2!1sen!2sus!4v1704460082333!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  className="grayscale hover:grayscale-0 dark:invert dark:hue-rotate-180 dark:contrast-125 transition-all duration-700"
                />

                {/* View on Google Maps */}
                <a
                  href="https://maps.google.com/?q=Shilsha+Technologies+H-15+Sector+63+Noida"
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
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 7h-10m10 0v10m0-10L7 17"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Contact Form with API Country Selection */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 p-8 sm:p-12 rounded-3xl border bg-white/80 backdrop-blur-2xl border-slate-200/80 shadow-2xl shadow-slate-200/50 dark:bg-slate-900/60 dark:border-slate-800/80 dark:shadow-none"
            >
              <form
                action="https://formsubmit.co/info@shilshatech.com"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Send us a Message
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Fill out the form below and the team at Shilsha Technologies
                    will reply shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-2xl text-sm transition-all duration-200 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#276ea5] focus:bg-white dark:bg-[#060b13]/80 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:ring-sky-400 dark:focus:border-sky-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-2xl text-sm transition-all duration-200 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#276ea5] focus:bg-white dark:bg-[#060b13]/80 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:ring-sky-400 dark:focus:border-sky-400"
                    />
                  </div>
                </div>

                {/* ======= Country Selection & Phone Input (API Integrated) ======= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Custom Searchable Country Select */}
                  <div className="relative">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Country
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      disabled={loadingCountries}
                      className="w-full px-4 py-3.5 rounded-2xl text-sm flex items-center justify-between transition-all duration-200 bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#276ea5] dark:bg-[#060b13]/80 dark:border-slate-800 dark:text-white"
                    >
                      <span className="flex items-center gap-2 truncate">
                        <Globe className="w-4 h-4 text-slate-400 shrink-0" />
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
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    </button>

                    {/* Hidden input for form submission */}
                    <input
                      type="hidden"
                      name="country"
                      value={formData.country}
                    />

                    {/* Dropdown Menu */}
                    {isDropdownOpen && !loadingCountries && (
                      <div className="absolute left-0 right-0 top-full mt-2 z-50 p-2 rounded-2xl border bg-white border-slate-200 shadow-2xl dark:bg-slate-900 dark:border-slate-800 max-h-60 overflow-hidden flex flex-col">
                        <input
                          type="text"
                          placeholder="Search country or code..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none dark:bg-slate-950 dark:border-slate-800 dark:text-white mb-2"
                          autoFocus
                        />
                        <div className="overflow-y-auto flex-1 space-y-1 custom-scrollbar">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((item) => (
                              <button
                                key={`${item.code}-${item.name}`}
                                type="button"
                                onClick={() => handleSelectCountry(item)}
                                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                                  selectedCountry?.name === item.name
                                    ? "bg-blue-50 text-[#276ea5] font-semibold dark:bg-blue-950/40 dark:text-sky-400"
                                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
                                }`}
                              >
                                <span className="truncate">{item.name}</span>
                                <span className="text-slate-400 text-[11px] font-mono shrink-0 ml-2">
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

                  {/* Phone Input with Dynamic Dial Code Prefix */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[#276ea5] focus-within:bg-white dark:bg-[#060b13]/80 dark:border-slate-800 dark:focus-within:ring-sky-400 overflow-hidden">
                      <span className="px-3.5 py-3.5 text-sm font-semibold border-r border-slate-200 text-slate-500 bg-slate-100/70 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 shrink-0 font-mono">
                        {formData.dialCode}
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="98765 43210"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 text-sm bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white dark:placeholder-slate-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl text-sm transition-all duration-200 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#276ea5] focus:bg-white dark:bg-[#060b13]/80 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:ring-sky-400 dark:focus:border-sky-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl text-sm transition-all duration-200 resize-none bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#276ea5] focus:bg-white dark:bg-[#060b13]/80 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:ring-sky-400 dark:focus:border-sky-400"
                  />
                </div>

                {/* Submit Button Gradient matching Hero CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm text-white hover:opacity-95 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${brandTheme.primaryBlue}, ${brandTheme.secondaryIndigo})`,
                    }}
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

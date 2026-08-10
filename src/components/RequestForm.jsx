import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const RequestForm = ({
  title = "Request Expert",
  subtitle = "Fill out the form below and get connected with matched developers in less than 24 hours.",
  badgeText = "Quick Hire",
  buttonText = "Submit Hiring Request",
  textareaPlaceholder = "Tell us about your tech stack and hiring needs...",
  theme = { primary: "#286b94", secondary: "#1e3a8a" },
  className = "",
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`rounded-3xl border p-8 border-slate-200/80 bg-white/90 shadow-2xl shadow-slate-200/50 dark:border-blue-500/30 dark:bg-[#0a1325]/90 backdrop-blur-2xl relative ${className}`}
    >
      {badgeText && (
        <div
          className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg"
          style={{ background: theme.primary }}
        >
          {badgeText}
        </div>
      )}

      <h3 className="text-xl font-extrabold mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
        {subtitle}
      </p>

      {formSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-12 text-center space-y-3"
        >
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
            <CheckCircle2 size={28} />
          </div>
          <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">Request Received!</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">Our technical team will reach out to you shortly.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">Your Full Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-blue-500 dark:border-blue-500/20 dark:bg-[#060c17] dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">Business Email</label>
            <input
              type="email"
              required
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-blue-500 dark:border-blue-500/20 dark:bg-[#060c17] dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-blue-500 dark:border-blue-500/20 dark:bg-[#060c17] dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">Project Requirements</label>
            <textarea
              rows={3}
              required
              placeholder={textareaPlaceholder}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-blue-500 dark:border-blue-500/20 dark:bg-[#060c17] dark:text-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full group inline-flex items-center justify-center gap-2.5 rounded-xl py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-[1.02]"
            style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
          >
            <span>{buttonText}</span>
            <Send size={15} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default RequestForm;
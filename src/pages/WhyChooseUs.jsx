import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-(--bg) text-(--text)">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            Why <span className="text-[#276ea5]">Choose Us</span>
          </h2>

          <p className="mt-4 text-(--muted)">
            We don’t just build apps — we build scalable digital products that grow with your business.
          </p>

          <ul className="mt-8 space-y-4 text-(--muted)">
            <li>✔ Fast & scalable architecture</li>
            <li>✔ Modern UI/UX design system</li>
            <li>✔ Clean, production-ready code</li>
            <li>✔ Dedicated development support</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-(--border) bg-(--card) p-8"
        >
          <div className="h-40 rounded-2xl bg-linear-to-r from-[#276ea5]/20 to-[#4F46E5]/20" />
          <div className="mt-6 space-y-3">
            <div className="h-4 w-3/4 bg-black/5 dark:bg-white/10 rounded" />
            <div className="h-4 w-2/3 bg-black/5 dark:bg-white/10 rounded" />
            <div className="h-4 w-1/2 bg-black/5 dark:bg-white/10 rounded" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
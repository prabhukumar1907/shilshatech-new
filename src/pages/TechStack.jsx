import { motion } from "framer-motion";
import { Smartphone, Globe, Server, Cloud, Cpu } from "lucide-react";

const data = [
  {
    title: "Mobility",
    icon: Smartphone,
    items: ["Android", "iOS", "React Native", "Flutter", "Ionic", "Xamarin"],
  },
  {
    title: "Frontend",
    icon: Globe,
    items: ["HTML", "CSS", "JavaScript", "AngularJS", "ReactJS", "Vue.js"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Java", ".NET", "PHP", "Node.js", "Python", "Laravel"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Azure", "GCP", "DevOps"],
  },
  {
    title: "AI / ML & Blockchain",
    icon: Cpu,
    items: [
      "AI / ML",
      "Chatbot",
      "TensorFlow",
      "Python AI",
      "Ethereum",
      "Hyperledger",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-28 px-6 bg-(--bg) text-(--text) relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 -top-50 h-125 w-125 -translate-x-1/2 rounded-full bg-[#276ea5]/20 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Technology <span className="text-[#276ea5]">Stack</span>
          </h2>

          <p className="mt-5 text-(--muted) max-w-3xl mx-auto">
            We deliver scalable digital solutions across mobile, web, cloud, and
            AI systems.
          </p>
        </div>

        {/* COLUMN GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {data.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-(--border)
              bg-(--card) backdrop-blur-xl p-5 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-[#276ea5]/10 to-[#4F46E5]/10 blur-xl -z-10" />

              {/* Title */}
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="text-[#276ea5]" size={18} />
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  {section.title}
                </h3>
              </div>

              {/* Tech List */}
              <div className="space-y-3">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-(--muted)
                    hover:text-(--text) transition"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#276ea5]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

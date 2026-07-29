import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center rounded-3xl p-12 border border-(--border) bg-linear-to-r from-[#276ea5]/10 to-[#4F46E5]/10">

        <h2 className="text-4xl font-bold">
          Ready to build your next big idea?
        </h2>

        <p className="mt-4 text-(--muted)">
          Let’s turn your vision into a high-performance digital product.
        </p>

        <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-linear-to-r from-[#276ea5] to-[#4F46E5] hover:-translate-y-1 transition">
          Get Free Consultation
          <ArrowUpRight size={18} />
        </button>

      </div>
    </section>
  );
}
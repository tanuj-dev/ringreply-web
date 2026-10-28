import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import { solutions } from "./data";

export const metadata: Metadata = {
  title: "Solutions — AI Receptionist for Every Small Business | RingReply",
  description:
    "See how RingReply's AI receptionist answers calls and WhatsApp for clinics, salons, coaching institutes and more — 24/7, in Hindi and English.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main id="main-content" className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Solutions</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              An AI receptionist built for <span className="gradient-text">your business</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              RingReply answers calls and WhatsApp messages, books appointments and answers questions — tuned to how your industry works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="glass card-hover rounded-2xl p-8 block">
                <p className="text-indigo-400 text-xs font-medium uppercase tracking-widest mb-3">{s.eyebrow}</p>
                <h2 className="text-xl font-bold mb-3">{s.h1}</h2>
                <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

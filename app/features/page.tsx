import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — RingReply AI Receptionist for Small Business",
  description: "Explore every feature of RingReply — 24/7 AI call answering, WhatsApp booking bot, Hindi and English support, SMS confirmations, cancellation handling, and booking dashboard. AI receptionist for clinics, salons, gyms and hotels in India and US.",
  keywords: "AI receptionist features, WhatsApp booking bot India, 24/7 call answering India, Hindi English AI receptionist, SMS booking confirmation, automated cancellation handling, virtual receptionist features India, AI booking dashboard",
};

const features = [
  {
    icon: "🕐",
    title: "24/7 Availability",
    desc: "Never miss a call or message — nights, weekends, holidays included. The AI is always on so you never have to be.",
    tag: "Core",
  },
  {
    icon: "💬",
    title: "WhatsApp Booking Bot",
    desc: "Customers text your WhatsApp number and the AI books their appointment automatically — no call needed.",
    tag: "Core",
  },
  {
    icon: "🇮🇳",
    title: "Hindi + English",
    desc: "Callers and customers can speak or type in Hindi, English, or mix both freely. The AI adapts to each person.",
    tag: "Core",
  },
  {
    icon: "📅",
    title: "Smart Booking",
    desc: "Checks real-time availability and books slots instantly on both call and WhatsApp — no double-bookings.",
    tag: "Core",
  },
  {
    icon: "📲",
    title: "SMS Confirmations",
    desc: "Auto-sends booking details to both customer and owner after every booking. No manual follow-up needed.",
    tag: "Communication",
  },
  {
    icon: "❌",
    title: "Cancellations",
    desc: "Handles cancellation requests on call or WhatsApp and frees up the slot automatically.",
    tag: "Communication",
  },
  {
    icon: "🔄",
    title: "Reschedule Flow",
    desc: "Callers can request a reschedule. The AI cancels the old slot and books a new one in the same conversation.",
    tag: "Communication",
  },
  {
    icon: "🚨",
    title: "Urgency Detection",
    desc: "Detects emergencies and directs callers to the appropriate contact or action — not just another booking.",
    tag: "Intelligence",
  },
  {
    icon: "🏢",
    title: "Any Business Type",
    desc: "Clinics, salons, gyms, hotels — fully customizable name, services, hours, and language per business.",
    tag: "Intelligence",
  },
  {
    icon: "📊",
    title: "Booking Dashboard",
    desc: "View all appointments from calls and WhatsApp in one clean admin dashboard. Manage, confirm, or cancel manually.",
    tag: "Management",
  },
  {
    icon: "📅",
    title: "Schedule Manager",
    desc: "Set your open hours, blocked days, and service durations. The AI respects your calendar automatically.",
    tag: "Management",
  },
  {
    icon: "🔊",
    title: "Call Mode Settings",
    desc: "Configure voice, language preference, greeting message, and response style per business.",
    tag: "Management",
  },
];

const tags = ["All", "Core", "Communication", "Intelligence", "Management"];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Features</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Everything your{" "}
              <span className="gradient-text">receptionist</span> does
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              One AI that handles calls, WhatsApp, bookings, cancellations, and confirmations — so you can focus on running your business.
            </p>
          </div>

          {/* Tag pills — visual grouping only, no JS filter needed */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tags.map((tag) => (
              <span
                key={tag}
                className="glass rounded-full px-4 py-1.5 text-sm text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="glass card-hover rounded-xl p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{f.icon}</span>
                  <span className="text-xs text-indigo-400 font-medium bg-indigo-500/10 px-2.5 py-1 rounded-full">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-base">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 glass glow-indigo rounded-2xl p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to put these to work?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Get RingReply live for your business today. Setup takes under 5 minutes.
            </p>
            <a
              href={`https://wa.me/919319801618?text=${encodeURIComponent("Hi! I'm interested in RingReply for my business. Can you tell me more?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-full text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z"/>
              </svg>
              Get Started on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

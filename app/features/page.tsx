import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Features — RingReply AI Receptionist for Small Business",
  description: "Explore every feature of RingReply — 24/7 AI call answering, WhatsApp booking bot, Hindi and English support, SMS confirmations, cancellation handling, and booking dashboard. AI receptionist for clinics, salons, gyms and hotels in India and US.",
  keywords: "AI receptionist features, WhatsApp booking bot India, 24/7 call answering India, Hindi English AI receptionist, SMS booking confirmation, automated cancellation handling, virtual receptionist features India, AI booking dashboard",
};

const tagColor: Record<string, string> = {
  Core: "text-indigo-400 bg-indigo-500/10",
  Communication: "text-blue-400 bg-blue-500/10",
  Intelligence: "text-purple-400 bg-purple-500/10",
  Management: "text-slate-400 bg-slate-500/10",
};

const iconWrap: Record<string, string> = {
  Core: "bg-indigo-500/12 text-indigo-400",
  Communication: "bg-blue-500/12 text-blue-400",
  Intelligence: "bg-purple-500/12 text-purple-400",
  Management: "bg-slate-500/12 text-slate-400",
};

function Icon({ tag, children }: { tag: string; children: ReactNode }) {
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconWrap[tag]}`}>
      {children}
    </div>
  );
}

const features: { tag: string; title: string; desc: string; svg: ReactNode }[] = [
  {
    tag: "Core",
    title: "24/7 Availability",
    desc: "Never miss a call or message — nights, weekends, holidays included. The AI is always on so you never have to be.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    tag: "Core",
    title: "WhatsApp Booking Bot",
    desc: "Customers text your WhatsApp number and the AI books their appointment automatically — no call needed.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    tag: "Core",
    title: "Hindi + English",
    desc: "Callers and customers can speak or type in Hindi, English, or mix both freely. The AI adapts to each person.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    tag: "Core",
    title: "Smart Booking",
    desc: "Checks real-time availability and books slots instantly on both call and WhatsApp — no double-bookings.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    tag: "Communication",
    title: "SMS Confirmations",
    desc: "Auto-sends booking details to both customer and owner after every booking. No manual follow-up needed.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    tag: "Communication",
    title: "Cancellations",
    desc: "Handles cancellation requests on call or WhatsApp and frees up the slot automatically.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    tag: "Communication",
    title: "Reschedule Flow",
    desc: "Callers can request a reschedule. The AI cancels the old slot and books a new one in the same conversation.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    tag: "Intelligence",
    title: "Urgency Detection",
    desc: "Detects emergencies and directs callers to the appropriate contact or action — not just another booking.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    tag: "Intelligence",
    title: "Any Business Type",
    desc: "Clinics, salons, gyms, hotels — fully customizable name, services, hours, and language per business.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    tag: "Management",
    title: "Booking Dashboard",
    desc: "View all appointments from calls and WhatsApp in one clean admin dashboard. Manage, confirm, or cancel manually.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    tag: "Management",
    title: "Schedule Manager",
    desc: "Set your open hours, blocked days, and service durations. The AI respects your calendar automatically.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    tag: "Management",
    title: "Call Mode Settings",
    desc: "Configure voice, language preference, greeting message, and response style per business.",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
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

          {/* Tag pills */}
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
                  <Icon tag={f.tag}>{f.svg}</Icon>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColor[f.tag]}`}>
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

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — RingReply AI Receptionist India",
  description: "See how RingReply's AI receptionist answers calls and WhatsApp messages to book appointments for your business in 3 simple steps. Works on Airtel, Jio, Vi — no app needed. Perfect for clinics, salons and gyms in India.",
  keywords: "how AI receptionist works India, call forwarding AI, automated appointment booking India, virtual receptionist setup, AI call answering India, WhatsApp booking bot setup, missed call solution India",
};

function IconForward() {
  return (
    <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
      <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
  );
}

function IconAI() {
  return (
    <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
      <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
  );
}

function IconConfirmed() {
  return (
    <div className="w-14 h-14 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center">
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  );
}

const steps = [
  {
    step: "01",
    Icon: IconForward,
    title: "Forward your calls",
    desc: "We set it up for you. After you sign up, we'll send you the exact one-line forwarding code for your carrier (Airtel, Jio, Vi, or any US network). You type it once in your dialer — done in under a minute. No app, no hardware, nothing to install.",
    detail: [
      "Works on Airtel, Jio, Vi, BSNL and any US carrier",
      "We send you the exact code after signup — nothing to figure out",
      "Turn it off anytime with one code from your dialer",
    ],
  },
  {
    step: "02",
    Icon: IconAI,
    title: "AI answers instantly",
    desc: "Every call is answered within 2 rings. The AI greets your customers by your business name, understands what they need — in Hindi or English — and handles the full conversation naturally. No hold music, no missed calls.",
    detail: [
      "Understands natural speech in Hindi, English, or mixed",
      "Checks real-time availability before booking",
      "Detects urgency and handles edge cases gracefully",
    ],
  },
  {
    step: "03",
    Icon: IconConfirmed,
    title: "Bookings confirmed",
    desc: "The appointment is saved to your dashboard the moment the call ends. Your customer gets an SMS confirmation. You get one too. Everything is logged — no manual entry, no follow-up needed.",
    detail: [
      "Instant SMS to both owner and customer",
      "Full booking details saved to your dashboard",
      "Cancellations and reschedules handled the same way",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">How it works</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Up and running in{" "}
              <span className="gradient-text">3 simple steps</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              No app downloads, no hardware, no IT setup. If you have a phone, you're ready to go.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="glass card-hover rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-3">
                  <s.Icon />
                  <span className="text-indigo-400 text-sm font-mono font-bold">{s.step}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{s.title}</h2>
                  <p className="text-white/60 text-base leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.detail.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-white/50">
                        <svg className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp channel callout */}
          <div className="mt-16 glass glow-indigo rounded-2xl p-8 text-center">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Also works on WhatsApp</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Same flow, no phone call needed
            </h3>
            <p className="text-white/50 max-w-xl mx-auto mb-6">
              Customers can text your WhatsApp number. The same AI handles the entire booking conversation — in Hindi or English — and saves it to your dashboard.
            </p>
            <a
              href={`https://wa.me/919319801618?text=${encodeURIComponent("Hi! I'm interested in RingReply for my business. Can you tell me more?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z"/>
              </svg>
              Try it on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

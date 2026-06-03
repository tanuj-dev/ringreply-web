import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — RingReply",
  description: "See how RingReply's AI receptionist answers calls and WhatsApp messages to book appointments for your business in 3 simple steps.",
};

const steps = [
  {
    step: "01",
    icon: "📞",
    title: "Forward your calls",
    desc: "Simply dial *21* followed by your RingReply number from your phone. Takes 10 seconds. No app, no hardware — works on any phone plan.",
    detail: [
      "Works with any Indian or US carrier",
      "Conditional forwarding — only when you're busy or unreachable",
      "Can be turned on/off anytime from your phone",
    ],
  },
  {
    step: "02",
    icon: "🤖",
    title: "AI answers instantly",
    desc: "Every call is answered within 2 rings. The AI greets callers in English or Hindi and handles the entire conversation naturally — no scripts, no hold music.",
    detail: [
      "Understands natural speech in Hindi, English, or mixed",
      "Checks real-time availability before booking",
      "Detects urgency and handles edge cases gracefully",
    ],
  },
  {
    step: "03",
    icon: "✅",
    title: "Bookings confirmed",
    desc: "Appointments are saved automatically and both you and your customer get an SMS confirmation instantly. Everything is logged in your dashboard.",
    detail: [
      "Instant SMS to both owner and customer",
      "Full booking details saved to your dashboard",
      "Cancellations and reschedules handled the same way",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
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
                className={`glass card-hover rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-3">
                  <span className="text-5xl">{s.icon}</span>
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

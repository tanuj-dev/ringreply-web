import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — RingReply AI Receptionist India ₹2,999/mo",
  description: "Simple flat pricing for RingReply's AI receptionist. India plan at ₹2,999/month — cheaper than a human receptionist. US plan at $49/month. No per-call fees, no hidden charges, cancel anytime. Affordable AI receptionist for small business India.",
  keywords: "AI receptionist price India, affordable virtual receptionist India, AI receptionist 2999 per month, cheap call answering service India, small business AI receptionist cost, virtual receptionist pricing India",
};

const indiaFeatures = [
  "Unlimited calls answered",
  "WhatsApp booking bot included",
  "Hindi & English bilingual AI",
  "SMS confirmations",
  "Booking dashboard",
  "Cancellation handling",
  "Reschedule flow",
  "Schedule manager",
];

const usFeatures = [
  "Unlimited calls answered",
  "WhatsApp booking bot included",
  "Natural English AI voice",
  "SMS confirmations",
  "Booking dashboard",
  "Cancellation handling",
  "Reschedule flow",
  "Schedule manager",
];

const faqs = [
  {
    q: "Is there a per-call or per-minute charge?",
    a: "No. You pay one flat monthly fee — unlimited calls and WhatsApp messages are included.",
  },
  {
    q: "What happens if I'm already on a call?",
    a: "Call forwarding is conditional — it only kicks in when you're busy or unreachable. You always take priority.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts or lock-ins. Cancel anytime and your number goes back to normal.",
  },
  {
    q: "Does it work with my existing phone number?",
    a: "Yes. You forward calls from your existing number to your RingReply number. Customers always call your number — nothing changes for them.",
  },
  {
    q: "How long does setup take?",
    a: "Under 5 minutes. We configure everything and walk you through the one-time call forwarding step.",
  },
  {
    q: "Can I use it for multiple business locations?",
    a: "Each location needs its own plan and number. Contact us for multi-location pricing.",
  },
];

export default function PricingPage() {
  const waBase = "https://wa.me/919319801618?text=";

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Pricing</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Simple,{" "}
              <span className="gradient-text">flat pricing</span>
            </h1>
            <p className="text-white/40 text-lg">No per-call fees. No hidden charges. Cancel anytime.</p>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">

            {/* India Plan */}
            <div className="glass rounded-2xl p-8 border border-white/08 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🇮🇳</span>
                <span className="text-white/60 text-sm">India Plan</span>
              </div>
              <p className="text-5xl font-bold mb-1">
                ₹2,999
                <span className="text-white/40 text-lg font-normal">/mo</span>
              </p>
              <p className="text-white/40 text-sm mb-8">Hindi + English support included</p>

              <ul className="space-y-3 mb-10 flex-1">
                {indiaFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={waBase + encodeURIComponent("Hi! I want to get the India plan for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-full w-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z"/>
                </svg>
                Get Started
              </a>
            </div>

            {/* US Plan */}
            <div className="rounded-2xl p-8 border border-indigo-500/40 bg-indigo-500/05 relative overflow-hidden flex flex-col">
              <div className="absolute top-4 right-4 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white/60 text-sm">US Plan</span>
              </div>
              <p className="text-5xl font-bold mb-1">
                $49
                <span className="text-white/40 text-lg font-normal">/mo</span>
              </p>
              <p className="text-white/40 text-sm mb-8">English — works with any US business</p>

              <ul className="space-y-3 mb-10 flex-1">
                {usFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={waBase + encodeURIComponent("Hi! I want to get the US plan for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-full w-full"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass rounded-xl p-6">
                  <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass glow-indigo rounded-2xl p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Chat with us on WhatsApp — we'll help you pick the right plan and get you live today.
            </p>
            <a
              href={waBase + encodeURIComponent("Hi! I have some questions about RingReply pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-full text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

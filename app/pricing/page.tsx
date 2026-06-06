import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import PayButton from "../components/PayButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — RingReply AI Receptionist India ₹2,999/mo",
  description: "Simple flat pricing for RingReply's AI receptionist. India plan at ₹2,999/month — cheaper than a human receptionist. No per-call fees, no hidden charges, cancel anytime.",
  keywords: "AI receptionist price India, affordable virtual receptionist India, AI receptionist 2999 per month, cheap call answering service India, small business AI receptionist cost, virtual receptionist pricing India",
};

const plans: {
  name: string;
  planId: "starter" | "growth" | "pro";
  price: string;
  period: string;
  annual: string;
  desc: string;
  popular: boolean;
  features: string[];
}[] = [
  {
    name: "Starter",
    planId: "starter",
    price: "₹2,999",
    period: "/mo",
    annual: "₹29,990/yr — 2 months free",
    desc: "For solo operators and single-location businesses ready to stop losing customers.",
    popular: false,
    features: [
      "1 business location",
      "Up to 300 calls/month",
      "AI answers calls 24/7",
      "Hindi & English bilingual AI",
      "SMS confirmations to customers",
      "Email alerts to owner",
      "Booking dashboard",
      "Free setup by our team",
    ],
  },
  {
    name: "Growth",
    planId: "growth",
    price: "₹4,999",
    period: "/mo",
    annual: "₹49,990/yr — 2 months free",
    desc: "For growing businesses with high call volume, WhatsApp bookings, and real revenue on every call.",
    popular: true,
    features: [
      "Up to 3 business locations",
      "Up to 1,000 calls/month",
      "AI answers calls 24/7",
      "Hindi & English bilingual AI",
      "WhatsApp booking bot included",
      "SMS + email confirmations",
      "Cancellation & reschedule flow",
      "Priority support",
      "Free setup by our team",
    ],
  },
  {
    name: "Pro",
    planId: "pro",
    price: "₹6,999",
    period: "/mo",
    annual: "₹69,990/yr — 2 months free",
    desc: "For multi-location operations and chains where every missed call is serious money.",
    popular: false,
    features: [
      "Unlimited locations",
      "Unlimited calls",
      "AI answers calls 24/7",
      "Hindi & English bilingual AI",
      "WhatsApp on existing number",
      "SMS + email confirmations",
      "Cancellation & reschedule flow",
      "Dedicated account manager",
      "Custom AI script for your business",
      "Free setup by our team",
    ],
  },
];

const faqs = [
  {
    q: "Is there a per-call or per-minute charge?",
    a: "No. You pay one flat monthly fee — all calls are included in your plan limit.",
  },
  {
    q: "What happens if I'm already on a call?",
    a: "Call forwarding is conditional — it only kicks in when you're busy or unreachable. You always take priority.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no lock-ins. Cancel anytime and your number goes back to normal immediately.",
  },
  {
    q: "Does it work with my existing phone number?",
    a: "Yes. You forward calls from your existing number. Customers always call your same number — nothing changes for them.",
  },
  {
    q: "How long does setup take?",
    a: "Under 5 minutes. We configure everything and walk you through the one-time call forwarding step.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, anytime. Just message us on WhatsApp and we'll switch your plan immediately.",
  },
];

const WA_BASE = "https://wa.me/919319801618?text=";

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z" />
  </svg>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Pricing</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Pay for results,{" "}
              <span className="gradient-text">not promises</span>
            </h1>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              One flat fee covers your entire month. No per-call fees, no hidden charges.
            </p>
          </div>

          {/* Trial badge */}
          <div className="flex justify-center mb-16">
            <div className="glass rounded-full px-5 py-2 text-sm text-white/50 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              7-day free trial &nbsp;·&nbsp; Full setup included &nbsp;·&nbsp; Cancel anytime
            </div>
          </div>

          {/* Plans grid */}
          <div className="grid md:grid-cols-3 gap-0 md:gap-0 items-stretch mb-24">

            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 md:p-10 transition-all
                  ${plan.popular
                    ? "bg-white/[0.07] border border-indigo-500/50 md:-my-4 md:py-14 rounded-2xl z-10 shadow-2xl shadow-indigo-500/20"
                    : i === 0
                      ? "glass border border-white/08 rounded-l-2xl rounded-r-none md:rounded-l-2xl md:rounded-r-none border-r-0"
                      : "glass border border-white/08 rounded-r-2xl rounded-l-none md:rounded-r-2xl md:rounded-l-none border-l-0"
                  }
                `}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${plan.popular ? "text-indigo-400" : "text-white/40"}`}>
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mb-1">
                  <span className={`text-5xl md:text-6xl font-bold ${plan.popular ? "text-white" : "text-white/90"}`}>
                    {plan.price}
                  </span>
                  <span className="text-white/40 text-lg font-normal">{plan.period}</span>
                </div>

                {/* Annual */}
                <p className={`text-sm mb-5 ${plan.popular ? "text-indigo-400" : "text-white/30"}`}>
                  or {plan.annual}
                </p>

                {/* Divider */}
                <div className={`h-px mb-6 ${plan.popular ? "bg-indigo-500/30" : "bg-white/08"}`} />

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {plan.desc}
                </p>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-10">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${plan.popular ? "text-white/80" : "text-white/60"}`}>
                      <span className={plan.popular ? "text-indigo-400" : "text-green-400"}>
                        <CheckIcon />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <PayButton
                  plan={plan.planId}
                  label="Pay Now — Start Today"
                  primary={plan.popular}
                />
              </div>
            ))}
          </div>

          {/* Value callout */}
          <div className="glass rounded-2xl p-8 md:p-10 mb-24 text-center border border-indigo-500/15">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Think about it</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              One saved customer pays for{" "}
              <span className="gradient-text">the entire month</span>
            </h2>
            <p className="text-white/40 text-base max-w-2xl mx-auto">
              Average Indian clinic loses 30–50 calls/month to missed calls. Even if RingReply saves just 1 booking —
              that&apos;s ₹500–2,000 recovered. The plan pays for itself the first week.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass rounded-xl p-6 border border-white/05">
                  <h3 className="font-semibold text-sm mb-2 text-white/90">{faq.q}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass glow-indigo rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8 text-lg">
              Chat with us on WhatsApp — we&apos;ll help you pick the right plan and get you live today.
            </p>
            <a
              href={WA_BASE + encodeURIComponent("Hi! I have some questions about RingReply pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-full text-base"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

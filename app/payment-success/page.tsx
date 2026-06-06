import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful — RingReply",
  description: "Your RingReply subscription is active.",
};

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 flex items-center justify-center px-6 py-32">
        <div className="max-w-lg w-full glass glow-indigo rounded-3xl p-12 text-center">

          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-3">Payment Successful!</h1>
          <p className="text-white/50 text-lg mb-8 leading-relaxed">
            Welcome to RingReply. We&apos;ll WhatsApp you within 30 minutes to complete your setup.
          </p>

          <div className="glass rounded-2xl p-5 mb-8 text-left space-y-3">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Payment confirmed
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Setup starts within 30 minutes
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              AI live on your number today
            </div>
          </div>

          <a
            href={`https://wa.me/919319801618?text=${encodeURIComponent("Hi! I just completed my RingReply payment. Please help me set up.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full w-full"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z" />
            </svg>
            Message us on WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

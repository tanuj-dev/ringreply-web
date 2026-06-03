import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — RingReply",
  description: "Get in touch with RingReply. We're available on WhatsApp, phone, and email.",
};

export default function ContactPage() {
  const waLink = `https://wa.me/919319801618?text=${encodeURIComponent("Hi! I'm interested in RingReply for my business. Can you tell me more?")}`;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Get in touch</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Have a question or want to get started? We're available on WhatsApp, phone, and email.
              We typically respond within a few hours.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-12">

            {/* WhatsApp */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-hover rounded-2xl p-8 flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">WhatsApp</h2>
                <p className="text-white/50 text-sm mb-2">Fastest way to reach us. We respond within hours.</p>
                <p className="text-green-400 font-medium">+91 9319801618</p>
              </div>
              <span className="text-green-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                Chat on WhatsApp →
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919319801618"
              className="glass card-hover rounded-2xl p-8 flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Phone</h2>
                <p className="text-white/50 text-sm mb-2">Call us directly during business hours.</p>
                <p className="text-indigo-400 font-medium">+91 9319801618</p>
              </div>
              <span className="text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                Call now →
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@ringreply.in"
              className="glass card-hover rounded-2xl p-8 flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Email</h2>
                <p className="text-white/50 text-sm mb-2">For detailed queries or partnership discussions.</p>
                <p className="text-cyan-400 font-medium">hello@ringreply.in</p>
              </div>
              <span className="text-cyan-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                Send email →
              </span>
            </a>

            {/* Founder */}
            <div className="glass rounded-2xl p-8 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Founder</h2>
                <p className="text-white/50 text-sm mb-2">Built and run by a solo founder — you talk directly to the person who made this.</p>
                <p className="text-white font-medium">Tanuj Prajapati</p>
                <p className="text-white/40 text-sm">Founder & CEO, RingReply</p>
              </div>
            </div>

          </div>

          {/* Response time banner */}
          <div className="glass glow-indigo rounded-2xl p-7 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span className="text-green-400 text-sm font-medium">We're active</span>
            </div>
            <p className="text-white/60 text-sm">
              Typical response time: <strong className="text-white">under 2 hours</strong> on WhatsApp.
              For sales or onboarding queries, WhatsApp is the fastest route.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

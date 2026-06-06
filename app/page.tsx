"use client";

import Navbar from "./components/Navbar";
import BackgroundGlows from "./components/BackgroundGlows";
import Footer from "./components/Footer";

const WHATSAPP_NUMBER = "919319801618";
const WHATSAPP_MESSAGE = "Hi! I'm interested in RingReply for my business. Can you tell me more?";

function whatsappLink(msg = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white overflow-x-hidden">

      <BackgroundGlows />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-20 md:pt-36 md:pb-28">

        {/* Live badge */}
        <div className="flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 text-sm text-white/70">
          <span className="relative flex h-2 w-2">
            <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Live — answering calls & WhatsApp messages right now
        </div>

        {/* Pain point chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["📵 Busy? Still answered.", "🌙 2 AM call? Handled.", "💬 WhatsApp at midnight? Booked.", "🇮🇳 Hindi? No problem."].map((chip) => (
            <span key={chip} className="glass rounded-full px-4 py-1.5 text-xs text-white/60">{chip}</span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-4xl">
          Never Miss a Call{" "}
          <span className="gradient-text">or WhatsApp</span>{" "}
          Again
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
          Every missed call is a lost customer. Every unanswered WhatsApp is a booking gone to your competitor.
        </p>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
          RingReply's AI receptionist answers <span className="text-indigo-400">calls</span> and <span className="text-green-400">WhatsApp messages</span> 24/7 — books appointments, handles cancellations, and sends confirmations. In English and Hindi. While you sleep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z"/>
            </svg>
            Get Started Free
          </a>
          <a
            href="/demo"
            className="flex items-center gap-2 text-white/70 hover:text-white text-base font-medium px-6 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Try Live Demo
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-white/30 text-sm">
          ✅ No app needed &nbsp;·&nbsp; ✅ Setup in 5 minutes &nbsp;·&nbsp; ✅ Works on any phone
        </p>

        {/* Hero visuals — Voice + WhatsApp side by side */}
        <div className="mt-20 flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-3xl mx-auto">

          {/* Voice card */}
          <div className="glass glow-indigo rounded-2xl p-6 w-full max-w-sm text-left float-animation">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Incoming Call</p>
                <p className="text-xs text-white/40">+91 98765 43210</p>
              </div>
              <span className="ml-auto text-xs text-green-400 font-medium">Live</span>
            </div>
            <div className="space-y-2">
              {[
                { role: "ai", text: "Welcome to Smile Dental! How can I help you today?" },
                { role: "user", text: "I need to book a teeth cleaning" },
                { role: "ai", text: "Great! We're open Mon–Sat. Which date works?" },
              ].map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-xl px-3 py-2 text-xs max-w-[80%] ${
                    msg.role === "ai" ? "bg-indigo-500/20 text-indigo-200" : "bg-white/10 text-white/80"
                  }`}>{msg.text}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/05 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p className="text-xs text-white/40">Appointment booked · SMS sent ✓</p>
            </div>
          </div>

          {/* WhatsApp card */}
          <div className="glass rounded-2xl p-6 w-full max-w-sm text-left border border-green-500/20 float-animation" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">WhatsApp Message</p>
                <p className="text-xs text-white/40">+91 87654 32109</p>
              </div>
              <span className="ml-auto text-xs text-green-400 font-medium">Live</span>
            </div>
            <div className="space-y-2">
              {[
                { role: "user", text: "Hi, I want to book an appointment" },
                { role: "ai", text: "Hey! We have Cleaning, Filling & Root Canal. Which service?" },
                { role: "user", text: "Cleaning please, Saturday" },
                { role: "ai", text: "Saturday works! I have 10 AM and 2 PM open. Which one?" },
              ].map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-xl px-3 py-2 text-xs max-w-[80%] ${
                    msg.role === "ai" ? "bg-green-500/20 text-green-200" : "bg-white/10 text-white/80"
                  }`}>{msg.text}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/05 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p className="text-xs text-white/40">Booking confirmed · Zero call needed ✓</p>
            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 md:px-16 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "24/7", label: "Always available" },
            { value: "2 channels", label: "Call + WhatsApp" },
            { value: "2 langs", label: "Hindi + English" },
            { value: "0 miss", label: "Calls or chats missed" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-5 text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section teasers — link to dedicated pages */}
      <section className="relative z-10 px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          {/* How it works teaser */}
          <a href="/how-it-works" className="glass card-hover rounded-2xl p-8 flex flex-col gap-4 group">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-indigo-400 text-xs font-mono font-bold uppercase tracking-widest">How it works</span>
            </div>
            <h2 className="text-xl font-bold">Up and running in 3 steps</h2>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              Forward your calls, let the AI handle them, and watch bookings land in your dashboard — in under 5 minutes.
            </p>
            <span className="text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              See how →
            </span>
          </a>

          {/* Features teaser */}
          <a href="/features" className="glass card-hover rounded-2xl p-8 flex flex-col gap-4 group">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-indigo-400 text-xs font-mono font-bold uppercase tracking-widest">Features</span>
            </div>
            <h2 className="text-xl font-bold">Everything your receptionist does</h2>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              24/7 calls, WhatsApp bot, Hindi + English, SMS confirmations, cancellations, reschedules, and more — all in one.
            </p>
            <span className="text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore features →
            </span>
          </a>

          {/* Pricing teaser */}
          <a href="/pricing" className="glass card-hover rounded-2xl p-8 flex flex-col gap-4 group">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="text-indigo-400 text-xs font-mono font-bold uppercase tracking-widest">Pricing</span>
            </div>
            <h2 className="text-xl font-bold">Simple, flat pricing</h2>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              India plan at ₹2,999/mo. US plan at $49/mo. No per-call fees, no hidden charges, cancel anytime.
            </p>
            <span className="text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              See plans →
            </span>
          </a>

        </div>
      </section>

      {/* Who is it for */}
      <section className="relative z-10 px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Who is it for</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Built for <span className="gradient-text">local businesses</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "Dental Clinics",
                svg: <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                label: "Salons & Spas",
                svg: <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
              },
              {
                label: "Gyms & Fitness",
                svg: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
              },
              {
                label: "Medical Clinics",
                svg: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
              },
              {
                label: "Hotels",
                svg: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
              },
              {
                label: "Yoga Studios",
                svg: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
              },
              {
                label: "Physiotherapy",
                svg: <><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></>,
              },
              {
                label: "Vet Clinics",
                svg: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              },
            ].map((b) => (
              <div key={b.label} className="glass card-hover rounded-xl p-5 text-center flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/12 text-indigo-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                    {b.svg}
                  </svg>
                </div>
                <p className="text-sm text-white/70 font-medium">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 glow-indigo">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to never miss a <span className="gradient-text">call or message</span>?
          </h2>
          <p className="text-white/50 mb-8 text-lg">
            Setup takes under 5 minutes. Get AI on both your phone line and WhatsApp — live today.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-full text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z"/>
            </svg>
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}

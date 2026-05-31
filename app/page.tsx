"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919319801618";
const WHATSAPP_MESSAGE = "Hi! I'm interested in RingReply for my business. Can you tell me more?";

function whatsappLink(msg = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">

      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-600/08 blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-16 py-5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="RingReply Logo" className="w-9 h-9 rounded-lg" />
          <span className="font-bold text-lg tracking-tight">RingReply</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-primary text-white text-sm font-medium px-5 py-2.5 rounded-full items-center gap-2"
        >
          Get Started
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="relative z-50 md:hidden glass border-b border-white/05 px-6 py-4 flex flex-col gap-4 text-sm text-white/70">
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">How it works</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Features</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Pricing</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary text-white text-center py-2.5 rounded-full font-medium">
            Get Started
          </a>
        </div>
      )}

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
            href="#how-it-works"
            className="text-white/60 hover:text-white text-base font-medium flex items-center gap-1 transition-colors"
          >
            See how it works
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
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

      {/* How it works */}
      <section id="how-it-works" className="relative z-10 px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Up and running in <span className="gradient-text">3 simple steps</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "📞",
                title: "Forward your calls",
                desc: "Simply dial *21* followed by your RingReply number from your phone. Takes 10 seconds.",
              },
              {
                step: "02",
                icon: "🤖",
                title: "AI answers instantly",
                desc: "Every call is answered within 2 rings. The AI greets callers in English or Hindi and handles the conversation naturally.",
              },
              {
                step: "03",
                icon: "✅",
                title: "Bookings confirmed",
                desc: "Appointments are saved automatically and both you and your customer get an SMS confirmation instantly.",
              },
            ].map((step) => (
              <div key={step.step} className="glass card-hover rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-indigo-400 text-sm font-mono font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Everything your <span className="gradient-text">receptionist</span> does
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🕐", title: "24/7 Availability", desc: "Never miss a call or message — nights, weekends, holidays included." },
              { icon: "💬", title: "WhatsApp Booking Bot", desc: "Customers text your WhatsApp number and the AI books their appointment automatically." },
              { icon: "🇮🇳", title: "Hindi + English", desc: "Callers and customers can speak or type in Hindi, English, or mix both freely." },
              { icon: "📅", title: "Smart Booking", desc: "Checks real-time availability and books slots instantly on both call and WhatsApp." },
              { icon: "📲", title: "SMS Confirmations", desc: "Auto-sends booking details to both customer and owner after every booking." },
              { icon: "❌", title: "Cancellations", desc: "Handles cancellation requests on call or WhatsApp without any manual work." },
              { icon: "🚨", title: "Urgency Detection", desc: "Detects emergencies and directs callers appropriately." },
              { icon: "🏢", title: "Any Business Type", desc: "Clinics, salons, gyms, hotels — fully customizable for any vertical." },
              { icon: "📊", title: "Booking Dashboard", desc: "View all appointments from calls and WhatsApp in one clean dashboard." },
            ].map((f) => (
              <div key={f.title} className="glass card-hover rounded-xl p-5">
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
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
              { icon: "🦷", label: "Dental Clinics" },
              { icon: "💇", label: "Salons & Spas" },
              { icon: "🏋️", label: "Gyms & Fitness" },
              { icon: "🩺", label: "Medical Clinics" },
              { icon: "🏨", label: "Hotels" },
              { icon: "🧘", label: "Yoga Studios" },
              { icon: "💆", label: "Physiotherapy" },
              { icon: "🐾", label: "Vet Clinics" },
            ].map((b) => (
              <div key={b.label} className="glass card-hover rounded-xl p-5 text-center">
                <span className="text-3xl block mb-2">{b.icon}</span>
                <p className="text-sm text-white/70 font-medium">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Simple, <span className="gradient-text">flat pricing</span>
          </h2>
          <p className="text-center text-white/40 mb-16">No per-call fees. No hidden charges. Cancel anytime.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* India Plan */}
            <div className="glass rounded-2xl p-8 border border-white/08">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🇮🇳</span>
                <span className="text-white/60 text-sm">India Plan</span>
              </div>
              <p className="text-4xl font-bold mb-1">₹2,999<span className="text-white/40 text-lg font-normal">/mo</span></p>
              <p className="text-white/40 text-sm mb-6">Hindi + English support included</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited calls answered",
                  "WhatsApp booking bot included",
                  "Hindi & English bilingual AI",
                  "SMS confirmations",
                  "Booking dashboard",
                  "Cancellation handling",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink("Hi! I want to get the India plan for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-full w-full"
              >
                Get Started
              </a>
            </div>

            {/* US Plan */}
            <div className="rounded-2xl p-8 border border-indigo-500/40 bg-indigo-500/05 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white/60 text-sm">US Plan</span>
              </div>
              <p className="text-4xl font-bold mb-1">$49<span className="text-white/40 text-lg font-normal">/mo</span></p>
              <p className="text-white/40 text-sm mb-6">English — works with any US business</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited calls answered",
                  "WhatsApp booking bot included",
                  "Natural English AI voice",
                  "SMS confirmations",
                  "Booking dashboard",
                  "Cancellation handling",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink("Hi! I want to get the US plan for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-full w-full"
              >
                Get Started
              </a>
            </div>
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

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/05 px-6 md:px-16 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="font-medium text-white/50">RingReply</span>
          </div>
          <p>© 2025 RingReply. All rights reserved.</p>
          <a
            href={`mailto:hello@ringreply.in`}
            className="hover:text-white/60 transition-colors"
          >
            hello@ringreply.in
          </a>
        </div>
      </footer>

    </div>
  );
}

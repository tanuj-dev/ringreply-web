"use client";

import { useState, useEffect, useRef } from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import BackgroundGlows from "../components/BackgroundGlows";
import Footer from "../components/Footer";

type CallState = "loading" | "ready" | "calling" | "connected" | "ended" | "error";

const API = "https://api.ringreply.in";
const BIZ_ID = "tanuj_dental";
const TWILIO_NUMBER = "+12394238893";
const TWILIO_SDK = "https://sdk.twilio.com/js/voice/releases/2.9.0/twilio.js";

const SUGGESTIONS = [
  "I want to book a teeth cleaning appointment",
  "मुझे appointment book करनी है",
  "I need to cancel my booking",
  "Can I reschedule to Saturday?",
  "What services do you offer?",
];

const AI_CAPABILITIES = [
  "Greets in Hindi or English — your choice",
  "Checks live slot availability",
  "Books & confirms appointments instantly",
  "Handles cancellations & reschedules",
  "Sends SMS + email confirmation",
];

export default function DemoPage() {
  const [callState, setCallState] = useState<CallState>("loading");
  const [statusMsg, setStatusMsg] = useState("Connecting to AI receptionist...");
  const [duration, setDuration] = useState(0);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const deviceRef = useRef<any>(null);
  const callRef = useRef<any>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Rotate suggestion hints
  useEffect(() => {
    const id = setInterval(() => setActiveSuggestion((p) => (p + 1) % SUGGESTIONS.length), 3000);
    return () => clearInterval(id);
  }, []);

  // Load Twilio SDK + init device
  useEffect(() => {
    loadSdk();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function loadSdk() {
    if (typeof window === "undefined") return;
    if ((window as any).Twilio?.Device) { initDevice(); return; }
    const s = document.createElement("script");
    s.src = TWILIO_SDK;
    s.onload = () => initDevice();
    s.onerror = () => {
      setCallState("error");
      setStatusMsg("Could not load audio SDK. Please refresh.");
    };
    document.head.appendChild(s);
  }

  async function initDevice() {
    try {
      setStatusMsg("Connecting to AI receptionist...");
      const res = await fetch(`${API}/token`);
      const { token } = await res.json();

      const { Device } = (window as any).Twilio;
      const device = new Device(token, { codecPreferences: ["opus", "pcmu"], logLevel: 0 });

      device.on("registered", () => {
        setCallState("ready");
        setStatusMsg("Ready to call");
        deviceRef.current = device;
      });

      device.on("error", (err: any) => {
        setCallState("error");
        setStatusMsg("Device error — " + err.message);
      });

      device.register();
    } catch {
      setCallState("error");
      setStatusMsg("Could not connect. Please refresh the page.");
    }
  }

  async function startCall() {
    if (!deviceRef.current || callState !== "ready") return;
    try {
      setCallState("calling");
      setStatusMsg("Ringing...");

      const call = await deviceRef.current.connect({
        params: { To: TWILIO_NUMBER, BusinessId: BIZ_ID },
      });
      callRef.current = call;

      call.on("accept", () => {
        setCallState("connected");
        setStatusMsg("Connected — speak naturally");
        setDuration(0);
        timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);
      });

      call.on("disconnect", () => {
        setCallState("ended");
        setStatusMsg("Call ended");
        if (timerRef.current) clearInterval(timerRef.current);
      });

      call.on("error", (e: any) => {
        setCallState("error");
        setStatusMsg("Call error: " + e.message);
        if (timerRef.current) clearInterval(timerRef.current);
      });
    } catch (e: any) {
      setCallState("error");
      setStatusMsg("Could not start call: " + e.message);
    }
  }

  function endCall() {
    callRef.current?.disconnect();
    if (!callRef.current) deviceRef.current?.disconnectAll();
    if (timerRef.current) clearInterval(timerRef.current);
    setCallState("ended");
    setStatusMsg("Call ended");
  }

  function tryAgain() {
    setDuration(0);
    setCallState("loading");
    setStatusMsg("Reconnecting...");
    loadSdk();
  }

  const fmt = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const statusColors: Record<CallState, string> = {
    loading:   "bg-white/05 text-white/40",
    ready:     "bg-green-500/15 text-green-400 border border-green-500/20",
    calling:   "bg-amber-500/15 text-amber-400 border border-amber-500/20",
    connected: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20",
    ended:     "bg-white/05 text-white/40",
    error:     "bg-red-500/15 text-red-400 border border-red-500/20",
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-sm text-white/60">
              <span className="relative flex h-2 w-2">
                <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Live — real AI, real calls, right now
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-5">
              Try the AI Receptionist{" "}
              <span className="gradient-text">Live</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Call <strong className="text-white/80">Tanuj Dental Clinic&apos;s AI</strong> directly from your browser.
              Book, cancel, or reschedule in Hindi or English — exactly how your customers will experience it.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">

            {/* ── Phone UI (left / wider) ── */}
            <div className="md:col-span-2">
              <div className="glass glow-indigo rounded-3xl p-8 flex flex-col items-center text-center">

                {/* Clinic avatar */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl mb-4 shadow-lg shadow-indigo-500/30">
                  🦷
                </div>
                <h2 className="text-xl font-bold mb-0.5">Tanuj Dental Clinic</h2>
                <p className="text-white/40 text-sm mb-2">Delhi · Est. 2018</p>

                {/* Live indicator */}
                <div className="flex items-center gap-1.5 text-xs text-white/30 mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  AI receptionist active
                </div>

                {/* Status pill */}
                <div className={`w-full rounded-2xl px-5 py-3.5 mb-6 text-sm font-medium transition-all duration-300 ${statusColors[callState]}`}>
                  <div className="flex items-center justify-center gap-2">
                    {callState === "loading" && (
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    {callState === "connected" && (
                      <span className="font-mono text-indigo-400">{fmt(duration)}</span>
                    )}
                    {callState === "calling" && (
                      <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                    <span>{statusMsg}</span>
                  </div>
                </div>

                {/* Action button */}
                {(callState === "ready") && (
                  <button
                    onClick={startCall}
                    className="w-full py-4 rounded-2xl font-semibold text-base text-white flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Start Demo Call
                  </button>
                )}

                {callState === "loading" && (
                  <button disabled className="w-full py-4 rounded-2xl font-semibold text-base text-white/30 bg-white/05 cursor-not-allowed flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Initializing...
                  </button>
                )}

                {(callState === "calling" || callState === "connected") && (
                  <button
                    onClick={endCall}
                    className="w-full py-4 rounded-2xl font-semibold text-base text-white flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.2 2.46.57 3.58.1.34.02.74-.25 1.01L6.6 10.8z" />
                    </svg>
                    Hang Up
                  </button>
                )}

                {(callState === "ended" || callState === "error") && (
                  <button
                    onClick={tryAgain}
                    className="w-full py-4 rounded-2xl btn-primary font-semibold text-base text-white flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Call Again
                  </button>
                )}

                {/* Micro hint */}
                <p className="text-white/20 text-xs mt-5 leading-relaxed">
                  Needs microphone access &nbsp;·&nbsp; No app required &nbsp;·&nbsp; Works on Chrome & Safari
                </p>
              </div>
            </div>

            {/* ── Right panel ── */}
            <div className="md:col-span-3 flex flex-col gap-5">

              {/* Rotating suggestion */}
              <div className="glass rounded-2xl p-5 border border-indigo-500/15">
                <p className="text-xs text-indigo-400 font-medium uppercase tracking-widest mb-3">Try saying →</p>
                <p className="text-lg font-medium text-white/80 italic transition-all duration-500">
                  &ldquo;{SUGGESTIONS[activeSuggestion]}&rdquo;
                </p>
                <div className="flex gap-1 mt-3">
                  {SUGGESTIONS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSuggestion(i)}
                      className={`h-1 rounded-full transition-all ${i === activeSuggestion ? "bg-indigo-400 w-5" : "bg-white/20 w-3"}`}
                    />
                  ))}
                </div>
              </div>

              {/* What the AI does */}
              <div className="glass rounded-2xl p-6">
                <p className="text-xs text-indigo-400 font-medium uppercase tracking-widest mb-4">What the AI does</p>
                <div className="grid grid-cols-1 gap-2">
                  {AI_CAPABILITIES.map((cap) => (
                    <div key={cap} className="flex items-center gap-3 text-sm text-white/65">
                      <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {cap}
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic info grid */}
              <div className="glass rounded-2xl p-6">
                <p className="text-xs text-indigo-400 font-medium uppercase tracking-widest mb-4">Clinic Info (what the AI knows)</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/35 text-xs mb-1">Services</p>
                    <div className="flex flex-wrap gap-1">
                      {["Cleaning", "Filling", "Root Canal", "Extraction"].map((s) => (
                        <span key={s} className="bg-white/06 text-white/60 px-2 py-0.5 rounded-full text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-white/35 text-xs mb-1">Hours</p>
                    <p className="text-white/70">Mon–Sat, 9 AM – 6 PM</p>
                  </div>
                  <div>
                    <p className="text-white/35 text-xs mb-1">Languages</p>
                    <p className="text-white/70">Hindi + English</p>
                  </div>
                  <div>
                    <p className="text-white/35 text-xs mb-1">Slot Duration</p>
                    <p className="text-white/70">30 minutes</p>
                  </div>
                </div>
              </div>

              {/* How it works steps */}
              <div className="glass rounded-2xl p-6">
                <p className="text-xs text-indigo-400 font-medium uppercase tracking-widest mb-4">How the demo works</p>
                <div className="space-y-3">
                  {[
                    { n: "1", t: "Click Start Demo Call", d: "Browser asks for mic permission" },
                    { n: "2", t: "AI answers in seconds", d: "Says the clinic greeting in Hindi + English" },
                    { n: "3", t: "Speak naturally", d: "Book, cancel or reschedule as if you're a patient" },
                    { n: "4", t: "Hang up anytime", d: "Booking gets saved in the real dashboard" },
                  ].map((s) => (
                    <div key={s.n} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {s.n}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/80">{s.t}</p>
                        <p className="text-xs text-white/40">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 glass glow-indigo rounded-3xl p-10 md:p-14 text-center">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Impressed?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get this for <span className="gradient-text">your business</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
              Setup takes under 5 minutes. No app, no coding, no contract. Plans from ₹2,999/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919319801618?text=Hi!+I+just+tried+the+demo+and+I+want+RingReply+for+my+business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.847L.057 23.882l6.196-1.623A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.579 6.579 2.106 12 2.106S21.894 6.579 21.894 12 17.421 21.894 12 21.894z" />
                </svg>
                Get Started on WhatsApp
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-white font-medium px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all text-base"
              >
                See pricing →
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
  delay: number; // ms after previous message
};

const ICONS = {
  clinic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  salon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  ),
  college: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
};

type Scenario = {
  label: string;
  iconKey: keyof typeof ICONS;
  business: string;
  messages: Message[];
};

const SCENARIOS: Scenario[] = [
  {
    label: "Clinic",
    iconKey: "clinic",
    business: "Dr. Sharma's Clinic",
    messages: [
      { from: "user", text: "Hello, mujhe appointment chahiye", delay: 0 },
      { from: "bot",  text: "Namaste! 🙏 Dr. Sharma's Clinic mein aapka swagat hai. Kaunsi date aur time aapko suit karegi?", delay: 1000 },
      { from: "user", text: "Kal subah 10 baje", delay: 1800 },
      { from: "bot",  text: "✅ Kal (Monday) 10:00 AM ka slot available hai. Kya main aapka naam confirm kar sakti hoon?", delay: 1200 },
      { from: "user", text: "Rahul Verma", delay: 1500 },
      { from: "bot",  text: "Perfect! Appointment booked ✅\n\n📅 Monday, 10:00 AM\n👨‍⚕️ Dr. Sharma\n👤 Rahul Verma\n\nEk reminder 1 ghante pehle bheja jayega. Koi aur help?", delay: 1200 },
    ],
  },
  {
    label: "Salon",
    iconKey: "salon",
    business: "Style Hub Salon",
    messages: [
      { from: "user", text: "Is Saturday free hai hair cut ke liye?", delay: 0 },
      { from: "bot",  text: "Hi! 💈 Style Hub Salon mein aapka swagat hai! Saturday ke liye ye slots available hain:\n\n• 11:00 AM\n• 2:00 PM\n• 4:30 PM\n\nKaunsa suit karega?", delay: 1000 },
      { from: "user", text: "2 baje", delay: 1600 },
      { from: "bot",  text: "✅ Saturday 2:00 PM book ho gaya!\n\nAapka naam please?", delay: 1000 },
      { from: "user", text: "Priya", delay: 1400 },
      { from: "bot",  text: "Done! 🎉 Priya ji, Saturday 2 PM aapka wait kar raha hai. Agar cancel karna ho toh bas yahan message karo 😊", delay: 1200 },
    ],
  },
  {
    label: "College",
    iconKey: "college",
    business: "Apex Institute",
    messages: [
      { from: "user", text: "BCA ki fees kitni hai?", delay: 0 },
      { from: "bot",  text: "Hello! 🎓 Apex Institute mein aapka swagat hai!\n\nBCA (3 Years) fees:\n• 1st Year: ₹45,000\n• 2nd Year: ₹42,000\n• 3rd Year: ₹42,000\n\nEMI option bhi available hai 📚", delay: 1000 },
      { from: "user", text: "Admission kab se shuru hoga?", delay: 1800 },
      { from: "bot",  text: "Admissions 1st July se shuru ho rahe hain! 📅\n\nForm fill karne ke liye counsellor se baat karein. Kya main aapka number note kar loon? Hum callback karenge.", delay: 1200 },
      { from: "user", text: "Haan please", delay: 1500 },
      { from: "bot",  text: "Thank you! Hamara counsellor 24 ghante mein call karega 📞\n\nKoi aur sawaal? 😊", delay: 1000 },
    ],
  },
];

export default function WhatsAppDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  function clearTimers() {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  }

  function playScenario(idx: number) {
    clearTimers();
    setActiveTab(idx);
    setVisibleCount(0);
    setIsPlaying(true);

    const msgs = SCENARIOS[idx].messages;
    let cumDelay = 500;

    msgs.forEach((msg, i) => {
      cumDelay += msg.delay + 400;
      const t = setTimeout(() => {
        setVisibleCount(i + 1);
        if (i === msgs.length - 1) setIsPlaying(false);
        // auto-scroll
        setTimeout(() => {
          chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
        }, 80);
      }, cumDelay);
      timerRef.current.push(t);
    });
  }

  useEffect(() => {
    playScenario(0);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scenario = SCENARIOS[activeTab];
  const messages = scenario.messages.slice(0, visibleCount);

  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/8">
      {/* Tabs */}
      <div className="flex border-b border-white/8">
        {SCENARIOS.map((s, i) => (
          <button
            key={i}
            onClick={() => playScenario(i)}
            className={`flex-1 py-3.5 text-sm font-medium transition-all flex items-center justify-center gap-1.5
              ${activeTab === i
                ? "text-white border-b-2 border-green-400 bg-white/5"
                : "text-white/40 hover:text-white/70"
              }`}
          >
            {ICONS[s.iconKey]}
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* Phone mockup */}
      <div className="p-4">
        <div className="rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/8 max-w-sm mx-auto">
          {/* WhatsApp header */}
          <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-green-400/20 flex items-center justify-center text-white/80">
              {ICONS[scenario.iconKey]}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold leading-tight">{scenario.business}</p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                <p className="text-green-300 text-[11px]">AI Receptionist · Online</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.2 2.46.57 3.58.1.34.02.74-.25 1.01L6.6 10.8z"/>
            </svg>
          </div>

          {/* Chat area */}
          <div
            ref={chatRef}
            className="bg-[#0d1117] bg-opacity-90 h-72 overflow-y-auto px-3 py-4 space-y-2 scroll-smooth"
            style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(7,94,84,0.06) 0%, transparent 60%)" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div
                  className={`max-w-[82%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow
                    ${msg.from === "user"
                      ? "bg-[#005c4b] text-white rounded-br-sm"
                      : "bg-[#202c33] text-white/90 rounded-bl-sm"
                    }`}
                >
                  {msg.text}
                  <div className={`text-[10px] mt-1 text-right ${msg.from === "user" ? "text-green-300/60" : "text-white/30"}`}>
                    {msg.from === "user" ? "You" : "RingReply AI"} · just now
                    {msg.from === "user" && (
                      <span className="ml-1 text-blue-300">✓✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isPlaying && visibleCount < scenario.messages.length && (
              <div className="flex justify-start">
                <div className="bg-[#202c33] px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="bg-[#1f2c33] px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-white/30 text-sm">
              Type a message…
            </div>
            <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Replay hint */}
        <div className="text-center mt-4">
          {!isPlaying && (
            <button
              onClick={() => playScenario(activeTab)}
              className="text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-1 mx-auto"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Replay
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

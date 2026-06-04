"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const WHATSAPP_NUMBER = "919319801618";
const WHATSAPP_MESSAGE = "Hi! I'm interested in RingReply for my business. Can you tell me more?";

function whatsappLink(msg = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-16 py-5 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="RingReply Logo" width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-lg tracking-tight">RingReply</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link>
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/demo" className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            Live Demo
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white/80 transition-all hover:bg-white/08 border border-white/10"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2"
          >
            Get Started
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          {/* Theme toggle mobile */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white/80 transition-all border border-white/10"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="relative z-50 md:hidden glass border-b border-white/05 px-6 py-4 flex flex-col gap-4 text-sm text-white/70">
          <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">How it works</Link>
          <Link href="/features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Features</Link>
          <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Pricing</Link>
          <Link href="/demo" onClick={() => setMobileMenuOpen(false)} className="text-green-400 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Live Demo
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary text-white text-center py-2.5 rounded-full font-medium">
            Get Started
          </a>
        </div>
      )}
    </>
  );
}

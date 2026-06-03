"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const WHATSAPP_NUMBER = "919319801618";
const WHATSAPP_MESSAGE = "Hi! I'm interested in RingReply for my business. Can you tell me more?";

function whatsappLink(msg = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-primary text-white text-sm font-medium px-5 py-2.5 rounded-full items-center gap-2"
        >
          Get Started
        </a>

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

      {mobileMenuOpen && (
        <div className="relative z-50 md:hidden glass border-b border-white/05 px-6 py-4 flex flex-col gap-4 text-sm text-white/70">
          <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">How it works</Link>
          <Link href="/features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Features</Link>
          <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Pricing</Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary text-white text-center py-2.5 rounded-full font-medium">
            Get Started
          </a>
        </div>
      )}
    </>
  );
}

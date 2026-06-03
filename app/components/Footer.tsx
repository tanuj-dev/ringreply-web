import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/05 px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="font-bold text-white/80 text-base">RingReply</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/40">
            <Link href="/how-it-works" className="hover:text-white/70 transition-colors">How it works</Link>
            <Link href="/features" className="hover:text-white/70 transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white/70 transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 text-sm text-white/40">
            <a href="mailto:hello@ringreply.in" className="hover:text-white/60 transition-colors">
              hello@ringreply.in
            </a>
            <a
              href="https://wa.me/919319801618"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              +91 9319801618
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/05 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© 2026 RingReply. All rights reserved. Built by Tanuj Prajapati.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white/50 transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

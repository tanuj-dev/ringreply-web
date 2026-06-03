const WHATSAPP_NUMBER = "919319801618";
const WHATSAPP_MESSAGE = "Hi! I'm interested in RingReply for my business. Can you tell me more?";

function whatsappLink(msg = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/05 px-6 md:px-16 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">R</span>
          </div>
          <span className="font-medium text-white/50">RingReply</span>
        </div>
        <p>© 2026 RingReply. All rights reserved.</p>
        <a href="mailto:hello@ringreply.in" className="hover:text-white/60 transition-colors">
          hello@ringreply.in
        </a>
      </div>
    </footer>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — RingReply",
  description: "Read RingReply's Privacy Policy to understand how we collect, use, and protect your personal data. RingReply is an AI receptionist service for small businesses in India and the US.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white/40 text-sm">Last updated: June 2026</p>
          </div>

          <div className="space-y-10 text-white/70 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Who We Are</h2>
              <p>
                RingReply is an AI-powered virtual receptionist service operated by <strong className="text-white">Tanuj Prajapati</strong>.
                Our website is <strong className="text-white">ringreply.in</strong> and you can reach us at{" "}
                <a href="mailto:hello@ringreply.in" className="text-indigo-400 hover:underline">hello@ringreply.in</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect the following types of information:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong className="text-white">Contact information</strong> — name, phone number, and email provided when booking an appointment via call or WhatsApp.</li>
                <li><strong className="text-white">Call data</strong> — voice recordings and transcripts of calls handled by our AI receptionist.</li>
                <li><strong className="text-white">WhatsApp messages</strong> — messages sent to business numbers powered by RingReply.</li>
                <li><strong className="text-white">Booking details</strong> — service requested, date, time, and appointment history.</li>
                <li><strong className="text-white">Usage data</strong> — website visits, page views, and analytics via Google Analytics.</li>
                <li><strong className="text-white">Cookies</strong> — see our Cookie Policy for details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>To book and manage appointments on behalf of businesses using RingReply.</li>
                <li>To send SMS and WhatsApp confirmations to customers.</li>
                <li>To notify business owners of new bookings and cancellations.</li>
                <li>To improve and train our AI systems.</li>
                <li>To respond to support queries.</li>
                <li>To send product updates to business owners (you can opt out anytime).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. How We Share Your Information</h2>
              <p className="mb-3">We do <strong className="text-white">not sell</strong> your personal data. We share data only with:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong className="text-white">Twilio</strong> — for call and SMS handling.</li>
                <li><strong className="text-white">Exotel</strong> — for Indian phone number management.</li>
                <li><strong className="text-white">Google Analytics</strong> — for website usage analytics.</li>
                <li><strong className="text-white">Railway / cloud infrastructure</strong> — for hosting and data storage.</li>
                <li>The business owner whose number you called or messaged.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
              <p>
                Booking records are retained for up to <strong className="text-white">2 years</strong> for business reference.
                Call transcripts are retained for up to <strong className="text-white">90 days</strong>.
                You can request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data.</li>
                <li>Opt out of marketing communications.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:hello@ringreply.in" className="text-indigo-400 hover:underline">hello@ringreply.in</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Security</h2>
              <p>
                We use industry-standard security measures including HTTPS encryption, secure cloud hosting,
                and access controls to protect your data. However, no system is 100% secure and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with an updated date. Continued use of RingReply after changes means you accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
              <p>
                Questions about this policy? Reach us at:{" "}
                <a href="mailto:hello@ringreply.in" className="text-indigo-400 hover:underline">hello@ringreply.in</a>
                {" "}or WhatsApp us at{" "}
                <a href="https://wa.me/919319801618" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">+91 9319801618</a>.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

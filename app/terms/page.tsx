import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — RingReply",
  description: "Read RingReply's Terms of Service before using our AI receptionist platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-white/40 text-sm">Last updated: June 2026</p>
          </div>

          <div className="space-y-10 text-white/70 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Agreement</h2>
              <p>
                By signing up for, accessing, or using RingReply ("Service"), you agree to be bound by these
                Terms of Service. RingReply is operated by <strong className="text-white">Tanuj Prajapati</strong>.
                If you do not agree, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. What RingReply Provides</h2>
              <p className="mb-3">RingReply provides:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>An AI-powered virtual receptionist that answers phone calls and WhatsApp messages.</li>
                <li>Automated appointment booking, cancellation, and rescheduling.</li>
                <li>SMS confirmation messages to customers and business owners.</li>
                <li>A web-based dashboard to manage bookings and settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Eligibility</h2>
              <p>
                You must be at least 18 years old and operating a legitimate business to use RingReply.
                By using our Service, you confirm you meet these requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Subscription & Payments</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>RingReply is offered on a monthly subscription basis.</li>
                <li>India Plan: ₹2,999/month. US Plan: $49/month.</li>
                <li>Payments are due at the start of each billing cycle.</li>
                <li>No refunds for partial months once a billing cycle has started.</li>
                <li>We reserve the right to change pricing with 30 days' notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Cancellation</h2>
              <p>
                You can cancel your subscription at any time by contacting us at{" "}
                <a href="mailto:hello@ringreply.in" className="text-indigo-400 hover:underline">hello@ringreply.in</a>
                {" "}or WhatsApp <a href="https://wa.me/919319801618" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">+91 9319801618</a>.
                Your Service will remain active until the end of the current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Acceptable Use</h2>
              <p className="mb-3">You agree NOT to use RingReply to:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Conduct any illegal or fraudulent activity.</li>
                <li>Harass, mislead, or deceive callers or customers.</li>
                <li>Impersonate any person or business you do not represent.</li>
                <li>Violate any applicable laws or regulations.</li>
                <li>Attempt to reverse-engineer or copy the Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Service Availability</h2>
              <p>
                We aim for maximum uptime but do not guarantee 100% availability. RingReply is not liable
                for losses caused by downtime, technical failures, or interruptions in third-party services
                (Twilio, Exotel, cloud providers).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. AI Limitations</h2>
              <p>
                RingReply uses AI which may occasionally make errors, misunderstand callers, or provide
                incorrect information. We are not liable for any loss, missed bookings, or customer
                disputes arising from AI errors. We recommend reviewing your dashboard regularly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, RingReply's total liability to you for any claim
                arising from use of the Service shall not exceed the amount you paid us in the last
                30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Intellectual Property</h2>
              <p>
                All content, technology, and branding related to RingReply is the property of Tanuj Prajapati.
                You may not copy, reproduce, or distribute any part of the Service without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of RingReply after changes
                constitutes acceptance of the updated Terms. We will notify active subscribers of
                significant changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Contact</h2>
              <p>
                Questions? Reach us at:{" "}
                <a href="mailto:hello@ringreply.in" className="text-indigo-400 hover:underline">hello@ringreply.in</a>
                {" "}or WhatsApp{" "}
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

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlows from "../components/BackgroundGlows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — RingReply",
  description: "Learn how RingReply uses cookies on its website. RingReply is an AI receptionist platform for small businesses in India and the US.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <BackgroundGlows />
      <Navbar />

      <main className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-white/40 text-sm">Last updated: June 2026</p>
          </div>

          <div className="space-y-10 text-white/70 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. What Are Cookies</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help
                websites remember your preferences, understand how you use the site, and improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Cookies We Use</h2>

              <div className="space-y-6">
                <div className="glass rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-1">Essential Cookies</h3>
                  <p className="text-sm">
                    Required for the website to function. These cannot be disabled.
                    They include session cookies for the admin dashboard login.
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-1">Analytics Cookies (Google Analytics)</h3>
                  <p className="text-sm">
                    We use Google Analytics (ID: G-6RF70QYSFW) to understand how visitors use our website —
                    which pages are visited, how long visitors stay, and where they come from.
                    This helps us improve the site. Google may store this data on its servers.
                    You can opt out via{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
                      Google Analytics Opt-out
                    </a>.
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-1">No Advertising Cookies</h3>
                  <p className="text-sm">
                    We do not use advertising or tracking cookies. We do not show ads or sell your
                    browsing data to advertisers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Managing Cookies</h2>
              <p className="mb-3">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>View what cookies are stored.</li>
                <li>Delete individual or all cookies.</li>
                <li>Block cookies from specific or all websites.</li>
              </ul>
              <p className="mt-3">
                Note: Disabling essential cookies may affect how the website and dashboard function.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Cookies</h2>
              <p>
                Google Analytics sets cookies on our behalf. These are subject to{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
                  Google's Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Changes will be posted on this page
                with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
              <p>
                Questions about cookies? Contact us at{" "}
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

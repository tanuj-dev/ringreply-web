import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackgroundGlows from "../../components/BackgroundGlows";
import { getSolution, solutions } from "../data";
import { SITE_URL } from "../../seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: { title: s.title, description: s.description, url: `/solutions/${s.slug}` },
  };
}

function Check() {
  return (
    <svg className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  const url = `${SITE_URL}/solutions/${s.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
          { "@type": "ListItem", position: 3, name: s.navLabel, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <BackgroundGlows />
      <Navbar />

      <main id="main-content" className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/solutions" className="hover:text-white/70">Solutions</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{s.navLabel}</span>
          </nav>

          <div className="text-center mb-20">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">{s.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">{s.h1}</h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-10">{s.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:opacity-90 transition-opacity">
                Try the live demo
              </Link>
              <Link href="/pricing" className="px-8 py-4 rounded-xl glass font-semibold hover:bg-white/10 transition-colors">
                See pricing
              </Link>
            </div>
          </div>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The problem</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {s.problems.map((p) => (
                <div key={p.title} className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How RingReply helps</h2>
            <ol className="flex flex-col gap-6">
              {s.steps.map((step, i) => (
                <li key={step.title} className="glass card-hover rounded-2xl p-6 md:p-8 flex gap-6 items-start">
                  <span className="text-indigo-400 font-mono font-bold text-sm mt-1">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/55 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What you get</h2>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-white/70">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently asked questions</h2>
            <div className="flex flex-col gap-4">
              {s.faqs.map((f) => (
                <details key={f.q} className="glass rounded-2xl p-6 group">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between gap-4">
                    {f.q}
                    <span className="text-indigo-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-white/55 leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="glass rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stop losing customers to missed calls</h2>
            <p className="text-white/50 mb-8">Plans start at ₹2,999/month, with setup done for you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:opacity-90 transition-opacity">
                Talk to us
              </Link>
              <Link href="/solutions" className="px-8 py-4 rounded-xl glass font-semibold hover:bg-white/10 transition-colors">
                Other industries
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

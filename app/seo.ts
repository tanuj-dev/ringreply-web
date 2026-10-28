// Canonical origin: ringreply.in redirects to www, so every URL we publish uses www.
export const SITE_URL = "https://www.ringreply.in";

// Site-wide structured data: who we are and what we sell. Rendered once in the root layout.
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "RingReply",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: "hello@ringreply.in",
      telephone: "+91-9319801618",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9319801618",
        email: "hello@ringreply.in",
        contactType: "sales",
        areaServed: ["IN", "US"],
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "RingReply",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "RingReply AI Receptionist",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI receptionist that answers business calls and WhatsApp messages 24/7, books appointments and sends confirmations in Hindi and English.",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "2999",
        priceCurrency: "INR",
        url: `${SITE_URL}/pricing`,
      },
    },
  ],
};

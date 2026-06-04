import type { Metadata } from "next";
import Script from "next/script";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  title: "RingReply — AI Receptionist for Small Business India",
  description: "Never miss a call or WhatsApp message again. RingReply's AI receptionist answers calls 24/7, books appointments automatically, and sends confirmations — in Hindi and English. Perfect for clinics, salons, gyms and hotels in India and the US.",
  keywords: "AI receptionist India, AI call answering service India, virtual receptionist India, automated appointment booking, WhatsApp booking bot, missed call solution for business, AI receptionist for clinic, AI receptionist for salon, 24/7 call answering service, Hindi English AI assistant, never miss a business call, AI receptionist for small business India, WhatsApp appointment booking bot India, call answering service for salon India, virtual receptionist Hindi English, automated booking dental clinic",
  verification: {
    google: "5ZO3ef7TBLhwr5nBbPOk2iIXVWM2IyYwLexdEp86YCk",
  },
  openGraph: {
    title: "RingReply — AI Receptionist for Your Business",
    description: "Never miss a call again. RingReply answers your calls 24/7, books appointments, and sends confirmations — in English and Hindi.",
    url: "https://ringreply.in",
    siteName: "RingReply",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ringreply.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "RingReply — AI Receptionist for Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RingReply — AI Receptionist for Your Business",
    description: "Never miss a call again. RingReply answers calls 24/7, books appointments in English & Hindi.",
    images: ["https://ringreply.in/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rr-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6RF70QYSFW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6RF70QYSFW');
          `}
        </Script>
      </head>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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
  title: "RingReply — AI Receptionist for Your Business",
  description: "Never miss a call or WhatsApp again. RingReply answers your business calls and WhatsApp messages 24/7, books appointments automatically — in English and Hindi.",
  keywords: "AI receptionist, voice assistant, appointment booking, call answering, Hindi English, business automation",
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
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

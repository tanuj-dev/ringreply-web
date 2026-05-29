import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RingReply — AI Receptionist for Your Business",
  description: "Never miss a call again. RingReply answers your calls 24/7, books appointments, and sends confirmations — in English and Hindi.",
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

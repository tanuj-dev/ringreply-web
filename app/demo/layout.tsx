import type { Metadata } from "next";

// The demo page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Live Demo — Talk to RingReply's AI Receptionist",
  description:
    "Try RingReply free in your browser: call our AI receptionist or chat with the WhatsApp booking bot in Hindi or English, and watch it book an appointment in real time.",
  alternates: { canonical: "/demo" },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}

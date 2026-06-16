"use client";

import { useState } from "react";

const API = "https://api.ringreply.in";

interface Props {
  plan: "starter" | "growth" | "pro";
  label: string;
  primary?: boolean;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) { resolve(true); return; }
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });
}

export default function PayButton({ plan, label, primary = false }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePay() {
    setLoading(true);
    setError(null);
    try {
      const ok = await loadRazorpay();
      if (!ok) {
        setError("Couldn't load the payment gateway. Check your connection and try again.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${API}/razorpay/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      if (!res.ok) {
        // Log the detail for debugging, but never surface raw server messages to the user.
        console.error("create-order failed:", res.status, await res.text().catch(() => ""));
        setError("We couldn't start checkout right now. Please try again or reach us on WhatsApp.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      if (data.error) {
        console.error("create-order error:", data.error);
        setError("We couldn't start checkout right now. Please try again or reach us on WhatsApp.");
        setLoading(false);
        return;
      }

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "RingReply",
        description: data.plan_name,
        order_id: data.order_id,
        prefill: { contact: "", email: "" },
        theme: { color: "#6366f1" },
        handler: function () {
          window.location.href = "/payment-success";
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      console.error("payment flow error:", e);
      setError("Something went wrong. Please try again in a moment.");
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <button
        onClick={handlePay}
        disabled={loading}
        aria-busy={loading}
        className={`flex items-center justify-center gap-2 font-semibold py-4 rounded-xl w-full text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100
          ${primary
            ? "btn-primary text-white shadow-lg shadow-indigo-500/25"
            : "border border-white/15 text-white/70 hover:text-white hover:border-white/30 bg-white/03 hover:bg-white/06"
          }
        `}
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Opening...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            {label}
          </>
        )}
      </button>

      {error && (
        <p role="alert" className="mt-2 text-xs text-red-400 text-center leading-relaxed">
          {error}
        </p>
      )}
    </div>
  );
}

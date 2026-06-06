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

  async function handlePay() {
    setLoading(true);
    try {
      const ok = await loadRazorpay();
      if (!ok) { alert("Could not load payment gateway. Please try again."); setLoading(false); return; }

      const res = await fetch(`${API}/razorpay/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.error) { alert("Error: " + data.error); setLoading(false); return; }

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
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handlePay}
      disabled={loading}
      className={`flex items-center justify-center gap-2 font-semibold py-4 rounded-xl w-full text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100
        ${primary
          ? "btn-primary text-white shadow-lg shadow-indigo-500/25"
          : "border border-white/15 text-white/70 hover:text-white hover:border-white/30 bg-white/03 hover:bg-white/06"
        }
      `}
    >
      {loading ? (
        <>
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Opening...
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}

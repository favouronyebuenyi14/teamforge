"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage({ params }: { params: { ref: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "0";
  const invoiceId = searchParams.get("invoice") || "N/A";
  const [loading, setLoading] = useState(false);

  const handleCompletePayment = () => {
    setLoading(true);
    // Simulate successful payment processing
    setTimeout(() => {
      setLoading(false);
      router.push(`/payment-receipt/${params.ref}?status=success&invoice=${invoiceId}&amount=${amount}`);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12 font-body">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-primary p-6 md:p-10 text-white relative">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Interswitch Sandbox</p>
              <h1 className="text-2xl font-extrabold font-headline tracking-tighter italic">CHECKOUT</h1>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Total Amount</p>
              <h2 className="text-2xl font-extrabold font-headline tracking-tight whitespace-nowrap">₦ {Number(amount).toLocaleString()}</h2>
            </div>
          </div>
          {/* Decorative background circles */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl opacity-50" />
        </div>

        <div className="p-8 md:p-10 space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest font-label tracking-tighter italic">Payment Details</p>
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-sm text-slate-500 font-medium font-body italic">Invoice Number</span>
              <span className="text-sm font-bold text-blue-900 font-headline uppercase">{invoiceId}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-sm text-slate-500 font-medium font-body italic">Transaction Ref</span>
              <span className="text-sm font-bold text-blue-900 font-headline italic uppercase">{params.ref}</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1 font-label italic tracking-tighter">Mock Card Number</label>
            <input 
              readOnly 
              className="w-full bg-slate-50 border-none rounded-lg px-4 py-4 text-slate-400 font-mono shadow-inner shadow-slate-100" 
              value="5399 **** **** 8842" 
            />
            <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest px-1 italic">Interswitch Test Card (Mastercard)</p>
          </div>

          <div className="pt-4 space-y-4">
            <button 
              onClick={handleCompletePayment}
              disabled={loading}
              className="w-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim transition-all py-5 rounded-xl font-bold text-lg shadow-lg active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 uppercase font-headline"
            >
              <span className="material-symbols-outlined font-bold">lock</span>
              {loading ? "Authorizing..." : "Authorize Transaction"}
            </button>
            <button 
              onClick={() => router.back()}
              className="w-full py-4 text-sm font-bold text-slate-400 hover:text-error transition-colors uppercase tracking-widest italic"
            >
              Cancel Payment
            </button>
          </div>

          <div className="pt-8 border-t border-slate-100 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic opacity-70">Secured by Interswitch Webpay</span>
          </div>
        </div>
      </div>
    </main>
  );
}

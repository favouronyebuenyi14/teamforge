"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ReceiptPage({ params }: { params: { ref: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "success";
  const amount = searchParams.get("amount") || "0";
  const invoiceId = searchParams.get("invoice") || "N/A";

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-body text-on-surface antialiased">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md shadow-sm flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="text-xl font-extrabold text-blue-900 font-headline">AstraLab</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-sm font-bold text-primary hover:underline">Return to Dashboard</Link>
        </div>
      </nav>

      <div className="flex-grow pt-32 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-secondary/20 relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary" />
            <div className="p-10 text-center">
              <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h1 className="text-3xl font-headline font-extrabold text-blue-900 mb-2">Payment Successful!</h1>
              <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed mb-10 italic">
                Your payment has been processed successfully via Interswitch. A digital receipt has been issued and sent to your clinical records.
              </p>

              <div className="bg-slate-50 rounded-xl p-8 text-left space-y-6 mb-10 border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-label italic">Transaction Reference</span>
                  <span className="font-headline font-bold text-blue-900 uppercase tracking-tighter">{params.ref}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-label italic">Invoice Linked</span>
                  <span className="font-headline font-bold text-blue-900 uppercase tracking-tighter">#{invoiceId}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-label italic">Date & Time</span>
                  <span className="font-headline font-bold text-blue-900">{new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })} WAT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-label italic">Amount Paid</span>
                  <span className="text-3xl font-headline font-black text-secondary">₦ {Number(amount).toLocaleString()}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-slate-100 text-primary px-6 py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-slate-200 transition-all font-headline shadow-sm active:scale-[0.98]">
                  <span className="material-symbols-outlined text-xl">download</span>
                  Download PDF
                </button>
                <button className="flex-1 bg-primary text-white border border-primary px-6 py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-primary-container transition-all font-headline shadow-lg active:scale-[0.98]">
                  <span className="material-symbols-outlined text-xl">print</span>
                  Print Copy
                </button>
              </div>

              <Link 
                href="/dashboard" 
                className="w-full mt-10 py-3 text-primary font-headline font-bold flex items-center justify-center gap-2 hover:underline uppercase tracking-widest text-xs italic"
              >
                Return to Clinical Dashboard
                <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full py-8 border-t border-slate-200 bg-slate-50 text-center">
        <p className="font-inter text-xs text-slate-500 italic">© 2024 AstraLab Healthcare Systems. Secured by Interswitch Webpay.</p>
      </footer>
    </main>
  );
}

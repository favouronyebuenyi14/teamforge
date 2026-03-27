"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function BillingPage() {
  const [loading, setLoading] = useState(false);
  const [invoice, setInvoice] = useState({
    id: "INV-2024-0892",
    date: "Oct 24, 2024",
    patientName: "Chioma Blessing Okoro",
    patientId: "P-99812",
    amount: 142500,
    status: "Unpaid",
    items: [
      { name: "Comprehensive Metabolic Panel (CMP)", desc: "Standard clinical laboratory assessment of organ function", qty: 1, price: 45000 },
      { name: "Digital Chest X-Ray", desc: "High-resolution imaging including radiologist report", qty: 1, price: 32500 },
      { name: "Specialist Consultation Fee", desc: "Follow-up session with Senior Pathologist", qty: 1, price: 50000 },
      { name: "Sample Collection & Processing", desc: "Sterile bio-hazard handling and logistics", qty: 1, price: 15000 },
    ]
  });

  const handlePay = async () => {
    setLoading(true);
    try {
      // In a real app, this would call /api/payments/initiate
      // For now, we simulate a redirect to our own mock checkout
      const mockRef = `ASL-${Date.now()}`;
      window.location.href = `/checkout/${mockRef}?amount=${invoice.amount}&invoice=${invoice.id}`;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline font-extrabold text-3xl text-blue-900 tracking-tight">Invoice #{invoice.id}</h1>
          <p className="text-slate-500 flex items-center gap-2 mt-1 italic font-body">
            <span className="material-symbols-outlined text-sm">event</span> Issued on {invoice.date}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-tertiary-fixed text-tertiary text-sm font-bold flex items-center gap-2 shadow-sm uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse border border-white"></span>
            {invoice.status}
          </span>
          <div className="flex gap-2">
            <button className="p-2.5 rounded-lg border border-slate-200 text-primary hover:bg-slate-50 transition-all flex items-center gap-2 text-sm font-bold shadow-sm">
              <span className="material-symbols-outlined text-lg">print</span> Print
            </button>
            <button className="p-2.5 rounded-lg border border-slate-200 text-primary hover:bg-slate-50 transition-all flex items-center gap-2 text-sm font-bold shadow-sm">
              <span className="material-symbols-outlined text-lg">save</span> Save
            </button>
          </div>
        </div>
      </div>

      {/* Bento Layout for Billing Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Patient Card */}
        <div className="md:col-span-2 bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
             <div className="w-24 h-24 rounded-2xl bg-blue-50 flex items-center justify-center text-primary border-4 border-slate-50 shadow-inner">
                <span className="material-symbols-outlined text-4xl">person</span>
             </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1 font-label">Patient Details</p>
                <h3 className="text-xl font-extrabold text-blue-900 font-headline">{invoice.patientName}</h3>
                <p className="text-sm text-slate-500 font-medium">ID: {invoice.patientId} • 28 Years • Female</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1 font-label">Contact</p>
                <p className="text-sm font-bold text-slate-700 font-body">+234 803 123 4567</p>
                <p className="text-sm text-slate-400 font-medium">chioma.okoro@example.ng</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-50 flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
              <p className="text-xs text-slate-500 leading-relaxed font-body italic">12b Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Summary Panel */}
        <div className="bg-primary p-8 rounded-xl text-white shadow-xl shadow-primary/20 flex flex-col justify-between relative overflow-hidden h-full min-h-[250px]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80 font-label">Total Amount Due</p>
            <h2 className="text-4xl font-headline font-extrabold tracking-tight">₦ {invoice.amount.toLocaleString()}</h2>
            <p className="text-xs mt-2 opacity-60 font-medium font-body italic">Due by Oct 31, 2024</p>
          </div>
          <div className="relative z-10 mt-8">
            <button 
              onClick={handlePay}
              disabled={loading}
              className="w-full bg-secondary-fixed text-on-secondary-fixed hover:bg-white transition-all py-4 rounded-lg font-bold flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg disabled:opacity-50"
            >
              <span className="font-headline tracking-tighter text-lg italic uppercase">interswitch</span>
              {loading ? "Initializing..." : "Pay Now"}
            </button>
          </div>
        </div>

        {/* Itemized Billing Table */}
        <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
            <h3 className="font-headline font-bold text-lg text-blue-900 tracking-tight">Service Breakdown</h3>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">{invoice.items.length} Items</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Service Name & Description</th>
                  <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">Qty</th>
                  <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Unit Price</th>
                  <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {invoice.items.map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5">
                      <p className="font-bold text-blue-900 font-headline text-sm">{item.name}</p>
                      <p className="text-xs text-slate-500 mt-1 font-body">{item.desc}</p>
                    </td>
                    <td className="px-8 py-5 text-center font-bold text-slate-600 font-label">{item.qty}</td>
                    <td className="px-8 py-5 text-right font-bold text-slate-600 font-label">₦ {item.price.toLocaleString()}</td>
                    <td className="px-8 py-5 text-right font-bold text-primary font-headline">₦ {item.price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50/50 p-8 flex flex-col items-end border-t border-slate-100">
            <div className="w-full max-w-xs space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Subtotal</span>
                <span className="font-bold text-slate-700">₦ {invoice.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">VAT (7.5%)</span>
                <span className="font-bold text-slate-700">₦ {(invoice.amount * 0.075).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium italic">HMO Discount</span>
                <span className="font-bold text-secondary-fixed-dim">-₦ {(invoice.amount * 0.075).toLocaleString()}</span>
              </div>
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                <span className="font-headline font-extrabold text-lg text-blue-900 tracking-tight">Grand Total</span>
                <span className="font-headline font-extrabold text-2xl text-primary tracking-tight">₦ {invoice.amount.toLocaleString()}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EncounterPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col -m-8">
      {/* Patient Encounter Header */}
      <header className="p-6 bg-white border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sticky top-16 z-30 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-lg border border-primary/10">
            OE
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-blue-900 font-headline">Oluwaseun Eniola</h1>
              <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm">Stable</span>
            </div>
            <p className="text-sm text-slate-500 font-medium italic">34 Yrs • Male • ID: #{params.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-primary font-bold hover:bg-slate-50 transition-colors rounded-lg text-sm">Save Draft</button>
          <button 
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                router.push(`/patients/${params.id}`);
              }, 1500);
            }}
            className="px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-primary-container active:scale-95 transition-all text-sm"
          >
            {loading ? "Finalizing..." : "Finalize Encounter"}
          </button>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
        {/* Left Sidebar: Patient Summary */}
        <aside className="lg:col-span-3 bg-slate-50 p-6 space-y-8 border-r border-slate-100 overflow-y-auto max-h-[calc(100vh-140px)]">
          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 italic font-label">Clinical Snapshot</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <label className="block text-[9px] font-black text-tertiary-container uppercase mb-1 tracking-tighter italic">Critical Allergies</label>
                <p className="text-sm font-bold text-blue-900 font-body">Penicillin, Shellfish</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <label className="block text-[9px] font-black text-primary uppercase mb-1 tracking-tighter italic">Chronic Conditions</label>
                <ul className="text-sm font-bold text-blue-900 space-y-1 font-body">
                  <li>• Hypertension (Stage 1)</li>
                  <li>• Type 2 Diabetes</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 italic font-label">Metric Trend</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-slate-500 font-label">BP</span>
                <span className="text-lg font-black font-headline text-primary tracking-tighter">120/80 <span className="text-[9px] font-normal italic text-slate-400">mmHg</span></span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-slate-500 font-label">Pulse</span>
                <span className="text-lg font-black font-headline text-primary tracking-tighter">72 <span className="text-[9px] font-normal italic text-slate-400">bpm</span></span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 italic font-label">Medications</h3>
            <div className="space-y-2">
              <div className="text-[11px] bg-slate-100 p-2 rounded-lg border-l-4 border-primary shadow-sm">
                <p className="font-black text-blue-900">Metformin 500mg</p>
                <p className="text-slate-500 italic font-medium">Twice daily</p>
              </div>
              <div className="text-[11px] bg-slate-100 p-2 rounded-lg border-l-4 border-primary shadow-sm">
                <p className="font-black text-blue-900">Lisinopril 10mg</p>
                <p className="text-slate-500 italic font-medium">Once daily</p>
              </div>
            </div>
          </section>
        </aside>

        {/* Main Editor Area */}
        <div className="lg:col-span-9 p-10 space-y-10 bg-white overflow-y-auto max-h-[calc(100vh-140px)]">
          {/* AI Smart Intake Summary */}
          <section className="relative overflow-hidden bg-blue-50/50 rounded-2xl p-8 border border-primary/5 shadow-inner">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <div>
                <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-widest italic font-label">AI Decision Support Summary</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-body italic">
                  Patient reports recurring headaches for 3 days, localized to the frontal region. Severity 6/10. Associated with light sensitivity. No history of trauma. Recently started a high-stress project. Recommended focus: Migraine vs. Tension Headache.
                </p>
              </div>
            </div>
          </section>

          {/* SOAP Note Fields */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 font-label italic">
                <span className="material-symbols-outlined text-sm">edit_note</span>
                Subjective
              </label>
              <textarea 
                className="w-full bg-slate-50 rounded-xl border-none focus:ring-1 focus:ring-primary/20 p-5 text-sm font-body italic min-h-[150px] shadow-inner" 
                placeholder="Patient's complaints, history of present illness..."
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 font-label italic">
                <span className="material-symbols-outlined text-sm">visibility</span>
                Objective
              </label>
              <textarea 
                className="w-full bg-slate-50 rounded-xl border-none focus:ring-1 focus:ring-primary/20 p-5 text-sm font-body italic min-h-[150px] shadow-inner" 
                placeholder="Physical exam findings, vitals, lab results..."
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 font-label italic">
                <span className="material-symbols-outlined text-sm">psychology</span>
                Assessment
              </label>
              <textarea 
                className="w-full bg-slate-50 rounded-xl border-none focus:ring-1 focus:ring-primary/20 p-5 text-sm font-body italic min-h-[150px] shadow-inner" 
                placeholder="Clinical reasoning, differential diagnosis..."
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 font-label italic">
                <span className="material-symbols-outlined text-sm">assignment</span>
                Plan
              </label>
              <textarea 
                className="w-full bg-slate-50 rounded-xl border-none focus:ring-1 focus:ring-primary/20 p-5 text-sm font-body italic min-h-[150px] shadow-inner" 
                placeholder="Treatment, follow-up, education..."
              />
            </div>
          </section>

          {/* Diagnosis & Coding */}
          <section className="space-y-6">
            <h3 className="text-sm font-black text-blue-900 flex items-center gap-2 font-headline tracking-tight uppercase">
              <span className="material-symbols-outlined">clinical_notes</span>
              Diagnosis & Coding (ICD-10)
            </h3>
            <div className="relative">
              <input className="w-full bg-slate-50 rounded-xl border-none focus:ring-1 focus:ring-primary/20 pl-12 pr-4 py-4 text-sm font-bold shadow-sm" placeholder="Search ICD-10 codes or descriptions..." type="text"/>
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full flex items-center gap-2 shadow-sm uppercase tracking-tight">
                G43.909 - Migraine, unspecified
                <button className="material-symbols-outlined text-xs hover:text-error">close</button>
              </span>
            </div>
          </section>

          {/* Prescription / Treatment Plan Builder */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-black text-blue-900 flex items-center gap-2 font-headline tracking-tight uppercase">
                <span className="material-symbols-outlined">medication</span>
                Prescriptions & Treatments
              </h3>
              <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline uppercase tracking-widest italic">
                <span className="material-symbols-outlined text-sm">add</span> Add Item
              </button>
            </div>
            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Item / Medication</th>
                    <th className="px-6 py-4">Dosage / Frequency</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 font-body">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-blue-900">Sumatriptan 50mg Tablet</td>
                    <td className="px-6 py-5 italic text-slate-500">1 tablet at onset</td>
                    <td className="px-6 py-5 italic text-slate-500">9 tablets total</td>
                    <td className="px-6 py-5 text-right">
                      <button className="material-symbols-outlined text-slate-300 hover:text-error transition-all">delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <footer className="pt-10 mt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] text-slate-300 font-bold uppercase tracking-widest italic">
              Autosave active • Protocol compliant
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-3 bg-slate-50 text-blue-900 font-bold rounded-lg hover:bg-slate-100 transition-all text-sm shadow-sm border border-slate-200/50">
                Generate Bill
              </button>
              <button className="flex-1 md:flex-none px-10 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-container active:scale-95 transition-all text-sm">
                Sign & Finalize
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

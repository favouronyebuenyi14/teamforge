"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewAppointmentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold font-headline text-blue-900 tracking-tight">New Appointment</h2>
          <p className="text-slate-500 mt-1 italic font-medium">Schedule a clinical visit with real-time slot verification.</p>
        </div>
        <Link href="/appointments" className="text-sm font-bold text-slate-400 hover:text-primary transition-all flex items-center gap-1 uppercase tracking-widest italic font-label">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Calendar
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form Section */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary-container p-8 text-white">
            <h3 className="text-xl font-black font-headline tracking-tighter uppercase italic">Appointment Configuration</h3>
            <p className="text-blue-100/70 text-[10px] font-bold uppercase tracking-widest mt-1">Clinical Scheduling Interface v2.4</p>
          </div>
          <div className="p-10">
            <form className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic font-label">Search Patient Records</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-300 group-focus-within:text-primary transition-colors">person_search</span>
                  <input 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-none focus:ring-1 focus:ring-primary/10 shadow-inner font-body text-sm font-bold text-blue-900" 
                    placeholder="Enter name or PID..." 
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic font-label">Appointment Date</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-300">event</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-none focus:ring-1 focus:ring-primary/10 shadow-inner font-body text-sm font-bold text-blue-900" type="date"/>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic font-label">Preferred Slot</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-300">schedule</span>
                    <select className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-none focus:ring-1 focus:ring-primary/10 shadow-inner font-body text-sm font-bold text-blue-900 appearance-none italic">
                      <option>09:00 AM</option>
                      <option>10:30 AM (Limited)</option>
                      <option>11:15 AM</option>
                      <option>02:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic font-label">Consulting Practitioner</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-300">medical_services</span>
                  <select className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-none focus:ring-1 focus:ring-primary/10 shadow-inner font-body text-sm font-bold text-blue-900 appearance-none italic">
                    <option>Dr. Olumide (Cardiology)</option>
                    <option>Dr. Aisha (Pediatrics)</option>
                    <option>Dr. Okoro (Neurology)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic font-label">Clinical Priority Level</label>
                <div className="flex gap-4">
                  {['Routine', 'Urgent', 'Emergency'].map(p => (
                    <button 
                      key={p}
                      type="button"
                      className={`flex-1 py-4 rounded-xl border-2 transition-all text-[10px] font-black uppercase tracking-widest shadow-sm active:scale-95 ${
                        p === 'Routine' ? 'border-slate-100 bg-slate-50 text-slate-400 hover:border-primary/20' :
                        p === 'Urgent' ? 'border-tertiary-fixed bg-tertiary-fixed/30 text-tertiary' :
                        'border-error-container bg-error-container/30 text-error'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic font-label">Reason for Visit / Chief Complaint</label>
                <textarea 
                  className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-none focus:ring-1 focus:ring-primary/10 shadow-inner font-body text-sm font-bold text-blue-900 italic min-h-[120px]" 
                  placeholder="Summarize clinical intent..."
                />
              </div>

              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    router.push('/appointments');
                  }, 1500);
                }}
                className="w-full py-5 bg-primary text-white rounded-2xl font-black font-headline text-sm shadow-2xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all uppercase tracking-[0.2em]"
              >
                {loading ? "Authenticating Slot..." : "Secure & Save Appointment"}
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
           <div className="bg-blue-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="relative z-10">
                 <h4 className="font-extrabold text-lg leading-tight mb-4 font-headline uppercase italic">Practitioner Availability</h4>
                 <div className="space-y-4">
                    <p className="text-xs text-blue-100/70 font-medium leading-relaxed italic">
                      Dr. Olumide is current on site. Last surgery concluded at 14:00 WAT. Next shift starts in 18 hours.
                    </p>
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                       <span className="material-symbols-outlined text-secondary-fixed">verified</span>
                       <span className="text-[10px] font-black uppercase tracking-widest">Real-time Verified</span>
                    </div>
                 </div>
              </div>
              <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[120px] text-white/5 pointer-events-none">health_and_safety</span>
           </div>

           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm border-dashed">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 font-label italic">System Constraints</h4>
              <ul className="space-y-4">
                 {[
                   "Slots are valid for 24 hours only",
                   "Emergency priority bypasses queue",
                   "Practitioners may override dates",
                   "Patient must be registered in EHR"
                 ].map((t, i) => (
                   <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                      <span className="text-[11px] font-bold text-blue-900/70 italic leading-tight">{t}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}

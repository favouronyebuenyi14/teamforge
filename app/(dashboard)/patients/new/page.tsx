"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function NewPatientPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!formData.fullName || !formData.phone) {
        setError("Please provide at least a full name and phone number.");
        return;
      }

      await axios.post("/api/patients", formData);
      router.push("/patients");
      router.refresh();
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12">
      {/* Left Column: Context & Branding */}
      <div className="lg:col-span-5 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          <span className="font-label text-xs font-bold uppercase tracking-widest">New Intake</span>
        </div>
        <header className="space-y-4">
          <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-blue-900 leading-tight">
            Patient Registration.
          </h1>
          <p className="font-body text-lg text-slate-500 max-w-sm leading-relaxed italic">
            Input essential clinical data to initialize a new electronic health record. Precision at this stage ensures long-term continuity of care.
          </p>
        </header>

        <div className="hidden lg:block relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group shadow-sm border border-slate-200/50">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10" />
           <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-slate-400">
              <span className="material-symbols-outlined text-6xl mb-4">clinical_notes</span>
              <p className="font-medium">AstraLab Protocol Standard</p>
           </div>
        </div>
      </div>

      {/* Right Column: The Form Card */}
      <div className="lg:col-span-7 bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-slate-100">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="font-headline text-sm font-bold text-blue-900 block" htmlFor="name">Full Legal Name</label>
              <input 
                className="w-full bg-slate-50 border-none rounded-lg px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-1 focus:ring-primary/20 focus:bg-white transition-all shadow-sm" 
                id="name" 
                placeholder="e.g. Chinelo Adebayo" 
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-headline text-sm font-bold text-blue-900 block" htmlFor="dob">Date of Birth</label>
                <input 
                  className="w-full bg-slate-50 border-none rounded-lg px-4 py-4 text-slate-900 focus:ring-1 focus:ring-primary/20 focus:bg-white transition-all shadow-sm" 
                  id="dob" 
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="font-headline text-sm font-bold text-blue-900 block" htmlFor="gender">Gender</label>
                <select 
                  className="w-full bg-slate-50 border-none rounded-lg px-4 py-4 text-slate-900 focus:ring-1 focus:ring-primary/20 focus:bg-white transition-all shadow-sm appearance-none" 
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-headline text-sm font-bold text-blue-900 block" htmlFor="phone">Phone Number</label>
              <div className="flex gap-2">
                <span className="bg-slate-100 flex items-center px-4 rounded-lg font-body text-sm font-bold text-slate-500 border border-slate-200/50">+234</span>
                <input 
                  className="flex-1 bg-slate-50 border-none rounded-lg px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-1 focus:ring-primary/20 focus:bg-white transition-all shadow-sm" 
                  id="phone" 
                  placeholder="803 000 0000" 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-headline text-sm font-bold text-blue-900 block" htmlFor="address">Residential Address</label>
              <textarea 
                className="w-full bg-slate-50 border-none rounded-lg px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-1 focus:ring-primary/20 focus:bg-white transition-all shadow-sm min-h-[100px]" 
                id="address" 
                placeholder="e.g. Lekki Phase 1, Lagos" 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
          </div>

          {error && <div className="p-3 rounded-lg bg-error-container text-error text-sm font-medium">{error}</div>}

          <div className="pt-8 flex flex-col sm:flex-row items-center gap-4">
            <button 
              className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-headline font-bold rounded-lg shadow-lg hover:bg-primary-container transition-all active:scale-95" 
              type="submit"
              disabled={loading}
            >
              {loading ? "Saving Patient..." : "Save Patient Record"}
            </button>
            <Link 
              href="/patients"
              className="w-full sm:w-auto px-10 py-4 border border-slate-200 text-blue-900 text-center font-headline font-bold rounded-lg hover:bg-slate-50 transition-all"
            >
              Cancel
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Encrypted Sovereign Storage</span>
            </div>
            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">AstraLab Clinical Standard v4.2.0</span>
          </div>
        </form>
      </div>
    </div>
  );
}

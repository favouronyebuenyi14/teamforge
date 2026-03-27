import Link from "next/link";

export default function PatientProfilePage({ params }: { params: { id: string } }) {
  const patient = {
    id: params.id,
    name: "Chioma Adebayo",
    age: 28,
    gender: "Female",
    bloodGroup: "O+",
    status: "STABLE",
    vitals: { bp: "120/80", hr: 72, temp: 36.8, time: "2 Days Ago" },
    allergies: ["Penicillin", "Peanuts"],
    physician: { name: "Dr. Sarah Okafor", role: "Cardiologist" },
    visits: [
      { date: "Oct 12", title: "Follow-up: Hypertension Management", doctor: "Dr. Sarah Okafor", tags: ["Clinical Note", "Outpatient"], status: "Completed" },
      { date: "Sep 28", title: "Annual Wellness Screening", doctor: "Dr. Emmanuel Balogun", tags: ["Labs Attached", "Diagnostic"], status: "Completed" },
      { date: "Aug 15", title: "Emergency: Acute Migraine", doctor: "Dr. Adaeze Uzor", tags: ["Emergency", "Observation"], status: "Completed" },
    ]
  };

  return (
    <div className="space-y-10">
      {/* Profile Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-sm ring-4 ring-white border border-slate-200">
               <span className="material-symbols-outlined text-4xl">person</span>
            </div>
            <span className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm uppercase">
               {patient.status}
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-label italic">Patient ID: #{patient.id}</p>
            <h1 className="text-3xl font-extrabold font-headline text-blue-900 tracking-tight">{patient.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium pt-1 italic">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_month</span> {patient.age} Years</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">female</span> {patient.gender}</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base text-error">bloodtype</span> {patient.bloodGroup} Positive</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-slate-50 text-primary px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-100 transition-all flex items-center gap-2 border border-slate-200/50 shadow-sm active:scale-95">
             <span className="material-symbols-outlined text-lg">edit</span> Edit Profile
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg hover:bg-primary-container transition-all flex items-center gap-2 active:scale-95">
             <span className="material-symbols-outlined text-lg">stethoscope</span> Start Consultation
          </button>
        </div>
      </header>

      {/* Bento Grid: Vital Signs & Allergies */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-[160px]">
          <div className="flex justify-between items-start">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-label italic">Vital Signs (Snapshot)</h3>
            <span className="text-[10px] text-primary bg-blue-50 px-2 py-0.5 rounded-full font-bold uppercase tracking-tight">{patient.vitals.time}</span>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-6">
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase mb-1 font-label">BP</p>
              <p className="text-xl font-black font-headline text-blue-900">{patient.vitals.bp} <span className="text-[9px] text-slate-300 font-normal italic">mmHg</span></p>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase mb-1 font-label">HR</p>
              <p className="text-xl font-black font-headline text-blue-900">{patient.vitals.hr} <span className="text-[9px] text-slate-300 font-normal italic">bpm</span></p>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase mb-1 font-label">Temp</p>
              <p className="text-xl font-black font-headline text-blue-900">{patient.vitals.temp} <span className="text-[9px] text-slate-300 font-normal italic">°C</span></p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 font-label italic">Known Allergies</h3>
          <div className="flex flex-wrap gap-2">
            {patient.allergies.map(a => (
              <span key={a} className="bg-tertiary-fixed text-tertiary px-3 py-1 rounded-full text-xs font-bold shadow-sm">{a}</span>
            ))}
            <p className="text-[10px] text-slate-300 italic pt-2 font-medium">No severe drug interactions noted</p>
          </div>
        </div>

        <div className="bg-primary text-white p-8 rounded-xl shadow-xl shadow-primary/20 relative overflow-hidden flex flex-col justify-center">
           <div className="relative z-10">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4 font-label">Primary Physician</h3>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center text-white/80">
                    <span className="material-symbols-outlined">doctor</span>
                 </div>
                 <div>
                    <p className="text-sm font-black font-headline">{patient.physician.name}</p>
                    <p className="text-[10px] uppercase font-bold text-secondary-fixed">{patient.physician.role}</p>
                 </div>
              </div>
           </div>
           <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-9xl text-white/5 pointer-events-none">medical_services</span>
        </div>
      </section>

      {/* Timeline Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex border-b border-slate-50 px-8 bg-slate-50/20">
          <button className="py-5 px-8 text-sm font-black border-b-2 border-primary text-primary font-headline uppercase tracking-tight">Encounters</button>
          <button className="py-5 px-8 text-sm font-bold text-slate-400 hover:text-primary transition-all font-headline uppercase tracking-tight italic">Prescriptions</button>
          <button className="py-5 px-8 text-sm font-bold text-slate-400 hover:text-primary transition-all font-headline uppercase tracking-tight italic">Billing</button>
        </div>
        <div className="p-10">
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-2">
               <h2 className="text-xl font-extrabold font-headline text-blue-900 tracking-tight">Clinical History</h2>
               <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline uppercase tracking-widest italic">
                  Full Registry History <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </button>
            </div>
            <div className="space-y-4">
              {patient.visits.map((visit, i) => (
                <div key={i} className="group hover:bg-slate-50 transition-all rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-slate-50 w-16 h-16 shrink-0 ring-4 ring-slate-50/50">
                      <span className="text-[9px] font-black text-slate-300 uppercase italic leading-none">{visit.date.split(' ')[0]}</span>
                      <span className="text-2xl font-black text-blue-900 font-headline leading-none mt-1">{visit.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-blue-900 font-headline text-lg tracking-tight">{visit.title}</h4>
                      <p className="text-xs text-slate-500 font-medium italic mt-1">Conducted by <span className="font-bold text-primary not-italic">{visit.doctor}</span></p>
                      <div className="flex gap-2 mt-3">
                        {visit.tags.map(t => (
                          <span key={t} className="bg-slate-100 text-slate-400 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="text-right hidden md:block">
                        <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest italic">Report Status</p>
                        <p className="text-sm font-black text-secondary uppercase tracking-tight">{visit.status}</p>
                     </div>
                     <button className="w-10 h-10 rounded-full hover:bg-white text-slate-300 hover:text-primary transition-all active:scale-95 border border-transparent hover:border-slate-100 flex items-center justify-center">
                        <span className="material-symbols-outlined">more_vert</span>
                     </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

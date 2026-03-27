export default function AnalyticsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold font-headline tracking-tight text-blue-900 mb-1 tracking-tighter uppercase italic">Clinical Intelligence</h2>
          <p className="text-slate-500 font-medium italic">High-resolution analytics for AstraLab medical facilities.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="bg-primary text-white font-bold px-6 py-2.5 rounded-lg shadow-lg hover:bg-primary-container transition-all active:scale-95 italic text-sm">
             Export Analytics Master
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Patient Retention", value: "98.4%", trend: "+2.1%", type: "primary" },
          { label: "Treatment Resolution", value: "84.2%", trend: "+5.4%", type: "secondary" },
          { label: "Queue Efficiency", value: "14.2m", trend: "-4.2%", type: "tertiary" },
          { label: "Medication Adherence", value: "92.1%", trend: "+1.2%", type: "surface" }
        ].map(stat => (
          <div key={stat.label} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
             <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic font-label">{stat.label}</span>
                <span className={`material-symbols-outlined text-[14px] ${stat.type === 'primary' ? 'text-primary' : 'text-secondary'}`}>trending_up</span>
             </div>
             <div className="flex items-end justify-between">
                <h3 className="text-3xl font-black font-headline text-blue-900 tracking-tighter">{stat.value}</h3>
                <span className="text-[9px] font-black text-secondary uppercase italic leading-none">{stat.trend}</span>
             </div>
             <div className="mt-4 h-1.5 w-full bg-slate-50 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-primary rounded-full w-[80%] opacity-20 group-hover:opacity-100 transition-all" />
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-10 flex flex-col justify-center items-center min-h-[400px] border-dashed">
            <span className="material-symbols-outlined text-4xl text-slate-200 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
            <p className="text-xs font-bold text-slate-300 uppercase tracking-widest italic font-label">Interactive Dataset Visualization</p>
            <p className="text-[10px] text-slate-200 italic mt-1 uppercase font-bold tracking-tighter">Initializing AstraLab Analytics Engine v4.0...</p>
         </div>
         <div className="bg-primary p-10 rounded-3xl text-white shadow-xl shadow-primary/20 relative overflow-hidden flex flex-col justify-between h-full group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
               <h4 className="font-extrabold text-xl leading-tight mb-4 font-headline uppercase italic">Strategic Ops Intelligence</h4>
               <p className="text-sm text-blue-100/70 italic leading-relaxed font-body">
                  Clinicians utilizing AstraLab's AI Intelligence Hub see an average of 18.2% increase in patient throughput without compromising care quality.
               </p>
            </div>
            <div className="relative z-10 mt-10">
               <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 font-black text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 italic">
                  Generate CEO Report
               </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[140px] text-white/5 pointer-events-none group-hover:rotate-12 transition-transform duration-500">analytics</span>
         </div>
      </div>
    </div>
  );
}

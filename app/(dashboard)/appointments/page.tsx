export default function AppointmentsPage() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarDays = [
    { day: 1, type: 'empty' }, { day: 2, type: 'empty' }, { day: 3, type: 'empty' },
    { day: 1, type: 'date' }, { day: 2, type: 'date', apps: [{ time: "09:00", name: "T. Adenuga", status: "confirmed" }] },
    { day: 3, type: 'date' }, { day: 4, type: 'date' },
    { day: 5, type: 'date', apps: [{ time: "10:30", name: "C. Obi", status: "pending" }, { time: "14:15", name: "Emergency", status: "urgent" }] },
    { day: 6, type: 'today', apps: [{ time: "08:30", name: "B. Yusuf", status: "confirmed" }, { time: "11:00", name: "F. Okon", status: "confirmed" }] },
    { day: 7, type: 'date' }, { day: 8, type: 'date' }, { day: 9, type: 'date' }, { day: 10, type: 'date' }, { day: 11, type: 'date' }
  ];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold font-headline tracking-tight text-blue-900 mb-1">Clinic Schedule</h2>
          <p className="text-slate-500 font-medium italic">Manage and monitor daily appointments across departments</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center shadow-inner">
            <button className="px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 bg-white text-primary shadow-sm">
              <span className="material-symbols-outlined text-sm">calendar_view_month</span>
              Calendar view
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">list_alt</span>
              Detailed list
            </button>
          </div>
          <button className="bg-primary text-white font-bold px-6 py-2.5 rounded-lg shadow-lg hover:bg-primary-container transition-all active:scale-95">
             Book Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Calendar Section */}
        <div className="xl:col-span-3 bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
           <div className="px-8 py-6 flex items-center justify-between border-b border-slate-50 bg-slate-50/30">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-extrabold font-headline text-blue-900 tracking-tight">November 2024</h3>
                <div className="flex items-center gap-1">
                  <button className="p-1 hover:bg-white rounded border border-transparent hover:border-slate-200 transition-all text-slate-400">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="p-1 hover:bg-white rounded border border-transparent hover:border-slate-200 transition-all text-slate-400">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 italic">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary shadow-sm"></span> Confirmed</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400 shadow-sm"></span> Pending</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-tertiary-container shadow-sm"></span> Urgent</span>
              </div>
           </div>

           <div className="grid grid-cols-7 border-collapse">
              {days.map(day => (
                <div key={day} className="py-4 text-center border-b border-r border-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white">
                  {day}
                </div>
              ))}
              {calendarDays.map((d, i) => (
                <div key={i} className={`h-40 p-3 border-r border-b border-slate-50 transition-colors ${
                  d.type === 'empty' ? 'bg-slate-50/20' : d.type === 'today' ? 'bg-blue-50/30 ring-1 ring-inset ring-blue-100' : 'hover:bg-slate-50/30'
                }`}>
                  <span className={`text-xs font-bold font-label ${
                    d.type === 'today' ? 'bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full shadow-md' : 'text-slate-400'
                  }`}>
                    {d.day}
                  </span>
                  <div className="mt-3 space-y-1.5">
                    {d.apps?.map((app, ai) => (
                      <div key={ai} className={`text-[9px] font-bold p-1.5 rounded border-l-2 truncate shadow-sm ${
                        app.status === 'confirmed' ? 'bg-secondary-container text-on-secondary-container border-secondary' :
                        app.status === 'urgent' ? 'bg-tertiary-fixed text-tertiary border-tertiary' :
                        'bg-blue-50 text-primary border-primary'
                      }`}>
                         {app.time} - {app.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Sidebar Mini-feed */}
        <div className="space-y-8">
           <div className="bg-primary p-8 rounded-xl text-white shadow-xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <h4 className="font-extrabold text-lg leading-tight mb-6 font-headline relative z-10">Today's Overview</h4>
              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-xs font-bold opacity-70 uppercase tracking-widest">Total Volume</span>
                  <span className="text-2xl font-black font-headline tracking-tighter">24</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-xs font-bold opacity-70 uppercase tracking-widest">Checked-in</span>
                  <span className="text-2xl font-black font-headline tracking-tighter text-secondary-fixed">12</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold opacity-70 uppercase tracking-widest">Late Arrivals</span>
                  <span className="text-2xl font-black font-headline tracking-tighter text-tertiary-fixed-dim">03</span>
                </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[10px] text-slate-400 uppercase tracking-widest mb-6 font-label italic">Real-time Queue</h4>
              <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-100">
                {[
                  { time: "09:30", name: "Chioma Obi", dept: "Antenatal Care", active: true },
                  { time: "10:00", name: "Babajide Yusuf", dept: "General Checkup" },
                  { time: "10:45", name: "Funke Okon", dept: "Post-Op Review" }
                ].map((item, i) => (
                  <div key={i} className="relative pl-8">
                    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center z-10 ${
                      item.active ? 'bg-primary' : 'bg-slate-200'
                    }`} />
                    <p className={`text-xs font-black ${item.active ? 'text-primary' : 'text-blue-900'}`}>{item.time}</p>
                    <p className="font-extrabold text-blue-900 text-sm">{item.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{item.dept}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-3 text-[10px] font-bold text-slate-400 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors uppercase tracking-widest font-label shadow-sm active:scale-[0.98]">
                Expand Timeline
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

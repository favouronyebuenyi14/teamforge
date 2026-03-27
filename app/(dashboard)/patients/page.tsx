import Link from "next/link";

export default function PatientsPage() {
  const patients = [
    { id: "AL-9402", name: "Chidi Okoro", initials: "CO", phone: "+234 803 123 4567", gender: "Male", lastVisit: "Oct 12, 2024", status: "Active" },
    { id: "AL-9415", name: "Fatima Abubakar", initials: "FA", phone: "+234 706 987 6543", gender: "Female", lastVisit: "Sep 28, 2024", status: "Active" },
    { id: "AL-9388", name: "Tunde Adeniyi", initials: "TA", phone: "+234 811 555 0192", gender: "Male", lastVisit: "Aug 05, 2024", status: "Inactive" },
    { id: "AL-9422", name: "Efe Ambrose", initials: "EA", phone: "+234 905 222 8844", gender: "Female", lastVisit: "Oct 15, 2024", status: "Active" },
    { id: "AL-9301", name: "Samuel Musa", initials: "SM", phone: "+234 812 444 0001", gender: "Male", lastVisit: "Oct 10, 2024", status: "Active" },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] font-label">Medical Registry</p>
          <h1 className="text-4xl font-extrabold text-blue-900 font-headline tracking-tight">Patients</h1>
        </div>
        <Link 
          href="/patients/new"
          className="bg-primary text-white font-headline px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg hover:bg-primary-container transition-all"
        >
          <span className="material-symbols-outlined">person_add</span>
          <span className="font-bold">Add New Patient</span>
        </Link>
      </header>

      {/* Search & Filters */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">search</span>
          <input 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-slate-400" 
            placeholder="Search by name, ID, or phone number..." 
            type="text"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select className="bg-slate-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary/20 text-slate-600 font-medium py-3 px-4">
            <option>Status: All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline px-4">
            <span className="material-symbols-outlined text-lg">filter_list</span>
            Filters
          </button>
        </div>
      </section>

      {/* Patient Table */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 border-b border-slate-50">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Patient ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <span className="text-xs font-mono font-medium text-slate-400">{patient.id}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-xs">
                        {patient.initials}
                      </div>
                      <p className="text-sm font-semibold text-blue-900">{patient.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-slate-600">{patient.phone}</div>
                    <div className="text-[10px] text-slate-400 font-medium uppercase">{patient.gender}</div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase ${
                      patient.status === 'Active' ? 'bg-secondary-container text-on-secondary-container' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-primary hover:bg-blue-50 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                      </button>
                      <button className="p-2 text-primary hover:bg-blue-50 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-6 border-t border-slate-50 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-500 italic">Showing 1-10 of 1,240 patients</p>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white font-bold text-xs">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-50 text-slate-500 font-medium text-xs">2</button>
            <button className="p-2 hover:bg-slate-100 rounded-lg text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

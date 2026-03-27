import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-10">
      {/* Dashboard Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold text-blue-900 tracking-tight font-headline">Clinic Overview</h2>
          <p className="text-slate-500 mt-1 font-medium font-body italic">
            Welcome back, {session?.user?.name || "Practitioner"}. Here is what's happening today.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
          <span className="material-symbols-outlined text-primary">calendar_month</span>
          <span className="text-sm font-bold text-blue-900 font-label">
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-transparent hover:border-blue-100 transition-all shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-primary text-2xl">
              <span className="material-symbols-outlined">person</span>
            </div>
            <span className="text-[10px] font-bold text-secondary bg-secondary-container/20 px-2 py-1 rounded-full uppercase tracking-widest">+12.4%</span>
          </div>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Total Patients</p>
          <h3 className="text-3xl font-extrabold text-blue-900 mt-1 font-headline">2,842</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-transparent hover:border-blue-100 transition-all shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-primary">
              <span className="material-symbols-outlined">event_available</span>
            </div>
            <span className="text-[10px] font-bold text-secondary bg-secondary-container/20 px-2 py-1 rounded-full uppercase tracking-widest">85% Cap</span>
          </div>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Appointments Today</p>
          <h3 className="text-3xl font-extrabold text-blue-900 mt-1 font-headline">48</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-transparent hover:border-blue-100 transition-all shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-primary">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <span className="text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-blue-50">Settled</span>
          </div>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Monthly Revenue</p>
          <h3 className="text-3xl font-extrabold text-blue-900 mt-1 font-headline">₦4.2M</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-transparent hover:border-blue-100 transition-all shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-tertiary-fixed text-tertiary rounded-lg">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
            <span className="text-tertiary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-tertiary-fixed/30">Action</span>
          </div>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Pending Bills</p>
          <h3 className="text-3xl font-extrabold text-blue-900 mt-1 font-headline">12</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Revenue Trend Chart Placeholder */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 font-headline tracking-tight">Patient Volume Trend</h3>
                <p className="text-xs text-slate-500 font-medium">Weekly comparison of outpatient vs emergency</p>
              </div>
            </div>
            {/* Chart visualization */}
            <div className="h-64 w-full flex items-end gap-2 px-2 border-b border-slate-100">
               {[40, 55, 70, 30, 80, 45, 60].map((h, i) => (
                  <div key={i} className="flex-1 bg-slate-50 rounded-t-lg relative group transition-all hover:bg-primary/10">
                    <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-primary/20 rounded-t-lg" />
                    <div style={{ height: `${h + 10}%` }} className="absolute bottom-0 w-1/2 left-0 bg-primary/60 rounded-t-lg group-hover:bg-primary transition-colors" />
                  </div>
               ))}
            </div>
            <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => <span key={day}>{day}</span>)}
            </div>
          </div>

          {/* Daily Appointments List */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center">
              <h3 className="text-xl font-bold text-blue-900 font-headline tracking-tight">Daily Appointments</h3>
              <button className="text-primary text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="divide-y divide-slate-50">
              {/* Demo Appointment items */}
              {[
                { name: "Chidi Nwosu", time: "09:30 AM", status: "Completed", color: "bg-secondary-container" },
                { name: "Aisha Abubakar", time: "11:15 AM", status: "Checked-in", color: "bg-blue-50 text-blue-700" },
                { name: "Olumide Egbe", time: "01:45 PM", status: "Scheduled", color: "bg-surface-container-high" }
              ].map((app, i) => (
                <div key={i} className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary italic">
                      {app.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">{app.name}</p>
                      <p className="text-xs text-slate-500 font-medium">Routine Check-up</p>
                    </div>
                  </div>
                  <div className="text-center px-4">
                    <p className="font-bold text-blue-900">{app.time}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Time Slot</p>
                  </div>
                  <div className="min-w-[100px] text-right">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${app.color}`}>
                      {app.status}
                    </span>
                  </div>
                  <button className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center transition-all border border-transparent hover:border-slate-200 ml-4 group">
                    <span className="material-symbols-outlined text-slate-400 text-sm group-hover:text-primary">more_vert</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Recent Activity Feed */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-6 font-headline tracking-tight">Recent Activity</h3>
            <div className="space-y-8 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-100">
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-secondary z-10 shadow-sm">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <p className="text-sm font-bold text-blue-900">Payment Received</p>
                <p className="text-xs text-slate-500 mt-1">₦45,000 via Interswitch for Patient #8821</p>
                <p className="text-[10px] font-extrabold text-slate-300 mt-2 uppercase tracking-widest italic">2 mins ago</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary z-10 shadow-sm">
                  <span className="material-symbols-outlined text-sm">person_add</span>
                </div>
                <p className="text-sm font-bold text-blue-900">New Patient</p>
                <p className="text-xs text-slate-500 mt-1">Fatima Yusuf added to Ante-natal clinic</p>
                <p className="text-[10px] font-extrabold text-slate-300 mt-2 uppercase tracking-widest italic">15 mins ago</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-tertiary-fixed text-tertiary-container flex items-center justify-center z-10 shadow-sm">
                  <span className="material-symbols-outlined text-sm">assignment_late</span>
                </div>
                <p className="text-sm font-bold text-blue-900">Late Lab Results</p>
                <p className="text-xs text-slate-500 mt-1">Pathology Lab flagged 3 samples as pending</p>
                <p className="text-[10px] font-extrabold text-slate-300 mt-2 uppercase tracking-widest italic">1 hour ago</p>
              </div>
            </div>
            <button className="w-full mt-10 py-3 text-xs font-bold text-slate-500 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors uppercase tracking-widest font-label shadow-sm active:scale-[0.98]">
              Read Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

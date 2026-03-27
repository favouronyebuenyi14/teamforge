"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navItems = [
  { name: "Dashboard", icon: "dashboard", href: "/dashboard" },
  { name: "Patients", icon: "group", href: "/patients" },
  { name: "Appointments", icon: "calendar_today", href: "/appointments" },
  { name: "Billing", icon: "payments", href: "/billing" },
  { name: "Analytics", icon: "analytics", href: "/analytics" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r border-slate-200 bg-slate-50 z-50 flex flex-col py-6">
      <div className="px-6 mb-8">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-blue-900 leading-none">AstraLab</h1>
            <p className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-1">Clinical Excellence</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg mx-2 px-4 py-2.5 transition-all font-medium ${
                isActive
                  ? "bg-blue-50 text-blue-800 translate-x-1"
                  : "text-slate-600 hover:bg-slate-100 text-blue-700"
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}>
                {item.icon}
              </span>
              <span className="font-manrope text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 mt-6">
        <Link 
          href="/appointments/new"
          className="w-full bg-primary hover:bg-primary-container text-white py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/10 active:scale-95"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Appointment
        </Link>
      </div>

      <div className="mt-auto border-t border-slate-100 pt-4 space-y-1 px-2">
        <Link href="/settings" className="flex items-center gap-3 text-slate-600 px-4 py-2 hover:bg-slate-100 transition-colors rounded-lg mx-2">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-manrope text-sm">Settings</span>
        </Link>
        <button 
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full flex items-center gap-3 text-slate-600 px-4 py-2 hover:bg-slate-100 transition-colors rounded-lg mx-2"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="font-manrope text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
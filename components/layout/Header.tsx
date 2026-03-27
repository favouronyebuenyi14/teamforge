"use client";

import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="fixed top-0 right-0 left-64 z-40 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 flex justify-between items-center px-8 py-3 h-16">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            search
          </span>
          <input
            className="w-full bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-slate-400"
            placeholder="Search patients, records, or bills..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 transition-colors relative">
            <span className="material-symbols-outlined text-slate-600">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-slate-600">help</span>
          </button>
        </div>
        <div className="h-8 w-[1px] bg-slate-200"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-bold text-blue-900 leading-none capitalize">
              {session?.user?.name || "Dr. Guest"}
            </p>
            <p className="text-[10px] text-slate-500 font-medium capitalize">
              {session?.user?.role || "Practitioner"}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-primary/10 group-hover:border-primary/30 transition-all flex items-center justify-center overflow-hidden">
             <span className="material-symbols-outlined text-slate-400">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

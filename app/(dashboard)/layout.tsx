import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SessionProvider from "@/components/providers/SessionProvider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <SessionProvider session={session}>
      <div className="min-h-screen bg-surface">
        <Sidebar />
        <Header />
        <main className="ml-64 pt-24 px-8 pb-12 max-w-[1600px] min-h-screen">
          {children}
          
          <footer className="mt-20 py-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="font-manrope font-bold text-blue-900">AstraLab</span>
                <span className="text-slate-300">|</span>
                <p className="font-inter text-xs text-slate-500">
                  © 2024 AstraLab Healthcare Systems Nigeria Limited.
                </p>
              </div>
            </div>
          </footer>
        </main>

        <button className="fixed bottom-8 right-8 w-14 h-14 bg-tertiary text-white rounded-full flex items-center justify-center shadow-lg shadow-tertiary/20 hover:scale-105 active:scale-95 transition-all z-50">
          <span className="material-symbols-outlined">medical_services</span>
        </button>
      </div>
    </SessionProvider>
  );
}
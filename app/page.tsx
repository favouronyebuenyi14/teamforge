import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="pt-24 pb-20">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-3 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tighter text-blue-900 font-headline">
            AstraLab
          </span>
          <div className="hidden md:flex gap-10 text-slate-600">
            <Link href="#" className="font-semibold text-sm hover:text-primary transition-colors">Product</Link>
            <Link href="#" className="font-semibold text-sm hover:text-primary transition-colors">Solutions</Link>
            <Link href="#" className="font-semibold text-sm hover:text-primary transition-colors">Pricing</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">
            Login
          </Link>
          <Link 
            href="/register" 
            className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 lg:flex items-center gap-12 pt-12">
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
            Nigeria's Clinical Evolution
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-primary leading-tight">
            Sovereign Healthcare <br />
            Operations.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Reject the clutter of legacy medical software. AstraLab brings high-end editorial clarity to patient data, optimized for Nigerian clinics on every bandwidth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/register"
              className="px-8 py-4 bg-primary text-white font-semibold rounded shadow-lg hover:bg-primary-container transition-all flex items-center gap-2"
            >
              Get Started <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <button className="px-8 py-4 border border-outline/20 text-primary font-semibold rounded hover:bg-surface-container-low transition-all">
              Book Demo
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
              ))}
            </div>
            <p className="text-sm font-medium text-on-surface-variant">
              Trusted by 200+ Nigerian Health Facilities
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative bg-surface-container-lowest p-4 rounded-xl shadow-xl shadow-primary/5 border border-outline-variant/10 min-h-[400px] flex items-center justify-center">
             <div className="text-center p-8">
                <span className="material-symbols-outlined text-6xl text-primary/20 mb-4">dashboard</span>
                <p className="text-slate-400 font-medium">Dashboard Preview</p>
             </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Precision-Engineered Features</h2>
            <p className="text-on-surface-variant max-w-xl">Every tool is built with the Nigerian clinician's workflow in mind, ensuring 99.9% uptime even on 3G connections.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* EHR Card */}
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between group hover:shadow-lg transition-all border border-transparent hover:border-primary/10">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-4xl text-primary">medical_information</span>
                  <h3 className="text-2xl font-headline font-bold">Paperless EHR</h3>
                  <p className="text-on-surface-variant leading-relaxed max-w-md">Narrative-driven patient histories. We prioritize readability over checkboxes, making clinical notes a joy to read and write.</p>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <span className="px-3 py-1 bg-surface-container rounded text-xs font-bold text-primary uppercase">Voice-to-Text</span>
                <span className="px-3 py-1 bg-surface-container rounded text-xs font-bold text-primary uppercase">Offline-First</span>
              </div>
            </div>
            {/* Scheduling Card */}
            <div className="bg-primary p-8 rounded-xl text-white flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl">calendar_month</span>
                <h3 className="text-2xl font-headline font-bold">Smart Scheduling</h3>
                <p className="opacity-80 leading-relaxed">Automated SMS reminders via local gateways. Reduce no-shows by 40% in the first month.</p>
              </div>
              <button className="mt-6 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                EXPLORE SYSTEM <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            {/* Interswitch Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl text-secondary">account_balance</span>
                  <span className="text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded uppercase">Official Partner</span>
                </div>
                <h3 className="text-2xl font-headline font-bold">Interswitch Billing</h3>
                <p className="text-on-surface-variant leading-relaxed">Direct settlement for HMOs and private patients. Instant reconciliation for every naira earned.</p>
              </div>
            </div>
            {/* Analytics Card */}
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 group overflow-hidden relative">
              <div className="relative z-10 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-headline font-bold">Clinical Analytics</h3>
                  <p className="text-on-surface-variant">Real-time KPIs on patient outcomes, bed occupancy, and drug inventory levels.</p>
                  <ul className="space-y-3 pt-4">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Automated DHIS2 Reporting
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Predictive Stock Management
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 bg-surface-container p-6 rounded-lg flex items-end gap-2 h-32">
                  <div className="w-full bg-primary/20 rounded-t h-1/2" />
                  <div className="w-full bg-primary/40 rounded-t h-3/4" />
                  <div className="w-full bg-primary/60 rounded-t h-1/3" />
                  <div className="w-full bg-primary/80 rounded-t h-2/3" />
                  <div className="w-full bg-primary rounded-t h-4/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-highest pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center border-t border-slate-200 pt-12">
          <p className="text-slate-500 font-headline font-bold uppercase tracking-widest text-sm mb-4">AstraLab</p>
          <p className="text-slate-400 text-sm">© 2024 AstraLab Healthcare Systems Nigeria Limited.</p>
        </div>
      </footer>
    </main>
  );
}

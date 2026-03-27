"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import axios from "axios";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    clinicName: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { name, email, password, clinicName } = formData;
      if (!name || !email || !password) {
        setError("Please fill in all mandatory fields");
        return;
      }

      await axios.post("/api/auth/register", {
        name,
        email,
        password,
        clinicName,
      });

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-surface">
      <aside className="hidden md:flex md:w-5/12 lg:w-4/12 flex-col justify-between p-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-blue-900 opacity-20 mix-blend-overlay" />
        </div>
        <div className="relative z-10">
          <Link href="/" className="text-3xl font-extrabold font-headline tracking-tighter text-white">
            AstraLab
          </Link>
          <div className="space-y-6 mt-16 max-w-sm">
            <h1 className="text-5xl font-extrabold font-headline leading-[1.1] text-white tracking-tight">
              The Sovereign Clinician.
            </h1>
            <p className="text-lg text-primary-fixed-dim/80 font-body leading-relaxed">
              Join Nigeria's most sophisticated clinical ecosystem. Designed for excellence, built for trust.
            </p>
          </div>
        </div>
      </aside>

      <section className="flex-1 flex flex-col bg-surface overflow-y-auto">
        <div className="max-w-xl mx-auto w-full px-6 py-12 md:py-24">
          <header className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-extrabold font-headline text-on-surface mb-2 tracking-tight">
              Create your account
            </h2>
            <p className="text-on-surface-variant font-body">Begin your journey toward clinical excellence.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider px-1">Full Name</label>
                <input 
                  className="w-full bg-surface-container-high border-0 rounded-lg py-4 px-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" 
                  placeholder="Dr. Olusegun Adebayo" 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider px-1">Clinic / Hospital Name</label>
                <input 
                  className="w-full bg-surface-container-high border-0 rounded-lg py-4 px-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" 
                  placeholder="Lagos Island Specialist Hospital" 
                  type="text"
                  value={formData.clinicName}
                  onChange={(e) => setFormData({...formData, clinicName: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider px-1">Email Address</label>
                <input 
                  className="w-full bg-surface-container-high border-0 rounded-lg py-4 px-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" 
                  placeholder="olusegun@astralab.com" 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider px-1">Password</label>
                <input 
                  className="w-full bg-surface-container-high border-0 rounded-lg py-4 px-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" 
                  placeholder="••••••••••••" 
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <p className="text-[10px] text-on-surface-variant/60 px-1">Minimum 8 characters with at least one special symbol.</p>
              </div>
            </div>

            {error && <div className="p-3 rounded-lg bg-error-container text-error text-sm font-medium">{error}</div>}

            <div className="flex flex-col gap-6">
              <button 
                className="w-full bg-primary text-white font-bold py-5 rounded-lg shadow-lg hover:bg-primary-container transition-all"
                type="submit"
                disabled={loading}
              >
                {loading ? "Registering..." : "Complete Registration"}
              </button>
              <p className="text-center text-xs leading-relaxed text-on-surface-variant/70 italic px-4">
                By creating an account, you agree to our Terms of Service and Privacy Policy. AstraLab complies with NDPR standards.
              </p>
            </div>
          </form>

          <footer className="mt-16 text-center">
            <p className="text-sm font-body text-on-surface-variant">
              Already have a clinical profile? <Link href="/login" className="text-primary font-bold ml-1">Log in here</Link>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

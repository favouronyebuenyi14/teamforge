"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (res?.error) {
        setError(res.error === "CredentialsSignin" ? "Invalid email or password" : res.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-surface font-body text-on-surface flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Branding & Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mr-3 shadow-lg shadow-primary/10">
                <span className="material-symbols-outlined text-3xl">clinical_notes</span>
              </div>
              <span className="font-headline font-extrabold text-3xl tracking-tight text-primary">AstraLab</span>
            </div>
            <h1 className="font-headline font-bold text-2xl text-on-surface mb-2">Welcome Back</h1>
            <p className="text-on-surface-variant font-label text-sm">Enter your credentials to access clinical tools</p>
          </div>

          {/* Login Card */}
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-sm">person</span>
                  </div>
                  <input 
                    className="block w-full pl-10 bg-surface-container-high border-none rounded-lg text-sm h-12 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-outline/50" 
                    placeholder="clinician@astralab.ng" 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="block font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Password</label>
                  <Link href="#" className="text-xs font-medium text-primary hover:opacity-80 transition-opacity">Forgot Password?</Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-sm">lock</span>
                  </div>
                  <input 
                    className="block w-full pl-10 bg-surface-container-high border-none rounded-lg text-sm h-12 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-outline/50" 
                    placeholder="••••••••••••" 
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              {error && <div className="p-3 rounded-lg bg-error-container text-error text-sm font-medium">{error}</div>}

              <div className="pt-2 space-y-4">
                <button 
                  className="w-full h-12 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-container transition-all active:scale-95"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
                <div className="relative flex items-center justify-center py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-outline-variant/30"></div>
                  </div>
                  <span className="relative px-4 bg-surface-container-lowest text-[10px] font-bold uppercase tracking-widest text-outline">OR</span>
                </div>
                <button className="w-full h-12 border border-outline-variant/40 text-primary font-semibold rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center space-x-2" type="button">
                  <span className="material-symbols-outlined text-xl">vibration</span>
                  <span>Login with OTP</span>
                </button>
              </div>
            </form>
          </div>

          {/* New Account Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-on-surface-variant">
              New to the platform? <Link href="/register" className="font-bold text-primary ml-1 hover:underline">Create an Account</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-xs text-slate-500">© 2024 AstraLab Healthcare. Powered by Interswitch.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="font-inter text-xs text-slate-500 hover:text-blue-600">Pricing</Link>
            <Link href="#" className="font-inter text-xs text-slate-500 hover:text-blue-600">Privacy</Link>
            <Link href="#" className="font-inter text-xs text-slate-500 hover:text-blue-600">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

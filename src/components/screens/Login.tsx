import React from 'react';
import { motion } from 'motion/react';
import { Settings, ArrowRight, Github, Chrome } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-50">
      {/* Left Side: Form */}
      <div className="flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
              <Settings className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black text-primary tracking-tighter font-headline">Executive Architect</h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight">Welcome Back</h2>
            <p className="text-on-surface-variant text-lg">Sign in to continue your career optimization.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-widest block">Email Address</label>
              <input 
                className="w-full bg-white border border-outline-variant/30 rounded-xl p-4 text-on-surface font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                type="email" 
                placeholder="alex@sterling.com"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-widest block">Password</label>
                <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Forgot Password?</button>
              </div>
              <input 
                className="w-full bg-white border border-outline-variant/30 rounded-xl p-4 text-on-surface font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                type="password" 
                placeholder="••••••••"
              />
            </div>
            <button 
              onClick={onLogin}
              className="w-full primary-gradient text-white py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Sign In to Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
              <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">or continue with</span>
              <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-4 bg-white border border-outline-variant/30 rounded-xl hover:bg-slate-50 transition-colors">
                <Chrome className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-4 bg-white border border-outline-variant/30 rounded-xl hover:bg-slate-50 transition-colors">
                <Github className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-on-surface-variant">
            Don't have an account? <button className="text-primary font-bold hover:underline">Create an Account</button>
          </p>
        </div>
      </div>

      {/* Right Side: Visual */}
      <div className="hidden lg:block relative overflow-hidden primary-gradient">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/executive-bg/1920/1080?blur=10')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              AI-Powered Precision
            </div>
            <h3 className="text-6xl font-black font-headline tracking-tighter leading-none">
              Architecting the <br /> Future of Work.
            </h3>
            <p className="text-xl text-white/70 max-w-lg mx-auto leading-relaxed">
              Join 50,000+ executives using high-fidelity AI to optimize their career trajectory and secure board-level roles.
            </p>
            
            <div className="pt-12 grid grid-cols-3 gap-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-black font-headline">94%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Match Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-black font-headline">12k+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Roles Secured</p>
              </div>
              <div>
                <p className="text-3xl font-black font-headline">24/7</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">AI Advisory</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

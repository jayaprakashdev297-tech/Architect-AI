import React from 'react';
import { ShieldCheck, User, Mail, MapPin, Briefcase, Eye, Download, Filter } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Settings() {
  const history = [
    { id: '1', name: 'Alexander_Sterling_v4.pdf', size: '1.2 MB', type: 'Executive Bio', role: 'Global VP Sales', date: 'May 14, 2024', score: 94, status: 'Elite' },
    { id: '2', name: 'Mark_Kapoor_Portfolio.pdf', size: '2.8 MB', type: 'Tech Leader', role: 'CTO North America', date: 'Apr 28, 2024', score: 88, status: 'Strong' },
    { id: '3', name: 'Jane_Holloway_Resume.docx', size: '842 KB', type: 'Operations', role: 'Director of Logistics', date: 'Apr 12, 2024', score: 72, status: 'Review' },
    { id: '4', name: 'Robert_L_Strategic.pdf', size: '1.5 MB', type: 'General Counsel', role: 'Senior Legal Partner', date: 'Mar 30, 2024', score: 91, status: 'Elite' },
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <span className="text-primary font-bold tracking-widest text-[11px] uppercase">Account Overview</span>
          <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight">Configuration & History</h2>
        </div>
        <div className="bg-surface-container-low px-6 py-4 rounded-xl flex items-center gap-6">
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-wider">Current Plan</p>
            <p className="text-lg font-bold text-primary font-headline">Enterprise Pro</p>
          </div>
          <div className="w-[1px] h-10 bg-outline-variant/30"></div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-wider">Tokens Remaining</p>
            <p className="text-lg font-bold text-on-surface font-headline">1,240</p>
          </div>
        </div>
      </section>

      {/* Asymmetric Grid: Settings & Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Account Settings (Left - Main) */}
        <section className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
            <h3 className="text-xl font-bold text-on-surface font-headline mb-8 border-b border-outline-variant/10 pb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-wider block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-3 pl-10 text-on-surface font-medium focus:ring-2 focus:ring-primary/20" type="text" defaultValue="Alexander Sterling" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-wider block">Professional Title</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-3 pl-10 text-on-surface font-medium focus:ring-2 focus:ring-primary/20" type="text" defaultValue="Chief Strategy Officer" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-wider block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-3 pl-10 text-on-surface font-medium focus:ring-2 focus:ring-primary/20" type="email" defaultValue="a.sterling@executive-inc.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-wider block">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-3 pl-10 text-on-surface font-medium focus:ring-2 focus:ring-primary/20" type="text" defaultValue="London, United Kingdom" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
            <h3 className="text-xl font-bold text-on-surface font-headline mb-8 border-b border-outline-variant/10 pb-4">Security</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <p className="font-bold text-on-surface">Password</p>
                <p className="text-sm text-on-surface-variant/60">Last changed 4 months ago</p>
              </div>
              <button className="px-6 py-2 rounded-full border border-outline-variant font-headline text-xs font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors uppercase tracking-wider">
                Update Password
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <p className="font-bold text-on-surface">Two-Factor Authentication</p>
                <p className="text-sm text-on-surface-variant/60">Secure your account with MFA</p>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Active</span>
              </div>
            </div>
          </div>
        </section>

        {/* Plan & Usage (Right - Sidebar) */}
        <section className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-on-surface font-headline mb-2">Subscription</h3>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Your premium enterprise access is active until Oct 2024.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-on-surface-variant/60">
                  <span>Monthly Analysis Limit</span>
                  <span>82%</span>
                </div>
                <div className="w-full h-3 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full primary-gradient w-[82%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-on-surface-variant/60 italic">24/30 deep-scan reports used this month</p>
              </div>
            </div>
            <button className="relative z-10 mt-8 w-full py-4 rounded-full border-2 border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
              Manage Subscription
            </button>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10">
            <h4 className="text-sm font-bold text-on-surface font-headline mb-4 uppercase tracking-widest">Support Priority</h4>
            <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm font-bold text-on-surface">Dedicated Agent</p>
                <p className="text-xs text-on-surface-variant/60">24/7 Priority Response</p>
              </div>
            </div>
            <button className="mt-6 w-full text-center text-xs font-bold text-primary uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
              Contact Specialist
            </button>
          </div>
        </section>
      </div>

      {/* Analysis History Table */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-on-surface font-headline">Analysis History</h3>
          <div className="flex gap-2">
            <button className="p-2 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/10">
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Candidate / Resume</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Target Role</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Scan Date</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">AI Score</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {history.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center font-bold",
                          item.status === 'Elite' ? "bg-primary/10 text-primary" : "bg-surface-container-highest text-on-surface-variant/60"
                        )}>
                          {item.name.split('_').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">{item.name}</p>
                          <p className="text-xs text-on-surface-variant/60">{item.size} • {item.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-medium text-on-surface-variant">{item.role}</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant/60 font-medium">{item.date}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          "text-lg font-bold font-headline",
                          item.status === 'Elite' ? "text-primary" : item.status === 'Strong' ? "text-on-surface" : "text-tertiary"
                        )}>{item.score}</span>
                        <span className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded uppercase",
                          item.status === 'Elite' ? "bg-primary/10 text-primary" : item.status === 'Strong' ? "bg-surface-container-high text-on-surface-variant/60" : "bg-tertiary/10 text-tertiary"
                        )}>{item.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-on-surface-variant/60 hover:text-primary transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-surface-container-low flex justify-center">
            <button className="text-xs font-bold text-primary uppercase tracking-widest hover:bg-white px-8 py-3 rounded-full transition-all">
              Load Older Entries
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

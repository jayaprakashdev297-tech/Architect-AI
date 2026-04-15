import React from 'react';
import { LayoutDashboard, ArrowLeftRight, History, Settings, HelpCircle, Upload } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Screen } from '@/src/types';

interface SidebarProps {
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export default function Sidebar({ currentScreen, onScreenChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'job-match', label: 'Job Match', icon: ArrowLeftRight },
    { id: 'history', label: 'History', icon: History },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 hidden lg:flex flex-col bg-slate-50 border-r border-transparent z-40">
      <div className="flex flex-col gap-8 p-6 h-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black text-primary tracking-tighter">Architect AI</h2>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Precision Analysis</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onScreenChange(item.id as Screen)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 font-headline text-sm font-medium transition-all duration-200 rounded-xl text-left",
                  isActive 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-slate-500 hover:translate-x-1 hover:bg-slate-200/50"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button 
          onClick={() => onScreenChange('dashboard')}
          className="primary-gradient text-white rounded-full py-4 px-4 font-bold text-xs uppercase tracking-wider shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <Upload className="w-4 h-4" />
          Upload New Resume
        </button>

        <div className="mt-auto pt-6 border-t border-slate-200">
          <button className="w-full text-slate-500 hover:bg-slate-200/50 flex items-center gap-3 px-4 py-3 font-headline text-sm font-medium transition-all duration-200 rounded-xl text-left">
            <HelpCircle className="w-5 h-5" />
            <span>Help Center</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

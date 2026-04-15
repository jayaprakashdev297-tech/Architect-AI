import React from 'react';
import { Bell, HelpCircle, ChevronDown } from 'lucide-react';
import { Screen } from '@/src/types';
import { cn } from '@/src/lib/utils';

interface TopBarProps {
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export default function TopBar({ currentScreen, onScreenChange }: TopBarProps) {
  const screens = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'job-match', label: 'Job Match' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <header className="bg-slate-50/80 backdrop-blur-xl sticky top-0 z-50 shadow-[0_12px_32px_-4px_rgba(25,28,30,0.06)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold tracking-tighter text-primary font-headline">Executive Architect</h1>
          <nav className="hidden md:flex items-center gap-6">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => onScreenChange(screen.id as Screen)}
                className={cn(
                  "font-headline tracking-tight font-semibold text-sm transition-all pb-1 border-b-2",
                  currentScreen === screen.id 
                    ? "text-primary border-primary" 
                    : "text-slate-500 border-transparent hover:text-primary"
                )}
              >
                {screen.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-slate-200 pr-6">
            <button className="text-slate-500 hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-slate-500 hover:text-primary transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-on-surface">Alex Sterling</p>
              <p className="text-[10px] text-on-surface-variant font-medium">Executive Premium</p>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/executive/100/100" 
                alt="User Profile" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm ring-2 ring-primary/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
}

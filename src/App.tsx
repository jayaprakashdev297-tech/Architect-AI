import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import Dashboard from './components/screens/Dashboard';
import JobMatch from './components/screens/JobMatch';
import Settings from './components/screens/Settings';
import Login from './components/screens/Login';
import Pricing from './components/screens/Pricing';
import { Screen } from './types';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [showPricing, setShowPricing] = useState(false);

  if (currentScreen === 'login') {
    return <Login onLogin={() => setCurrentScreen('dashboard')} />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'job-match':
        return <JobMatch />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar currentScreen={currentScreen} onScreenChange={setCurrentScreen} />

      {/* Main Content Area */}
      <div className="flex-grow lg:ml-64 flex flex-col min-h-screen">
        <TopBar currentScreen={currentScreen} onScreenChange={setCurrentScreen} />

        <main className="flex-grow p-6 md:p-10 max-w-[1440px] mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="p-8 border-t border-slate-200 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1440px] mx-auto w-full">
            <p className="text-xs text-slate-400 font-medium">
              © 2024 Executive Architect AI. All rights reserved. Precision Career Engineering.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => setShowPricing(true)}
                className="text-xs font-bold text-primary hover:underline underline-offset-4 uppercase tracking-widest"
              >
                View Plans
              </button>
              <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">
                Privacy Policy
              </button>
              <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">
                Terms of Service
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Pricing Modal Overlay */}
      <AnimatePresence>
        {showPricing && (
          <motion.div
            key="pricing-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Pricing onClose={() => setShowPricing(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

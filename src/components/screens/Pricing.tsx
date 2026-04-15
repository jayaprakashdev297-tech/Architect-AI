import React from 'react';
import { Check, X, Zap, Shield, Crown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface PricingProps {
  onClose?: () => void;
}

export default function Pricing({ onClose }: PricingProps) {
  const tiers = [
    {
      name: 'Professional',
      price: '$29',
      description: 'Ideal for mid-career professionals looking for a strategic edge.',
      icon: Zap,
      features: ['10 Deep Scans / mo', 'Job Match Analysis', 'Skill Gap Identification', 'PDF Export'],
      cta: 'Start Free Trial',
      popular: false,
      color: 'text-on-surface'
    },
    {
      name: 'Executive',
      price: '$79',
      description: 'The standard for high-level leadership and board-level transitions.',
      icon: Crown,
      features: ['Unlimited Scans', 'Semantic Alignment Radar', 'Market Pulse Reports', 'Priority AI Processing', 'Dedicated Support'],
      cta: 'Upgrade to Executive',
      popular: true,
      color: 'text-primary'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for executive search firms and HR teams.',
      icon: Shield,
      features: ['Multi-user Access', 'Custom API Integration', 'Team Analytics', 'White-label Reports', 'SLA Guarantees'],
      cta: 'Contact Sales',
      popular: false,
      color: 'text-on-surface'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/40 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-50 w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 p-2 hover:bg-slate-200 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6 text-slate-500" />
        </button>

        <div className="p-12 md:p-20">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface">Precision Pricing for High-Fidelity Careers</h2>
            <p className="text-on-surface-variant text-lg">Choose the tier that aligns with your professional trajectory.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div 
                key={tier.name}
                className={cn(
                  "relative p-8 rounded-3xl flex flex-col transition-all duration-500",
                  tier.popular 
                    ? "bg-white shadow-2xl ring-2 ring-primary scale-105 z-10" 
                    : "bg-surface-container-low hover:bg-white hover:shadow-xl"
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", tier.popular ? "bg-primary text-white" : "bg-primary/10 text-primary")}>
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline text-on-surface">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-black font-headline text-on-surface">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="text-on-surface-variant font-medium">/mo</span>}
                  </div>
                  <p className="text-sm text-on-surface-variant mt-4 leading-relaxed">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-on-surface">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={cn(
                  "w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all",
                  tier.popular 
                    ? "primary-gradient text-white shadow-lg shadow-primary/20 hover:scale-[1.02]" 
                    : "bg-surface-container-highest text-on-surface hover:bg-primary hover:text-white"
                )}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-outline-variant/20 text-center">
            <p className="text-on-surface-variant font-medium">Trusted by executives at</p>
            <div className="flex flex-wrap justify-center items-center gap-12 mt-8 opacity-40 grayscale">
              <span className="text-2xl font-black font-headline tracking-tighter">FORBES</span>
              <span className="text-2xl font-black font-headline tracking-tighter">GOLDMAN</span>
              <span className="text-2xl font-black font-headline tracking-tighter">MCKINSEY</span>
              <span className="text-2xl font-black font-headline tracking-tighter">DELOITTE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

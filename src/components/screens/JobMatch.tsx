import React from 'react';
import { motion } from 'motion/react';
import { Target, User, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { cn } from '@/src/lib/utils';

const radarData = [
  { subject: 'Cloud', A: 90, fullMark: 100 },
  { subject: 'Security', A: 85, fullMark: 100 },
  { subject: 'DevOps', A: 70, fullMark: 100 },
  { subject: 'Strategy', A: 95, fullMark: 100 },
  { subject: 'Leader', A: 60, fullMark: 100 },
];

export default function JobMatch() {
  return (
    <div className="space-y-10">
      {/* Hero Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Executive Match Analysis</span>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">Senior Software Architect</h1>
          <p className="text-on-surface-variant mt-2 text-lg">Cloud Infrastructure & Platform Engineering</p>
        </div>

        {/* Match Score Gauge */}
        <div className="flex items-center gap-6 bg-surface-container-lowest p-6 rounded-full whisper-shadow border border-outline-variant/10">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8" />
              <circle className="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.85)} strokeWidth="8" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-2xl font-black text-primary">85%</span>
            </div>
          </div>
          <div>
            <div className="font-headline text-xl font-bold text-on-surface">High Match</div>
            <p className="text-xs text-on-surface-variant font-medium">Strong alignment with core requirements</p>
          </div>
        </div>
      </div>

      {/* Bento Grid Content */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Target Role Section */}
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-primary" />
                <h2 className="font-headline font-bold text-lg">Target Role Context</h2>
              </div>
              <div className="space-y-4 flex-grow">
                {[
                  { title: 'Critical Requirement', text: 'Expertise in Multi-cloud Architecture (AWS/Azure) and Microservices orchestration.', color: 'border-primary' },
                  { title: 'Key Responsibility', text: 'Leading large-scale migration from legacy monoliths to serverless environments.', color: 'border-primary' },
                  { title: 'Soft Skills', text: 'Stakeholder management and cross-functional team leadership (50+ staff).', color: 'border-secondary-container' },
                ].map((item) => (
                  <div key={item.title} className={cn("p-4 bg-surface-container-lowest rounded-lg border-l-4", item.color)}>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-on-surface-variant mb-1">{item.title}</h4>
                    <p className="text-sm font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Resume Section */}
            <div className="bg-surface-container-lowest p-6 rounded-xl whisper-shadow border border-outline-variant/10 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-primary" />
                <h2 className="font-headline font-bold text-lg">Your Resume Strength</h2>
              </div>
              <div className="space-y-4 flex-grow">
                {[
                  { title: 'Direct Match', text: '"Architected 12+ enterprise microservices on AWS using EKS and Lambda."', color: 'border-green-500' },
                  { title: 'Direct Match', text: '"Managed transformation project for Fortune 500 bank, retiring 4 legacy cores."', color: 'border-green-500' },
                  { title: 'Partial Alignment', text: 'Current resume emphasizes technical depth over the requested scale of staff management.', color: 'border-tertiary' },
                ].map((item) => (
                  <div key={item.text} className={cn("p-4 bg-surface-container-low rounded-lg border-l-4", item.color)}>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-on-surface-variant mb-1">{item.title}</h4>
                    <p className="text-sm font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Intersection Matrix */}
          <div className="bg-surface-container-lowest p-8 rounded-xl whisper-shadow border border-outline-variant/10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-headline font-bold text-xl">Skill Intersection Matrix</h2>
              <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span> Matched</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-tertiary"></span> Missing</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'AWS Solutions Architect', matched: true },
                { label: 'Kubernetes', matched: true },
                { label: 'Terraform Cloud', matched: false },
                { label: 'Python', matched: true },
                { label: 'CI/CD Pipelines', matched: true },
                { label: 'Azure DevOps', matched: false },
                { label: 'Microservices', matched: true },
                { label: 'Team Leadership', matched: true },
              ].map((skill) => (
                <div 
                  key={skill.label}
                  className={cn(
                    "px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold border transition-all",
                    skill.matched 
                      ? "bg-primary/10 text-primary border-primary/20" 
                      : "bg-tertiary/10 text-tertiary border-tertiary/20"
                  )}
                >
                  {skill.matched ? <CheckCircle2 className="w-4 h-4 fill-primary text-white" /> : <AlertCircle className="w-4 h-4" />}
                  {skill.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Analytics & Recs */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Semantic Alignment */}
          <div className="bg-surface-container-lowest p-6 rounded-xl whisper-shadow border border-outline-variant/10">
            <h2 className="font-headline font-bold text-lg mb-6">Semantic Alignment</h2>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e0e3e5" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 700 }} />
                  <Radar
                    name="Resume"
                    dataKey="A"
                    stroke="#003d9b"
                    fill="#003d9b"
                    fillOpacity={0.2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-on-surface-variant text-center mt-6 italic">Strong semantic match in Infrastructure & Strategy domains.</p>
          </div>

          {/* Top Recommendations */}
          <div className="bg-surface-container-lowest p-6 rounded-xl whisper-shadow border border-outline-variant/10">
            <h2 className="font-headline font-bold text-lg mb-6">Top Recommendations</h2>
            <ul className="space-y-4">
              {[
                { id: 1, title: 'Quantify Leadership', text: "Add specific headcount numbers for teams you've led to hit the 'Staff Management' requirement." },
                { id: 2, title: 'Incorporate "Terraform"', text: 'Infrastructure as Code is mentioned 4 times. explicitly mention Terraform or CloudFormation.' },
                { id: 3, title: 'Azure Context', text: 'While you are AWS heavy, adding a mention of hybrid Azure projects will boost your score by 12%.' },
              ].map((rec) => (
                <li key={rec.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                    <span className="font-bold text-primary text-xs">{rec.id}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{rec.title}</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{rec.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 py-3 rounded-full border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-colors">
              Apply Recommendations
            </button>
          </div>
        </div>
      </div>

      {/* Contextual FAB */}
      <div className="fixed bottom-8 right-8 z-40">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-6 py-4 rounded-full primary-gradient text-white whisper-shadow active:scale-95 transition-transform"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-headline font-bold text-sm">Optimize with AI</span>
        </motion.button>
      </div>
    </div>
  );
}

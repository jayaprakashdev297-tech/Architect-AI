import React from 'react';
import { motion } from 'motion/react';
import { FileText, BarChart3, TrendingUp, UploadCloud, MoreVertical, AlertTriangle, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  const stats = [
    { label: 'Total Resumes', value: '42', change: '+12%', icon: FileText, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Avg Match Score', value: '84', subValue: '/100', change: 'Top 5%', icon: BarChart3, color: 'text-secondary', bg: 'bg-secondary/10' },
  ];

  const recentAnalyses = [
    { id: 1, name: 'Senior_Eng_Lead_v4.pdf', time: '2 hours ago', pages: 4, score: 92, color: 'bg-primary' },
    { id: 2, name: 'Architect_Role_Amazon.docx', time: '1 day ago', pages: 2, score: 78, color: 'bg-secondary' },
    { id: 3, name: 'Consulting_Resume_2023.pdf', time: '3 days ago', pages: 3, score: 65, color: 'bg-tertiary' },
  ];

  return (
    <div className="space-y-8">
      {/* Quick Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between min-h-[140px]"
          >
            <div className="flex justify-between items-start">
              <stat.icon className={cn("w-6 h-6", stat.color)} />
              <span className={cn("text-xs font-bold px-2 py-1 rounded-md", stat.bg, stat.color)}>
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-3xl font-extrabold font-headline tracking-tighter">
                {stat.value}
                {stat.subValue && <span className="text-lg font-medium opacity-50">{stat.subValue}</span>}
              </p>
              <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 primary-gradient p-6 rounded-xl shadow-lg relative overflow-hidden flex items-center"
        >
          <div className="relative z-10 space-y-2">
            <h3 className="text-white font-headline font-bold text-xl">Resume Performance Insight</h3>
            <p className="text-white/80 text-sm max-w-[280px]">
              Your resumes for "Technical Architect" roles are performing 24% better than "Project Lead" versions.
            </p>
            <div className="flex gap-2 pt-2">
              <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-[10px] text-white font-bold uppercase tracking-tighter transition-colors">
                View Trends
              </button>
            </div>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
            <TrendingUp className="w-40 h-40 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Upload Area */}
      <section>
        <motion.div
          whileHover={{ scale: 1.005 }}
          className="group relative bg-surface-container-low border-2 border-dashed border-outline-variant/30 rounded-xl p-12 transition-all hover:bg-primary/5 hover:border-primary/50 text-center cursor-pointer"
        >
          <div className="max-w-md mx-auto space-y-6">
            <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform duration-300">
              <UploadCloud className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-headline tracking-tight text-on-surface">Upload your Narrative</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Drag and drop your PDF or DOCX file here. Our AI will analyze your career trajectory in real-time.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-outline-variant/40"></div>
              <span className="text-xs font-bold text-outline uppercase tracking-widest">or</span>
              <div className="h-[1px] w-12 bg-outline-variant/40"></div>
            </div>
            <button className="primary-gradient text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest shadow-md hover:shadow-xl transition-all">
              Browse Files
            </button>
            <p className="text-[10px] text-on-surface-variant/60 font-medium">Supported formats: PDF, DOCX, TXT. Max size: 10MB.</p>
          </div>
        </motion.div>
      </section>

      {/* Main Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-headline tracking-tight">Recent Analyses</h3>
            <button className="text-xs font-bold text-primary hover:underline underline-offset-4">View All Archive</button>
          </div>
          <div className="space-y-3">
            {recentAnalyses.map((item) => (
              <div key={item.id} className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 group hover:shadow-md transition-all border border-transparent hover:border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-sm text-on-surface">{item.name}</h4>
                  <p className="text-xs text-on-surface-variant">Last analyzed {item.time} • {item.pages} pages</p>
                </div>
                <div className="text-right flex items-center gap-6">
                  <div className="hidden sm:block">
                    <p className="text-xs font-bold text-on-surface">{item.score}/100</p>
                    <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden mt-1">
                      <div className={cn("h-full", item.color)} style={{ width: `${item.score}%` }}></div>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-surface-container transition-colors">
                    <MoreVertical className="w-5 h-5 text-on-surface-variant" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-surface-container p-6 rounded-xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Job Market Pulse</h3>
            <div className="space-y-4">
              {[
                { label: 'Cloud Infrastructure', change: '+15% Demand', color: 'bg-green-500' },
                { label: 'Legacy Migration', change: 'Steady', color: 'bg-amber-500' },
                { label: 'Generative AI Integration', change: '+40% Demand', color: 'bg-blue-500' },
              ].map((pulse) => (
                <div key={pulse.label} className="flex items-center gap-3">
                  <div className={cn("w-2 h-2 rounded-full", pulse.color)}></div>
                  <span className="text-xs font-medium">{pulse.label} ({pulse.change})</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 text-xs font-bold bg-white text-primary rounded-xl shadow-sm border border-outline-variant/10 hover:bg-primary hover:text-white transition-all">
              Full Market Report
            </button>
          </div>

          <div className="bg-tertiary/10 p-6 rounded-xl relative overflow-hidden border border-tertiary/10">
            <div className="relative z-10">
              <h3 className="text-tertiary font-bold text-sm">Critical Missing Skill</h3>
              <p className="text-tertiary/80 text-xs mt-1">
                "Terraform" is requested in 65% of your target job matches but missing in your top resume.
              </p>
              <button className="mt-4 px-4 py-2 bg-tertiary text-white rounded-full text-[10px] font-bold uppercase tracking-tighter hover:bg-tertiary/90 transition-colors">
                Update Resume
              </button>
            </div>
            <AlertTriangle className="absolute right-[-10px] bottom-[-10px] w-20 h-20 opacity-10 text-tertiary" />
          </div>
        </section>
      </div>
    </div>
  );
}

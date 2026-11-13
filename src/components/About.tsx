import React from 'react';
import { 
  User, 
  Code2, 
  BrainCircuit, 
  BarChart3, 
  Blocks, 
  GraduationCap, 
  CheckCircle,
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-xs font-mono text-brand-purple">
          <User className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          About <span className="text-gradient-purple-blue">Palak Pathan</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Final-year Computer Science student passionate about transforming theoretical computer science into production-ready software, intelligent data pipelines, and distributed applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Narrative - 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glow-card rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-purple"></span>
              Engineering Mindset & Background
            </h3>

            {personal.about.map((paragraph, index) => (
              <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Working Philosophy */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-navy-850/60 border border-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Grounded & Transparent</h4>
                  <p className="text-[12px] text-slate-400">Clear attribution of team contributions and prototype boundaries.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-navy-850/60 border border-slate-800">
                <Code2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Pragmatic Tech Stack</h4>
                  <p className="text-[12px] text-slate-400">Hands-on with modern React, TypeScript, Python, and SQL.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Academic Profile Summary Card */}
          <div className="glow-card rounded-2xl p-6 bg-gradient-to-r from-navy-900 to-navy-850 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{personal.education.degree}</h4>
                  <p className="text-xs text-slate-300">{personal.education.college}</p>
                  <p className="text-[11px] text-slate-400">{personal.education.university}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-5">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Current CGPA</span>
                  <span className="text-xl font-extrabold text-emerald-400 font-mono">{personal.education.cgpa}</span>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Graduation</span>
                  <span className="text-xl font-bold text-white font-mono">2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hands-on Experience Domains - 5 cols */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-purple" />
            <span>Hands-on Project Domains</span>
          </div>

          {/* Domain 1: AI Auditing */}
          <div className="glow-card rounded-2xl p-5 border border-slate-800 hover:border-brand-purple/50 transition-all">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">AI-Assisted Financial Auditing</h4>
                  <span className="text-[10px] font-mono bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">
                    AutoAudit
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Collaborated on detecting vendor overpayments, duplicate invoice submissions, and overdue liabilities with automated summaries powered by the Vercel AI SDK and Supabase PostgreSQL.
                </p>
              </div>
            </div>
          </div>

          {/* Domain 2: Blockchain Tokenisation */}
          <div className="glow-card rounded-2xl p-5 border border-slate-800 hover:border-brand-blue/50 transition-all">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Blocks className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">Blockchain Tokenisation Prototypes</h4>
                  <span className="text-[10px] font-mono bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/20">
                    TokenEstate
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Built smart contract prototypes using Solidity (ERC-1155) and Hardhat testing suites to explore fractional unit representation, SHA-256 document fingerprinting, and Cloudflare Worker APIs.
                </p>
              </div>
            </div>
          </div>

          {/* Domain 3: Power BI Data Analytics */}
          <div className="glow-card rounded-2xl p-5 border border-slate-800 hover:border-amber-500/50 transition-all">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">Power BI Data Analytics</h4>
                  <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                    Smart Metro
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered dimensional Star Schema models (`Fact_Metro_Operations` + 5 Dimensions) consolidating 54,882+ transit passenger records across 18 stations into actionable peak-hour heatmaps and revenue yields.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

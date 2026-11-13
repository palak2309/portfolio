import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  Calendar, 
  Layers, 
  Cpu, 
  Database 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../config/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenLinkedInModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onOpenLinkedInModal }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-grid"
    >
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-brand-violet/20 via-brand-purple/15 to-brand-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto w-full text-center space-y-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-brand-purple/30 text-xs font-mono text-slate-300 shadow-glow-purple backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5"></span>
          <span className="text-slate-200">Open for Opportunities</span>
          <span className="text-slate-600">|</span>
          <span className="text-brand-purple font-semibold">Class of 2027</span>
        </div>

        {/* Main Name & Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-white block sm:inline">PALAK </span>
            <span className="text-gradient-purple-blue">PATHAN</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 text-lg sm:text-2xl font-medium text-slate-300">
            <span className="text-slate-200 font-semibold">{personal.tagline}</span>
          </div>

          {/* Mission Quote */}
          <div className="max-w-2xl mx-auto pt-2">
            <p className="text-sm sm:text-base md:text-lg text-slate-400 italic leading-relaxed border-l-2 sm:border-l-0 sm:border-y border-white/10 py-2 sm:py-3 px-4 bg-navy-900/40 rounded-xl">
              &ldquo;{personal.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* University & Academic Credentials Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-3xl mx-auto pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-850/80 border border-slate-800 text-xs text-slate-300 hover:border-brand-purple/40 transition-colors">
            <GraduationCap className="w-4 h-4 text-brand-purple flex-shrink-0" />
            <span className="font-medium text-white">{personal.education.college}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">SPPU</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-850/80 border border-slate-800 text-xs text-slate-300 hover:border-brand-blue/40 transition-colors">
            <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-slate-400">CGPA:</span>
            <span className="font-bold text-white bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              {personal.education.cgpa}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-850/80 border border-slate-800 text-xs text-slate-300 hover:border-brand-purple/40 transition-colors">
            <Calendar className="w-4 h-4 text-brand-cyan flex-shrink-0" />
            <span className="text-slate-400">Graduation:</span>
            <span className="font-semibold text-white">2027</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-850/80 border border-slate-800 text-xs text-slate-300 hover:border-brand-purple/40 transition-colors">
            <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
            <span className="text-slate-300">{personal.location}</span>
          </div>
        </div>

        {/* Target Hiring Roles (Spektra Systems, Tech companies) */}
        <div className="pt-2">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Actively Interviewing For
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {personal.rolesTargeted.map((role) => (
              <span
                key={role}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-navy-900 border border-slate-800 text-slate-300 hover:border-brand-purple/40 hover:text-white transition-colors"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          {/* View My Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue hover:from-brand-purple hover:to-brand-cyan shadow-glow-purple hover:shadow-glow-combo transition-all duration-300 active:scale-95"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Download Resume */}
          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 border border-slate-700 bg-navy-850 hover:bg-navy-800 hover:border-brand-purple/50 hover:text-white transition-all duration-200 shadow-sm active:scale-95"
          >
            <FileText className="w-4 h-4 text-brand-purple" />
            <span>Download Resume</span>
          </button>

          {/* Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 border border-slate-800 bg-navy-900/80 hover:bg-navy-850 hover:text-white hover:border-slate-600 transition-all active:scale-95"
          >
            <Mail className="w-4 h-4 text-brand-blue" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Icons & External Profiles */}
        <div className="pt-4 flex items-center justify-center gap-4">
          {/* GitHub */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-navy-850 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-purple/50 hover:bg-navy-800 hover:shadow-glow-purple transition-all group"
            title="GitHub Profile - @palak2309"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>

          {/* LinkedIn Placeholder */}
          <button
            onClick={onOpenLinkedInModal}
            className="p-3 rounded-xl bg-navy-850 border border-slate-800 text-slate-300 hover:text-brand-blue hover:border-brand-blue/50 hover:bg-navy-800 transition-all group relative"
            title="LinkedIn Profile - Profile URL being finalized"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-brand-blue rounded-full border-2 border-navy-950"></span>
          </button>

          {/* Email Mailto */}
          <a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-xl bg-navy-850 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 hover:bg-navy-800 transition-all group"
            title={`Direct Email - ${personal.email}`}
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Bottom subtle tech highlight bar */}
        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-brand-purple" />
            <span>AI Application Engineering</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Database className="w-4 h-4 text-brand-blue" />
            <span>Power BI & Star Schema</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-brand-cyan" />
            <span>EVM Smart Contracts</span>
          </div>
        </div>

      </div>
    </section>
  );
};

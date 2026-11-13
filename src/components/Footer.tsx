import React from 'react';
import { Mail, ArrowUp, Code2, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../config/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
  onOpenLinkedInModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal, onOpenLinkedInModal }) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-navy-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-blue flex items-center justify-center font-mono font-bold text-white text-sm shadow-glow-purple">
                PP
              </div>
              <div>
                <span className="font-bold text-white text-base block">{personal.name}</span>
                <span className="text-xs font-mono text-slate-400">{personal.tagline}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Final-year B.Sc. Computer Science student at Christ College, Pune (SPPU). Focused on software engineering, AI application development, and practical data analytics.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Background</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors">Verified Certifications</a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">Education & Degree</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>

          {/* Profiles & Actions (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">
              Connect & Credentials
            </h4>

            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-850 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-purple transition-all"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenLinkedInModal}
                className="p-2.5 rounded-xl bg-navy-850 border border-slate-800 text-slate-300 hover:text-brand-blue hover:border-brand-blue transition-all"
                title="LinkedIn Profile Notice"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-navy-850 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/50 transition-all"
                title="Send Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-3 py-2 rounded-xl bg-navy-850 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-brand-purple transition-all"
              >
                Resume
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-mono transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-brand-purple" />
                <span>Back to top of page</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Verification Line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Honest & Verified Developer Portfolio &bull; Class of 2027</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-brand-blue" />
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

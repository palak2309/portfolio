import React from 'react';
import { X, Mail, Info } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../config/portfolioData';

interface LinkedInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LinkedInModal: React.FC<LinkedInModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="linkedin-modal-title"
      >
        <div className="flex items-start justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 id="linkedin-modal-title" className="text-base font-bold text-white">
                LinkedIn Profile Notice
              </h3>
              <p className="text-xs text-slate-400">Palak Pathan</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-3.5 text-sm text-slate-300">
          <div className="flex gap-2.5 bg-blue-950/40 border border-blue-800/40 rounded-xl p-3.5 text-xs text-blue-200">
            <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <p>
              Palak is currently polishing her professional LinkedIn profile and will publish the verified URL shortly. In accordance with honest disclosure standards, no unverified link is displayed.
            </p>
          </div>

          <p className="text-xs text-slate-400">
            You can verify active repositories, commit histories, and code prototypes directly on GitHub, or reach out via email:
          </p>

          <div className="space-y-2 pt-1">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-slate-700/80 text-white text-xs font-medium transition-all group"
            >
              <span className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-purple-400" />
                View Repositories on GitHub
              </span>
              <span className="text-[11px] text-slate-400 group-hover:text-purple-300">palak2309 &rarr;</span>
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Connecting%20via%20Portfolio%20-%20Palak%20Pathan`}
              className="flex items-center justify-between p-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-slate-700/80 text-white text-xs font-medium transition-all group"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                Connect via Direct Email
              </span>
              <span className="text-[11px] text-slate-400 group-hover:text-blue-300">palakpathan23@gmail.com &rarr;</span>
            </a>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};

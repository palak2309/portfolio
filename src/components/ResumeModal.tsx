import React, { useState } from 'react';
import { X, FileText, Download, Mail, CheckCircle2, AlertCircle, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadAttempt = () => {
    // Trigger download of configured resume path
    const link = document.createElement('a');
    link.href = PORTFOLIO_DATA.personal.resumeDownloadPath;
    link.download = `Palak_Pathan_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-brand-purple">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-bold text-white">
                Download Resume
              </h3>
              <p className="text-xs text-slate-400">
                Palak Pathan • B.Sc. Computer Science
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-4 text-sm text-slate-300">
          <div className="bg-navy-850 border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Target Roles Profile
              </span>
              <span className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded border border-brand-purple/20">
                Class of 2027
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Software Developer Trainee • Python Developer • AI Applications • Data Analytics (Power BI) • Blockchain Trainee
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleDownloadAttempt}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-violet to-brand-blue text-white font-semibold text-sm shadow-glow-purple hover:from-brand-purple hover:to-brand-cyan transition-all active:scale-[0.99]"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF (`Palak_Pathan_Resume.pdf`)
            </button>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Resume%20Inquiry%20-%20Palak%20Pathan`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-navy-800 hover:bg-navy-750 text-slate-200 hover:text-white text-xs font-medium transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-brand-blue" />
              Request Latest Resume Copy via Email
            </a>
          </div>

          {/* Config Notice for Deployment */}
          <div className="bg-slate-900/90 border border-slate-800/80 rounded-lg p-3 text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Resume Asset Configuration:</span>
            </div>
            <p className="pl-5 leading-normal">
              To supply your own finalized PDF, place your document as <code className="text-brand-purple font-mono">public/resume.pdf</code>. The download button above is dynamically configured to this location.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{PORTFOLIO_DATA.personal.location}</span>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1 text-slate-300 hover:text-brand-purple transition-colors"
          >
            <Copy className="w-3 h-3" />
            <span>{copied ? 'Email Copied!' : PORTFOLIO_DATA.personal.email}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

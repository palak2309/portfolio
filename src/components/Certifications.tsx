import React from 'react';
import { Award, ExternalLink, CheckCircle2, ShieldCheck, Calendar, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  const getIssuerBadge = (iconType: string) => {
    switch (iconType) {
      case 'redhat':
        return (
          <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center font-bold text-red-500 font-mono text-xs">
            RH
          </div>
        );
      case 'ibm':
        return (
          <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 font-mono text-xs">
            IBM
          </div>
        );
      case 'google':
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 font-mono text-xs">
            GOOG
          </div>
        );
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
          <Award className="w-3.5 h-3.5" />
          <span>Accredited Badges</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Verified <span className="text-gradient-purple-blue">Certifications</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Industry credentials in enterprise Python development, generative artificial intelligence, and instructional technology.
        </p>
      </div>

      {/* Certification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="glow-card rounded-2xl p-6 flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Header: Issuer Logo & Status */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                {getIssuerBadge(cert.iconType)}
                <div className="text-right">
                  <span className="text-xs font-bold text-white block">{cert.issuer}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Credential
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white leading-snug">
                {cert.title}
              </h3>

              {/* Metadata */}
              <div className="space-y-2 text-xs font-mono text-slate-400 bg-navy-850/80 p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Issue Date: <strong className="text-slate-200">{cert.date}</strong></span>
                </div>

                {cert.creditHours && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Duration: <strong className="text-slate-200">{cert.creditHours}</strong></span>
                  </div>
                )}

                {cert.validity && (
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-300 font-semibold">{cert.validity}</span>
                  </div>
                )}

                {cert.badgeId && (
                  <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800 truncate">
                    Badge ID: {cert.badgeId}
                  </div>
                )}
              </div>
            </div>

            {/* Verification Link Button */}
            <div className="pt-5 mt-4 border-t border-slate-800">
              {cert.verificationUrl ? (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-navy-850 hover:bg-navy-800 border border-slate-700/80 hover:border-brand-purple/50 shadow-sm transition-all group"
                >
                  <span>Verify on Credly</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-purple group-hover:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <div className="w-full text-center py-2 text-xs font-mono text-slate-400 bg-navy-850/40 rounded-xl border border-slate-800/60">
                  Authenticated by Google for Education
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

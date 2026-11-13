import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Maximize2,
  AlertTriangle,
  Info,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Pause,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [modalImage, setModalImage] = useState<{ url: string; title: string; caption: string } | null>(null);

  const total = projects.length;

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalImage) return; // Ignore when modal is open
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImage]);

  // Subtle auto-rotate timer (pauses on hover)
  useEffect(() => {
    if (!isAutoPlaying || modalImage !== null) return;
    const timer = setInterval(() => {
      nextProject();
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, modalImage]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-xs font-mono text-brand-purple">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Interactive 3D Carousel</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Featured <span className="text-gradient-purple-blue">Projects & Systems</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Explore genuine project interfaces and working prototypes. Click on any card or screenshot to inspect high-resolution views.
        </p>

        {/* Carousel Indicator & Control Bar */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="p-2.5 rounded-xl bg-navy-850 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-purple/50 transition-all active:scale-95 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                  activeIndex === idx
                    ? 'w-8 h-2.5 bg-gradient-to-r from-brand-violet to-brand-blue shadow-glow-purple'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${p.title}`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            aria-label="Next project"
            className="p-2.5 rounded-xl bg-navy-850 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-purple/50 transition-all active:scale-95 shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2.5 rounded-xl bg-navy-900 border border-slate-800/80 text-slate-400 hover:text-slate-200 transition-colors ml-2"
            title={isAutoPlaying ? 'Pause rotation' : 'Resume rotation'}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 3D Circular Carousel Stage */}
      <div 
        className="relative min-h-[720px] sm:min-h-[760px] md:min-h-[820px] flex items-center justify-center py-6"
        style={{ perspective: '1400px' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
          {projects.map((project, idx) => {
            // Compute circular offset relative to activeIndex
            const offset = (idx - activeIndex + total) % total;
            
            // 3D positioning parameters
            let transform = '';
            let zIndex = 10;
            let opacity = 0.4;
            let pointerEvents: 'auto' | 'none' = 'none';

            if (offset === 0) {
              // Active Center Card
              transform = 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)';
              zIndex = 30;
              opacity = 1;
              pointerEvents = 'auto';
            } else if (offset === 1) {
              // Right Card (next)
              transform = 'translateX(45%) translateZ(-160px) rotateY(-18deg) scale(0.85)';
              zIndex = 20;
              opacity = 0.55;
              pointerEvents = 'auto';
            } else if (offset === total - 1) {
              // Left Card (prev)
              transform = 'translateX(-45%) translateZ(-160px) rotateY(18deg) scale(0.85)';
              zIndex = 20;
              opacity = 0.55;
              pointerEvents = 'auto';
            } else {
              // Hidden / background card
              transform = 'translateX(0%) translateZ(-300px) scale(0.7)';
              zIndex = 5;
              opacity = 0;
            }

            const isCenter = offset === 0;

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (!isCenter) setActiveIndex(idx);
                }}
                className={`absolute top-0 w-full transition-all duration-700 ease-out ${
                  !isCenter ? 'cursor-pointer hover:opacity-80' : ''
                }`}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  pointerEvents,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className={`glow-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isCenter 
                    ? 'border-brand-purple/50 shadow-glow-combo bg-navy-900/95 backdrop-blur-xl' 
                    : 'border-slate-800 bg-navy-950/90'
                }`}>
                  
                  {/* Card Header Media: Prominent Actual Project Screenshot */}
                  <div className="relative group/screenshot w-full aspect-[16/10] bg-black/60 overflow-hidden border-b border-slate-800">
                    <img
                      src={project.screenshotUrl}
                      alt={`${project.title} actual working screenshot`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/screenshot:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay & High-Res Inspection Trigger */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent flex flex-col justify-between p-4 opacity-90 group-hover/screenshot:opacity-100 transition-opacity">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-navy-950/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Genuine Screenshot</span>
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalImage({
                              url: project.screenshotUrl,
                              title: project.title,
                              caption: project.screenshotCaption,
                            });
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-950/90 hover:bg-brand-purple text-white border border-white/20 transition-all shadow-md active:scale-95"
                          title="Click to view full-resolution screenshot"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Enlarge</span>
                        </button>
                      </div>

                      {/* Bottom Caption Pill */}
                      <div className="bg-navy-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-slate-300 truncate">
                        {project.screenshotCaption}
                      </div>
                    </div>
                  </div>

                  {/* Card Body: Details, Stack & Actions */}
                  <div className="p-6 sm:p-7 space-y-4">
                    
                    {/* Badges Bar */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-white border border-white/10">
                        PROJECT 0{idx + 1}
                      </span>

                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded border ${
                        project.badgeColor === 'purple'
                          ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                          : project.badgeColor === 'blue'
                          ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                          : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      }`}>
                        {project.type}
                      </span>

                      {project.teamDisclaimer && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-navy-850 px-2 py-0.5 rounded border border-slate-800">
                          <Users className="w-3 h-3 text-brand-purple" />
                          Team Scope
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Legal Notice for TokenEstate */}
                    {project.legalDisclaimer && (
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{project.legalDisclaimer}</span>
                      </div>
                    )}

                    {/* Team Disclaimer Notice */}
                    {project.teamDisclaimer && (
                      <div className="p-2.5 rounded-lg bg-navy-850/80 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                        <Info className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span className="leading-normal">{project.teamDisclaimer}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Capabilities List */}
                    <div className="space-y-1.5 pt-1">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-brand-purple" />
                        <span>Core Technical Capabilities</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.features.slice(0, 4).map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-1.5 p-2 rounded-lg bg-navy-850/60 border border-slate-800/80 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-tight text-[11px]">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-navy-850 border border-slate-700 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links Bar */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/80">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-blue hover:from-brand-purple hover:to-brand-cyan shadow-glow-purple transition-all active:scale-95"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 border border-slate-700 bg-navy-850 hover:bg-navy-800 hover:text-white transition-all active:scale-95"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-brand-purple" />
                        <span>GitHub Code</span>
                      </a>

                      {/* Additional Technical Deliverable Button */}
                      {project.additionalScreenshots && project.additionalScreenshots.length > 0 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const extra = project.additionalScreenshots![0];
                            setModalImage({
                              url: extra.url,
                              title: `${project.title} — ${extra.title}`,
                              caption: `Verified Technical Deliverable: ${extra.title}`,
                            });
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-brand-cyan border border-slate-800 bg-navy-900 transition-colors ml-auto"
                          title="View architecture deliverable"
                        >
                          <Layers className="w-3.5 h-3.5 text-brand-cyan" />
                          <span>{project.additionalScreenshots[0].title}</span>
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen High-Resolution Image Preview Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-5xl w-full bg-navy-900 border border-slate-700 rounded-2xl p-4 sm:p-6 overflow-hidden max-h-[92vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-slate-800">
              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Project Deliverable Screenshot</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {modalImage.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  {modalImage.caption}
                </p>
              </div>
              <button
                onClick={() => setModalImage(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Image Body */}
            <div className="py-4 overflow-auto flex-1 flex items-center justify-center bg-black/40 rounded-xl my-2 border border-slate-800/80">
              <img
                src={modalImage.url}
                alt={modalImage.title}
                className="max-w-full max-h-[68vh] object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap justify-between items-center font-mono gap-2">
              <span className="text-slate-300">Palak Pathan • Developer Portfolio</span>
              <a
                href={modalImage.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple hover:text-brand-cyan inline-flex items-center gap-1"
              >
                <span>Open original image asset</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

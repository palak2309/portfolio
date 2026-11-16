import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  ShieldCheck, 
  FileText, 
  Download, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Calendar, 
  Hash, 
  Layers, 
  Building2, 
  Users, 
  Eye, 
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA, PatentDocument } from '../config/portfolioData';

export const Achievements: React.FC = () => {
  const { patent } = PORTFOLIO_DATA;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalDoc, setModalDoc] = useState<PatentDocument | null>(null);
  const [selectedViewUrl, setSelectedViewUrl] = useState<string | null>(null);
  const [showAllApplicants, setShowAllApplicants] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = patent.documents.length;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Optional subtle auto-rotation that pauses on hover or when modal is open
  useEffect(() => {
    if (isPaused || modalDoc) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, modalDoc, totalSlides]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalDoc) {
        if (e.key === 'Escape') {
          setModalDoc(null);
          setSelectedViewUrl(null);
        }
        return;
      }
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalDoc, totalSlides]);

  const openPreviewModal = (doc: PatentDocument, viewUrl?: string) => {
    setModalDoc(doc);
    setSelectedViewUrl(viewUrl || doc.thumbnailUrl);
  };

  const closePreviewModal = () => {
    setModalDoc(null);
    setSelectedViewUrl(null);
  };

  const currentDoc = patent.documents[activeSlide];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-xs font-mono text-brand-purple">
          <Award className="w-3.5 h-3.5 text-brand-purple" />
          <span>Intellectual Property & Accreditations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Design Patent & <span className="text-gradient-purple-blue">Achievements</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Official intellectual property registered with the Controller General of Patents, Designs and Trade Marks, Government of India.
        </p>
      </div>

      {/* Primary Highlight Card: Registered Design Details */}
      <div className="glow-card rounded-3xl p-6 sm:p-8 border border-brand-purple/20 bg-navy-900/70 backdrop-blur-md mb-12 relative overflow-hidden">
        {/* Ambient background glow accents */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          {/* Top Row: Official Status & Seal */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-blue flex items-center justify-center text-white shadow-glow-purple flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-purple">
                    Government of India
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Registered Design
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {patent.achievementTitle}
                </h3>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs font-mono text-slate-400">Authority</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {patent.authority}
              </div>
            </div>
          </div>

          {/* Key Patent Specification Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                <Hash className="w-3.5 h-3.5 text-brand-purple" />
                <span>Design No.</span>
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {patent.designRegistrationNumber}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                <Hash className="w-3.5 h-3.5 text-brand-blue" />
                <span>Serial No.</span>
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {patent.serialNumber}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>Reg. Date</span>
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {patent.registrationDate}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Issue Date</span>
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {patent.dateOfIssue}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                <Layers className="w-3.5 h-3.5 text-brand-purple" />
                <span>Class</span>
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {patent.classNumber}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                <Building2 className="w-3.5 h-3.5 text-brand-blue" />
                <span>Gazette</span>
              </div>
              <div className="text-sm font-bold text-white font-mono truncate" title={patent.journalPublication}>
                Issue 44/2026
              </div>
            </div>
          </div>

          {/* Description & Novelty Statement */}
          <div className="p-4 rounded-2xl bg-navy-950/50 border border-white/5 space-y-2">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {patent.description}
            </p>
            <div className="text-[12px] font-mono text-slate-400 flex items-start gap-2 pt-1 border-t border-white/5">
              <span className="text-brand-blue shrink-0">§</span>
              <span><strong>Novelty Statement:</strong> {patent.noveltyStatement}</span>
            </div>
          </div>

          {/* Co-Applicants Attribution Section */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-purple" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  Applicants & Collaborative Attribution
                </span>
              </div>
              <span className="text-xs font-mono text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-md border border-brand-blue/20">
                {patent.applicantNote}
              </span>
            </div>

            {/* Applicants Badges / Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {patent.applicants.slice(0, showAllApplicants ? patent.applicants.length : 3).map((applicant, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors ${
                    applicant.isPrimaryStudent 
                      ? 'bg-brand-purple/15 border-brand-purple/40 text-white shadow-sm shadow-brand-purple/20' 
                      : 'bg-navy-950/60 border-white/5 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center font-mono text-[10px] text-slate-300 shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-medium truncate">
                      {applicant.name}
                    </span>
                  </div>
                  {applicant.isPrimaryStudent && (
                    <span className="text-[10px] font-mono font-semibold text-brand-purple bg-brand-purple/20 px-2 py-0.5 rounded-full shrink-0">
                      Portfolio Author
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={() => setShowAllApplicants(!showAllApplicants)}
                className="text-xs font-mono text-brand-blue hover:text-brand-purple transition-colors inline-flex items-center gap-1"
              >
                {showAllApplicants ? 'Show Less Applicants' : `View All 7 Named Applicants (${patent.applicants.length})`}
              </button>

              <span className="text-[11px] font-mono text-slate-500">
                Patent Agent: {patent.patentAgent.name} ({patent.patentAgent.registrationNumber})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Document Carousel Showcase */}
      <div className="space-y-6">
        {/* Carousel Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-brand-blue" />
              Official Patent Documents & Gazette Records
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Interactive viewer displaying the actual government registration certificates and technical drawings.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Slide Counter */}
            <div className="text-xs font-mono text-slate-400 bg-navy-900 px-3 py-1.5 rounded-lg border border-white/10">
              Document <span className="text-white font-bold">{activeSlide + 1}</span> of <span className="text-slate-300">{totalSlides}</span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 hover:border-brand-purple/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 hover:shadow-glow-purple"
                title="Previous Document"
                aria-label="Previous Document"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 hover:border-brand-blue/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 hover:shadow-glow-blue"
                title="Next Document"
                aria-label="Next Document"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Document Slide Card */}
        <div 
          ref={carouselRef}
          className="glow-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-navy-900/60 backdrop-blur-md transition-all duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Document Thumbnail Preview - 5 cols */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div 
                className="relative group w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl cursor-pointer"
                onClick={() => openPreviewModal(currentDoc)}
              >
                {/* Genuine Document Image */}
                <img
                  src={currentDoc.thumbnailUrl}
                  alt={currentDoc.title}
                  className="w-full h-full object-contain bg-white/5 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-950/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-200 shadow-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {currentDoc.badge}
                  </span>
                </div>

                {/* Hover Inspect Overlay */}
                <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                  <div className="w-12 h-12 rounded-full bg-brand-purple/80 flex items-center justify-center shadow-glow-purple">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium tracking-wide">
                    Click to Enlarge & Inspect
                  </span>
                </div>
              </div>

              {/* Alternative Views Selector (if available) */}
              {currentDoc.alternativeViews && currentDoc.alternativeViews.length > 0 && (
                <div className="w-full max-w-sm mt-3 flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono text-slate-400">Views:</span>
                  {currentDoc.alternativeViews.map((v, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        openPreviewModal(currentDoc, v.url);
                      }}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-navy-950 border border-white/10 hover:border-brand-purple/50 text-slate-300 hover:text-white transition-colors"
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Document Metadata & Actions - 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono text-brand-purple uppercase tracking-wider font-semibold">
                    Official Document
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-400">
                    {currentDoc.date}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {currentDoc.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-blue font-mono">
                  {currentDoc.subtitle}
                </p>
              </div>

              {/* Document Number & Jurisdiction Banner */}
              <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-300 flex-wrap gap-1">
                  <span className="text-slate-400">Document Identifier:</span>
                  <strong className="text-white">{currentDoc.docNumber}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-300 flex-wrap gap-1 pt-1 border-t border-white/5">
                  <span className="text-slate-400">File Format:</span>
                  <span className="text-emerald-400 font-semibold">PDF Document (Authentic Upload)</span>
                </div>
              </div>

              {/* Document Details Paragraph */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {currentDoc.details}
              </p>

              {/* Action Buttons: View Document & Download */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* View Document in New Tab / Modal */}
                <a
                  href={currentDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm px-5 py-3 rounded-xl shadow-glow-purple font-medium"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Document (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>

                {/* Download PDF Button */}
                <a
                  href={currentDoc.pdfUrl}
                  download={currentDoc.fileName}
                  className="btn-secondary inline-flex items-center gap-2 text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/10 hover:border-brand-blue/50 font-medium"
                >
                  <Download className="w-4 h-4 text-brand-blue" />
                  <span>Download</span>
                </a>

                {/* Inspect Larger View */}
                <button
                  onClick={() => openPreviewModal(currentDoc)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Preview</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots & Thumbnail Jumpers */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {patent.documents.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeSlide === index
                    ? 'w-8 h-2.5 bg-gradient-to-r from-brand-violet to-brand-blue shadow-glow-blue'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Document Thumbnails Quick Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
            {patent.documents.map((doc, idx) => (
              <button
                key={doc.id}
                onClick={() => setActiveSlide(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-200 shrink-0 ${
                  activeSlide === idx
                    ? 'bg-brand-purple/20 border-brand-purple text-white shadow-sm shadow-brand-purple/20'
                    : 'bg-navy-900 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                <span className="truncate max-w-[140px] sm:max-w-[180px]">{doc.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Document Lightbox Modal */}
      {modalDoc && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/90 backdrop-blur-md animate-fade-in"
          onClick={closePreviewModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="document-modal-title"
        >
          <div 
            className="glow-card rounded-2xl sm:rounded-3xl border border-white/10 bg-navy-900 max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-navy-950/80">
              <div className="min-w-0 pr-4">
                <span className="text-[11px] font-mono text-brand-purple uppercase tracking-wider font-semibold">
                  Official Patent Document Preview
                </span>
                <h3 id="document-modal-title" className="text-base sm:text-lg font-bold text-white truncate">
                  {modalDoc.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 truncate">
                  {modalDoc.docNumber}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={modalDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-brand-purple/20 text-brand-purple hover:bg-brand-purple/30 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open PDF</span>
                </a>
                <a
                  href={modalDoc.pdfUrl}
                  download={modalDoc.fileName}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 hover:bg-white/15 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={closePreviewModal}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Image Preview */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-950/70 flex flex-col items-center justify-center">
              <div className="relative max-w-2xl w-full">
                <img
                  src={selectedViewUrl || modalDoc.thumbnailUrl}
                  alt={modalDoc.title}
                  className="w-full h-auto max-h-[65vh] object-contain rounded-xl shadow-2xl border border-white/10 mx-auto"
                />
              </div>

              {/* View Switcher if multiple views available */}
              {modalDoc.alternativeViews && modalDoc.alternativeViews.length > 0 && (
                <div className="mt-4 flex items-center gap-2 flex-wrap justify-center">
                  <span className="text-xs font-mono text-slate-400">Available Views:</span>
                  {modalDoc.alternativeViews.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedViewUrl(v.url)}
                      className={`text-xs font-mono px-3 py-1 rounded-lg border transition-colors ${
                        (selectedViewUrl || modalDoc.thumbnailUrl) === v.url
                          ? 'bg-brand-purple border-brand-purple text-white shadow-glow-purple'
                          : 'bg-navy-900 border-white/10 text-slate-300 hover:text-white'
                      }`}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-navy-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-slate-400 text-[11px] font-mono text-center sm:text-left">
                Authentic official document rendered directly from the Patent Office submission.
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href={modalDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Open Full PDF</span>
                </a>
                <a
                  href={modalDoc.pdfUrl}
                  download={modalDoc.fileName}
                  className="btn-secondary text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

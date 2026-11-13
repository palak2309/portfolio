import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Image as ImageIcon, 
  Maximize2,
  AlertTriangle,
  Info
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedSchemaImage, setSelectedSchemaImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-xs font-mono text-brand-purple">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Featured Engineering Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Production Systems & <span className="text-gradient-purple-blue">Prototypes</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Real-world applications spanning AI-augmented financial auditing, Ethereum ERC-1155 tokenisation prototypes, and Power BI transit data warehouses.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((project, idx) => {
          const isAutoAudit = project.id === 'auto-audit';
          const isTokenEstate = project.id === 'token-estate';
          const isMetro = project.id === 'smart-metro-analytics';

          return (
            <div
              key={project.id}
              className="glow-card rounded-2xl p-6 sm:p-8 lg:p-9 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Project Overview & Features (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/10">
                      PROJECT 0{idx + 1}
                    </span>

                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
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
                        Team Collaboration
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Legal Disclaimer for TokenEstate */}
                  {project.legalDisclaimer && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5 leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block text-amber-300 mb-0.5">Notice & Clarification:</strong>
                        <span>{project.legalDisclaimer}</span>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Team Disclaimer Notice (AutoAudit & TokenEstate) */}
                  {project.teamDisclaimer && (
                    <div className="p-3 rounded-lg bg-navy-850/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="leading-normal">{project.teamDisclaimer}</span>
                    </div>
                  )}

                  {/* Features List */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                      <span>Key Capabilities & Technical Highlights</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 p-2 rounded-lg bg-navy-850/50 border border-slate-800/80 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-navy-850 border border-slate-700 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-blue hover:from-brand-purple hover:to-brand-cyan shadow-glow-purple hover:shadow-glow-combo transition-all active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 border border-slate-700 bg-navy-850 hover:bg-navy-800 hover:text-white transition-all active:scale-95"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-brand-purple" />
                      <span>View GitHub Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Visual Preview / Architecture / Placeholder (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Case 1: AutoAudit Interactive Preview Graphic */}
                  {isAutoAudit && (
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-navy-900 p-4 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-purple-300">
                          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                          Audit Pipeline Mockup
                        </span>
                        <span>Vercel AI SDK</span>
                      </div>
                      
                      <div className="space-y-2 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-navy-950 border border-purple-500/20 text-slate-300">
                          <span className="text-purple-400">$ auto-audit scan --invoices vendor_q3.csv</span>
                          <div className="mt-2 text-[11px] text-slate-400 space-y-1">
                            <p className="text-emerald-400">✓ Ingested 1,420 invoice records</p>
                            <p className="text-amber-400">! 3 duplicate invoice numbers flagged</p>
                            <p className="text-rose-400">! 2 overpayments exceeding PO tolerance</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-navy-850 border border-slate-800 text-slate-300">
                          <span className="text-xs font-bold text-white block mb-1">AI Discrepancy Summary</span>
                          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                            &ldquo;Vendor INV-9842 was submitted twice under distinct voucher IDs. Recommended mitigation: Halt batch payment pending accounts payable verification.&rdquo;
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between items-center text-[11px] text-slate-400">
                        <span>Database: Supabase PostgreSQL</span>
                        <a 
                          href="https://auto-audit-nu.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
                        >
                          Visit Platform &rarr;
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Case 2: TokenEstate Interactive Architecture Preview */}
                  {isTokenEstate && (
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-navy-900 p-4 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-blue-300">
                          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                          EVM Smart Contract Topology
                        </span>
                        <span>ERC-1155 Protocol</span>
                      </div>

                      <div className="space-y-2 font-mono text-xs">
                        <div className="p-2.5 rounded-lg bg-navy-950 border border-blue-500/20 text-slate-300 space-y-1.5">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">Token Standard:</span>
                            <span className="text-blue-300 font-bold">ERC-1155 Multi-Token</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">Document Hash:</span>
                            <span className="text-slate-300 truncate max-w-[180px]">SHA256: 7f83b165...e0640</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">Access Control:</span>
                            <span className="text-emerald-400 font-semibold">OpenZeppelin RBAC</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">Testing Harness:</span>
                            <span className="text-brand-purple">Hardhat / Ethers.js</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-navy-850 border border-slate-800 text-[11px] font-sans text-slate-400">
                          <strong className="text-white block mb-0.5">Cloudflare Worker Gateway:</strong>
                          Demonstrates zero-gas read queries and investor verification endpoints mapped to decentralized RPC nodes.
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between items-center text-[11px] text-slate-400">
                        <span>Network: Testnet Prototype</span>
                        <a 
                          href="https://palak2309-mst-tokenisation.tokenestate-palak2309.workers.dev" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                        >
                          Open Worker API &rarr;
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Case 3: Smart Metro Analytics - Architecture & Honest Placeholder Area */}
                  {isMetro && (
                    <div className="space-y-4">
                      {/* Authentic Kimball Star Schema Diagram Card */}
                      <div className="rounded-xl overflow-hidden border border-slate-800 bg-navy-900 p-4 space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                          <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                            <Layers className="w-3.5 h-3.5 text-amber-400" />
                            Dimensional Architecture
                          </span>
                          <span className="text-emerald-400 font-mono">Verified Artifact</span>
                        </div>

                        {/* Star Schema Image from Project Charter */}
                        <div 
                          className="relative rounded-lg overflow-hidden border border-slate-800 bg-black cursor-pointer group"
                          onClick={() => setSelectedSchemaImage('/images/smart_metro_star_schema.jpg')}
                          title="Click to view full high-resolution Star Schema Diagram"
                        >
                          <img
                            src="/images/smart_metro_star_schema.jpg"
                            alt="Smart Metro Star Schema Kimball Architecture (Fact_Metro_Operations, Dim_Station, Dim_Date, Dim_Time, Dim_Ticket_Type, Dim_Passenger_Type)"
                            className="w-full h-44 object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent flex items-end justify-between p-3">
                            <span className="text-[11px] font-mono text-slate-200 bg-navy-950/80 px-2 py-0.5 rounded border border-white/10">
                              Kimball Star Schema
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] text-amber-300 font-medium bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                              <Maximize2 className="w-3 h-3" />
                              Inspect Schema
                            </span>
                          </div>
                        </div>

                        {/* Project Charter Metrics */}
                        {project.metrics && (
                          <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                            {project.metrics.map((m, mIdx) => (
                              <div key={mIdx} className="p-2 rounded-lg bg-navy-850 border border-slate-800/80">
                                <span className="text-[10px] text-slate-400 block">{m.label}</span>
                                <span className="text-xs font-bold text-white">{m.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Transparent Power BI Dashboard Screenshot Placeholder as strictly requested */}
                      <div className="rounded-xl border border-dashed border-amber-500/40 bg-amber-950/10 p-4 space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-amber-300 font-semibold">
                          <ImageIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <span>Power BI Dashboard Screenshot Placeholder</span>
                        </div>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          {project.imagePlaceholder?.recommendedAction}
                        </p>
                        <div className="p-2 rounded bg-navy-950/80 border border-slate-800 text-[10px] font-mono text-slate-400">
                          Active Model: <code className="text-amber-300">Fact_Metro_Operations</code> &bull; 18 Stations &bull; 54,882 AFC Records
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* High-Resolution Schema Modal */}
      {selectedSchemaImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedSchemaImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-navy-900 border border-slate-700 rounded-2xl p-4 sm:p-6 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h4 className="text-base font-bold text-white">
                  Smart Metro Analytics — Kimball Star Schema Architecture
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  Fact_Metro_Operations linked to Dim_Station, Dim_Date, Dim_Time, Dim_Ticket_Type, Dim_Passenger_Type
                </p>
              </div>
              <button
                onClick={() => setSelectedSchemaImage(null)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
              >
                Close
              </button>
            </div>
            
            <div className="py-4 overflow-auto flex-1 flex items-center justify-center">
              <img
                src={selectedSchemaImage}
                alt="High resolution star schema diagram"
                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-slate-800"
              />
            </div>

            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center font-mono">
              <span>Verified Data Warehouse Deliverable</span>
              <span>Christ College, Pune</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

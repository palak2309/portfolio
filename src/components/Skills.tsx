import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  BarChart2, 
  Blocks, 
  Wrench, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming':
        return <Code className="w-5 h-5 text-brand-purple" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-brand-blue" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-brand-cyan" />;
      case 'Data Analytics':
        return <BarChart2 className="w-5 h-5 text-amber-400" />;
      case 'Blockchain':
        return <Blocks className="w-5 h-5 text-indigo-400" />;
      case 'Tools & Cloud':
      default:
        return <Wrench className="w-5 h-5 text-emerald-400" />;
    }
  };

  const categoriesList = ['All', ...skills.map(s => s.category)];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Technical <span className="text-gradient-purple-blue">Skills & Tooling</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Cleanly structured stack developed through academic coursework, independent engineering, and practical team prototypes.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-brand-violet to-brand-blue text-white shadow-glow-purple'
                  : 'bg-navy-850 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grouped Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((catGroup) => (
          <div
            key={catGroup.category}
            className="glow-card rounded-2xl p-6 flex flex-col justify-between border border-slate-800 hover:border-brand-purple/40 transition-all duration-300"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-navy-850 border border-slate-800">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{catGroup.category}</h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {catGroup.skills.length} core tools
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {catGroup.description}
              </p>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      skill.highlight
                        ? 'bg-navy-800 border border-brand-purple/40 text-slate-100 shadow-sm hover:border-brand-purple'
                        : 'bg-navy-850/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {skill.highlight ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="pt-5 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1 text-slate-400">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Verified in Projects
              </span>
              <span>No synthetic metrics</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiter Evaluation Note */}
      <div className="mt-8 p-4 rounded-xl bg-navy-900/60 border border-slate-800/80 text-center max-w-2xl mx-auto">
        <p className="text-xs text-slate-400">
          <strong className="text-slate-300">Honest Evaluation Policy:</strong> This portfolio does not employ arbitrary proficiency percentages or misleading skill bars. Every listed technology is anchored by code repositories, projects, or certified curriculum completion.
        </p>
      </div>
    </section>
  );
};

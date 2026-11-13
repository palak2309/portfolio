import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA.personal;

  const coreCurriculum = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Python & C)',
    'Database Management Systems (SQL & PL/SQL)',
    'Web Application Development',
    'Computer Networks & Protocols',
    'Operating Systems & Linux Architecture',
    'Software Engineering Methodologies',
    'Data Visualisation & Analytics Foundations',
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Formal <span className="text-gradient-purple-blue">Education</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Rigorous computer science curriculum emphasizing computer systems, algorithmic foundations, software design, and applied laboratory implementations.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glow-card rounded-2xl p-6 sm:p-8 lg:p-9 border border-slate-800 space-y-8">
          
          {/* Main Institution Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-blue flex items-center justify-center text-white shadow-glow-purple flex-shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-purple bg-brand-purple/10 px-2.5 py-0.5 rounded border border-brand-purple/20">
                  <span>{education.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {education.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-300">
                  {education.college}
                </p>
                <p className="text-xs text-slate-400">
                  Affiliated with {education.university}
                </p>
              </div>
            </div>

            {/* Metrics: Timeline & CGPA */}
            <div className="flex sm:flex-row md:flex-col items-start md:items-end gap-3 font-mono text-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-850 border border-slate-800 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{education.timeline}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-bold">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>CGPA: {education.cgpa} / 10.0</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-slate-400 text-[11px]">
                <MapPin className="w-3 h-3 text-rose-400" />
                <span>{education.location}</span>
              </div>
            </div>
          </div>

          {/* Academic Highlights & Coursework */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-purple" />
              <span>Core Academic Curriculum & Laboratory Coursework</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {coreCurriculum.map((course) => (
                <div
                  key={course}
                  className="flex items-start gap-2 p-3 rounded-xl bg-navy-850/60 border border-slate-800/80 text-xs text-slate-300 hover:border-slate-700 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiter Note */}
          <div className="p-4 rounded-xl bg-navy-850/40 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-cyan mt-1.5 flex-shrink-0"></span>
            <p className="leading-relaxed">
              Final-year computer science coursework concludes in 2027. Palak has maintained a <strong className="text-white">7.98 CGPA</strong> while actively building practical repositories, smart contract test harnesses, and analytics dashboards outside classroom hours.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { Download, Printer, User, Briefcase, GraduationCap, Wrench } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { personalInfo, experiences, education, skills } from '../../config/portfolio.config';

export default function Resume() {
  const handlePrint = () => window.print();

  return (
    <SectionWrapper id="resume" className="bg-dark-card/20">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          Resume
        </motion.div>
        <h2 className="section-title gradient-text">My Resume</h2>
        <p className="section-subtitle">Interactive resume viewer — download or print for offline use.</p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <a href={personalInfo.resume} download className="btn-primary" id="resume-download">
          <Download size={16} /> Download PDF
        </a>
        <button onClick={handlePrint} className="btn-secondary" id="resume-print">
          <Printer size={16} /> Print Resume
        </button>
      </div>

      {/* Resume Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-8 max-w-4xl"
        id="resume-preview"
      >
        {/* Header */}
        <div className="border-b border-slate-700 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-20 h-20 rounded-xl border-2 border-blue-500/40"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{personalInfo.name}</h1>
              <p className="text-blue-400 font-medium mt-0.5">{personalInfo.title}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-slate-500">
                <span>📧 {personalInfo.email}</span>
                <span>📞 {personalInfo.phone}</span>
                <span>📍 {personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <User size={16} className="text-blue-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Professional Summary</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{personalInfo.bio}</p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase size={16} className="text-blue-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Experience</h2>
          </div>
          {experiences.map(exp => (
            <div key={exp.id} className="mb-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-white text-sm">{exp.role}</h3>
                  <p className="text-blue-400 text-xs">{exp.company}</p>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div>{exp.duration}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <ul className="space-y-1">
                {exp.responsibilities.slice(0, 4).map((r, i) => (
                  <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-blue-500 flex-shrink-0">•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap size={16} className="text-blue-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Education</h2>
          </div>
          <div className="space-y-2">
            {education.map(edu => (
              <div key={edu.id} className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-white text-sm">{edu.degree}</h3>
                  <p className="text-slate-400 text-xs">{edu.institution}</p>
                </div>
                {edu.location && <span className="text-xs text-slate-500">{edu.location}</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Key Skills */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Wrench size={16} className="text-blue-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Key Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.filter(s => s.level >= 75).map(s => (
              <span key={s.name} className="tag text-xs">{s.name}</span>
            ))}
          </div>
        </section>
      </motion.div>
    </SectionWrapper>
  );
}

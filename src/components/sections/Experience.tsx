import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Building2, CheckCircle } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { experiences } from '../../config/portfolio.config';

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>(experiences[0]?.id || null);

  return (
    <SectionWrapper id="experience">
      {/* Header */}
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          Work Experience
        </motion.div>
        <h2 className="section-title gradient-text">Professional Journey</h2>
        <p className="section-subtitle">
          {experiences[0]?.duration} of dedicated service — building systems, managing records, and solving real problems every day.
        </p>
      </div>

      <div className="max-w-4xl">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-blue-600 shadow-glow" />
            <div className="absolute left-1.5 top-9 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-transparent" />

            <div className="ml-8 mb-8">
              <div
                className="card card-hover cursor-pointer overflow-hidden"
                onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
              >
                {/* Header */}
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Company icon */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-glow">
                        <Building2 size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-blue-400 font-semibold text-sm mt-0.5">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={11} />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} />
                            {exp.location}
                          </span>
                          <span className="tag text-xs capitalize">{exp.type}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-slate-500 flex-shrink-0"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>

                  {/* Tech tags always visible */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="tag text-xs">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Expandable content */}
                <AnimatePresence>
                  {expanded === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 border-t border-slate-800 pt-6 grid sm:grid-cols-2 gap-6">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="w-4 h-4 rounded bg-blue-600/20 flex items-center justify-center">
                              <span className="text-blue-400 text-xs">R</span>
                            </span>
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                                <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                            <CheckCircle size={14} className="text-green-400" />
                            Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                                {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Note about software work */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ml-8 glass border border-blue-500/20 rounded-2xl p-5"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="text-white font-semibold mb-1">Independent Software Development</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Alongside my professional career, I independently develop management software solutions — including queue management, membership systems, and financial tools — using React and modern web technologies. See the <button className="text-blue-400 hover:underline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button> and <button className="text-blue-400 hover:underline" onClick={() => document.getElementById('software-portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Software Portfolio</button> sections for details.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

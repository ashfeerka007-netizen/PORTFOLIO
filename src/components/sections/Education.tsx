import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { education } from '../../config/portfolio.config';

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-dark-card/20">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          Education
        </motion.div>
        <h2 className="section-title gradient-text">Academic Background</h2>
        <p className="section-subtitle">
          A strong foundation in commerce and co-operative management — the business knowledge behind the software.
        </p>
      </div>

      <div className="max-w-3xl space-y-6 relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-5 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-500 to-transparent" />

        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-5 pl-2"
          >
            {/* Icon dot */}
            <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/30">
              <GraduationCap size={16} className="text-white" />
            </div>

            {/* Card */}
            <div className="animated-border flex-1 mb-2">
              <div className="card p-5 hover:border-blue-500/30 transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm">{edu.field}</p>
                  </div>
                  <div className="text-right text-xs text-slate-500 space-y-1">
                    {edu.duration && (
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar size={10} />
                        {edu.duration}
                      </div>
                    )}
                    <div className="flex items-center gap-1 justify-end">
                      <MapPin size={10} />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm font-medium">{edu.institution}</p>

                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {edu.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Continuous learning note */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 glass border border-green-500/20 rounded-2xl p-5 max-w-3xl"
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl">🌱</span>
          <div>
            <h4 className="text-white font-semibold mb-1">Continuous Learning</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Beyond formal education, I'm an active self-learner — continuously studying React, TypeScript, system design, and software engineering best practices through online resources, documentation, and hands-on project building.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

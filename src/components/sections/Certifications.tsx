import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { certifications } from '../../config/portfolio.config';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          Certifications
        </motion.div>
        <h2 className="section-title gradient-text">Credentials & Certifications</h2>
        <p className="section-subtitle">
          Professional certifications validating expertise across technical and administrative domains.
        </p>
      </div>

      {certifications.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="animated-border"
            >
              <div className="card p-5 group hover:border-blue-500/30 transition-all h-full flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center border border-yellow-500/20">
                    <Award size={18} className="text-yellow-400" />
                  </div>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-400 transition-colors">
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-sm mb-1">{cert.title}</h3>
                  <p className="text-blue-400 text-xs font-medium">{cert.organization}</p>
                  {cert.issueDate && <p className="text-slate-500 text-xs mt-1">Issued: {cert.issueDate}</p>}
                  {cert.expiryDate && <p className="text-slate-500 text-xs">Expires: {cert.expiryDate}</p>}
                </div>
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map(s => <span key={s} className="tag text-xs">{s}</span>)}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="max-w-xl">
          {/* Empty state */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 text-center border-dashed"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mx-auto mb-4">
              <Award size={28} className="text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Certifications Coming Soon</h3>
            <p className="text-slate-500 text-sm mb-4">
              Currently pursuing certifications in software development and cloud technologies. Will be updated as earned.
            </p>
            <p className="text-slate-600 text-xs">
              Edit <code className="text-blue-400 font-mono">src/config/portfolio.config.ts</code> to add your certifications.
            </p>
          </motion.div>

          {/* Upcoming */}
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold text-slate-400">🎯 In Progress / Planned</h4>
            {[
              'Google IT Support Certificate',
              'Meta Front-End Developer Certificate',
              'AWS Cloud Practitioner',
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-3 card p-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm text-slate-400">{cert}</span>
                <span className="ml-auto tag text-xs">Planned</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}

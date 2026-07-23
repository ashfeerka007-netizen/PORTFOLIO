import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, ChevronRight, Layers, Cpu, Lightbulb, Rocket } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { softwarePortfolio } from '../../config/portfolio.config';

export default function SoftwarePortfolio() {
  const [selected, setSelected] = useState(softwarePortfolio[0].id);
  const activeProject = softwarePortfolio.find(p => p.id === selected)!;

  return (
    <SectionWrapper id="software-portfolio" className="bg-dark-card/20">
      {/* Header */}
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          Software Portfolio
        </motion.div>
        <h2 className="section-title gradient-text">Systems I've Built</h2>
        <p className="section-subtitle">
          Complete software solutions designed and developed to solve real operational challenges in businesses and organizations.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 min-h-[600px]">
        {/* Sidebar: Project List */}
        <div className="lg:col-span-2 space-y-3">
          {softwarePortfolio.map(project => (
            <motion.button
              key={project.id}
              onClick={() => setSelected(project.id)}
              whileHover={{ x: 4 }}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                selected === project.id
                  ? 'bg-blue-600/15 border-blue-500/40 shadow-glow'
                  : 'card border-transparent hover:border-slate-700'
              }`}
              id={`portfolio-${project.id}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-xl flex-shrink-0`}>
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-white truncate">{project.title}</div>
                  <div className="text-xs text-slate-500 truncate">{project.tagline}</div>
                </div>
                {selected === project.id && (
                  <ChevronRight size={16} className="text-blue-400 flex-shrink-0" />
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Main Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 card overflow-hidden"
          >
            {/* Header */}
            <div className={`h-2 bg-gradient-to-r ${activeProject.color}`} />
            <div className="p-6 border-b border-slate-800">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeProject.color} flex items-center justify-center text-2xl`}>
                    {activeProject.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{activeProject.title}</h3>
                    <p className="text-slate-400 text-sm">{activeProject.tagline}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {activeProject.githubUrl && (
                    <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-ghost text-xs px-3 py-1.5" id={`portfolio-github-${activeProject.id}`}>
                      <GitBranch size={13} /> GitHub
                    </a>
                  )}
                  {activeProject.liveUrl && (
                    <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-primary text-xs px-3 py-1.5" id={`portfolio-live-${activeProject.id}`}>
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[480px] space-y-5">
              {/* Overview */}
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                  <Layers size={14} className="text-blue-400" /> Overview
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{activeProject.overview}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                  <Rocket size={14} className="text-green-400" /> Key Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-1.5">
                  {activeProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                  <Cpu size={14} className="text-cyan-400" /> Architecture
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{activeProject.architecture}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map(tech => (
                    <span key={tech} className="tag text-xs">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                  <Lightbulb size={14} className="text-yellow-400" /> Challenges Solved
                </h4>
                <ul className="space-y-1">
                  {activeProject.challenges.map((ch, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-yellow-500 mt-0.5 flex-shrink-0">⚡</span>
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">🔮 Planned Improvements</h4>
                <ul className="space-y-1">
                  {activeProject.future.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot placeholder */}
              <div className="rounded-xl border-2 border-dashed border-slate-700 p-6 text-center">
                <span className="text-3xl block mb-2">{activeProject.icon}</span>
                <p className="text-slate-600 text-xs">Screenshot placeholder — replace with actual screenshots</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

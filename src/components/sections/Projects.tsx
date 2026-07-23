import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../config/portfolio.config';
import type { Project } from '../../types';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Management', value: 'management' },
  { label: 'Open Source', value: 'open-source' },
  { label: 'In Progress', value: 'in-progress' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p => {
    const matchFilter =
      activeFilter === 'all' ||
      p.category.includes(activeFilter as Project['category'][number]) ||
      (activeFilter === 'in-progress' && p.status === 'in-progress');
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.techStack.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchFilter && matchSearch;
  });

  return (
    <SectionWrapper id="projects">
      {/* Header */}
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          Projects
        </motion.div>
        <h2 className="section-title gradient-text">What I've Built</h2>
        <p className="section-subtitle">
          Real software solving real problems. Every project is built from my experience understanding operational challenges firsthand.
        </p>
      </div>

      {/* Filters + Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl glass border border-slate-700/40 bg-transparent text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 transition-all"
            id="project-search"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filterOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === opt.value
                  ? 'bg-blue-600 text-white shadow-glow'
                  : 'glass border border-slate-700/40 text-slate-400 hover:text-white'
              }`}
              id={`filter-${opt.value}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No projects match your search.</p>
          <button onClick={() => { setSearch(''); setActiveFilter('all'); }} className="btn-ghost mt-4">
            Clear filters
          </button>
        </div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/ashfeerka007-netizen"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex"
          id="view-all-github"
        >
          View All on GitHub →
        </a>
      </motion.div>
    </SectionWrapper>
  );
}

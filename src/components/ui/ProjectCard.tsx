import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Clock, CheckCircle, Zap } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusConfig = {
  completed: { label: 'Completed', color: 'tag-green', icon: CheckCircle },
  'in-progress': { label: 'In Progress', color: 'tag-accent', icon: Zap },
  maintained: { label: 'Maintained', color: 'tag', icon: Clock },
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="animated-border group relative"
    >
      <div className="card p-6 h-full flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
            {project.title}
          </h3>
          <span className={`${status.color} flex-shrink-0 flex items-center gap-1`}>
            <StatusIcon size={10} />
            {status.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <ul className="space-y-1">
            {project.features.slice(0, 4).map((feat, i) => (
              <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                {feat}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map(tech => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <div className="text-xs text-slate-500">
            {project.role && <span>{project.role}</span>}
            {project.duration && <span className="ml-2 text-slate-600">• {project.duration}</span>}
          </div>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                aria-label={`GitHub: ${project.title}`}
              >
                <GitBranch size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                aria-label={`Live demo: ${project.title}`}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

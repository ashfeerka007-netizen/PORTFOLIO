import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

export default function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
          {skill.name}
        </span>
        <div className="flex items-center gap-2">
          {skill.yearsExp && (
            <span className="text-xs text-slate-500">{skill.yearsExp}y</span>
          )}
          <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
        </div>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

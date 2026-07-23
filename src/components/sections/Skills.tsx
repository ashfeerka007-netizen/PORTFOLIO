import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SkillBar from '../ui/SkillBar';
import { skills, skillCategories } from '../../config/portfolio.config';

const categoryIcons: Record<string, string> = {
  'Professional': '💼',
  'Office Software': '🖥️',
  'Software Development': '⚛️',
  'Operating Systems': '🖧',
  'AI Tools': '🤖',
  'Soft Skills': '🤝',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const displayCategories = ['All', ...skillCategories];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);



  return (
    <SectionWrapper id="skills" className="bg-dark-card/20">
      {/* Header */}
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          Skills & Expertise
        </motion.div>
        <h2 className="section-title gradient-text">What I Know</h2>
        <p className="section-subtitle">
          A blend of deep administrative expertise, modern software development, and cutting-edge AI skills.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {displayCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-glow'
                : 'glass border border-slate-700/40 text-slate-400 hover:text-white hover:border-blue-500/40'
            }`}
            id={`skill-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {cat !== 'All' && <span>{categoryIcons[cat]}</span>}
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      {activeCategory === 'All' ? (
        // All view: side-by-side category columns
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(cat => {
            const catSkills = skills.filter(s => s.category === cat);
            if (!catSkills.length) return null;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">{categoryIcons[cat]}</span>
                  <h3 className="font-bold text-white text-sm">{cat}</h3>
                  <span className="ml-auto tag text-xs">{catSkills.length}</span>
                </div>
                <div className="space-y-4">
                  {catSkills.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} delay={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        // Single category view
        <div className="card p-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{categoryIcons[activeCategory]}</span>
            <div>
              <h3 className="text-xl font-bold text-white">{activeCategory}</h3>
              <p className="text-slate-500 text-sm">{filteredSkills.length} skills</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {filteredSkills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} delay={i} />
            ))}
          </div>
        </div>
      )}

      {/* Skill highlights */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {[
          { label: 'Professional Skills', count: skills.filter(s => s.category === 'Professional').length, color: 'from-blue-600 to-blue-800' },
          { label: 'Software Dev Skills', count: skills.filter(s => s.category === 'Software Development').length, color: 'from-cyan-600 to-cyan-800' },
          { label: 'AI Capabilities', count: skills.filter(s => s.category === 'AI Tools').length, color: 'from-purple-600 to-purple-800' },
          { label: 'Total Skills', count: skills.length, color: 'from-green-600 to-green-800' },
        ].map(({ label, count, color }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-5 bg-gradient-to-br ${color} bg-opacity-20 border border-white/10`}
          >
            <div className="text-3xl font-bold text-white mb-1">{count}+</div>
            <div className="text-sm text-white/70">{label}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

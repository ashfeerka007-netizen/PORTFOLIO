import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, Briefcase, Code2 } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { personalInfo } from '../../config/portfolio.config';

const strengths = [
  { icon: Briefcase, title: 'Domain Expert', desc: '9+ years in cooperative society administration, finance, and compliance — real-world business insight built in.' },
  { icon: Code2, title: 'Software Builder', desc: 'Independently develops full-featured management systems using modern React stack without traditional CS background.' },
  { icon: Lightbulb, title: 'AI-Augmented', desc: 'Expert-level AI prompting skills to rapidly prototype, iterate, and deliver software beyond conventional speed.' },
  { icon: Users, title: 'People-Centered', desc: 'Designs software for real people — built from empathy earned in 9 years of face-to-face service.' },
  { icon: Target, title: 'Problem Solver', desc: 'Identifies operational inefficiencies and builds precise software solutions to resolve them.' },
  { icon: Award, title: 'Self-Taught', desc: 'Continuous learner who mastered React, TypeScript, and modern tooling entirely through self-directed study.' },
];

const timeline = [
  { year: '2015', event: 'Joined Wayanad District Police Co-operative Society Ltd as Accounting Clerk', type: 'work' },
  { year: '2022', event: 'Started exploring technology and software tools for office productivity', type: 'learn' },
  { year: '2023', event: 'Discovered AI tools — began mastering prompt engineering and AI-assisted workflows', type: 'learn' },
  { year: '2024', event: 'Built first management system — Gym Membership Manager — entirely self-taught', type: 'build' },
  { year: '2024', event: 'Developed CPI(M) Member Management, Rental Stock System, and Cash Book Register', type: 'build' },
  { year: '2025', event: 'Built BarberQ — Smart Barbershop Queue Manager (open-source on GitHub)', type: 'build' },
  { year: '2026', event: 'Actively expanding software portfolio and seeking software development opportunities', type: 'now' },
];

const typeColors: Record<string, string> = {
  work: 'bg-blue-600',
  learn: 'bg-purple-600',
  build: 'bg-green-600',
  now: 'bg-yellow-500',
};

const typeLabels: Record<string, string> = {
  work: 'Work',
  learn: 'Learning',
  build: 'Built',
  now: 'Now',
};

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-dark-card/20">
      {/* Header */}
      <div className="section-header text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          About Me
        </motion.div>
        <h2 className="section-title gradient-text">
          Where Business Meets Code
        </h2>
        <p className="section-subtitle mx-auto text-center">
          Not a traditional developer — something rarer: a business expert who builds software that actually works in the real world.
        </p>
      </div>

      {/* Bio + Mission */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
          <p className="text-slate-400 leading-relaxed">{personalInfo.bio}</p>

          <div className="glass border border-blue-500/20 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Target size={16} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Personal Mission</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{personalInfo.mission}</p>
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3">
            {[
              ['📍 Location', 'Kalpetta, Wayanad, Kerala'],
              ['💼 Role', 'Accounting Clerk & Software Builder'],
              ['🎓 Education', 'B.Com (Co-operation), Calicut Univ.'],
              ['🤖 Superpower', 'AI Prompting & Rapid Prototyping'],
              ['⚙️ Stack', 'React · TypeScript · Tailwind'],
              ['📧 Email', 'ashfeerka@gmail.com'],
            ].map(([key, val]) => (
              <div key={key} className="card p-3">
                <div className="text-xs text-slate-500 mb-0.5">{key}</div>
                <div className="text-sm text-slate-300 font-medium">{val}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Core Strengths</h3>
          <div className="grid gap-4">
            {strengths.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="animated-border"
              >
                <div className="card p-4 flex gap-4 group hover:border-blue-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/25 transition-colors">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Career Timeline</h3>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-transparent" />

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 pl-2"
              >
                <div className={`relative z-10 w-10 h-10 rounded-full ${typeColors[item.type]} flex items-center justify-center flex-shrink-0 shadow-lg text-xs font-bold text-white`}>
                  {item.year.slice(-2)}
                </div>
                <div className="card p-4 flex-1 group hover:border-blue-500/30 transition-all">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-sm font-bold text-blue-400">{item.year}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full text-white font-medium ${typeColors[item.type]}`}>
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

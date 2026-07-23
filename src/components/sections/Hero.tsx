import { motion } from 'framer-motion';
import { Download, Eye, Mail, MapPin, Briefcase, Code2, Cpu } from 'lucide-react';
import { useEffect, useRef } from 'react';
import TypewriterText from '../ui/TypewriterText';
import AnimatedCounter from '../ui/AnimatedCounter';
import { personalInfo } from '../../config/portfolio.config';

const floatingIcons = [
  { icon: '⚛️', label: 'React', x: '10%', y: '20%', delay: 0 },
  { icon: '🗂️', label: 'Management', x: '85%', y: '15%', delay: 0.5 },
  { icon: '🤖', label: 'AI', x: '90%', y: '70%', delay: 1 },
  { icon: '📊', label: 'Analytics', x: '8%', y: '75%', delay: 1.5 },
  { icon: '💼', label: 'Business', x: '50%', y: '5%', delay: 2 },
  { icon: '🔧', label: 'Build', x: '20%', y: '90%', delay: 0.8 },
];

const stats = [
  { value: 9, suffix: '+', label: 'Years Experience', icon: Briefcase },
  { value: 5, suffix: '+', label: 'Software Projects', icon: Code2 },
  { value: 10, suffix: '+', label: 'AI Tools Used', icon: Cpu },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-950/30 via-transparent to-transparent z-0" />

      {/* Floating Icons (desktop) */}
      {floatingIcons.map((fi, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-2xl glass border border-slate-700/30 z-10 pointer-events-none"
          style={{ left: fi.x, top: fi.y }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: fi.delay }}
          aria-hidden="true"
        >
          <span className="text-xl" title={fi.label}>{fi.icon}</span>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container-fluid relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass border border-blue-500/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-300 text-sm font-medium">Available for Projects</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            >
              {personalInfo.name.split(' ').map((part, i) => (
                <span key={i} className={i === 0 ? 'block' : 'block gradient-text'}>
                  {part}
                </span>
              ))}
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold mb-6 h-8"
            >
              <span className="text-slate-400">I am a </span>
              <TypewriterText className="gradient-text" />
              <span className="animate-blink-caret text-blue-400">|</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mb-8"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-1.5 text-slate-500 text-sm mb-8"
            >
              <MapPin size={14} className="text-blue-400" />
              {personalInfo.location}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={personalInfo.resume}
                download
                className="btn-primary"
                id="hero-download-resume"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo('projects')}
                className="btn-secondary"
                id="hero-view-projects"
              >
                <Eye size={16} />
                View Projects
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-ghost"
                id="hero-contact"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right: Avatar + Stats */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 120 }}
              className="relative"
            >
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-600/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-cyan-500/20"
              />

              {/* Avatar image */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full glow-avatar">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover border-4 border-slate-800"
                />
                {/* Online indicator */}
                <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-green-400 border-2 border-slate-900 shadow-lg" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass border border-blue-500/20 rounded-full px-4 py-1.5 whitespace-nowrap"
              >
                <span className="text-xs font-semibold gradient-text">9+ Years Experience</span>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 w-full max-w-sm"
            >
              {stats.map(({ value, suffix, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="glass border border-slate-700/40 rounded-xl p-3 text-center group hover:border-blue-500/40 transition-all"
                >
                  <Icon size={18} className="text-blue-400 mx-auto mb-1" />
                  <div className="text-xl font-bold text-white">
                    <AnimatedCounter end={value} suffix={suffix} />
                  </div>
                  <div className="text-xs text-slate-500 leading-tight">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            onClick={() => scrollTo('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-blue-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-700 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

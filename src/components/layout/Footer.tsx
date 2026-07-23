import { Mail, Phone, ArrowUp, Code2, Heart, GitBranch, Link2 } from 'lucide-react';
import { personalInfo, socialLinks } from '../../config/portfolio.config';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/50 bg-dark-bg">
      <div className="container-fluid py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              {personalInfo.title}
            </p>
            <p className="text-slate-600 text-xs mt-2">{personalInfo.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['about', 'experience', 'skills', 'projects', 'github', 'contact'].map(id => (
                <button
                  key={id}
                  onClick={() => {
                    const el = document.getElementById(id);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-slate-500 hover:text-blue-400 text-sm transition-colors capitalize"
                >
                  {id === 'software-portfolio' ? 'Portfolio' : id}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-2">
              <a href={socialLinks.email} className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors">
                <Mail size={14} className="text-blue-400" />
                {personalInfo.email}
              </a>
              <a href={socialLinks.phone} className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors">
                <Phone size={14} className="text-blue-400" />
                {personalInfo.phone}
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors">
                <GitBranch size={14} className="text-blue-400" />
                github.com/ashfeerka007-netizen
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors">
                <Link2 size={14} className="text-blue-400" />
                linkedin.com/in/ashfeerka
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            © {currentYear} {personalInfo.name}. Built with
            <Heart size={12} className="text-red-500 fill-red-500" />
            and React.
          </p>
          <div className="flex items-center gap-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors" aria-label="GitHub">
              <GitBranch size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors" aria-label="LinkedIn">
              <Link2 size={18} />
            </a>
            <a href={socialLinks.email} className="text-slate-600 hover:text-white transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600/40 transition-all hover:scale-110"
              aria-label="Back to top"
              id="back-to-top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

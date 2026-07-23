import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { navItems, personalInfo } from '../../config/portfolio.config';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection, scrollToSection } = useScrollSpy(navItems);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  // Shorten nav labels for display
  const displayNav = navItems.map(item => ({
    ...item,
    label: item.id === 'software-portfolio' ? 'Portfolio' : item.label,
  }));

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
        }`}
        id="navbar"
      >
        <div className="container-fluid">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group"
              aria-label="Go to home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-glow group-hover:shadow-glow-accent transition-all">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white hidden sm:block">
                {personalInfo.name.split(' ')[0]}
                <span className="text-blue-400">.</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {displayNav.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  id={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="hidden sm:flex btn-primary text-sm px-4 py-2 rounded-lg"
                id="nav-download-resume"
              >
                Resume
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-slate-300" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 glass-nav border-t border-slate-800 shadow-xl lg:hidden"
          >
            <div className="container-fluid py-4">
              <div className="grid grid-cols-3 gap-2">
                {displayNav.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`p-3 rounded-xl text-sm font-medium text-center transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary w-full justify-center"
                  id="mobile-download-resume"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

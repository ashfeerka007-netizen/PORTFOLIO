import { useState, useEffect } from 'react';
import type { NavItem } from '../types';

export function useScrollSpy(navItems: NavItem[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>(navItems[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, offset]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return { activeSection, scrollToSection };
}

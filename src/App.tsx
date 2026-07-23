import { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import SoftwarePortfolio from './components/sections/SoftwarePortfolio';
import GitHub from './components/sections/GitHub';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import { useTheme } from './hooks/useTheme';
import { seoConfig } from './config/portfolio.config';

export default function App() {
  const { theme } = useTheme();

  // Ensure theme class is on document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords.join(', ')} />
        <meta name="author" content={seoConfig.author} />

        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:image" content={seoConfig.image} />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content={seoConfig.image} />
        <meta name="twitter:creator" content={seoConfig.twitterHandle} />

        {/* Canonical */}
        <link rel="canonical" href={seoConfig.url} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Ashfeer K A',
            jobTitle: 'Administrative Professional & Software Developer',
            email: 'ashfeerka@gmail.com',
            telephone: '+91 9567476983',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kalpetta',
              addressRegion: 'Wayanad, Kerala',
              addressCountry: 'IN',
            },
            url: seoConfig.url,
            sameAs: [
              'https://github.com/ashfeerka007-netizen',
              'https://linkedin.com/in/ashfeerka',
            ],
          })}
        </script>
      </Helmet>

      <div className={`min-h-screen ${theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <SoftwarePortfolio />
          <GitHub />
          <Education />
          <Certifications />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

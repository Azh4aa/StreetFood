import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoTicker } from './components/InfoTicker';
import { MenuHighlights } from './components/MenuHighlights';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-brand-red selection:text-white">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <InfoTicker />
        <MenuHighlights />
        <LocationSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
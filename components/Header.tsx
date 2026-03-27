
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    // Update hash which triggers the event listener in App.tsx
    window.location.hash = path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#/" 
          onClick={(e) => handleNavClick(e, '#/')}
          className="text-xl font-bold tracking-tight text-gray-900 transition-opacity hover:opacity-70 flex items-center group"
        >
          AYUSHI <span className="text-gray-400 font-medium ml-2 group-hover:text-gray-600 transition-colors">CHAUDHARY</span>
        </a>
        
        <nav className="flex items-center space-x-8 md:space-x-12">
          <a 
            href="#/projects" 
            onClick={(e) => {
              e.preventDefault();
              if (window.location.hash === '#/projects') {
                // If already on projects hash, manually trigger scroll
                const element = document.getElementById('projects');
                if (element) {
                  const headerHeight = 100;
                  const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              } else {
                window.location.hash = '#/projects';
              }
            }}
            className="text-[15px] font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2"
          >
            Work
          </a>
          <a 
            href="#/about" 
            onClick={(e) => handleNavClick(e, '#/about')}
            className="text-[15px] font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2"
          >
            About
          </a>
          <a 
            href="mailto:hello@example.com" 
            className="text-[14px] md:text-[15px] font-semibold px-6 md:px-9 py-3 bg-[#0F172A] text-white rounded-full hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10 inline-flex items-center"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

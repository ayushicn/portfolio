
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import { PROJECTS } from './constants';
// import imgDance from './assets/Dance Crew.jpg';
// import imgFirstDayTUD from './assets/First day at TUD.jpg';
// import imgFirstSnow from './assets/First Snow @ Czech.jpg';
// import imgGermanAshram from './assets/Retreat in Germany.jpg';
// import imgGraduation from './assets/Graduation Day <3.jpg';
// import imgBroodjePoep from './assets/Shit Project.jpg';
// import imgKLMSession from './assets/UXR @ KLM.jpg';
import WhatfixFirstDay from './assets/Whatfix First Day.jpg';
import SattvicDiet from './assets/Sattvic diet.jpg';
import BehanceIcon from './assets/behance icon 2.png';
import imgDance from './assets/Dance Crew.jpg';
import imgFirstDayTUD from './assets/First day at TUD.jpg';
import imgFirstSnow from './assets/First Snow @ Czech.jpg';
import imgGraduation from './assets/Graduation Day <3.jpg';
import imgShitProject from './assets/Shit Project.jpg';
import imgUXRKLM from './assets/UXR @ KLM.jpg';
import imgGermanAshram from './assets/Retreat in Germany.jpg';

const ADJECTIVES = ['0 → 1 Discovery', 'Strategic UX Research', 'Research Enablement'];

const RotatingAdjective: React.FC<{ centered?: boolean }> = ({ centered }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ADJECTIVES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      key={index}
      className={`inline-block italic font-bold slide-in-top py-2 overflow-visible ${centered ? 'text-center' : ''}`}
    >
      <span className="gradient-text">{ADJECTIVES[index]}</span>
    </span>
  );
};

interface PolaroidProps {
  src: string;
  rotation: string;
  className?: string;
  caption?: string;
  fastener?: 'tape' | 'pin-green' | 'pin-yellow' | 'pin-blue' | 'pin-red';
  onClick?: () => void;
  isZoomed?: boolean;
  objectPosition?: string;
}

const Polaroid: React.FC<PolaroidProps> = ({ src, rotation, className, caption, fastener, onClick, isZoomed, objectPosition }) => {
  return (
    <div
      onClick={onClick}
      className={`relative inline-block transition-all duration-500 cursor-pointer 
        ${isZoomed ? 'scale-100 z-[200]' : 'hover:scale-105 hover:z-50'} 
        ${rotation} ${className}`}
    >
      {/* Fasteners */}
      {fastener === 'tape' && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-6 bg-[#f3efd9]/60 backdrop-blur-[2px] rotate-[-1deg] z-20 shadow-sm border-l border-r border-[#e5e1c8]/30"
          style={{
            clipPath: 'polygon(2% 0%, 98% 0%, 100% 20%, 98% 80%, 100% 100%, 0% 100%, 2% 80%, 0% 20%)',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)'
          }}
        ></div>
      )}
      {fastener && fastener.startsWith('pin') && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full z-20 shadow-md border border-black/5
          ${fastener === 'pin-green' ? 'bg-[#2D6A4F]' : ''}
          ${fastener === 'pin-yellow' ? 'bg-[#FFB703]' : ''}
          ${fastener === 'pin-blue' ? 'bg-[#023E8A]' : ''}
          ${fastener === 'pin-red' ? 'bg-[#9B2226]' : ''}
        `}
          style={{
            background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4) 0%, transparent 60%), ${fastener === 'pin-green' ? '#2D6A4F' : fastener === 'pin-yellow' ? '#FFB703' : fastener === 'pin-blue' ? '#023E8A' : '#9B2226'}`,
            boxShadow: '1px 2px 3px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(0,0,0,0.2)'
          }}
        ></div>
      )}

      {/* Frame */}
      <div className={`bg-white shadow-xl border border-gray-100 flex flex-col items-center transition-all duration-500
        ${isZoomed ? 'p-4 pb-16 md:p-6 md:pb-24' : 'p-2.5 pb-10 md:p-3 md:pb-14'}
      `}>
        <div className={`bg-gray-100 overflow-hidden relative transition-all duration-500
          ${isZoomed ? 'w-[70vw] h-[70vw] max-w-[500px] max-h-[500px]' : 'w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48'}
        `}>
          <img src={src} alt="Polaroid" className={`w-full h-full object-cover transition-all duration-700 ${objectPosition || 'object-center'}`} />
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </div>
        {caption && (
          <div className="mt-3 text-center w-full absolute bottom-2 md:bottom-4 px-2">
            <span className={`handwritten text-gray-800 leading-none block whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500
              ${isZoomed ? 'text-2xl md:text-4xl' : 'text-sm md:text-xl lg:text-2xl'}
            `}>
              {caption}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'project'>('home');
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [zoomedPhoto, setZoomedPhoto] = useState<number | null>(null);

  const syncWithHash = useCallback(() => {
    const hash = window.location.hash || '#/';

    // Handle Project Cards targeting
    if (hash === '#/projects') {
      setCurrentView('home');
      setActiveProjectId(null);
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          const headerHeight = 100;
          const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // Set view based on hash
    if (hash === '#/about') {
      setCurrentView('about');
      setActiveProjectId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash.startsWith('#/project/')) {
      const id = hash.replace('#/project/', '');
      setActiveProjectId(id);
      setCurrentView('project');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Default to home for any other hash or #/
      setCurrentView('home');
      setActiveProjectId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Smooth reset state
    setZoomedPhoto(null);
  }, []);

  useEffect(() => {
    // Sync immediately on mount
    syncWithHash();

    // Listen for hash changes
    window.addEventListener('hashchange', syncWithHash);
    return () => window.removeEventListener('hashchange', syncWithHash);
  }, [syncWithHash]);

  const navigateTo = (path: string) => {
    window.location.hash = path;
  };

  const polaroids = [
    { src: imgDance, rotation: "-rotate-[2deg]", caption: "Dance Crew", fastener: "tape" as const, objectPosition: "object-left" },
    { src: imgFirstDayTUD, rotation: "rotate-[1deg]", caption: "First day at TUD", fastener: "pin-green" as const, objectPosition: "object-top" },
    { src: imgFirstSnow, rotation: "-rotate-[1deg]", caption: "First Snow @ Czech", fastener: "tape" as const },
    { src: imgGermanAshram, rotation: "rotate-[2deg]", caption: "Retreat in Germany", fastener: "pin-yellow" as const },
    { src: imgGraduation, rotation: "-rotate-[1.5deg]", caption: "Graduation Day <3", fastener: "tape" as const },
    { src: imgShitProject, rotation: "rotate-[1.5deg]", caption: "Shit Project", fastener: "pin-blue" as const },
    { src: imgUXRKLM, rotation: "-rotate-[1.2deg]", caption: "UXR @ KLM", fastener: "tape" as const },
    { src: WhatfixFirstDay, rotation: "rotate-[2.5deg]", caption: "Whatfix First Day", fastener: "pin-red" as const },
    { src: SattvicDiet, rotation: "-rotate-[2deg]", caption: "Sattvic Diet", fastener: "tape" as const },
  ];

  const renderContent = () => {
    if (currentView === 'project' && activeProjectId) {
      const project = PROJECTS.find(p => p.id === activeProjectId);
      return project ? <ProjectDetail project={project} /> : <div className="pt-40 text-center">Project not found</div>;
    }

    if (currentView === 'about') {
      return (
        <section className="pt-32 md:pt-48 pb-40 container mx-auto px-6 fade-in max-w-[1400px]">
          {zoomedPhoto !== null && (
            <div
              className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10 animate-fade-in"
              onClick={() => setZoomedPhoto(null)}
            >
              <div className="absolute inset-0 bg-white/80 backdrop-blur-xl"></div>
              <button
                className="absolute top-8 right-8 z-[210] p-4 text-gray-400 hover:text-gray-900 transition-colors"
                onClick={() => setZoomedPhoto(null)}
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative transform transition-all duration-500 scale-110" onClick={e => e.stopPropagation()}>
                <Polaroid
                  {...polaroids[zoomedPhoto]}
                  isZoomed={true}
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
            <div className="xl:col-span-5 space-y-12 xl:pt-14">
              <div className="space-y-8 text-left">
                <div className="text-base md:text-lg text-gray-600 leading-[1.8] space-y-8 font-light max-w-lg">
                  <p className="fade-in" style={{ animationDelay: '0.1s' }}>
                    With a <span className="text-gray-900 sketchy-highlight-custom">rich cross-cultural background</span> shaped by studying and working in the Netherlands; and <span className="font-bold text-gray-900 highlight-blue">collaborating with clients across Europe, the US, and APAC</span>; I bring deep expertise in understanding <span className="text-gray-900">user mental models and behavioral patterns</span> across diverse domains.
                  </p>
                  <p className="fade-in" style={{ animationDelay: '0.2s' }}>
                    My strengths lie in <span className="font-bold text-gray-900 highlight-blue">research operations, conducting rigorous mixed-method research, translating complex insights into strategic decisions, and research democratisation</span>. I enjoy navigating ambiguity, aligning multidisciplinary stakeholders, and helping teams move from scattered signals to clear product direction.
                  </p>
                  <p className="fade-in" style={{ animationDelay: '0.3s' }}>
                    At Whatfix, I have led <span className="font-bold text-gray-900 highlight-blue">high-impact research across C-suite, end-user, and buyer personas, directly influencing product innovation and platform strategy</span>. My work focuses on shaping data-driven product experiences that resonate with global users.
                    <br /><br />
                    Overall, I drive <span className="font-bold text-gray-900 highlight-blue">0→1 discovery to evaluate product opportunities, validate ideas enabling executive teams make confident go/no-go decisions. I also mentor teams and democratize research</span>, building a culture of evidence-driven decision-making.
                  </p>
                  <p className="fade-in" style={{ animationDelay: '0.4s' }}>
                    Outside of research, I’m someone who values balance, curiosity, and movement. <span className="font-bold text-gray-900 highlight-blue">Dance</span> has been a long-standing creative outlet for me, while practices like <span className="font-bold text-gray-900 highlight-blue">meditation retreats and mindful living</span> help me stay grounded and reflective. I’m also deeply interested in <span className="font-bold text-gray-900 highlight-blue">healthy, intentional living; from nutrition to wellness</span>; which influences how I approach both life and work.
                  </p>
                  <p className="fade-in" style={{ animationDelay: '0.5s' }}>
                    These experiences shape my approach to research: <span className="text-gray-900">zooming in to observe the nuances of human behavior, and zooming out to uncover the broader patterns and systems behind it.</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 fade-in" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => navigateTo('#/')}
                  className="inline-flex items-center text-gray-400 font-bold text-xs uppercase tracking-[0.2em] hover:text-gray-900 transition-all group"
                >
                  <span className="mr-3 transform group-hover:-translate-x-2 transition-transform duration-300">←</span>
                  Back to Case Studies
                </button>
              </div>
            </div>

            <div className="xl:col-span-7 flex justify-center xl:justify-end">
              <div className="relative p-6 md:p-12 bg-white/50 rounded-lg shadow-sm backdrop-blur-sm border border-gray-100/50">
                <div className="grid grid-cols-3 gap-x-3 gap-y-10 md:gap-x-10 md:gap-y-16">
                  {polaroids.map((p, idx) => (
                    <Polaroid
                      key={idx}
                      {...p}
                      onClick={() => setZoomedPhoto(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <main className="pt-40 md:pt-48 lg:pt-56 pb-20 fade-in min-h-[80vh] flex flex-col justify-center">
        <section className="container mx-auto px-6 mb-32 flex flex-col items-center text-center">
          <div className="w-full flex flex-col items-center">
            <button
              onClick={(e) => { e.preventDefault(); navigateTo('#/about'); }}
              className="block text-center group w-full cursor-pointer appearance-none bg-transparent border-none p-0 focus:outline-none"
            >
              <h1 className="text-5xl md:text-[64px] lg:text-[80px] xl:text-8xl font-bold mb-10 leading-[1.1] tracking-tighter text-gray-900 serif group-hover:text-gray-800 transition-colors flex flex-col items-center gap-y-4">
                <span>Hi, I lead;</span>
                <RotatingAdjective />
              </h1>
            </button>
            <p className="inline-block text-base md:text-lg lg:text-xl text-gray-500 max-w-3xl leading-relaxed font-light">
              As a Senior UX Researcher, leveraging strategic UXR to converge user needs with high-stakes business goals.
            </p>
          </div>
        </section>

        <section id="projects" className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>


        <section className="container mx-auto px-6 mt-40">
          <div className="bg-gray-900 text-white rounded-[4rem] p-16 md:p-32 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 serif relative z-10">Let's work together.</h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto relative z-10 font-light">
              Currently <span className="text-blue-500 font-medium">looking for new opportunities</span> in Bengaluru or remotely.
            </p>
            <a href="mailto:hello@example.com" className="relative z-10 inline-block bg-white text-gray-900 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-xl">
              Say Hello
            </a>
          </div>
        </section>
      </main>
    );
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Header />
      {renderContent()}
      {currentView !== 'project' && (
        <footer className="py-20 border-t border-gray-100 text-center text-sm text-gray-400">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
              <div className="flex-1 text-center md:text-left">
                <p className="font-light text-gray-400">&copy; {new Date().getFullYear()} Ayushi Chaudhary. Built with passion & Gemini AI.</p>
              </div>
              <div className="flex-1 text-center">
                <a href="mailto:135ayushichaudhary@gmail.com" className="font-light text-gray-500 hover:text-gray-900 transition-colors">135ayushichaudhary@gmail.com</a>
              </div>
              <div className="flex-1 flex space-x-6 justify-center md:justify-end">
                <a href="https://www.linkedin.com/in/ayushi-chaudhary-6a0b67118/" target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:opacity-80 transition-opacity font-medium">LinkedIn</a>
                <a href="https://www.behance.net/135ayushichaudhary" target="_blank" rel="noopener noreferrer" className="text-[#0057ff] hover:opacity-80 transition-opacity font-medium">Behance</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;

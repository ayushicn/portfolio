import React, { useState, useEffect, useMemo } from 'react';
import { Project, Insight } from '../types';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  project: Project;
}

/**
 * Hand-drawn Sketchy Icons Palette:
 * - Navy: #1E293B (slate-800)
 * - Blue: #93C5FD (blue-300) / #60A5FA (blue-400)
 * - Black: #0F172A (slate-900)
 * - White: #FFFFFF
 */

const ROLE_TIME_ICON = (
  <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wobbly Background Blob */}
    <path d="M25,30 Q15,50 35,75 Q55,95 80,75 Q95,55 75,30 Q55,10 25,30" fill="#93C5FD" opacity="0.3" />

    {/* Wobbly Stopwatch Body */}
    <path d="M50,22 C35,22 23,34 23,49 C23,64 35,76 50,76 C65,76 77,64 77,49 C77,34 65,22 50,22" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="white" />

    {/* Buttons */}
    <path d="M45,16 L55,16 M50,16 L50,22" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M68,26 L73,21" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Person Silhouette inside representing "Role" */}
    <path d="M44,60 Q44,52 50,52 Q56,52 56,60 L56,68 L44,68 Z" fill="#60A5FA" stroke="#1E293B" strokeWidth="1.5" />
    <circle cx="50" cy="44" r="5" fill="white" stroke="#1E293B" strokeWidth="1.5" />

    {/* Clock Hand representing "Time" */}
    <path d="M50,49 L62,37" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TOOLS_ICON = (
  <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wobbly Background Blob */}
    <path d="M22,35 Q12,55 32,75 Q52,95 78,75 Q92,55 78,35 Q62,15 22,35" fill="#93C5FD" opacity="0.3" />

    {/* Crossed Wrench - Diagonal 1 */}
    <g transform="rotate(-45, 50, 50)">
      <path d="M30,50 L70,50" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
      <path d="M30,42 Q15,42 15,50 Q15,58 30,58" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="white" />
      <path d="M70,42 Q85,42 85,50 Q85,58 70,58" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="white" />
      <path d="M18,46 L24,50 L18,54" stroke="#1E293B" strokeWidth="2" fill="none" />
      <path d="M82,46 L76,50 L82,54" stroke="#1E293B" strokeWidth="2" fill="none" />
    </g>

    {/* Crossed Pencil - Diagonal 2 (Crossing OVER) */}
    <g transform="rotate(45, 50, 50)">
      <path d="M25,44 L70,44 L70,56 L25,56 Z" fill="white" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M70,44 L85,50 L70,56 Z" fill="#1E293B" stroke="#1E293B" strokeWidth="1.5" />
      <path d="M25,44 Q18,44 18,50 Q18,56 25,56 Z" fill="#60A5FA" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M35,50 L60,50" stroke="#1E293B" strokeWidth="1" opacity="0.3" />
    </g>
  </svg>
);

const TEAM_ICON = (
  <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wobbly Background Blob */}
    <path d="M30,20 Q15,40 30,65 Q45,90 75,70 Q95,50 80,25 Q65,10 30,20" fill="#93C5FD" opacity="0.3" />

    {/* Two Back People */}
    <g transform="translate(-10, 0)">
      <circle cx="45" cy="40" r="10" fill="white" stroke="#1E293B" strokeWidth="2.5" />
      <path d="M30,70 Q30,55 45,55 Q60,55 60,70" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="white" />
    </g>
    <g transform="translate(15, 0)">
      <circle cx="45" cy="40" r="10" fill="white" stroke="#1E293B" strokeWidth="2.5" />
      <path d="M30,70 Q30,55 45,55 Q60,55 60,70" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="white" />
    </g>

    {/* Front Focused Person */}
    <g transform="translate(2, 12)">
      <circle cx="45" cy="40" r="10" fill="#60A5FA" stroke="#1E293B" strokeWidth="2.5" />
      <path d="M30,70 Q30,55 45,55 Q60,55 60,70" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="#60A5FA" />
    </g>
  </svg>
);

const METHOD_ICON_GENERAL = (
  <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wobbly Background Blob */}
    <path d="M25,25 Q10,45 30,70 Q50,95 80,75 Q95,55 75,30 Q55,10 25,25" fill="#93C5FD" opacity="0.3" />

    {/* Clipboard Base */}
    <path d="M30,25 L70,25 Q75,25 75,30 L75,85 Q75,90 70,90 L30,90 Q25,90 25,85 L25,30 Q25,25 30,25" fill="white" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round" />

    {/* Metal Clip */}
    <path d="M42,20 L58,20 Q62,20 62,24 L62,30 L38,30 L38,24 Q38,20 42,20 Z" fill="#60A5FA" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round" />

    {/* Lines */}
    <path d="M35,42 L55,42 M35,55 L65,55 M35,68 L60,68" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" opacity="0.2" />

    {/* Magnifying Glass Accent */}
    <circle cx="70" cy="70" r="10" stroke="#1E293B" strokeWidth="2.5" fill="white" />
    <path d="M77,77 L85,85" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
    <path d="M67,70 L73,70 M70,67 L70,73" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Semantic Icons for Insights (Gaps/Strengths)
 * Redesigned to match the provided reference images.
 */

const MENTAL_MODEL_ICON_SMALL = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer Hexagon Frame based on cube image */}
    <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" />
    {/* Internal edges representing the 3D cube interior */}
    <path d="M12 12V22" />
    <path d="M12 12L21 7" />
    <path d="M12 12L3 7" />
    {/* Subtle highlight to enhance 3D feel */}
    <path d="M12 12L21 7L12 2L3 7L12 12Z" fill="currentColor" fillOpacity="0.1" stroke="none" />
  </svg>
);

const USABILITY_ICON_SMALL = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Click radiating lines around the tip as seen in reference image */}
    <path d="M3 10l2 1" stroke="#F43F5E" />
    <path d="M4 6l2 2" stroke="#F43F5E" />
    <path d="M8 4l1 2" stroke="#F43F5E" />
    <path d="M12 3v2" stroke="#F43F5E" />

    {/* Stylized Cursor Pointer */}
    <path d="M7 8l14 7-5 1 3 5-2 1-3-5-7 5V8z" fill="currentColor" fillOpacity="0.05" />
  </svg>
);

const MetaBullet = () => (
  <span className="text-blue-400 font-bold mr-2 text-lg leading-none">•</span>
);

const MetadataCard = ({
  title,
  icon,
  children,
  className = ""
}: {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-6 rounded-2xl flex flex-col items-start transition-all duration-300 hover:shadow-lg h-full ${className}`}>
    {icon && (
      <div className="absolute top-4 right-4 opacity-90 transition-transform group-hover:scale-110">
        {icon}
      </div>
    )}
    <div className="relative inline-block mb-6">
      <span className="relative z-10 text-lg xl:text-xl font-bold tracking-tight text-gray-900 px-1 font-sans">
        {title}
      </span>
      <div className="absolute bottom-1 left-0 w-full h-3 bg-blue-50 rounded-full -z-0 opacity-70"></div>
    </div>
    <div className="w-full font-sans relative z-10">
      {children}
    </div>
  </div>
);

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) window.addEventListener('keydown', handleKeyDown);

    const handleDynamicImgClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'img' && target.classList.contains('clickable-img')) {
        setSelectedImage((target as HTMLImageElement).src);
      }
    };
    document.addEventListener('click', handleDynamicImgClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleDynamicImgClick);
    };
  }, [selectedImage]);
  const [activeSection, setActiveSection] = useState('project-background');
  const [scrollProgress, setScrollProgress] = useState(0);

  const { prevProject, nextProject } = useMemo(() => {
    const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
    const prev = PROJECTS[currentIndex - 1] || PROJECTS[PROJECTS.length - 1];
    const next = PROJECTS[currentIndex + 1] || PROJECTS[0];
    return { prevProject: prev, nextProject: next };
  }, [project.id]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const sections = ['project-background', 'approach', 'insights', 'impact', 'learnings'];
      const scrollY = window.scrollY;
      const threshold = 180; // Activation line from top (shared for line and dots)
      
      // Calculate active section and offsets in one pass
      let currentSection = sections[0];
      const offsets: number[] = [];
      
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rectTop = el.getBoundingClientRect().top;
          offsets.push(rectTop + scrollY - threshold);
          
          if (rectTop <= threshold) {
            currentSection = sections[i];
          }
        } else {
          offsets.push(0);
        }
      }
      setActiveSection(currentSection);

      // Segment-based Progressive Scroll Line
      let progress = 0;
      const segmentPercentage = 100 / (sections.length - 1);

      if (scrollY <= offsets[0]) {
        progress = 0;
      } else if (scrollY >= offsets[offsets.length - 1]) {
        progress = 100;
      } else {
        // Find which segment we are in
        for (let i = 0; i < offsets.length - 1; i++) {
          if (scrollY >= offsets[i] && scrollY < offsets[i + 1]) {
            const segmentScroll = scrollY - offsets[i];
            const segmentTotal = offsets[i + 1] - offsets[i];
            const segmentProgress = segmentScroll / segmentTotal;
            progress = (i * segmentPercentage) + (segmentProgress * segmentPercentage);
            break;
          }
        }
      }

      setScrollProgress(progress);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Navigation Handlers
  const navigateToProject = (e: React.MouseEvent, projectId: string) => {
    e.preventDefault();
    window.location.hash = `/project/${projectId}`;
  };

  const navigateToHome = () => {
    window.location.hash = '/';
  };

  const renderInsightCard = (insight: Insight, idx: number, isPositive: boolean = false, type: 'mental' | 'usability') => {
    return (
      <div key={idx} className={`group p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:bg-white transition-all duration-300 hover:shadow-xl ${isPositive ? 'hover:border-green-100 hover:shadow-green-50/20' : 'hover:border-rose-100 hover:shadow-rose-50/20'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={isPositive ? 'text-green-600' : 'text-rose-500'}>
            <div className="w-5 h-5">
              {type === 'mental' ? MENTAL_MODEL_ICON_SMALL : USABILITY_ICON_SMALL}
            </div>
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 text-white rounded-full ${isPositive ? 'bg-green-600' : 'bg-rose-500'}`}>
            {insight.category}
          </span>
        </div>
        <p className="text-xl text-gray-900 mb-6 leading-tight font-sans">
          {insight.title && <span className="font-bold">{insight.title}: </span>}
          <span className="font-light">{insight.observation}</span>
        </p>

        <div className="space-y-4">
          {(insight.quotes || (insight.quote ? [insight.quote] : [])).map((q, qIdx) => (
            <div key={qIdx}>
              <blockquote className={`text-gray-500 italic font-light leading-relaxed border-l-4 pl-4 py-1 text-base ${isPositive ? 'border-green-200' : 'border-rose-200'}`}>
                {q.startsWith('"') ? q : `"${q}"`}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <section
        className="relative pt-48 pb-12 overflow-hidden bg-[#F8F9FA]"
        style={{
          backgroundImage: `url('${project.imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-[#F8F9FA]/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4 block">CASE STUDY</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight text-gray-900 serif">
              {project.title}
            </h1>
            <div className="flex flex-col gap-6">
              {project.organization && (
                <div className="text-xl md:text-2xl text-gray-900 font-bold serif">
                  {project.organization}
                </div>
              )}
              {((project.highlightTags && project.highlightTags.length > 0) || (project.industryTags && project.industryTags.length > 0)) && (
                <div className="flex flex-wrap gap-3">
                  {(project.highlightTags || project.industryTags || []).map((tag, idx) => (
                    <span key={idx} className="bg-white border border-blue-100 px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-widest text-blue-600 shadow-sm italic transition-all hover:shadow-md hover:scale-105">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 lg:pr-24 -mt-8 relative z-20 mb-20 max-w-[1500px]">
        <div className="bg-white/60 backdrop-blur-2xl rounded-[2rem] border border-white/80 p-6 md:p-10 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetadataCard title="Role and Time Frame" className="group">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MetaBullet />
                  <div className="flex-1">
                    <p className="text-sm xl:text-base font-bold text-gray-900 leading-tight">UX Research Lead (Project)</p>
                    <p className="text-xs xl:text-sm text-gray-500 italic font-light leading-tight mt-1">
                      {project.role.split('\n').slice(1).join(' ').replace('(Scope: ', '').replace(')', '')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MetaBullet />
                  <p className="text-sm xl:text-base font-bold text-gray-900 leading-tight">Four Weeks</p>
                </div>
              </div>
            </MetadataCard>
            <MetadataCard title="Tools" className="group">
              <ul className="space-y-2">
                {project.tools?.map((tool, idx) => {
                  let link = null;
                  const t = tool.toLowerCase();
                  if (t.includes('condens')) link = "https://condens.io/";
                  if (t.includes('userinterviews')) link = "https://www.userinterviews.com/";
                  if (t.includes('mural')) link = "https://www.mural.co/";

                  return (
                    <li key={idx} className="flex items-start">
                      <MetaBullet />
                      <span className="text-sm font-bold text-gray-900">
                        {link ? (
                          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors underline decoration-blue-100 underline-offset-4 decoration-2">
                            {tool}
                          </a>
                        ) : tool}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </MetadataCard>
            <MetadataCard title="Stakeholders" className="group">
              <ul className="space-y-3">
                {project.stakeholders?.map((s, idx) => (
                  <li key={idx} className="flex items-start">
                    <MetaBullet />
                    <span className="text-sm font-bold text-gray-900 leading-tight">
                      {s.name} — <span className="font-light text-gray-500 italic">{s.role}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </MetadataCard>
            <MetadataCard title="Methods" className="group">
              <ul className="space-y-3">
                {project.methods.map((method, idx) => (
                  <li key={idx} className="flex items-start">
                    <MetaBullet />
                    <span className="text-sm font-bold text-gray-900 leading-tight">{method}</span>
                  </li>
                ))}
              </ul>
            </MetadataCard>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:pr-24 max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-start pb-32">
          <div className="lg:col-span-12 space-y-40 w-full max-w-5xl mx-auto">
            <section id="project-background" className="space-y-8 scroll-mt-32">
              <div className="flex items-center gap-4">
                <div className="text-gray-900">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-sans">Project Background</h2>
              </div>
              <div className="bg-[#FFFFFF] border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-50/50 space-y-12">
                <div className="space-y-12">
                  {project.problemBullets ? (
                    <div className="space-y-16">
                      {project.problemBullets.map((bullet, idx) => (
                        <div key={idx} className="space-y-6 max-w-full">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans" dangerouslySetInnerHTML={{ __html: bullet.h2 }} />
                          <p className="text-lg text-gray-600 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: bullet.text }} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-lg text-gray-600 leading-relaxed font-light max-w-full">{project.problemBackground || project.problem}</p>
                  )}
                </div>
                {project.purposeOfTool && project.purposeOfTool.length > 0 && (
                  <div className="pt-16 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 font-sans mb-12">Key References</h3>
                    <div className="flex flex-col gap-12">
                      {project.purposeOfTool.map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 group flex flex-col h-full">
                          <div className="space-y-4 mb-8 flex-grow">
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans">{item.label}</h4>
                            <p className="text-lg leading-relaxed font-light text-gray-600">{item.desc}</p>
                          </div>
                          <div className="w-full">
                            {item.label === 'Content Dashboard (CLM)' ? (
                              <div className="flex flex-col items-center">
                                <img
                                  src="/assets/CLM_CLM Dashboard.webp"
                                  alt="CLM Dashboard Snapshot"
                                  className="w-full rounded-[2.5rem] shadow-md mb-4 cursor-zoom-in"
                                  onClick={() => setSelectedImage("/assets/CLM_CLM Dashboard.webp")}
                                  referrerPolicy="no-referrer"
                                />
                                <p className="text-xs text-gray-500 italic text-center">
                                  A snapshot of the Content Dashboard (CLM) that was being tested in this research project
                                </p>
                              </div>
                            ) : item.label === 'The Whatfix Platform' ? (
                              <div className="flex flex-col items-center">
                                <img
                                  src="/assets/CLM_Whatfix Studio.png"
                                  alt="Whatfix Studio Snapshot"
                                  className="w-full rounded-[2.5rem] shadow-md mb-4 cursor-zoom-in"
                                  onClick={() => setSelectedImage("/assets/CLM_Whatfix Studio.png")}
                                  referrerPolicy="no-referrer"
                                />
                                <p className="text-xs text-gray-500 italic text-center">
                                  A snapshot of Whatfix Studio overlaid on the Salesforce website for creating guidance content.
                                </p>
                              </div>
                            ) : (
                              <div className="w-full aspect-[16/9] bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-12 transition-all duration-500 group-hover:bg-white group-hover:border-blue-200 shadow-inner">
                                <svg className="w-20 h-20 text-gray-200 mb-6 transition-colors group-hover:text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <div className="space-y-3">
                                  <p className="text-xl font-bold uppercase tracking-[0.25em] text-gray-300 group-hover:text-blue-400 transition-colors font-sans">
                                    Whatfix Platform Placeholder
                                  </p>
                                  <p className="text-sm text-gray-500 italic max-w-sm mx-auto leading-relaxed">Actual interface visuals integrated for final presentation.</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            <section id="approach" className="space-y-8 scroll-mt-32">
              <div className="flex items-center gap-4">
                <div className="text-gray-900">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M16.24 7.76l-1.41 4.95-4.95 1.41 1.41-4.95 4.95-1.41z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-sans">Approach</h2>
              </div>
              <div className="bg-[#FFFFFF] border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-50/50 space-y-10">
                <div className="space-y-1">
                  <p className="text-lg text-gray-600 font-light leading-relaxed italic">
                    From the given stakeholder requirements, I arrived at the following <span className="font-bold text-blue-500">Research Goal:</span>
                  </p>
                  <div className="w-full flex justify-center mt-11">
                    {project.approachGoalImageUrl ? (
                      <div className="w-full bg-[#FFFFFF] border border-gray-100 rounded-[2rem] p-2 md:p-5 shadow-xl shadow-gray-50/50 flex justify-center items-center">
                        <img
                          src={project.approachGoalImageUrl}
                          alt="Research Goal Diagram"
                          className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-700 cursor-zoom-in"
                          onClick={() => setSelectedImage(project.approachGoalImageUrl)}
                        />
                      </div>
                    ) : (
                      <div className="w-full md:w-[75%] h-[350px] bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-12 rounded-[2rem]">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-300 font-sans">Research Goal Visual Placeholder</p>
                      </div>
                    )}
                  </div>
                </div>

                {project.approachGoalPoints && (
                  <div className="space-y-16">
                    <div className="relative bg-[#FFFFFF] border border-gray-100 rounded-[2.5rem] p-10 md:p-16 shadow-xl shadow-gray-50/50 group overflow-hidden">
                      <div className="absolute top-8 left-8 handwritten text-blue-500 text-5xl md:text-7xl select-none opacity-90 transition-all group-hover:scale-105 z-10 drop-shadow-sm leading-none">But...</div>

                      <div className="mt-20 md:mt-28 mb-10 border-b border-gray-50 pb-10">
                        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 font-sans leading-tight">How did I even arrive at the Research Goal?</h3>
                      </div>

                      <p className="text-lg text-gray-600 font-light leading-relaxed mb-16">
                        The following process outlines the reasoning and thought behind the research goal (mentioned above):
                      </p>

                      <div className="w-full px-6 lg:px-12 mb-16 mx-auto">
                        <div className="w-full bg-[#FFFFFF] border border-gray-100 rounded-[2rem] p-2 md:p-5 shadow-xl shadow-gray-50/50 flex justify-center items-center">
                          <img
                            src="/assets/CLM_RG Thought Process.png"
                            alt="Research Goal Mindmap process"
                            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-700 cursor-zoom-in"
                            onClick={() => setSelectedImage("/assets/CLM_RG Thought Process.png")}
                          />
                        </div>
                      </div>

                      <div className="space-y-16">
                        {project.approachGoalPoints.slice(0, 3).map((point, idx) => {
                          return (
                            <div key={idx} className="group/step transition-all duration-500">
                              <div className="flex flex-col md:flex-row gap-10 items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-lg border border-blue-100 shadow-sm transition-transform duration-500 group-hover/step:scale-110">
                                  {idx + 1}
                                </div>
                                <div className="space-y-5 flex-1">
                                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 font-sans" dangerouslySetInnerHTML={{ __html: point.title }} />
                                  <div className="text-lg text-gray-600 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: point.text }} />

                                  {point.subText && (
                                    <div className="quote-box !mt-8 !bg-gray-50/40 !shadow-none">
                                      <span className="handwritten text-xl md:text-2xl block text-gray-500 opacity-90 leading-relaxed">{point.subText}</span>
                                    </div>
                                  )}

                                  {point.visualPlaceholder && (
                                    <div className="mt-6 w-full max-w-lg">
                                      <img
                                        src={`/assets/CLM_${point.visualPlaceholder}.png`}
                                        alt={point.visualPlaceholder}
                                        className="w-full rounded-[2rem] shadow-lg hover:scale-[1.02] transition-transform duration-500 cursor-zoom-in"
                                        onClick={() => setSelectedImage(`/assets/CLM_${point.visualPlaceholder}.png`)}
                                        onError={(e) => {
                                          e.currentTarget.style.display = 'none';
                                        }}
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                              {idx < 2 && <div className="h-px bg-gray-100 w-full mt-16"></div>}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {project.approachGoalPoints[3] && (
                      <div className="bg-[#FFFFFF] border border-gray-100 rounded-[2.5rem] p-10 md:p-16 shadow-xl shadow-gray-50/50">
                        <div className="mb-10 border-b border-gray-50 pb-10">
                          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 font-sans leading-tight">{project.approachGoalPoints[3].title}</h3>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full text-lg text-gray-600 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: project.approachGoalPoints[3].text }} />
                          {project.approachGoalPoints[3].subText && (
                            <div className="quote-box mt-10 !bg-gray-50/40 w-full">
                              <span className="handwritten text-xl md:text-2xl block text-gray-500 opacity-90 leading-relaxed">{project.approachGoalPoints[3].subText}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {project.researchProcess && (
                  <div className="bg-[#FFFFFF] border border-gray-100 rounded-[2.5rem] p-10 md:p-16 shadow-xl shadow-gray-50/50 space-y-10 mt-24">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-4xl font-bold text-gray-900 font-sans">{project.researchProcess.title}</h3>
                      <p className="text-lg text-gray-600 font-light leading-relaxed italic">
                        The most suitable and viable research methods were selected and sequenced to design a cohesive approach for the project.
                      </p>
                      {project.researchProcess.visual && (
                        <div className="mt-8 w-full">
                          <img
                            src={`/assets/CLM_${project.researchProcess.visual}.png`}
                            alt={project.researchProcess.visual}
                            className="w-full rounded-[2.5rem] shadow-lg hover:scale-[1.01] transition-transform duration-500 cursor-zoom-in"
                            onClick={() => setSelectedImage(`/assets/CLM_${project.researchProcess.visual}.png`)}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>

                    {project.researchProcess.items && project.researchProcess.items.length > 0 && (
                      <div className="space-y-24 pt-8">
                        {project.researchProcess.items.map((item, idx) => (
                          <div key={idx} className="space-y-10">
                            <div className="flex flex-col md:flex-row gap-10 items-start">
                              <div className="flex flex-col items-center space-y-5 pt-2">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl border border-blue-100 shadow-sm">{item.number}</div>
                                {item.icon && <div className="transition-transform duration-500 hover:scale-110" dangerouslySetInnerHTML={{ __html: item.icon }} />}
                              </div>
                              <div className="space-y-6 flex-1 w-full">
                                <h4 className="text-xl md:text-3xl font-bold text-gray-900 font-sans leading-tight">{item.label}</h4>
                                <p className="text-lg text-gray-600 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }} />
                                {item.bullets && (
                                  <ul className="list-disc ml-8 space-y-4 font-light text-lg">
                                    {item.bullets.map((bullet, i) => (<li key={i} className="text-gray-600 font-sans" dangerouslySetInnerHTML={{ __html: bullet }} />))}
                                  </ul>
                                )}
                                {item.subText && <p className="text-lg text-gray-600 font-light mt-4" dangerouslySetInnerHTML={{ __html: item.subText }} />}
                                {item.handwritingNote && (
                                  <div className="quote-box !mt-12 !mb-12 !bg-gray-50/40">
                                    <span className="handwritten text-xl md:text-2xl block text-gray-500 opacity-90 leading-relaxed">{item.handwritingNote}</span>
                                  </div>
                                )}
                                {item.visuals ? (
                                  <div className="space-y-8 mt-12">
                                    {item.visuals.map((visual, vIdx) => (
                                      <div key={vIdx} className="w-full flex flex-col items-center">
                                        <img
                                          src={`/assets/CLM_${visual.placeholder}.png`}
                                          alt={visual.placeholder}
                                          className="w-full h-auto rounded-[2rem] shadow-lg hover:scale-[1.01] transition-transform duration-500 mb-4 cursor-zoom-in"
                                          onClick={() => setSelectedImage(`/assets/CLM_${visual.placeholder}.png`)}
                                          referrerPolicy="no-referrer"
                                        />
                                        {visual.label && (
                                          <p className="text-xs text-gray-500 italic text-center">
                                            {visual.label}
                                          </p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <>
                                    {item.visualPlaceholder && (
                                      <div className="mt-12 w-full flex flex-col items-center">
                                        <img
                                          src={`/assets/CLM_${item.visualPlaceholder}.png`}
                                          alt={item.visualPlaceholder}
                                          className="w-full h-auto rounded-[2rem] shadow-lg hover:scale-[1.01] transition-transform duration-500 mb-4 cursor-zoom-in"
                                          onClick={() => setSelectedImage(`/assets/CLM_${item.visualPlaceholder}.png`)}
                                          referrerPolicy="no-referrer"
                                        />
                                        {item.visualLabel && (
                                          <p className="text-xs text-gray-500 italic text-center">
                                            {item.visualLabel}
                                          </p>
                                        )}
                                      </div>
                                    )}
                                    {item.secondaryVisualPlaceholder && (
                                      <div className="mt-8 w-full flex flex-col items-center">
                                        <img
                                          src={`/assets/CLM_${item.secondaryVisualPlaceholder}.png`}
                                          alt={item.secondaryVisualPlaceholder}
                                          className="w-full h-auto rounded-[2rem] shadow-lg hover:scale-[1.01] transition-transform duration-500 mb-4 cursor-zoom-in"
                                          onClick={() => setSelectedImage(`/assets/CLM_${item.secondaryVisualPlaceholder}.png`)}
                                          referrerPolicy="no-referrer"
                                        />
                                        {item.secondaryVisualLabel && (
                                          <p className="text-xs text-gray-500 italic text-center">
                                            {item.secondaryVisualLabel}
                                          </p>
                                        )}
                                      </div>
                                    )}
                                    {item.tertiaryVisualPlaceholder && (
                                      <div className="mt-8 w-full flex flex-col items-center">
                                        <img
                                          src={`/assets/CLM_${item.tertiaryVisualPlaceholder}.png`}
                                          alt={item.tertiaryVisualPlaceholder}
                                          className="w-full h-auto rounded-[2rem] shadow-lg hover:scale-[1.01] transition-transform duration-500 mb-4 cursor-zoom-in"
                                          onClick={() => setSelectedImage(`/assets/CLM_${item.tertiaryVisualPlaceholder}.png`)}
                                          referrerPolicy="no-referrer"
                                        />
                                        {item.tertiaryVisualLabel && (
                                          <p className="text-xs text-gray-500 italic text-center">
                                            {item.tertiaryVisualLabel}
                                          </p>
                                        )}
                                      </div>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>

            <section id="insights" className="space-y-8 scroll-mt-32">
              <div className="flex items-center gap-4">
                <div className="text-gray-900">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-sans">Insights</h2>
              </div>

              <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.08)] space-y-24">
                <div className="bg-gray-50/50 border border-gray-100 rounded-[2rem] p-8 md:p-12 space-y-10 overflow-hidden hover:bg-white transition-colors duration-500 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-blue-500 rounded-full"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans tracking-tight">What was the System Usability Score (SUS) ?</h3>
                  </div>
                  <div className="flex flex-col gap-10 lg:gap-12 mt-8 w-full">
                    <div className="space-y-8 w-full">
                      <p className="text-xl text-gray-700 leading-relaxed font-light font-sans" dangerouslySetInnerHTML={{ __html: project.susDescription }} />
                    </div>
                    <div className="w-full h-full">
                      <div className="group relative w-full h-full bg-white border border-gray-200 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-inner overflow-hidden hover:border-blue-100 transition-all duration-500 mb-4">
                        <img src="/assets/CLM_SUS Interpreter.png" alt="Comparative Benchmarking" className="w-full h-auto object-contain cursor-zoom-in" onClick={() => setSelectedImage("/assets/CLM_SUS Interpreter.png")} />
                      </div>
                      <p className="text-xs text-gray-500 italic text-center mt-4">
                        A SUS score interpreter helped translate the usability score into meaningful insights.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-16">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-sans tracking-tight border-b-2 border-rose-100 pb-4">What Were The Gaps?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                    <div className="space-y-12">
                      <h4 className="text-sm font-bold text-rose-500 uppercase tracking-[0.3em] flex items-center gap-2">
                        <div className="w-5 h-5">{MENTAL_MODEL_ICON_SMALL}</div> Mental Model Gaps
                      </h4>
                      <div className="space-y-12">
                        {project.mentalModelGaps?.map((insight, idx) => renderInsightCard(insight, idx, false, 'mental'))}
                      </div>
                    </div>
                    <div className="space-y-12">
                      <h4 className="text-sm font-bold text-rose-500 uppercase tracking-[0.3em] flex items-center gap-2">
                        <div className="w-5 h-5">{USABILITY_ICON_SMALL}</div> Usability Gaps
                      </h4>
                      <div className="space-y-12">
                        {project.usabilityGaps?.map((insight, idx) => renderInsightCard(insight, idx, false, 'usability'))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-16">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-sans tracking-tight border-b-2 border-green-100 pb-4">What Were The Strengths?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                    <div className="space-y-12">
                      <h4 className="text-sm font-bold text-green-600 uppercase tracking-[0.3em] flex items-center gap-2">
                        <div className="w-5 h-5">{MENTAL_MODEL_ICON_SMALL}</div> Mental Model Strengths
                      </h4>
                      <div className="space-y-12">
                        {project.mentalModelStrengths?.map((insight, idx) => renderInsightCard(insight, idx, true, 'mental'))}
                      </div>
                    </div>
                    <div className="space-y-12">
                      <h4 className="text-sm font-bold text-green-600 uppercase tracking-[0.3em] flex items-center gap-2">
                        <div className="w-5 h-5">{USABILITY_ICON_SMALL}</div> Usability Strengths
                      </h4>
                      <div className="space-y-12">
                        {project.usabilityStrengths?.map((insight, idx) => renderInsightCard(insight, idx, true, 'usability'))}
                      </div>
                    </div>
                  </div>
                </div>

                {(project.mentalModelImprovements || project.usabilityImprovements) && (
                  <div className="space-y-24 mt-16">
                    {/* Injected Insight side-by-side visuals */}
                    <div className="flex flex-col gap-16 w-full pt-8 pb-16 items-center justify-center">
                      <div className="w-full md:w-[75%]">
                        <img src="/assets/CLM_Insights Annotation.png" alt="Insights Annotation Visual" className="w-full h-auto object-contain shadow-xl hover:scale-[1.01] transition-transform duration-500 rounded-[2rem] cursor-zoom-in" onClick={() => setSelectedImage("/assets/CLM_Insights Annotation.png")} />
                        <p className="text-xs text-gray-500 italic text-center mt-6 px-4">
                          A glimpse into the project report: insights were annotated onto product screenshots to clearly communicate findings to stakeholders.
                        </p>
                      </div>
                      <div className="w-full md:w-[75%]">
                        <img src="/assets/CLM_Insights Pie Chart.png" alt="Insights Pie Chart Visual" className="w-full h-auto object-contain shadow-xl hover:scale-[1.01] transition-transform duration-500 rounded-[2rem] cursor-zoom-in" onClick={() => setSelectedImage("/assets/CLM_Insights Pie Chart.png")} />
                        <p className="text-xs text-gray-500 italic text-center mt-6 px-4">
                          A glimpse into the project report: results and data were visualised in effective formats to support better understanding and decision-making.
                        </p>
                      </div>
                    </div>

                    <div className="pt-32 border-t border-gray-100 space-y-6">
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans tracking-tight">Major Improvements Before GA</h3>
                      <div className="space-y-4 max-w-4xl">
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                          Final Content Dashboard improvements were prioritized based on user ratings and descriptions of <span className="font-bold text-gray-900 highlight-blue">'Pain point severity' and 'Importance of resolution'</span>, resulting in <span className="font-bold text-gray-900">nine high-impact recommendations</span>.
                        </p>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                          These recommendations were reviewed with key stakeholders and finalized through discussion and unanimous agreement.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
                      <div className="bg-white border-2 border-rose-100 rounded-[3rem] p-12 md:p-16 space-y-12 shadow-xl shadow-rose-50/30 relative overflow-hidden group">
                        <div className="flex items-center gap-4 border-b border-rose-50 pb-6">
                          <div className="text-rose-500">
                            <div className="w-6 h-6">{MENTAL_MODEL_ICON_SMALL}</div>
                          </div>
                          <h4 className="text-2xl md:text-3xl font-bold font-sans text-gray-900 uppercase tracking-widest">Mental Model Improvements</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-14 relative z-10">
                          {project.mentalModelImprovements?.map((item, idx) => (
                            <div key={idx} className="space-y-6">
                              <div className="space-y-2">
                                {item.category && <p className="text-[10px] font-bold text-rose-500 uppercase tracking-[0.3em] mb-2">{item.category}</p>}
                                <p className="text-2xl font-bold text-gray-900 font-sans">{item.title}</p>
                              </div>
                              <div className="space-y-8">
                                {item.details?.map((detail, dIdx) => (
                                  <div key={dIdx} className="space-y-2">
                                    <p className="text-lg text-gray-600 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: detail.text }} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border-2 border-rose-100 rounded-[3rem] p-12 md:p-16 space-y-12 shadow-xl shadow-rose-50/30 h-full relative group">
                        <div className="flex items-center gap-4 border-b border-rose-50 pb-6">
                          <div className="text-rose-500">
                            <div className="w-6 h-6">{USABILITY_ICON_SMALL}</div>
                          </div>
                          <h4 className="text-2xl md:text-3xl font-bold font-sans text-gray-900 uppercase tracking-widest">Usability Improvements</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-12 relative z-10">
                          {project.usabilityImprovements?.map((item, idx) => (
                            <div key={idx} className="space-y-4">
                              <div className="space-y-1">
                                {item.category && <p className="text-[10px] font-bold text-rose-500 uppercase tracking-[0.3em]">{item.category}</p>}
                                <p className="text-xl font-bold text-gray-900 font-sans">{item.title}</p>
                              </div>
                              <p className="text-lg text-gray-600 font-light leading-relaxed pl-1">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <section id="impact" className="space-y-8 scroll-mt-32">
              <div className="flex items-center gap-4">
                <div className="text-gray-900">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-sans">Impact</h2>
              </div>

              <div className="space-y-6 max-w-4xl">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 font-sans">Research Driven Results</p>
              </div>

              <div className="bg-white border border-gray-100 text-[#0F172A] rounded-[4rem] p-12 md:p-24 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col items-center text-center">
                {project.impactStats && project.impactStats.length > 0 && (
                  <div className="relative z-10 w-full space-y-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
                      {project.impactStats.map((stat, idx) => (
                        <div key={idx} className="space-y-6 group">
                          <div className="text-sm font-bold uppercase tracking-[0.5em] text-black transition-colors duration-500">{stat.label}</div>
                          <div className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#3e83f7] leading-none font-sans group-hover:scale-105 transition-transform duration-500">{stat.value}</div>
                          <p className="text-xl text-gray-500 font-light italic max-w-sm mx-auto leading-relaxed">{stat.subtext}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {project.impactSummary && (
                <div className="space-y-6 max-w-4xl">
                  <p className="text-xl text-gray-600 leading-relaxed font-light whitespace-pre-line" dangerouslySetInnerHTML={{ __html: project.impactSummary }} />
                </div>
              )}
            </section>

            {project.learnings && (
              <section id="learnings" className="space-y-8 scroll-mt-32 pb-16">
                <div className="flex items-center gap-4">
                  <div className="text-gray-900">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25c.938-.332 1.948-.512 3-.512 2.212 0 4.248.88 5.75 2.321 1.502-1.441 3.538-2.321 5.75-2.321 1.052 0 2.062.18 3 .512V4.262c-.938-.332-1.948-.512-3-.512a8.967 8.967 0 00-6 2.292m0 0V21" /></svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-sans">Learnings</h2>
                </div>

                <div className="space-y-12 max-w-5xl">
                  {project.learnings.map((item, idx) => {
                    let learningIcon;
                    if (idx === 0) {
                      learningIcon = (
                        <svg viewBox="0 0 100 100" className="w-24 h-24 mt-4 text-[#111827]">
                          <path d="M40,50 C45,30 65,35 60,55 C55,75 35,65 45,45 C55,25 80,40 70,60 C60,80 30,70 20,50 C10,30 40,20 60,30 C80,40 70,80 50,85 C30,90 15,60 25,40 C35,20 65,10 85,30 C105,50 80,90 40,90" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M50,45 Q55,50 50,55" stroke="#60A5FA" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
                        </svg>
                      );
                    } else if (idx === 1) {
                      learningIcon = (
                        <svg viewBox="0 0 100 100" className="w-28 h-28 mt-4">
                          {/* Sketchy Circle Network icon matching reference image */}
                          <g transform="translate(10, 10) scale(0.8)">
                            {/* Main Outer Ring Path (Sketchy) */}
                            <path d="M50,20 A30,30 0 1,1 49.9,20" stroke="#1E293B" strokeWidth="4.5" fill="none" strokeLinecap="round" />

                            {/* Top Node */}
                            <circle cx="50" cy="20" r="10" stroke="#1E293B" strokeWidth="4.5" fill="white" />

                            {/* Bottom Left Node */}
                            <circle cx="24" cy="65" r="10" stroke="#1E293B" strokeWidth="4.5" fill="white" />

                            {/* Bottom Right Node - Rose Accent */}
                            <circle cx="76" cy="65" r="10" stroke="#60A5FA" strokeWidth="4.5" fill="white" />

                            {/* Additional Rose sketchy stroke inside accent node */}
                            <path d="M72,65 Q76,68 80,65" stroke="#60A5FA" strokeWidth="2" opacity="0.4" />
                          </g>
                        </svg>
                      );
                    } else {
                      learningIcon = (
                        <svg viewBox="0 0 120 100" className="w-28 h-24 mt-4">
                          {/* Boxes 1, 2, 3 in Slate/Black as seen in reference image */}
                          <g stroke="#1E293B" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            {/* Box 1 (top right) */}
                            <path d="M48,12 L82,12 Q88,12 88,18 L88,32 Q88,38 82,38 L48,38 Q42,38 42,32 L42,18 Q42,12 48,12" />
                            <text x="61" y="30" fontSize="20" fontWeight="bold" fill="#1E293B" stroke="none" className="font-sans">1</text>

                            {/* Box 2 (middle - accented with light Rose background) */}
                            <path d="M38,38 L72,38 Q78,38 78,44 L78,58 Q78,64 72,64 L38,64 Q32,64 32,58 L32,44 Q32,38 38,38" fill="#60A5FA" fillOpacity="0.1" />
                            <text x="51" y="56" fontSize="20" fontWeight="bold" fill="#60A5FA" stroke="none" className="font-sans">2</text>

                            {/* Box 3 (bottom right) */}
                            <path d="M48,64 L82,64 Q88,64 88,70 L88,84 Q88,90 82,90 L48,90 Q42,90 42,84 L42,70 Q42,64 48,64" />
                            <text x="61" y="82" fontSize="20" fontWeight="bold" fill="#1E293B" stroke="none" className="font-sans">3</text>

                            {/* Large return loop arrow on left in Rose */}
                            <g transform="translate(5, 5)">
                              <path d="M28,45 Q12,45 12,30 Q12,15 28,15" stroke="#60A5FA" strokeWidth="4.5" />
                              <path d="M22,8 L32,15 L22,22" stroke="#60A5FA" strokeWidth="4.5" fill="none" />
                            </g>
                          </g>
                        </svg>
                      );
                    }

                    return (
                      <div key={idx} className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex flex-col items-center min-w-[100px]">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold border border-blue-100 shadow-sm transition-colors">
                            {idx + 1}
                          </div>
                          {learningIcon}
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans leading-tight">{item.title}</h3>
                          <p className="text-xl text-gray-600 font-light leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          <section className="bg-gray-50 py-12 mt-10 w-full px-6 flex justify-start lg:pl-20 border-t border-gray-100">
            <button onClick={navigateToHome} className="inline-flex items-center text-gray-500 font-bold text-sm uppercase tracking-[0.2em] hover:text-gray-900 transition-all group font-sans whitespace-nowrap">
              <span className="mr-4 transform group-hover:-translate-x-1 transition-transform duration-300 text-lg font-sans">←</span>
              BACK TO WORK
            </button>
          </section>
        </div>
      </div>

      {/* Fixed Bottom Milestone Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 z-50 pt-6 pb-8 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
        <div className="container mx-auto px-6 max-w-5xl">
          <nav className="flex items-center justify-between relative">
            {/* Background Track Line - Elongated, Faded, and 2x weight */}
            <div 
              className="absolute top-1/2 left-[-40px] w-[calc(100%+80px)] h-[2px] -translate-y-1/2 rounded-full z-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #F3F4F6 15%, #F3F4F6 85%, transparent 100%)'
              }}
            ></div>

            {/* Active Progress Line - Now Fluid, Elongated, and 2x weight */}
            <div
              className="absolute top-1/2 left-[-40px] h-[2px] bg-blue-400 -translate-y-1/2 rounded-full z-0 transition-all duration-200 ease-out"
              style={{
                width: `calc(${scrollProgress}% + 40px)`,
                maskImage: 'linear-gradient(90deg, transparent 0%, black 40px, black 100%)',
                WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 40px, black 100%)'
              }}
            ></div>

            {['Project Background', 'Approach', 'Insights', 'Impact', 'Learnings'].map((item, index) => {
              const id = item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
              const itemIndex = ['project-background', 'approach', 'insights', 'impact', 'learnings'].indexOf(id);
              const currentIndex = ['project-background', 'approach', 'insights', 'impact', 'learnings'].indexOf(activeSection);
              const isActive = currentIndex === itemIndex;
              const isPast = currentIndex > itemIndex;

              return (
                <button
                  key={id}
                  onClick={(e) => scrollToSection(e, id)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  {/* Node/Dot Container - Fixed height to ensure track centers perfectly */}
                  <div className="h-6 flex items-center justify-center">
                    <div className={`relative flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'w-3 h-3' : 'w-2 h-2'
                    }`}>
                      {/* Glowing effect for active */}
                      {isActive && (
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[4px] scale-[3.5] animate-pulse"></div>
                      )}
                      
                      {/* The actual dot */}
                      <div
                        className={`w-full h-full rounded-full transition-all duration-500 border ${isActive
                          ? 'bg-blue-500 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]'
                          : isPast
                            ? 'bg-blue-400 border-blue-400'
                            : 'bg-white border-gray-300'
                          }`}
                      ></div>
                    </div>
                  </div>

                  {/* Label - Positioned with mt-4 to ensure whitespace below and spacing from dot */}
                  <span
                    className={`text-[9px] md:text-[10px] font-bold tracking-[0.15em] transition-all duration-500 absolute top-8 whitespace-nowrap ${isActive
                      ? 'text-blue-600'
                      : isPast
                        ? 'text-gray-700'
                        : 'text-gray-500 group-hover:text-gray-700'
                      }`}
                  >
                    {item.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full max-h-screen flex items-center justify-center p-8">
            <button 
              className="absolute top-0 right-0 m-4 p-2 text-white hover:text-gray-300 transition-colors z-[60]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
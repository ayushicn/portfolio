
import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = `#/project/${project.id}`;
  };

  const content = (
    <>
      <div className="aspect-[16/11] overflow-hidden relative bg-gray-50">
        {!imageError ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
             <div className="text-gray-200">
               <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
             </div>
          </div>
        )}
        
        {/* Modern floating methodology tags */}
        <div className="absolute top-6 left-6 flex flex-wrap gap-2 max-w-[80%]">
          {project.cardImageTag ? (
            <span className="text-[9px] uppercase tracking-[0.2em] bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full text-gray-900 font-bold shadow-sm border border-gray-100">
              {project.cardImageTag}
            </span>
          ) : (
            project.methods.slice(0, 2).map((m, i) => (
              <span key={i} className="text-[9px] uppercase tracking-[0.2em] bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full text-gray-900 font-bold shadow-sm border border-gray-100">
                {m}
              </span>
            ))
          )}
        </div>

        {project.isWIP && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 shadow-xl">
              <span className="text-white text-xl md:text-2xl font-bold uppercase tracking-[0.2em] drop-shadow-lg text-center">
                Work In Progress
              </span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-10">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors serif leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-500 mb-8 leading-relaxed font-light text-lg">
          {project.tagline}
        </p>
      </div>
    </>
  );

  if (project.externalUrl) {
    return (
      <a 
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-3xl bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 shadow-sm"
      >
        {content}
      </a>
    );
  }

  if (project.isWIP) {
    return (
      <div className="block overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-500">
        {content}
      </div>
    );
  }

  return (
    <a 
      href={`#/project/${project.id}`}
      onClick={handleClick}
      className="group block overflow-hidden rounded-3xl bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 shadow-sm"
    >
      {content}
    </a>
  );
};

export default ProjectCard;

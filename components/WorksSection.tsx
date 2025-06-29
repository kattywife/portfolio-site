
import React from 'react';
import { Language, Project } from '../types';

interface WorksSectionProps {
  language: Language;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  headerContent: {
      works: { [key in Language]: string };
  }
}

const WorksSection: React.FC<WorksSectionProps> = ({ language, projects, onSelectProject, headerContent }) => {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-bold font-itim text-center mb-12">{headerContent.works[language]}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div 
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="flex h-32 md:h-40 rounded-lg shadow-custom cursor-pointer hover:-translate-y-1 transition-transform duration-300 overflow-hidden group"
          >
            <div className="w-32 md:w-40 bg-brown-light flex-shrink-0">
              {/* Placeholder for project icon, user can replace the src in constants.ts */}
              <img 
                src={project.logoUrl || `https://placekitten.com/160/160`} 
                alt={`${project.name[language]} logo`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-brown-medium p-4 md:p-6 flex flex-col flex-grow group-hover:bg-green-olive/30 transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-bold font-itim mb-2">{project.name[language]}</h3>
              <p className="text-text-beige/80 line-clamp-2">
                {project.shortDescription[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;

import React, { useState, useEffect } from 'react';
import { Language, Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  language: Language;
  content: {
    description: { [key in Language]: string };
    keyFeatures: { [key in Language]: string };
    techStack: { [key in Language]: string };
    team: { [key in Language]: string };
    additionalInfo: { [key in Language]: string };
    gallery: { [key in Language]: string };
    back: { [key in Language]: string };
    githubLink: { [key in Language]: string };
    download: { [key in Language]: string };
    visitSite: { [key in Language]: string };
  }
}

const AccordionItem: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-brown-medium/50 rounded-lg overflow-hidden shadow-custom">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left bg-brown-medium p-4 font-itim text-lg flex justify-between items-center hover:bg-green-olive/30 transition-colors"
            >
                {title}
                <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
            </button>
            {isOpen && (
                <div className="bg-brown-medium/50 p-4">
                    {children}
                </div>
            )}
        </div>
    );
};


const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, language, content }) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(
    (project.imageUrls && project.imageUrls.length > 0)
      ? project.imageUrls[0]
      : `https://placekitten.com/600/400`
  );
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        setIsViewerOpen(false);
       }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const fallbackImageUrl = `https://placekitten.com/600/400`;

  const openViewer = () => {
    document.body.style.overflow = 'hidden';
    setIsViewerOpen(true);
  }

  const closeViewer = () => {
    document.body.style.overflow = 'auto';
    setIsViewerOpen(false);
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl sm:text-5xl font-bold font-itim text-left mb-12">{project.name[language]}</h2>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="lg:w-7/12 flex flex-col">
            <div className="space-y-6">
                <div className="bg-brown-medium p-6 rounded-lg shadow-custom">
                    <h3 className="font-itim text-xl font-bold mb-2">{content.description[language]}</h3>
                    <p className="text-text-beige/90">{project.fullDescription[language]}</p>
                </div>

                <div className="space-y-3">
                    <AccordionItem title={content.keyFeatures[language]}>
                        <ul className="list-disc list-inside text-text-beige/90">
                            {project.keyFeatures[language].map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </AccordionItem>
                    <AccordionItem title={content.techStack[language]}>
                        <ul className="list-disc list-inside text-text-beige/90">
                            {project.techStack[language].map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </AccordionItem>
                    <AccordionItem title={content.team[language]}>
                        <ul className="list-disc list-inside text-text-beige/90">
                            {project.team[language].map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </AccordionItem>
                    <AccordionItem title={content.additionalInfo[language]}>
                        <ul className="list-disc list-inside text-text-beige/90">
                            {project.additionalInfo[language].map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </AccordionItem>
                </div>
            </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-5/12">
             <div className="sticky top-28 space-y-4">
                <div 
                  className="bg-brown-light w-full aspect-video rounded-lg flex items-center justify-center text-main-bg font-bold font-itim text-2xl shadow-custom overflow-hidden cursor-pointer"
                  onClick={openViewer}
                >
                    <img 
                        src={project.imageUrls && project.imageUrls.length > 0 ? selectedImageUrl : fallbackImageUrl} 
                        alt={project.name[language]} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                {project.imageUrls && project.imageUrls.length > 1 && (
                    <div className="flex gap-2 pb-2 overflow-x-auto">
                        {project.imageUrls.map((url, index) => (
                            <button 
                                key={index}
                                onClick={() => setSelectedImageUrl(url)}
                                className={`w-20 h-14 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${selectedImageUrl === url ? 'border-green-active' : 'border-transparent hover:border-green-active/50'}`}
                            >
                                <img src={url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                )}
             </div>
        </div>
      </div>

      {/* Buttons Row */}
      <div className="mt-12 flex flex-wrap gap-4 justify-between items-start">
          <div>
            <button
                onClick={onBack}
                className="bg-green-olive text-text-beige px-6 py-2 rounded-lg font-itim text-lg hover:bg-green-active transition-colors border-2 border-button-border shadow-custom"
            >
                {content.back[language]}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:w-5/12 w-full">
              {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-3 bg-brown-medium text-text-beige px-4 py-2 rounded-lg font-itim text-lg hover:bg-green-olive/80 transition-colors border-2 border-button-border shadow-custom min-w-0">
                     <div className="bg-black/50 rounded-full p-1">
                       <GithubIcon className="w-6 h-6 text-text-beige"/>
                     </div>
                     <span className="truncate">{project.githubUrl.replace(/^https?:\/\//, '')}</span>
                  </a>
              )}
              {project.downloadUrl ? (
                  <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center bg-green-download text-text-beige px-6 py-2 rounded-lg font-itim text-lg hover:bg-opacity-80 transition-colors border-2 border-button-border shadow-custom">
                      {content.download[language]}
                  </a>
              ) : project.websiteUrl && (
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center bg-green-download text-text-beige px-6 py-2 rounded-lg font-itim text-lg hover:bg-opacity-80 transition-colors border-2 border-button-border shadow-custom">
                      {content.visitSite[language]}
                  </a>
              )}
          </div>
      </div>


      {isViewerOpen && (
        <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={closeViewer}
        >
            <button 
                onClick={closeViewer} 
                className="absolute top-4 right-4 text-white text-4xl hover:text-green-active transition-colors"
                aria-label="Close image viewer"
            >
                &times;
            </button>
            <img 
                src={selectedImageUrl} 
                alt={project.name[language]} 
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
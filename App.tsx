
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Language, Project } from './types';
import { CONTENT, PROJECTS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import WorksSection from './components/WorksSection';
import ContactsSection from './components/ContactsSection';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('RU');
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const aboutRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setTimeout(() => {
        worksRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  const handleNavClick = (sectionId: string) => {
    if (selectedProject) {
        setSelectedProject(null);
        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
        }
    });
  }, []);

  useEffect(() => {
    if (selectedProject) return;

    const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    const sections = [aboutRef, worksRef, contactsRef];
    sections.forEach(ref => {
        if (ref.current) {
            observer.observe(ref.current);
        }
    });

    return () => {
        sections.forEach(ref => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        });
    };
  }, [selectedProject, observerCallback]);


  return (
    <div className="bg-main-bg min-h-screen text-text-beige font-roboto-condensed flex flex-col">
      <Header 
        language={language} 
        setLanguage={setLanguage}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        content={CONTENT.header}
      />
      <main className="flex-grow container mx-auto px-4 md:px-8">
        {selectedProject ? (
          <div className="py-16">
            <ProjectDetail 
              project={selectedProject} 
              onBack={handleBackToProjects} 
              language={language}
              content={CONTENT.projectDetail}
            />
          </div>
        ) : (
          <div>
            <div id="about" ref={aboutRef} className="py-12 md:py-24 flex items-center justify-center scroll-mt-28">
              <AboutSection language={language} content={CONTENT.about} headerContent={CONTENT.header} />
            </div>
            <div id="works" ref={worksRef} className="py-12 md:py-24 flex flex-col justify-center scroll-mt-28">
              <WorksSection 
                language={language} 
                projects={PROJECTS} 
                onSelectProject={handleSelectProject} 
                headerContent={CONTENT.header}
              />
            </div>
            <div id="contacts" ref={contactsRef} className="py-12 md:py-24 flex items-center justify-center scroll-mt-40">
              <ContactsSection language={language} content={CONTENT.contacts} headerContent={CONTENT.header} />
            </div>
          </div>
        )}
      </main>
      <Footer language={language} content={CONTENT.footer} contactContent={CONTENT.contacts}/>
    </div>
  );
};

export default App;
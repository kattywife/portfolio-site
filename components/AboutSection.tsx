
import React from 'react';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
  content: {
    name: { [key in Language]: string };
    description: { [key in Language]: string };
  };
  headerContent: {
    about: { [key in Language]: string };
  }
}

const AboutSection: React.FC<AboutSectionProps> = ({ language, content, headerContent }) => {
  // Using the user-provided link for better visual centering.
  const catImageUrl = "https://i.imgur.com/PjdYMiS.png";

  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 transform lg:translate-x-8">
        
        <div className="flex flex-col items-start">
          <h2 className="text-4xl sm:text-5xl font-bold font-itim text-left mb-8">{headerContent.about[language]}</h2>
          
          <div className="bg-brown-medium p-8 sm:p-12 lg:p-16 rounded-2xl shadow-custom max-w-xl lg:w-[500px]">
            <h2 className="text-2xl sm:text-3xl font-bold font-itim mb-6">{content.name[language]}</h2>
            <p className="leading-relaxed text-lg">
              {content.description[language]}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src={catImageUrl} 
            alt="Illustration of a cat" 
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-auto lg:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  content: {
    about: { [key in Language]: string };
    works: { [key in Language]: string };
    contacts: { [key in Language]: string };
  };
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, activeSection, onNavClick, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: content.about[language] },
    { id: 'works', label: content.works[language] },
    { id: 'contacts', label: content.contacts[language] },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'RU' : 'EN');
  };

  const buttonBaseClasses = "px-3 py-1 rounded-lg font-itim text-xs sm:px-4 sm:py-2 sm:text-sm transition-colors duration-300 border-2 border-button-border shadow-custom whitespace-nowrap";

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-header-bg/95 backdrop-blur-sm' : 'bg-header-bg'}`}>
      <div className="container mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
        <nav className="flex items-center gap-2 sm:gap-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`${buttonBaseClasses} ${
                activeSection === item.id 
                ? 'bg-green-active text-text-beige' 
                : 'bg-green-olive text-text-beige hover:bg-green-active'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          onClick={toggleLanguage}
          className={`${buttonBaseClasses} bg-green-olive text-text-beige hover:bg-green-active`}
        >
          {language === 'EN' ? 'RU' : 'EN'}
        </button>
      </div>
    </header>
  );
};

export default Header;
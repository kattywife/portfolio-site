
import React from 'react';
import { Language } from '../types';
import TelegramIcon from './icons/TelegramIcon';
import EmailIcon from './icons/EmailIcon';
import GithubIcon from './icons/GithubIcon';

interface FooterProps {
    language: Language;
    content: {
        name: { [key in Language]: string };
        portfolio: { [key in Language]: string };
        contacts: { [key in Language]: string };
    };
    contactContent: {
        telegramUser: { [key in Language]: string };
        emailAddress: { [key in Language]: string };
        githubUrl: { [key in Language]: string };
    }
}

const Footer: React.FC<FooterProps> = ({ language, content, contactContent }) => {
  // Placeholder for the small cat icon in the footer
  const CatIcon = () => (
    <div className="w-12 h-12 bg-green-olive rounded-full flex items-center justify-center text-main-bg font-bold">
      CAT
    </div>
  );

  return (
    <footer className="bg-header-bg text-text-beige py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
            <div className="text-sm">
                <p className="font-bold">{content.name[language]}</p>
                <p>{content.portfolio[language]}</p>
            </div>
            
            <div className="text-center">
                <p className="font-bold font-itim">{content.contacts[language]}</p>
                <div className="flex items-center justify-center gap-4 mt-2">
                    <a href={`https://t.me/${contactContent.telegramUser[language]}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brown-light transition-colors">
                        <TelegramIcon className="w-4 h-4" />
                        <span className="text-xs">{contactContent.telegramUser[language]}</span>
                    </a>
                    <a href={`mailto:${contactContent.emailAddress[language]}`} className="flex items-center gap-1 hover:text-brown-light transition-colors">
                        <EmailIcon className="w-4 h-4" />
                        <span className="text-xs">{contactContent.emailAddress[language]}</span>
                    </a>
                    <a href={contactContent.githubUrl[language]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brown-light transition-colors">
                        <GithubIcon className="w-4 h-4" />
                        <span className="text-xs">{contactContent.githubUrl[language]}</span>
                    </a>
                </div>
            </div>

            {/* User can replace this with their own image/icon component */}
            <img src="https://placekitten.com/48/48" alt="Small decorative cat" className="w-12 h-12 rounded-full object-cover" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

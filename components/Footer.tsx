
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

  return (
    <footer className="bg-header-bg text-text-beige py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left">
            <div className="text-sm">
                <p className="font-bold">{content.name[language]}</p>
                <p>{content.portfolio[language]}</p>
            </div>
            
            <div className="text-center">
                <p className="font-bold font-itim">{content.contacts[language]}</p>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-2">
                    <a href={`https://t.me/${contactContent.telegramUser[language]}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brown-light transition-colors">
                        <TelegramIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs break-all">{contactContent.telegramUser[language]}</span>
                    </a>
                    <a href={`mailto:${contactContent.emailAddress[language]}`} className="flex items-center gap-2 hover:text-brown-light transition-colors">
                        <EmailIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs break-all">{contactContent.emailAddress[language]}</span>
                    </a>
                    <a href={contactContent.githubUrl[language]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brown-light transition-colors">
                        <GithubIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs break-all">{contactContent.githubUrl[language]}</span>
                    </a>
                </div>
            </div>

            {/* User can replace this with their own image/icon component */}
            <img src="https://i.imgur.com/PjdYMiS.png" alt="Small decorative cat" className="w-12 h-12 rounded-full object-cover" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

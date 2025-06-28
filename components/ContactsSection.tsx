
import React from 'react';
import { Language } from '../types';
import TelegramIcon from './icons/TelegramIcon';
import EmailIcon from './icons/EmailIcon';
import GithubIcon from './icons/GithubIcon';

interface ContactsSectionProps {
  language: Language;
  content: {
    telegram: { [key in Language]: string };
    email: { [key in Language]: string };
    github: { [key in Language]: string };
    telegramUser: { [key in Language]: string };
    emailAddress: { [key in Language]: string };
    githubUrl: { [key in Language]: string };
  };
  headerContent: {
      contacts: { [key in Language]: string };
  }
}

const ContactsSection: React.FC<ContactsSectionProps> = ({ language, content, headerContent }) => {
  const contactItems = [
    {
      Icon: TelegramIcon,
      title: content.telegram[language],
      value: content.telegramUser[language],
      href: `https://t.me/${content.telegramUser[language]}`,
    },
    {
      Icon: EmailIcon,
      title: content.email[language],
      value: content.emailAddress[language],
      href: `mailto:${content.emailAddress[language]}`,
    },
    {
      Icon: GithubIcon,
      title: content.github[language],
      value: content.githubUrl[language],
      href: content.githubUrl[language],
    },
  ];
  
  // Placeholder image, user can replace this URL with their own, preferably a PNG.
  const catImageUrl = "https://i.imgur.com/TOUKSEo.png";


  return (
    <section className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold font-itim text-left mb-12">{headerContent.contacts[language]}</h2>
              <div className="space-y-4 w-full max-w-md">
                  {contactItems.map((item, index) => (
                      <a 
                          key={index} 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center bg-brown-medium p-4 rounded-lg shadow-custom hover:bg-green-olive/30 transition-colors duration-300"
                      >
                          <div className="bg-brown-light p-3 rounded-md mr-4">
                              <item.Icon className="w-8 h-8 text-main-bg" />
                          </div>
                          <div>
                              <h4 className="font-bold font-itim text-lg">{item.title}</h4>
                              <p className="text-text-beige/80 break-all">{item.value}</p>
                          </div>
                      </a>
                  ))}
              </div>
            </div>
            <div className="flex-shrink-0 flex justify-center">
                <img 
                  src={catImageUrl} 
                  alt="Illustration of a cat" 
                  className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] object-contain"
                />
            </div>
        </div>
    </section>
  );
};

export default ContactsSection;
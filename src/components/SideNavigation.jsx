import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function SideNavigation() {
  return (
    <nav className="fixed top-0 left-0 h-full w-48 bg-[#ded7c7] bg-opacity-80 shadow-lg flex-col items-center py-12 z-50 hidden sm:flex">
      <div className="flex-1 w-full flex flex-col items-center space-y-8">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-[#333332] hover:text-[#333332] hover:opacity-70 transition font-semibold text-lg tracking-wide"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex space-x-4 mt-auto mb-6">
        <a href="mailto:ahmadmesbahqa@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#333332] hover:text-[#333332] hover:opacity-70"><Mail className="h-6 w-6" /></a>
        <a href="https://www.linkedin.com/in/ahmad-mohamed-8ba9a131a/" target="_blank" rel="noopener noreferrer" className="text-[#333332] hover:text-[#333332] hover:opacity-70"><Linkedin className="h-6 w-6" /></a>
        <a href="https://github.com/AhmadQA-art" target="_blank" rel="noopener noreferrer" className="text-[#333332] hover:text-[#333332] hover:opacity-70"><Github className="h-6 w-6" /></a>
      </div>
    </nav>
  );
}

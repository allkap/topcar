'use client';

import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-600 shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${scrolled ? 'text-white' : 'text-blue-600'}`}>TOPCAR</div>
          <div className="hidden md:flex space-x-6">
            {['О нас', 'Калькулятор', 'Команда', 'Контакты'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`hover:text-blue-300 transition ${scrolled ? 'text-white' : 'text-blue-600'}`}>{item}</a>
            ))}
          </div>
          {/* Остальной код компонента */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
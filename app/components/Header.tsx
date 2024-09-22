'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-gray-800">
              Ваш Логотип
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              <li><Link href="/#about-us" className="text-gray-600 hover:text-gray-800">О нас</Link></li>
              <li><Link href="/#how-we-work" className="text-gray-600 hover:text-gray-800">Как мы работаем</Link></li>
              <li><Link href="/#калькулятор" className="text-gray-600 hover:text-gray-800">Рассчитать стоимость</Link></li>
              <li><Link href="/#order-tracker" className="text-gray-600 hover:text-gray-800">Отследить заказ</Link></li>
              <li><Link href="/#contacts" className="text-gray-600 hover:text-gray-800">Контакты</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
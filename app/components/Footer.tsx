import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-800 text-white py-8 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Содержимое футера */}
        <p className="text-center">&copy; 2023 Ваша Компания. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
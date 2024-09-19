import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">TOPCAR</h3>
            <p>Импорт автомобилей из Китая</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Быстрые ссылки</h4>
            <ul>
              <li><a href="#about">О нас</a></li>
              <li><a href="#calculator">Калькулятор</a></li>
              <li><a href="#team">Команда</a></li>
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 TOPCAR. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
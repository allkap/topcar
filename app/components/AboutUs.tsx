import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">О нас</h2>
        <p className="text-lg text-gray-600 mb-6">
          Мы - компания, специализирующаяся на доставке автомобилей по всей России. Наша миссия - обеспечить безопасную и своевременную доставку вашего автомобиля, куда бы вы ни отправлялись.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Более 10 лет опыта в сфере автоперевозок</li>
          <li>Профессиональная команда водителей и логистов</li>
          <li>Современный автопарк и передовые технологии отслеживания</li>
          <li>Индивидуальный подход к каждому клиенту</li>
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md h-80">
          <Image
            src="/about-us-image.jpg" // Замените на путь к вашему изображению
            alt="О нашей компании"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
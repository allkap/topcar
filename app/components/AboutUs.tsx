import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <section id="о нас" className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/images/about-us.jpg" alt="О нас" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">О компании TOPCAR</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              TOPCAR - ведущая компания по импорту автомобилей из Китая. Наша миссия - предоставить нашим клиентам доступ к качественным автомобилям по доступным ценам.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              С TOPCAR вы получаете надежность, комфорт и инновации прямо из сердца автомобильной индустрии Китая.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
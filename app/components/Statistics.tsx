'use client';

import React from 'react';
import { FaCar, FaUsers, FaClock } from 'react-icons/fa';

const Statistics: React.FC = () => {
  return (
    <section className="py-16 gradient-bg-1 text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Наши достижения</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center hover-lift">
            <FaCar className="text-5xl mx-auto mb-4 text-primary" />
            <p className="text-4xl font-bold mb-2">5000+</p>
            <p>Доставленных автомобилей</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center hover-lift">
            <FaUsers className="text-5xl mx-auto mb-4 text-primary" />
            <p className="text-4xl font-bold mb-2">98%</p>
            <p>Довольных клиентов</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center hover-lift">
            <FaClock className="text-5xl mx-auto mb-4 text-primary" />
            <p className="text-4xl font-bold mb-2">10+</p>
            <p>Лет на рынке</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
'use client';

import React, { useEffect, useState } from 'react';
import { FaCar, FaUsers, FaClock } from 'react-icons/fa';

interface Statistic {
  key: string;
  value: string;
  label: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  cars: FaCar,
  clients: FaUsers,
  years: FaClock,
};

const Statistics: React.FC = () => {
  const [stats, setStats] = useState<Statistic[]>([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch('/api/statistics');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        } else {
          console.error('Failed to fetch statistics');
        }
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };
    fetchStatistics();
  }, []);

  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = iconMap[stat.key];
            return (
              <div key={stat.key} className="flex flex-col items-center text-center">
                {Icon && <Icon className="text-5xl mb-4" />}
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-xl">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
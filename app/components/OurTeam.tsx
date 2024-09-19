import React from 'react';
import UserProfile from './UserProfile';

const OurTeam: React.FC = () => {
  const teamMembers = [
    { name: 'Иван Иванов', position: 'CEO', imageUrl: '/images/ivan.jpg' },
    { name: 'Мария Петрова', position: 'CTO', imageUrl: '/images/maria.jpg' },
    { name: 'Алексей Сидоров', position: 'Менеджер по продажам', imageUrl: '/images/alexey.jpg' },
  ];

  return (
    <section id="team" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <UserProfile key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
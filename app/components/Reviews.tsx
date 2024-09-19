import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    { name: 'Анна К.', text: 'Отличный сервис! Быстро доставили мой автомобиль.' },
    { name: 'Петр С.', text: 'Очень доволен качеством обслуживания.' },
    { name: 'Елена М.', text: 'Профессиональный подход к работе. Рекомендую!' },
  ];

  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Отзывы</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <p className="italic mb-2">"{review.text}"</p>
            <p className="font-bold">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
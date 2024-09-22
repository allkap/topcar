import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Review {
  name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  { name: "Иван Петров", rating: 5, text: "Отличный сервис! Мой автомобиль доставили вовремя и в идеальном состоянии." },
  { name: "Анна Сидорова", rating: 4.5, text: "Очень довольна услугами. Небольшая задержка, но в целом все отлично." },
  { name: "Сергей Иванов", rating: 5, text: "Профессиональный подход и отличное обслуживание. Рекомендую!" },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section className="section-container bg-gray-100">
      <h2 className="section-title">Отзывы наших клиентов</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <StarRating rating={review.rating} />
            <p className="mt-4 text-gray-600 italic">"{review.text}"</p>
            <p className="mt-2 font-semibold">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
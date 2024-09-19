import React from 'react';

const PopularCars: React.FC = () => {
  const cars = [
    { name: 'Model X', brand: 'BYD', imageUrl: '/images/byd-model-x.jpg' },
    { name: 'ES8', brand: 'NIO', imageUrl: '/images/nio-es8.jpg' },
    { name: 'P7', brand: 'Xpeng', imageUrl: '/images/xpeng-p7.jpg' },
  ];

  return (
    <section className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4">Популярные автомобили</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.name} className="border p-4 rounded">
            <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-xl font-bold">{car.brand} {car.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCars;
'use client';

import React, { useState } from 'react';

interface OrderStatus {
  status: string;
  details: string;
}

const OrderTracker: React.FC = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь должен быть запрос к API для получения статуса заказа
    // Для примера используем случайный статус
    const statuses = ['В обработке', 'Отправлен', 'Доставлен'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setOrderStatus({
      status: randomStatus,
      details: `Ваш заказ ${randomStatus.toLowerCase()}.`
    });
  };

  return (
    <section className="section-container bg-blue-50">
      <h2 className="section-title">Проверить статус заказа</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="orderNumber" className="block mb-2">Номер заказа:</label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Проверить статус
        </button>
      </form>
      {orderStatus && (
        <div className="mt-6 p-4 bg-blue-200 rounded-lg">
          <p className="text-lg font-semibold">Статус заказа: {orderStatus.status}</p>
          <p>{orderStatus.details}</p>
        </div>
      )}
    </section>
  );
};

export default OrderTracker;
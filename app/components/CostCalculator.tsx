'use client';

import React, { useState, useEffect } from 'react';

const CostCalculator: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleShowForm = () => setShowForm(true);
    window.addEventListener('showCostCalculatorForm', handleShowForm);
    return () => window.removeEventListener('showCostCalculatorForm', handleShowForm);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  if (submitted) {
    return (
      <section id="калькулятор" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Спасибо за обращение!</h2>
          <p className="text-xl text-gray-700">Менеджер свяжется с вами в ближайшее время.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="калькулятор" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Рассчитать стоимость</h2>
        {!showForm ? (
          <div className="text-center">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Получить расчет стоимости
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Ваше имя</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Номер телефона</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default CostCalculator;
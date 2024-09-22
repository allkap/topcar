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
      const response = await fetch('/api/calculate-cost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        setSubmitted(true);
        setShowForm(false);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <section id="калькулятор" className="section-container bg-white">
      <h2 className="section-title text-primary">Рассчитать стоимость</h2>
      {!showForm && !submitted && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition duration-300"
        >
          Рассчитать стоимость
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Ваше имя:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">Номер телефона:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark">
            Отправить
          </button>
        </form>
      )}
      {submitted && (
        <div className="mt-6 p-4 bg-blue-100 rounded-lg">
          <p className="text-lg font-semibold text-center text-primary">Спасибо! Мы свяжемся с вами для расчета стоимости.</p>
        </div>
      )}
    </section>
  );
};

export default CostCalculator;
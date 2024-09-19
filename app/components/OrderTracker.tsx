'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OrderTracker: React.FC = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const trackOrder = () => {
    if (!orderNumber) {
      alert('Пожалуйста, введите номер заказа');
      return;
    }
    setIsLoading(true);
    // Имитация запроса к серверу
    setTimeout(() => {
      setOrderStatus('В обработке');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Проверить статус заказа</h2>
          <div className="mb-4">
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Введите номер заказа"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            onClick={trackOrder} 
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-t-2 border-white rounded-full"
              />
            ) : (
              'Проверить'
            )}
          </button>
          {orderStatus && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center text-lg font-semibold text-gray-700"
            >
              Статус заказа: {orderStatus}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OrderTracker;
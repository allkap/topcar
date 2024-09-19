'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DeliveryStage {
  stage: string;
  date: string;
}

interface OrderStatus {
  currentStage: string;
  deliveryStages: DeliveryStage[];
}

const OrderTracker: React.FC = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const trackOrder = async () => {
    if (!orderNumber) {
      setError('Пожалуйста, введите номер заказа');
      return;
    }
    setIsLoading(true);
    setError('');
    setOrderStatus(null);

    try {
      const response = await fetch(`/api/orders/track/${orderNumber}`);
      const data = await response.json();

      if (response.ok) {
        setOrderStatus(data);
      } else {
        setError(data.error || 'Произошла ошибка при проверке заказа');
      }
    } catch (error) {
      setError('Произошла ошибка при проверке заказа');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8"
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
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6"
            >
              <h3 className="text-xl font-semibold mb-4">Этапы доставки:</h3>
              <div className="relative flex justify-between items-center">
                {/* Линия, соединяющая кружки */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2"></div>
                {orderStatus.deliveryStages.map((stage, index) => (
                  <div 
                    key={index} 
                    className="relative flex flex-col items-center z-10"
                  >
                    <div 
                      className={`w-8 h-8 rounded-full ${
                        stage.stage === orderStatus.currentStage ? 'bg-blue-600' : 'bg-gray-300'
                      } mb-2 flex items-center justify-center`}
                    >
                      {stage.stage === orderStatus.currentStage && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm text-center max-w-[100px]">{stage.stage}</span>
                    <span className="text-xs">{new Date(stage.date).toLocaleDateString()}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center text-lg font-semibold text-red-600"
            >
              {error}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OrderTracker;
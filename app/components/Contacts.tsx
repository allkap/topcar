'use client';

import React from 'react';
import { FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contacts: React.FC = () => {
  const address = "г. Москва, ул. Примерная, д. 123"; // Замените на реальный адрес
  const mapCenter = { lat: 55.751244, lng: 37.618423 }; // Координаты центра Москвы, замените на реальные координаты вашего адреса
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <section id="contacts" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Контакты</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <p className="mb-4"><strong>Адрес:</strong> {address}</p>
            <p className="mb-4"><strong>Телефон:</strong> +7 (123) 456-78-90</p>
            <p className="mb-4"><strong>Email:</strong> info@topcar5.ru</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                <FaTelegram size={24} />
              </a>
              <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-96">
            {googleMapsApiKey ? (
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={mapCenter}
                  zoom={14}
                >
                  <Marker position={mapCenter} />
                </GoogleMap>
              </LoadScript>
            ) : (
              <p>Google Maps API key is not set</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
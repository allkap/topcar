import React from 'react';

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4">Контакты</h2>
      <div>
        <p>Адрес: г. Москва, ул. Примерная, д. 123</p>
        <p>Телефон: +7 (123) 456-78-90</p>
        <p>Email: info@topcar5.ru</p>
      </div>
      <form className="mt-4">
        <input type="text" placeholder="Ваше имя" className="w-full p-2 mb-2 border rounded" />
        <input type="email" placeholder="Ваш email" className="w-full p-2 mb-2 border rounded" />
        <textarea placeholder="Ваше сообщение" className="w-full p-2 mb-2 border rounded" rows={4}></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Отправить</button>
      </form>
    </section>
  );
};

export default Contacts;
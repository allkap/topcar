'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Order {
  _id: string;
  orderNumber: string;
  customerName: string;
  carModel: string;
}

interface Client {
  _id: string;
  name: string;
  phone: string;
  createdAt: string;
}

interface Statistic {
  _id: string;
  key: string;
  value: string;
  label: string;
}

export default function AdminPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const router = useRouter();
  const [editedStatistics, setEditedStatistics] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetchOrders();
    fetchClients();
    fetchStatistics();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        const errorData = await response.json();
        console.error('Error fetching orders:', errorData);
        alert('Ошибка при загрузке заказов: ' + (errorData.details || errorData.error));
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Ошибка при загрузке заказов');
    }
  };

  const fetchClients = async () => {
    try {
      const response = await fetch('/api/clients');
      if (response.ok) {
        const data = await response.json();
        setClients(data);
      } else {
        const errorData = await response.json();
        console.error('Error fetching clients:', errorData);
        alert('Ошибка при загрузке клиентов: ' + (errorData.details || errorData.error));
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
      alert('Ошибка при загрузке клиентов');
    }
  };

  const fetchStatistics = async () => {
    try {
      const response = await fetch('/api/statistics');
      if (response.ok) {
        const data = await response.json();
        setStatistics(data);
      } else {
        const errorData = await response.json();
        console.error('Error fetching statistics:', errorData);
        alert('Ошибка при загрузке статистики: ' + (errorData.details || errorData.error));
      }
    } catch (error) {
      console.error('Error fetching statistics:', error);
      alert('Ошибка при загрузке статистики');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderNumber, customerName, carModel }),
    });

    if (response.ok) {
      alert('Заказ успешно создан');
      setOrderNumber('');
      setCustomerName('');
      setCarModel('');
      fetchOrders();
    } else {
      alert('Ошибка при создании заказа');
    }
  };

  const handleEdit = (order: Order) => {
    setEditingOrder(order);
    setOrderNumber(order.orderNumber);
    setCustomerName(order.customerName);
    setCarModel(order.carModel);
  };

  const handleUpdate = async () => {
    if (!editingOrder) return;

    const response = await fetch(`/api/orders/${editingOrder._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderNumber, customerName, carModel }),
    });

    if (response.ok) {
      alert('Заказ успешно обновлен');
      setEditingOrder(null);
      setOrderNumber('');
      setCustomerName('');
      setCarModel('');
      fetchOrders();
    } else {
      alert('Ошибка при обновлении заказа');
    }
  };

  const handleStatisticChange = (key: string, value: string) => {
    setEditedStatistics(prev => ({ ...prev, [key]: value }));
  };

  const handleStatisticUpdate = async (key: string) => {
    try {
      const value = editedStatistics[key];
      if (!value) return;

      const response = await fetch('/api/statistics', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key, value }),
      });

      if (response.ok) {
        fetchStatistics();
        alert('Статистика успешно обновлена');
        // Очищаем отредактированное значение после успешного обновления
        setEditedStatistics(prev => {
          const newState = { ...prev };
          delete newState[key];
          return newState;
        });
      } else {
        alert('Ошибка при обновлении статистики');
      }
    } catch (error) {
      console.error('Error updating statistic:', error);
      alert('Ошибка при обновлении статистики');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Админ панель</h1>
      <form onSubmit={editingOrder ? handleUpdate : handleSubmit} className="max-w-md mx-auto mb-8">
        <div className="mb-4">
          <label htmlFor="orderNumber" className="block mb-2">Номер заказа</label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="customerName" className="block mb-2">Имя клиента</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="carModel" className="block mb-2">Модель автомобиля</label>
          <input
            type="text"
            id="carModel"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editingOrder ? 'Обновить заказ' : 'Создать заказ'}
        </button>
        {editingOrder && (
          <button type="button" onClick={() => setEditingOrder(null)} className="ml-2 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Отменить редактирование
          </button>
        )}
      </form>
      <h2 className="text-xl font-bold mb-4 mt-8">Список заказов</h2>
      <div className="grid gap-4 mb-8">
        {orders.map((order) => (
          <div key={order._id} className="border p-4 rounded">
            <p><strong>Номер заказа:</strong> {order.orderNumber}</p>
            <p><strong>Имя клиента:</strong> {order.customerName}</p>
            <p><strong>Модель автомобиля:</strong> {order.carModel}</p>
            <button onClick={() => handleEdit(order)} className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Редактировать
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Список новых клиентов</h2>
      <div className="grid gap-4">
        {clients.map((client) => (
          <div key={client._id} className="border p-4 rounded">
            <p><strong>Имя:</strong> {client.name}</p>
            <p><strong>Телефон:</strong> {client.phone}</p>
            <p><strong>Дата создания:</strong> {new Date(client.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4 mt-8">Статистика</h2>
      <div className="grid gap-4 mb-8">
        {statistics.map((stat) => (
          <div key={stat._id} className="border p-4 rounded flex items-center">
            <p className="mr-4"><strong>{stat.label}:</strong> {stat.value}</p>
            <input
              type="text"
              value={editedStatistics[stat.key] || stat.value}
              onChange={(e) => handleStatisticChange(stat.key, e.target.value)}
              className="p-2 border rounded mr-2"
            />
            <button
              onClick={() => handleStatisticUpdate(stat.key)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              disabled={!editedStatistics[stat.key]}
            >
              Обновить
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => router.push('/')} className="mt-8 text-blue-600 hover:underline">
        Вернуться на главную
      </button>
    </div>
  );
}
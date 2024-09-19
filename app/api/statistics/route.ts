import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import Statistic from '../../../models/Statistic';

const initialStatistics = [
  { key: 'cars', value: '1000+', label: 'Импортированных автомобилей' },
  { key: 'clients', value: '500+', label: 'Довольных клиентов' },
  { key: 'years', value: '5 лет', label: 'На рынке' },
];

export async function GET() {
  try {
    await connectToDatabase();
    let statistics = await Statistic.find();
    
    if (statistics.length === 0) {
      // Если статистики нет, инициализируем её
      statistics = await Statistic.insertMany(initialStatistics);
    }
    
    return NextResponse.json(statistics);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return NextResponse.json({ error: 'Error fetching statistics' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { key, value } = await request.json();
    await connectToDatabase();
    const updatedStatistic = await Statistic.findOneAndUpdate(
      { key },
      { value },
      { new: true, upsert: true } // Добавляем upsert: true
    );
    return NextResponse.json(updatedStatistic);
  } catch (error) {
    console.error('Error updating statistic:', error);
    return NextResponse.json({ error: 'Error updating statistic' }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '../../../lib/mongodb';

export async function GET() {
  try {
    await connectToDatabase();
    // Проверяем, что соединение установлено и база данных доступна
    if (mongoose.connection.readyState !== 1) {
      throw new Error('Database connection is not ready');
    }
    // Попытка выполнить простой запрос к базе данных
    await mongoose.connection.db!.admin().ping();
    return NextResponse.json({ message: 'Successfully connected to MongoDB' }, { status: 200 });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to connect to the database' }, { status: 500 });
  }
}
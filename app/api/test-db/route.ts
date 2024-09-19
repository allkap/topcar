import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectToDatabase();
    // Попытка выполнить простой запрос к базе данных
    await mongoose.connection.db.admin().ping();
    return NextResponse.json({ message: 'Successfully connected to MongoDB' }, { status: 200 });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to connect to MongoDB', details: error.message }, { status: 500 });
  }
}
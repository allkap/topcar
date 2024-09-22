import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    // Подключение к базе данных
    const client = await connectToDatabase();
    const db = client.db();

    // Вставка данных в коллекцию
    await db.collection('cost_requests').insertOne({
      name,
      phone,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Request submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in calculate-cost API:', error);
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 });
  }
}
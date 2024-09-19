import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../../lib/mongodb';
import Order from '../../../../../models/Order';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { stage } = await request.json();
    await connectToDatabase();
    const updatedOrder = await Order.findByIdAndUpdate(
      params.id,
      { $push: { deliveryStages: { stage, date: new Date() } } },
      { new: true }
    );
    if (!updatedOrder) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error('Error adding delivery stage:', error);
    return NextResponse.json({ error: 'Error adding delivery stage' }, { status: 500 });
  }
}
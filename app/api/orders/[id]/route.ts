import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import Order from '../../../../models/Order';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { orderNumber, customerName, carModel } = await request.json();
    await connectToDatabase();
    const updatedOrder = await Order.findByIdAndUpdate(
      params.id,
      { orderNumber, customerName, carModel },
      { new: true }
    );
    if (!updatedOrder) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    return NextResponse.json(updatedOrder);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating order' }, { status: 500 });
  }
}
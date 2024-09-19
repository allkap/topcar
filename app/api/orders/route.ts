import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import Order from '../../../models/Order';

export async function GET() {
  try {
    console.log('Connecting to database...');
    await connectToDatabase();
    console.log('Connected to database. Fetching orders...');
    const orders = await Order.find().sort({ createdAt: -1 });
    console.log('Orders fetched:', orders);
    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error in GET /api/orders:', error);
    return NextResponse.json({ error: 'Error fetching orders', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { orderNumber, customerName, carModel } = await request.json();
    await connectToDatabase();
    const order = new Order({ orderNumber, customerName, carModel });
    await order.save();
    return NextResponse.json({ message: 'Order created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Error creating order' }, { status: 500 });
  }
}
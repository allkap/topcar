import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../../lib/mongodb';
import Order from '../../../../../models/Order';

export async function GET(
  request: Request,
  { params }: { params: { orderNumber: string } }
) {
  try {
    await connectToDatabase();
    const order = await Order.findOne({ orderNumber: params.orderNumber });

    if (!order) {
      return NextResponse.json({ error: 'Заказ не найден' }, { status: 404 });
    }

    return NextResponse.json({
      currentStage: order.currentStage,
      deliveryStages: order.deliveryStages
    });
  } catch (error) {
    console.error('Error tracking order:', error);
    return NextResponse.json({ error: 'Ошибка при проверке заказа' }, { status: 500 });
  }
}
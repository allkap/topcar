import mongoose from 'mongoose';

const DeliveryStageSchema = new mongoose.Schema({
  stage: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  carModel: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  deliveryStages: [DeliveryStageSchema],
  currentStage: { type: String, default: 'Заказ принят' },
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default Order;
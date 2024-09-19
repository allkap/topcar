import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  carModel: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default Order;
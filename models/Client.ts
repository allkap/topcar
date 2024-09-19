import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Client = mongoose.models.Client || mongoose.model('Client', ClientSchema);

export default Client;
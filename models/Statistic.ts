import mongoose from 'mongoose';

const StatisticSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: String, required: true },
  label: { type: String, required: true },
});

const Statistic = mongoose.models.Statistic || mongoose.model('Statistic', StatisticSchema);

export default Statistic;
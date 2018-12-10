import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Weather = new Schema({
  time: {
    type: Date,
    default: Date.now
  },
  temp: {
    type: Number
  }
});

export default mongoose.model('Weather', Weather);
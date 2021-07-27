import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Home = new Schema(
  {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    levels: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' },
    year: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Home

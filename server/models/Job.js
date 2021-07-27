import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    pay: { type: Number, required: true },
    hours: { type: Number, required: true, default: 0 },
    description: { type: String, default: 'No Description Provided' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job

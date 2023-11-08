import { model, Schema } from 'mongoose'

export const category = model(
  'category',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  }),
)

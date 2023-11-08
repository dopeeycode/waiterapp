import { model, Schema } from 'mongoose'

export const order = model(
  'order',
  new Schema({
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
      default: 'WAITING',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    products: {
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'product',
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
      required: true,
    },
  }),
)

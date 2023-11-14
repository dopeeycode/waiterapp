import { Document } from 'mongoose'
import { order } from '../../models/order'

type ListOrdersUseCaseResponse = Document

export class ListOrdersUseCase {
  async handle(): Promise<ListOrdersUseCaseResponse[]> {
    try {
      const orders = await order
        .find()
        .sort({ createdAt: -1 })
        .populate('products.product')

      return orders
    } catch (err) {
      console.error('An error occurred while listing products', err)
      throw new Error('An error occurred while listing products, try again.')
    }
  }
}

import { Document } from 'mongoose'
import { order } from '../../models/order'

type CreateOrdersUseCaseResponse = Document

type Products = {
  product: string
  quantity: number
}

type CreateOrdersUseCaseRequest = {
  table: string
  products: Products[]
}

export class CreateOrdersUseCase {
  async handle({
    table,
    products,
  }: CreateOrdersUseCaseRequest): Promise<CreateOrdersUseCaseResponse> {
    try {
      const orders = await order.create({
        table,
        products,
      })

      return orders
    } catch (err) {
      console.error('An error occurred while listing products', err)
      throw new Error('An error occurred while listing products, try again.')
    }
  }
}

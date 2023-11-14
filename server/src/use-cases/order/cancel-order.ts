import { order } from '../../models/order'

export class CancelOrderUseCase {
  async handle(orderId: string) {
    try {
      const orderRemoved = await order.findByIdAndDelete(orderId)

      return orderRemoved
    } catch (err) {
      console.error('An error occurred while listing products', err)
      throw new Error('An error occurred while listing products, try again.')
    }
  }
}

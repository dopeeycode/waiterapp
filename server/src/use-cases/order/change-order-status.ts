// eslint-disable-next-line prettier/prettier
import { order } from '../../models/order';

export class ChangeOrderStatusUseCase {
  async handle({ status, orderId }: { status: string; orderId: string }) {
    try {
      const orders = await order.findByIdAndUpdate(orderId, {
        status,
      })

      return orders
    } catch (err) {
      console.error('An error occurred while listing products', err)
      throw new Error('An error occurred while listing products, try again.')
    }
  }
}

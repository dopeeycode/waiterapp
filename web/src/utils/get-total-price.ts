import { Order } from '../@types/Order'

export function getTotalPrice(order: Order) {
  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity
  }, 0)

  return total
}

import { Order } from '../@types/Order'

export function getOrderStatus(order: Order) {
  switch (order.status) {
    case 'WAITING':
      return '🕑 Fila de espera!'
    case 'IN_PRODUCTION':
      return '👩‍🍳 Em produção!'
    case 'DONE':
      return '✅ Pronto!'
  }
}

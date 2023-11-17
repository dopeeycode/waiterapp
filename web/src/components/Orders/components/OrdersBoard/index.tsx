import { useState } from 'react'
import { Order } from '../../../../@types/Order'
import OrderModal from '../OrderModal'
import * as S from './styles'

interface OrdersBoardProps {
  icon: string
  title: string
  orders: Order[]
}

const OrdersBoard = ({ icon, title, orders }: OrdersBoardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  function handleOpenModal(order: Order) {
    setIsOpenModal(true)
    setSelectedOrder(order)
  }

  return (
    <S.Board>
      <OrderModal
        setIsVisible={setIsOpenModal}
        visible={isOpenModal}
        order={selectedOrder}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <strong>({orders.length})</strong>
      </header>

      {orders.length > 0 && (
        <S.OrdersContainer>
          {orders.map((order) => (
            <button
              key={order._id}
              type="button"
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} item</span>
            </button>
          ))}
        </S.OrdersContainer>
      )}
    </S.Board>
  )
}

export default OrdersBoard

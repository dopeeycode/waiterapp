import { Order } from '../../../../@types/Order'
import * as S from './styles'

interface OrdersBoardProps {
  icon: string
  title: string
  quantity: number
  orders: Order[]
}

function handleOpenModal() {
  return alert('Modal abridokk')
}

const OrdersBoard = ({ icon, title, quantity, orders }: OrdersBoardProps) => {
  return (
    <S.Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <strong>({quantity})</strong>
      </header>

      {orders.length > 0 && (
        <S.OrdersContainer>
          {orders.map((order) => (
            <button key={order._id} type="button" onClick={handleOpenModal}>
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

import { orders } from '../../mocks/orders'
import OrdersBoard from './components/OrdersBoard'
import * as S from './styles'

const Orders = () => {
  return (
    <S.Container>
      <OrdersBoard
        orders={orders}
        icon="🕑"
        title="Fila de espera"
        quantity={1}
      />
      <OrdersBoard orders={[]} icon="👩‍🍳" title="Em Produção" quantity={1} />
      <OrdersBoard orders={[]} icon="✅" title="Pronto" quantity={1} />
    </S.Container>
  )
}

export default Orders

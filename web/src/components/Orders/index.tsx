import { orders } from '../../mocks/orders'
import OrdersBoard from './components/OrdersBoard'
import * as S from './styles'

const Orders = () => {
  return (
    <S.Container>
      <OrdersBoard orders={orders} icon="🕑" title="Fila de espera" />
      <OrdersBoard orders={[]} icon="👩‍🍳" title="Em Produção" />
      <OrdersBoard orders={[]} icon="✅" title="Pronto" />
    </S.Container>
  )
}

export default Orders

import { Dispatch, SetStateAction } from 'react'
import { Order } from '../../../../@types/Order'
import { formatPrice } from '../../../../utils/format-price'
import { getOrderStatus } from '../../../../utils/get-order-status'
import { getTotalPrice } from '../../../../utils/get-total-price'
import * as S from './styles'

interface OderModalProps {
  order: Order | null
  visible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

const OrderModal = ({ order, visible, setIsVisible }: OderModalProps) => {
  if (!visible || !order) {
    return null
  }

  return (
    <S.Overlay>
      <S.ModalBody key={order?._id}>
        <header>
          <strong>Mesa {order?.table}</strong>

          <button type="button" onClick={() => setIsVisible(false)}>
            <img src="./public/images/close-icon.svg" alt="" />
          </button>
        </header>

        <section className="status-container">
          <small>Status do Pedido</small>

          <div>
            <strong>{getOrderStatus(order)}</strong>
          </div>
        </section>

        <S.OrderDetails>
          <small>Itens</small>

          {order?.products.map(({ quantity, product, _id }) => {
            const { imagePath, name, price } = product

            return (
              <div key={_id} className="product-container">
                <div className="item">
                  <img
                    src={`http://localhost:3333/uploads/${imagePath}`}
                    alt={name}
                  />
                  <span className="quantity">{quantity}x</span>

                  <div className="item-details-main">
                    <strong>{name}</strong>
                    <small>{formatPrice(price)}</small>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="total-price">
            <span>Total</span>

            <strong>{formatPrice(getTotalPrice(order))}</strong>
          </div>
        </S.OrderDetails>

        <S.Actions>
          <button type="button" className="primary">
            <span>👩‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>

          <button type="button" className="secondary">
            <strong>Cancelar Pedido</strong>
          </button>
        </S.Actions>
      </S.ModalBody>
    </S.Overlay>
  )
}

export default OrderModal

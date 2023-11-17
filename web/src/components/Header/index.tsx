import { HeaderStyle } from './styles'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="content">
        <div className="details-side-left">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>
        <div className="details-side-right">
          <img src="./public/images/logo.svg" alt="Logo" />
          <div>
            <h1>
              WAITER<span>APP</span>
            </h1>
            <p>O App do Garçom</p>
          </div>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header

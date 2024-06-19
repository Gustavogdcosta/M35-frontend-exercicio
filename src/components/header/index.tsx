import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { HeaderBar, Links, LinkItem, CartButton } from './stylesHeader'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <div>
        <CartButton onClick={openCart}>
          {items.length} - produto(os)
          <img src={carrinho} alt="Carrinho de compras" />
        </CartButton>
      </div>
    </HeaderBar>
  )
}

export default Header

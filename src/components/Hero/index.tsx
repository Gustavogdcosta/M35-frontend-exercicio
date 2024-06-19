import { useDispatch } from 'react-redux'

import Tag from '../Tag'
import Button from '../button'
import { Game } from '../../Pages/home'
import { formataPreco } from '../ProductsList'
import { add, open } from '../../store/reducers/cart'

import { Banner, Infos } from './stylesHero'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De: {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por apenas: {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              title="Clique aqui para adicionar este jogo ao carrinho "
              type="button"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero

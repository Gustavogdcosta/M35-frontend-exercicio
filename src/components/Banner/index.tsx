import { useEffect, useState } from 'react'

import Tag from '../Tag'
import Button from '../button'
import { Game } from '../../Pages/home'

import { Imagem, Titulo, Precos } from './stylesBanner'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big"> Destaque do dia </Tag>
        <div>
          <Titulo>{game.name} </Titulo>
          <Precos>
            De: <span>{formataPreco(game.prices.old)}</span> <br />
            Por apenas: {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para proveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner

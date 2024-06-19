import { useEffect, useState } from 'react'

import Tag from '../Tag'
import Button from '../button'
import { Game } from '../../Pages/home'

import { Imagem, Titulo, Precos } from './stylesBanner'
import { formataPreco } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

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

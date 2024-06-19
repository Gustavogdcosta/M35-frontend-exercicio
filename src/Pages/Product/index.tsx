import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import Section from '../../components/section'
import Gallery from '../../components/Gallery'
import { Game } from '../home'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte para diversos idiomas,
          incluindo {game.details.languages.join(', ')}
          {/* .join(', ') ta falando que o array de string de idiomas deve ser escrito colocando uma virgula e um espaço entre os itens */}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaulCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}
export default Product

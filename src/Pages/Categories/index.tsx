import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import { Game } from '../home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])
  return (
    <>
      <ProductsList games={gamesAcao} background="black" title="Acao" />
      <ProductsList games={gamesEsportes} background="gray" title="Esportes" />
      <ProductsList
        games={gamesSimulacao}
        background="black"
        title="Simulacao"
      />
      <ProductsList games={gamesLuta} background="gray" title="Luta" />
      <ProductsList games={gamesRPG} background="black" title="RPG" />
    </>
  )
}

export default Categories

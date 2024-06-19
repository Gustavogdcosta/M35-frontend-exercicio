import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import { Game } from '../home'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          background="black"
          title="Acao"
          id="action"
        />
        <ProductsList
          games={sportGames}
          background="gray"
          title="Esportes"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          background="black"
          title="Simulacao"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          background="gray"
          title="Luta"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          background="black"
          title="RPG"
          id="rpg"
        />
      </>
    )
  }

  return <h4> Carregando...</h4>
}

export default Categories

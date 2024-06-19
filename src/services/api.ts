import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      //fazendo o primeiro builder para o game em destaque (featuredGame)
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      //fazendo o buider para a seção de promoçoes (getOnSale)
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      //fazendo builder pra seçao em breve
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      //fazendo builder pra seçao em Games de ação (na pagina produto)
      query: () => 'acao'
    }),
    getSportGames: builder.query<Game[], void>({
      //fazendo builder pra seçao em Games de sport (na pagina produto)
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      //fazendo builder pra seçao em Games de simulacao (na pagina produto)
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      //fazendo builder pra seçao em Games de fight (na pagina produto)
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      //fazendo builder pra seçao em Games de rpg (na pagina produto)
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      //fazendo builder pra seçao em Games de rpg (na pagina produto)
      query: (id) => `jogos/${id}` //aqui é preciso estar o mesmo nome do link da pagina de rotas
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery
} = api

export default api

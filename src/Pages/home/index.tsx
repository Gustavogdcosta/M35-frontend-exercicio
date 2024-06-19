import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: EmBreve } = useGetSoonQuery()

  if (promocoes && EmBreve) {
    return (
      <>
        <Banner />
        <ProductsList
          games={promocoes}
          background="gray"
          title="Promoções"
          id="on-sale"
        />
        <ProductsList
          games={EmBreve}
          background="black"
          title="Em Breve"
          id="comming-soon"
        />
      </>
    )
  }

  return <h4>carregando...</h4>
}

export default Home

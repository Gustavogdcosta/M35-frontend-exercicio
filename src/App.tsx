import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styleGlobal'

import Header from './components/header'

import Rotas from './routes'
import Footer from './components/footer'

// Como o ROuterProvider está no final da function APP, existe um elemento
// que usa os atributos da tecnologia antes dele ser declarado (no caso o header), por este motivo
// é preciso importar o BrowserRouter e declarar as rotas desta forma, colocando assim o React Router DOM, em toda a função APP

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      {/* é preciso mudar aqui tamém e colocar Rotas em vez do RouterProvider com o argumento router */}
      <Footer />
    </BrowserRouter>
  )
}

export default App

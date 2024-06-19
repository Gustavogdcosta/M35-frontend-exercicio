import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styleGlobal'

import Header from './components/header'

import Rotas from './routes'
import Footer from './components/footer'
import { store } from './store'
import Cart from './components/cart'

// Como o ROuterProvider está no final da function APP, existe um elemento
// que usa os atributos da tecnologia antes dele ser declarado (no caso o header), por este motivo
// é preciso importar o BrowserRouter e declarar as rotas desta forma, colocando assim o React Router DOM, em toda a função APP

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        {/* é preciso mudar aqui tamém e colocar Rotas em vez do RouterProvider com o argumento router */}
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App

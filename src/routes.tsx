import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/home'
import Categories from './Pages/Categories'
import Product from './Pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)
// Como o ROuterProvider está no final da function APP, existe um elemento
// que usa os atributos da tecnologia antes dele ser declarado (no caso o header), por este motivo
// é preciso importar o BrowserRouter e declarar as rotas desta forma, colocando assim o React Router DOM, em toda a função APP

export default Rotas

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/home'
import About from './components/about'
import Error from './components/error'
import SingleCocktail from './components/singleCocktail'
import Navbar from './components/navbar'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route> 
          <Route path='/cocktail/:idDrink' element={<SingleCocktail/>}></Route> 
          <Route path='*' element={<Error/>}></Route> 
        </Routes>
    </BrowserRouter>
  )
}

export default App
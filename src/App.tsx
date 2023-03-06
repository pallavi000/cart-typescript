import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import CartContext from './context/CartContext'

function App() {

  return (
    <Router>
      <CartContext>
      <Navbar/>
      <Routes>
      <Route exact path="/cart" element={<Cart/>}></Route>

        <Route exact path="/" element={<Home/>}>
          
        </Route>
      </Routes>
      </CartContext>
    </Router>
  )
}

export default App

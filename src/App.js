import React from 'react'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import './App.css'
const App = () => {
  return (
    <>
    
     <BrowserRouter>
     <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

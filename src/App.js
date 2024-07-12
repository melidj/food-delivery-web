import React, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Cart from './Component/Cart/Cart'
import PlaceOrder from './Component/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
import Footer from './Component/Footer/Footer.jsx'
import LoginPopup from './Component/LoginPopUp/LoginPopup.jsx'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/cart' element={<Cart/>} />
        < Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App

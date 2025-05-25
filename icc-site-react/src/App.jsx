import React from 'react'
import BotonIrAJuego from './components/BotonIrAJuego'
import NavBarPrincipal from './components/NavBarPrincipal'
import Hero from './components/Hero'
import CardGame from './components/CardGame'
import './App.css'

function App() {

  return(
    <div className="pt-20 bg-white w-full h-screen ">
      <NavBarPrincipal/>
      <div className='p-4 w-full h-screen justify-center bg-white'>
        <Hero/>
        <CardGame/>
      </div>
    </div>
  )
}

export default App

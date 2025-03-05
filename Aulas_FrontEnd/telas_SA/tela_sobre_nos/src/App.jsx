import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sobre_nos from './components/Sobre_nos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Sobre_nos />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App

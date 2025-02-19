import { useState } from 'react'
import './App.css'
import Tela1 from './components/Tela1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Tela1 />
      </div>
    </>
  )
}

export default App

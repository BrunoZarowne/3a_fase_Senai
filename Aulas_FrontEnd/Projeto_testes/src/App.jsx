import { useState } from 'react'
import './App.css'
import Materiais from './pages/Materiais'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Crud /> */}
        <Materiais />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Tela from './components/Tela'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Tela />
      </div>
    </>
  )
}

export default App

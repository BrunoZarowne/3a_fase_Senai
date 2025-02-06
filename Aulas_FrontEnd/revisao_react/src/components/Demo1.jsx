import { useState } from 'react'
import './Demo1.css'

function Demo1() {

const [estado, setEstado] = useState(0)
let contador = 1

function mudarEstado(){
    setEstado(estado + 1)
}
function diminuirEstado() {
    setEstado( estado - 1)
}

function adcContador(){
    contador++
    console.log(contador)
}

function alertarUsuario(){
    alert('aaaa')
}



  return (
    <div className='containerDemo1'>
      <h1>Demo1</h1>
      <button onClick={alertarUsuario}>Clique</button>
      <button onClick={() => {alert('penis')}}>Ex Arrow Function</button>

      <div>
        Contador:{contador}
        <button onClick={adcContador}>+</button>
      </div>

      <div>
        estado: {estado}
        <button onClick={mudarEstado}>+</button>
        <button onClick={diminuirEstado}>-</button>
      </div>
    </div>
  )
}

export default Demo1

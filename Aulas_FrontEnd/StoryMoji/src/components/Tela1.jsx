import React, { useState } from 'react'
import './Tela1.css'

function Tela1() {

  const [num, setNum] = useState(0)

    const [arrayImg, setArrayImg] = useState([
        {id: 1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswwvA9WWb2e3ZfFOEMZHik4jQ9MgJGCEDbg&s'},
        {id: 2, img:'https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg'}
    ])
function alerta() {
    console.log(arrayImg.length)
    console.log(num)
    setNum(num + 1)
    
    if (num = 1){
      setNum(num - 1)
    }

}

  return (
    <div className='telaUmContainer'>
        <button onClick={alerta}>+</button>
        <img src={arrayImg[num].img} alt="" />
    </div>
  )
}

export default Tela1

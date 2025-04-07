import React from 'react'
import { useState } from 'react'

function Testes() {

    const [img, setImg] = useState('')
    const [fileName, setFileName] = useState('')

    const handleImageChange  = (e) => {
    const file = e.target.files[0]
    if(file) {
        setFileName('')

        const reader = new FileReader()
         reader.onloadend = () => {
            setImg(reader.result)
        }
        reader.readAsDataURL(file)
    }else{
        setFileName('')
    }
    
    }
    
  return (
    <div>
        <label htmlFor="uploadInput">Escolher imagem</label>
        <input id='uploadInput'
        className='adcImgPort'
        type='file'
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        />

        <span style={{ marginLeft: "10px" }}>{fileName}</span>

        {img && (
        <div style={{ marginTop: "20px" }}>
          <img src={img} alt="Preview" style={{ maxWidth: "300px" }} />
        </div>
      )}
    </div>
  )
}

export default Testes

import { useState, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { Navigation } from "swiper/modules"
import { Swiper,SwiperSlide } from "swiper/react"
import Modal from "react-modal"
import './CarouselPortifolio.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function CarouselPortifolio() {

    const {imagensPort, setImagensPort} = useContext(GlobalContext)

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
    }}


    function adcImg() {
      console.log(imagensPort)
      imagensPort.push({id:(imagensPort.length + 1), img:(img)})
    }

    const [modalIsOpen, setIsOpen] = useState(false)
    function abrirModal() {
      setIsOpen(true)
    }
    function fecharModal() {
      setIsOpen(false)
    }
  return (
    <div className="carouselPort">
      <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true}}
      navigation
      loop
      autoplay={{
        stopOnLastSlide: false,
      }}>
        {imagensPort.map((item) =>(
          <SwiperSlide key={item.id}>
            <img className="imgsPortifolio" src={item.img} alt="" />
          </SwiperSlide>
        ))}

      </Swiper><br /><br />

      <button
      className="ButtonEditarImgs"
      onClick={abrirModal}
      >Adicionar</button>
      
      <Modal
      className="ModalEdt/Exc/Adc"
      isOpen={modalIsOpen}
      onRequestClose={fecharModal}
      >
        <div className="containerModalPort">
          <label className="txtModalUm">Qual imagen deseja editar ou excluir?</label>
          <div className="barra1"></div>

        </div>
      </Modal>

      {/* <label className='adcImgPort' htmlFor="uploadInput">Escolher imagem</label>
      <input id='uploadInput'
      type='file'
      accept="image/*"
      onChange={handleImageChange}
      style={{ display: "none" }}
      /> */}


    </div>
  )
}

export default CarouselPortifolio

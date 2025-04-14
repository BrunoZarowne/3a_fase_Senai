import { useState, useContext, useEffect } from "react"
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
    

    
    function excluirImg(event) {
      const idDelImgPort = Number(event.currentTarget.getAttribute('data-iddelimglivro'))
      
      setImagensPort((prevImgs) => prevImgs.filter((img) => img.id !== idDelImgPort));
      
      imagensPort.splice(idDelImgPort, idDelImgPort)

      // console.log(imagensPort)
    }

    const [modalEditIsOpen, setEditIsOpen] = useState(false)
    function abrirModalEdit() {
      setEditIsOpen(true)
    }
    function fecharModalEdit() {
      setEditIsOpen(false)
    }
    
    function editarImg(event) {
      const idImgPort = event.currentTarget.getAttribute('data-idimglivro')
      

      abrirModalEdit()
    }
    useEffect(() => {
      console.log("Imagens atualizadas:", imagensPort);
    }, [imagensPort]);


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
      <div className="editDeleteButton">
        <button
        className="ButtonEditarImgs"
        onClick={abrirModal}
        ><label className="txtButtonEdtExc">Adicionar/Editar</label>
        <img className="imgButtonEdtExc" src="./icon_lapis.svg"/>
        </button>
      </div>
      <Modal
      className="ModalEdt/Exc/Adc"
      isOpen={modalIsOpen}
      onRequestClose={fecharModal}
      ariaHideApp={false}
      >
        <div className="containerModalPort">
          <button className="buttonFecharModal" onClick={fecharModal}>X</button>
          <label className="txtModalUm">Qual imagen deseja editar ou excluir?</label>
          <div className="barra1"></div>

      <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true}}
      navigation
      loop
      autoplay={{
        stopOnLastSlide: false,
      }}
      className="swiperModal">
        {imagensPort.map((item) =>(
          <SwiperSlide key={item.id}>
            <img className="imgsPortifolioModal" src={item.img} alt="" />
            <div className="buttonsEdit_Exc">
              <button 
              className="editarImg"
              onClick={editarImg}
              data-idimglivro={item.id}
              >
                <img src="./edit_icon.svg" alt="" />
              </button>
              <button 
              className="excluirImg"
              onClick={excluirImg}
              data-iddelimglivro={item.id}
              >
                <img src="./trash_icon.svg" alt="" />
              </button>
            </div>
          </SwiperSlide>
          
        ))}

      </Swiper>

        </div>
      </Modal>
      
      <Modal
      className="modalEditImg"
      isOpen={modalEditIsOpen}
      onRequestClose={fecharModalEdit}
      ariaHideApp={false}
      >
      <label className="txtModalEdit">Deseja alterar para qual imagem?</label><br />

      <img className="selectImg" src={img} alt="" /><br />

      <label className='escolherImg' htmlFor="uploadInput">Escolher imagem</label>
      <input id='uploadInput'
      type='file'
      accept="image/*"
      onChange={handleImageChange}
      style={{ display: "none" }}
      />
      <div className="buttonsConf">
        <button className="buttonAlterar">Alterar</button>
        <button className="buttonCancelar">Cancelar</button>
      </div>
      </Modal>

      

    </div>
  )
}

export default CarouselPortifolio

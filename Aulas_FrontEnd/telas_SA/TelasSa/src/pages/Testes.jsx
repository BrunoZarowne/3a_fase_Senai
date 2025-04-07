import { useState, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { Navigation } from "swiper/modules"
import { Swiper,SwiperSlide } from "swiper/react"


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Testes() {

  // const {imagensPort} = useContext(GlobalContext)

  const [imagensPort, setImagensPort] = useState([
    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidq14TZgiLMneoaKO1TCwBXGrqagV2Z6k6g&s'
    },
    {
        id: 2,
        img: 'https://pt.quizur.com/_image?href=https://img.quizur.com/f/img648efbd5b00b28.10275519.jpg?lastEdited=1687092187&w=600&h=600&f=webp'
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRICJntjQCYdSblUDurLcUCtrbei788JC3Q&s'
    },
    
])

  return (
    <div className="carouselPort">
      <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true}}
      navigation>
        {imagensPort.map((item) =>(
          <SwiperSlide key={item.id}>
            <img className="imgsPortifolio" src={item.img} />
          </SwiperSlide>
        ))}

      </Swiper>
      <img src={imagensPort[0].img} alt="" />
      <button onClick={() => (console.log(imagensPort))}></button>
    </div>
  )
}

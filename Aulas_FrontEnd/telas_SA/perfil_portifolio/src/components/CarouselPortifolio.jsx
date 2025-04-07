import { useState } from "react"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import './CarouselPortifolio.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function CarouselPortifolio() {

    const [imagensPort, setImagensPort] = useState([
        {
          id: 1,
          img: 'https://preview.redd.it/meu-gato-%C3%A9-praticamente-o-gato-do-meme-v0-n9dleoj8dgfc1.jpg?width=640&crop=smart&auto=webp&s=52de2578fe227e639db822d551bba33c6d28a2f1'
        },
        {
          id: 2,
          img: 'https://preview.redd.it/3wlrfietzzq31.jpg?width=640&crop=smart&auto=webp&s=fac76e26c430a104b182b73389c5ca0d951d46d8'
        },
        {
          id: 3,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRICJntjQCYdSblUDurLcUCtrbei788JC3Q&s'
        }
      ])
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
      }}
      >
        {imagensPort.map((item) => (
          <SwiperSlide  key={item.id}>
              <img className="imgsPortifolio" src={item.img} alt="" />
          </SwiperSlide>
        ))}


      </Swiper>
      
    </div>
  )
}

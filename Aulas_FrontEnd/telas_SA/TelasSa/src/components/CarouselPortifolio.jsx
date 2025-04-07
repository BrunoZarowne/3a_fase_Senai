import { useState, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { Navigation } from "swiper/modules"
import { Swiper,SwiperSlide } from "swiper/react"
import './CarouselPortifolio.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function CarouselPortifolio() {

    const {imagensPort} = useContext(GlobalContext)

  return (
    <div className="carouselPort">
      {/* <Swiper
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

      </Swiper> */}

    </div>
  )
}

export default CarouselPortifolio

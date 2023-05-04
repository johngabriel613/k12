import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';

const NameSlider = ({names, option}) => {
  return (
    <Swiper modules={[Autoplay, FreeMode]} 
      slidesPerView={'auto'}
      freeMode={true}
      loop={true}
      autoplay={{delay:'-1', disableOnInteraction:false, reverseDirection:option}}
      speed={5000}
      className='swiper py-4 mb-6'>
        {names.map((name) => (
          <SwiperSlide key={name} className='text-3xl mx-3 md:text-6xl whitespace-nowrap font-black text-slate-600 w-fit'>{name}</SwiperSlide>
        ))}
      </Swiper>
  )
}

export default NameSlider

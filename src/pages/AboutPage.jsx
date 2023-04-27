import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';

// Import Swiper styles
import 'swiper/css';

const AboutPage = () => {
  return (
    <div className='animate__animated animate__fadeInUp'>
      <div className='text-center mb-6'>
        <h2 className='text-3xl text-primary font-bold'>ABOUT US</h2>
        <p className='text-secondary'>Introduction</p>
      </div>
      <div className='grid gap-3 mb-12'>
        <p>
        Hey there!👋 Welcome to our website, where we're here to help you figure out which K-12 strand suits you best. We know that choosing the right strand can be tricky, but don't worry, we've got your back!
        </p>
        <p>
        We've put together a bunch of fun and interesting questions that will help us get to know you better. Once you've answered them all, we'll give you some personalized recommendations based on your strengths, interests, and skills.
        </p>
        <p>
        Our website is a great resource for anyone who wants to explore the world of K-12 education. Whether you're a student, parent, or educator, we're here to make your life a little bit easier.
        </p>
        <p>
        So, what are you waiting for? Let's get started on this exciting journey of discovering your ideal K-12 strand!
        </p>
      </div>
      <div className='text-center mb-6'>
        <h2 className='text-3xl text-primary font-bold'>OUR TEAM</h2>
        <p className='text-secondary'>Members</p>
      </div>
      <Swiper modules={[Autoplay, FreeMode]} 
      slidesPerView={'auto'}
      freeMode={true}
      loop={true}
      autoplay={{delay:'-1', disableOnInteraction:false}}
      speed={3500}
      className='swiper py-4'>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Jayson Caluag</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•John Emmanuel Manlapig</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Ericson Isaiah Añasco</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Anne Nicole Calamba</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Trisha Nelle Fundano</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Sean Andrei Mahinay</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Nathaniel Joshua Limano</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Alexandra Cabildo</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Donna Belle Madla</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Rovilyn Dela Cruz</SwiperSlide>
        <SwiperSlide className='text-3xl md:text-6xl whitespace-nowrap font-black text-slate-300 w-fit'>•Rodith Mae Zabala</SwiperSlide>
      </Swiper>

    </div>
  )
}

export default AboutPage

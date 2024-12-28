import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slaider.css';
import { Pagination } from 'swiper/modules';

import Header from '../Header/Header';

export default function Slaider() {

  return (
    <>
    <div className='uktyjdhrse'>
      <div className='krjw'>    </div>
    </div>
      <Swiper pagination={true}
       modules={[Pagination]} className="mySwiper">
        <SwiperSlide><Header/></SwiperSlide>
        <SwiperSlide><Header/></SwiperSlide>
        <SwiperSlide><Header/></SwiperSlide>
        <SwiperSlide><Header/></SwiperSlide>
        <SwiperSlide><Header/></SwiperSlide>
      </Swiper>
    </>
  );
}

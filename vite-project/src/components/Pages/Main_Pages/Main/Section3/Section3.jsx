import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Section3.css";


import img from './img/img1.png'
import img1 from './img/1Z5A6413.png'
import img2 from './img/1Z5A6346.png'
import img3 from './img/1Z5A6181.png'


export default function Section3() {
  return (
    <>
    <h2>Фото блюд</h2>
      <Swiper 
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4.9}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        loop={true}
        className="swiper2"
        watchSlidesProgress={true}
            >
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img1}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img2}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img3}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img1}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img2}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img3}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img1}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img2}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slaid">
          <div className="blok-slaid">
            <img src={img3}/>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// import React, { useRef, useState } from 'react';
// import { Virtual, Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import img from './img/img1.png'
// import './Section3.css';

// export default function Section3() {
//   const [swiperRef, setSwiperRef] = useState(null);
//   const appendNumber = useRef(500);
//   const prependNumber = useRef(1);
//   // Create array with 500 slides
//   const [slides, setSlides] = useState(
//     Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
//   );

//   const prepend = () => {
//     setSlides([
//       `Slide ${prependNumber.current - 2}`,
//       `Slide ${prependNumber.current - 1}`,
//       ...slides,
//     ]);
//     prependNumber.current = prependNumber.current - 2;
//     swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
//   };

//   const append = () => {
//     setSlides([...slides, 'Slide ' + ++appendNumber.current]);
//   };

//   const slideTo = (index) => {
//     swiperRef.slideTo(index - 1, 0);
//   };

//   return (
//     <>
//       <Swiper
//         modules={[Virtual, Navigation, Pagination]}
//         spaceBetween={3}
//         slidesPerView={50}
//         autoplay={{ delay: 500, disableOnInteraction: false }}
//         loop={true}
//         className="swiper2"
//         watchSlidesProgress={true}
//         pagination={{
//           type: 'fraction',
//         }}
//         navigation={true}
//         virtual
//       >
//         {slides.map((slideContent, index) => (
//           <>
//           <SwiperSlide>
//           <div className="blok-slaid">

//           </div>
//           </SwiperSlide>
//           <SwiperSlide >

//           </SwiperSlide>
//         </>
//         ))}
//       </Swiper>

//     </>
//   );
// }

import { DataService } from "../../../data/service-data";

// Import Swiper React components
import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/css/free-mode";
import "swiper/css/zoom";
import "swiper/css/navigation";

import "./../../../styles/productSliderCard.css";

// import required modules
import {Zoom, Autoplay, Pagination, Navigation } from "swiper";
import { useEffect } from "react";

// import SwipperButton from "./SwipperButton";


export default function ProductSlider() {

  const dataProduct = DataService();
const swiper = document.querySelector(".swiper");

 console.log(dataProduct, 'ini data product');

 const dataHandler = (data) => {
  console.log('inihover', data);
  // setDataHover({title:data});
 }
console.log(swiper, 'ini swiper class');


useEffect(() => {
    
   
    

       document
         .querySelectorAll(
           ".swiper-zoom-container"
         )
         .forEach((data) =>
           data.addEventListener("mouseover", (zoomedSlideClass) => {
             console.log('ini hoverrer', zoomedSlideClass);
              zoomedSlideClass.in(4);
           })
         );

}, [dataProduct])
 

  return (
    <div>
      <div>ini product slid9 e htr r</div>
      <div>
        {dataProduct?.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
      <div>dibawah slider</div>
      <div className="m-3 p-20 border bg-white border-black relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
          // disableOnInteraction: false,
          // reverseDirection: true,
          }}
          style={{
          
            "--swiper-navigation-color": "red",
            "--swiper-pagination-color": "green",
          }}
          zoom={true}
          freeMode={true}
          navigation={true}
          pagination={{

            clickable: true,
          }}
          modules={[Zoom, Autoplay, Pagination, Navigation]}
          breakpoints={{
            500: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper static p-3 m-10 w-full  border border-black"
        >
          {dataProduct?.slice(0, 10).map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="overflow-hidden bg-red-200  w-full flex flex-row "
                onClick={dataHandler(item.title)}
              >
                <div
                  data-swiper-zoom="5"
                  className=" swiper-zoom-container  bg-red-800 h-[200px] p-2 w-full"
                >
                  <img
                    className="swiper-zoom-target"
                    src={item.img}
                    alt="img"
                  />
                </div>
              </SwiperSlide>
            );
          })}
          {/* <SwipperButton /> */}
        </Swiper>
      </div>
      <p>ini dbwh swipper</p>
      <div className="container bg-red-200">
        <p>ini swipper</p>
      </div>
    </div>
  );
}

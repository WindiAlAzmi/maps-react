import { DataService } from "../../../data/service-data"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./../../../styles/banerCard.css";

import { Pagination, Autoplay } from "swiper";

export default function WebBanerCard() {

 const dataProduct = DataService();

  return (
    <div className="flex flex-col items-center">
      <div>ini web baner</div>
      <div>bawah slider web baner</div>
      <div className="m-2 md:m-10 w-1/2 mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          // breakpoints={{
          //   500: {
          //     slidesPerView: 1,
          //   },
          //   768: {
          //     slidesPerView: 1,
          //   },
          //   1200: {
          //     slidesPerView: 1,
          //   },
          // }}
        >
          {dataProduct?.slice(0, 5).map((item, index) => {
            return (
              <SwiperSlide className="bg-blue-200 webBaner" key={index}>
                {" "}
                {item.title}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

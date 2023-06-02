import { DataService } from "../../../data/service-data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import "swiper/css/navigation";

import "./../../../styles/productSliderCard.css";

// import required modules
import { FreeMode, Pagination} from "swiper";
import SwipperButton from "./SwipperButton";

export default function ProductSlider() {
  const dataProduct = DataService();

  return (
    <div>
      <div>ini product slider</div>
      <div>
        {dataProduct?.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
      <div>dibawah slider</div>
      <div className="m-3 p-10 border border-black relative">
        <Swiper
          slidesPerView={3}
          spaceBetween={100}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
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
          className="mySwiper swiperProduct static  border border-black"
        >
          {dataProduct?.slice(0, 10).map((item, index) => {
            return (
              <SwiperSlide className="bg-yellow-100 productSlider" key={index}>
                {" "}
                {item.title}
              </SwiperSlide>
            );
          })}
          <SwipperButton />
        </Swiper>
      </div>
    </div>
  );
}

import { DataService } from "../../../data/service-data"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {  Pagination, Autoplay } from "swiper";
import "./../../../styles/testimoniProductCard.css";


export default function ProductCard() {

  const dataProduct = DataService();
  return (
    <div>
      <div>ini product</div>
      <div>
        <h3>dibawah slider</h3>
        <div className="m-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper p-10"
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            {dataProduct?.slice(0, 5).map((item, index) => {
              return <SwiperSlide key={index} className="testimoniCard"> {item.title}</SwiperSlide>;
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

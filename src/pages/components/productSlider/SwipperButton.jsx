import { useSwiper } from "swiper/react"
import leftScroll from "/src/assets/images/left-scroll.png";
import rightScroll from "/src/assets/images/right-scroll.png";
import { useEffect } from "react";

export default function SwipperButton() {

    const swiper = useSwiper();

    const data = swiper.isEnd;
   
    useEffect(() => {
 console.log(data, "ini swiper end");
    }, [data])
  return (
    <div className="swiper-nav-btn absolute top-[50%] left-0 right-0 w-full z-40 flex justify-between ">
      <div className="swiper-button-prev" onClick={() => swiper.slidePrev()}>
        <img src={leftScroll} alt="ini scroll prev" />
      </div>
      <div className="swiper-button-next" onClick={() => swiper.slideNext()}>
        <img src={rightScroll} alt="ini scroll next" />
      </div>
    </div>
  );
}

import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      className="bg-white p-3 rounded-full"
      onClick={() => swiper.slideNext()}
    >
      {children}
    </button>
  );
};
const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      className="bg-white p-3 rounded-full"
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </button>
  );
};

export { SwiperButtonNext, SwiperButtonPrev };

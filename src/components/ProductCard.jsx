import React from "react";
import PropTypes from "prop-types";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/styles/Carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductCard = ({ key, src, title, description }) => {
  return (
    <div className="grid items-center h-full bg-[#EAEAEA] p-5 rounded-xl grid-cols-1">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   0: {
        //     autoplay: true,
        //   },
        //   768: {
        //     autoplay: true,
        //   },
        // }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {src.map((src, index) => (
          <SwiperSlide key={index} className="">
            <img
              src={src}
              alt="product card image"
              className="max-h-[310px] rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-left break-words">
        <h2 className="text-3xl font-bold pt-4">{title}</h2>
        <p className="sm:text-lg pt-3">{description}</p>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  src: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProductCard;

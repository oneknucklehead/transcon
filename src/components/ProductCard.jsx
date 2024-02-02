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
    // <div className="">
    <div className="grid items-start h-full bg-[#EAEAEA] p-5 rounded-xl">
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
        className="mySwiper h-[300px] col-span-1"
      >
        {src.map((src, index) => (
          <SwiperSlide key={index} className="h-[300px]">
            <img src={src} alt="product card image" className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="col-span-1 text-center md:text-left break-words flex flex-col">
        <h2 className="text-2xl font-bold pt-4">{title}</h2>
        <p className="sm:text-lg pt-3">{description}</p>
      </div> */}
      <div>
        <h2 className="text-2xl font-bold pt-4">{title}</h2>
        <p className="sm:text-lg pt-3">{description}</p>
      </div>
    </div>
    // </div>
  );
};
ProductCard.propTypes = {
  src: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProductCard;

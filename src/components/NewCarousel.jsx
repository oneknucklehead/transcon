import React, { useCallback, useEffect, useState } from "react";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import customers from "../data/CustomerContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/styles/Carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperButtonNext, SwiperButtonPrev } from "./SwiperButton";
import SlideContent from "./SlideContent";

const NewCarousel = () => {
  const [swiperRef, setSwiperRef] = useState();
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);
  var spans = [];
  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <div className="grid gap-4 grid-cols-12">
      <button
        className="hidden md:flex col-span-1 bg-white w-fit h-fit m-auto p-4 rounded-full justify-center items-center"
        onClick={handlePrevious}
      >
        <span className="hidden lg:block">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2887 28C14.9124 28 15.4626 27.7783 15.9395 27.335L17.3152 25.9872C17.7799 25.5319 18.0122 24.9867 18.0122 24.3517C18.0122 23.7047 17.7799 23.1656 17.3152 22.7343L11.9409 17.4506L24.8539 17.4506C25.4898 17.4506 26.0065 17.2259 26.4039 16.7766C26.8013 16.3273 27 15.7852 27 15.1502L27 12.8498C27 12.2148 26.8013 11.6727 26.4039 11.2234C26.0065 10.7741 25.4898 10.5494 24.8539 10.5494L11.9409 10.5494L17.3152 5.26572C17.7799 4.8344 18.0122 4.29525 18.0122 3.64827C18.0122 3.00128 17.7799 2.46213 17.3152 2.03081L15.9395 0.682926C15.4749 0.227642 14.9246 -6.52375e-07 14.2887 -6.2458e-07C13.6406 -5.96251e-07 13.0842 0.227642 12.6196 0.682926L0.678669 12.3825C0.226223 12.8019 5.83155e-07 13.341 6.11959e-07 14C6.4024e-07 14.647 0.226223 15.1921 0.678669 15.6354L12.6196 27.335C13.0965 27.7783 13.6529 28 14.2887 28Z"
              fill="black"
            />
          </svg>
        </span>
        <span className="block lg:hidden">
          <svg
            width="14"
            height="14"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2887 28C14.9124 28 15.4626 27.7783 15.9395 27.335L17.3152 25.9872C17.7799 25.5319 18.0122 24.9867 18.0122 24.3517C18.0122 23.7047 17.7799 23.1656 17.3152 22.7343L11.9409 17.4506L24.8539 17.4506C25.4898 17.4506 26.0065 17.2259 26.4039 16.7766C26.8013 16.3273 27 15.7852 27 15.1502L27 12.8498C27 12.2148 26.8013 11.6727 26.4039 11.2234C26.0065 10.7741 25.4898 10.5494 24.8539 10.5494L11.9409 10.5494L17.3152 5.26572C17.7799 4.8344 18.0122 4.29525 18.0122 3.64827C18.0122 3.00128 17.7799 2.46213 17.3152 2.03081L15.9395 0.682926C15.4749 0.227642 14.9246 -6.52375e-07 14.2887 -6.2458e-07C13.6406 -5.96251e-07 13.0842 0.227642 12.6196 0.682926L0.678669 12.3825C0.226223 12.8019 5.83155e-07 13.341 6.11959e-07 14C6.4024e-07 14.647 0.226223 15.1921 0.678669 15.6354L12.6196 27.335C13.0965 27.7783 13.6529 28 14.2887 28Z"
              fill="black"
            />
          </svg>
        </span>
      </button>
      {/* <div className="w-full">
        <Swiper
          spaceBetween={30}
          loop={true}
          onSwiper={setSwiperRef}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },

            936: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {customers.map(({ imgSrc }, index) => (
            <SwiperSlide key={index}>
              <SlideContent imgSrc={imgSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <div className="col-span-12 md:col-span-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          onSwiper={setSwiperRef}
          //   pagination={{
          //     clickable: true,
          //   }}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {customers.map(({ imgSrc }, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <SlideContent imgSrc={imgSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        className="hidden m-auto col-span-1 bg-white w-fit h-fit p-4 rounded-full md:flex justify-center items-center"
        onClick={handleNext}
      >
        <span className="hidden lg:block">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7113 28C12.0876 28 11.5374 27.7783 11.0605 27.335L9.68478 25.9872C9.22011 25.5319 8.98777 24.9867 8.98777 24.3517C8.98777 23.7047 9.22011 23.1656 9.68478 22.7343L15.0591 17.4506L2.14606 17.4506C1.51019 17.4506 0.993547 17.2259 0.596128 16.7766C0.198709 16.3273 -6.89993e-07 15.7852 -6.62236e-07 15.1502L-5.61683e-07 12.8498C-5.33926e-07 12.2148 0.198709 11.6727 0.596128 11.2234C0.993547 10.7741 1.51019 10.5494 2.14606 10.5494L15.0591 10.5494L9.68478 5.26572C9.22011 4.8344 8.98777 4.29525 8.98777 3.64827C8.98777 3.00128 9.22011 2.46213 9.68478 2.03081L11.0605 0.682926C11.5251 0.227642 12.0754 -6.52375e-07 12.7113 -6.2458e-07C13.3594 -5.96251e-07 13.9158 0.227642 14.3804 0.682926L26.3213 12.3825C26.7738 12.8019 27 13.341 27 14C27 14.647 26.7738 15.1921 26.3213 15.6354L14.3804 27.335C13.9035 27.7783 13.3471 28 12.7113 28Z"
              fill="black"
            />
          </svg>
        </span>
        <span className="block lg:hidden">
          <svg
            width="14"
            height="14"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7113 28C12.0876 28 11.5374 27.7783 11.0605 27.335L9.68478 25.9872C9.22011 25.5319 8.98777 24.9867 8.98777 24.3517C8.98777 23.7047 9.22011 23.1656 9.68478 22.7343L15.0591 17.4506L2.14606 17.4506C1.51019 17.4506 0.993547 17.2259 0.596128 16.7766C0.198709 16.3273 -6.89993e-07 15.7852 -6.62236e-07 15.1502L-5.61683e-07 12.8498C-5.33926e-07 12.2148 0.198709 11.6727 0.596128 11.2234C0.993547 10.7741 1.51019 10.5494 2.14606 10.5494L15.0591 10.5494L9.68478 5.26572C9.22011 4.8344 8.98777 4.29525 8.98777 3.64827C8.98777 3.00128 9.22011 2.46213 9.68478 2.03081L11.0605 0.682926C11.5251 0.227642 12.0754 -6.52375e-07 12.7113 -6.2458e-07C13.3594 -5.96251e-07 13.9158 0.227642 14.3804 0.682926L26.3213 12.3825C26.7738 12.8019 27 13.341 27 14C27 14.647 26.7738 15.1921 26.3213 15.6354L14.3804 27.335C13.9035 27.7783 13.3471 28 12.7113 28Z"
              fill="black"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default NewCarousel;

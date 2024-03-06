import React from "react";
import Container from "../components/Container";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// ***********PRODUCTS IMAGE IMPORT************ //
import mainImg from "../assets/images/products/multiPrinter2.png";
import img1 from "../assets/images/Projector.png";
import img2 from "../assets/images/lcd.png";
import img3 from "../assets/images/video.png";

import products from "../data/ProductContent.js";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel.jsx";
const ProductSection = () => {
  return (
    <>
      <Container>
        <div className="pt-14 pb-8 sm:pb-24 text-lg font-semibold text-center">
          Empower your office with state-of-the-art IT solutions. We are the
          foremost provider of IT supplies, office automation equipments,
          communication products, A3 multifunction printers, large format
          printers, professional displays, surveillance products and services,
          ensuring seamless productivity and innovation for your workplace.
        </div>
        {/* *******MAIN PRODUCT********* */}
        <div className="max-w-[90%] xl:max-w-[70%] 2xl:max-w-[60%] mx-auto">
          <div className="grid items-center grid-cols-1 gap-10 py-8">
            <div className="">
              <div className="relative p-8 bg-[#EAEAEA] rounded-xl">
                {/* <div className="col-span-1 h-full flex flex-col justify-end"> */}
                <img
                  className="md:max-w-[400px] md:float-right sm:-mt-28 xl:-mt-32 sm:-mr-16"
                  src={mainImg}
                  alt="printer"
                />
                <p className="hidden 2xl:block 2xl:invisible">asdad</p>
                <p className="hidden 2xl:block 2xl:invisible">asdad</p>
                <p className="hidden xl:block xl:invisible">asdad</p>
                <p className="hidden xl:block xl:invisible">asdad</p>
                <p className="hidden xl:block xl:invisible">asdad</p>

                <p className="hidden md:invisible">asdad</p>
                <p className="hidden sm:invisible">asdad</p>
                <p className="hidden sm:invisible">asdad</p>
                <p className="hidden sm:invisible">asdad</p>
                <p className="hidden sm:invisible">asdad</p>
                <p className="hidden sm:invisible">asdad</p>
                <p className="hidden sm:invisible">asdad</p>
                <h2 className="font-bold capitalize text-2xl sm:text-4xl">
                  Konica Minolta <br />
                  A3 Multi-Function Laser Printers
                  <br /> (Mono & Colour)
                </h2>
                <p className="text-sm sm:text-lg lowercase">
                  SIMPLE, SECURE AND CONVENIENT PRINTING SOLUTIONS.
                </p>
                {/* </div> */}
                {/* <div className="absolute -mt-24 -right-24 ">
                <span>
                  <img src={mainImg} alt="printer" />
                </span>
              </div> */}
                {/* <div className="">
                <span>
                  <img src={mainImg} alt="printer" />
                </span>
              </div> */}
              </div>
            </div>
            {/* <div className=" sm:col-span-4">
              <h2 className="font-bold break-words text-4xl md:text-5xl">
                The best equipment available for your office.
              </h2>
            </div> */}
          </div>
        </div>
      </Container>
      {/* PRODUCT CAROUSEL */}
      <div className="block lg:hidden w-[96%] mx-auto">
        <ProductCarousel />
      </div>
      <Container>
        <div className="w-[96%] gap-4 mx-auto hidden lg:grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {products.map(({ key, src, title, description }) => (
            <ProductCard
              key={key}
              src={src}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Container>
      {/* <div> */}
      {/* <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
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
          {products.map(({ key, src, title, description }, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <ProductCard src={src} title={title} description={description} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      {/* </div> */}
      {/* <div className="grid gap-8 justify-items-stretch grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {products.map(({ key, src, title, description }) => (
          <div key={key}>
            <ProductCard src={src} title={title} description={description} />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default ProductSection;

import React from "react";
import Container from "../components/Container";
import CarouselComp from "../components/CarouselComp";
import NewCarousel from "../components/NewCarousel";
import { Link } from "react-scroll";

import { Pagination, Autoplay } from "swiper/modules";
import customers from "../data/CustomerContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/styles/Carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CustomersSection = () => {
  return (
    <div className="bg-[#095DAB] py-8">
      <div className="w-[88%] mx-auto">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h3 className="font-semibold text-white text-4xl">
            Our Esteemed Customers
          </h3>
          {/* <div className="slider-container"> */}
          {/* <CarouselComp /> */}
          <NewCarousel />
          {/* </div> */}
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            //   pagination={{
            //     clickable: true,
            //   }}
            autoplay={{
              delay: 2500,
            }}
            // breakpoints={{
            //   0: {
            //     slidesPerView: 2,
            //   },
            //   768: {
            //     slidesPerView: 3,
            //   },
            // }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="flex justify-center items-center">
              <div className="flex flex-col gap-3 border-lg bg-white rounded-lg p-5">
                <div className="flex justify-center gap-2">
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                </div>
                <p>
                  Transcon Electronics has been our trusted partner for
                  innovative IT solutions. Their commitment to excellence and
                  prompt service has significantly enhanced our operational
                  efficiency.
                </p>
                <p className=" font-light">Arvind, CFO at HDFC Bank</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <div className="flex flex-col gap-3 border-lg bg-white rounded-lg p-5">
                <div className="flex justify-center gap-2">
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1796 8.93653C24.1796 8.57804 23.9084 8.35527 23.3655 8.26805L16.0713 7.20737L12.8019 0.595707C12.618 0.198511 12.3804 0 12.0899 0C11.7993 0 11.5619 0.198511 11.3779 0.595707L8.10824 7.20737L0.81366 8.26805C0.271279 8.35525 0 8.57804 0 8.93653C0 9.14003 0.121104 9.37261 0.363311 9.63408L5.65264 14.778L4.40308 22.0436C4.38364 22.1793 4.374 22.2763 4.374 22.3343C4.374 22.5378 4.42484 22.7095 4.5265 22.8503C4.62816 22.9908 4.78065 23.0609 4.98416 23.0609C5.15859 23.0609 5.35229 23.0031 5.56542 22.8867L12.0897 19.457L18.6145 22.8867C18.8182 23.003 19.0119 23.0609 19.1956 23.0609C19.3898 23.0609 19.5373 22.991 19.639 22.8503C19.7404 22.7097 19.7913 22.5378 19.7913 22.3343C19.7913 22.2083 19.7865 22.1115 19.7766 22.0436L18.5269 14.778L23.8016 9.63408C24.0538 9.38224 24.1796 9.14967 24.1796 8.93653Z"
                        fill="#FDBC4B"
                      />
                    </svg>
                  </span>
                </div>
                <p>
                  Transcon Electronics has been our trusted partner for
                  innovative IT solutions. Their commitment to excellence and
                  prompt service has significantly enhanced our operational
                  efficiency.
                </p>
                <p className=" font-light">Arvind, CFO at HDFC Bank</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <button className="bg-white font-semibold py-3 px-6 rounded-full">
              Get in touch!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomersSection;

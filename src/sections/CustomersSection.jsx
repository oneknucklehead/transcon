import React from "react";
import Container from "../components/Container";
import CarouselComp from "../components/CarouselComp";
import NewCarousel from "../components/NewCarousel";
import { Link } from "react-scroll";
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

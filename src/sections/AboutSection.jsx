import React from "react";
import Container from "../components/Container";
import imgSrc from "../assets/images/about.png";
const AboutSection = () => {
  return (
    <div className="wrapper">
      <Container>
        <div className="break-words w-full md:w-[80%] mx-auto">
          <div className="grid grid-cols-12 justify-between rounded-lg bg-[#095DAB] py-3 md:py-5 px-6 md:px-10">
            <div className="flex gap-4 text-lg md:text-xl pb-6 font-thin flex-col justify-center col-span-12  text-white">
              <h3 className="font-bold text-4xl md:text-6xl">About Us</h3>
              {/* <div className=""> */}
              <p>
                Transcon Electronics Pvt Ltd is an ISO 9001 certified company
                and was established in 1987 with the aim of distributing office
                automation equipments in Eastern India. In a span of about 30
                years we have emerged as the market leaders in this segment
                catering to West Bengal, Orissa, Bihar, Assam, Jharkhand and
                North eastern states.
              </p>
              <p>
                We have also expanded to southern states like Telengana and
                Andhra Pradesh. We are the exclusive distributor and service
                provider for brands like Panasonic, Konica Minolta and Delta.
              </p>

              {/* </div> */}
              {/* order-last md:order-first */}
              {/* order-first md:order-last */}
            </div>
            {/* <div className="flex justify-center items-center w-full col-span-12 h-auto  lg:col-span-4 bg-[#095DAB]">
              <img
                className="w-full object-cover"
                src={imgSrc}
                alt="about us image"
              />
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;

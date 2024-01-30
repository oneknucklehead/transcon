import React from "react";
import imgSrc from "../assets/images/homeBg.png";
import Container from "../components/Container.jsx";
// ********LOGOS******* //
import appleLogo from "../assets/images/apple-logo.png";
import microsoftLogo from "../assets/images/microsoft-logo.png";
import samsungLogo from "../assets/images/samsung.png";
import dellLogo from "../assets/images/dell.png";
import lenovoLogo from "../assets/images/Lenovo-logo.png";

const HomeSection = () => {
  return (
    <div className="w-screen">
      <div className="relative -z-10">
        <img
          className="w-full h-full object-cover	object-right"
          src={imgSrc}
          alt="Home section background"
        />
        {/* <div className="w-[80%] mx-auto bg-white "> */}

        <div
          className="absolute top-[35%] xl:top-[45%] right-24 lg:right-40 xl:right-20 rounded-xl w-0 md:w-72 h-52 lg:w-[382px] lg:h-[280px] xl:h-[322px] "
          style={{
            "box-shadow": "0px 6px 30.100000381469727px 7px #0000004D",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            // height: "250px",
            // width: "600px"
            borderRadius: "15px",
            border: "0px solid rgba(43, 43, 43, 0.568)",
          }}
        ></div>
        <div className="hidden md:flex flex-col md:items-end text-5xl lg:text-6xl font-bold text-white absolute right-44 xl:right-44 top-[45%] xl:top-[58%]">
          {/* <div className=""> */}
          <p
            style={{
              textShadow: "0px 4px 13.800000190734863px 0px #00000040",
            }}
          >
            Revolutionize Your
          </p>
          <p className="pt-1">Workplace Tech</p>
          {/* </div> */}
        </div>
        {/* </div> */}
        <Container>
          <div className="text-[#095DAB] underline decoration-[#75CDFFA1] flex flex-col justify-center items-center text-5xl font-bold pt-6 md:hidden">
            <p>Revolutionize Your</p>
            <p>Workplace Tech</p>
          </div>
        </Container>
        <div className="w-full flex mt-8 xl:mt-0 xl:absolute -bottom-5 justify-evenly">
          <div className="bg-[#095DAB] w-[80%] lg:w-[70%] xl:w-[60%] rounded-xl py-3 px-8 flex flex-wrap gap-4 items-center justify-around">
            <span className="w-[60px]">
              <img className="" src={appleLogo} alt="apple logo" />
            </span>
            <span className="w-40">
              <img className="w-40" src={microsoftLogo} alt="microsoft logo" />
            </span>
            {/* <span className=""> */}
            <img className="w-40" src={samsungLogo} alt="Samsung logo" />
            {/* </span> */}
            {/* <span className="w-40"> */}
            <img className="" src={dellLogo} alt="Dell logo" />
            {/* </span> */}
            {/* <span className=""> */}
            <img className="" src={lenovoLogo} alt="Lenovo logo" />
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

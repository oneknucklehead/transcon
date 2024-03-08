import React from "react";
import stats from "../data/StatsContent.js";
import StatsCard from "../components/StatsCard";
import Container from "../components/Container.jsx";

import img1 from "../assets/images/count.png";
import img2 from "../assets/images/support.png";
import img3 from "../assets/images/trust.png";

const StatsSection = () => {
  return (
    <div className="wrapper">
      <Container>
        {/* <div className="grid gap-8 items-stretch h-full justify-items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ key, src, description }) => (
            <div key={key}>
              <StatsCard src={src} description={description} />
            </div>
          ))}
        </div> */}
        <div className="grid gap-8 items-stretch h-full justify-items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#D9D9D9] rounded-lg p-8 flex flex-col justify-around items-center h-full">
            <img
              className=" w-[90%] 2xl:w-auto h-auto 2xl:h-[160px]"
              src={img1}
              alt={"statistics1"}
            />

            <h3 className="text-lg text-center md:text-xl font-semibold pt-4">
              Over 34 years of excellent service and thousands of Happy
              customers
            </h3>
          </div>
          <div className="bg-[#D9D9D9] rounded-lg p-8 flex flex-col justify-around items-center h-full">
            <img className="px-10" src={img2} alt={"statistics2"} />

            <h3 className="text-lg text-center md:text-xl font-semibold pt-4">
              Authorised dealers of trusted premium brands
            </h3>
          </div>
          <div className="bg-[#D9D9D9] rounded-lg p-8 flex flex-col justify-around items-center h-full">
            <img className="px-10" src={img3} alt={"statistics3"} />

            <h3 className="text-lg text-center md:text-xl font-semibold pt-4">
              Continued Service and Support for all Products
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StatsSection;

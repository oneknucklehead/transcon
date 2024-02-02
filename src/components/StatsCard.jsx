import React from "react";
import PropTypes from "prop-types";
// ******SAMPLE IMAGE IMPORT***** //
import imgSrc from "../assets/images/count.png";

const StatsCard = ({ src = imgSrc, description }) => {
  return (
    // <div>
    <div className="bg-[#D9D9D9] rounded-lg p-8 flex flex-col justify-around items-center h-full">
      <img className="px-10" src={src} alt={description} />

      <h3 className="text-lg text-center md:text-xl font-semibold pt-4">
        {description}
      </h3>
    </div>
    // </div>
  );
};

StatsCard.propTypes = {
  src: PropTypes.any,
  description: PropTypes.string,
};

export default StatsCard;

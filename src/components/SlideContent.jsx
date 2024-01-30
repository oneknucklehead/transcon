import React from "react";
import PropTypes from "prop-types";
// ********SAMPLE IMAGE IMPORT********* //
import sampleSrc from "../assets/images/customer1.png";

const SlideContent = ({ imgSrc = sampleSrc }) => {
  return (
    <div className="p-5 rounded-lg">
      <img className="" src={imgSrc} alt="customer image" />
    </div>
  );
};

SlideContent.propTypes = {
  imgSrc: PropTypes.any,
  stars: PropTypes.number,
  description: PropTypes.string,
  designation: PropTypes.string,
};

export default SlideContent;

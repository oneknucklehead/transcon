import React from "react";
import PropTypes from "prop-types";
// *********SAMPLE PRODUCT IMPORT********* //
import imgSrc from "../assets/images/Projector.png";

const ProductCard = ({ src = imgSrc, title, description }) => {
  return (
    <div className="wrapper flex flex-col justify-around h-full p-8 bg-[#EAEAEA] rounded-xl ">
      <div className="flex flex-col justify-center items-center">
        <img src={src} alt="product card image" />
      </div>
      <div>
        <h2 className="text-4xl font-bold pt-4">{title}</h2>
        <p className="text-lg pt-3">{description}</p>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  src: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProductCard;

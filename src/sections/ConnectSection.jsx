import React from "react";
import Container from "../components/Container";
import { Link } from "react-scroll";

const ConnectSection = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 py-12 justify-center items-center">
        <h2 className="text-4xl text-center font-bold">
          Take the first step towards success
        </h2>
        <p className="text-xl text-center">
          Connect with us today for personalized solutions and exceptional
          service.
          <br /> Begin your success journey with our high tech solutions.
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <button className="text-white font-semibold bg-[#095DAB] py-3 px-6 rounded-full">
            CONTACT NOW!
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default ConnectSection;

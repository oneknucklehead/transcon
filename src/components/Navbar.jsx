import React, { useState } from "react";
import imgSrc from "../assets/images/logo.png";
import Container from "./Container";
import { Link } from "react-scroll";

import "../assets/styles/Navbar.css";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="fixed z-50 w-full top-0 ">
      <Container>
        <div
          className="bg-[#095DAB] flex p-4 rounded-xl mt-4 justify-between items-center"
          style={{
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          }}
        >
          <div>
            <a href="#" className="text-2xl font-bold text-gray-800">
              <Link to="home" smooth={true} duration={500}>
                <span className="w-[120px]">
                  <img className="w-[120px]" src={imgSrc} alt="Transcon logo" />
                </span>
              </Link>
            </a>
          </div>
          <div>
            <ul className="text-sm lg:text-lg hidden md:flex items-center space-x-4 lg:space-x-8 text-white">
              <li className="p-1">
                <Link
                  to="products"
                  smooth={true}
                  duration={500}
                  activeClass="font-bold"
                  spy={true}
                  offset={-62}
                >
                  Products
                </Link>
              </li>
              <li className="p-1">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  activeClass="font-semibold"
                  spy={true}
                  offset={-100}
                >
                  About Us
                </Link>
              </li>
              <li className="p-1">
                <Link
                  to="stats"
                  smooth={true}
                  duration={500}
                  activeClass="font-semibold"
                  spy={true}
                  offset={-100}
                >
                  Trust
                </Link>
              </li>
              <li className="p-1">
                <Link
                  to="customers"
                  smooth={true}
                  duration={500}
                  activeClass="font-semibold"
                  spy={true}
                  offset={-100}
                >
                  Clients
                </Link>
              </li>
              <li className="p-1">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  activeClass="font-semibold"
                  spy={true}
                  offset={-100}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <button className="text-sm lg:text-lg text-[#000] bg-white py-2 px-3 rounded-lg font-bold">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Book Now!
              </Link>
            </button>
          </div>
          <div className="flex items-center justify-center md:hidden">
            <button className="space-y-1 group">
              <div className="w-6 h-[3px] bg-white"></div>
              <div className="w-6 h-[3px] bg-white"></div>
              <div className="w-6 h-[3px] bg-white"></div>
              <ul className="bg-[#095DAB] text-white group-focus:-top-1 w-screen py-10 absolute -top-[999px] right-0 duration-150 flex flex-col space-y-3 justify-end">
                <button className="px-16 pb-4 relative ml-auto">
                  <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
                  <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
                </button>
                <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                  <Link
                    to="products"
                    smooth={true}
                    duration={500}
                    activeClass="font-semibold"
                    spy={true}
                    offset={-70}
                  >
                    Products
                  </Link>
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    activeClass="font-semibold"
                    spy={true}
                    offset={-120}
                  >
                    About Us
                  </Link>
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                  <Link
                    to="stats"
                    smooth={true}
                    duration={500}
                    activeClass="font-semibold"
                    spy={true}
                    offset={-120}
                  >
                    Trust
                  </Link>
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                  <Link
                    to="customers"
                    smooth={true}
                    duration={500}
                    activeClass="font-semibold"
                    spy={true}
                    offset={-120}
                  >
                    Clients
                  </Link>
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    activeClass="font-semibold"
                    spy={true}
                    offset={-85}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </Container>
    </div>
    // <div className="fixed z-50 top-0 w-screen h-screen md:h-fit">
    //   <header className="text-white ml-2 mr-6">
    //     <nav className="container bg-[#095DAB] rounded-lg mx-auto px-6 py-2 mt-4">
    //       <div className="flex justify-between items-center">
    //         <a href="#" className="text-2xl font-bold text-gray-800">
    //           <span>
    //             <img src={imgSrc} alt="Transcon logo" />
    //           </span>
    //         </a>
    //         <div>
    //           <ul className="hidden md:flex items-center space-x-4">
    //             <li className="px-4">Products</li>
    //             <li className="px-4">About Us</li>
    //             <li className="px-4">Trust</li>
    //             <li className="px-4">Clients</li>
    //             <li className="px-4">Contact</li>
    //           </ul>
    //         </div>
    //         <div className="hidden md:flex">
    //           <button className="text-[#000] bg-white py-2 px-3 rounded-lg font-bold">
    //             Book Now!
    //           </button>
    //         </div>
    //         <div className="md:hidden flex items-center">
    //           <button className="md:hidden space-y-1 group">
    //             <div className="w-6 h-[3px] bg-white"></div>
    //             <div className="w-6 h-[3px] bg-white"></div>
    //             <div className="w-6 h-[3px] bg-white"></div>
    //             <ul className="bg-[#252525] group-focus:-top-1 text-white w-screen py-10 absolute -top-full right-0 duration-150 flex flex-col space-y-3 justify-end">
    //               <button className="px-16 pb-4 relative ml-auto">
    //                 <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
    //                 <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
    //               </button>
    //               <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
    //                 Products
    //               </li>
    //               <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
    //                 About Us
    //               </li>
    //               <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
    //                 Trust
    //               </li>
    //               <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
    //                 Clients
    //               </li>
    //               <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
    //                 Contact
    //               </li>
    //             </ul>
    //           </button>
    //         </div>
    //       </div>
    //     </nav>
    //   </header>
    // </div>
  );
};

export default Navbar;

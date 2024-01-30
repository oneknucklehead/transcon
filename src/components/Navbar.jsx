import React, { useState } from "react";
import imgSrc from "../assets/images/logo.png";
import Container from "./Container";
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="fixed z-50 w-full top-0">
      <Container>
        <div className="bg-[#095DAB] flex p-4 rounded-xl mt-4 justify-between items-center">
          <div>
            <a href="#" className="text-2xl font-bold text-gray-800">
              <span className="w-[120px]">
                <img className="w-[120px]" src={imgSrc} alt="Transcon logo" />
              </span>
            </a>
          </div>
          <div>
            <ul className="text-sm lg:text-lg hidden md:flex items-center space-x-4 lg:space-x-8 text-white">
              <li className="p-1">Products</li>
              <li className="p-1">About Us</li>
              <li className="p-1">Trust</li>
              <li className="p-1">Clients</li>
              <li className="p-1">Contact</li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <button className="text-sm lg:text-lg text-[#000] bg-white py-2 px-3 rounded-lg font-bold">
              Book Now!
            </button>
          </div>
          <div className="block md:hidden">
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
                  Products
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                  About Us
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                  Trust
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                  Clients
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                  Contact
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

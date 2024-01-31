import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Container from "../components/Container.jsx";
import "../assets/styles/ContactSection.css";
const ContactSection = () => {
  const [phone, setPhone] = useState();
  const [code, setCode] = useState(91);

  const style = {};

  useEffect(() => {
    console.log("code : " + code.toString().length * 8);
  }, [code]);
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-1 py-8 xl:grid-cols-2 gap-10">
        {/* CONTACT SECTION */}
        <div className="w-full lg:w-[75%] mx-auto">
          <h3 className="text-4xl font-bold">Contact Us Now!</h3>
          <p className="py-3">
            Fill the form with your requirements & we will get back to you!
          </p>
          <div className="">
            <p className="font-semibold">Name</p>
            <input className="w-full bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-full" />
          </div>
          <div>
            <p className="font-semibold">Company Name</p>
            <input className="w-full bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-full" />
          </div>
          <div>
            <p className="font-semibold">Phone number</p>
            {/* <input className="bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-full" /> */}
            <div className="flex text-black">
              <div className="country-code font-semibold text-[#095DAB] bg-[#75CDFFA1] p-2 flex items-center rounded-s-full">
                +
                <input
                  type="number"
                  // defaultValue="91"
                  value={code}
                  className={`bg-transparent outline-none max-w-[52px]  w-[${
                    code.toString().length * 8
                  }px]`}
                  // onKeyPress="this.style.width = ((this.value.length + 1) * 8) + 'px';"
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="number bg-[#7AB3E84A] rounded-e-full pt-3 pb-3 pr-3 pl-2">
                <input type="tel" className="bg-transparent outline-none" />
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold">E-mail ID</p>
            <input className="w-full bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-full" />
          </div>
          <div>
            <p className="font-semibold">Additional Details/ Requirements</p>
            <textarea className="bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-xl w-full" />
          </div>
        </div>
        {/* MAP IFRAME */}
        <div className="focus:outline-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2957961891266!2d88.34676447599172!3d22.568037633136235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02765321b3ac7b%3A0xdc7e22511fb5d25a!2sTranscon%20Electronics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1705925523411!5m2!1sen!2sin"
            //   width="600"
            height="450"
            className="w-full rounded-t-xl focus:outline-none"
            //   style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="break-all sm:break-words bg-[#095DAB] p-6 rounded-b-xl text-white text-normal md:text-lg grid  gap-3 md:grid-cols-2">
            <div className="flex flex-col justify-start gap-4">
              <div>
                <p>Telephone :</p>
                <p>033-22488210/ 8118/ 1620</p>
              </div>
              <div>
                <p>Email :</p>
                <p>abhishek@transconelectronics.com</p>
                <p>kunal@transconelectronics.com</p>
              </div>
            </div>
            <div className="md:text-right">
              <p>Transcon Electronics Pvt Ltd.</p>
              <p>10, Govt. Place East 2nd Floor, Ezra Mansion</p>
              <p>Kolkata-700069</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

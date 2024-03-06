import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Container from "../components/Container.jsx";
import "../assets/styles/ContactSection.css";
import axios from "axios";
const ContactSection = () => {
  const [code, setCode] = useState(91);
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(null);
  const [compName, setCompName] = useState("");
  const [compNameErr, setCompNameErr] = useState(null);
  const [phone, setPhone] = useState();
  const [phoneErr, setPhoneErr] = useState(null);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState(null);
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState(null);
  const [resultBorder, setResultBorder] = useState("#00a0d2");

  const handleSubmit = () => {
    setResult(null);
    if (name === "") {
      setNameErr("You left the name field empty.");
      return;
    }
    setNameErr(null);
    if (compName === "") {
      setCompNameErr("You left the company name field empty.");
      return;
    }
    setCompNameErr(null);
    if (phone === "") {
      setPhoneErr("You left the phone number field empty.");
      return;
    }
    setPhoneErr(null);
    if (email === "") {
      setEmailErr("You left the email field empty.");
      return;
    }
    setEmailErr(null);
    if (message === "") {
      setMessageErr("You left the message field empty.");
      return;
    }
    setMessageErr(null);
    setLoader(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    // abhishek@transconelectronics.com
    axios
      .post("https://formsubmit.co/ajax/9bc2b7eb8f5d2d1b2280db6c09c6e684", {
        name: name,
        companyName: compName,
        phone: "+91" + phone,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response);
        setLoader(false);
        if (response.data.success === "true") {
          setResult(
            "Thank you for choosing us! We've received your message and we'll get back to you asap. 💙"
          );
        } else {
          setResult(
            "⚠️ There was an error submitting your message, try refreshing the page and sending your message again. Inconvenience is regretted."
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        setResult(
          "There was an error submitting your message, try refreshing the page and sending your message again. Inconvenience is regretted."
        );
      });
  };
  useEffect(() => {
    console.log("code : " + code.toString().length * 8);
  }, [code]);
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-1 py-8 xl:grid-cols-2 gap-10">
        {/* CONTACT SECTION */}
        <div className="w-full flex flex-col gap-2  lg:w-[75%] mx-auto">
          <h3 className="text-4xl font-bold">Contact Us Now!</h3>
          <p className="">
            Fill the form with your requirements & we will get back to you!
          </p>
          <div className="">
            <p className="py-2 pl-4">Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
              className="w-full bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-full"
            />
            {nameErr && (
              <span className="pl-4 text-[#DC3232] text-xs">{nameErr}</span>
            )}
          </div>
          <div>
            <p className="py-2 pl-4">Company Name</p>
            <input
              onChange={(e) => setCompName(e.target.value)}
              name="companyName"
              required
              className="w-full bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-full"
            />
            {compNameErr && (
              <span className="pl-4 text-[#DC3232] text-xs">{compNameErr}</span>
            )}
          </div>
          <div>
            <p className="py-2 pl-4">Phone number</p>
            {/* <input className="bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-full" /> */}
            <div className="flex text-black">
              <div className="country-code font-semibold pr-4 text-[#095DAB] bg-[#75CDFFA1] p-2 flex items-center rounded-s-full">
                +91
                {/* <input
                  type="number"
                  value={code}
                  className={`bg-transparent outline-none max-w-[52px]  w-[${
                    code.toString().length * 8
                  }px]`}
                  onChange={(e) => setCode(e.target.value)}
                /> */}
              </div>
              <div>
                <div className="number bg-[#7AB3E84A] rounded-e-full pt-3 pb-3 pr-3 pl-2">
                  <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    required
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
            {phoneErr && (
              <span className="pl-4 text-[#DC3232] text-xs">{phoneErr}</span>
            )}
          </div>
          <div>
            <p className="py-2 pl-4">E-mail ID</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="w-full bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-full"
            />
            {emailErr && (
              <span className="pl-4 text-[#DC3232] text-xs">{emailErr}</span>
            )}
          </div>
          <div>
            <p className="py-2 pl-4">Additional Details/ Requirements</p>
            <textarea
              rows={6}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="bg-[#7AB3E84A] focus:outline-[#095DAB] p-3 px-4 rounded-xl w-full"
            />
            {messageErr && (
              <span className="text-[#DC3232] text-xs">{messageErr}</span>
            )}
          </div>
          <span>{result}</span>
          <div className="w-[60%] 2xl:w-[50%] py-2">
            <button
              onClick={handleSubmit}
              className="bg-[#095DAB] text-white w-full px-8 py-3 font-semibold text-lg 2xl:text-xl rounded-full"
            >
              {loader ? (
                <div className="">
                  <span
                    className="mr-2 inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  >
                    {/* <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span> */}
                  </span>
                  <span>Submitting..</span>
                </div>
              ) : (
                <div>Submit</div>
              )}
            </button>
          </div>
        </div>
        {/* MAP IFRAME */}
        <div className="focus:outline-none">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2957961891266!2d88.34676447599172!3d22.568037633136235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02765321b3ac7b%3A0xdc7e22511fb5d25a!2sTranscon%20Electronics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1705925523411!5m2!1sen!2sin"
            height="518"
            className="w-full rounded-t-xl focus:outline-none"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.5343537824586!2d88.3488836443522!3d22.568822134775807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027715efc6e2a9%3A0xf10508611ea0d9e3!2sCentre%20point!5e0!3m2!1sen!2sin!4v1707996437002!5m2!1sen!2sin"
            // width="600"
            height="512"
            className="w-full rounded-t-xl focus:outline-none"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="break-all sm:break-words bg-[#095DAB] p-6 rounded-b-xl text-white text-normal md:text-lg grid">
            <div className="">
              {/* <p> */}
              <p>Transcon Electronics Pvt Ltd.</p>
              <p>Suite no:- 205, 2nd floor, Center Point Building</p>
              {/* </p> */}
              {/* <p> */}
              <p>21 Hemanta Basu Sarani</p>
              <p>Near Lalit Great Eastern Hotel</p>
              {/* </p> */}
              <p>Kolkata - 700001 (West Bengal)</p>
            </div>
          </div>
          <div className="p-5">
            Confused where to begin? No worries! Just fill the form and our
            experts will guide & provide you with best solutions for your space
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

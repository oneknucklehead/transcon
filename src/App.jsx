import { useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./sections/HomeSection";
import ProductSection from "./sections/ProductSection";
import AboutSection from "./sections/AboutSection";
import StatsSection from "./sections/StatsSection";
import VideoSection from "./sections/VideoSection";
import ConnectSection from "./sections/ConnectSection";
import CustomersSection from "./sections/CustomersSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
// import "./App.css";

const App = () => {
  return (
    <>
      <div className="overflow-hidden relative font-montserrat">
        <Navbar />
        <section id="home" className="">
          <HomeSection />
        </section>
        <section id="products">
          <ProductSection />
        </section>
        <section id="about" className="my-10">
          <AboutSection />
        </section>
        <section id="stats" className="my-10">
          <StatsSection />
        </section>
        <section id="video" className="">
          <VideoSection />
        </section>
        <section id="connect">
          <ConnectSection />
        </section>
        <section id="customers">
          <CustomersSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <FooterSection />
      </div>
    </>
  );
};

export default App;

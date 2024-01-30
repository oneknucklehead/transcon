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
      <div className="overflow-hidden relative">
        <Navbar />
        <HomeSection />
        <ProductSection />
        <AboutSection />
        <StatsSection />
        {/* <VideoSection /> */}
        <ConnectSection />
        <CustomersSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
};

export default App;

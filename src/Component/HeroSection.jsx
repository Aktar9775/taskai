import React from "react";
import image3 from "../assets/Mask group.svg";
import image1 from "../assets/Rectangle 5.png";
import image2 from "../assets/Rectangle 4.png";
import image4 from "../assets/Vector.png";
import "./Hero.css";
import Logo from "./Logo";
import Button from "./Button";
import Video from "./Video";

function HeroSection() {
  return (
    <div className="relative grid place-items-center w-full">
      <div className="absolute top-0 left-0 right-0 flex justify-center z-50">
        <div className="buton flex items-center">
          <img src={image4} alt="Icon" className="icon" />
          <span className="text ml-2">
            TRANSFORM YOUR DIGITAL PRESENCE WITH AI AGENT
          </span>
        </div>
      </div>
      <div className="absolute top-2/13 z-50 ">
        <Logo />
      </div>
      <p className="absolute top-3/11 text-center text-[#E2E8F8] z-50 w-3/5 md:w-2/">
        Stop struggling with marketing decisions. Our AI assistant analyzes your
        business, creates personalized strategies, and helps you execute them in
        real-time.
      </p>
      <div className="absolute top-4/11 z-50 ">
        <Button props="Start Free Trail" />
      </div>
      <span className="absolute z-50 text-#c5cde3 top-5/12" style={{fontSize:"10px", color:"#c5cde3"}}>
        Try adTask AI free for 30 days
      </span>
      <div className="absolute top-4/9 mt-4 z-50">
        <Video />
      </div>
      <div className=" w-[1000px] h-[1100px]">
        <img
          src={image3}
          alt="Layer 2"
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/9 w-[1100px] h-[1100px] -scale-z-50 opacity-2.5"
        />
        <img
          src={image2}
          alt="Layer 1"
          className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/10 w-[500px] h-[650px] z-10 "
        />
        <img
          src={image1}
          alt="Layer 3"
          className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/10 w-[1000px] h-[700px] z-40 "
        />
      </div>
     
    </div>
  );
}

export default HeroSection;

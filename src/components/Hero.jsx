import React from "react";
//import image
import WomanImg from "../img/woman_promart.png";

const Hero = () => {
  return (
    <section className=" h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 ">
            Cambias algo.  <br />
            Cambias todo<br/>
            <span className="font-semibold text-black">PROMART</span>
          </h1>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import heroImg from "../assets/heroImg.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1140px] h-full mt-4 md:pb-4 gap-[4rem]">
      <img src={heroImg} alt="" className="h-full w-full object-cover" />
      <div className="justify-center m-auto  ">
        <h1 className="text-3xl items-center md:text-[36px] mb-4 font-bold">
          Every day is unique, just like our tea
        </h1>
        <p className="text-base text-[#282828] mb-5 ">
          Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
          adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit amet
          consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh
          eros in.
        </p>
        <button className="btn-black">browes teas</button>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import whoImg from "../assets/who.jpg";

const Wholesalers = () => {
  return (
    <div className="w-full h-full px-4 md:px-0 md:pl-20 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="justify-center m-auto ">
          <h1 className="text-3xl items-center md:text-[36px] mb-4 font-bold">
            FOR WHOLESALERS
          </h1>
          <p className="mb-10 text-base w-[80%]">
            We offer loose tea leaves of the best quality for your business.
            With a choice of more than 450 different kinds of loose tea, we can
            make a sophisticated selection that fits exactly in your kind of
            establishment.
          </p>
          <button className="btn-light">get A free consultation</button>
        </div>

        <img src={whoImg} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Wholesalers;

import React from "react";
import LBlog1 from "../assets/LBlog1.jpg";
import LBlog2 from "../assets/LBlog2.jpg";

const LastBlog = () => {
  return (
    <div className="bg-[#f4f4f4] px-4 md:px-20 py-8 mb-8">
      <h1 className="py-4 justify-center flex text-3xl font-bold">
        Last Blog Posts
      </h1>
      <div className="grid md:grid-cols-2 gap-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={LBlog1} alt="" className="w-full h-full object-cover" />
          <div>
            <h2 className="text-[#282828] font-bold text-3xl mb-6">
              How to steep tea like a pro
            </h2>
            <p className="text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.
            </p>
            <button className="btn-light mt-11">Read More</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={LBlog2} alt="" className="w-full h-full object-cover" />
          <div>
            <h2 className="text-[#282828] font-bold text-3xl mb-6">
              All about tea aromas
            </h2>
            <p className="text-base  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.
            </p>
            <button className="btn-light mt-11">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBlog;

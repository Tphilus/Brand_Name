import React from "react";
import {
  MdOutlineLocalCafe,
  MdOutlineRedeem,
  MdOutlineLocalShipping,
  MdOutlineSell,
} from "react-icons/md";

const LearnMore = () => {
  return (
    <div className="bg-[#f4f4f4] mt-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 px-5 md:px-20">
        <div className="flex mt-2">
          <MdOutlineLocalCafe size={20} className="mr-2" />
          <h3>450+ KIND OF LOOSEF TEA</h3>
        </div>
        <div className="flex mt-2">
          <MdOutlineRedeem size={20} className="mr-2" />
          <h3>CERTIFICATED ORGANIC TEAS</h3>
        </div>
        <div className="flex mt-2">
          <MdOutlineLocalShipping size={20} className="mr-2" />
          <h3>FREE DELIVERY</h3>
        </div>
        <div className="flex mt-2">
          <MdOutlineSell size={20} className="mr-2" />
          <h3>SAMPLE FOR ALL TEAS</h3>
        </div>
      </div>

      <div className="flex mt-10 justify-center">
        <button className="btn-light">Learn More</button>
      </div>
    </div>
  );
};

export default LearnMore;

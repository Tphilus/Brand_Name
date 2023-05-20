import React from "react";
import OurCollCard from "../collections/OurCollCard";
// import img1 from "../../assets/Image1.jpg";
import OurProduct from "./OurCollectionProduct";

const OurCollection = () => {
  return (
    <div className="px-5 md:px-20 mt-10 mb-4">
      <h1 className="text-[#282828] font-bold justify-center flex text-3xl mb-6">
        Our Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full gap-6 ">
        {OurProduct.map((val, index) => {
          return (
            <OurCollCard key={index} imgURL={val.imgURL} name={val.name} />
          );
        })}
      </div>
    </div>
  );
};

export default OurCollection;

import React from "react";

const OurCollCard = (props) => {
  return (
    <div className="">
      <div>
        <img src={props.imgURL} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="mt-4 justify-center flex uppercase">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default OurCollCard;

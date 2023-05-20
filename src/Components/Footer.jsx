import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:px-20">
        <div>
          <h2 className="font-semibold">Collections</h2>
          <div className="flex flex-col">
            <Link className="mt-2">Black teas</Link>
            <Link className="mt-2">Green teas</Link>
            <Link className="mt-2">White teas</Link>
            <Link className="mt-2">Herbal teas</Link>
            <Link className="mt-2">Matcha</Link>
            <Link className="mt-2">Chai</Link>
            <Link className="mt-2">Oolong</Link>
            <Link>Rooibos</Link>
            <Link>Teaware</Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Learn</h2>
          <div className="flex flex-col">
            <Link>About us</Link>
            <Link>About our teas </Link>
            <Link>Tea academy</Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Customer Service</h2>
          <div className="flex flex-col">
            <Link>Ordering and payment </Link>
            <Link>Delivery</Link>
            <Link>Privacy and policy </Link>
            <Link>Terms & Conditions</Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Contact us</h2>
          <div>
            <span className="flex ">
              <GoLocation size={20} className="mr-2" />
              <p>
                3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence Iran
              </p>
            </span>

            <span className="flex items-center">
              <AiOutlineMail size={20} className="mr-2" />
              <p>Email: amoopur@gmail.com</p>
            </span>
            <span className="flex items-center">
              <AiOutlinePhone size={20} className="mr-2" />
              <p>Tel: +98 9173038406</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

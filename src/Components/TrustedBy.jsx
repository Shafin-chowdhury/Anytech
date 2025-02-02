
import React from "react";
import logo1 from "../assets/icons/icons/easy-banking/logo1.png";
import logo2 from "../assets/icons/icons/easy-banking/logo2.png";
import logo3 from "../assets/icons/icons/easy-banking/logo3.png";
import logo4 from "../assets/icons/icons/easy-banking/logo4.jpg";
import logo5 from "../assets/icons/icons/easy-banking/logo5.png";
import logo6 from "../assets/icons/icons/easy-banking/6.png";
import pinganBank from "../assets/icons/icons/easy-banking/logo7.png";
import postalSavings from "../assets/icons/icons/easy-banking/8.png";
import sea from "../assets/icons/icons/easy-banking/9.png";
import shandongCoop from "../assets/icons/icons/easy-banking/10.png";
import vpBank from "../assets/icons/icons/easy-banking/11.png";
import xiamenBank from "../assets/icons/icons/easy-banking/12.png";
import xwBank from "../assets/icons/icons/easy-banking/13.png";
import spdBank from "../assets/icons/icons/easy-banking/14.png";
import ccs from "../assets/icons/icons/easy-banking/15.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  pinganBank,
  postalSavings,
  sea,
  shandongCoop,
  vpBank,
  xiamenBank,
  xwBank,
  spdBank,
  ccs,
];

const TrustedBy = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-16 text-center">
      <h3 className="text-sm uppercase text-blue-500 font-semibold mb-4">
        Trusted by the Best
      </h3>
      <div className="flex justify-center space-x-8 text-6xl font-bold text-blue-700">
        <div>
          <span>&gt;20</span>
          <p className="text-sm font-normal text-gray-500">Years of Experience</p>
        </div>
        <div>
          <span>40+</span>
          <p className="text-sm font-normal text-gray-500">Financial Institutions</p>
        </div>
        <div>
          <span>&gt;200m</span>
          <p className="text-sm font-normal text-gray-500">Customers Each</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-6">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Bank Logo" className="h-10 mx-auto" />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;

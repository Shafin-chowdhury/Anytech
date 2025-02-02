import React from "react";
import { Link } from "react-router-dom";
import Background2 from "../assets/background/backgrounds/WaveLinesDesktop2.svg"; 


//  

const Footer = () => {
  return (
    <footer className="w-full  mt-20">
      {/* Gradient Background Section */}
      <div className="relative bg-gradient-to-r from-blue-600 bg-[#002144] py-0 px-5 text-center text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 bg-[#002144]  opacity-60 transform skew-y-6">
            <img 
                    src={Background2} 
                    alt="background image" 
                    className="absolute top-0 left-0 w-full bg-blue-700 h-full object-cover z-20"
                  /> 
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">Legacy no longer</h2>
          <p className="mt-2 text-lg">Talk to us to find out how we can transform your organisation for the future</p>
          {/* <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
            Contact Us ›
          </button> */}

<div className="flex items-center justify-center space-x-8">
      <Link to="/contact">
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
          Contact Us →
        </button>
      </Link>
    </div>
        </div>
      </div>

      
      <div className="bg-[#002144] py-6 text-white text-center">
        <nav className="mb-4 flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:underline text-blue-300">Our Solutions   |</a>
          <a href="#" className="hover:underline text-blue-300">AnyCaaS</a>
          <a href="#" className="hover:underline text-blue-300">AnyBaaS</a>
          <a href="#" className="hover:underline text-blue-300">AnyPaaS</a>
        </nav>
        </div>
        <div className="bg-black  text-white text-center"> 
        <p className="text-xs  text-gray-400">© 2023 All rights reserved. Any Technology Pte Ltd.</p>
        <a href="#" className="text-xs text-blue-300 hover:underline">Privacy Policy</a>
        </div>
       
      
    </footer>
  );
};

export default Footer;

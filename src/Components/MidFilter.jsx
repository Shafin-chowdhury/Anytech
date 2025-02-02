
import React from 'react';
import Hero from '../assets/background/backgrounds/hero.avif'
import Banking from '../assets/icons/icons/banking.png'
import Graph from '../assets/icons/icons/graph.png'
import c_payment from '../assets/icons/icons/c_payment.webp'
import Background2 from '../assets/background/backgrounds/WaveLinesDesktop2.svg'


const MidFilter = () => {
  return (
    <div className="flex justify-center items-center py-20 px-10 bg-white">
      <div className="grid grid-cols-2 gap-12 max-w-7xl items-center">

       
        <div>
          <h4 className="text-xl font-bold uppercase text-blue-600 tracking-widest">
            Powering the Future of Finance
          </h4>
          <h2 className="text-7xl font-bold text-gray-700  mt-3">
            Uncovering new
            ways to delight 
            customers
          </h2>
          <p className="mt-6 text-lg text-gray-700 font-semibold">
            <span className="font-bold">AnyTech</span> is revolutionizing financial technology by introducing 
            innovative and real-time transaction account processing capabilities, 
            specifically designed for retail financial services.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Our modern approach surpasses traditional banking and card processing 
            systems, empowering you with the most advanced technology for lasting success.
          </p>
        </div>

        {/* Right Section - Image with Design Elements */}
        <div className="relative ">
          {/* Background image is now above the hero image */}
          <img 
            src={Background2} 
            alt="background image" 
            className="absolute  w-[600px] h-[700px] object-cover z-20 Background2 "
          />

          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg transform rotate-12"></div>

          {/* Main Image */}
          <img 
            src={Hero} 
            alt="Finance Technology" 
            className="w-[520px] h-[600px] relative shadow-lg rounded-xl"
          />

          {/* Floating Icons */}
          <div className="absolute top-10 right-20 bg-white p-2 rounded-full shadow-lg">
            <img src={Banking} alt="Banking" className="w-10 h-10" />
          </div>
          <div className="absolute bottom-10 left-5 bg-white p-2 rounded-full shadow-lg">
            <img src={Graph} alt="Graph" className="w-10 h-10" />
          </div>
          <div className="absolute top-1/2 left-[-20px] bg-white p-2 rounded-full shadow-lg">
            <img src={c_payment} alt="Card Payment" className="w-10 h-10" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default MidFilter;




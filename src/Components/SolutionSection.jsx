import React from 'react';
import { IoMdShare } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

const SolutionSection = () => {
  return (
    <div className="flex justify-center items-center py-20 px-10 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl ">





        {/* Card 1: Full-suite solutions */}
        <div className="bg-blue-50 p-14 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className='absolute  bg-blue-200 p-4 rounded-full shadow-lg'>
        <IoMdShare  className="text-2xl " />   
        </div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4 mt-16">Full-suite solutions</h3>
          <p className="text-lg text-gray-600">
            Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.
          </p>
        </div>






        {/* Card 2: Simplify the complex */}
        <div className="bg-blue-50 p-14 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className='absolute  bg-green-100 p-4 rounded-full shadow-lg'>
        <FaLightbulb  className="text-2xl " />    
        </div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4 mt-16">Simplify the complex</h3>
          <p className="text-lg text-gray-600">
            Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.
          </p>
        </div>





        {/* Card 3: Cutting-edge tech */}
        <div className="bg-blue-50 p-14 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"> 
        <div className='absolute  bg-red-100 p-4 rounded-full shadow-lg'>
        <FaCogs  className="text-2xl " />    
        </div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4 mt-16">Cutting-edge tech</h3>
          <p className="text-lg text-gray-600">
            We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;

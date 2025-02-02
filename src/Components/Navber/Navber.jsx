import React from "react";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="w-full bg-gradient-to-r from-blue-800 to-blue-400 p-4 shadow-md">
      <div className="container  mx-auto flex items-center justify-between px-4 md:px-16 lg:px-24 py-4">
        
        
        <div className="text-3xl font-bold text-white">ANYTECH</div>

        
        <ul className="flex space-x-12 text-white   text-lg">
          
          
          <li className="relative group ">
            <button className="hover:opacity-80 ">Solutions ▼</button>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-700 rounded-lg shadow-lg w-44">
              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                  AnyCaaS
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                AnyBaaS
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                AnyPaaS
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" className="hover:opacity-80 border-b-2 border-transparent hover:border-gray-100 px-2 pb-1 transition-all duration-300">Services</a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 border-b-2 border-transparent hover:border-gray-100 px-2 pb-1 transition-all duration-300">About Us</a>
          </li>

          <li className="relative group  space-x-6 ">
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-full text-gray-100 transition">
            
            <FaGlobe />
           <span> EN ▼</span>
            
            </button>
          
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-700 rounded-lg shadow-lg w-44">
              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                  EN(English)
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                TH(Thai)
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                ID(Bahasa Indonesia)
                </a>
              </li>

              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                TW(Traditional Chiness)
                </a>
              </li>

            </ul>
          </li>


        </ul>

        {/* Language and Contact Button */}
        <div className="flex items-center space-x-8">
      <Link to="/contact">
        <button className="px-8 py-4 font-bold text-xl border rounded-lg text-white hover:bg-white hover:text-blue-600 transition">
          Contact Us →
        </button>
      </Link>
    </div>

      </div>
    </nav>
  );
};

export default Navbar;





import React, { useState } from "react";
import image1 from "../../src/assets/icons/icons/1.webp";
import image2 from "../../src/assets/icons/icons/2.jpg";
import image3 from "../../src/assets/icons/icons/3.jpg";
import image4 from "../../src/assets/icons/icons/4.webp";

const options = [
  {
    id: "customer-focused",
    title: "Customer Focused",
    desc: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric platform. Experience the advantages of integrated retail financial services.",
      description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing oppertunities",
    image: image1,
  },
  {
    id: "agile-adaptive",
    title: "Agile & Adaptive",
    desc:"Agile and adaptable for growth",
    description:
      "We create solutions that grow with your business, offering flexibility and scalability to meet evolving customer demands.",
      description2 : "optimise your offerings to unlock new revenue streams and deliver and extraordinary customer experience, with digitally designed core banking , paymen processing and leading capabilities",
    image: image2,
  },
  {
    id: "compliance-ready",
    title: "Compliance Ready",
    desc:"Manage compliance with ease",
    description:
      "Our products align with the latest financial regulations to ensure seamless compliance and reduce operational risks.",
      description2: "Transform your complience stratergy with flexible and diversed policy rules, powered by cutting-edge technology that is designed  for  seamless integration with core banking and card paynent systems.",
    image: image3,
  },
  {
    id: "secure-safe",
    title: "Highly Secure & Safe",
    desc:"Highly Secure & Safe",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      description2: "JOin over 40 esteemed fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastration.",
    image: image4,
  },
];

const TechnologySection = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="bg-gray-50 py-20 px-10">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
        TECHNOLOGY BUILT FOR YOU
      </h2>
      <h1 className="text-5xl font-bold text-gray-800 text-center mb-12">
        The Future of Finance
      </h1>

     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12 ">
        {options.map((option) => (
          <div
            key={option.id}
            className={`p-4 border-2 rounded-xl cursor-pointer text-center transition-all duration-300 ${
              selectedOption.id === option.id
                ? "border-blue-600 bg-blue-200 shadow-lg"
                : "border-gray-300 hover:border-blue-600"
            }`}
            onClick={() => setSelectedOption(option)}
          >
            <h3 className="text-xl font-bold text-gray-800">{option.title}</h3>
          </div>
        ))}
      </div>

     


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto p-16 border-2 rounded-xl shadow-lg ">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl pb-4 font-semibold text-blue-600">{selectedOption.title}</h3>
          <p className="text-4xl pb-4  font-semibold text-gray-900  mt-4">{selectedOption.desc}</p>
          <p className="text-lg font-semibold text-gray-900 mt-4">{selectedOption.description}</p>
          <p className="text-lg text-gray-500 mt-4">{selectedOption.description2}</p>
        </div>
        <div className="flex justify-center ">
          <img
            src={selectedOption.image}
            alt={selectedOption.title}
            className="w-full  max-w-sm h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;

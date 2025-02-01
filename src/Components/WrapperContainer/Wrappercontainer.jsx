// import React from 'react'

// const Wrappercontainer = ({navHead, children}) => {
//   return (
//     <div className= {!navHead ? 
//              "container mx-auto px-4 bg-wrapperBg h-full w-full bg-cover bg-no-repeat bg-center rouned-xl translate-y-36 drop-shadow-2xl  "}> {children}</div>
//              :"container mx-auto px-4"
//     }
//     >
      
//     {children}
//     </div>
//   )
// }

// export default Wrappercontainer


import React from 'react';

const WrapperContainer = ({ navHead, children }) => {
  return (
    <div
      className={`container mx-auto px-4 ${
        !navHead
          ? 'bg-wrapperBg h-full w-full bg-cover bg-no-repeat bg-center rounded-xl drop-shadow-2xl'
          : ''
      }`}
    >
      {children}
    </div>
  );
};

export default WrapperContainer;



import React from 'react';

const WrapperContainer = ({ navHead, children }) => {
  return (
    <div
      className={`mx-auto ${
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


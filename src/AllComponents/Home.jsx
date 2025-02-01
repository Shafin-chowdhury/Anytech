import React from 'react';
import Navber from '../Components/Navber/Navber';
import Header from '../Components/Header/Header';
import WrapperContainer from '../Components/WrapperContainer/Wrappercontainer';
import MidFilter from '../Components/MidFilter';

const Home = () => {
  return (
    <div>
     
      <WrapperContainer navHead>
        <Navber />
        <Header />
        </WrapperContainer>

        <div className='bg-gray-100 w-full'>
          <WrapperContainer>
            <MidFilter />
          </WrapperContainer>
        </div>
    </div>
  );
};

export default Home;

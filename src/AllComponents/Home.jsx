import React from 'react';
// import Navber from '../Components/Navber/Navber';
import Header from '../Components/Header/Header';
import WrapperContainer from '../Components/WrapperContainer/Wrappercontainer';
import MidFilter from '../Components/MidFilter';
import SolutionSection from '../Components/SolutionSection';
import TechnologySection from '../Components/TechnologySection';
import TrustedBy from '../Components/TrustedBy';
import Footer from '../Components/Footer';



const Home = () => {
  return (
    <div>
     
      <WrapperContainer navHead>
        {/* <Navber  /> */}
        
        <Header />
        </WrapperContainer>

        <div className='bg-gray-100 w-full'>
          
            <MidFilter />
            <SolutionSection />
            <TechnologySection />
            <TrustedBy />
            <Footer />
          
        </div>
    </div>
  );
};

export default Home;

import React from 'react'
 import Hero from "../../assets/hero.avif";
//  import Background1 from "../../assets/background/backgrounds/WaveLinesDesktop1.svg"

const Header = () => {
  return (
    <div className='mx-auto pt-16 bg-blue-500'>
      <div className='grid grid-cols-2 justify-items-center items-center'>
        <div className='w-4/5 pl-24'>

        {/* <img src={Background1} alt='background image' /> */}

        <h1 className='text-8xl font-semibold leading-tight'>
            Embrace the <span className="inline-block whitespace-nowrap">future of finance</span>
          </h1>

          <div className='mt-4 text-lg font-semibold'>
            Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
          </div>

          <div>
            <button className='mt-4 pushable flex items-center relative group'>
              <span className='front'>Reach out to us</span>
              
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" 
              className=" w-2 h-3 space-x-6"  > 
              <path d="M5.25 4.39844L2.0625 7.58594C1.82812 7.82031 1.47656 7.82031 1.26562
               7.58594L0.726562 7.07031C0.515625 6.83594 0.515625 6.48438 0.726562 6.27344L3
                4.02344L0.726562 1.75C0.515625 1.53906 0.515625 1.1875 0.726562 0.953125L1.26562
                 0.414062C1.47656 0.203125 1.82812 0.203125 2.0625 0.414062L5.25 3.60156C5.46094
                  3.83594 5.46094 4.1875 5.25 4.39844Z" fill="#ffffff"/>
</svg>
            </button>
          </div>
        </div>

        <div className='flex mt-2'>
          <img className='h-[500px]  w-full  bg-no-repeat bg-center relative z-10 header '  src={Hero} alt='hero image' />
        </div>
      </div>
    </div>
  )
}

export default Header;


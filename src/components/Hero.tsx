import React from 'react';
import mapsImage from '../assets/icons/maps.png';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#6061F7] mt-[30px] max-w-[1268px] mx-auto rounded-[24px] max-sm:mx-4 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <h1 className="md:text-[64px] text-[24px] font-normal mb-[20px] md:leading-[80px] md:mt-[146px] mt-[20px] max-w-[830px] mx-auto">
            Access Your Pay Before
            Payday with EarlyPay
          </h1>
          
          <p className="text-[12px] md:mb-12 mb-4 leading-[24px]  text-normal font-poppins max-w-[448px] mx-auto">
          Get up to $5000 of your earned wages instantly. No hidden fees, no interest.
          </p>

          <button className=" border-white border-[1px] text-white hover:bg-white hover:text-[#6061F7] font-normal py-4 px-24 rounded-full text-[20px]  shadow-lg">
            Get Started
          </button>

          <div className="md:mt-[84px] mt-[24px] md:mb-[50px] mb-[20px] md:ml-[90px] mx-auto">
            <img 
              src={mapsImage} 
              alt="Maps" 
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

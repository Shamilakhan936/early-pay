import React from 'react';

const Community: React.FC = () => {
  return (
    <section className="md:mt-[60px] mt-[20px] mb-[30px]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="md:text-[45px] text-[24px] font-normal text-[#21242C] mb-4">
          Ready to Join Our Community?
        </h2>
        
        <p className="md:text-[25px] text-[18px] text-[#7B899D] mb-10  mx-auto">
        Experience financial freedom with instant access to your earned wages.
        </p>
        
        <button className="bg-[#6165FF] max-sm:w-full hover:bg-primary-600 text-white font-regular px-6 py-3 rounded-[7px] text-[22px] transition-colors duration-200 shadow-lg hover:shadow-xl">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default Community;

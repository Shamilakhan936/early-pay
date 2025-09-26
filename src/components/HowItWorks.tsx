import React from 'react';
import howWorksIcon from '../assets/icons/how.svg';
import profileIcon from '../assets/icons/profile.svg';
import identityIcon from '../assets/icons/confirm.svg';
import bankIcon from '../assets/icons/bank.svg';  
import dollarIcon from '../assets/icons/dollar.svg';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your account in under 2 minutes',
      color: 'bg-primary-600',
      icon: profileIcon
    },
    {
      number: '02',
      title: 'Verify Identity',
      description: ' Complete our secure KYC process.',
      color: 'bg-primary-600',
      icon: identityIcon
    },
    {
      number: '03',
      title: 'Connect bank Account',
      description: 'Link your bank account safely.',
      color: 'bg-primary-600',
      icon: bankIcon
    },
    {
      number: '04',
      title: ' Access Wage',
      description: 'Get your earned money instantly.',
      color: 'bg-primary-600',
      icon: dollarIcon
    }
  ];

  return (
    <section className=" ">
      <div className="max-w-[1268px]  mx-auto ">
        <div className="text-center md:mt-14 mt-5 md:mb-20 mb-10">
          <h2 className="text-[40px] font-normal text-black mb-0">
            How it Works
          </h2>
          <p className="text-[18px] text-black  mx-auto leading-[28px]">
          Get paid for the work you’ve done, anytime. Simply request your earned wages and have them in your account immediately.
          </p>
        </div>

        <div className="  mx-auto md:pb-12 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-4 max-sm:mx-4">
            <div className="">
              <div className="md:rounded-[12px] shadow-lg h-80 overflow-hidden bg-[#F7F6FD]" >
                <div className="p-7 pb-10 pt-5 text-center">
                  <div className="bg-white text-white w-14 h-14 mb-4 mt-4 rounded-2xl flex items-center justify-center text-2xl mx-auto">
                    <img src={steps[0].icon} alt={steps[0].title} className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="h-px bg-[#979797]/[0.30] w-[100%]"></div>
                
                <div className="p-7 pt-6 text-center">
                  <h3 className="text-[24px] font-normal text-black mb-2">
                    {steps[0].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[16px]">
                    {steps[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="md:rounded-[12px] shadow-lg h-80 overflow-hidden bg-[#F7F6FD]">
                <div className="p-7 pb-10 pt-5 text-center">
                  <div className="bg-white text-white w-14 h-14 mb-4 mt-4 rounded-2xl flex items-center justify-center text-2xl mx-auto">
                    <img src={steps[1].icon} alt={steps[1].title} className="w-6 h-6" />
                  </div>
                </div>               
                <div className="h-px bg-[#979797]/[0.30] w-[100%]"></div>                
                <div className="p-7 pt-6 text-center">
                  <h3 className="text-[24px] font-normal text-black mb-2">
                    {steps[1].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[16px]">
                    {steps[1].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="md:rounded-[12px] shadow-lg h-80 overflow-hidden bg-[#F7F6FD]">
                <div className="p-7 pb-10 pt-5 text-center">
                  <div className="bg-white text-white w-14 h-14 mb-4 mt-4 rounded-2xl flex items-center justify-center text-2xl mx-auto">
                    <img src={steps[2].icon} alt={steps[2].title} className="w-6 h-6" />
                  </div>
                </div>
                <div className="h-px bg-[#979797]/[0.30] w-[100%]"></div>
                
                <div className="p-7 pt-6 text-center">
                  <h3 className="text-[24px] font-normal text-black mb-2">
                    {steps[2].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[16px]">
                    {steps[2].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="md:rounded-[12px] shadow-lg h-80 overflow-hidden bg-[#F7F6FD]">
                <div className="p-7 pb-10 pt-5 text-center">
                  <div className="bg-white text-white w-14 h-14 mb-4 mt-4 rounded-2xl flex items-center justify-center text-2xl mx-auto">
                    <img src={steps[3].icon} alt={steps[3].title} className="w-6 h-6" />
                  </div>
                </div>
                <div className="h-px bg-[#979797]/[0.30] w-[100%]"></div>
                
                <div className="p-7 pt-6 text-center">
                  <h3 className="text-[24px] font-normal text-black mb-2">
                    {steps[3].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[16px]">
                    {steps[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

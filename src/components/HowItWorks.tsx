import React from 'react';
import howWorksIcon from '../assets/icons/how.svg';
import profileIcon from '../assets/icons/profile.svg';
import identityIcon from '../assets/icons/confirm.svg';
import bankIcon from '../assets/icons/bank.svg';  

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
      description: 'Transfer funds globally with one tap. Fast, secure, and always reliable.',
      color: 'bg-primary-600',
      icon: identityIcon
    },
    {
      number: '03',
      title: 'Connect bank Account',
      description: 'Transfer funds globally with one tap. Fast, secure, and always reliable.',
      color: 'bg-primary-600',
      icon: bankIcon
    }
  ];

  return (
    <section className=" ">
      <div className="max-w-[1268px] mt-[60px] mx-auto ">
        <div className="text-center md:mb-20 mb-10">
          <h2 className="text-[40px] font-normal text-black mb-0">
            How it Works
          </h2>
          <p className="text-[18px] text-black  mx-auto leading-[28px]">
            Built for Real Life. Trusted in Every Transaction. Your money, your terms, no friction, just precision.
          </p>
        </div>

        <div className="relative  mx-auto md:pt-[60px] md:pb-12 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 max-sm:mx-4">
            <div className="relative">
              <div className="md:rounded-[12px] shadow-lg h-80 overflow-hidden bg-[#F7F6FD]" >
                <div className="p-8 pb-6 text-center">
                  <div className="bg-primary-600 text-white w-14 h-14 mb-4 mt-4 rounded-2xl flex items-center justify-center text-2xl mx-auto">
                    <img src={steps[0].icon} alt={steps[0].title} className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="h-px bg-[#979797]/[0.30] w-[100%]"></div>
                
                <div className="p-8 pt-6 text-center">
                  <h3 className="text-[24px] font-normal text-black mb-4">
                    {steps[0].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[18px]">
                    {steps[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative transform -translate-y-12">
              <div className="md:rounded-[12px] shadow-lg h-80 overflow-hidden bg-[#F7F6FD]">
                {/* Icon Section */}
                <div className="p-8 pb-6 text-center">
                  <div className="bg-primary-600 text-white w-14 h-14 mb-4 mt-4 rounded-2xl flex items-center justify-center text-2xl mx-auto">
                    <img src={steps[1].icon} alt={steps[1].title} className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="h-px bg-[#979797]/[0.30] w-[100%]"></div>
                
                <div className="p-8 pt-6 text-center">
                  <h3 className="text-[24px] font-normal text-black mb-4">
                    {steps[1].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[18px]">
                    {steps[1].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative transform -translate-y-24">
              <div className="md:rounded-[12px] shadow-lg h-80 overflow-hidden bg-[#F7F6FD]">
                <div className="p-6 pb-6 text-center">
                  <div className="bg-primary-600 text-white w-14 h-14 mb-4 mt-4 rounded-2xl flex items-center justify-center text-2xl mx-auto">
                    <img src={steps[2].icon} alt={steps[2].title} className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="h-px bg-[#979797]/[0.30] w-[100%]"></div>
                
                <div className="p-8 pt-6 text-center">
                  <h3 className="text-[24px] font-normal text-black mb-4">
                    {steps[2].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[18px]">
                    {steps[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-8">
          <img src={howWorksIcon} alt="How it works" className="w-[66%] h-[100%] md:mt-[-120px] mt-[-80px]" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

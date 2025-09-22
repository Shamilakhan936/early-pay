import React, { useState } from 'react';
import manImage from '../assets/icons/man.png';
import phoneImage from '../assets/icons/phone.png';
import arrowManImage from '../assets/icons/arrowman.svg';
import planIcon from '../assets/icons/planIcon.svg';

const Features: React.FC = () => {
  const [selectedFrequency, setSelectedFrequency] = useState('fortnightly');
  return (
    <section className="md:py-20 bg-white">
      <div className="max-w-[1268px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 md:gap-[200px] gap-[40px] items-center">
          <div className="relative">
            <div className="relative">
              <img 
                src={manImage} 
                alt="Happy user" 
                className="w-full max-w-md rounded-2xl"
              />
              
              <div className="absolute md:top-[20.5rem] top-[14rem] md:right-[3rem] -right-[4rem] transform -translate-x-1/2 z-20">
                <img 
                  src={arrowManImage} 
                  alt="Arrow indicator" 
                  className="w-[150px] h-[150px]"
                />
              </div>
              <div className="absolute md:top-[6.5rem] top-[2rem]  md:w-[190px] w-[150px] md:left-[15.5rem] left-[11rem] bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  
                  <div>
                    <p className="md:text-[16px] text-[12px] font-normal text-[#B3B3B3]">Earned Wage</p>
                    <p className="md:text-[18px] text-[14px] font-bold text-black">$2500</p>
                  </div>
                </div>
                <div className="flex items-center mt-[-10px] text-[#2AB22A] font-medium md:text-[16px] text-[12px]">
                  <span className="mr-2">✓</span>
                  <span>Approved</span>
                </div>
                <div className="mt-2 md:text-[16px] text-[12px] text-[#B3B3B3]">
                  <p>Settlement date</p>
                  <p className="font-medium text-black md:text-[14px] text-[12px]">12 Aug 2025</p>
                </div>
                <div className="mt-2 md:text-[16px] text-[12px] text-[#B3B3B3]">
                  <p>Fixed fee</p>
                  <p className="font-medium text-black md:text-[14px] text-[12px]">$10.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={phoneImage} 
                alt="Phone mockup" 
                className="md:w-80 h-auto"
              />
              
              <div className="absolute inset-0 flex flex-col items-center pt-16 px-6">
                <div className="text-center mb-[105px]">
                  <h3 className="text-[16px] font-bold text-black">
                    Repayment Plan
                  </h3>
                </div>

                <div className="bg-white rounded-[20px] p-4 pt-8 border border-black shadow-lg w-[95%] max-w-[303px]">
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-1 bg-[#6061F7] rounded-full flex-1"></div>
                      <div className="h-1 bg-gray-100 rounded-full flex-1"></div>
                      <div className="h-1 bg-gray-100 rounded-full flex-1"></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[13px] font-normal text-black mb-6">
                      When do you receive your pay?
                    </h4>
                    
                    <div className="space-y-2">
                      {/* Monthly Option */}
                      <div 
                        className={`flex items-center text-[13px] font-normal text-[#222222] p-3 rounded-[9px] cursor-pointer transition-colors ${
                          selectedFrequency === 'monthly' 
                            ? 'bg-[#6061F7]' 
                            : 'border border-[#DED8E2] hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedFrequency('monthly')}
                      >
                        <input 
                          type="radio" 
                          name="payFrequency" 
                          value="monthly"
                          checked={selectedFrequency === 'monthly'}
                          onChange={() => setSelectedFrequency('monthly')}
                          className="w-4 h-4 text-[#6061F7] focus:ring-[#6061F7] accent-[#6061F7]"
                        />
                        <label className={`ml-3 font-medium cursor-pointer ${
                          selectedFrequency === 'monthly' ? 'text-white' : 'text-gray-700'
                        }`}>
                          Monthly
                        </label>
                      </div>
                      
                      <div 
                        className={`flex items-center p-3 rounded-[9px] text-[13px] font-normal text-[#222222] cursor-pointer transition-colors ${
                          selectedFrequency === 'fortnightly' 
                            ? 'bg-[#6061F7]' 
                            : 'border border-[#DED8E2] hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedFrequency('fortnightly')}
                      >
                        <input 
                          type="radio" 
                          name="payFrequency" 
                          value="fortnightly"
                          checked={selectedFrequency === 'fortnightly'}
                          onChange={() => setSelectedFrequency('fortnightly')}
                          className="w-4 h-4 text-[#6061F7] focus:ring-[#6061F7] accent-[#6061F7]"
                        />
                        <label className={`ml-3 font-medium cursor-pointer ${
                          selectedFrequency === 'fortnightly' ? 'text-white' : 'text-gray-700'
                        }`}>
                          Fortnightly
                        </label>
                      </div>
                      
                      <div 
                        className={`flex items-center p-3 rounded-[9px] text-[13px] font-normal text-[#222222] cursor-pointer transition-colors ${
                          selectedFrequency === 'weekly' 
                            ? 'bg-[#6061F7]' 
                            : 'border border-[#DED8E2] hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedFrequency('weekly')}
                      >
                        <input 
                          type="radio" 
                          name="payFrequency" 
                          value="weekly"
                          checked={selectedFrequency === 'weekly'}
                          onChange={() => setSelectedFrequency('weekly')}
                          className="w-4 h-4 text-[#6061F7] focus:ring-[#6061F7] accent-[#6061F7]"
                        />
                        <label className={`ml-3 font-medium cursor-pointer ${
                          selectedFrequency === 'weekly' ? 'text-white' : 'text-gray-700'
                        }`}>
                          Weekly
                        </label>
                      </div>
                    </div>
                    
                      <div className="mt-4 flex items-center text-[11px] text-[#222222]">
                        <img src={planIcon} alt="Plan icon" className="mr-2 w-4 h-4" />
                        <span>Billy detected a fortnight pay cycle</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

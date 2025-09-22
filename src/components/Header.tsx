import React from 'react';
import logo from '../assets/icons/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="w-full mt-[40px]">
      <div className="mx-auto max-w-[1268px] bg-white rounded-full px-4 p-[10px] sm:px-6 lg:px-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="EarlyPay Logo" 
              className="h-[68px] w-auto ml-[20px]"
            />
          </div>

          <nav className="hidden md:flex items-center px-[30px]  ml-[70px] bg-[#6061F7]/[0.08] rounded-full h-[48px] ">
            <a href="#" className="text-[#102A53] text-[18px] hover:text-[#6061F7] font-medium px-4 my-2 rounded-full duration-200">
                Home
              </a>
            <a href="#" className="text-[#102A53] text-[18px] hover:text-[#6061F7] font-medium px-4 my-5 rounded-full  duration-200">
              Consumer
            </a>
            <a href="#" className="text-[#102A53] text-[18px] hover:text-[#6061F7] font-medium px-4 my-5 rounded-full  duration-200">
              Business
            </a>
            <a href="#" className="text-[#102A53] text-[18px] hover:text-[#6061F7] font-medium px-4 my-5 rounded-full  duration-200">
              FAQs
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-black text-[14px] hover:text-[#6061F7] font-medium px-6 py-[13px] rounded-full border border-black border-[1px] hover:border-[#6061F7] transition-all duration-200">
              Get Started
            </button>
            <button className="bg-[#6061F7] text-[14px] text-white px-6 py-[13px] rounded-full font-medium border border-black transition-colors duration-200">
              Contact us →
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

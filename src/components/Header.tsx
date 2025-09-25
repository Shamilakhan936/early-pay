import React, { useState } from 'react';
import logo from '../assets/icons/logo.svg';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
     <header className="w-full mt-[40px] max-sm:px-4 relative">
      <div className="mx-auto max-w-[1268px] bg-white rounded-full px-4 p-[10px] sm:px-6 lg:px-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="EarlyPay Logo" 
              className="h-[50px] w-auto ml-[20px]"
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
            Employer
            </a>
            <a href="#" className="text-[#102A53] text-[18px] hover:text-[#6061F7] font-medium px-4 my-5 rounded-full  duration-200">
              FAQs
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-black text-[14px] hover:text-[#6061F7] font-medium px-6 py-[13px] rounded-full border border-black hover:border-[#6061F7] transition-all duration-200">
              Get Started
            </button>
            <button className="bg-[#6061F7] text-[14px] text-white px-6 py-[13px] rounded-full font-medium border border-black transition-colors duration-200">
              Contact us →
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-[#102A53] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#102A53] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#102A53] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 bg-white shadow-lg rounded-b-2xl z-50">
            <nav className="flex flex-col py-6 px-6 gap-2">
              <a 
                href="#" 
                className="text-[#102A53] text-[18px] hover:text-[#6061F7] font-medium py-3 px-4 md:rounded-full duration-200 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-[#102A53] text-[18px] hover:text-[#6061F7] font-medium py-3 px-4 md:rounded-full duration-200 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                Consumer
              </a>
              <a 
                href="#" 
                className="text-[#102A53] text-[18px] hover:text-[#6061F7] font-medium py-3 px-4 md:rounded-full duration-200 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                Business
              </a>
              <a 
                href="#" 
                className="text-[#102A53] text-[18px] hover:text-[#6061F7] font-medium py-3 px-4 md:rounded-full duration-200 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                FAQs
              </a>
              
              <div className="flex flex-col space-y-3 mt-4 pt-4">
                <button 
                  className="text-black text-[14px] hover:text-[#6061F7] font-medium px-6 py-[13px] rounded-full border border-black hover:border-[#6061F7] transition-all duration-200"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </button>
                <button 
                  className="bg-[#6061F7] text-[14px] text-white px-6 py-[13px] rounded-full font-medium border border-black transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Contact us →
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

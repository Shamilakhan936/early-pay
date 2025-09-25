import React, { useState } from 'react';
import phoneImage from '../assets/icons/phone.png';
import likeIcon from '../assets/icons/like.svg';
import instantIcon from '../assets/icons/instant.svg';
import moneyIcon from '../assets/icons/money.svg';
import backIcon from '../assets/icons/backIcon.svg';
import groceriesIcon from '../assets/icons/Groceries.svg';
import transportationIcon from '../assets/icons/transportationIcon.svg';
import utilitiesIcon from '../assets/icons/utilitiesIcon.svg';
import insuranceIcon from '../assets/icons/insuranceIcon.svg';
import rentIcon from '../assets/icons/rentIcon.svg';
import internetIcon from '../assets/icons/internetIcon.svg';
import infoIcon from '../assets/icons/information.svg';
import doubleLineIcon from '../assets/icons/double-line.svg';
interface BillItem {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
  amount: number;
}

const Community: React.FC = () => {
  const [email, setEmail] = useState('');
  const [bills, setBills] = useState<BillItem[]>([
    { id: 'groceries', name: 'Groceries', icon: groceriesIcon, isActive: true, amount: 450 },
    { id: 'transportation', name: 'Transportation', icon: transportationIcon, isActive: true, amount: 250 },
    { id: 'utilities', name: 'Utilities', icon: utilitiesIcon, isActive: true, amount: 150 },
    { id: 'car_payment', name: 'Car payment', icon: transportationIcon, isActive: true, amount: 350 },
    { id: 'car_insurance', name: 'Car Insurance', icon: insuranceIcon, isActive: false, amount: 150 },
    { id: 'rent', name: 'Rent', icon: rentIcon, isActive: true, amount: 750 },
    { id: 'internet', name: 'Internet', icon: internetIcon, isActive: false, amount: 390 }
  ]);

  const toggleBill = (id: string) => {
    setBills(bills.map(bill => 
      bill.id === id ? { ...bill, isActive: !bill.isActive } : bill
    ));
  };

  const adjustAmount = (id: string, increment: boolean) => {
    setBills(bills.map(bill => 
      bill.id === id ? { 
        ...bill, 
        amount: Math.max(0, bill.amount + (increment ? 10 : -10))
      } : bill
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="md:py-20 py-10 bg-[#F9F9F9]  mx-auto rounded-[20px] ">
      <div className="max-w-[1268px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-[0px] gap-[20px] items-center">
        <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <img 
                src={phoneImage} 
                alt="Phone mockup" 
                className="md:w-80 h-auto"
              />
              
              <div className="absolute inset-0 flex flex-col items-center pt-16 px-6">
                <div className="flex items-center justify-between w-full max-w-[200px] mb-10 md:mb-[70px]">
                  <img src={backIcon} alt="Back icon" className="w-5 h-5 text-gray-600" />
                  <h3 className="text-[16px] font-semibold text-black">Bills To Pay</h3>
                  <div></div>
                </div>

                <div className="bg-white rounded-[24px] w-[93%] py-7 px-6 shadow-lg max-w-[300px]">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-8 h-8 bg-[#6061F7] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white  text-lg">$</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-black font-bold text-[16px]">Cashed out</p>
                      <div className="flex items-center">
                        <img src={doubleLineIcon} alt="Dollar" className="w-5 h-6" />
                        <p className="text-black font-medium text-[14px] mt-1">2000</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-black font-medium text-lg mb-4">Your Repayments</h3>
                    
                    <div className="relative">
                      
                      <div className="relative flex items-start gap-3  mb-5">
                        <div className="w-4 h-4 bg-[#6061F7] rounded-full mt-1 flex items-center justify-center z-10 relative">
                        </div>
                        <div className=" flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <img src={doubleLineIcon} alt="Dollar" className="w-5 h-5" />
                              <span className="text-black font-bold text-base mt-1">1050</span>
                            </div>
                            <span className="text-[#6061F7] text-base">Incl.5% fee</span>
                          </div>
                          <p className="text-black text-base">In 4 days - Mon 23, Sep</p>
                        </div>
                      </div>
                      
                      <div className="relative flex items-start gap-3">
                        <div className="w-4 h-4 bg-[#6061F7] rounded-full mt-1 flex items-center justify-center z-10 relative">
                         
                        </div>
                        <div className=" flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <img src={doubleLineIcon} alt="Dollar" className="w-5 h-5" />
                              <span className="text-black font-bold text-sm mt-1">1050</span>
                            </div>
                            <span className="text-[#6061F7] text-base">Incl.5% fee</span>
                           
                          </div>
                          <div className="flex items-center gap-1">

                          <p className="text-black text-base">Tue 31, Sep</p>
                         <div>
                          <img src={infoIcon} alt="info icon" className="w-4 h-4" />
                         </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 bg-[#FAFAFA] rounded-[16px] p-4">
                    <span className="text-black font-medium">Total</span>
                    <div className="flex items-center">
                      <img src={doubleLineIcon} alt="Dollar" className="w-6 h-6" />
                      <span className="text-black font-bold text-lg mt-1">2100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="md:text-[42px] text-[24px]  font-medium text-black max-w-[705px !important] md:leading-[57px] mb-[45px]">
              Break free from payday cycles.Tap into your earned wages anytime.
            </h2>
            
            <div className="space-y-6 md:mb-8">
              <div className="flex items-start space-x-4">
                <div className=" flex items-center justify-center flex-shrink-0 mt-1">
                  <img src={instantIcon} alt="Instant access icon" className="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[18px] text-black mb-1">Instant Access</h3>
                  <p className="text-black text-[18px]">Get your earned wages in minutes, not days</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <img src={likeIcon} alt="Security icon" className="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[18px] text-black mb-1">Bank - Level Security</h3>
                  <p className="text-[18px] text-black">Your data is protected with enterprise-grade encryption</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className=" flex items-center justify-center flex-shrink-0 mt-1">
                  <img src={moneyIcon} alt="Money icon" className="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[18px] text-black mb-1">No Hidden Fees</h3>
                  <p className="text-[18px] text-black">Transparent pricing with no surprise charges</p>
                </div>
              </div>
            </div>
            
            <button className="bg-[#6061F7] text-white px-8 py-3 rounded-[20px] md:mt-[45px] mt-[20px] font-bold text-[20px] transition-colors">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Community;

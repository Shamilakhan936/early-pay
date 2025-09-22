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
    <section className="py-20 bg-[#F9F9F9] max-w-[1268px] mx-auto rounded-[20px] ">
      <div className="max-w-[1268px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-[200px] items-center">
          <div>
            <h2 className="text-[42px]  font-medium text-black max-w-[705px !important] leading-[57px] mb-[45px]">
              Break free from payday cycles.Tap into your earned wages anytime.
            </h2>
            
            <div className="space-y-6 mb-8">
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
            
            <button className="bg-[#6061F7] text-white px-8 py-3 rounded-[20px] mt-[45px] font-bold text-[20px] transition-colors">
              Get Started
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={phoneImage} 
                alt="Phone mockup" 
                className="w-80 h-auto"
              />
              
              <div className="absolute inset-0 flex flex-col items-center pt-16 px-6">
                <div className="flex items-center justify-between w-full max-w-[200px] mb-8">
                  <img src={backIcon} alt="Back icon" className="w-5 h-5 text-gray-600" />
                  <h3 className="text-[16px] font-semibold text-black">Bills To Pay</h3>
                  <div></div>
                </div>

                <div className="bg-white rounded-[12px] w-[93%] mt-[105px] p-2 shadow-lg w-full max-w-[300px] border border-black">
                  <div className="space-y-3">
                    {bills.map((bill) => (
                      <div key={bill.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {/* Toggle Slider */}
                          <div 
                            className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-200 flex items-center ${
                              bill.isActive ? 'bg-[#6165FF]' : 'bg-gray-300'
                            }`}
                            onClick={() => toggleBill(bill.id)}
                          >
                            <div 
                              className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                                bill.isActive ? 'translate-x-5' : 'translate-x-1'
                              }`}
                            />
                          </div>
                          
                          <span className="font-normal text-black text-[12px]">
                            {bill.icon.endsWith('.svg') ? (
                              <img src={bill.icon} alt={`${bill.name} icon`} className="w-5 h-5 mr-[5px] inline-block" />
                            ) : (
                              <span className="text-sm">{bill.icon}</span>
                            )}
                            {' '}{bill.name}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button 
                            className={` flex items-center justify-center text-[10px] font-bold ${
                              bill.isActive ? 'text-black ' : ''
                            }`}
                            onClick={() => adjustAmount(bill.id, false)}
                            disabled={!bill.isActive}
                          >
                            -
                          </button>
                          
                          <span className={`font-bold text-[10px] ${bill.isActive ? 'text-black' : 'text-gray-400'}`}>
                            ${bill.amount}
                          </span>
                          
                          <button 
                            className={` flex items-center justify-center text-[10px] font-bold ${
                              bill.isActive ? 'text-black ' : ''
                            }`}
                            onClick={() => adjustAmount(bill.id, true)}
                            disabled={!bill.isActive}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
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

export default Community;

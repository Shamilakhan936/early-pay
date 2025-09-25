import React from 'react';
import logo from "../assets/icons/earlyPay.png"

const Footer: React.FC = () => {
  const footerLinks = {
   
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Eligibility', href: '#' },
      { name: 'Security', href: '#' }
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact Us', href: '#' }
    ],
    Legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  return (
    <footer className="bg-white border-t border-[#D3D7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-[20px]">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="" className='w-[55px] h-[40px]' />
            <p className="text-[#7B899D] mt-[10px] text-[14px] leading-relaxed">
            Access your earned wages instantly with transparent pricing and bank-level security.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[16px] text-[#21242C] mb-3">Company</h3>
            <ul className="space-y-[10px]">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#7B899D]  text-[14px]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[16px] text-[#21242C] mb-3">Resources</h3>
            <ul className="space-y-[10px]">
              {footerLinks.Support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#7B899D]  text-[14px]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[16px] text-[#21242C] mb-3">Legal</h3>
            <ul className="space-y-[10px]">
              {footerLinks.Legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#7B899D]  text-[14px]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D3D7DE] pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-[#7B899D] text-[14px]">
              © 2025 EarlyPay. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

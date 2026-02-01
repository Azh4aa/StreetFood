import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-brand-red overflow-hidden group-hover:scale-110 transition-transform">
               {/* Simplified Flag Graphic representation */}
               <div className="absolute top-0 w-full h-1/3 bg-black"></div>
               <div className="absolute bottom-0 w-full h-1/3 bg-green-700"></div>
               <span className="relative font-display text-brand-red text-xs z-10 font-bold tracking-tighter">STREET</span>
            </div>
            <span className="font-display text-2xl tracking-wide text-white group-hover:text-brand-red transition-colors">
              STREET <span className="text-brand-red">FOOD</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display text-lg tracking-wider text-gray-300 hover:text-brand-red transition-colors px-3 py-2 uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://reach.link/streetfoodgroup" 
                target="_blank"
                rel="noreferrer"
                className="bg-brand-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded-none skew-x-[-12deg] transition-all hover:skew-x-0"
              >
                <span className="block skew-x-[12deg] hover:skew-x-0 font-display uppercase tracking-wider">
                  Order Now
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-dark/95 border-b border-white/10 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-brand-red hover:bg-white/5 block px-3 py-4 rounded-md text-2xl font-display uppercase tracking-widest text-center"
            >
              {link.name}
            </a>
          ))}
           <a 
              href="https://reach.link/streetfoodgroup" 
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-brand-red text-white py-4 mt-4 font-display uppercase text-xl"
            >
              Order Online
            </a>
        </div>
      </div>
    </nav>
  );
};
import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { HOURS } from '../types';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative py-24 bg-white text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Info Text */}
            <div className="order-2 lg:order-1">
                <span className="block text-brand-red font-bold tracking-widest uppercase mb-4 text-sm">Find Us</span>
                <h2 className="font-display text-6xl text-black uppercase tracking-tight mb-8">
                    The Avenues<br/>Kuwait
                </h2>
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-dark text-white p-3 rounded-none">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-display text-xl uppercase mb-1">Address</h4>
                            <p className="text-gray-600 leading-relaxed">
                                The Avenues Mall<br/>
                                Sheikh Zayed Bin Sultan Al Nahyan Rd,<br/>
                                Kuwait City, Kuwait
                            </p>
                            <a 
                                href="https://goo.gl/maps/something" // Placeholder Google Maps link
                                className="inline-flex items-center gap-2 mt-2 text-brand-red font-bold uppercase text-sm hover:underline"
                            >
                                <Navigation size={14} /> Get Directions
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-brand-dark text-white p-3 rounded-none">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="font-display text-xl uppercase mb-1">Opening Hours</h4>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
                                <span className="font-bold">Breakfast:</span>
                                <span>{HOURS.breakfast}</span>
                                <span className="font-bold">Lunch & Dinner:</span>
                                <span>{HOURS.main}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Visual / Image */}
            <div className="order-1 lg:order-2 relative h-[500px] w-full bg-gray-200 border-4 border-black shadow-[20px_20px_0px_0px_rgba(229,57,53,0.2)]">
                {/* 
                    Using a static map image for reliability since I cannot use a real Google Maps Embed API key here.
                    In a real app, this would be an iframe.
                */}
                <img 
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
                    alt="The Avenues Kuwait Atmosphere"
                    className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-brand-red text-white p-4 animate-bounce shadow-xl">
                        <MapPin size={48} fill="currentColor" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Decorative Text Background */}
      <div className="absolute -bottom-10 -right-20 pointer-events-none select-none opacity-5">
         <span className="font-display text-[20rem] uppercase text-black leading-none">Avenues</span>
      </div>
    </section>
  );
};
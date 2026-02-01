import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1535189856336-e3871a25be5f?q=80&w=2066&auto=format&fit=crop" 
          alt="Asian Street Food Market" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 border border-brand-red text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4 bg-black/50 backdrop-blur-sm">
                Kuwait City • The Avenues
            </span>
            <h1 className="font-display text-7xl md:text-9xl text-white uppercase leading-[0.9] mb-2 tracking-tight drop-shadow-xl">
              Street <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-red to-orange-600">Food</span>
            </h1>
            <h2 className="font-display text-4xl md:text-6xl text-gray-200 uppercase tracking-widest mb-8">
              Group
            </h2>
            
            <p className="max-w-xl mx-auto text-gray-300 text-lg mb-10 font-light leading-relaxed">
              Authentic Asian Fusion flavors meets modern street culture. 
              From spicy Korean noodles to Japanese teriyaki bowls.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                    href="#menu"
                    className="group relative px-8 py-4 bg-white text-black font-display text-xl uppercase tracking-wider overflow-hidden transition-all hover:bg-brand-red hover:text-white min-w-[200px]"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        View Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
                
                 <a 
                    href="#location"
                    className="group px-8 py-4 border-2 border-white text-white font-display text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all min-w-[200px]"
                >
                    Visit Us
                </a>
            </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10"></div>
    </div>
  );
};
import React from 'react';
import { Instagram, Facebook, Globe, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
                <h2 className="font-display text-4xl text-white uppercase tracking-tight mb-2">
                  Street <span className="text-brand-red">Food</span> Group
                </h2>
                <p className="text-gray-500 max-w-xs">
                    Elevating street food culture in Kuwait City with bold flavors and authentic vibes.
                </p>
            </div>

            <div className="flex gap-6">
                <a href="https://instagram.com/streetfoodgroup" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-brand-red hover:border-brand-red transition-all">
                    <Instagram size={20} />
                </a>
                <a href="https://reach.link/streetfoodgroup" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-brand-red hover:border-brand-red transition-all">
                    <Globe size={20} />
                </a>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Street Food Group. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-widest text-xs">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="https://reach.link/streetfoodgroup" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-brand-red transition-colors">
                    Reach Link <ExternalLink size={10} />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};
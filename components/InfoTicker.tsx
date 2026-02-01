import React from 'react';
import { Clock } from 'lucide-react';
import { HOURS } from '../types';

export const InfoTicker: React.FC = () => {
  return (
    <div className="bg-brand-red text-white py-3 overflow-hidden relative z-20 border-y-4 border-black">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
                <span className="font-display text-xl uppercase tracking-widest flex items-center gap-4">
                    <Clock size={20} className="text-brand-dark" />
                    Open Daily 8AM - 11PM 
                    <span className="text-brand-dark">•</span>
                    Breakfast: {HOURS.breakfast} 
                    <span className="text-brand-dark">•</span>
                    Lunch & Dinner: {HOURS.main}
                    <span className="text-brand-dark mx-4">///</span>
                </span>
            </div>
        ))}
      </div>
    </div>
  );
};
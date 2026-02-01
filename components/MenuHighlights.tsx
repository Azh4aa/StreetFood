import React from 'react';
import { MenuItem } from '../types';
import { Flame, Star } from 'lucide-react';

const FEATURED_ITEMS: MenuItem[] = [
  {
    id: '1',
    title: 'Teriyaki Shrimp',
    description: 'Succulent shrimp glazed in house-made teriyaki sauce served over aromatic fried rice with seaweed and pickled ginger.',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?q=80&w=1000&auto=format&fit=crop', // Fried Riceish
    tags: ['Japanese', 'Rice'],
    isSpicy: true,
    category: 'Rice'
  },
  {
    id: '2',
    title: 'Korean Cheese Noodles',
    description: 'Spicy ramen noodles in a rich creamy cheese broth, topped with sausages and sesame seeds. A comfort food classic.',
    imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1000&auto=format&fit=crop', // Noodle bowl
    tags: ['Korean', 'Spicy', 'Popular'],
    isSpicy: true,
    category: 'Noodles'
  },
  {
    id: '3',
    title: 'Classic Chicken Burger',
    description: 'Crispy fried chicken thigh, fresh lettuce, cheddar cheese, and special street sauce on a toasted sesame bun.',
    imageUrl: 'https://images.unsplash.com/photo-1619250907532-a54b39dc446d?q=80&w=1000&auto=format&fit=crop', // Chicken Burger
    tags: ['Burger', 'Crispy'],
    category: 'Burger'
  },
  {
    id: '4',
    title: 'Spicy Beef Sando',
    description: 'Tender marinated beef slices with caramelized onions and spicy mayo between thick fluffy toast.',
    imageUrl: 'https://images.unsplash.com/photo-1542354256-43b9bd79c944?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Sandwich', 'Beef'],
    isNew: true,
    category: 'Appetizer'
  }
];

export const MenuHighlights: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-brand-dark relative px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
            <h3 className="text-brand-red font-bold tracking-widest uppercase mb-4 text-sm">Taste the Streets</h3>
            <h2 className="font-display text-6xl text-white uppercase tracking-tight">
                Menu <span className="text-stroke-white text-transparent" style={{ WebkitTextStroke: '1px white' }}>Highlights</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_ITEMS.map((item) => (
                <div key={item.id} className="group relative bg-brand-gray border border-white/5 overflow-hidden hover:border-brand-red/50 transition-all duration-300">
                    {/* Image Area */}
                    <div className="h-64 overflow-hidden relative">
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                        
                        {/* Tags */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                            {item.isSpicy && (
                                <span className="bg-brand-red text-white text-xs font-bold px-2 py-1 uppercase tracking-wider flex items-center gap-1">
                                    Spicy <Flame size={12} fill="currentColor" />
                                </span>
                            )}
                            {item.isNew && (
                                <span className="bg-brand-yellow text-black text-xs font-bold px-2 py-1 uppercase tracking-wider flex items-center gap-1">
                                    New <Star size={12} fill="currentColor" />
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 relative">
                        <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-2 group-hover:text-brand-red transition-colors">
                            {item.title}
                        </h3>
                        <div className="flex gap-2 mb-4">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-xs text-gray-400 border border-gray-700 px-2 py-0.5 uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                            {item.description}
                        </p>
                        <a href="https://reach.link/streetfoodgroup" target="_blank" rel="noreferrer" className="block w-full text-center border border-white/20 text-white py-3 font-display uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all">
                            Order Now
                        </a>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
             <a 
                href="https://reach.link/streetfoodgroup" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-brand-red text-white font-display text-2xl uppercase tracking-wider px-10 py-5 hover:bg-red-700 transition-colors shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
            >
                View Full Menu Online
            </a>
        </div>
      </div>
    </section>
  );
};
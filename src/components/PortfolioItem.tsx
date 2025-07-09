import React from 'react';
import { PortfolioItem as PortfolioItemType } from '../data/portfolio';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/50 transition-all duration-300 z-10"></div>
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <a 
            href={item.link} 
            className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-md flex items-center transition-colors shadow-lg"
          >
            View Project <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block bg-navy-800/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white rounded-md">
            {item.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">
          {item.title}
        </h3>
        
        <p className="text-gray-600 mb-3">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{item.date}</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from '../components/PortfolioItem';
import { portfolioItems } from '../data/portfolio';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  useEffect(() => {
    if (filter === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-navy-900 text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Notre Portfolio</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Découvrez une sélection de nos actions, projets stratégiques et participations aux événements internationaux visant à valoriser l’image de la RDC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-navy-800 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PortfolioItem item={item} />
            </motion.div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600 mb-4">
              No projects match the currently selected filter.
            </p>
            <button 
              onClick={() => setFilter('All')}
              className="text-navy-800 font-medium hover:text-gold-600 transition-colors"
            >
              Show All Projects
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default PortfolioPage;
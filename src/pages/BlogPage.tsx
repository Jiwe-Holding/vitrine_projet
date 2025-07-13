import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

const BlogPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredArticles, setFilteredArticles] = useState(articles);
  
  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];
  
  useEffect(() => {
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const filtered = articles.filter(article => {
    const matchesCategory =
      filter === 'All' ||
      normalize(article.category) === normalize(filter);

    const matchesSearch =
      normalize(article.title).includes(normalize(searchQuery)) ||
      normalize(article.excerpt).includes(normalize(searchQuery));

    return matchesCategory && matchesSearch;
  });

  setFilteredArticles(filtered);
  }, [filter, searchQuery]);


  return (
    <div className="pt-2 pb-16">
      {/* Header */}
      <section className="bg-navy-900 text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nos Articles et Actualités</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Découvrez nos actions, stratégies et participations internationales pour promouvoir l’image et l’excellence de la RDC à travers le monde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Articles
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by title or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors"
              />
            </div>
            
            {/* Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Category
              </label>
              <select
                id="category"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'} 
            {filter !== 'All' ? ` in ${filter}` : ''}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </h2>
        </div>
        
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">No Articles Found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button 
              onClick={() => {
                setFilter('All');
                setSearchQuery('');
              }}
              className="text-navy-800 font-medium hover:text-gold-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
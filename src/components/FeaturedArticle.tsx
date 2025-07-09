import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
  };
  large?: boolean;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article, large = false }) => {
  return (
    <article 
      className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
        large ? 'h-[600px] md:h-[700px]' : 'h-[400px]'
      }`}
    >
      <div className="absolute inset-0 bg-navy-900/30 z-10 transition-opacity duration-300 group-hover:bg-navy-900/40"></div>
      
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
        <span className="mb-2 inline-block bg-gold-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          {article.category}
        </span>
        
        <h3 className={`font-serif font-bold text-white mb-4 ${large ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
          {article.title}
        </h3>
        
        <p className="text-gray-100 mb-6 max-w-3xl">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-200 text-sm">
            {article.date}
          </span>
          
          <Link 
            to={`/article/${article.id}`} 
            className="flex items-center text-white font-medium group-hover:text-gold-500 transition-colors"
          >
            Lire l'article
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;
import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-gold-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
          <Link to={`/article/${article.id}`} className="hover:text-gold-600 transition-colors">
            {article.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {article.excerpt}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">{article.date}</span>
          <Link 
            to={`/article/${article.id}`} 
            className="text-navy-800 font-medium text-sm hover:text-gold-600 transition-colors"
          >
            Voir Plus
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
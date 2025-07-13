import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState(articles.find(a => a.id === id));
  const [relatedArticles, setRelatedArticles] = useState<typeof articles>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundArticle = articles.find(a => a.id === id);
    
    if (!foundArticle) {
      navigate('/blog', { replace: true });
      return;
    }

    setArticle(foundArticle);

    // Get related articles from the same category
    const related = articles
      .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
      .slice(0, 3);
    
    setRelatedArticles(related);
  }, [id, navigate]);

  if (!article) {
    return null;
  }

  return (
    <div className="pt-2 pb-16">
      {/* Article Header */}
      <section 
        className="relative flex items-center justify-center py-24 px-4 mb-8 overflow-hidden"
        style={{ minHeight: '60vh' }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-navy-900/70 z-10"></div>
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="container relative z-20 text-white">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} className="mr-1" />
              Retour
            </Link>
            
            <span className="inline-block bg-gold-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {article.category}
            </span>
            
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{article.date}</span>
              </div>
              
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <span>{article.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div 
              className="prose prose-lg max-w-none" 
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="font-serif text-2xl md:text-3xl font-bold text-navy-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Related Articles
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <motion.div 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;
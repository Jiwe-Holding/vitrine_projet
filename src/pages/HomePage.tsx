import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import { portfolioItems } from '../data/portfolio';
import FeaturedArticle from '../components/FeaturedArticle';

const HomePage: React.FC = () => {


  const featuredArticles = articles.filter(article => article.featured);
  const featuredPortfolio = portfolioItems.filter(item => item.featured);


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/80 z-10" />
        <img
          src="https://img.digital4.biz/wp-content/uploads/2021/11/Agenda-2030_1.jpg"
          alt="ASM Vitrine Projet"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="container mx-auto px-4 relative z-20 text-white text-center md:text-left md:max-w-3xl">
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ASM Vitrine Projet
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Promouvoir l’excellence congolaise à l’international
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Représentation, communication et accompagnement des institutions de la RDC lors des événements mondiaux.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/realisations"
              className="bg-gold-500 hover:bg-gold-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
            >
              Voir nos actions
            </Link>
            <Link
              to="/about"
              className="bg-transparent hover:bg-white/10 text-white border border-white py-3 px-6 rounded-md font-medium transition-colors"
            >
              À propos
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Glisser</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Qui sommes-nous ?</h2>
            <p className="text-gray-200 mb-6">
              ASM Vitrine Projet est une entreprise congolaise spécialisée dans la communication,
              la facilitation et l’accompagnement institutionnel lors des salons et événements
              internationaux. Nous mettons en lumière les atouts de la RDC à l’échelle mondiale.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
            >
              En savoir plus
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1049930395/thumb/1.jpg?ip=x480"
              alt="Présentation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

       {/* Featured Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Nos Articles et Actualités</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos dernières actions, nos participations aux salons internationaux et nos initiatives pour valoriser l’excellence congolaise sur la scène mondiale.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8">
            {featuredArticles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FeaturedArticle article={featuredArticles[0]} large={true} />
              </motion.div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Colonne gauche */}
              <div className="space-y-8">
                {featuredArticles.slice(1, 2).map((article, index) => (
                  <motion.div 
                    key={`left-${article.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <FeaturedArticle article={article} />
                  </motion.div>
                ))}
              </div>

              {/* Colonne droite */}
              <div className="space-y-8">
                {featuredArticles.slice(3, 4).map((article, index) => (
                  <motion.div 
                    key={`right-${article.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <FeaturedArticle article={article} />
                  </motion.div>
                ))}
              </div>
          </div>
          </div>
        
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-navy-800 font-medium hover:text-gold-600 transition-colors"
            >
              Voir Tous les Articles
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Nos Projets et Réalisations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos accompagnements stratégiques, participations à des salons internationaux et actions visant à valoriser l’image de la République Démocratique du Congo à l’échelle mondiale.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPortfolio.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-md h-80 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-navy-900/40 z-10 transition-opacity duration-300 group-hover:bg-navy-900/60"></div>
                
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <span className="mb-2 inline-block bg-navy-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white rounded-md">
                    {item.category}
                  </span>
                  
                  <h3 className="font-serif font-bold text-white text-xl mb-2">
                    {item.title}
                  </h3>
                  
                  <Link 
                    to={item.link} 
                    className="inline-flex items-center text-white font-medium group-hover:text-gold-500 transition-colors mt-2"
                  >
                    Voir le Project
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-navy-800 font-medium hover:text-gold-600 transition-colors"
            >
              Voir tout les Projets
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gold-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Représentez la RDC avec nous
          </motion.h2>
          <motion.p
            className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contactez-nous pour organiser votre participation ou celle de votre institution à un
            salon international et promouvoir l’image de la République Démocratique du Congo sur la scène mondiale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-navy-900 hover:bg-gold-600 text-white py-3 px-8 rounded-md font-medium transition-colors"
            >
              Nous contacter
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
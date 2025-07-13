import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nous Contacter</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Nous sommes à votre disposition pour organiser votre participation à des salons internationaux ou pour toute demande de partenariat et d’accompagnement stratégique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-navy-900 text-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-serif font-bold mb-6">Informations de Contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-navy-700 p-2 rounded-full mr-4">
                      <Mail size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <a
                        href="mailto:asmultrineprojet@gmail.com"
                        className="text-gray-300 hover:text-gold-500 transition-colors"
                      >
                        asmvitrineprojet@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-navy-700 p-2 rounded-full mr-4">
                      <Phone size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Téléphone</h4>
                      <p className="text-gray-300">
                        243 817 607 934
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-navy-700 p-2 rounded-full mr-4">
                      <MapPin size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Adresse</h4>
                      <p className="text-gray-300">
                        0, avenue Kwango, Immeuble le 1306, 5ᵉ niveau, Gombe, Kinshasa, RDC
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-navy-700 p-2 rounded-full mr-4">
                      <Clock size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Délai de Réponse</h4>
                      <p className="text-gray-300">
                        Nous nous engageons à répondre à toutes vos demandes dans un délai de 48 heures.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-serif font-bold mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      className="bg-navy-700 hover:bg-navy-600 p-3 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="https://linkedin.com"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-gold-500"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="bg-navy-700 hover:bg-navy-600 p-3 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="https://instagram.com"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-gold-500"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5"></rect>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M18 6l-2.51.01M6.5 6.5h.01"></path>
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-navy-700 hover:bg-navy-600 p-3 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-gold-500"
                      >
                        <path
                          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-navy-700 hover:bg-navy-600 p-3 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-gold-500"
                      >
                        <path d="M4 4h3l5 5 5-5h3l-8 8 8 8h-3l-5-5-5 5H4l8-8z" />
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-navy-700 hover:bg-navy-600 p-3 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-gold-500"
                      >
                        <path d="M21.8 8.001a2.745 2.745 0 00-1.926-1.937C18.112 5.5 12 5.5 12 5.5s-6.112 0-7.874.564A2.745 2.745 0 002.2 8.001 28.64 28.64 0 002 12a28.64 28.64 0 00.2 3.999 2.745 2.745 0 001.926 1.937C5.888 18.5 12 18.5 12 18.5s6.112 0 7.874-.564a2.745 2.745 0 001.926-1.937A28.64 28.64 0 0022 12a28.64 28.64 0 00-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="3"
                          ry="3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
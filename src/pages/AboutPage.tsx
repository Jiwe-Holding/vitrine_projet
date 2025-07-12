import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, Mail, MapPin, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">À propos d’ASM Vitrine Projet</h1>
              <p className="text-xl text-gray-200 mb-6">
                Entreprise de communication et de représentation stratégique de la RDC sur la scène internationale.
              </p>
              <div className="flex flex-col space-y-2 text-gray-200">
                <div className="flex items-center">
                  <Briefcase size={18} className="mr-3 text-gold-500" />
                  <span>Facilitation & Communication institutionnelle</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-3 text-gold-500" />
                  <span>Basée à Kinshasa, RDC</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-3 text-gold-500" />
                  <span>asmultrineprojet@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Globe size={18} className="mr-3 text-gold-500" />
                  <span>Représentation dans les salons internationaux</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/assets/about.jpg"
                alt="ASM Vitrine Projet"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8">Notre Mission</h2>

            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                ASM VITRINE PROJET œuvre pour la promotion de l’excellence congolaise à travers la participation à des salons internationaux
                et le positionnement stratégique des institutions et entreprises de la République Démocratique du Congo.
              </p>

              <p>
                Nous avons représenté la RDC au Salon International de l’Agriculture, à Marseille et Bordeaux, en accompagnant notamment
                le Ministère des Mines, le Secrétariat Général, la CTC et autres directions techniques.
              </p>

              <p>
                Notre action s’étend également à l’adaptation des stratégies de présentation selon les marchés cibles, notamment
                en Amérique du Nord, et à la mise en place de rencontres B2B pour développer des partenariats techniques.
              </p>

              <p>
                Aujourd’hui, nous préparons activement la 61ᵉ édition du SIA avec pour objectif de renforcer davantage la visibilité du pays
                à l’international à travers une communication innovante et percutante.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">Domaines d’expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous combinons représentation, communication stratégique et développement de partenariats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Participation Internationale',
                description: 'Organisation de la présence de la RDC dans les salons et forums mondiaux',
                icon: <Globe size={24} />
              },
              {
                title: 'Visibilité des institutions',
                description: 'Stratégies de communication et valorisation des projets nationaux',
                icon: <BookOpen size={24} />
              },
              {
                title: 'Réseautage stratégique',
                description: 'Rencontres avec des acteurs techniques, institutionnels et privés',
                icon: <Briefcase size={24} />
              },
              {
                title: 'Appui ministériel',
                description: 'Accompagnement opérationnel des services publics lors des événements',
                icon: <Award size={24} />
              },
              {
                title: 'Développement d’image de marque',
                description: 'Positionnement cohérent des entreprises congolaises à l’étranger',
                icon: <Mail size={24} />
              },
              {
                title: 'Communication digitale',
                description: 'Utilisation des supports modernes pour atteindre les cibles internationales',
                icon: <GraduationCap size={24} />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-navy-100 text-navy-800 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

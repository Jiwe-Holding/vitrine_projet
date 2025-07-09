import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';
import { timelineEvents } from '../data/timeline';

const TimelinePage: React.FC = () => {
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Notre Timeline</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Découvrez les grandes étapes de notre parcours, nos participations aux salons internationaux et nos actions majeures pour promouvoir l’image de la RDC à l’échelle mondiale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative">
          {timelineEvents.sort((a, b) => parseInt(b.year) - parseInt(a.year)).map((event, index, array) => (
            <TimelineItem 
              key={event.id} 
              event={event} 
              index={index} 
              isLast={index === array.length - 1} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TimelinePage;
import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEvent } from '../data/timeline';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, isLast }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-8 left-8 w-0.5 h-full bg-gray-200 -z-10 md:left-1/2 md:-ml-0.5"></div>
      )}
      
      <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start mb-12`}>
        {/* Year bubble */}
        <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-gold-500 flex items-center justify-center shadow-md mb-4 md:mb-0">
          <span className="font-serif text-navy-900 text-lg font-bold">{event.year}</span>
        </div>

        {/* Content card */}
        <div 
          className={`bg-white rounded-lg shadow-md p-6 flex-1 max-w-lg ${
            isEven ? 'md:mr-8' : 'md:ml-8'
          }`}
        >
          <div className="flex items-center mb-2">
            <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white rounded-full ${
              event.category === 'Award' ? 'bg-gold-500' : 
              event.category === 'Career' ? 'bg-navy-700' :
              event.category === 'Publication' ? 'bg-navy-500' :
              event.category === 'Education' ? 'bg-navy-600' : 'bg-navy-800'
            }`}>
              {event.category}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-900 mb-2">
            {event.title}
          </h3>

          <p className="text-gray-600">{event.description}</p>

          {event.imageUrl && (
            <div className="mt-4">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
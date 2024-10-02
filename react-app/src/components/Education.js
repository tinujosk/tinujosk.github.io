import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const educationData = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'University of XYZ',
    description:
      'Specialized in full-stack development, software architecture, and machine learning.',
    date: 'Sep 2016 - Jun 2018',
  },
  {
    id: 2,
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'ABC Institute of Technology',
    description:
      'Focused on algorithms, database systems, and front-end development. Graduated with honors.',
    date: 'Sep 2012 - Jun 2016',
  },
];

const Education = () => {
  return (
    <Section className='py-16 bg-white' id='education'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-10'>Education</h2>

        <div className='grid grid-cols-1 gap-8'>
          {educationData.map(edu => (
            <motion.div
              key={edu.id}
              className='bg-gray-100 p-6 rounded-lg shadow-lg'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h3 className='text-2xl font-semibold text-gray-800'>
                {edu.degree}
              </h3>
              <h4 className='text-lg text-gray-600 mt-2'>{edu.institution}</h4>
              <p className='text-gray-700 mt-4'>{edu.description}</p>
              <span className='text-sm text-gray-500 mt-2 block'>
                {edu.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import ctsLogo from '../assets/cognizant.jpg';
import ibsLogo from '../assets/ibs.jpg';
import tvLogo from '../assets/telaverge.png';

const experienceData = [
  {
    id: 1,
    title: 'Senior Software Developer',
    company: 'Cognizant Technology Solutions',
    companyLogo: ctsLogo,
    description: 'Kochi, India',
    date: 'November 2021 - August 2023',
  },
  {
    id: 2,
    title: 'Senior Software Engineer',
    company: 'IBS Software Private Limited',
    companyLogo: ibsLogo,
    description: 'Kochi, India',
    date: 'January 2020 - November 2021',
  },
  {
    id: 3,
    title: 'R & D Engineer',
    company: 'Telaverge Communications',
    companyLogo: tvLogo,
    description: 'Bangalore, India',
    date: 'April 2017 - September 2019',
  },
];

const Experience = () => {
  return (
    <Section id='experience'>
      <div className='container mx-auto px-6 max-w-3xl relative'>
        <h2 className='text-4xl font-bold text-center text-white mb-10'>
          Experience
        </h2>

        <div className='relative z-10'>
          {/* Map through experiences */}
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`p-6 rounded-lg shadow-lg mb-8 relative max-w-xl ${
                index % 2 === 0 ? 'ml-auto' : 'mr-auto'
              } flex items-center border-4 ${
                index % 2 === 0 ? 'border-gold' : 'border-silver'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                backgroundColor: 'rgba(30, 30, 30, 1)', // Dark background for cards
                color: 'white', // White text for readability
                zIndex: 2, // Ensure cards are on top of the arrow
              }}
            >
              {/* Company Logo */}
              <img
                src={exp.companyLogo}
                alt={`${exp.company} logo`}
                className='w-48 h-32 mr-6 object-contain'
              />

              <div>
                <h3 className='text-xl font-semibold text-gold'>{exp.title}</h3>
                <h4 className='text-lg text-gray-100 mt-2'>{exp.company}</h4>
                <p className='text-gray-300 mt-4'>{exp.description}</p>
                <span className='text-sm text-gray-400 mt-2 block'>
                  {exp.date}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Line Animation */}
          <motion.div
            className='absolute left-1/2 transform -translate-x-1/2 bottom-0'
            initial={{ height: 0 }} // Start height at 0
            animate={{ height: '100%' }} // Animate to full height
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              borderLeft: '3px dashed gray', // Straight line
              width: '3px',
              zIndex: 0, // Ensure the line is behind the cards
            }}
          />

          {/* Arrowhead Animation */}
          <motion.svg
            // className='absolute left-1/2 transform -translate-x-1/2 -bottom-6'
            className='absolute -top-6 left-1/2 transform -translate-x-1/2'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            initial={{ opacity: 0 }} // Start hidden
            animate={{ opacity: 1 }} // Animate to visible
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }} // Delay after line animation
          >
            <polygon points='10,0 20,20 0,20' fill='gray' />
          </motion.svg>
        </div>
      </div>
    </Section>
  );
};

export default Experience;

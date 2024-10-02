import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const experienceData = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    description:
      'Worked on a range of projects using React and Node.js, developing scalable applications and leading the front-end team.',
    date: 'Jan 2020 - Present',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    description:
      'Built full-stack applications using MongoDB, Express.js, React, and Node.js, while optimizing performance and UI/UX design.',
    date: 'Apr 2018 - Dec 2019',
  },
  {
    id: 3,
    title: 'Front-End Developer',
    company: 'DesignWorks',
    description:
      'Designed and implemented responsive web interfaces with modern tools like Tailwind CSS and Bootstrap.',
    date: 'Jun 2016 - Mar 2018',
  },
];

const Experience = () => {
  return (
    <Section className='py-16 bg-gray-100' id='experience'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-10'>Experience</h2>

        <div className='flex flex-col space-y-10'>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-center`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className='md:w-1/2 p-6'>
                <h3 className='text-2xl font-semibold'>{exp.title}</h3>
                <h4 className='text-lg text-gray-600'>{exp.company}</h4>
                <p className='text-gray-700 mt-4'>{exp.description}</p>
                <span className='text-sm text-gray-500 mt-2 block'>
                  {exp.date}
                </span>
              </div>
              <div className='md:w-1/2 p-6'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='bg-white p-6 rounded-lg shadow-lg'
                >
                  <img
                    src={`https://via.placeholder.com/300x200?text=${exp.company}`}
                    alt={exp.company}
                    className='rounded-lg'
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from './Section';

function Certifications() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  // Dummy certifications data; replace with your actual data source
  const certifications = [
    { name: 'Certified React Developer', year: 2023 },
    { name: 'JavaScript Specialist', year: 2022 },
    { name: 'AWS Certified Solutions Architect', year: 2024 },
    { name: 'Full Stack Developer Certification', year: 2023 },
    // Add more certifications as needed
  ];

  return (
    <Section id='certifications'>
      <div ref={ref} className='container mx-auto py-16 text-center'>
        <h1 className='text-4xl font-bold mb-8'>Certifications</h1>
        <div className='flex flex-wrap justify-center gap-8'>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className='bg-white shadow-lg rounded-lg p-6 w-60'
              initial={{ opacity: 0, x: -50 }} // Start off-screen
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
              transition={{ duration: 0.8, delay: index * 0.1 }} // Slight delay for staggered effect
            >
              <h2 className='text-lg font-semibold'>{cert.name}</h2>
              <p className='text-gray-600'>{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Certifications;

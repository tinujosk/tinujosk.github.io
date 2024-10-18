import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aws1 from '../assets/aws1.png';
import aws2 from '../assets/aws2.png';
import ms1 from '../assets/ms1.png';

const images = [
  { id: 1, src: ms1, alt: 'Microsoft Certification Logo' },
  {
    id: 2,
    src: aws1,
    alt: 'AWS Cloud Practitioner Certification logo',
  },
  { id: 3, src: aws2, alt: 'AWS Developer Certification Logo' },
];

export default function Certifications() {
  return (
    <div>
      <h2 className='text-2xl md:text-4xl font-bold text-center text-white mb-16'>
        Certifications
      </h2>
      <div
        style={{
          overflow: 'hidden',
          height: '50vh',
          // backgroundColor: '#000',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className='space-y-24'
      >
        <motion.div
          initial={{ y: '100%' }} // Start the credits below the viewport
          animate={{ y: '-100%' }} // Slide it upwards beyond the top of the viewport
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className='relative overflow-hidden' // Add this to ensure overflow is hidden
        >
          <AnimatePresence>
            <div>
              {images.map((image, index) => {
                return (
                  <motion.p
                    key={index} // Use index as key for proper rendering
                    className='mb-10'
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }} // Fade out on exit
                    transition={{ duration: 1 }} // Transition duration for fading
                  >
                    <img src={image.src} className='w-60'></img>
                  </motion.p>
                );
              })}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

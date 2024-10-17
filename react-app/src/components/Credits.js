import React from 'react';
import { motion } from 'framer-motion';

export default function Credits() {
  return (
    <div
      style={{
        overflow: 'hidden',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
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
        style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          lineHeight: '2rem',
        }}
      >
        <div style={{ marginBottom: '50vh' }}>
          {' '}
          <h1 style={{ marginBottom: '1rem' }}>Credits</h1>
          <p>To Do</p>
        </div>
      </motion.div>
    </div>
  );
}

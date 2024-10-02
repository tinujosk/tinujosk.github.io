import React from 'react';
import Section from './Section';

function Certifications() {
  return (
    <Section id='certifications'>
      <div className='container mx-auto py-16 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Contact</h1>
        <p className='text-lg text-gray-700'>Email: youremail@example.com</p>
        <p className='text-lg text-gray-700'>
          LinkedIn:{' '}
          <a
            href='https://linkedin.com/in/yourprofile'
            className='text-blue-500 hover:underline'
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </Section>
  );
}

export default Certifications;

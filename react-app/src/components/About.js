import React from 'react';
import Section from './Section';

function About() {
  return (
    <Section id='about'>
      <div className='container mx-auto py-16 text-center'>
        <h1 className='text-4xl font-bold mb-4'>About Me</h1>
        <p className='text-lg text-gray-700'>
          I’m a Software Engineer with expertise in JavaScript, React, and more.
          I build web applications that solve real-world problems with clean and
          maintainable code.
        </p>
      </div>
    </Section>
  );
}

export default About;

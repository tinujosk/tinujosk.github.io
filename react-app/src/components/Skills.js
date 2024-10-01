import React from 'react';
import Section from './Section';

function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'AWS'];

  return (
    <Section id='skills'>
      <div className='container mx-auto py-16 text-center'>
        <h1 className='text-4xl font-bold mb-8'>Skills</h1>
        <ul className='flex justify-center space-x-8 flex-wrap'>
          {skills.map(skill => (
            <li key={skill} className='text-lg text-gray-700'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Skills;

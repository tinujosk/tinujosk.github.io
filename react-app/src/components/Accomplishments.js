import React from 'react';
import Section from './Section';

function Accomplishments() {
  const projects = [
    {
      name: 'Task Manager',
      description: 'A task management app built with React and Firebase.',
      link: '#',
    },
    {
      name: 'Portfolio Website',
      description: 'This portfolio site built with React and animations.',
      link: '#',
    },
  ];

  return (
    <Section id='accomplishments'>
      <div className='container mx-auto py-16 text-center'>
        <h1 className='text-4xl font-bold mb-8'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='p-6 border rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold mb-2'>{project.name}</h2>
              <p className='text-gray-700'>{project.description}</p>
              <a href={project.link} className='text-blue-500 hover:underline'>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Accomplishments;

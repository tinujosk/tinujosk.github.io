import React from 'react';
import Section from './Section';
import profileImage from '../assets/profile.jpg'; // Add your image file in the correct folder

function About() {
  return (
    <Section id='about'>
      <div className='container mx-auto py-16 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Text on the left side */}
          <div>
            <h1 className='text-4xl font-bold mb-4'>About Me</h1>
            <p className='text-lg text-gray-700 mb-4'>
              Hey, I'm a Software Engineer with 6+ years of experience in
              software design and development, specializing in web application
              development using React.js, and Node.js. Possess deep expertise in
              JavaScript and core web technologies, with a strong focus on
              writing maintainable, clean, and optimized code. Worked in
              automation and embedded development across various tools and
              languages. Interested in Cloud Computing, UI/UX design, and
              Graphic Design. Thrive under tight deadlines by leveraging agile
              development strategies and delivering high-quality results.
            </p>
            <p className='text-lg text-gray-700'>
              When I’m not coding, I love exploring new technologies,
              contributing to open-source projects, and engaging with the
              developer community. Let’s build something amazing together!
            </p>
          </div>
          {/* Image on the right side */}
          <div className='flex justify-center md:justify-end'>
            <img
              src={profileImage}
              alt='Profile'
              className='rounded-lg shadow-lg w-64 h-64 object-cover'
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;

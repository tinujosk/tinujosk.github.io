import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import Section from './Section';
import mguLogo from '../assets/mgu.png';
import kvLogo from '../assets/kv.png';
import conestogaLogo from '../assets/conestoga.png';
import Certifications from './Certitications';

const radius = 180;

const initialEducationData = [
  {
    id: '1',
    degree: 'Web Development',
    field: 'Computer Science',
    institution: 'Conestoga College | Ontario, Canada',
    date: 'September 2023 - December 2024',
    image: conestogaLogo,
  },
  {
    id: '2',
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Science',
    institution: 'Mahatma Gandhi University | Kerala, India',
    date: 'August 2013 - November 2016',
    image: mguLogo,
  },
  {
    id: '3',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Science',
    institution: 'Mahatma Gandhi University | Kerala, India',
    date: 'August 2010 - April 2013',
    image: mguLogo,
  },
  {
    id: '4',
    degree: 'School',
    field: 'Science [Biology | Maths]',
    institution: 'Kendriya Vidyalaya - CBSE | Kerala, India',
    date: 'Ended in 2010',
    image: kvLogo,
  },
];

const Education = () => {
  const [educationData, setEducationData] = useState(initialEducationData);

  return (
    <Section
      id='education'
      className='w-full flex flex-col md:flex-row justify-evenly'
    >
      {/* <div className='w-full flex flex-col md:flex-row justify-evenly'> */}
      <div className='mb-12'>
        <h2 className='text-2xl md:text-4xl font-bold text-center text-white mb-16'>
          Education
        </h2>
        <Reorder.Group
          axis='y'
          values={educationData}
          onReorder={setEducationData}
          className='space-y-4'
        >
          {educationData.map(education => (
            <Reorder.Item
              key={education.id}
              value={education}
              className='bg-[#111] shadow-lg rounded-lg p-4 flex space-x-4 items-center cursor-grab border border-[#333]'
            >
              <img
                src={education.image}
                alt={education.degree}
                className='w-20 md:w-24 object-cover'
              />

              <div className='flex-1'>
                <h3 className='text-lg md:text-xl font-semibold text-white'>
                  {education.degree}
                </h3>
                <p className='text-gray-600 text-sm'>{education.field}</p>
                <p className='text-gray-500 text-sm'>{education.institution}</p>
                <p className='text-gray-400 text-sm'>{education.date}</p>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      <div>
        <div className='relative flex items-center justify-center h-full'>
          <Certifications />
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
};

export default Education;

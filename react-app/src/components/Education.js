import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import Section from './Section';
import mguLogo from '../assets/mgu.png';
import kvLogo from '../assets/kv.png';
import conestogaLogo from '../assets/conestoga.png';
import aws1 from '../assets/aws1.png';
import aws2 from '../assets/aws2.png';
import ms1 from '../assets/ms1.png';

const radius = 180;

const images = [
  { id: 1, src: ms1, alt: 'Microsoft Certification Logo', angle: 30 },
  {
    id: 2,
    src: aws1,
    alt: 'AWS Cloud Practitioner Certification logo',
    angle: 150,
  },
  { id: 3, src: aws2, alt: 'AWS Developer Certification Logo', angle: 270 },
];

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
    degree: 'Higher Secondary School',
    field: 'Schooling',
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
      // className='bg-[linear-gradient(180deg,_black_30%,_#111_50%,_#111_100%)]'
    >
      <div className='w-full flex justify-evenly'>
        <div>
          <h2 className='text-4xl font-bold text-center text-white mb-16'>
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
                className='bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 cursor-grab border border-gray-200'
              >
                <img
                  src={education.image}
                  alt={education.degree}
                  className='w-24 h-24 object-cover'
                />

                <div className='flex-1'>
                  <h3 className='text-xl font-semibold'>{education.degree}</h3>
                  <p className='text-gray-600'>{education.field}</p>
                  <p className='text-gray-500'>{education.institution}</p>
                  <p className='text-gray-400'>{education.date}</p>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>

        <div>
          <div className='relative flex items-center justify-center h-full'>
            <div
              className='absolute border border-dotted border-gray-400 rounded-full'
              style={{
                width: `${2 * radius}px`,
                height: `${2 * radius}px`,
              }}
            ></div>
            <h2 className='text-3xl font-bold text-center text-white'>
              Certifications
            </h2>

            {images.map(image => {
              const angleInRadians = (image.angle * Math.PI) / 180;
              const x = radius * Math.cos(angleInRadians);
              const y = radius * Math.sin(angleInRadians);

              return (
                <div
                  key={image.id}
                  className='absolute w-48 h-48  overflow-hidden'
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='object-cover w-full h-full'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;

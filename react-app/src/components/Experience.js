import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import hook
import Section from './Section';
import ctsLogo from '../assets/cognizant.jpg';
import ibsLogo from '../assets/ibs.jpg';
import tvLogo from '../assets/telaverge.png';

const skills = [
  {
    name: 'HTML5',
    logo: 'https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
  },
  {
    name: 'JavaScript',
    logo: 'https://img.shields.io/badge/-javascript-f7df1c?style=for-the-badge&logo=javascript&logoColor=black',
  },
  {
    name: 'Bootstrap',
    logo: 'https://img.shields.io/badge/-bootstrap-7953b3?style=for-the-badge&logo=bootstrap&logoColor=white',
  },
  {
    name: 'TypeScript',
    logo: 'https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
  },
  {
    name: 'React',
    logo: 'https://img.shields.io/badge/-React-45b8d8?style=for-the-badge&logo=react&logoColor=white',
  },
  {
    name: 'Jest',
    logo: 'https://img.shields.io/badge/-jest-be3d19?style=for-the-badge&logo=jest&logoColor=white',
  },
  {
    name: 'Adobe XD',
    logo: 'https://img.shields.io/badge/-Adobe%20XD-ff62f6?style=for-the-badge&logo=Adobe%20XD&logoColor=white',
  },
  {
    name: 'Node.js',
    logo: 'https://img.shields.io/badge/-Nodejs-43853d?style=for-the-badge&logo=Node.js&logoColor=white',
  },
  {
    name: 'Webpack',
    logo: 'https://img.shields.io/badge/-Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white',
  },
  {
    name: 'Docker',
    logo: 'https://img.shields.io/badge/-Docker-46a2f1?style=for-the-badge&logo=docker&logoColor=white',
  },
  {
    name: 'Redux',
    logo: 'https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white',
  },
  {
    name: 'GraphQL',
    logo: 'https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white',
  },
  {
    name: 'Sass',
    logo: 'https://img.shields.io/badge/-Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
  },
  {
    name: 'Styled Components',
    logo: 'https://img.shields.io/badge/-Styled_Components-db7092?style=for-the-badge&logo=styled-components&logoColor=white',
  },
  {
    name: 'Git',
    logo: 'https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white',
  },
  {
    name: 'NPM',
    logo: 'https://img.shields.io/badge/-NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white',
  },
  {
    name: 'Prettier',
    logo: 'https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white',
  },
  {
    name: 'MongoDB',
    logo: 'https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white',
  },
  {
    name: 'AWS',
    logo: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white',
  },
  {
    name: 'Python',
    logo: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
  },
  {
    name: 'Material-UI',
    logo: 'https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white',
  },
  {
    name: 'Adobe Illustrator',
    logo: 'https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe-illustrator&logoColor=white',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white',
  },
  {
    name: 'Express.js',
    logo: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
  },
  {
    name: 'Postman',
    logo: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white',
  },
  {
    name: 'Swagger',
    logo: 'https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black',
  },
  {
    name: 'ESLint',
    logo: 'https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white',
  },
  {
    name: 'Jenkins',
    logo: 'https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white',
  },
  {
    name: 'Linux',
    logo: 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
  },
  {
    name: 'Jira',
    logo: 'https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white',
  },
  {
    name: 'Confluence',
    logo: 'https://img.shields.io/badge/Confluence-172B4D?style=for-the-badge&logo=confluence&logoColor=white',
  },
];

const experienceData = [
  {
    id: 1,
    title: 'Senior Software Developer',
    company: 'Cognizant',
    companyLogo: ctsLogo,
    description: 'Kochi, India',
    date: 'November 2021 - August 2023',
  },
  {
    id: 2,
    title: 'Senior Software Engineer',
    company: 'IBS Software',
    companyLogo: ibsLogo,
    description: 'Kochi, India',
    date: 'January 2020 - November 2021',
  },
  {
    id: 3,
    title: 'R & D Engineer',
    company: 'Telaverge Communications',
    companyLogo: tvLogo,
    description: 'Bangalore, India',
    date: 'April 2017 - September 2019',
  },
];

const Experience = () => {
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section
      id='experience'
      className='bg-gradient-to-r from-blue-900 to-black'
    >
      <div
        className='container mx-auto px-4 max-w-3xl relative'
        ref={experienceRef}
      >
        <h2 className='text-4xl font-bold text-center text-white mb-16'>
          Experience
        </h2>
        <div className='relative z-10'>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`p-4 rounded-lg shadow-lg mb-8 relative max-w-md ${
                index % 2 === 0 ? 'ml-auto' : 'mr-auto'
              } flex items-center justify-evenly border border-stone-600 ${
                index % 2 === 0 ? 'border-gold' : 'border-silver'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={experienceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                backgroundColor: 'rgba(30, 30, 30, 1)',
                color: 'white',
                zIndex: 2,
              }}
            >
              <img
                src={exp.companyLogo}
                alt={`${exp.company} logo`}
                className='w-40  mr-6 object-contain'
              />
              <div>
                <h4 className='text-md font-semibold text-gold'>{exp.title}</h4>
                <h5 className='text-md text-gray-300 mt-2'>{exp.company}</h5>
                <p className='text-sm text-gray-400 mt-2'>{exp.description}</p>
                <span className='text-sm text-gray-400 mt-2 block'>
                  {exp.date}
                </span>
              </div>
            </motion.div>
          ))}

          <motion.div
            className='absolute left-1/2 transform -translate-x-1/2 bottom-0'
            initial={{ height: 0 }}
            animate={experienceInView ? { height: '100%' } : {}}
            transition={{ duration: 3, ease: 'easeInOut' }}
            style={{
              borderLeft: '4px dashed gray',
              width: '3px',
              zIndex: 0,
            }}
          />

          <motion.svg
            className='absolute -top-6 left-1/2 transform -translate-x-1/2'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            initial={{ opacity: 0 }}
            animate={experienceInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 3.5 }}
          >
            <polygon points='10,0 20,20 0,20' fill='gray' />
          </motion.svg>
        </div>
      </div>
      <div className='container mx-auto py-16 text-center w-1/3'>
        <h1 className='text-4xl font-bold text-white mb-16'>Skills</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
              }}
              animate={experienceInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img
                alt={skill.name}
                src={skill.logo}
                className='rounded-md shadow-md'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;

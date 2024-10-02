import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

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

function Skills() {
  return (
    <Section id='skills' className='bg-black'>
      <div className='container mx-auto py-16 text-center'>
        <h1 className='text-4xl font-bold mb-8'>Skills</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
              }} // Random initial position
              animate={{ opacity: 1, x: 0, y: 0 }} // Animate to original position
              transition={{ duration: 0.5, delay: index * 0.05 }} // Delay based on index for staggered effect
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
}

export default Skills;

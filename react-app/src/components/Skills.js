import React from 'react';
import Section from './Section';

function Skills() {
  // const skills = [{ name: 'HTM' }];

  return (
    <Section id='skills'>
      <div className='container mx-auto py-16 text-center'>
        <h1 className='text-4xl font-bold mb-8'>Skills</h1>
        {/* <ul className='flex justify-center space-x-8 flex-wrap'>
          {skills.map(skill => (
            <li key={skill} className='text-lg text-gray-700'>
              {skill}
            </li>
          ))}
        </ul> */}
        <div class='flex flex-wrap gap-4'>
          <img
            alt='HTML5'
            src='https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
          />
          <img
            alt='Javascript'
            src='https://img.shields.io/badge/-javascript-f7df1c?style=for-the-badge&logo=javascript&logoColor=black'
          />
          <img
            alt='Bootstrap'
            src='https://img.shields.io/badge/-bootstrap-7953b3?style=for-the-badge&logo=javascript&logoColor=white'
          />
          <img
            alt='TypeScript'
            src='https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'
          />
          <img
            alt='React'
            src='https://img.shields.io/badge/-React-45b8d8?style=for-the-badge&logo=react&logoColor=white'
          />
          <img
            alt='Jest'
            src='https://img.shields.io/badge/-jest-be3d19?style=for-the-badge&logo=jest&logoColor=white'
          />
          <img
            alt='Adobe XD'
            src='https://img.shields.io/badge/-Adobe%20XD-ff62f6?style=for-the-badge&logo=Adobe%20XD&logoColor=white'
          />
          <img
            alt='Nodejs'
            src='https://img.shields.io/badge/-Nodejs-43853d?style=for-the-badge&logo=Node.js&logoColor=white'
          />
          <img
            alt='Webpack'
            src='https://img.shields.io/badge/-Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white'
          />
          <img
            alt='Docker'
            src='https://img.shields.io/badge/-Docker-46a2f1?style=for-the-badge&logo=docker&logoColor=white'
          />
          <img
            alt='Redux'
            src='https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white'
          />
          <img
            alt='GraphQL'
            src='https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white'
          />
          <img
            alt='Sass'
            src='https://img.shields.io/badge/-Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white'
          />
          <img
            alt='Styled Components'
            src='https://img.shields.io/badge/-Styled_Components-db7092?style=for-the-badge&logo=styled-components&logoColor=white'
          />
          <img
            alt='Git'
            src='https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white'
          />
          <img
            alt='NPM'
            src='https://img.shields.io/badge/-NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white'
          />
          <img
            alt='Prettier'
            src='https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white'
          />
          <img
            alt='MongoDB'
            src='https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white'
          />
          <img
            alt='AWS'
            src='https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white'
          />
          <img
            alt='Python'
            src='https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'
          />
          <img
            alt='Material-UI'
            src='https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white'
          />
          <img
            alt='Adobe Illustrator'
            src='https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe-illustrator&logoColor=white'
          />
          <img
            alt='Tailwind CSS'
            src='https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white'
          />
          <img
            alt='Express.js'
            src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'
          />
          <img
            alt='Postman'
            src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white'
          />
          <img
            alt='Swagger'
            src='https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black'
          />
          <img
            alt='ESLint'
            src='https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white'
          />
          <img
            alt='Jenkins'
            src='https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white'
          />
          <img
            alt='Linux'
            src='https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black'
          />
          <img
            alt='Jira'
            src='https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white'
          />
          <img
            alt='Confluence'
            src='https://img.shields.io/badge/Confluence-172B4D?style=for-the-badge&logo=confluence&logoColor=white'
          />
        </div>
      </div>
    </Section>
  );
}

export default Skills;

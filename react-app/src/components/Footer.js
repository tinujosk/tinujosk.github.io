import React from 'react';
import { motion } from 'framer-motion';

import tailwindLogo from '../assets/tailwindcssIcon.svg'; // Path to the Tailwind logo
import framerMotionLogo from '../assets/framermotionIcon.svg'; // Path to the Framer Motion logo

function Footer() {
  return (
    <footer className='bg-[#111]  py-6 text-gray-500'>
      <div className='container mx-auto text-center'>
        <p>
          &copy; {new Date().getFullYear()} Tinu Jos K. All rights reserved.
        </p>
        <div className='mt-4'>
          <a
            href='https://www.linkedin.com/in/tinujosk/'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-2 hover:text-blue-600'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/tinujosk'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-2 hover:text-blue-600'
          >
            GithHub
          </a>
          <a
            href='https://stackoverflow.com/users/11564070/tinu-jos-k'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-2 hover:text-blue-600'
          >
            StackOverflow
          </a>
          <a
            href='https://www.freelancer.com/u/Tinujos22'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-2 hover:text-blue-600'
          >
            Freelancer
          </a>
        </div>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-center space-x-4 md:space-y-0 mt-4'>
          <div>
            <a
              href='https://tailwindcss.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'
            >
              <img
                src={tailwindLogo}
                alt='Tailwind CSS'
                className='h-6 w-6 mr-2'
              />
              <span className='text-teal-600'>Tailwind CSS</span>
            </a>
          </div>
          <div>
            <a
              href='https://www.framer.com/motion/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'
            >
              <img
                src={framerMotionLogo}
                alt='Framer Motion'
                className='h-6 w-6 mr-2'
              />
              <span className='text-blue-600'>React Framer Motion</span>
            </a>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/in/tinujosk/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'
            >
              <p className='text-sm md:text-base text-yellow-400'>
                By Tinu Jos K
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

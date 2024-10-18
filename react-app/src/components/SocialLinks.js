import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import freelancerIcon from '../assets/freelancerIcon.svg';

const SocialLinks = () => {
  return (
    <div className='flex flex-col md:flex-row md:space-x-4 p-5 w-full justify-evenly mt-10'>
      <div className='flex flex-col justify-center items-center mb-4 md:mb-0'>
        <span className='text-white'>Connect with me on</span>
        <div className='flex space-x-4 p-5 justify-center'>
          <a
            href='https://www.linkedin.com/in/tinujosk/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size='3x'
              className='text-[#0077B5]'
            />
          </a>
          <a
            href='https://github.com/tinujosk'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faGithub}
              size='3x'
              className='text-[#f2eeee]'
            />
          </a>
          <a
            href='https://stackoverflow.com/users/11564070/tinu-jos-k'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faStackOverflow}
              size='3x'
              className='text-[#F58025]'
            />
          </a>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <span className='text-white text-center'>
          When I don't code, I do Graphic Designing
        </span>
        <a
          href='https://www.freelancer.com/u/Tinujos22'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={freelancerIcon} alt='freelancer icon' />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;

import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className='fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50'>
      <nav className='container mx-auto py-4'>
        <ul className='flex justify-center space-x-6'>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-400'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='experience'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-400'
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to='skills'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-400'
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to='education'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-400'
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to='certifications'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-400'
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to='accomplishments'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-400'
            >
              Accomplishments
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-400'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

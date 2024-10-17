import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className='fixed top-0 w-full bg-black text-gray-500 shadow-lg z-50'>
      <nav className='container mx-auto py-4'>
        <ul className='flex justify-center space-x-6'>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-600'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='experience'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-600'
            >
              Experience & Skills
            </Link>
          </li>
          <li>
            <Link
              to='education'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-600'
            >
              Education & Certifications
            </Link>
          </li>
          <li>
            <Link
              to='accomplishments'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-600'
            >
              Accomplishments
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-blue-600'
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

import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-6'>
      <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className='mt-4'>
          <a
            href='https://github.com/yourprofile'
            className='text-gray-400 hover:text-white mx-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/yourprofile'
            className='text-gray-400 hover:text-white mx-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

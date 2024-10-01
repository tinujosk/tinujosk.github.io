import React from 'react';

function Section({ id, children }) {
  return (
    <section id={id} className='min-h-screen py-16'>
      {children}
    </section>
  );
}

export default Section;

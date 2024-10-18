import React from 'react';

function Section({ id, children, className }) {
  return (
    <section
      id={id}
      className={`flex items-center min-h-screen py-8 px-6 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;

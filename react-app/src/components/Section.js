import React from 'react';

function Section({ id, children, className }) {
  return (
    <section
      id={id}
      className={`flex items-center min-h-screen py-16 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;

import React from 'react';
import Section from './Section';
import SocialLinks from './SocialLinks';
import Credits from './Credits';
import { ReactTyped } from 'react-typed';

function escapeHtml(input) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return input.replace(/[&<>"']/g, char => map[char]);
}

const intro =
  "<div class='whitespace-normal ml-28 mb-0'>Software Engineer with 6+ years of experience in software development specializing in JavaScript (React.js and Node.js). Skilled in writing clean optimized code, with knowledge of automation, cloud computing, UI/UX design and experience working with Linux-based systems. Adept at meeting tight deadlines using agile methodologies and a quick learner, constantly adapting to new technologies and environments.</div>";

function About() {
  return (
    <Section id='about' className='flex justify-center w-full text-white'>
      <div className='container p-20 w-1/2'>
        <pre className='min-h-96'>
          <ReactTyped
            startWhenVisible
            strings={[
              '// About me, Tinu Jos K\n' +
                escapeHtml(
                  `export default function Introduction() {\n\t return (\n\t\t <div>\n`
                ) +
                intro +
                escapeHtml('\t\t</div>\n)};'),
            ]}
            typeSpeed={8}
          />
        </pre>
        <SocialLinks />
      </div>
    </Section>
  );
}

export default About;

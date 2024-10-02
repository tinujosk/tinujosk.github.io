import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className='pt-16'>
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Accomplishments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

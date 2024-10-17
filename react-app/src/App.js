import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className='pt-16 bg-[linear-gradient(180deg,_black_30%,_#111_50%,_#111_100%)]'>
        <About />
        <Experience />
        <Education />
        {/* <Accomplishments /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

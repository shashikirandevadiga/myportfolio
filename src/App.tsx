import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SearchProvider } from './context/SearchContext';
import { MobileMenuProvider } from './context/MobileMenuContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Certifications from './components/Sections/Certifications';
import Education from './components/Sections/Education';
import Contact from './components/Sections/Contact';
import SearchModal from './components/UI/SearchModal';
import { projectItems } from './components/Sections/Projects';

function App() {

  return (
    <ThemeProvider>
      <SearchProvider>
        <MobileMenuProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <SearchModal />
            <main className="flex-grow">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Certifications />
              <Education />
              <Contact />
            </main>
            <Footer />
          </div>
        </MobileMenuProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
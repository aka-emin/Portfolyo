import React from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Resume } from './sections/Resume';
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
      <ThemeProvider>
        <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
          <Header />
          <main>
            <Hero />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
  );
}

export default App;
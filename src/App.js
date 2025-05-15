import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <SocialLinks />
        </div>
    );
}

export default App;

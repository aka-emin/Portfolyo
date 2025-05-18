import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [prevScroll, setPrevScroll] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const direction = currentScroll > prevScroll ? "down" : "up";
      
      if (direction !== scrollDirection && 
          (currentScroll - prevScroll > 10 || currentScroll - prevScroll < -10)) {
        setScrollDirection(direction);
      }
      
      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, prevScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'visible';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'visible';
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar ${scrollDirection === "down" ? "hide" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-text">M</span>
        </Link>

        <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
            <span className="nav-number">01.</span> ANASAYFA
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
            <span className="nav-number">02.</span> HAKKIMDA
          </Link>
          <Link to="/skills" className={`nav-link ${isActive('/skills')}`} onClick={closeMenu}>
            <span className="nav-number">03.</span> YETENEKLERİM
          </Link>
          <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`} onClick={closeMenu}>
            <span className="nav-number">04.</span> PROJELERİM
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>
            <span className="nav-number">05.</span> İLETİŞİM
          </Link>
       
        </div>

        <div className="social-links">
          <a href="https://github.com/aka-emin" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/emin.akagndzz/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
};

export default Navbar; 
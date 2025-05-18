import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/pp1.jpg)` }}>
      <div className="home-content">
        <div className="profile-image">
          <img src={`${process.env.PUBLIC_URL}/images/ben.png`} alt="Muhammet Emin Akagündüz" />
        </div>
        <h1>Merhaba, Ben Muhammet Emin Akagündüz</h1>
        <h2>Portfolyama hoşgeldiniz</h2>
        <p>Game Developer</p>
        <Link to="/contact" className="btn">İletişime Geç</Link>
      </div>
    </div>
  );
};

export default Home; 
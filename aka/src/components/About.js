import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const skills = [
    { name: 'HTML5', level: 75 },
    { name: 'CSS3', level: 70 },
    { name: 'JavaScript', level: 30 },
    { name: 'React.js', level: 35 },
    { name: 'Node.js', level: 50 },
    { name: 'Python', level: 40 },
    { name: 'Java', level: 40 },
    { name: 'C#', level: 70 },
    { name: 'Unity', level: 80 }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Ben Kimim?</h1>
          <p>Game Developer</p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Merhaba, Ben Muhammet</h2>
              <p>
                Merhaba ben Muhammet Emin Akagündüz, Bilgisayar Mühendisiyim. İlgi alanım yazılım ve oyun geliştirme. Aynı zamanda vücut geliştirme ile ilgileniyor ve üniversitemin Amerikan futbolu takımında aktif olarak yer alıyorum.
              </p>
              <p>
                Üniversite eğitimim boyunca edindiğim teorik bilgileri, pratik projelerle pekiştirdim. Projelerimde kullanılan diller arasında C#, Python, JavaScript, HTML, CSS, SQL, Unity gibi dilleri kullanıyorum.
              </p>
            </div>
            <div className="about-stats">
              <Link to="/portfolio" className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Tamamlanan Proje</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section">
        <div className="container">
          <h2 className="section-title">Yeteneklerim</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="education section">
        <div className="container">
          <h2 className="section-title">Eğitim</h2>
          <div className="education-grid">
            <div className="education-item">
              <h3>Bilgisayar Mühendisliği</h3>
              <p className="education-school">Balikesir Üniversitesi</p>
              <p className="education-year">2023</p>
              <p className="education-description">
                Balıkesir Üniversitesi 2. sınıf bilgisayar mühendisliği bölümünde eğitim görmekteyim. aldığım eğitim süresince, temel mühendislik bilgilerinin yanı sıra, 
                yazılım geliştirme, veri yapıları, algoritmalar ve web teknolojileri alanlarında kapsamlı bilgi edindim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
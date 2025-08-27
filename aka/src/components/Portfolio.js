import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Realistic Farm Game',
      description: 'Gercekci bir 3D farm oyunu. Proje şuanlık gelişim halinde ve private proje olduğundan erişime kapalıdır',
      image: '/images/reelFarm.png',
      isPassive: true,
      isPrivate: true
    },
    {
      id: 2,
      title: 'Örnek word',
      description: 'Word uygulamasına benzer bir uygulama.Git hubda bulunan kodları kullanarak yapılmıştır.',
      image: '/images/word.png',
      github: 'https://github.com/aka-emin/Not-Uygulamas-/tree/main'
    },
    {
      id: 3,
      title: 'Soru Bankası',
      description: 'Soru bankası uygulaması. Kullanıcılar soru ekleyebilir, soru çözebilir ve sonuçlarını görüntüleyebilir.',
      image: '/images/soru.png',
      github: 'https://github.com/aka-emin/soru-bankas-/tree/main'
    },
    {
      id: 4,
      title: 'Hayvan Yaşam Hesaplama',
      description: 'Hayvanların yaşamını insan yaşam katsayısı ile hesaplayan uygulama.',
      image: '/images/yaşHesaplama.png',
      github: 'https://github.com/aka-emin/ya-am-hesaplama/tree/main'
    },
    {
      id: 5,
      title: 'Gun Game',
      description: 'FPS tarzı küçük bir Gun Game projesi. Yakında detaylar ve bağlantılar eklenecek.',
      image: '/images/Lobi.png',
      isPassive: false,
      github: 'https://github.com/aka-emin/buildeneme',
      isPrivate: false
    }
  ];

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <h1>Portfolyo</h1>
          <p>Geliştirdiğim Projeler</p>
        </div>
      </section>

      <section className="portfolio-content section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map(project => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img 
                    src={process.env.PUBLIC_URL + project.image} 
                    alt={project.title}
                    className="project-img"
                  />
                  {project.isPassive && <div className="passive-overlay">Geliştirme Aşamasında</div>}
                </div>
                <div className="portfolio-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-links">
                    {project.isPrivate ? (
                      <button className="btn btn-secondary disabled" disabled>
                        <i className="fab fa-github"></i> Private Proje
                      </button>
                    ) : (
                      <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> Projeye Git
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 
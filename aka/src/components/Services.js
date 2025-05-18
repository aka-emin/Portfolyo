import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎮',
      title: 'Oyun Geliştirme',
      description: 'Unity oyun motoru üzerinde C# programlama dili kullanarak 2D ve 3D oyunlar geliştiriyorum. Oyun mekaniği tasarımı, karakter kontrolleri, fizik sistemleri ve kullanıcı arayüzü entegrasyonu konularında deneyimliyim.'
    },
    {
      icon: '🎨',
      title: '3D Modelleme',
      description: 'Fusion 360 yazılımı ile profesyonel 3D modeller oluşturuyorum. Teknik çizimler, mekanik parçalar ve endüstriyel tasarımlar konusunda parametrik modelleme yapabiliyorum.'
    },
    {
      icon: '🖥️',
      title: 'Masaüstü Uygulama Geliştirme',
      description: 'Python programlama dili ve PyQt5 kütüphanesi kullanarak modern masaüstü uygulamaları geliştiriyorum. SQL veritabanı entegrasyonu ile verilerin güvenli bir şekilde depolanması ve yönetilmesini sağlıyorum.'
    },
    {
      icon: '🌐',
      title: 'Web Geliştirme',
      description: 'React, HTML, CSS ve JavaScript teknolojilerini kullanarak modern ve responsive web siteleri tasarlıyorum. Kullanıcı dostu arayüzler ve interaktif web uygulamaları geliştirme konusunda uzmanım.'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Neler Yapabilirim?</h1>
          <p>Uzmanlık Alanlarım</p>
        </div>
      </section>

      <section className="services-content section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 
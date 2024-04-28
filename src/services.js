import React from 'react';
import './Services.css';
import url1 from './resim1.png';
import url2 from './resim2.png';
import url3 from './resim3.png';
import url4 from './resim4.png';
import url5 from './resim5.png';
import url6 from './resim6.png';

const Services = () => {
  const servicesData = [
    { id: 1, title: "Web Design and Development", description: "We create customized, modern, and user-friendly websites for our clients. Our designs combine aesthetics and functionality, ensuring brands establish a strong digital presence.", imageUrl: url1 },
    { id: 2, title: "Mobile App Development", description: "We develop custom applications for mobile devices to help our clients reach wider audiences. With user-friendly interfaces and high-performance applications, we optimize mobile experiences.", imageUrl: url2 },
    { id: 3, title: "UI/UX Design", description: "Focusing on user experience, we craft interactive and user-centric designs. We produce visual and functional solutions to engage target audiences and enhance conversions.", imageUrl: url3 },
    { id: 4, title: "Digital Marketing Strategies", description: "We develop comprehensive digital marketing strategies to strengthen our clients' online presence. With expertise in SEO, social media management, content marketing, and advertising campaigns, we help businesses thrive.", imageUrl: url4 },
    { id: 5, title: "E-commerce Solutions", description: "We provide scalable and secure e-commerce platforms for our clients. By designing user-friendly e-commerce websites, we empower our clients to increase online sales and gain a competitive edge.", imageUrl: url5 },
    { id: 6, title: "SEO Consulting and Optimization", description: "We offer SEO consulting and optimization services to ensure our clients achieve greater visibility on search engines. By ranking higher in search results, we enhance organic traffic to their websites.", imageUrl: url6 }
  ];

  return (
    <div className="services-container">
      {servicesData.map(service => (
        <div key={service.id} className="service-card">
          <div className="service-image">
            <img src={service.imageUrl} alt={service.title} />
          </div>
          <div className="service-info">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Services;

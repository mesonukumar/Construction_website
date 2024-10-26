import React from 'react';
import mdImage from '../assets/Mdimage.jpg'; // Replace with actual image path
import './About.css'; // Ensure to create and style this CSS file

const About = () => {
  return (
    <div className="about-us-container">
      <section className="md-section">
        <div className="md-image-container">
          <img src={mdImage} alt="Deepak Kumar - Managing Director" className="md-image" />
        </div>
        <div className="md-details">
          <h2 className="md-name">Deepak Kumar</h2>
          <h3 className="md-title">Managing Director</h3>
          <p className="md-description">
            Deepak Kumar is an experienced leader who oversees the team's operations and projects. With years of industry experience, he brings strategic insight, vision, and dedication to guiding the team towards excellence. His commitment to quality and innovation is at the core of our company’s success, driving forward ambitious projects and building strong client relationships.
          </p>
        </div>
      </section>

      <section className="company-section">
        <h2 className="company-title">About Our Company</h2>
        <p>
          Our company is a pioneer in the construction and architectural industry, providing top-notch services that bring your visions to life. We specialize in modern, innovative designs and ensure that every project is executed with precision and attention to detail. From concept to completion, our team of experts works closely with clients to deliver projects that exceed expectations.
        </p>
        <h3 className="services-title">Our Services</h3>
        <ul>
          <li><strong>Architectural Design:</strong> Unique, functional designs tailored to your needs.</li>
          <li><strong>Construction Management:</strong> Complete oversight to ensure projects are on time and within budget.</li>
          <li><strong>Renovations:</strong> Transforming spaces with our renovation services.</li>
          <li><strong>Interior Design:</strong> Creating stylish, comfortable interiors that reflect current trends.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

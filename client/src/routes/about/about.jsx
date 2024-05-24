import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Website</h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to our Real Estate Platform! Our mission is to simplify the process of finding your next home, whether you are looking to buy or rent. We provide a comprehensive and user-friendly interface that allows you to search for properties based on your specific needs and budget.
        </p>
        <p>
          Our platform offers a unique feature that allows users to chat with each other, making it easier to discuss potential properties, share experiences, and gain insights. Whether you are a first-time homebuyer, an experienced investor, or someone looking for a rental property, our platform caters to all.
        </p>
        <p>
          We understand that finding the right property can be a daunting task, which is why we are committed to providing you with the best tools and resources to make informed decisions. Our advanced search options, detailed property listings, and interactive community features are designed to enhance your real estate experience.
        </p>
        <p>
          Thank you for choosing our platform. We look forward to helping you find your perfect home!
        </p>
      </div>
    </div>
  );
};

export default About;

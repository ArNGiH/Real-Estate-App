import React from 'react';
import './contactss.scss';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contacts-content">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> 123 Henry Ave, Suite 100, Home City, London 12345
          </p>
          <p>
            <strong>Email:</strong> contact@estatingplatform.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            We are here to assist you with any questions or concerns you may have. Feel free to reach out to us via email or phone, or visit our office during business hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

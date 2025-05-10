import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>If you’d like to get in touch, feel free to reach out to me via email or phone.</p>

      <div className="contact-info">
        <p>Email: <a href="https://mail.google.com/mail/">nagarajtandelnagaraj@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+91 7338653279</a></p>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./social.css"
const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/Dr.Laxman.Yadav.1988" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.youtube.com/@DrLaxmanYadav/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://twitter.com/DrLaxman_Yadav" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/drlaxman_yadav" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="mailto:laxmanhindi88@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
};

export default SocialLinks;

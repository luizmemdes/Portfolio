import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>&copy; {currentYear} Luiz Mendes. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/luiz-nmendes/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/luizmemdes" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
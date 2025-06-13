import React from 'react';
import './Contact.css'; // Vamos criar este arquivo de CSS em seguida
// Se quiser usar react-icons:
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Entre em Contato</h2>
        <p className="contact-description">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contatar através dos links abaixo!
        </p>
        <div className="contact-links">
          <a 
            href="https://www.linkedin.com/in/luiz-nmendes/" // SUBSTITUA PELO SEU LINK DO LINKEDIN
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn linkedin"
          >
            {/* Se usar react-icons: <FaLinkedin /> */}
            LinkedIn
          </a>
          <a 
            href="https://github.com/luizmemdes" // SUBSTITUA PELO SEU LINK DO GITHUB
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn github"
          >
            {/* Se usar react-icons: <FaGithub /> */}
            GitHub
          </a>
          <a 
            href="mailto:luiznmendes2@gmail.com" // SUBSTITUA PELO SEU ENDEREÇO DE EMAIL
            className="contact-btn email"
          >
            {/* Se usar react-icons: <FaEnvelope /> */}
            Email
          </a>
          {/* Opcional: Adicionar link para download do currículo */}
          {/* <a href="/seu_curriculo.pdf" download className="contact-btn resume">
            Baixar Currículo
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
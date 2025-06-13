import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
       
        <img src="/eu.jpg" alt="Luiz" className="hero-image" />

        <h1 className="hero-title">Olá, eu sou Luiz, um Desenvolvedor Full-stack.</h1>
        <p className="hero-subtitle">
          Transformando ideias em soluções digitais robustas com **React, Java e Banco de Dados**.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Ver Projetos</a>
          <a href="#contact" className="btn btn-secondary">Entre em Contato</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">Sobre Mim</h2>
        <p className="about-description">
          Olá! Eu sou Luiz, um desenvolvedor apaixonado por tecnologia e inovação. Minha jornada no mundo da programação começou com a curiosidade de como as coisas funcionam por trás das telas, e desde então tenho me dedicado a transformar ideias em soluções digitais eficientes e robustas.
        </p>
        <p className="about-description">
          Minha experiência abrange tanto o desenvolvimento **front-end** com **React**, criando interfaces de usuário intuitivas e dinâmicas, quanto o **back-end** com **Java**, construindo sistemas escaláveis e seguros. Tenho um forte conhecimento em **Banco de Dados**, garantindo a integridade e otimização dos dados.
        </p>
        <p className="about-description">
          Sou movido por desafios e estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Acredito que a colaboração e a busca contínua por conhecimento são chaves para o sucesso. Estou animado para contribuir em projetos inovadores e fazer a diferença!
        </p>
      </div>
    </section>
  );
}

export default About;
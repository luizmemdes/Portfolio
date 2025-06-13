import React from 'react';
import './Skills.css'; // Vamos criar este arquivo de CSS em seguida
// Se quiser usar ícones de bibliotecas como react-icons, instale e importe-os aqui
// Ex: import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';

function Skills() {
  // Liste suas habilidades aqui. Seja específico!
  const frontendSkills = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "js" },
    { name: "React", icon: "react" },
    // { name: "Redux", icon: "redux" }, // Exemplo de outras libs React
    // { name: "Tailwind CSS", icon: "tailwind" } // Exemplo de framework CSS
  ];

  const backendSkills = [
    { name: "Java", icon: "java" },
    // { name: "Spring Boot", icon: "springboot" }, // Adicione se conhecer
    // { name: "Node.js", icon: "nodejs" },
    // { name: "Express.js", icon: "express" }
  ];

  const databaseSkills = [
    { name: "SQL", icon: "sql" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
    // { name: "MongoDB", icon: "mongodb" }
  ];

  const toolsAndConcepts = [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "RESTful APIs", icon: "api" },
    // { name: "Figma", icon: "figma" },
    // { name: "Metodologias Ágeis", icon: "agile" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Minhas Habilidades</h2>

        <div className="skills-category">
          <h3>Desenvolvimento Front-end</h3>
          <div className="skill-list">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                {/* Se usar react-icons, pode ser <FaHtml5 className="skill-icon" /> */}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Desenvolvimento Back-end</h3>
          <div className="skill-list">
            {backendSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Banco de Dados</h3>
          <div className="skill-list">
            {databaseSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Ferramentas e Conceitos</h3>
          <div className="skill-list">
            {toolsAndConcepts.map((skill, index) => (
              <div key={index} className="skill-item">
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
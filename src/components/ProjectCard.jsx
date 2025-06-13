import React from 'react';
import './ProjectCard.css'; // Vamos criar este arquivo de CSS em seguida
// Se você for usar ícones de bibliotecas como react-icons, importe-os aqui:
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={`Imagem do projeto ${project.title}`} className="project-image" />
      <div className="project-info">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubLink && ( // Só mostra o botão se houver link do GitHub
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn project-btn github-btn"
            >
              {/* Se usar react-icons: <FaGithub /> */}
              GitHub
            </a>
          )}
          {project.demoLink && ( // Só mostra o botão se houver link da demo
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn project-btn demo-btn"
            >
              {/* Se usar react-icons: <FaExternalLinkAlt /> */}
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
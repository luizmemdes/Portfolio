import React from 'react';
import ProjectCard from './ProjectCard'; // Vamos criar este componente em seguida
import './Projects.css'; // Vamos criar este arquivo de CSS em seguida

// Array de objetos com os dados dos seus projetos
// Você vai adicionar seus projetos REAIS aqui!
const projectsData = [
  {
    id: 1,
    title: "Nome do Projeto 1 (Ex: Sistema de Gerenciamento)",
    description: "Um breve resumo do projeto. Destaque o problema que ele resolveu e suas funcionalidades principais.",
    technologies: ["React", "Java", "Spring Boot", "MySQL", "CSS"],
    imageUrl: "/projeto1.jpg", // Imagem do projeto (coloque na pasta public)
    githubLink: "https://github.com/luizmemdes/RabbitConnect", // Link para o GitHub do projeto
    demoLink: "https://github.com/luizmemdes/cadastro" // Link para a demo online (se houver)
  },
  {
    id: 2,
    title: "Nome do Projeto 2 (Ex: Blog Pessoal)",
    description: "Projeto focado em front-end ou uma integração com API. Descreva o que ele faz e quais tecnologias você usou.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "API REST"],
    imageUrl: "/projeto2.jpg",
    githubLink: "https://github.com/luizmemdes/NomeDoRepositorio2",
    demoLink: null
  },
  {
    id: 3,
    title: "Nome do Projeto 3 (Ex: Aplicativo de Tarefas)",
    description: "Pode ser um projeto menor ou um desafio técnico que você resolveu. Mostre suas habilidades de resolução de problemas.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "MongoDB"],
    imageUrl: "/projeto3.jpg",
    githubLink: "https://github.com/luizmemdes/ZELDAMAUI-master",
    demoLink: null // Se não tiver demo, use 'null'
  }
  // Adicione mais objetos de projeto aqui, seguindo o mesmo formato!
  // Lembre-se de usar seus projetos REAIS com links válidos.
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Meus Projetos</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
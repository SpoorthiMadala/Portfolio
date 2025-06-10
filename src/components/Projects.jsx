import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'PDF Q&A App',
      tech: 'CTransformers, LangChain',
      link: 'https://github.com/spoorthi/Machine-Learning-Algorithms',
    },
    {
      name: 'Supervised ML Repo',
      tech: 'SVC, SVR, Decision Trees',
      link: 'https://github.com/yourusername/supervised-ml-repo',
    },
    {
      name: 'Image Classifier',
      tech: 'CNN + Regularization',
      link: 'https://github.com/yourusername/image-classifier',
    },
    {
      name: 'AI Chatbot',
      tech: 'LangChain + Hugging Face',
      link: 'https://github.com/yourusername/ai-chatbot',
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{proj.name}</h3>
            <p><strong>Tech:</strong> {proj.tech}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

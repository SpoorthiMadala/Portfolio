import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['Artificial Intelligence','Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI','React.js', 'Node.js', 'Express.js', 'MongoDB'];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;

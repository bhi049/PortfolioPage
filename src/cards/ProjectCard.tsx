import React, { useState } from "react";
import "../styles/ProjectCard.css"; 

interface ProjectCardProps {
  image: string;
  title: string;
  shortDescription: string;
  githubUrl: string;
  description: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  shortDescription,
  githubUrl,
  description,
  techStack,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ backgroundImage: `url(${image})` }}>
          <div className="overlay">
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-badge">{tech}</div>
            ))}
          </div>
          <a href={githubUrl} className="github-link" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

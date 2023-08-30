import React from 'react';
import '../App.css'; 

import image1 from '../Assets/PWG.png';
import image2 from '../Assets/note taker.png';
import image3 from '../Assets/work day scheduler.png';
import image4 from '../Assets/Employee database tracker.png';
import image5 from '../Assets/Text editing doc.png';
import image6 from '../Assets/GNK.png'; 


const projects = [
  {
    id: 1,
    imageUrl: image1, 
    githubLink: 'https://liljlock.github.io/Password-Generator/',
  },
  {
    id: 2,
    imageUrl: image2,
    githubLink: 'https://ancient-fjord-32804.herokuapp.com',
  },
  {
    id: 3,
    imageUrl: image3,
    githubLink: 'https://liljlock.github.io/Daily-Schedule/',
  },
  {
    id: 4,
    imageUrl: image4,
    githubLink: 'https://github.com/liljlock/employee-tracker/tree/main/tracker',
  },
  {
    id: 5,
    imageUrl: image5,
    githubLink: 'https://lockprogressive-web-applica-58eb97a15619.herokuapp.com',
  },
  {
    id: 6,
    imageUrl: image6,
    githubLink: 'https://goodnight-king-4073d0f5eac6.herokuapp.com',
  },
  
];

function renderProjects() {
  return projects.map((project) => (
    <div key={project.id} className="project-box">
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <img src={project.imageUrl} alt={`Project ${project.id}`} />
      </a>
    </div>
  ));
}

function Portfolio() {
  return (
    <div className="page-container">
      <h2 className="page-heading">Portfolio</h2>
      <div className="page-content">
        <div className="projects-container">{renderProjects()}</div>
      </div>
    </div>
  );
}

export default Portfolio;

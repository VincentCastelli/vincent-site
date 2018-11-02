import React from 'react';
import project1 from '../img/project1.jpg';
import project2 from '../img/project2.jpg';
import project3 from '../img/project3.jpg';
import project4 from '../img/project4.jpg';
import project5 from '../img/project5.jpg';

const Projects = () => {
  return (
    <div className="projects-main">
      <h1 className="lg-heading">
        My&nbsp;
        <span className="text-secondary">
          Work
        </span>
      </h1>
      <div className="projects">
        <div className="item">
          <a href="#!">
            <img src={project1} alt="project1" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" />
            Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" />
            Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={project2} alt="project2" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" />
            Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" />
            Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={project3} alt="project3" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" />
            Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" />
            Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={project4} alt="project4" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" />
            Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" />
            Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={project5} alt="project5" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" />
            Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

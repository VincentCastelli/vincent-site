//eslint-disable
import React from "react";
import project2 from "../img/mftMe.jpg";
import project3Mp4 from "../img/CavaTable.mp4";
import project3Ogv from "../img/CavaTable.ogv";
import project3Webm from "../img/CavaTable.webm";
import project3 from "../img/project3.jpg";
import project4 from "../img/chartjs.jpg";

const Projects = () => {
  return (
    <div className="projects-main">
      <h1 className="lg-heading">
        My&nbsp;
        <span className="text-secondary">Work</span>
      </h1>
      <div className="projects">
        <div className="item">
          <a href="#!">
            <div className="coming-soon" />
          </a>
        </div>
        <div className="item">
          <a href="#!" className="img-anchor">
            <img src={project2} alt="project2" />
            <div className="img-caption">
              <h4>MFT 4 Me</h4>
            </div>
          </a>
          <a
            href="https://github.com/VincentCastelli/mft-site-prod"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            <i className="fab fa-github" />
            Github
          </a>
        </div>
        <div className="item">
          <a href="#!" className="img-anchor">
            <video controls preload="none" poster={project3}>
              <source src={project3Mp4} type="video/mp4" />
              {/* Webkit Video */}
              <source src={project3Webm} type="video/webm" />
              {/* Chrome / Newest versions of Firefox and Opera */}
              <source src={project3Ogv} type="video/ogv" />
              {/* Firefox and Opera */}
              Your browser does not support the video tag.
              <img src={project3} alt="Cavatable Functional Walkthrough" />
            </video>
            <div className="img-caption">
              <h4>Cavatable</h4>
            </div>
            <a
              href="https://github.com/cava-devs/vincent-photos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark hot-fix"
            >
              <i className="fab fa-github" />
              Github
            </a>
          </a>
        </div>
        <div className="item">
          <a href="#!" className="img-anchor">
            <img src={project4} alt="project4" />
            <div className="img-caption">
              <h4>Cryptocurrency Charting Tool</h4>
            </div>
          </a>
          <a
            href="https://vincentcastelli.github.io/bitcoin-chartjs/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light"
          >
            <i className="fas fa-eye" />
            Project
          </a>
          <a
            href="https://github.com/VincentCastelli/bitcoin-chartjs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            <i className="fab fa-github" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

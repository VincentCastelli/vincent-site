import React from 'react';

const Home = () => {
  return (
    <div className="home-main">
      <h1 className="lg-heading">
        Vincent&nbsp;
        <span className="text-secondary">
          Castelli
        </span>
      </h1>
      <h2 className="sm-heading">
        Software Engineer
      </h2>
      <div className="icons">
        <a href="https://www.linkedin.com/in/vincent-castelli-42366146/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="https://github.com/VincentCastelli" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
    </div>
  );
};

export default Home;

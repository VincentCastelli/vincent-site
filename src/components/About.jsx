import React from 'react';

const About = () => {
  return (
    <div className="about-main">
      <h1 className="lg-heading">
        About&nbsp;
        <span className="text-secondary">
          Me
        </span>
      </h1>
      <div className="about-info">
        <div className="bio-image" />

        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut modi ab laboriosam sequi molestias est placeat repudiandae inventore.
            Iusto vero ipsa magnam numquam est quaerat illum at natus sed accusamus.
          </p>
        </div>
        <div className="job job-1">
          <h3>Looking For Opportunities</h3>
          <h6>Software Engineer</h6>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Aut modi ab laboriosam sequi molestias est placeat repudiandae inventore.</li>
            <li>Iusto vero ipsa magnam numquam est quaerat illum at natus sed accusamus.</li>
          </ul>
        </div>
        <div className="job job-2">
          <h3>Uber Eats</h3>
          <h6>Project Manager</h6>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Aut modi ab laboriosam sequi molestias est placeat repudiandae inventore.</li>
            <li>Iusto vero ipsa magnam numquam est quaerat illum at natus sed accusamus.</li>
          </ul>
        </div>
        <div className="job job-3">
          <h3>Microsoft</h3>
          <h6>Project Lead</h6>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Aut modi ab laboriosam sequi molestias est placeat repudiandae inventore.</li>
            <li>Iusto vero ipsa magnam numquam est quaerat illum at natus sed accusamus.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

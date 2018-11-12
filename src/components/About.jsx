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
          Software engineer with strong web development, product design, and leadership experience.
          I utilize Javascript, React and Redux to build dynamic front-end views,
          as well as my experience in Node.js/Express, Redis, and several SQL or NoSQL databases
          to create RESTful APIs and service-oriented architectures on the back end.
          As a leader, I’ve managed professional staff on time-sensitive projects,
          cultivated a positive work environment, and developed standard operating procedures.
            <br />
            <br />
          I am passionate about platforms that put communities first and bring users together.
          Engineering allows me to use my creativity to bring things into existence.
          I carry this passion with me in any position, as I have with previous work
          at Uber and Microsoft.
          </p>
        </div>
        <div className="job job-1">
          <h2>Recent Projects</h2>
          <h4>Software Engineer</h4>
          <ul>
            <li>
              <span className="text-secondary">Portfolio Site&nbsp;</span>
              - Personal portfolio site with bio, recent work, and contact information
            </li>
            <li>
              <span className="text-secondary">Windowseat&nbsp;</span>
              - Backend for a frontend legacy codebase reservations microservice
            </li>
            <li>
              <span className="text-secondary">Cavatable&nbsp;</span>
              - Photo media microservice for a frontend item detail page
            </li>
          </ul>
        </div>
        <div className="job job-2">
          <h2>Uber Eats</h2>
          <h4>Project Manager, Enterprise</h4>
          <ul>
            <li>
              Managed team of seven analysts providing quality assurance of client tools
              and maintenance of program platform
            </li>
            <li>
              Managed onboarding activities for local chain restaurants and enterprise
              partnerships on UberEATS platform
            </li>
            <li>
              Refined workflow policies, standard operating procedures and recommended
              streamlined process improvements
            </li>
          </ul>
        </div>
        <div className="job job-3">
          <h2>Microsoft</h2>
          <h4>Project Lead, Maps</h4>
          <ul>
            <li>
              Managed ops team with 40+ cartographers producing detailed maps of all
              Bay Area counties
            </li>
            <li>
              Allocated staff to functional teams based on skills, interests, and business needs
            </li>
            <li>
            Identified structure of workflow, training, quality assurance, policy,
            and instrumentation and reporting teams
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

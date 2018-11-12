import React from 'react';

const Contact = () => {
  return (
    <div className="contact-main">
      <h1 className="lg-heading">
        Contact&nbsp;
        <span className="text-secondary">
          Me
        </span>
      </h1>
      <div className="contact-info">
        <div>
          <span className="text-secondary">
            <i className="fas fa-envelope">&nbsp;&nbsp;</i>
          </span>
          vincentsalvatorecastelli@gmail.com
        </div>
        <div>
          <span className="text-secondary">
            <i className="fas fa-phone">&nbsp;&nbsp;</i>
          </span>
          718-724-4386
        </div>
        <div>
          <a href="https://drive.google.com/file/d/14NHdsb5unM_SW-CUGJ3X3cI6odhm-jhB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <span className="text-secondary">
              <i className="fas fa-file">&nbsp;&nbsp;</i>
            </span>
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

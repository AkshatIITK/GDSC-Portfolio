import React from 'react';
import './about.css';

const About = () => {
    return (
      <section className="stylish-about-me" id="stylish-about-me" id='about'>
      <div className="stylish-about-me-container">
          <h2 className="stylish-about-me-title">About Me</h2>
          <div className="about-me-card">
              <div className="about-me-details">
                  <p><strong>Name:</strong> Akshat</p>
                  <p><strong>Occupation:</strong> Web Developer</p>
                  <p><strong>Birthday:</strong> 15/07/2005</p>
                  <p><strong>Age:</strong> 18</p>
                  <p><strong>Address:</strong> A412, Hall13, IIT Kanpur, UP, INDIA</p>
                  <p><strong>Email:</strong> akshat23@iitk.ac.in</p>
                  <p><strong>Phone:</strong> +91 9389733410</p>
                  <p><strong>Nationality:</strong> INDIA</p>
                  <p><strong>Study:</strong> IIT Kanpur B.Tech MSE</p>
              </div>
          </div>
      </div>
  </section>
    );
}

export default About;

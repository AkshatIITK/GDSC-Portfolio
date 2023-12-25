import '..//projects/FeaturedProjects.css'
// FeaturedProjects.js

import React from 'react';
import calculator from '../../assets/calculator.png'
import timetable from '../../assets/timetable.png'
import reactblog from '../../assets/reactblog.png'


const FeaturedProjects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2 className="projects-title">Projects</h2>
                <div className="project-card">
                    <div className="project-image">
                        <img src={calculator} alt="" />
                    </div>
                    <div className="project-details">
                        <h3 className="project-name">Calculator</h3>
                        <p className="project-description">Calculator Using HTML,CSS, and JS</p>
                        <a href="#" className="project-link">View Project</a>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="project-card">
                    <div className="project-image">
                        <img src={timetable} alt="" />
                    </div>
                    <div className="project-details">
                        <h3 className="project-name">Time Table</h3>
                        <p className="project-description">Time Table Uing HTML,CSS,JS</p>
                        <a href="#" className="project-link">View Project</a>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div className="project-card" id='project'>
                    <div className="project-image">
                        <img src={reactblog} alt="" />
                    </div>
                    <div className="project-details">
                        <h3 className="project-name">React Blog</h3>
                        <p className="project-description">React BLog Made with the help of Youtube</p>
                        <a href="#" className="project-link">View Project</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default FeaturedProjects;

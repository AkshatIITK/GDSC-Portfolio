
import '../home/home.css';
import avatarImage from '../../assets/rocket.jpg';

// Home.js

// Home.js

import React, { useEffect } from 'react';
import TypeIt from 'typeit';


const Home = () => {
    useEffect(() => {
        new TypeIt('.home-title', {
            strings: ["Hello, I'm Akshat", "a Web Developer", "an Undergraduate Student at IIT Kanpur"],
            speed: 50,
            breakLines: false,
            waitUntilVisible: true,
        }).go();
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-container">
                <img src={avatarImage} alt="Akshat's Avatar" className="avatar" />
                <h1 className="home-title"></h1>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100095250220909" className="simple-icon">
                        <i className="icon-social-facebook"></i>
                    </a>
                    <a href="https://twitter.com/IITKAkshat" className="simple-icon">
                        <i className="icon-social-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/akshat-iitk-5709a7282/" className="simple-icon">
                        <i className="icon-social-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/akshat_knpr/" className="simple-icon">
                        <i className="icon-social-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@AkshatIITK/featured" className="simple-icon">
                        <i className="icon-social-youtube"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;

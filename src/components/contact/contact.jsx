import React from 'react';
import './contact.css';



const Contact = () => {
    return (
        <section className="contact-me" id="contact">
            <div className="contact-container">
                <h2 className="section-title">Contact Me</h2>
                <p className="section-subtitle">Feel free to reach out!</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows="4" placeholder="Type your message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

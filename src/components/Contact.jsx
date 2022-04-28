import React from 'react';

const Contact = () => {
    return (
        <section className='contact' id="contact" name="contact">
            <h2>Get in touch</h2>
            <div className='links'>
            <p className='email'><span className='email-span'>granierc@protonmail.com</span></p>
            <a href="https://github.com/camille-granier" className='github-link' target="_blank" rel="noreferrer">Github</a>
            </div>
            <p className='dev'>Developed by Camille Granier</p>
        </section>
    );
};

export default Contact;
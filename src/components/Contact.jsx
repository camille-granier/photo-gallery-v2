import React from 'react';

const Contact = () => {
    return (
        <div className='contact' id="contact">
            <h2>Get in touch</h2>
            <div className='links'>
            <p className='email'><span className='email-span'>granierc@protonmail.com</span></p>
            <a href="https://github.com/camille-granier" className='github-link' target="_blank" rel="noreferrer">Github</a>
            </div>
            <p className='dev'>Developped by Camille Granier</p>
        </div>
    );
};

export default Contact;
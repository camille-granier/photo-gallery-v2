import React from 'react';

const Contact = () => {
    return (
        <section className='contact' id="contact" name="contact">
            <h2>Get in touch</h2>
            <div className='links'>
            <a className='email' href="mailto: granierc@protonmail.com"><span className='email-span'>granierc@protonmail.com</span></a>
            <a href="https://github.com/camille-granier" className='github-link' target="_blank" rel="noreferrer">Github</a>
            </div>
            <p className='dev'>Developed by Camille Granier</p>
        </section>
    );
};

export default Contact;
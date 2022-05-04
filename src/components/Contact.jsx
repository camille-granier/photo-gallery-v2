import React, { useRef, useEffect, useState } from 'react';

const Contact = () => {

    const [textVisible, setTextVisible] = useState(false)
    const titleRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        setTextVisible(entry.isIntersecting); 
        console.log(entry.isIntersecting) 
        console.log(textVisible)
      });
      observer.observe(titleRef.current);
    },[])

    return (
        <section className='contact' id="contact" name="contact">
            <span className='h2-mask'>
            <h2 ref={titleRef} className={ textVisible ? 'title-animation' : ''}>Get in touch</h2>
            </span>
            <div className='links'>
                <a className='email' href="mailto: granierc@protonmail.com"><span className='email-span'>granierc@protonmail.com</span></a>
                <a href="https://github.com/camille-granier" className='github-link' target="_blank" rel="noreferrer">
                    <span className="mask">
                        <div className='github-link-container'>
                            <span className="link-title-1 github-title">Github</span>
                            <span className="link-title-2 github-title">Github</span>
                        </div>
                    </span>
                </a>
            </div>
            <p className='dev'>Developed by Camille Granier</p>
        </section>
    );
};

export default Contact;
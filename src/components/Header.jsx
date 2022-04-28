import React from 'react';
import { ReactComponent as Logo } from '../assets/pictures-logo.svg';
import { FiGithub, FiAtSign } from "react-icons/fi";
import {Link, animateScroll as scroll } from "react-scroll";

const Header = () => {


    return (
        <header className='header'>
            <div className='header-container'>
                <div className='Logo-container'>
                    <button
                     onClick={() => {
                         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                                 }}>
                        <Logo className="logo" height="20px"/>
                     </button>
                </div>
                <div className="icons">
                    <a className="github" href="https://github.com/camille-granier" rel="noreferrer" target="_blank"><FiGithub/></a>
                    <Link className="email" 
                          to="contact" 
                          smooth={true}><FiAtSign/></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
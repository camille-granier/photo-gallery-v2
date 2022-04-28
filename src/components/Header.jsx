import React from 'react';
import { ReactComponent as Logo } from '../assets/pictures-logo.svg';
import { FiGithub, FiAtSign } from "react-icons/fi";
import {Link, animateScroll as scroll } from "react-scroll";

const Header = () => {


    return (
        <header className='header'>
            <div className='header-container'>
                <Logo className="logo" height="20px"/>    
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
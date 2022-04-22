import React from 'react';
import { ReactComponent as Logo } from '../assets/pictures-logo.svg';
import { FiGithub, FiAtSign } from "react-icons/fi";

const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <Logo className="logo" height="20px"/>    
                <div className="icons">
                    <a className="portfolio" href="#"></a>
                    <a className="github" href="#"><FiGithub/></a>
                    <a className="email" href="#"><FiAtSign/></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
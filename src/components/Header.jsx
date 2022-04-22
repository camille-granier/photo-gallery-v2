import React from 'react';
import { ReactComponent as Logo } from '../assets/pictures-logo.svg';
import { FiGithub, FiAtSign } from "react-icons/fi";

const Header = () => {
    return (
        <div className='header'>
            <Logo className="logo" height="20px"/>    
            <div className="icons">
                <a className="portfolio" href="#"></a>
                <a className="github" href="#"><FiGithub/></a>
                <a className="email" href="#"><FiAtSign/></a>
            </div>
        </div>
    );
};

export default Header;
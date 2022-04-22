import React from 'react';
import { ReactComponent as Logo } from '../assets/pictures-logo.svg';

const Header = () => {
    return (
        <div>
            <Logo className="logo" height="20px"/>    
            <div className="icons">
                <a className="portfolio" href="http://"></a>
                <a className="github" href="http://"></a>
                <a className="email" href="http://"></a>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { ReactComponent as Logo } from '../assets/pictures-logo.svg';

const Header = () => {
    return (
        <div>
            <Logo className="logo" height="20px"/>    
        </div>
    );
};

export default Header;
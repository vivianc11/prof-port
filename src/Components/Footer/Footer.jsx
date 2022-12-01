import React from 'react';
import './Footer.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer">
        <div style={{color: darkMode? 'white' : ''}}>Made with ♥️ by Vivian Chen ©{new Date().getFullYear()} </div>
    </div>
    
  )
}

export default Footer;
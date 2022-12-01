import React from 'react';
import { themeContext } from '../../Context';
import Toggle from '../Toggle/Toggle';
import { useContext } from 'react';
import './NavBar.css';

const NavBar = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="navbar-container">
        <div className="navbar-left">
            <div className="navbar-name" style={{color: darkMode? 'white' : ''}}>Vivian Chen</div>
            <Toggle />
        </div>

        <div className="navbar-right">
            <div className="navbar-list" style={{color: darkMode? 'white' : ''}}>
                <ul>
                    <li>Home</li>
                    <li>AboutMe</li>
                    <li>Projects</li>
                    <li>Resume</li>
                </ul>
            </div>
            <button className="button navbar-button">Contact Me</button>
        </div>
    </div>
  )
}

export default NavBar;
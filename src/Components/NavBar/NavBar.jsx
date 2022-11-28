import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-left">
            <div className="navbar-name">Vivian Chen</div>
            <span>toggle</span>
        </div>

        <div className="navbar-right">
            <div className="navbar-list">
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
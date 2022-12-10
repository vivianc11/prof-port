import React from 'react';
import { themeContext } from '../../Context';
import Toggle from '../Toggle/Toggle';
import { useContext } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';


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
                    <Link activeClass='active' spy={true} to='Home' smooth={true}>
                        <li>Home</li>
                    </Link>
                    <Link activeClass='active' spy={true} to='AboutMe' smooth={true}>
                        <li>AboutMe</li>
                    </Link>
                    <Link activeClass='active' spy={true} to='Projects' smooth={true}>
                        <li>Projects</li>
                    </Link>
                    <Link activeClass='active' spy={true} to='Contact' smooth={true}>
                        <li>ContactMe</li>
                    </Link>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar;
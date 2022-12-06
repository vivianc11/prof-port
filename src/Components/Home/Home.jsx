import React from 'react';
import './Home.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Email from '../../img/email_icon.png';
import Vivian from '../../img/vivian_pic.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll';


const Home = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id='Home' className="h-container">
        <div className="h-left">
        <img src={Vivian} alt="image of Vivian Chen" />

    {/* <div className="blur" style={{ background: "blue" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "8rem",
            width: "21rem",
            height: "11rem",
            left: "40rem",
          }}
        ></div> */}
            
        </div>

        <div className="h-right">
        <div className="h-name">
                <span style={{color: darkMode? 'white' : ''}}>Hello! My Name Is</span>
                <span>Vivian Chen</span>
                <span>Full Stack Web Developer</span>
            </div>
            <Link spy={true} to='AboutMe' smooth={true}>
            <button className='button h-button'>Learn More About Me</button>
            </Link>
            <div className="h-icons">
                <a href="https://github.com/vivianc11" target='_blank' rel="noopener">
                    <img src={Github} alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/vivian-chen-b19483145/" target='_blank' rel="noopener">
                    <img src={Linkedin} alt="linkedin icon" />
                </a>
                <a href="vivian.chen1193@gmail.com" target='_blank' rel="noopener">
                    <img src={Email} alt="email icon" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home;
import React from 'react';
import './Home.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Email from '../../img/email_icon.png';
import Vivian from '../../img/vivian_pic.png';

const Home = () => {
  return (
    <div className="h-container">
        <div className="h-left">
            <div className="h-name">
                <span>Hello! My Name Is</span>
                <span>Vivian Chen</span>
                <span>Full Stack Web Developer</span>
            </div>

            <button className='button h-button'>Learn More About Me</button>

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

        <div className="h-right">
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
    </div>
  )
}

export default Home;
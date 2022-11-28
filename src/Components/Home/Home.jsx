import React from 'react';
import './Home.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Vivian from '../../img/vivian_pic.png'
const Home = () => {
  return (
    <div className="h-container">
        <div className="h-left">
            <div className="h-name">
                <span>Hello! I Am</span>
                <span>Vivian Chen</span>
                <span>Full Stack Web Developer</span>
            </div>

            <button className='button h-button'>Learn More About Me</button>

            <div className="h-icons">
                <a href="">
                    <img src={Github} alt="github icon" />
                </a>
                <a href="">
                    <img src={Linkedin} alt="linkedin icon" />
                </a>
            </div>
        </div>

        <div className="h-right">
            <img src={Vivian} alt="image of Vivian Chen" />

        <div className="blur" style={{ background: "blue" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "8rem",
            width: "21rem",
            height: "11rem",
            left: "40rem",
          }}
        ></div>
        </div>
    </div>
  )
}

export default Home;
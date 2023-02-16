import React from 'react';
import './AboutMe.css';
import Card from 'react-bootstrap/Card';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const AboutMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id='AboutMe' className="about-me">
        <div className="about-me-left">
                <span style={{color: darkMode? 'white' : ''}}>A Little</span>
                <span>About Me!</span>
                <br></br>
                <div className="check" style={{color: darkMode? 'white' : ''}}>Check out my Resume!</div>
            
                <a href="VC_Resume.pdf" target= '_blank'>
                  <button className='button resume-button'>Resume Download</button>
                </a>
            
        </div>
        <Card className="about-me-right" style={{color: darkMode? '#a3a7b6' : '', borderColor: darkMode? 'white' : ''}}>
            <div>I am aspiring for a career in Web Development and related fields, with intuitive problem-solving skills. I'm proficient in front-end and back-end technologies: <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>CSS Frameworks: Bootstrap and Bulma</li>
              </ul> 
              </div>
              {/* I am highly motivated to continue learning new technologies/tech stacks, as well as enhancing the skills stated above.
            <div>I'm originally from Denver, Colorado and graduated from Colorado State University with a degree in Bachelor's of Science: Biomedical Sciences. I then pursued a career in dentistry by attending dental school at University of Colorado Anschutz Medical Campus. Then, I enrolled with University of California, San Diego Extended Studies Program for a Full Stack Development Bootcamp. </div>
            <div>After completing my certification in the 3 month program, I am determined to build a career in the tech industry, and become apart of the tech community.</div>
            <h4>More About Me</h4>
            <div>I love spending time indoors and outdoors, traveling, video/board games, and spending time with my cat, friends and family.
            If you want to get to know me more, please use the links at the bottom of the page!</div> */}
        </Card>
    </div>
  )
}

export default AboutMe;
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
        <div className="about-me-left">

            <button className='button resume-button'>Download My Resume</button>
        </div>
        <div className="about-me-right">
            <span>I am aspiring for a career in Web Development and related fields, with intuitive problem-solving skills. I'm proficient in front-end and back-end technologies: HTML, CSS, JavaScript, jQuery, Node.js, React.js, MySQL, MongoDB, and Frameworks such as Bootstrap and Bulma CSS. I am highly motivated to continue learning new technologies/tech stacks, as well as enhancing the skills stated above.</span>
            <span>I'm originally from Denver, Colorado and graduated from Colorado State University with a degree in Bachelor's of Science: Biomedical Sciences. I then pursued a career in dentistry by attending dental school at University of Colorado Anschutz Medical Campus. Upon experiencing the clinical side of dentistry, I discontinued my education in dental school due to the overwhelming experience with direct patient care. Although I loved providing care for my patients, it was taking an emotional toll on me due to the constant stress for their well-being. I took a step back to reflect on a new direction for my career, and I've realized that healthcare isn't the only way to help people in my community. With web development, I'm hoping to have an indirect approach to helping others. This includes developing an application that can make their daily lives even a little easier, or an app that puts a smile on their face after a long work day. </span>
            <span>After completing my certification for Full Stack Web Development at University of California, San Diego, I am determined to build a career in the tech industry, and become apart of the tech community.</span>
            <span>I love spending time indoors and outdoors, traveling, video/board games, and spending time with my cat, friends and family.
            If you want to get to know me more, please use the links at the bottom of the page!</span>
        </div>
    </div>
  )
}

export default AboutMe;
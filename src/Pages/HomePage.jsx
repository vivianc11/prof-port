import React from 'react';
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import AboutMe from "../Components/AboutMe/AboutMe";
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
        <NavBar />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Projects = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div id='Projects' className='p-container'>
            <div className="p-top">
                <div className="p-title" style={{ color: darkMode ? 'white' : '' }}>Project Portfolio</div>
            </div>

            <div className="p-bottom">
                <Card className='card'>
                    <Card.Img className='p-image' variant="top" src="BCA.png" />
                    <Card.Body className='p-card-body' style={{ backgroundColor: darkMode ? 'black' : '', color: darkMode ? '#a3a7b6' : '' }}>
                        <Card.Title>Best Care Auto</Card.Title>
                        <Card.Text>
                            A website for a SoCal mechanic business located in Garden Grove area that provides contact and service information for their customers.
                        </Card.Text>
                        <div className='card-buttons'>
                            <a href='https://best-care-auto.vercel.app/' target='_blank' rel="noreferrer">
                                <Button className="button p-button">Deployed Site</Button>
                            </a>

                            <a href='https://github.com/vivianc11/best-care-auto' target='_blank' rel="noreferrer">
                                <Button className="button p-button">GitHub Repo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='card'>
                    <Card.Img className='p-image' variant="top" src="smileline.png" />
                    <Card.Body className='p-card-body' style={{ backgroundColor: darkMode ? 'black' : '', color: darkMode ? '#a3a7b6' : '' }}>
                        <Card.Title>SmileLine</Card.Title>
                        <Card.Text>
                            An application that will streamline communication between dentists and their patients. The hope is that it creates an environment of knowledge and safety prior to the dentist appointment!
                        </Card.Text>
                        <div className='card-buttons'>
                            <a href='http://smile-line.vercel.app/' target='_blank' rel="noreferrer">
                                <Button className="button p-button">Deployed Site</Button>
                            </a>

                            <a href='https://github.com/rkle408/smile-line' target='_blank' rel="noreferrer">
                                <Button className="button p-button">GitHub Repo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='card'>
                    <Card.Img className='p-image' variant="top" src="ecommerce.png" />
                    <Card.Body className='p-card-body' style={{ backgroundColor: darkMode ? 'black' : '', color: darkMode ? '#a3a7b6' : '' }}>
                        <Card.Title>E-Commerce Shop</Card.Title>
                        <Card.Text>
                            A headless e-commerce shop that features available products added through Commerce.js and checkout that is handled by Stripe.js.
                        </Card.Text>
                        <div className='card-buttons'>
                            <a href='https://startling-druid-1de6d3.netlify.app/' target='_blank' rel="noreferrer">
                                <Button className="button p-button">Deployed Site</Button>
                            </a>

                            <a href='https://github.com/vivianc11/ecommerce-shop' target='_blank' rel="noreferrer">
                                <Button className="button p-button">GitHub Repo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>

                {/* <Card className='card'>
                    <Card.Img className='p-image' variant="top" src="dibs.png" />
                    <Card.Body className='p-card-body' style={{ backgroundColor: darkMode ? 'black' : '', color: darkMode ? '#a3a7b6' : '' }}>
                        <Card.Title>Dibs</Card.Title>
                        <Card.Text>
                            An app that allow users to give away items for free and be able to call dibs on items they want posted by others
                        </Card.Text>
                        <div className='card-buttons'>
                            <a href='https://octo-dibs.herokuapp.com/login' target='_blank' rel="noreferrer">
                                <Button className="button p-button">Deployed Site </Button>
                            </a>

                            <a href='https://github.com/rkle408/dibs' target='_blank' rel="noreferrer">
                                <Button className="button p-button">GitHub Repo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card> */}

                {/* <Card className='card'>
                    <Card.Img className='p-image' variant="top" src="Happy-panda.png" />
                    <Card.Body className='p-card-body' style={{ backgroundColor: darkMode ? 'black' : '', color: darkMode ? '#a3a7b6' : '' }}>
                        <Card.Title>Happy Panda</Card.Title>
                        <Card.Text>
                            An app that teaches kids on Social Emotional Learning (SEL) through helping their own personal panda resolve negative emotions and then being presented a 30 second video explaining that emotion
                        </Card.Text>
                        <div className='card-buttons'>

                            <a href='https://happy-panda.vercel.app/' target='_blank' rel="noreferrer">
                                <Button className="button p-button">Deployed Site</Button>
                            </a>

                            <a href='https://github.com/rkle408/happy-panda'>
                                <Button className="button p-button">GitHub Repo</Button>
                            </a>

                        </div>
                    </Card.Body>
                </Card>

                <Card className='card'>
                    <Card.Img className='p-image' variant="top" src="work-scheduler.png" />
                    <Card.Body className='p-card-body' style={{ backgroundColor: darkMode ? 'black' : '', color: darkMode ? '#a3a7b6' : '' }}>
                        <Card.Title>Work Day Scheduler</Card.Title>
                        <Card.Text>
                            An app that helps the user stay on track while working by letting them schedule projects/appointments throughout their workday.
                        </Card.Text>
                        <div className='card-buttons'>

                            <a href='https://vivianc11.github.io/work-day-scheduler/' target='_blank' rel="noreferrer">
                                <Button className="button p-button">Deployed Site</Button>
                            </a>

                            <a href='https://github.com/vivianc11/work-day-scheduler'>
                                <Button className="button p-button">GitHub Repo</Button>
                            </a>

                        </div>
                    </Card.Body>
                </Card> */}

                
            </div>
        </div>
    )
}

export default Projects;
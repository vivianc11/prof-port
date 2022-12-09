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
            <div className="p-title" style={{color: darkMode? 'white' : ''}}>Project Portfolio</div>
        </div>

        <div className="p-bottom">
            <Card className='card'>
                <Card.Img className='p-image' variant="top" src="dibs.png" />
                <Card.Body className='p-card-body' style={{backgroundColor: darkMode? 'black' : '', color: darkMode? '#a3a7b6' : ''}}>
                    <Card.Title>Dibs</Card.Title>
                    <Card.Text>
                    An app that allow users to give away items for free and be able to call dibs on items they want posted by others
                    </Card.Text>
                    <div className='card-buttons'>
                            <a href='https://intense-brook-23504.herokuapp.com/' target='_blank' rel="noreferrer">
                                <Button className="button p-button">Deployed Site </Button>
                            </a>
    
                            <a href='https://github.com/rkle408/dibs'>
                                <Button className="button p-button">GitHub Repo</Button>
                            </a>
                    </div>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img className='p-image' variant="top" src="Happy-panda.png" />
                <Card.Body className='p-card-body' style={{backgroundColor: darkMode? 'black' : '', color: darkMode? '#a3a7b6' : ''}}>
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
                <Card.Img className='p-image' variant="top" src="gif-board.png" />
                <Card.Body className='p-card-body' style={{backgroundColor: darkMode? 'black' : '', color: darkMode? '#a3a7b6' : ''}}>
                    <Card.Title>Gif Board</Card.Title>
                    <Card.Text>
                    An app that lets the user input a word or generate random word. Then it will take that word and search for a related Gif through Giphy API to present to the user
                    </Card.Text>
                    <div className='card-buttons'>
                    
                            <a href='https://rkle408.github.io/gif-board/' target='_blank' rel="noreferrer">
                                <Button className="button p-button">Deployed Site</Button>
                            </a>
                        
                            <a href='https://github.com/rkle408/gif-board'>
                                <Button className="button p-button">GitHub Repo</Button>
                            </a>
                        
                    </div>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default Projects;
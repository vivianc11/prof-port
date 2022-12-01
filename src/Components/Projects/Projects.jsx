import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css'

const Projects = () => {
  return (
    <div className='p-container'>
        <div className="p-top">
            <div className="p-title">Project Portfolio</div>
        </div>

        <div className="p-bottom">
            <Card style={{ width: '25%' }}>
                <Card.Img className='p-image' variant="top" src="dibs.png" />
                <Card.Body className='p-card-body'>
                    <Card.Title>Dibs</Card.Title>
                    <Card.Text>
                    An app that allow users to give away items for free and be able to call dibs on items they want posted by others
                    </Card.Text>
                    <div className='card-buttons'>
                        <Button className="button p-button">
                            <a href='https://intense-brook-23504.herokuapp.com/' target='_blank' rel="noreferrer">Deployed Site</a>
                        </Button>
                        <Button className="button p-button">
                            <a href='https://github.com/rkle408/dibs'>GitHub Repo</a>
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '25%' }}>
                <Card.Img className='p-image' variant="top" src="Happy-panda.png" />
                <Card.Body className='p-card-body'>
                    <Card.Title>Happy Panda</Card.Title>
                    <Card.Text>
                    An app that teaches kids on Social Emotional Learning (SEL) through helping their own personal panda resolve negative emotions and then being presented a 30 second video explaining that emotion
                    </Card.Text>
                    <div className='card-buttons'>
                        <Button className="button p-button">
                            <a href='https://happy-panda.vercel.app/' target='_blank' rel="noreferrer">Deployed Site</a>
                        </Button>
                        <Button className="button p-button">
                            <a href='https://github.com/rkle408/happy-panda'>GitHub Repo</a>
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '25%' }}>
                <Card.Img className='p-image' variant="top" src="gif-board.png" />
                <Card.Body className='p-card-body'>
                    <Card.Title>Gif Board</Card.Title>
                    <Card.Text>
                    An app that lets the user input a word or generate random word. Then it will take that word and search for a related Gif through Giphy API to present to the user
                    </Card.Text>
                    <div className='card-buttons'>
                        <Button className="button p-button">
                            <a href='https://rkle408.github.io/gif-board/' target='_blank' rel="noreferrer">Deployed Site</a>
                        </Button>
                        <Button className="button p-button">
                            <a href='https://github.com/rkle408/gif-board'>GitHub Repo</a>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default Projects;
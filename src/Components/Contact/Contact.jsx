import React, { useRef } from 'react';
import './Contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import emailjs from '@emailjs/browser';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { themeContext } from '../../Context';


const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a1epstl', 'template_yscvnxp', form.current, 'G99wxi22syDW9v2Wm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        e.target.reset();
    };

  return (
    <div id='Contact' className="c-container">
        <div className="c-left">
            <div style={{color: darkMode? 'white' : ''}}>Get in Touch</div>
            <div className='c-word'>Contact Me</div>
        </div>
        <div className="c-right">
            <div className="c-form">
                <Card className='c-card' style={{backgroundColor: darkMode? 'black' : ''}}>
                    <Form ref={form} onSubmit={sendEmail}>
                    <FloatingLabel
                    name="from_name"
                    controlId="floatingInput"
                    label="Your Full Name"
                    className="mb-3"
                    style={{}}
                    >
                        <Form.Control className='c-name' name="from_name" type="name" placeholder="Full Name" />
                    </FloatingLabel>

                    <FloatingLabel
                    name="user_email"
                    controlId="floatingInput"
                    label="Your Email Address"
                    className="mb-3"
                    style={{}}
                >
                    <Form.Control className='c-email' name="user_email" type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel
                    name="message"
                    controlId="floatingInput"
                    label="Please write your message here!"
                    className="mb-3"
                    style={{}}
                >
                    <Form.Control className='c-message' name="message" type="textarea" placeholder="Message" />
                </FloatingLabel>
                <div className='button-cont'>
                <Button className='button c-button' type="submit" >
                    Submit
                </Button>
                </div>
                </Form>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Contact;
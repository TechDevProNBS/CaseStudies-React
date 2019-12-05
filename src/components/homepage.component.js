import React from 'react';
//import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/homepage.css'
import markbatesimage from '../images/markbates.jpg'

=======
//import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
>>>>>>> developer

export default class Homepage extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        };
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {

        return (


            <div className="container">

                <div className="row">
                    <div className="col">
                        {this.renderRedirect()}


                        <div class="container">
                            <div class="cms-content header-content">
                                <h2 class="h2">The Scheme</h2>
                                <p>18-month, on-the-job training for graduates, recent graduates and career changers who want to fast-track their way to becoming technical specialists. Expect hard work and a steep learning curve. As well as a competitive salary, performance-based bonus and employee benefits, you get on-the-job training, a first-hand view on how technical teams work together in a large organisation, plus a manager, buddies and mentors to support you throughout. If you’re ambitious, collaborative and logically minded, you’ll fit right in.</p>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row image-text-block cms-content align-items-center ">
                                
                                <div class="col-md-6">
                                <img alt="(EC) TDP ACCELERATOR 1" class="img-fluid" height="337" src={markbatesimage} width="538" />
                                    <div class="py-3">
                                        <h2>Mark Bates</h2>
                                        <p>
                                            Mark is the Technology Development Programme Manager for the Nationwide ‘Technology Development Programme’ and has been at Nationwide in various roles, including: Training Portfolio Manager, and Operations Manager. He also ran his own business.
    
    "I’ve worked in several organisations that promote their culture as supporting the ongoing career development of their colleagues, but through ‘PRIDE’ I’ve seen Nationwide really live up to these values."
    
    "What I love about my role is that I have the privilege of supporting the development of our future technical specialists and leaders. In turn I know they will continue to provide innovative solutions that enhance how our customers choose to bank with us.
    
    The Nationwide Technology Development Programme provides a helping hand to anyone with the right potential and ambition considering a career in IT and Change.
    
    “We provide on the job experience, qualifications and personal development so people starting their careers can gain specialist knowledge and experience along their chosen career path.”
                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>





        );

    }
}



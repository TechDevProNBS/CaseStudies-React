import React from 'react';
//import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import './css/homepage.css'
import markbatesimage from '../images/markbates.jpg'
//import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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


                        <div className="container">
                            <div className="cms-content header-content">
                                <h2 className="h2">The Scheme</h2>
                                <p>18-month, on-the-job training for graduates, recent graduates and career changers who want to fast-track their way to becoming technical specialists. Expect hard work and a steep learning curve. As well as a competitive salary, performance-based bonus and employee benefits, you get on-the-job training, a first-hand view on how technical teams work together in a large organisation, plus a manager, buddies and mentors to support you throughout. If you’re ambitious, collaborative and logically minded, you’ll fit right in.</p>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row m-2">
                                <div className="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4" style={{ maxWidth: "250px" }}>
                                            <img src={markbatesimage} style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}  className="card-img" alt="(EC) TDP ACCELERATOR 1" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title"><b>Mark Bates</b></h5>

                                                <p className="card-text">
                                                Mark is the Technology Development Programme Manager for the Nationwide ‘Technology Development Programme’ and has been at Nationwide in various roles, including: Training Portfolio Manager, and Operations Manager. He also ran his own business.
    
    "I’ve worked in several organisations that promote their culture as supporting the ongoing career development of their colleagues, but through ‘PRIDE’ I’ve seen Nationwide really live up to these values."
    
    
                                                </p>
                                                <p className="card-text">
                                                "What I love about my role is that I have the privilege of supporting the development of our future technical specialists and leaders. In turn I know they will continue to provide innovative solutions that enhance how our customers choose to bank with us.
    
    The Nationwide Technology Development Programme provides a helping hand to anyone with the right potential and ambition considering a career in IT and Change.
    
    
                                                <br/>
                                                </p>
                                                <p className="card-text">
                        
    
    “We provide on the job experience, qualifications and personal development so people starting their careers can gain specialist knowledge and experience along their chosen career path.”
                                                <br/>
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>       
                                </div>
                            </div>


                        <div className="container">
                            <div className="row image-text-block cms-content align-items-center ">
                                
                                <div className="col-md-6">
                                <img alt="(EC) TDP ACCELERATOR 1" classNames="img-fluid" height="337" src={markbatesimage} width="538" />
                                    <div className="py-3">
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



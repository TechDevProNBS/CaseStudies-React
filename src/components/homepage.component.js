import React from 'react';
//import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import './css/homepage.css'
import markbatesimage from '../images/markbates.jpg'
import tdpbanner from '../images/stockbanner2.jpg'
//import testimage from '../images/test.jpg'
//import { classBody } from '@babel/types';

var tdpbannerstyle = {
  
    backgroundImage: `url(${tdpbanner})`
  };
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
            
            <div className="main ">
            <section className="hero hero-default" style={ tdpbannerstyle }>          
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 col-lg-7">
                        <h1 className="hero-heading">Technology Development Programme</h1>
                            <p>Your future in FinTech starts here</p>
                    </div>
                </div>
            </div>
        </section>
        

            <div className="container">

                <div className="row m-2">
                    <div className="col">
                        {this.renderRedirect()}


                        <div className="container">
                            <div className="cms-content header-content">
                                <h2 className="h2">About the scheme</h2>
                                <p className="abouttext">
                              
                                    18 months, on-the-job training for graduates, recent graduates and career changers who want to fast-track their way to becoming technical specialists. 
                                    You could be promoted into a technical specialist role in an area such as Software Engineering, Security, Infrastructure or Online/Mobile Banking. 
                                    </p>
                            </div>
                        </div>

                        

                        <div className="container">
                            <div className="row m-2">
                                <div className="card mb-3 col-lg-12 col-xl-12" style={{ maxWidth: "1040px" }}>
                                    <div className="row">
                                     <div className="col-md-4 col-xl-4" style={{ maxWidth: "250px" }}>
                                     <img src={markbatesimage} className="card-img" alt="TDP ACCELERATOR" /> 
                                        </div> 
                                        <div className="col-md-8 col-xl-7">
                                            <div className="card-body">
                                            {/* card-title */}
                                             <h5 className="py-3"><b>Mark Bates</b></h5>

                                                <p className="card-text">
                                                Mark is the Technology Development Programme Manager for the Nationwide ‘Technology Development Programme’ 
                                                and has been at Nationwide in various roles, including: Training Portfolio Manager, and Operations Manager. 
                                                He also ran his own business.

                                                <br/>
                                                <br/>
    
                                                "I’ve worked in several organisations that promote their culture as supporting the ongoing career development of their colleagues, but through ‘PRIDE’ I’ve seen Nationwide really live up to these values."
    
    
                                                "What I love about my role is that I have the privilege of supporting the development of our future technical specialists and leaders. In turn I know they will continue to provide innovative solutions that enhance how our customers choose to bank with us.
    
                                                The Nationwide Technology Development Programme provides a helping hand to anyone with the right potential and ambition considering a career in IT and Change.
    
    
                                                <br/>
                                                <br/>
                             
    
                                                “We provide on the job experience, qualifications and personal development so people starting their careers can gain specialist knowledge and experience along their chosen career path.”
                                                <br/>
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>       
                                </div>
                            </div>

                            <br/>
                            <br/>
                             


                        {/* <div className="container">
                            <div className="row m-2 ">
                                <div className="card mb-3 col-lg-12 col-xl-12" style={{ maxWidth: "1040px" }}>
                                    <div className="row ">
                                        <div className="col-md-4 col-xl-4" style={{ maxWidth: "250px" }}>
                                            <img src={testimage} className="card-img " alt="TDP ACCELERATOR" />
                                        </div>
                                        <div className="col-md-8 col-xl-7">
                                            <div className="card-body ">
                                            
                                                <h5 className="py-3 "><b>John Lennon</b></h5>

                                                <p className="card-text">
                                                

                                                "Life is what happens to you while you're busy making other plans.

                                                <br/>
                                                <br/>
                                                Time you enjoy wasting, was not wasted. The more I see the less I know for sure.
                                                <br/>
                                                <br/>
                             
    
                                                “We provide on the job experience, qualifications and personal development so people starting their careers can gain specialist knowledge and experience along their chosen career path.”
                                                <br/>
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>       
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>


            </div>


        );

    }
}


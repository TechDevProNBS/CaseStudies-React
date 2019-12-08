import React from 'react';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './css/header.css'
import logoimage from '../images/logo.png'
//import {Navbar, Nav, NavItem } from 'react-bootstrap'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class Mine extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            LoginButton: ""
        };
    }

    componentDidMount = () => {
        fetch(`http://localhost:4500/logincheck`,{
            method: 'GET'})
            .then(response => response.json())
            .then(data => {
                var show = "";
                console.log(data.loggedin);
                if (data.loggedin == "true") {
                    show = <a className="header-btn" href="/logout"><span>Logout</span></a>;
                    console.log("logged in");
                  } else {
                    show = <a className="header-btn" href="/login"><span>Login</span></a>;
                    console.log("not logged in");
                  }
                this.setState({
                    LoginButton: show 
                }, () => { console.log(this.state.view); })
            })
    }

    render() {
        return (
            <div>

                <header class="header" id="header">
                <div class="container">
                <div class="row">
                <div className="col-12">
                    <a className="logo d-none d-lg-inline-block" href="/"><img src={logoimage} className="img-fluid" alt="Nationwide Building Society" width="130" height="52"></img>
                        <a className="logo d-lg-none" href="/"><img src="/images/logo-mobile.png" className="img-fluid" alt="Nationwide Building Society" width="45" height="45"></img>
                        </a>
                    </a>
                    <div style={{ float: "right" }}>
                        <a className="header-btn header-home" href="/" aria-label="Home" id="js-home">
                            <span>Home</span>
                        </a>
                        <a className="header-btn header-home" href="/viewprofiles" aria-label="Home" id="js-home">
                            <span>TDP Profiles</span>
                        </a>
                        {this.state.LoginButton}

                    </div >
                </div>

                </div>
                </div>

                </header>

            </div>





            //  <Navbar bg="primary" variant="dark" expand="lg">
            //         <Navbar.Brand href="http://localhost:3000">TDP CASESTUDY</Navbar.Brand>
            //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //         <Navbar.Collapse id="basic-navbar-nav">
            //             <Nav className="mr-auto">
            //                 <Nav.Link href="http://localhost:3000/createuser">Home</Nav.Link>
            //                 <Nav.Link href="http://localhost:3000/search">Case Study</Nav.Link>
            //             </Nav>
            //             <NavItem className="ml-auto">
            //             <Button variant="outline-light" href="/login">Login</Button>
            //             </NavItem>
            //         </Navbar.Collapse>
            //     </Navbar>
        );
    }
};
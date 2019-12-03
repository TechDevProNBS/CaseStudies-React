import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class Mine extends React.Component{
    render(){
    return (
         <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="http://localhost:3000">TDP CASESTUDY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="http://localhost:3000/createuser">Home</Nav.Link>
                        <Nav.Link href="http://localhost:3000/login">Case Study</Nav.Link>
                    </Nav>
                    <NavItem className="ml-auto">
                    <Button variant="outline-light" href="/login">Login</Button>
                    </NavItem>
                </Navbar.Collapse>
            </Navbar>
       );
    }
};
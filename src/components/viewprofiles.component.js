import React from 'react';
//import useState from "react";
//import setShow from "react";
//import show from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import FullProfile from './singlerecordview.component.js';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import { Redirect } from 'react-router-dom';
//import SearchBar from './searchbar.component.js';
import ShowRecords from './showrecords.component.js';
import AdminShowRecords from './adminshowrecords.component.js';

export default class Mine extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            view: ""
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
                    show = <AdminShowRecords/>;
                    console.log("logged in");
                  } else {
                    show = <ShowRecords/>;
                    console.log("not logged in");
                  }
                this.setState({
                    view: show 
                }, () => { console.log(this.state.view); })
            })
    }

    render() {
            return (
                <div>
                    {this.state.view}
                </div>
            );
        }
}
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
import SingleRecordView from './singlerecordview.component.js';
import AdminSingleRecordView from './adminsinglerecordview.component.js';

export default class Mine extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            view: ""
        };
    }

    componentDidMount = () => {
        var show = "";
        if(!(sessionStorage.getItem("username")))
        //if(sessionStorage.getItem("username") == "")
        {
            show = <SingleRecordView/>;
        }
        else{
            show = <AdminSingleRecordView/>;
        }
        this.setState({
             view: show 
        }, () => { console.log(this.state.view); })
    }

    render() {
            return (
                <div>
                    {this.state.view}
                </div>
            );
        }
}
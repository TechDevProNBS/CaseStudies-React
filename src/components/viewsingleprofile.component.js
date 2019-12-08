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
import ViewSingleProfile from './viewsingleprofile.component.js';
import AdminSingleRecordView from './adminsinglerecordview.component.js';

export default class Mine extends React.Component {
    //<AdminSingleRecordView/>
    render() {
            return (
                <div>
                    <ViewSingleProfile/>
                    
                </div>
            );
        }
}
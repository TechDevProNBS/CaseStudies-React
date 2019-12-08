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
    //<AdminShowRecords/>
    render() {
            return (
                <div>
                    <ShowRecords/>
                    
                </div>
            );
        }
}
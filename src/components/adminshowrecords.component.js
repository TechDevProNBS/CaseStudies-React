import React from 'react';
import useState from "react";
import setShow from "react";
import show from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import FullProfile from './singlerecordview.component.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom';

export default class Mine extends React.Component {
    constructor() {
        super();

        this.state = {
            employee: [],
        };
    }

    componentDidMount = () => {
        fetch(`http://localhost:8000/showall`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    employee: data  
                }, () => { /*console.log(this.state);*/ })
            })
    }

    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
            console.log(this.props.value+this.props.key+this.props.id)
            let url = '/adminfull/' + this.state.id;
          return <Redirect to={url} />
        }
      }

    render() {
        console.log(this.state.employee);
            return (
                <div>
                    <font face="calibri" color="red"><b>You are now logged in as an Administrator. This allows you to create, edit or delete profile from this page.<br/>To edit a profile, please click "View/Edit Profile".</b><br/>
                    <button>Add New Profile</button>
                    </font>
                    <font face="calibri">
                    <style>{"\.title{\border: 1px solid grey;\border-collapse: collapse;\ padding: 10px;\ background-color:#ccdeff\}"}</style>                    
                            {this.state.employee.map(data => {
                                return (
                            <div className="container">
                            <div className="row m-2">
                                <div class="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{ maxWidth: "250px" }}>
                                            <img src={"http://127.0.0.1:8080/" + data.photo} style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}  class="card-img" alt={data.name} />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title"><b>{data.name}</b></h5>
                                                <div style={{}}class="card-text"><b>Current Role:</b> {data.currentRole}</div>
                                                <div style={{}}class="card-text"><b>Stream:</b> {data.stream}</div>
                                                <div style={{}}class="card-text"><b>Start Date:</b> {data.startDate}</div><br/>
                                                <p class="card-text">
                                                <b>Background: </b>{data.background}<br/><span></span></p>
                                                <p class="card-text">
                                                {data.mainText.substring(0,250)}...<br/>
                                                </p>
                                                {this.renderRedirect()}
                                                <button onClick={()=>{this.state.id=data.id;console.log("here"+data.id); this.setRedirect()}} id={data.id}>View/Edit Profile</button>
                                                <button onClick={()=>{this.state.id=data.id;console.log("here"+data.id); this.setRedirect()}} id={data.id}>Delete Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>       
                                </div>
                            </div>
                                );
                            })}
                    </font>
                </div>
            );
        }
}
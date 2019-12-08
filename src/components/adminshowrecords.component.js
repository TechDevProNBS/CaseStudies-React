import React from 'react';
//import useState from "react";
//import setShow from "react";
//import show from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import FullProfile from './singlerecordview.component.js';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom';

export default class Mine extends React.Component {
    constructor() {
        super();

        this.state = {
            employee: [],
        };
    }

    componentDidMount = () => {
        fetch(`http://localhost:9011/record`,{
            method: 'GET'})
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
      setRedirect2 = () => {
        this.setState({
          redirect2: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
            console.log(this.props.value+this.props.key+this.props.id)
            //let url = '/adminfull/' + this.state.id;
            let url = '/newprofile';
          return <Redirect to={url} />
        }
      }

      renderRedirect2 = () => {
        if (this.state.redirect2) {
            console.log(this.props.value+this.props.key+this.props.id)
            //let url = '/newprofile';
            let url = '/viewprofiles/adminfullview/' + this.state.id;
          return <Redirect to={url} />
        }
      }

      deleteRecord(_id) {

        let data = {
            "id": _id
        }
        console.log(JSON.stringify(data))
        fetch(`http://localhost:9011/record`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(_id)

        })

        window.location.reload();

    }

    render() {
        console.log(this.state.employee);
            return (
                <div>
                    <font face="calibri" color="red"><b>You are now logged in as an Administrator. This allows you to create, edit or delete profile from this page.<br/>To edit a profile, please click "View/Edit Profile".</b><br/>
                    
                    </font>
                    <font face="calibri">
                    {this.renderRedirect()}
                                                <button onClick={()=>{this.setRedirect()}} id={1}>Add New Profile</button>
                            {this.state.employee.map(data => {
                                return (
                            <div className="container" key={data.id}>
                            <div className="row m-2">
                                <div className="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4" style={{ maxWidth: "250px" }}>
                                            <img src={"http://127.0.0.1:8080/" + data.photo} style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}  className="card-img" alt={data.name} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title"><b>{data.name}</b></h5>
                                                <div style={{}}className="card-text"><b>Programme:</b> {data.programme}</div>
                                                <div style={{}}className="card-text"><b>Current Role:</b> {data.districtdescription}</div>
                                                <div style={{}}className="card-text"><b>Stream:</b> {data.stream}</div>
                                                <div style={{}}className="card-text"><b>Start Date:</b> {data.startdate}</div><br/>
                                                <p className="card-text">
                                                <b>Background: </b>{data.background}<br/><span></span></p>
                                                <p className="card-text">
                                                {data.maintext.substring(0,250)}...<br/>
                                                </p>
                                                {this.renderRedirect2()}
                                                <button onClick={()=>{this.setState({id:data.id});console.log("here"+data.id); this.setRedirect2()}} id={data.id}>View/Edit Profile</button>
                                                <button onClick={()=>{this.deleteRecord(data.id)}} id={data.id}>Delete Profile</button>
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
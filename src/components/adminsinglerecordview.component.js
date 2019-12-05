import React from 'react';
//import useState from "react";
//import setShow from "react";
//import show from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import FullProfile from './fullprofile.component.js';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom';
//import ContentEditable from 'react-contenteditable';

export default class Mine extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            employee: [],
            name:"greg",
            currentRole:"",
            stream:"",
            startDate:"",
            background:"",
            mainText:"",
            email:"",
            facebook:"",
            linkedin:"",
            twitter:""
        };
    }




      _handleChangeEvent(val) {
        return val;
      }

    componentDidMount = () => {
        console.log("eh"+this.props.match.params.var)
        let url = "http://localhost:8000/showsingle/"+this.props.match.params.var;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    employee: data,
                    // name: data.name,
                    // currentRole: data.currentRole,
                    // stream: data.stream,
                    // startDate: data.startDate,
                    // background: data.background,
                    // mainText: data.mainText,
                    // email: data.email,
                    // facebook: data.facebook,
                    // linkedin: data.linkedin,
                    // twitter: data.twitter
                })
            // .then(data => {
            //     this.setState({
            //         name: data.name,
            //         currentRole: data.currentRole,
            //         stream: data.stream,
            //         startDate: data.startDate,
            //         background: data.background,
            //         mainText: data.mainText,
            //         email: data.email,
            //         facebook: data.facebook,
            //         linkedin: data.linkedin,
            //         twitter: data.twitter
            //     })
            // })
                }, () => {console.log(this.state); })
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
          return <Redirect to='/admin' />
        }
      }

    render() {
        
            return (
                <div>
                    <font face="calibri" color="red"><b>You are now logged in as an Administrator. This allows you to create, edit or delete records from this page.</b><br/></font>
                    <font face="calibri">
                    {this.renderRedirect()}
                    <button onClick={this.setRedirect}>Back</button>                    
                            {this.state.employee.map(data => {
                                return (
                            <div className="container" key={data.id}>
                            <div className="row m-2">
                                <div className="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div className="row no-gutters">
                                        <div style={{ maxWidth: "250px"}}>
                                            <img src={"http://127.0.0.1:8080/" + data.photo} style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}  className="card-img" alt={data.name} /><br/>
                                            <button>Upload new photo</button>
                                        </div>
                                        <div >
                                            <div className="card-body">
                                                <b>Name: </b><br/>
                                                <input type="text" maxLength="20" size="20" defaultValue={data.name}/><br/>
                                                <b>Current Role:</b><br/>
                                                <input type="text" maxLength="20" size="20" defaultValue={data.currentRole}/><br/>
                                                <b>Stream:</b><br/>
                                                <input type="text" maxLength="20" size="20" defaultValue={data.stream}/><br/>
                                                <b>Start Date:</b><br/>
                                                <input type="text" maxLength="10" size="20" defaultValue={data.startDate}/><br/>
                                                <b>Background: </b><br/>
                                                <textarea rows="4" cols="50" maxLength="200" size="200" defaultValue={data.background}/><br/>
                                                <b>Main Text: </b><br/>
                                                <textarea rows="10" cols="50" maxLength="500" size="500" defaultValue={data.mainText}/><br/>
                                                <b>Main Text: </b><br/>
                                                <b>Email: </b><br/>
                                                <input type="text" maxLength="50" size="50" defaultValue={data.email}/><br/>
                                                <b>Facebook: </b><br/>
                                                <input type="text" maxLength="50" size="50" defaultValue={data.facebook}/><br/>
                                                <b>LinkedIn: </b><br/>
                                                <input type="text" maxLength="50" size="50" defaultValue={data.linkedin}/><br/>
                                                <b>Twitter: </b><br/>
                                                <input type="text" maxLength="50" size="50" defaultValue={data.twitter}/><br/>
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
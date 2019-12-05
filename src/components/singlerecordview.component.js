import React from 'react';
import useState from "react";
import setShow from "react";
import show from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import FullProfile from './fullprofile.component.js';
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
        console.log("eh"+this.props.match.params.var)
        let url = "http://localhost:8000/showsingle/"+this.props.match.params.var;
        fetch(url)
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
          return <Redirect to='/showtable' />
        }
      }

    render() {
        
            return (
                <div>
                    <font face="calibri">
                    {this.renderRedirect()}
                    <button onClick={this.setRedirect}>Back</button>
                    <style>{"\.title{\border: 1px solid grey;\border-collapse: collapse;\ padding: 10px;\ background-color:#ccdeff\}"}</style>                    
                            {this.state.employee.map(data => {
                                return (
                            <div className="container">
                            <div className="row m-2">
                                <div class="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div class="row no-gutters">
                                        <div style={{ maxWidth: "250px"}}>
                                            <img src={"http://127.0.0.1:8080/" + data.photo} style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}  class="card-img" alt={data.name} />
                                        </div>
                                        <div >
                                            <div class="card-body">
                                                <h5 class="card-title"><b>{data.name}</b></h5>
                                                <div style={{}}class="card-text"><b>Current Role:</b> {data.currentRole}</div>
                                                <div style={{}}class="card-text"><b>Stream:</b> {data.stream}</div>
                                                <div style={{}}class="card-text"><b>Start Date:</b> {data.startDate}</div><br/>
                                                <p class="card-text">
                                                <b>Background: </b>{data.background}<br/><span></span></p>
                                                <p class="card-text">
                                                {data.mainText}<br/>
                                                </p>
                                                <p class="card-text">
                                                    <b>Contact Me:</b><br/>
                                                </p>
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <b>Email: </b>
                                                            </td>
                                                            <td>
                                                                {data.email}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <b>Facebook: </b>
                                                            </td>
                                                            <td>
                                                                {data.facebook}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <b>LinkedIn: </b>
                                                            </td>
                                                            <td>
                                                                {data.linkedin}     
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <b>Twitter: </b>
                                                            </td>
                                                            <td>
                                                                {data.twitter}
                                                            </td>
                                                        </tr>
                                                    </table>
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
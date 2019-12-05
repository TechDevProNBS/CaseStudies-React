import React from 'react';
import useState from "react";
import setShow from "react";
import show from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import FullProfile from './fullprofile.component.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';

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
                    <style>{"\.title{\border: 1px solid grey;\border-collapse: collapse;\ padding: 10px;\ background-color:#ccdeff\}"}</style>                    
                            {this.state.employee.map(data => {
                                return (
                            <div className="container">
                            <div className="row m-2">
                                <div class="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div class="row no-gutters">
                                        <div style={{ maxWidth: "250px"}}>
                                            <img src={"http://127.0.0.1:8080/" + data.photo} style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}  class="card-img" alt={data.name} /><br/>
                                            <button>Upload new photo</button>
                                        </div>
                                        <div >
                                            <div class="card-body">
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <b>Name: </b>
                                                        </td>
                                                        <td>
                                                            <input type="text" maxlength="20" size="20" value={data.name}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Current Role:</b>
                                                        </td>
                                                        <td>
                                                            <input type="text" maxlength="20" size="20" value={data.currentRole}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Stream:</b>
                                                        </td>
                                                        <td>
                                                            <input type="text" maxlength="20" size="20" value={data.stream}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Start Date:</b>
                                                        </td>
                                                        <td>
                                                            <input type="text" maxlength="10" size="20" value={data.startDate}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Background: </b>
                                                        </td>
                                                        <td>
                                                            <textarea rows="4" cols="50" maxlength="200" size="200" value={data.background}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Main Text: </b>
                                                        </td>
                                                        <td>
                                                            <textarea rows="10" cols="50" maxlength="500" size="500" contentEditable={true} value={data.mainText}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Main Text: </b>
                                                        </td>
                                                        <td>
                                                        <ContentEditable
                                                            html={data.mainText}
                                                            data-column="item"
                                                            data-row={i}
                                                            className="content-editable"
                                                        />
                                                        </td>
                                                    </tr>
                                                        <tr>
                                                            <td>
                                                                <b>Email: </b>
                                                            </td>
                                                            <td>
                                                                <input type="text" maxlength="50" size="50" value={data.email}/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <b>Facebook: </b>
                                                            </td>
                                                            <td>
                                                                <input type="text" maxlength="50" size="50" value={data.facebook}/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <b>LinkedIn: </b>
                                                            </td>
                                                            <td>
                                                                <input type="text" maxlength="50" size="50" value={data.linkedin}/>      
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <b>Twitter: </b>
                                                            </td>
                                                            <td>
                                                                <input type="text" maxlength="50" size="50" value={data.twitter}/>
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
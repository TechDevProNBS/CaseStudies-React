import React from 'react';
//import useState from "react";
//import setShow from "react";
//import show from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import FullProfile from './fullprofile.component.js';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom';

export default class Mine extends React.Component {
    constructor() {
        super();

        this.state = {
            employee: [],
            show: ""
        };
    }

    componentDidMount = () => {
        console.log("eh"+this.props.match.params.var)
        fetch(`http://localhost:9011/record`,{
            method: 'GET'})
            .then(response => response.json())
            .then(data => {
                var fil = this.props.match.params.var;
                const datafiltered = data.filter(d => d.id == fil);
                this.setState({
                    employee: datafiltered  
                },() => {this.contactOptions()});
                var datapre = data;
                console.log(data)
                console.log(datafiltered);    
                }, () => {console.log(this.state);
                     })
    }


    // componentDidMount = () => {
    //     console.log("eh"+this.props.match.params.var)
    //     let url = "http://localhost:8000/showsingle/"+this.props.match.params.var;
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 employee: data
    //             }, () => { /*console.log(this.state);*/ })
    //         })
    // }

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
          return <Redirect to='/viewprofiles' />
        }
      }

    contactOptions = () => {
        var showtemp = "";
        console.log(this.state.employee)
        this.state.employee.map(data => {
        console.log(data.email)
        if(data.email != ""){
            showtemp = showtemp + <tr><td><b>Email: </b></td><td>;
            showtemp = showtemp + data.email;
            showtemp = showtemp + </td></tr>;
        }
        if(data.facebook != ""){
            //showtemp = showtemp + <tr><td><b>Facebook: </b></td><td>+{data.facebook}+</td></tr>;
            showtemp = showtemp + data.facebook
        }
        if(data.linkedin != ""){
            //showtemp = showtemp + <tr><td><b>LinkedIn: </b></td><td>+{data.linkedin}+</td></tr>;
            showtemp = showtemp + data.linkedin
        }
        if(data.twitter != ""){
            //showtemp = showtemp + <tr><td><b>Twitter: </b></td><td>+{data.twitter}+</td></tr>;
            showtemp = showtemp + data.twitter
        }
        var em = data.email;
        var fb = data.facebook;
        var ln = data.linkedin;
        var tw = data.twitter;
        console.log(showtemp);
        this.setState({
            show: {Email: em, Facebook: fb, LinkedIn: ln, Twitter: tw}
          }, () => {console.log(this.state)})
        })
    }
                                                    
    render() {
        
            return (
                <div>
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
                                            <img src={"http://127.0.0.1:8080/" + data.photo} style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}  className="card-img" alt={data.name} />
                                        </div>
                                        <div >
                                            <div className="card-body">
                                                <h5 className="card-title"><b>{data.name}</b></h5>
                                                <div style={{}}className="card-text"><b>Programme:</b> {data.programme}</div>
                                                <div style={{}}className="card-text"><b>Current Role:</b> {data.districtdescription}</div>
                                                <div style={{}}className="card-text"><b>Stream:</b> {data.stream}</div>
                                                <div style={{}}className="card-text"><b>Start Date:</b> {data.startdate}</div>
                                                <div style={{}}className="card-text"><b>Area:</b> {data.area}</div>
                                                <div style={{}}className="card-text"><b>Internal/External:</b> {data.internalexternal}</div>
                                                <div style={{}}className="card-text"><b>Location:</b> {data.locationdescription}</div><br/>
                                                <p className="card-text">
                                                <b>Background: </b>{data.background}<br/><span></span></p>
                                                <p className="card-text">
                                                {data.maintext}<br/>
                                                </p>
                                                <p className="card-text"><b>Contact Me:</b><br/></p>
                                                <table><tbody>
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
                                                </tbody></table>
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
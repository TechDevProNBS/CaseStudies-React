import React from 'react';
//import useState from "react";
//import setShow from "react";
//import show from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import FullProfile from './fullprofile.component.js';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom';
import tdpprofilebanner from '../images/profilebanner.jpg'
var profilebanner = {

    backgroundImage: `url(${tdpprofilebanner})`
};


export default class Mine extends React.Component {
    constructor() {
        super();

        this.state = {
            employee: [],
            show: ""
        };
    }

    componentDidMount = () => {
        //console.log("eh"+this.props.match.params.var)
        fetch(`http://localhost:9011/record`,{
            method: 'GET'})
            .then(response => response.json())
            .then(data => {
                var fil = sessionStorage.getItem("profile");
                const datafiltered = data.filter(d => d.id == fil);
                this.setState({
                    employee: datafiltered
                }, () => { this.contactOptions() });
                var datapre = data;
                console.log(data)
                console.log(datafiltered);
            }, () => {
                console.log(this.state);
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
            if (data.email != "") {
                showtemp = showtemp + <tr><td><b>Email: </b></td><td>;
                showtemp = showtemp + data.email;
            showtemp = showtemp + </td></tr>;
            }
            if (data.facebook != "") {
                //showtemp = showtemp + <tr><td><b>Facebook: </b></td><td>+{data.facebook}+</td></tr>;
                showtemp = showtemp + data.facebook
            }
            if (data.linkedin != "") {
                //showtemp = showtemp + <tr><td><b>LinkedIn: </b></td><td>+{data.linkedin}+</td></tr>;
                showtemp = showtemp + data.linkedin
            }
            if (data.twitter != "") {
                //showtemp = showtemp + <tr><td><b>Twitter: </b></td><td>+{data.twitter}+</td></tr>;
                showtemp = showtemp + data.twitter
            }
            var em = data.email;
            var fb = data.facebook;
            var ln = data.linkedin;
            var tw = data.twitter;
            console.log(showtemp);
            this.setState({
                show: { Email: em, Facebook: fb, LinkedIn: ln, Twitter: tw }
            }, () => { console.log(this.state) })
        })
    }

    render() {

        return (
            <div class="">
                <section className="banner col-lg-12 col-xl-12" style={profilebanner}>
                    <div className="container">
                        <div className="row">
                            <div className="col-10 col-sm-8 col-lg-7">
                                <h1 className="hero-heading">View Profile</h1>

                            </div>
                        </div>
                    </div>
                </section>
                <font face="NBS">
                    
                <div className="container">
                    <div className="cms-content header-content">

                        {this.renderRedirect()}
                        <button onClick={() => { this.setRedirect() }} id="back"  class="btn btn-primary"style={{ marginTop: "39px", float: 'left'  }}>Back</button>
                    </div>
                </div>
                <br></br>
                <br></br>
                    {this.state.employee.map(data => {
                        var finalstartdate = "";
                        if (data.startdate === "2015-09") {
                            finalstartdate = "Sep 2015"
                        }
                        if (data.startdate === "2016-09") {
                            finalstartdate = "Sep 2016"
                        }
                        if (data.startdate === "2017-09") {
                            finalstartdate = "Sep 2017"
                        }
                        if (data.startdate === "2018-09") {
                            finalstartdate = "Sep 2018"
                        }
                        if (data.startdate === "2019-05") {
                            finalstartdate = "May 2019"
                        }
                        if (data.startdate === "2019-09") {
                            finalstartdate = "Sep 2019"
                        }
                        if (data.startdate === "2020-09") {
                            finalstartdate = "Sep 2020"
                        }

                        return (
                            <div className="container" key={data.id}>
                                <div className="row2">
                                    <div className="card mb-3 col-lg-12 col-xl-12" style={{ maxWidth: "1040px" }}>
                                        <div className="row">
                                            <div className="col-md-4" style={{ maxWidth: "250px" }}>
                                                <img src={"http://127.0.0.1:8080/" + data.photo} className="card-img" alt={data.name} />
                                            </div>
                                            <div className="col-md-8 col-xl-9">
                                                <div className="card-body">
                                                    <h3 className="card-title"><b>{data.name}</b></h3>
                                                    <div className="text" ><b>Programme:</b>
                                                     {data.programme}</div>
                                                    <div className="text"><b>Current Role:</b> {data.districtdescription}</div>
                                                    <div className="text"><b>Stream:</b> {data.stream}</div>
                                                    <div className="text"><b>Start Date: </b>{finalstartdate}</div>
                                                    <div className="text"><b>Area:</b> {data.area}</div>
                                                    <div className="text"><b>Internal/External:</b> {data.internalexternal}</div>
                                                    <div className="text"><b>Location:</b> {data.locationdescription}</div>
                                                    <div className="text"><b>Background:</b> {data.background}</div>
                                                    <br></br>                                                   
                                                    <div className="text"><b></b>{data.maintext}</div>
                                                    <br></br>
                                                    <div className="text"><b>Contact Details:</b> </div>
                                                    
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



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
import Upload from "./upload.component.js";
import './css/createprofile.css';
import tdpadminpic from '../images/createprofilebanner.jpg'
var tdpadminstyle = {
  
    backgroundImage: `url(${tdpadminpic})`
  };



export default class Mine extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            employee: [],
            id:"",
            name:"",
            districtdescription:"",
            stream:"",
            startdate:"",
            background:"",
            maintext:"",
            email:"",
            facebook:"",
            linkedin:"",
            twitter:"",
            photo:"",
            area: "",
            internalexternal: "",
            locationdescription: "",
            programme: ""
        };
    }

    // componentDidMount = () => {
    //     console.log("eh"+this.props.match.params.var)
    //     let url = "http://localhost:8000/showsingle/"+this.props.match.params.var;
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 employee: data  
    //             });
    //             {data.map(d => {
    //                 this.setState({
    //                     id: d.id,
    //                     name: d.name,
    //                     currentRole: d.currentRole,
    //                     stream: d.stream,
    //                     startDate: d.startDate,
    //                     background: d.background,
    //                     mainText: d.mainText,
    //                     email: d.email,
    //                     facebook: d.facebook,
    //                     linkedin: d.linkedin,
    //                     twitter:d.twitter,
    //                     photo: d.photo
    //                 });
    //             })};
    //             console.log(this.state);
    //             console.log("name is :"+this.state.employee)
    //             }, () => {console.log(this.state);
    //                  })
    // }

    componentDidMount = () => {
        console.log("eh"+this.props.match.params.var)
        if(!(sessionStorage.getItem("username"))){
            window.location.replace(`/viewprofiles`);
        }
        else{
            sessionStorage.setItem("filename", "default.svg");
        }
        // fetch(`http://localhost:4500/logincheck`,{
        //     method: 'GET'})
        //     .then(response => response.json())
        //     .then(data => {
        //         sessionStorage.setItem("filename", "default.svg")
        //         var show = "";
        //         console.log(data.loggedin);
        //         if (data.loggedin == "false") {
        //             window.location.replace(`/viewprofiles`);
        //           }
        //         this.setState({
        //             view: show 
        //         }, () => { 
        //             console.log(this.state.view); })
        //     })
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
          return <Redirect to='/viewprofiles' />
        }
      }

    commonChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {console.log(this.state); });
        
    }

    commonChange2 = (e) => {
        this.setState({
            id: e.target.id.value,
            name: e.target.name.value,
            startdate: e.target.startdate.value,
            districtdescription: e.target.districtdescription.value,
            background: e.target.background.value,
            maintext: e.target.maintext.value,
            stream: e.target.stream.value,
            email: e.target.email.value,
            facebook: e.target.facebook.value,
            linkedin: e.target.linkedin.value,
            twitter: e.target.twitter.value,
            photo: e.target.photo.value,
            area: e.target.area.value,
            internalexternal: e.target.internalexternal.value,
            locationdescription: e.target.locationdescription.value,
            programme: e.target.programme.value
        }, () => {console.log(this.state); });
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('Was this called');

            let data = {
                "name": this.state.name,
                "startdate": this.state.startdate,
                "districtdescription": this.state.districtdescription,
                "background": this.state.background,
                "maintext": this.state.maintext,
                "stream": this.state.stream,
                "email": this.state.email,
                "facebook": this.state.facebook,
                "linkedin": this.state.linkedin,
                "twitter": this.state.twitter,
                "photo": sessionStorage.getItem("filename"),
                "area": this.state.area,
                "internalexternal": this.state.internalexternal,
                "locationdescription": this.state.locationdescription,
                "programme": this.state.programme
            }
            sessionStorage.setItem("filename", "")
            console.log(JSON.stringify(data) + "attempted to be created")

            fetch(`http://localhost:9011/record`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)

            })
                .then(response => {

                    if (response.status === 200) {
                        console.log('Employee Added');
                        window.location.href = '/viewprofiles';
                        //window.location.replace(`/viewprofiles`);
                    } else {
                        alert('Failed to update employee');
                    };
                })
    }

    render() {
        
            return (
            
                <div className="main ">
                          <section className="banner col-lg-12 col-xl-12" style={ tdpadminstyle }>          
                          <div className="container">
                              <div className="row">
                                  <div className="col-10 col-sm-8 col-lg-7">
                                      <h1 className="hero-heading">Add Profile</h1>
                                         
                                  </div>
                              </div>
                          </div>
                      </section>
              
                              <div className="container">
                                  <div className="cms-content header-content" style={{ float: 'left' }}>
              
                                      {this.renderRedirect()}
                                      <button onClick={() => { this.setRedirect() }} id="back" class="btn btn-primary"style={{ marginTop: "39px" }} >Back</button>
                                  </div>
                              </div>
                              <br></br>
                              <br></br>
                              <font face="NBS" color="red"><b className="cms-content header-content" style={{ float: 'right' }} >You are logged in as an Administrator.</b></font>
                              <br></br>
                              <br></br>
                              
                              <form>
                                  <div className="container" key={this.state.id}>
                                      <div className="row m-2">
                                          <div className="card mb-3 col-lg-12 col-xl-12" style={{ maxWidth: "1040x" }}>
                                              <div className="row card mb-3 col-lg-12 col-xl-12" style={{ border: "none" }}>
                                                  <div className="col-md-4 col-xl-4" style={{ maxWidth: "250px" }}>
                                                      {/*<div style={{ maxWidth: "250px"}}>
                                                          <img src={"http://127.0.0.1:8080/" + this.state.photo} style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}  className="card-img" alt={this.state.name} /><br/>
                                                      </div>*/}
                                                      <div className="card-img">
                                                          <Upload />
                                                      </div>
                                                  </div>
                                                  <div style={{ marginBottom: "-265px", marginTop: "25px" }}>
              
                                                      <div className="col-md-8 col-xl-9">
                                                          <div className="card-body">
              
                                                              <b className="card-title">Name: </b><br />
                                                              <input type="text" maxLength="20" size="20" defaultValue={this.state.name} onChange={this.commonChange} name="name" class="form-control" /><br />
                                                              <b className="card-title">Programme:</b><br />
                                                              <input type="text" maxLength="20" size="20" defaultValue={this.state.programme} onChange={this.commonChange} name="programme" class="form-control" /><br />
                                                              <b className="card-title">Current Role:</b><br />
                                                              <input type="text" maxLength="20" size="20" value={this.state.districtdescription} onChange={this.commonChange} name="districtdescription" class="form-control" /><br />
                                                              {/*<b>Stream:</b><br/>
                                                              <input type="text" maxLength="20" size="20" value={this.state.stream} onChange={this.commonChange} name="streamo"/><br/>*/}
                                                              <div>
                                                                  <b className="card-title">Stream:</b><br />
                                                                  <select
                                                                      className="form-control"
                                                                      name="stream"
                                                                      id="stream"
                                                                      aria-label={this.state.stream}
                                                                      onChange={this.commonChange}
                                                                  >
                                                                      <option value="" selected="selected">{this.state.stream}</option>
                                                                      <option value="Software Engineering">Software Engineering</option>
                                                                      <option value="DevOps">DevOps</option>
                                                                      <option value="Cyber Security">Cyber Security</option>
                                                                      <option value="Industrial Placement">Industrial Placement</option>
                                                                      <option value="Other">Other</option>
                                                                  </select>
                                                              </div>
                                                              {/*<b>Start Date:</b><br/>
                                                              <input type="text" maxLength="10" size="20" value={this.state.startdate} name="startDatec"/><br/>*/}
                                                              <div>
                                                                  <b className="card-title">Start Date:</b><br />
                                                                  <select
                                                                      className="form-control"
                                                                      name="startdate"
                                                                      id="startdate"
                                                                      aria-label={this.state.startdate}
                                                                      onChange={this.commonChange}
                                                                  >
                                                                      <option value="" selected="selected">{this.state.startdate}</option>
                                                                      <option value="2015-09">Sep 2015</option>
                                                                      <option value="2016-09">Sep 2016</option>
                                                                      <option value="2017-09">Sep 2017</option>
                                                                      <option value="2018-09">Sep 2018</option>
                                                                      <option value="2019-05">May 2019</option>
                                                                      <option value="2019-09">Sep 2019</option>
                                                                      <option value="2020-09">Sep 2020</option>
                                                                  </select>
                                                              </div>
                                                              <b className="card-title">Area:</b><br />
                                                              <input type="text" maxLength="20" size="20" value={this.state.area} onChange={this.commonChange} name="area" class="form-control" /><br />
                                                              {/*<b>Internal/External:</b><br/>
                                                              <input type="text" maxLength="20" size="20" value={this.state.internalexternal} onChange={this.commonChange} name="internalexternalo"/><br/>*/}
                                                              <div>
                                                                  <b className="card-title">Internal/External:</b><br />
                                                                  <select
                                                                      className="form-control"
                                                                      name="internalexternal"
                                                                      id="internalexternal"
                                                                      aria-label={this.state.internalexternal}
                                                                      onChange={this.commonChange}
                                                                  >
                                                                      <option value="" selected="selected">{this.state.internalexternal}</option>
                                                                      <option value="Internal">Internal</option>
                                                                      <option value="External">External</option>
                                                                  </select>
                                                              </div>
                                                              {/*<b>Location:</b><br/>
                                                              <input type="text" maxLength="20" size="20" value={this.state.locationdescription} onChange={this.commonChange} name="locationdescriptiono"/><br/>*/}
                                                              <div>
                                                                  <b className="card-title">Location:</b><br />
                                                                  <select
                                                                      className="form-control"
                                                                      name="locationdescription"
                                                                      id="locationdescription"
                                                                      aria-label={this.state.locationdescription}
                                                                      onChange={this.commonChange}
                                                                  >
                                                                      <option value="" selected="selected">{this.state.locationdescription}</option>
                                                                      <option value="Swindon">Swindon</option>
                                                                      <option value="London">London</option>
                                                                      <option value="Bournemouth">Bournemouth</option>
                                                                      <option value="Northampton">Northampton</option>
                                                                  </select>
                                                              </div>
                                                              <b className="card-title">Background: </b><br />
                                                              <textarea rows="4" cols="150" maxLength="200" size="200" value={this.state.background} onChange={this.commonChange} name="background" class="form-control" /><br />
                                                              <b className="card-title">Main Text: </b><br />
                                                              <textarea rows="10" cols="50" maxLength="500" size="500" value={this.state.maintext} onChange={this.commonChange} name="maintext" class="form-control" /><br />
                                                              <b className="card-title">Email: </b><br />
                                                              <input type="text" maxLength="50" size="50" value={this.state.email} onChange={this.commonChange} name="email" class="form-control" /><br />
                                                              <b className="card-title">Facebook: </b><br />
                                                              <input type="text" maxLength="50" size="50" value={this.state.facebook} onChange={this.commonChange} name="facebook" class="form-control" /><br />
                                                              <b className="card-title">LinkedIn: </b><br />
                                                              <input type="text" maxLength="50" size="50" value={this.state.linkedin} onChange={this.commonChange} name="linkedin" class="form-control" /><br />
                                                              <b className="card-title">Twitter: </b><br />
                                                              <input type="text" maxLength="50" size="50" value={this.state.twitter} onChange={this.commonChange} name="twitter" class="form-control" /><br />
                                                              <b className="card-title">Photo ID: </b><br />
                                                              <input type="text" maxLength="50" size="50" value={sessionStorage.getItem("filename")} onChange={this.commonChange} name="photo" class="form-control" /><br />
                                                              {/*<b>ID(leave text box blank): </b><br/>
                                                              <input type="text" maxLength="50" size="50" value={this.state.id} onChange={this.commonChange} name="id"/><br/>*/}
              
                                                          </div>
                                                          <button onClick={this.onSubmit} class="btn btn-success" >Submit</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
              
                              </form>
              
                          </div>
                      );
                  }
              }
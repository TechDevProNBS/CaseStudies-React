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

    componentDidMount = () => {
        console.log("eh"+this.props.match.params.var)
        fetch(`http://localhost:4500/logincheck`,{
            method: 'GET'})
            .then(response => response.json())
            .then(data => {
                var show = "";
                console.log(data.loggedin);
                if (data.loggedin == "false") {
                    window.location.replace(`/viewprofiles`);
                  }
                this.setState({
                    view: show 
                }, () => { 
                    console.log(this.state.view); 
                    fetch(`http://localhost:9011/record`,{
                        method: 'GET'})
                        .then(response => response.json())
                        .then(data => {
                            this.setState({
                                employee: data  
                            });
                            var fil = this.props.match.params.var;
                            var datapre = data;
                            console.log(data)
                            const datafiltered = data.filter(d => d.id == fil);
                            console.log(datafiltered);
                            {datafiltered.map(d => {
                                this.setState({
                                    id: d.id,
                                    name: d.name,
                                    districtdescription: d.districtdescription,
                                    stream: d.stream,
                                    startdate: d.startdate,
                                    background: d.background,
                                    maintext: d.maintext,
                                    email: d.email,
                                    facebook: d.facebook,
                                    linkedin: d.linkedin,
                                    twitter:d.twitter,
                                    photo: d.photo,
                                    area: d.area,
                                    internalexternal: d.internalexternal,
                                    locationdescription: d.locationdescription,
                                    programme: d.programme
                                });
                            })};
                            console.log(this.state);
                            console.log("name is :"+this.state.employee)
                            }, () => {console.log(this.state);
                                 })
                
                })
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
                "id": this.state.id,
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
                "photo": this.state.photo,
                "area": this.state.area,
                "internalexternal": this.state.internalexternal,
                "locationdescription": this.state.locationdescription,
                "programme": this.state.programme
            }

            console.log(JSON.stringify(data) + "attempted to be created")

            fetch(`http://localhost:9011/record`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)

            })
                .then(response => {

                    if (response.status === 200) {
                        console.log('Employee Updated');
                        window.location.replace(`/viewprofiles`);
                    } else {
                        alert('Failed to update employee');
                    };
                })
    }

    render() {
        
            return (
                <div>
                    <font face="calibri" color="red"><b>You are now logged in as an Administrator. This allows you to create, edit or delete records from this page.</b><br/></font>
                    <font face="calibri">
                    {this.renderRedirect()}
                    <button onClick={this.setRedirect}>Back</button>                    
                            
                            <form>
                            <div className="container" key={this.state.id}>
                            <div className="row m-2">
                                <div className="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div className="row no-gutters">
                                        <div style={{ maxWidth: "250px"}}>
                                            <img src={"http://127.0.0.1:8080/" + this.state.photo} style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}  className="card-img" alt={this.state.name} /><br/>
                                            <button>Upload new photo</button>
                                        </div>
                                        <div >
                                            <div className="card-body">
                                                <b>Name: </b><br/>
                                                <input type="text" maxLength="20" size="20" defaultValue={this.state.name} onChange={this.commonChange} name="name"/><br/>
                                                <b>Programme:</b><br/>
                                                <input type="text" maxLength="20" size="20" defaultValue={this.state.programme} onChange={this.commonChange} name="programme"/><br/>
                                                <b>Current Role:</b><br/>
                                                <input type="text" maxLength="20" size="20" value={this.state.districtdescription} onChange={this.commonChange} name="districtdescription"/><br/>
                                                {/*<b>Stream:</b><br/>
                                                <input type="text" maxLength="20" size="20" value={this.state.stream} onChange={this.commonChange} name="streamo"/><br/>*/}
                                                <div>
                                                    <b>Stream:</b><br/>
                                                    <select
                                                    className="form-control"
                                                    name="stream"
                                                    id="stream"
                                                    aria-label={this.state.stream}
                                                    onChange = {this.commonChange}
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
                                                    <b>Start Date:</b><br/>
                                                    <select
                                                    className="form-control"
                                                    name="startdate"
                                                    id="startdate"
                                                    aria-label={this.state.startdate}
                                                    onChange = {this.commonChange}
                                                    >
                                                    <option value="" selected="selected">{this.state.startdate}</option>
                                                    <option value="Sep 2015">Sep 2015</option>
                                                    <option value="Sep 2016">Sep 2016</option>
                                                    <option value="Sep 2017">Sep 2017</option>
                                                    <option value="Sep 2018">Sep 2018</option>
                                                    <option value="May 2019">May 2019</option>
                                                    <option value="Sep 2019">Sep 2019</option>
                                                    <option value="Sep 2020">Sep 2020</option>
                                                    </select>
                                                </div>
                                                <b>Area:</b><br/>
                                                <input type="text" maxLength="20" size="20" value={this.state.area} onChange={this.commonChange} name="area"/><br/>
                                                {/*<b>Internal/External:</b><br/>
                                                <input type="text" maxLength="20" size="20" value={this.state.internalexternal} onChange={this.commonChange} name="internalexternalo"/><br/>*/}
                                                <div>
                                                    <b>Internal/External:</b><br/>
                                                    <select
                                                    className="form-control"
                                                    name="internalexternal"
                                                    id="internalexternal"
                                                    aria-label={this.state.internalexternal}
                                                    onChange = {this.commonChange}
                                                    >
                                                    <option value="" selected="selected">{this.state.internalexternal}</option>
                                                    <option value="Internal">Internal</option>
                                                    <option value="External">External</option>
                                                    </select>
                                                </div>
                                                {/*<b>Location:</b><br/>
                                                <input type="text" maxLength="20" size="20" value={this.state.locationdescription} onChange={this.commonChange} name="locationdescriptiono"/><br/>*/}
                                                <div>
                                                    <b>Location:</b><br/>
                                                    <select
                                                    className="form-control"
                                                    name="locationdescription"
                                                    id="locationdescription"
                                                    aria-label={this.state.locationdescription}
                                                    onChange = {this.commonChange}
                                                    >
                                                    <option value="" selected="selected">{this.state.locationdescription}</option>
                                                    <option value="Swindon">Swindon</option>
                                                    <option value="London">London</option>
                                                    <option value="Bournemouth">Bournemouth</option>
                                                    <option value="Northampton">Northampton</option>
                                                    </select>
                                                </div>
                                                <b>Background: </b><br/>
                                                <textarea rows="4" cols="50" maxLength="200" size="200" value={this.state.background} onChange={this.commonChange} name="background"/><br/>
                                                <b>Main Text: </b><br/>
                                                <textarea rows="10" cols="50" maxLength="500" size="500" value={this.state.maintext} onChange={this.commonChange} name="maintext"/><br/>
                                                <b>Email: </b><br/>
                                                <input type="text" maxLength="50" size="50" value={this.state.email} onChange={this.commonChange} name="email"/><br/>
                                                <b>Facebook: </b><br/>
                                                <input type="text" maxLength="50" size="50" value={this.state.facebook} onChange={this.commonChange} name="facebook"/><br/>
                                                <b>LinkedIn: </b><br/>
                                                <input type="text" maxLength="50" size="50" value={this.state.linkedin} onChange={this.commonChange} name="linkedin"/><br/>
                                                <b>Twitter: </b><br/>
                                                <input type="text" maxLength="50" size="50" value={this.state.twitter} onChange={this.commonChange} name="twitter"/><br/>
                                                <b>Photo ID: </b><br/>
                                                <input type="text" maxLength="50" size="50" value={this.state.photo} onChange={this.commonChange} name="photo"/><br/>
                                                {/*<b>ID(leave text box blank): </b><br/>
                                                <input type="text" maxLength="50" size="50" value={this.state.id} onChange={this.commonChange} name="id"/><br/>*/}
                                                <button onClick={this.onSubmit}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>       
                                </div>
                            </div>
                            </form>
                                
                    </font>
                </div>
            );
        }
}
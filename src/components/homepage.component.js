import React from 'react';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Postdata extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        };
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {

        return (


            <div className="container">

                <div className="row">
                    <div className="col">
                        {this.renderRedirect()}


                        <h1><center>About the TDP</center></h1>
                        <br></br>
                        <center><p style={{ width: "1040px", borderStyle: "solid", borderColor: "black" }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lacinia quam, ac tristique nisl sollicitudin id. Suspendisse tempus, mauris ut maximus placerat, ex tortor dapibus felis, eget euismod leo ante in est. Mauris in enim finibus, mattis metus ut, hendrerit erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur convallis feugiat. Pellentesque fringilla augue vehicula, scelerisque neque nec, rhoncus tellus. Fusce sagittis magna non augue dapibus interdum. Quisque tellus nunc, fermentum ac tellus et, sagittis molestie diam. Proin et gravida nibh, eget ullamcorper purus. Donec tristique nisi nec tempus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam massa sit amet auctor imperdiet. Nam sed eleifend odio. Pellentesque nisl mi, dictum ac elit et, maximus commodo diam. Donec gravida urna eget imperdiet ultrices.
                                </p></center>
                        <div>
                            <br></br> <br></br>

                            <center><button className="btn btn-primary" type="submit" onclick='window.location.replace("https://stackoverflow.com")'>
                                <b>TDP Case Studies</b>
                            </button></center>
                            <br></br> <br></br>

                            <h2><center>Manager Comments</center></h2>
                        </div>

                        <div className="container">
                            <div className="row m-2">


                                <div class="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="https://cwind.global/wp-content/uploads/2017/04/Head-and-shoulder-silhouette.jpg" style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px" }} class="card-img" alt="Image of Manager" />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title"><b>Mark Bates</b></h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lacinia quam, ac tristique nisl sollicitudin id. Suspendisse tempus, mauris ut maximus placerat, ex tortor dapibus felis, eget euismod leo ante in est. Mauris in enim finibus, mattis metus ut, hendrerit erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur convallis feugiat. Pellentesque fringilla augue vehicula, scelerisque neque nec</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="https://cwind.global/wp-content/uploads/2017/04/Head-and-shoulder-silhouette.jpg" style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px" }} class="card-img" alt="Image of Manager" />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title"><b>Rachel Henry</b></h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lacinia quam, ac tristique nisl sollicitudin id. Suspendisse tempus, mauris ut maximus placerat, ex tortor dapibus felis, eget euismod leo ante in est. Mauris in enim finibus, mattis metus ut, hendrerit erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur convallis feugiat. Pellentesque fringilla augue vehicula, scelerisque neque nec</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3" style={{ maxWidth: "1040px" }}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="https://cwind.global/wp-content/uploads/2017/04/Head-and-shoulder-silhouette.jpg" style={{ borderStyle: "solid", borderColor: "black", borderWidth: "1px" }} class="card-img" alt="Image of Manager" />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title"><b>Jessica Samm</b></h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lacinia quam, ac tristique nisl sollicitudin id. Suspendisse tempus, mauris ut maximus placerat, ex tortor dapibus felis, eget euismod leo ante in est. Mauris in enim finibus, mattis metus ut, hendrerit erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur convallis feugiat. Pellentesque fringilla augue vehicula, scelerisque neque nec</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        



                    </div>
                </div>
            </div>





        );

    }
}

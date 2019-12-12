import React from 'react';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './css/footer.css'
//import logoimage from '../images/logo.png'
//import {Navbar, Nav, NavItem } from 'react-bootstrap'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class Mine extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            LoginButton: "",
            LoginButton: "",
            stats: "",
            user: ""
        };
    }

    componentDidMount = () => {
        var show = "";
        var statsshow = "";
        var usershow = "";
        if (!(sessionStorage.getItem("username"))) {
            show = <a className="header-btn" href="/login"><span>Login</span></a>;
            console.log("not logged in");
        } else {
            show = <a className="header-btn" href="/logout"><span>Logout</span></a>;
            console.log("show");
            console.log("show");
            statsshow = <a className="header-btn header-home" href="/statistics" aria-label="Home" id="js-home"><span>Statistics</span></a>;
            usershow = <div className="header-btn header-home"><span>You are logged in as: {sessionStorage.getItem("username")}</span></div>;
            console.log("logged in");
        }
        this.setState({
            LoginButton: show,
            stats: statsshow,
            user: usershow
        }, () => { console.log(this.state.view); })



    }

    render() {
        return (
            <footer class="footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-6 text-center text-sm-left">
                        </div>
                       
                    </div>
                    <div class="footer-bottom">
                        <p><a href="https://www.nationwide.co.uk/" target="_blank" rel="noopener" aria-label="Link to Nationwide Building society website (opens in new window)">Nationwide Building Society</a> is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 106078. You can confirm our registration on the FCA’s website <a href="https://www.fca.org.uk/" target="_blank" aria-label="Finanical Conduct Authority website" rel="noopener">www.fca.org.uk</a> or by contacting the FCA on 0800 111 6768.</p>
                        <p>&copy; Nationwide - All Rights Reserved - Web App created by TDP CaseStudies Team</p>
                        <br></br>
                        
                    </div>
                </div>
            </footer>
            // <div>

            //     <header className="header" id="header">
            //     <div className="container">
            //     <div className="row">
            //     <div className="col-12">
            //         <a className="logo" href="/"><img src={logoimage} className="img-fluid" alt="Nationwide Building Society" width="130" height="52"></img>
            //         </a>
            //         <div style={{ float: "right" }}>
            //             {this.state.user}
            //             <a className="header-btn header-home" href="/" aria-label="Home" id="js-home">
            //                 <span>Home</span>   
            //             </a>
            //             {this.state.stats}
            //             <a className="header-btn header-home" href="/viewprofiles" aria-label="Home" id="js-home">
            //                 <span>TDP Profiles</span>
            //             </a>
            //             {this.state.LoginButton}

            //         </div >
            //     </div>

            //     </div>
            //     </div>

            //     </header>

            // </div>






        );
    }
};
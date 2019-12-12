import React from 'react';
import Form from 'react-bootstrap/Form';
import LoginService from './services/login.service'
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
    constructor() {
        super();

        this.loginService = new LoginService();

        this.state = {
            redirect: false
        };
    }

    componentDidMount = () => {
        if((sessionStorage.getItem("username"))){
            window.location.replace(`/viewprofiles`);
        }
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


    onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit was called');

        let data = {
            "username": e.target.formUsername.value,
            "password": e.target.formPassword.value
        }

        this.loginService.login(data)
            .then(data => {
                console.log("Hey")
                console.log(data);
                if (data.username !== undefined) {
                    console.log('Success');

                    //localStorage.setItem('name', data.name);
                    sessionStorage.setItem('username', data.username);
                    //localStorage.setItem('role', data.role);

                    //console.log(localStorage.getItem('name') + ' Saved name');
                    //console.log(localStorage.getItem('username') + ' Saved user');
                    //console.log(localStorage.getItem('role') + ' Saved role');

                    //this.setRedirect();
                    window.location.replace(`/viewprofiles`)
                }
                else {
                    alert('Login Failed');
                }
            })

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {this.renderRedirect()}
                        <h1 className="m-2">Login Page</h1>
                        <div>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="input" placeholder="Username" />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <button className="btn btn-primary" type="submit">
                                    Submit
                                </button>
                            </Form><br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
//import ShowRecords from './components/showrecords.component.js';
//import SingleRecord from './components/singlerecordview.component.js';
import Header from './components/header.component.js';
import Footer from './components/footer.component.js';
//import SearchBar from './components/searchbar.component.js';
import Login from './components/login.component.js';
import Logout from './components/logout.component.js';
import CreateUser from './components/createuser.component.js';
import HomePage from './components/homepage.component.js';
//import AdminShowRecords from './components/adminshowrecords.component.js';
//import AdminSingleRecord from './components/adminsinglerecordview.component.js';
import ViewProfiles from './components/viewprofiles.component.js';
import ViewSingleProfile from './components/viewsingleprofile.component.js';
import Statistics from './components/statisticsview.component.js';
//import Upload2 from './components/upload.component.js/index.js';
//import { Redirect } from 'react-router-dom';

export default class Nationwide extends React.Component{
  render(){
    return (
      <div className="bg-light">
        <Header/>
        <Router >
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/viewprofiles" component={ViewProfiles}/>
                <Route exact path="/viewprofiles/fullview" component={ViewSingleProfile}/>
                <Route exact path="/login" component={Login}/>      
                <Route exact path="/logout" component={Logout}/>               
                <Route exact path="/newprofile" component={CreateUser}/>   
                <Route exact path="/statistics" component={Statistics}/>
            </div>
        </Router>
        <Footer/>
    </div>
    );
  }
}



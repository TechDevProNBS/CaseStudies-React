import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import ShowRecords from './components/showrecords.component.js';
import SingleRecord from './components/singlerecordview.component.js';
import Header from './components/header.component.js';
import SearchBar from './components/searchbar.component.js';
import HomePage from './components/homepage.component.js';
import AdminShowRecords from './components/adminshowrecords.component.js';
import AdminSingleRecord from './components/adminsinglerecordview.component.js';

export default class Nationwide extends React.Component{
  render(){
    return (
      <div className="bg-light">
        <Header/>
        <Router>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/showtable" component={ShowRecords}/>
                <Route exact path="/full/:var?" component={SingleRecord}/>
                <Route exact path="/search" component={SearchBar}/>
                <Route exact path="/admin" component={AdminShowRecords}/>
                <Route exact path="/adminfull/:var?" component={AdminSingleRecord}/>
            </div>
        </Router>
    </div>
    );
  }
}



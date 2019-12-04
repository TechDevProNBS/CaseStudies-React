import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ShowRecords from './components/showrecords.component.js';
import SingleRecord from './components/singlerecordview.component.js';
import Header from './components/header.component.js';


export default class Nationwide extends React.Component{
  render(){
    return (
      <div className="bg-light">
        <Header/>
        <Router>
            <div>
                <Route exact path="/" component={ShowRecords}/>
                <Route exact path="/full/:var?" component={SingleRecord}/>
            </div>
        </Router>
    </div>
    );
  }
}



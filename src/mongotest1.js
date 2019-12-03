import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Employee from './components/showrecords.component.js';
import Home from './components/mongohome.component.js';
import Login from './components/login.component.js';
import CreateUser from './components/createuser.component.js';
import Header from './components/header.component.js';
import MongoView from './components/mongoview.component.js';
import MongoRecord from './components/mongorecord.component.js';

class HomePage extends React.Component{
  render(){
      return <h1>This is the homepage</h1>
  }
}
class ShafeeqPage extends React.Component{
  render(){
      return <h1>This is Shafeeq's page</h1>
  }
}
class AboutUs extends React.Component{
  render(){
      return <h1>This is about us</h1>
  }
}

export default class Nationwide extends React.Component{

        state={recordsback:[
            {regno:1, name:'Shafeeq', marks:100},{regno:2, name:'Smith', marks:45},{regno:3, name:'Bob', marks:65},{regno:4, name:'Brad', marks:85},{regno:5, name:'Brawer', marks:105},{regno:6, name:'Time', marks:125},{regno:7, name:'Timmy', marks:135},{regno:8, name:'Tom', marks:72},{regno:9, name:'Pavlos', marks:140}
        ],records:[{regno:1, name:'Shafeeq', marks:100},{regno:2, name:'Smith', marks:45},{regno:3, name:'Bob', marks:65},{regno:4, name:'Brad', marks:85},{regno:5, name:'Brawer', marks:105},{regno:6, name:'Time', marks:125},{regno:7, name:'Timmy', marks:135},{regno:8, name:'Tom', marks:72},{regno:9, name:'Pavlos', marks:140}],regno:"",name:"",marks:""};

    initRecords=()=>{
        let values = this.state.recordsback
        this.setState({ 
            records: values})
    }
    initRecords2=()=>{
        let values = this.state.records
        this.setState({ 
            recordsback: values})
    }

    handleChange=(e)=>{
        let nam = e.target.name;
        let value = e.target.value;
        if(nam === "regno"){
            this.setState({ 
                regno: value})
        }
        if(nam === "name"){
            this.setState({ 
                name: value})
        }
        if(nam === "marks"){
            this.setState({ 
                marks: value})
        }
    }

    addValues=(e)=>{
        let regno1 = this.state.regno;
        let name1 = this.state.name;
        let marks1 = this.state.marks;
        let newdata = {regno:regno1, name:name1, marks:marks1}
        let newarray = this.state.recordsback;
        let blank = "";
        newarray.push(newdata);
        this.setState({
            recordsback : newarray, regno:blank, name:blank, marks:blank
        });
        this.initRecords();
    }
    deleteValues=(e)=>{
        let id = parseInt(e.target.id);
        console.log(id);
        let newArray = this.state.recordsback.filter(function(rec){
            if(parseInt(rec.regno) !== id){
                console.log(rec.regno);
                return rec;
            }
            else{
                return null;
            }
        })
        this.setState({
            records : newArray
        });
        this.setState({ 
            recordsback: newArray})

        //this.initRecords2();
    }
    searchFilter=(e)=>{
        //this.initRecords();
        let value = e.target.value.toLowerCase();
        let newRecords = this.state.recordsback.filter( rec=>
            rec.name.substring(0,value.length).toLowerCase()===value)
        this.setState({
            records: newRecords
        });
    }
    toPer=(mar)=>{
        return(((parseInt(mar))*100/150).toFixed(2));
    }
    toGrade=(mar)=>{
        let per = (((parseInt(mar))*100/150).toFixed(2));
        if(per>=parseInt(90)){
            return "A+";
        }
        else if(per>=parseInt(80) && per<parseInt(90)){
            return "A";
        }
        else if(per>=parseInt(70) && per<parseInt(80)){
            return "B";
        }
        else if(per>=parseInt(60) && per<parseInt(70)){
            return "C";
        }
        else if(per<parseInt(60)){
            return <font color="red">FAIL</font>;
        }
    }
    render(){
        return(
            <div className="bg-light">
                <Router>
                    <div>
                        <Route exact path="/showtable" component={MongoView}/>
                        <Route exact path="/" component={Home}/> 
                        <Route exact path="/addnew" component={MongoRecord}/> 
                    </div>
                </Router>
                
            </div>
        );
    }
}
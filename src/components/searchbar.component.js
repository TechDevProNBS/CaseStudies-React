import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import magnifying_glass from "./images/magnifying-glass.png";

import varA from "./images/A.jpg";
import varB from "./images/B.jfif";
import varC from "./images/C.jpg";
import varD from "./images/D.jfif";
import varE from "./images/E.jpg";
import varF from "./images/F.jpg";


export default class SearchBar extends React.Component {

    constructor(){
        super();
        this.state = {
           records: [
                {   Image: varA,
                    Name: 'Smythe Smith',
                    Role: "Software Engineer",
                    Year: 2019,
                    Stream: 'Software Engineering',
                    Location: 'Swindon',
                    Testimonial: "Great experience learning new technology and skills and meeting all the different people."
                },
                {   Image: varB,
                    Name: 'Sameena Syed',
                    Role: "DevOps Engineer",
                    Year: 2019,
                    Stream: 'DevOps',
                    Location: 'London',
                    Testimonial: "Found it very difficult but very rewarding, one of the best work places I've ever worked in."
                },
                {   Image: varC,
                    Name: 'Shahid Saleem',
                    Role: "Technical Analyst",
                    Year: 2017,
                    Stream: 'Industrial Placement',
                    Location: 'Bournemouth',
                    Testimonial: "I really liked the trainers and the support provided by Nationwide during my learning journey, It is a really good opportunity to take advatage of."
                },
                {   Image: varD,
                    Name: 'Samantha Star',
                    Role: "Risk Analyst",
                    Year: 2018,
                    Stream: 'DevOps',
                    Location: 'Swindon',
                    Testimonial: "This is an awesome company to work for, I love the benefits, the work culture and the commitment to my development."
                },
                {   Image: varE,
                    Name: 'Sukhdeep Singh',
                    Role: "Business Analyst",
                    Year: 2016,
                    Stream: 'Cyber Security',
                    Location: 'Northampton',
                    Testimonial: "I think the best thing about Nationwide is they really made me feel at home, it is a very diverse and inclusive company and the training thye provide is really good."
                },
                {   Image: varF,
                    Name: 'Sulayman Sarwar',
                    Role: "Data Engineer",
                    Year: 2019,
                    Stream: 'Software Engineering',
                    Location: 'Swindon',
                    Testimonial: "I started with no tech knowledge and I now I am an engineer with and I feel that my work is important and valued"
                }
            ],
        }
        this.filterbylocation = this.filterbylocation.bind(this);
        this.filterbyyear = this.filterbyyear.bind(this);
        this.filterbystream = this.filterbystream.bind(this);
        this.filterbyrole = this.filterbyrole.bind(this);
        this.state.rec2 = this.state.records;
    }
    filterbylocation() {
        let l = document.getElementById("filterbylocation").value;
        var results = this.state.records.filter( fil => (fil.Location == l || l == "" ))
        this.setState({
            rec2: results
        })
    }
    filterbystream() {
        let s = document.getElementById("filterbystream").value;
        var results = this.state.records.filter( fil => (fil.Stream == s || s == "" ))
        this.setState({
            rec2: results
        })
    }
    filterbyyear() {
        let y = document.getElementById("filterbyyear").value;
        var results = this.state.records.filter( fil => (fil.Year == y || y == "" ))
        this.setState({
            rec2: results
        })
    }
    filterbyrole() {
        let r = document.getElementById("filterbyrole").value;
        var results = this.state.records.filter( fil => (fil.Role == r || r == "" ))
        this.setState({
            rec2: results
        })
    }
    filterbyanything=()=> {
            let searchingfor=document.getElementById("filterbysearch").value.toUpperCase();
            var results = this.state.records.filter( fil => ( fil.Name.toUpperCase().indexOf(searchingfor) != -1 ||
                                                              fil.Role.toUpperCase().indexOf(searchingfor)!=-1 ||  
                                                              fil.Location.toUpperCase().indexOf(searchingfor)!=-1 ||
                                                              fil.Testimonial.toUpperCase().indexOf(searchingfor)!=-1 ||
                                                              fil.Stream.toUpperCase().indexOf(searchingfor)!=-1 ))
            this.setState({
                rec2: results
            })
    }
  render() {
    return (
      <div>
        <div class="casestudy-search">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <form
                  method="get"
                  id="casestudies-search"
                  aria-label="Nationwide casestudies search"
                  role="search"
                >
                  <div class="form-group main-search-field">
                    <label class="sr-only" for="main-search-field">
                      Search Keywords
                    </label>
                    <span class="input-group m-2">
                      <input
                        id="filterbysearch"
                        style={{ width: "90%", marginRight: "2px" }}
                        type="search"
                        name="search"
                        placeholder="Search Case Studies"
                        class="form-control"
                        maxlength="100"
                        autocomplete="off"
                        minlength="2"
                        onChange= {this.filterbyanything}
                      />
                      <button type="button" onClick={this.filterbyanything}>
                        <img src={magnifying_glass} width="20" height="20" />
                      </button>
                    </span>
                  </div>
                  <div class="collapse show" id="toggle-search">
                    <p>Filters</p>
                    <div class="row clear">
                      <div class="form-group col-md-6 col-lg-3">
                        <label for="location">Location</label>
                        <select
                          class="form-control"
                          name="location"
                          id="filterbylocation"
                          aria-label="Select location"
                          onChange = {this.filterbylocation}
                        >
                          <option value="" selected="selected">Select Location</option>
                          <option value="Swindon">Swindon</option>
                          <option value="London">London</option>
                          <option value="Bournemouth">Bournemouth</option>
                          <option value="Northampton">Northampton</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6 col-lg-2">
                        <label for="Year">Year</label>
                        <select
                          class="form-control"
                          name="year"
                          id="filterbyyear"
                          aria-label="Select the Year"
                          title="Search Year"
                          onChange = {this.filterbyyear}
                        >
                          <option value="" selected="selected">Select Year</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>
                          <option value="2016">2016</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6 col-lg-3">
                        <label for="stream">Stream</label>
                        <select
                          class="form-control"
                          name="stream"
                          id="filterbystream"
                          aria-label="Select Stream"
                          onChange = {this.filterbystream}
                        >
                          <option value="" selected="selected">Select Stream</option>
                          <option value="Software Engineering">Software Engineering</option>
                          <option value="DevOps">DevOps</option>
                          <option value="Cyber Security">Cyber Security</option>
                          <option value="Industrial Placement">Industrial Placement</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6 col-lg-3">
                        <label for="contract-type">Roles</label>
                        <select
                          class="form-control"
                          name="contract"
                          id="filterbyrole"
                          aria-label="Select contract type"
                          onChange = {this.filterbyrole}
                          >
                          <option value="" selected="selected">Search Roles</option>
                          <option value="Software Engineer">Software Engineer</option>
                          <option value="DevOps Engineer">DevOps Engineer</option>
                          <option value="Technical Analyst">Technical Analyst</option>
                          <option value="Business Analyst">Business Analyst</option>
                          <option value="Risk Analyst">Risk Analyst</option>
                          <option value="Data Engineer">Data Engineer</option>
                        </select>
                      </div>
                    </div>
                    <input type="hidden" name="pagesize" value="50"></input>
                  </div>
                </form>
                <br></br>
                <center>
                <table>
                    <tr>
                        <th style={{width:"80px"}}><center> Image </center></th>
                        <th style={{width:"115px"}}><center> Name </center></th>
                        <th style={{width:"90px"}}><center> Role </center></th>
                        <th style={{width:"90px"}}><center> Stream </center></th>
                        <th style={{width:"80px"}}><center> Location </center></th>
                        <th style={{width:"70px"}}><center> Year </center></th>
                        <th style={{width:"600px"}}><center> Testimonial </center></th>
                        <th></th>
                    </tr>
                     {this.state.rec2.map( rec=> 
                        <tr>
                            <td><center><img src={rec.Image} style={{width:"80px", height:"100px"}}></img></center></td>
                            <td><center> {rec.Name} </center></td>
                            <td><center> {rec.Role} </center></td>
                            <td><center> {rec.Stream} </center></td>
                            <td><center> {rec.Location} </center></td>
                            <td><center> {rec.Year} </center></td>
                            <td> {rec.Testimonial.substring(0,100)+"..."} </td>
                            </tr>
                        )}
                 </table>
                </center>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

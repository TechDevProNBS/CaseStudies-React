import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import magnifying_glass from "./images/magnifying-glass.png";

export default class SearchBar extends React.Component {

    constructor(){
        super();
        this.state = {
           records: [
                {   Image: 'A',
                    Name: 'Smythe Smith',
                    Role: "Software Developer",
                    Year: 2019,
                    Stream: 'Software Engineering',
                    Location: 'Swindon',
                    Testimonial: "Greate experience learning new technology and skills and meeting all the different people"
                },
                {   Image: 'B',
                    Name: 'Sameena Syed',
                    Role: "Devops Developer",
                    Year: 2019,
                    Stream: 'DevOps',
                    Location: 'London',
                    Testimonial: "Greate experience learning new technology and skills and meeting all the different people"
                },
                {   Image: 'C',
                    Name: 'Shahid Saleem',
                    Role: "Software Developer",
                    Year: 2017,
                    Stream: 'Software Engineering',
                    Location: 'Swindon',
                    Testimonial: "Greate experience learning new technology and skills and meeting all the different people"
                },
                {   Image: 'D',
                    Name: 'Samantha Star',
                    Role: "Risk Analyst",
                    Year: 2018,
                    Stream: 'DevOps',
                    Location: 'Swindon',
                    Testimonial: "Greate experience learning new technology and skills and meeting all the different people"
                },
                {   Image: 'E',
                    Name: 'Sukhdeep Singh',
                    Role: "Software Developer",
                    Year: 2016,
                    Stream: 'Software Engineering',
                    Location: 'Swindon',
                    Testimonial: "Greate experience learning new technology and skills and meeting all the different people"
                },
                {   Image: 'F',
                    Name: 'ASulayman Sarwar',
                    Role: "Software Developer",
                    Year: 2019,
                    Stream: 'Software Engineering',
                    Location: 'Swindon',
                    Testimonial: "Greate experience learning new technology and skills and meeting all the different people"
                }
            ],
        }
        this.filterbylocation = this.filterbylocation.bind(this);
        this.filterbyyear = this.filterbyyear.bind(this);
        this.filterbystream = this.filterbystream.bind(this);
        this.filterbyrole = this.filterbyrole.bind(this);
       
        this.state.rec2 = this.state.records;
    }

    filterbylocation(l) {
        l = document.getElementById("filterbylocation").value;
        var results = this.state.records.filter( fil => (fil.Location == l || l == "" ))
        this.setState({
            rec2: results
        })
    }

    filterbystream(s) {
        s = document.getElementById("filterbystream").value.toUpperCase();
        var results = this.state.records.filter( fil => (fil.Stream == s || s == "" ))
        this.setState({
            rec2: results
        })
    }

    filterbyyear() {
        let y = document.getElementById("filterbyyear").value;
        var results = this.state.records.filter( fil => (fil.Year >= y || y == "" ))
        this.setState({
            rec2: results
        })
    }

    filterbyrole(r) {
        r = document.getElementById("filterbyrole").value;
        var results = this.state.records.filter( fil => (fil.Role == r || r == "" ))
        this.setState({
            rec2: results
        })
    }

    filterbyanyting=()=> {
            let searchingfor=document.getElementById("filterbysearch").value
         //   alert(searchingfor)
            var results = this.state.records.filter( fil => (fil.Name.indexOf(searchingfor) != -1 ||  fil.Role.indexOf(searchingfor)!=-1 ||  fil.Location.indexOf(searchingfor)!=-1 ||  fil.Stream.indexOf(searchingfor)!=-1 ))
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
                  action="/jobs/#results"
                  id="job-search"
                  aria-label="Nationwide job search"
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
                      />
                      <button type="button" onClick={this.filterbyanyting}>
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
                          <option value="-1" selected="selected">
                            Select Location
                          </option>
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
                          <option value="-1" selected="selected">
                            Select Year
                          </option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>
                          <option value="2016">2016</option>
                          <option value="2015">2015</option>
                          <option value="2014">2014</option>
                          <option value="2013">2013</option>
                          <option value="2012">2012</option>
                          <option value="2011">2011</option>
                          <option value="2010">2010</option>
                          <option value="2009">2009</option>
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
                          <option value="-1" selected="selected">
                            Select Stream
                          </option>
                          <option value="Software Engineering">
                            Software Engineering
                          </option>
                          <option value="DevOps Engineering">
                            DevOps Engineering
                          </option>
                          <option value="Cyber Security">Cyber Security</option>
                          <option value="Data and Analytics">
                            Data and Analytics
                          </option>
                          <option value="Industrial Placement">
                            Industrial Placement
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6 col-lg-3">
                        <label for="contract-type">Roles</label>
                        <select
                          class="form-control"
                          name="contract"
                          id="filterbystream"
                          aria-label="Select contract type"
                          onChange = {this.filterbyrole}
                        >
                          <option value="-1" selected="selected">
                            Search Roles
                          </option>
                          <option value="Software Engineer">
                            Software Engineer
                          </option>
                          <option value="DevOps Engineer">
                            DevOps Engineer
                          </option>
                          <option value="Technical Analyst">
                            Technical Analyst
                          </option>
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
                        <th> Image</th>
                        <th> Name</th>
                        <th> Role </th>
                        <th> Stream </th>
                        <th> Location </th>
                        <th> Year </th>
                        <th> Testimonial</th>
                        <th></th>
                    </tr>
                     {
                    this.state.rec2.map( rec=> 
                        <tr>
                            <td><center> {rec.Image} </center></td>
                            <td><center> {rec.Name} </center></td>
                            <td><center> {rec.Role} </center></td>
                            <td><center> {rec.Stream} </center></td>
                            <td><center> {rec.Location} </center></td>
                            <td><center> {rec.Year} </center></td>
                            <td><center> {rec.Testimonial} </center></td>
                            </tr>
                        )
                    }
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

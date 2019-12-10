import React from 'react';
import './css/showrecords.css';
//import useState from "react";
//import setShow from "react";
//import show from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import FullProfile from './singlerecordview.component.js';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom';
import SearchBar from './searchbar.component.js';

export default class Mine extends React.Component {
  constructor() {
    super();

    this.state = {
      employee: [],
      data: [],
      dataprefilter: [],
      location: "",
      year: "",
      stream: "",
      internal: "",
      search: ""
    };
  }

  componentDidMount = () => {
    fetch(`http://localhost:9011/record`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          employee: data
        }, () => { this.refreshData() })
      })
  }

  refreshFilter = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => { this.refreshData() });

  }

  refreshData = (event) => {
    console.log(this.state.search);
    console.log("got here");
    var dataprefilter = this.state.employee;
    var datafiltered = [];

    if (this.state.search != "") {
      var searchingfor = this.state.search.toUpperCase();
      datafiltered = dataprefilter.filter(fil => (fil.name.toUpperCase().indexOf(searchingfor) !== -1 ||
        fil.districtdescription.toUpperCase().indexOf(searchingfor) !== -1 ||
        fil.locationdescription.toUpperCase().indexOf(searchingfor) !== -1 ||
        fil.maintext.toUpperCase().indexOf(searchingfor) !== -1 ||
        fil.startdate.toUpperCase().indexOf(searchingfor) !== -1 ||
        fil.background.toUpperCase().indexOf(searchingfor) !== -1 ||
        fil.stream.toUpperCase().indexOf(searchingfor) !== -1))
      dataprefilter = datafiltered;
      console.log("filter0:");
      console.log(dataprefilter);
    }
    if (this.state.location != "") {
      datafiltered = dataprefilter.filter(d => d.locationdescription == this.state.location);
      dataprefilter = datafiltered;
      console.log("filter1:");
      console.log(dataprefilter);
    }
    if (this.state.year != "") {
      datafiltered = dataprefilter.filter(d => d.startdate == this.state.year);
      // console.log(d.startdate + this.state.year);
      dataprefilter = datafiltered;
      console.log("filter2:");
      console.log(dataprefilter);
    }
    if (this.state.stream != "") {
      datafiltered = dataprefilter.filter(d => d.stream == this.state.stream);
      dataprefilter = datafiltered;
      console.log("filter3:");
      console.log(dataprefilter);
    }
    if (this.state.internal != "") {
      datafiltered = dataprefilter.filter(d => d.internalexternal == this.state.internal);
      dataprefilter = datafiltered;
      console.log("filter4:");
      console.log(dataprefilter);
    }
    console.log("prefiltereddata:");
    console.log(dataprefilter);
    this.setState({
      data: dataprefilter
    }, () => {
      console.log("data:");
      console.log(this.state.data);
    });
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
      console.log(this.props.value + this.props.key + this.props.id)
      let url = '/viewprofiles/fullview/' + this.state.id;
      return <Redirect to={url} />
    }
  }

  render() {
    console.log(this.state.employee);
    return (
      <div>
        {/*<SearchBar/>*/}
        <div className="searchbar col-lg-12 col-xl-12">
        <div className="cms-content header-content">
            <h1 className="hero-heading">TDP Profiles</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group main-search-field">
                <label className="sr-only" htmlFor="main-search-field">
                  Search Keywords
                                    </label>
                <span className="input-group">
                  <input
                    id="filterbysearch"
                    style={{ width: "90%", marginRight: "2px" }}
                    type="search"
                    name="search"
                    placeholder="Search Profiles"
                    className="form-control"
                    maxLength="100"
                    autoComplete="off"
                    onChange={this.refreshFilter}
                  />
                </span>
              </div>

              <div className="container">
                {/*<p>Filters</p>*/}
                <div className="row">
                  <div className="form-group col-md-6 col-lg-3">
                    <label htmlFor="location">Location</label>
                    <select
                      className="form-control"
                      name="location"
                      id="filterbylocation"
                      aria-label="Select location"
                      onChange={this.refreshFilter}
                    >
                      <option value="" selected="selected">Any Location</option>
                      <option value="Swindon">Swindon</option>
                      <option value="London">London</option>
                      <option value="Bournemouth">Bournemouth</option>
                      <option value="Northampton">Northampton</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6 col-lg-3">
                    <label htmlFor="Year">Start Date</label>
                    <select
                      className="form-control"
                      name="year"
                      id="filterbyyear"
                      aria-label="Select the Year"
                      title="Search Year"
                      onChange={this.refreshFilter}
                    >
                      <option value="" selected="selected">Any Start Date</option>
                      <option value="Sep 2015">Sep 2015</option>
                      <option value="Sep 2016">Sep 2016</option>
                      <option value="Sep 2017">Sep 2017</option>
                      <option value="Sep 2018">Sep 2018</option>
                      <option value="May 2019">May 2019</option>
                      <option value="Sep 2019">Sep 2019</option>
                      <option value="Sep 2020">Sep 2020</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6 col-lg-3">
                    <label htmlFor="stream">Stream</label>
                    <select
                      className="form-control"
                      name="stream"
                      id="filterbystream"
                      aria-label="Select Stream"
                      onChange={this.refreshFilter}
                    >
                      <option value="" selected="selected">Any Stream</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Industrial Placement">Industrial Placement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6 col-lg-3">
                    <label htmlFor="contract-type">Internal/External</label>
                    <select
                      className="form-control"
                      name="internal"
                      id="filterbyinternal"
                      aria-label="Select contract type"
                      onChange={this.refreshFilter}
                    >
                      <option value="" selected="selected">Select Option</option>
                      <option value="Internal">Internal</option>
                      <option value="External">External</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="hidden" name="pagesize" value="50"></input>
        </div>

        {/* <div className="container">
          <div className="cms-content header-content">
            <h1 className="h2">TDP Profiles</h1>
          </div>
        </div> */}

        <font face="NBS">
          {this.state.data.map(data => {
            return (
              <div className="container" key={data.id}>
                <div className="row2">
                  <div className="card mb-3 col-lg-12 col-xl-12" style={{ maxWidth: "1040px" }}>
                    <div className="row">
                      <div className="col-md-4" style={{ maxWidth: "250px" }}>
                        <img src={"http://127.0.0.1:8080/" + data.photo} className="card-img" alt={data.name} />
                      </div>
                      <div className="col-md-8 col-xl-9">
                        <div className="card-body">
                          <h5 className="card-title"><b>{data.name}</b></h5>
                          <div style={{}} className="text"><b>Programme:</b> {data.programme}</div>
                          <div style={{}} className="text"><b>Current Role:</b> {data.districtdescription}</div>
                          <div style={{}} className="text"><b>Stream:</b> {data.stream}</div>
                          <div style={{}} className="text"><b>Start Date:</b> {data.startdate}</div>
                          <p className="text">
                            <b>Background: </b>{data.background}<span></span></p>
                          <p className="text">
                            {data.maintext.substring(0, 250)}...<br />
                          </p>
                          {this.renderRedirect()}
                          <button onClick={() => { this.setState({ id: data.id }); console.log("here" + data.id); this.setRedirect() }} id={data.id} class="btn btn-primary" >View Full Profile</button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </font>
      </div>
    );
  }
}
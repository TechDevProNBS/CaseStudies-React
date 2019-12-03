import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

export default class SearchBar extends React.Component {
    render() {
        return (
   <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>                 
<div>                 
<div class="casestudy-search">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form method="get" action="/jobs/#results" id="job-search" aria-label="Nationwide job search" role="search">
                    <div class="form-group main-search-field">
                        <label class="sr-only" for="main-search-field">Search Keywords</label>
                        <span class="input-group">
                            <input id="main-search-field" style={{width: "90%", marginRight:"2px"}} type="search" name="search" placeholder="Search Case Studies"
                                class="form-control" maxlength="100" autocomplete="off" minlength="2"/>
                            <button type="button" class="btn btn-default btn-sm" style= {{height: "34px"}}>
                                <span class="glyphicon glyphicon-search"></span> 
                            </button>
                        </span>
                    </div>
                    <div class="collapse show" id="toggle-search">
                        <p>Filters</p>
                        <div class="row clear">
                            <div class="form-group col-md-6 col-lg-3">
                                <label for="location">Stream</label>
                                <select class="form-control" name="location" id="location" aria-label="Select location">
                                    <option value="-1" selected="selected">Select Location</option>
                                    <option value="Location">London</option>
                                    <option value="Swindon">Swindon</option>
                                    <option value="Bournemouth">Bournemouth</option>
                                    <option value="Northampton">Northampton</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-lg-2">
                                <label for="Year">Year</label>
                                <select class="form-control" name="year" id="year" aria-label="Select the Year"
                                    title="Search Year">
                                    <option value="2009">2009</option>
                                    <option value="2010">2010</option>
                                    <option value="2011">2011</option>
                                    <option value="2012">2012</option>
                                    <option value="2013">2013</option>
                                    <option value="2014">2014</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="-1" selected="selected">Select Year</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-lg-3">
                                <label for="stream">Stream</label>
                                <select class="form-control" name="stream" id="stream" aria-label="Select Stream">
                                    <option value="-1" selected="selected">Select Stream</option>
                                    <option value="">Software Engineering</option>
                                    <option value="">DevOps Engineering</option>
                                    <option value="">Cyber Security</option>
                                    <option value="">Data and Analytics</option>
                                    <option value="">Industrial Placement</option>
                                    <option value="">Other</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-lg-3">
                                <label for="contract-type">Roles</label>
                                <select class="form-control" name="contract" id="contract-type"
                                    aria-label="Select contract type">
                                    <option value="-1" selected="selected">Search Roles</option>
                                    <option value="Softwareeng">Software Engineer</option>
                                    <option value="DevOpseng">DevOps Engineer</option>
                                    <option value="Technicalanalyst">Technical Analyst</option>
                                    <option value="DataEng">Data Engineer</option>
                                </select>
                            </div>
                        </div>
                        <input type="hidden" name="pagesize" value="50"></input>
                        </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
</html>                      
        )
    }
};

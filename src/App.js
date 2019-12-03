import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header.component.js';
import SearchBar from './components/searchbar.component.js';


class HomePage extends React.Component{
  render(){
      return <h1>This is the homepage</h1>
  }
}

export default class Nationwide extends React.Component{
      render(){
        return(
            <div className="bg-light">
                <Router>
                    <div>
                        <Route exact path="/" component={Header}/>
                        <Route exact path="/search" component={SearchBar}/>
                    </div>
                </Router>
                
            </div>
        );
    }
}
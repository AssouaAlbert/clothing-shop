import React, { Component } from 'react';
import HomePage from './pages/homepage/hompage.component';
import {
  Route, Switch, BrowserRouter as Router
} from 'react-router-dom'
import './pages/homepage/hompage.style.scss';
import './App.css';

const HatsPage = () => {
  return (<div>
    <h1>Home Page</h1>
  </div>)
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div>'
        <Router>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
        </Switch>
        </Router>
      </div>   
    );
  }
}

export default App;

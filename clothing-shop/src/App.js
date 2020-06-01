import React, { Component } from 'react';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shoppaage/shoppage.component';
import {
  Route, Switch, BrowserRouter as Router
} from 'react-router-dom'
import './pages/homepage/hompage.style.scss';
import './App.css';

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
        <Route path='/shop' component={ShopPage}/>
        </Switch>
        </Router>
      </div>   
    );
  }
}

export default App;

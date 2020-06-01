import React, { Component } from 'react';
import HomePage from './components/homepage/homepage.component';
import './components/homepage/hompage.style.scss';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div>
        <HomePage/>
      </div>   
    );
  }
}

export default App;

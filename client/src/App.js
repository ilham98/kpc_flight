import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import User from './pages/users/User'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" component={ Home } exact></Route>   
            <Route path="/login" component={ Login }></Route>  
            <Route path="/users" component={ User }></Route>            

          </div>
        </div>
      </Router>
    );
  }
}

export default App;

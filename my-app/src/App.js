import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'

class App extends Component {
  fromHome = () => { 
    document.getElementById("header").style.flex = 0;
    document.getElementById("appContent").style.flex = 1;
  }

  toHome = () => {
    document.getElementById("header").style.flex = 1;
    document.getElementById("appContent").style.flex = 0;
  }
  
  render() {
    return (
      <Router>
        <div id="appContainer">

          <div id="header">
            <h1>LINA HABAZI</h1>
            <h2>artist&nbsp;&nbsp;•&nbsp;&nbsp;developer&nbsp;&nbsp;•&nbsp;&nbsp;learner</h2>
          </div>

          <nav>
            <ul>
              <li><Link to="/" id="navLink" onClick={this.toHome}>HOME</Link></li>
              <li><Link to="/about" id="navLink" onClick={this.fromHome}>ABOUT</Link></li>
              <li><Link to="/portfolio" id="navLink" onClick={this.fromHome}>PORTFOLIO</Link></li>
              <li><Link to="/contact" id="navLink" onClick={this.fromHome}>CONTACT</Link></li>
              <li><a href="https://instagram.com/ni3lina" target="_blank" id="navLink">INSTAGRAM</a></li>
              <li><a href="https://github.com/linahabazi" target="_blank" id="navLink">GITHUB</a></li>
            </ul>
          </nav>

          <div id="appContent">
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              {/* <Route exact path="/" component={Home} /> */}
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </AnimatedSwitch>
          </div>
        </div>
      </Router>
    )
  }
}


export default App
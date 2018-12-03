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
  prevRoute = "homeLink";

  componentDidMount() { 
    document.getElementById(this.prevRoute).style.borderBottomWidth = "3px";
  }

  // toHome = () => { 
  //   document.getElementById("header").style.flex = 1;
  //   document.getElementById("appContent").style.flex = 0;
  //   document.getElementById("homeLink").style.borderBottom = "3px solid black";
  //   // document.getElementById("homeLink").style.backgroundColor = "red";
  // }

  // toAbout = () => {
  //   document.getElementById("header").style.flex = 0;
  //   document.getElementById("appContent").style.flex = 1;
  //   document.getElementById("aboutLink").style.borderBottom = "3px solid black";

  // }

  navigate(path) { 
    var header = document.getElementById("header");
    var appContent = document.getElementById("appContent");
    if (path == "homeLink") {
      header.style.flex = 1;
      appContent.style.flex = 0;
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    } else { 
      header.style.flex = 0;
      appContent.style.flex = 1;
    }
    if (path == "aboutLink") {
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    } else if (path == "portfolioLink") {
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    } else if (path == "contactLink") {
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    }
    this.prevRoute = path;
  }


  
  render() {
    return (
      <Router>
        <div id="appContainer">

          <div id="header">
            <Link to="/" id="headerLink" onClick={() => this.navigate("homeLink")}><h1>LINA HABAZI</h1></Link>
            <h2>artist&nbsp;&nbsp;•&nbsp;&nbsp;developer&nbsp;&nbsp;•&nbsp;&nbsp;learner</h2>
          </div>

          <nav>
            <ul>
              <li><Link to="/" class="navLink" id="homeLink" onClick={()=>this.navigate("homeLink")}>HOME</Link></li>
              <li><Link to="/about" class="navLink" id="aboutLink" onClick={()=>this.navigate("aboutLink")}>ABOUT</Link></li>
              <li><Link to="/portfolio" class="navLink" id="portfolioLink" onClick={() => this.navigate("portfolioLink")}>PORTFOLIO</Link></li>
              <li><Link to="/contact" class="navLink" id="contactLink" onClick={() => this.navigate("contactLink")}>CONTACT</Link></li>
              <li><a href="https://instagram.com/ni3lina" target="_blank" class="navLink" id="instaLink">INSTAGRAM</a></li>
              <li><a href="https://github.com/linahabazi" target="_blank" class="navLink" id="githubLink">GITHUB</a></li>
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